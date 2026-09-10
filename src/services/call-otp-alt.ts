/**
 * API.IR TypeScript SDK — وب سرویس OTP تلفنی alt
 * سرویس CallOTPalt: OTP تلفنی با شبکه مجزا به‌عنوان پشتیبان CallOTP
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CallOTPalt";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * وب سرویس OTP تلفنی alt
 *
 * تماس با قابلیت هایی که دارد به عنوان گزینه پشتیبان برای پیامک نیز می باشد. سرویس CallOTPalt با شبکه مجزا به عنوان گزینه پشتیبان سرویس CallOTP می باشد
 *
 * @param code کد یکبار مصرف یا OTP
 * @param number شماره موبایل 09121112222 یا تلفن ثابت به فرمت 02122228888
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function callOtpAlt(
  code: string,
  number: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { code, number }, timeout);
}
