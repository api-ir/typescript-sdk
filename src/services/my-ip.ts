/**
 * API.IR TypeScript SDK — وب سرویس دریافت IP برنامه (کلاینت)
 * سرویس MyIP: دریافت IP برنامه (کلاینت)
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/MyIP";

/** مهلت پیش‌فرض این سرویس به ثانیه — بدون ورودی، استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * وب سرویس دریافت IP برنامه (کلاینت)
 *
 * شناسه IP شما را بر می گرداند و برای بررسی اتصال به اینترنت و تنظیمات دیگر کاربرد دارد و یا محدودیت IP روی کلید ها کاربرد دارد
 *
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — بدون ورودی، استعلام سبک
 * @returns مقدار data از نوع string است
 */
export async function myIp(timeout: number = DEFAULT_TIMEOUT): Promise<ApiResult<string>> {
  return request<string>(URL, {}, timeout);
}
