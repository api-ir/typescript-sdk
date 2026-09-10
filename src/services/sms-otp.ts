/**
 * API.IR TypeScript SDK — وب سرویس OTP پیامکی
 * سرویس SmsOTP: ارسال کد یک‌بارمصرف پیامکی با خط ۸ رقمی به تمامی شماره‌ها
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/SmsOTP";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * وب سرویس OTP پیامکی
 *
 * برای ارسال کد یا رمز پیامکی به تمامی شماره ها دیگه به خط خدماتی یا خرید پنل پیامکی نیازی ندارید. کدهای شما از بهترین و سریع ترین شبکه پیامکی با خط 8 رقمی رند به تمامی شماره ها ارسال می شود.
 *
 * @param code کد یا OTP
 * @param mobile موبایل به فرمت 09121112222
 * @param template کد=0 کد ورود=1 کد تایید=2 رمز=3 رمز ورود=4 و برای افزودن نام به انتها پیامک به پشتیبانی پیام دهید (پیش‌فرض 1)
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function smsOtp(
  code: string,
  mobile: string,
  template = 1,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { code, mobile, template }, timeout);
}
