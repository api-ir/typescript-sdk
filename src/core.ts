/**
 * API.IR TypeScript SDK — هسته
 * تنها فایلی که درخواست HTTP ارسال می‌کند
 *
 * @see https://api.ir
 */

import { Agent } from "undici";
import { config } from "./config.js";

/** قالب یکسان خروجی همه‌ی سرویس‌های api.ir */
export interface ApiResult<T> {
  /** فقط وقتی true است که سرویس هم true برگردانده باشد */
  success: boolean;
  /** فیلد code سرویس */
  code: number;
  /** در حالت خطا هرگز null نیست */
  message: string | null;
  /** فیلد data سرویس */
  data: T | null;
}

/** پیام پیش‌فرض خطا وقتی سرویس پیامی نداده باشد */
const DEFAULT_MESSAGE = "درخواست ناموفق بود.";

/** نوع dispatcher ای که fetch بومی Node می‌پذیرد */
type FetchDispatcher = NonNullable<RequestInit["dispatcher"]>;

/**
 * وقتی sslVerify خاموش است، یک Agent از undici بدون بررسی گواهی ساخته می‌شود.
 * این Agent فقط یک بار و در سطح ماژول ساخته می‌شود و روی همه‌ی درخواست‌ها
 * به یک شکل اثر می‌گذارد. این گزینه فقط در Node کار می‌کند و امنیت ارتباط را
 * از بین می‌برد؛ فقط برای محیط‌های داخلی با گواهی مشکل‌دار و به‌صورت موقت.
 *
 * تبدیل نوع: تایپ‌های پکیج undici و تایپ‌های fetch بومی Node از دو نسخه‌ی
 * جداگانه‌ی undici می‌آیند و جزئیاتشان کمی فرق دارد؛ در زمان اجرا یک رابط هستند.
 */
const dispatcher: FetchDispatcher | undefined = config.sslVerify
  ? undefined
  : (new Agent({ connect: { rejectUnauthorized: false } }) as unknown as FetchDispatcher);

/** ساخت خروجی خطا با همان ساختار پاسخ موفق */
export function apiError<T>(message: string, code = 0): ApiResult<T> {
  return { success: false, code, message, data: null };
}

/**
 * ارسال درخواست به وب‌سرویس‌های api.ir
 *
 * @param url آدرس کامل و ثابت سرویس
 * @param body بدنه‌ی درخواست
 * @param timeout مهلت پاسخ به ثانیه — از سرویس می‌آید؛ اگر داده نشد مقدار سراسری
 * @returns همیشه یک ApiResult کامل؛ این Promise هرگز reject نمی‌شود
 */
export async function request<T>(
  url: string,
  body: unknown,
  timeout: number = config.timeout,
): Promise<ApiResult<T>> {
  // ۱) نمونه‌ی خروجی — قبل از try ساخته می‌شود و در هر شرایطی همین برگردانده می‌شود
  const result = apiError<T>(DEFAULT_MESSAGE);

  try {
    // ۲) ارتباط با سرور
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${config.token}`,
      },
      body: JSON.stringify(body),
      // timeout به ثانیه است (مثل همه‌ی SDK های api.ir)؛ فقط همین‌جا به میلی‌ثانیه تبدیل می‌شود
      signal: AbortSignal.timeout(timeout * 1000),
      dispatcher,
    });

    // پاسخ سرور، با هر کد HTTP، به قالب استاندارد تبدیل می‌شود
    // JSON نامعتبر یا خارج از قالب → خطا → catch
    const envelope: unknown = await response.json();

    if (envelope === null || typeof envelope !== "object" || Array.isArray(envelope)) {
      throw new Error("پاسخ سرور قالب استاندارد ندارد.");
    }

    const raw = envelope as Record<string, unknown>;

    const success = raw.success === true;
    // طبق OpenAPI فیلد code می‌تواند عدد یا رشته‌ی عددی باشد
    const code =
      typeof raw.code === "number"
        ? raw.code
        : typeof raw.code === "string" && /^-?\d+$/.test(raw.code)
          ? Number(raw.code)
          : 0;
    const data = (raw.data ?? null) as T | null;
    let message =
      typeof raw.message === "string" && raw.message !== "" ? raw.message : null;

    // کاربر هرگز نباید خطای بی‌پیام ببیند
    if (!success && message === null) {
      message = DEFAULT_MESSAGE;
    }

    // پر کردن result — آخرین دستور داخل try
    result.success = success;
    result.code = code;
    result.message = message;
    result.data = data;
  } catch (err) {
    // ۳) هر خطایی (اتصال، مهلت پاسخ، JSON نامعتبر) — فقط message پر می‌شود
    const text = err instanceof Error ? err.message : String(err);
    result.message = text !== "" ? text : DEFAULT_MESSAGE;
  }

  // ۴) تنها نقطه‌ی بازگشت
  return result;
}
