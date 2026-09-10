/**
 * API.IR TypeScript SDK — وب سرویس قبض برق
 * سرویس PowerBill: وضعیت پرداخت قبض برق
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/PowerBill";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface PowerBillRes {
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
 * وب سرویس قبض برق
 *
 * اطلاعات مربوط به وضعیت پرداخت قبوض برق و بدهی‌های مشترک را ارائه می‌دهد. این سرویس به مشترکین کمک می‌کند تا از وضعیت مصرف و پرداخت‌های خود به‌صورت دقیق مطلع شوند و مدیریت بهتری روی قبوض برق خود داشته باشند.
 *
 * @param billID شناسه قبض
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع PowerBillRes است
 */
export async function powerBill(
  billID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<PowerBillRes>> {
  return request<PowerBillRes>(URL, { billID }, timeout);
}
