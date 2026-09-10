/**
 * API.IR TypeScript SDK — استعلام تعداد چک برگشتی Lite
 * سرویس UnpaidChequeLite: فقط تعداد چک‌های برگشتی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/UnpaidChequeLite";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface UnpaidChequeLiteRes {
  /** تعداد چک برگشتی */
  count: number | null;
}

/**
 * استعلام تعداد چک برگشتی Lite
 *
 * این سرویس به بانک ها و کسب وکارها کمک می کند تا ریسک اعتباری مشتریان را بهتر ارزیابی و مدیریت کنند. این نسخه از چک برگشتی نسخه Lite یا سبک آن بوده و فقط تعداد چک برگشتی فرد را استعلام می نماید. در نسخه های دیگر حسب سطح دسترسی بالاتر داده های بیشتری در خروجی نمایش داده می شود متفاوت است.
 *
 * @param nationalCode کد ملی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع UnpaidChequeLiteRes است
 */
export async function unpaidChequeLite(
  nationalCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<UnpaidChequeLiteRes>> {
  return request<UnpaidChequeLiteRes>(URL, { nationalCode }, timeout);
}
