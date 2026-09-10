/**
 * API.IR TypeScript SDK — وب سرویس قبض گاز
 * سرویس GasBill: وضعیت پرداخت و بدهی قبض گاز
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/GasBill";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface GasBillRes {
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
 * وب سرویس قبض گاز
 *
 * وضعیت پرداخت و بدهی‌های قبوض گاز مشترکین را به‌صورت دقیق ارائه می‌کند. این سرویس برای کنترل مصرف، مدیریت پرداخت‌ها و جلوگیری از قطعی خدمات گاز کاربرد فراوان دارد.
 *
 * @param billID شناسه قبض
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع GasBillRes است
 */
export async function gasBill(
  billID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<GasBillRes>> {
  return request<GasBillRes>(URL, { billID }, timeout);
}
