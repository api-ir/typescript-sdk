/**
 * API.IR TypeScript SDK — استعلام مشخصات کارت بانکی
 * سرویس BankCardInfo: نام دارنده، شبا و شماره حساب از شماره کارت
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/BankCardInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface BankCardInfoRes {
  /** نام کارت */
  name: string | null;
  /** شماره شبا */
  iban: string | null;
  /** شماره حساب */
  accountNumber: string | null;
}

/**
 * استعلام مشخصات کارت بانکی
 *
 * با این وب سرویس می توانید از طریق شماره کارت، نام دارنده کارت + شماره شبا + شماره حساب را استعلام نمایید
 *
 * @param cardNumber شماره کارت
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع BankCardInfoRes است
 */
export async function bankCardInfo(
  cardNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<BankCardInfoRes>> {
  return request<BankCardInfoRes>(URL, { cardNumber }, timeout);
}
