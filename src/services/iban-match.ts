/**
 * API.IR TypeScript SDK — تطبیق کد ملی با شبا
 * سرویس IbanMatch: تطبیق کد ملی با شماره شبا
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/IbanMatch";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * تطبیق کد ملی با شبا
 *
 * با وب سرویس استعلام تطبیق کد ملی با شبا می توانید مطمئن شوید که شبا دریافتی متعلق به کد ملی مشتری باشد.
 *
 * @param nationalCode کد ملی
 * @param birthDate تاریخ تولد به فرمت : 1370/1/1
 * @param iban شماره شبا 26 رقمی به فرمت IR000000000000000000000000
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function ibanMatch(
  nationalCode: string,
  birthDate: string,
  iban: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { nationalCode, birthDate, iban }, timeout);
}
