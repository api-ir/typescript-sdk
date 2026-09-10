/**
 * API.IR TypeScript SDK — وب سرویس OTP تلفنی
 * سرویس CallOTP: اعلام کد یک‌بارمصرف از طریق تماس تلفنی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CallOTP";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * وب سرویس OTP تلفنی
 *
 * نرخ ارسال پیامک با خط خدماتی از بهترین شبکه پیامکی کمتر 95%است برای همین شرکت هایی مثل دیجیکالا و بانی مد ارسال کد تلفنی را به عنوان پشتیبان پیامک پیاده سازی کردند. بنابراین شما هم برای اینکه هیچ مشتری از دست ندهید می توانید این سرویس به عنوان پشتیبان ارسال کد های پیامکی پیاده سازی کنید.
 *
 * @param code کد یکبار مصرف یا OTP
 * @param number شماره موبایل 09121112222 یا تلفن ثابت به فرمت 02122228888
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function callOtp(
  code: string,
  number: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { code, number }, timeout);
}
