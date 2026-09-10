/**
 * API.IR TypeScript SDK — تطبیق کارت بانکی با موبایل
 * سرویس CardMobileMatch: تطبیق شماره موبایل با کارت بانکی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CardMobileMatch";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * تطبیق کارت بانکی با موبایل
 *
 * با وب سرویس تطبیق موبایل با کارت بانکی می توانید از دریافت صحیح کارت ملی متعلق به مشتری مطمئن شوید.
 *
 * @param mobile موبایل با فرمت 09120001111
 * @param cardNumber شماره کارت بانکی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function cardMobileMatch(
  mobile: string,
  cardNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { mobile, cardNumber }, timeout);
}
