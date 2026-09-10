/**
 * API.IR TypeScript SDK — وب سرویس قبض آب
 * سرویس WatterBill: وضعیت پرداخت قبض آب
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/WatterBill";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface WatterBillRes {
  /** مبلغ */
  amount: number;
  /** شناسه قبض */
  billID: string;
  /** شناسه پرداخت */
  payID: string;
  /** تاریخ */
  date: string;
}

/**
 * وب سرویس قبض آب
 *
 * وضعیت پرداخت قبوض آب مشترکین را بررسی و اطلاعات دقیق از بدهی‌ها و پرداخت‌های انجام‌شده ارائه می‌دهد. این سرویس برای تسهیل مدیریت پرداخت‌ها و جلوگیری از قطعی خدمات آب کاربرد دارد.
 *
 * @param billID شناسه قبض
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع WatterBillRes است
 */
export async function watterBill(
  billID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<WatterBillRes>> {
  return request<WatterBillRes>(URL, { billID }, timeout);
}
