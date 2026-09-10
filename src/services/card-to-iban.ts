/**
 * API.IR TypeScript SDK — سرویس تبدیل کارت به شبا
 * سرویس CardToIban: مشخصات شبای یک کارت بانکی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CardToIban";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface CardToIbanRes {
  /** نام */
  name: string | null;
  /** شبا */
  iban: string | null;
  /** نام بانک */
  bankName: string | null;
}

/**
 * سرویس تبدیل کارت به شبا
 *
 * با این وب سرویس می توانید مشخصات شبا یک کارت بانکی را دریافت نمایید
 *
 * @param cardNumber شماره کارت بانکی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع CardToIbanRes است
 */
export async function cardToIban(
  cardNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<CardToIbanRes>> {
  return request<CardToIbanRes>(URL, { cardNumber }, timeout);
}
