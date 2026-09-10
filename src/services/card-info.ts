/**
 * API.IR TypeScript SDK — استعلام نام مالک کارت بانکی
 * سرویس CardInfo: نام صاحب کارت بانکی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CardInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface CardInfoRes {
  /** نام کارت */
  name: string | null;
}

/**
 * استعلام نام مالک کارت بانکی
 *
 * با این وب سرویس می توانید نام صاحب یک کارت بانکی را استعلام نمایید
 *
 * @param cardNumber شماره کارت بانکی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع CardInfoRes است
 */
export async function cardInfo(
  cardNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<CardInfoRes>> {
  return request<CardInfoRes>(URL, { cardNumber }, timeout);
}
