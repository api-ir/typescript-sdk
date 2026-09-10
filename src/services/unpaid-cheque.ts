/**
 * API.IR TypeScript SDK — استعلام تعداد چک برگشتی
 * سرویس UnpaidCheque: تعداد و مبلغ چک‌های برگشتی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/UnpaidCheque";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface UnpaidChequeRes {
  /** تعداد چک برگشتی */
  count: number | null;
  /** جمع مبلغ چک های برگشتی */
  sumAmount: number | null;
  /** جمع مبلغ برگشتی چک ها */
  sumBouncedAmount: number | null;
}

/**
 * استعلام تعداد چک برگشتی
 *
 * در این نسخه علاوه بر تعداد چک ، مبلغ چک های برگشت خورده نیز استعلام می گردد. این سرویس به بانک‌ها و کسب‌وکارها کمک می‌کند تا ریسک اعتباری مشتریان را بهتر ارزیابی و مدیریت کنند و به نسبت نسخه Lite که فقط تعداد را بر می گرداند در ریسک اعتباری ارزیابی بهتری خواهد داشت. این سرویس به کسب و کارها در سطح 2 قابل ارائه است.
 *
 * @param nationalCode کد ملی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع UnpaidChequeRes است
 */
export async function unpaidCheque(
  nationalCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<UnpaidChequeRes>> {
  return request<UnpaidChequeRes>(URL, { nationalCode }, timeout);
}
