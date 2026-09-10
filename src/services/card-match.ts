/**
 * API.IR TypeScript SDK — تطبیق کد ملی با کارت بانکی
 * سرویس CardMatch: تطبیق کد ملی با شماره کارت بانکی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CardMatch";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * تطبیق کد ملی با کارت بانکی
 *
 * با وب سرویس تطبیق کد ملی با کارت بانکی می توانید از دریافت صحیح کارت ملی متعلق به مشتری مطمئن شوید
 *
 * @param nationalCode کد ملی
 * @param birthDate تاریخ تولد به فرمت : 1370/1/1
 * @param cardNumber شماره کارت بانکی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function cardMatch(
  nationalCode: string,
  birthDate: string,
  cardNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { nationalCode, birthDate, cardNumber }, timeout);
}
