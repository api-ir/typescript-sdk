/**
 * API.IR TypeScript SDK — استعلام نام دارنده شبا
 * سرویس IbanInfo: نام شخص، نام بانک و وضعیت فعال بودن شبا
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/IbanInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface IbanInfoRes {
  /** نام */
  name: string | null;
  /** نام بانک */
  bankName: string | null;
  /** فعال است؟ */
  active: boolean;
}

/**
 * استعلام نام دارنده شبا
 *
 * با این وب سرویس می توانید نام شخص و نام بانک و وضعیت فعال بودن شبا بانکی را استعلام نمایید
 *
 * @param iban شماره شبا 26 رقمی به فرمت IR000000000000000000000000
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع IbanInfoRes است
 */
export async function ibanInfo(
  iban: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<IbanInfoRes>> {
  return request<IbanInfoRes>(URL, { iban }, timeout);
}
