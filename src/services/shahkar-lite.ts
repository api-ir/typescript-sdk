/**
 * API.IR TypeScript SDK — احراز هویت شاهکار Lite
 * سرویس ShahkarLite: نسخه سبک شاهکار مناسب کسب‌وکارهای کوچک
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/ShahkarLite";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * احراز هویت شاهکار Lite
 *
 * این وب سرویس نسخه Lite وب سرویس شاهکار است. شاهکار تطبیق کد ملی با شماره موبایل را استعلام می کند. تفاوت آن به نسخه اصلی شاهکار در قیمت و نوع ارسال دیتا است. در نسخه اصلی شاهکار دیتا به صورت رمز شده استعلام می گردد. این نسخه مناسب کسب و کار های کوچک می باشد.
 *
 * @param nationalCode کد ملی
 * @param mobile موبایل با فرمت 09120001111
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function shahkarLite(
  nationalCode: string,
  mobile: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { nationalCode, mobile }, timeout);
}
