/**
 * API.IR TypeScript SDK — وب سرویس قبض آب با جزئیات
 * سرویس WatterBillInfo: قبض آب به‌همراه مشخصات مشترک
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/WatterBillInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface WatterBillDetails {
  /** تام مشترک */
  ownerName: string | null;
  /** آدرس */
  address: string | null;
  /** کد پستی */
  postalCode: string | null;
  /** نوع اشتراک/مصرف */
  usageType: string | null;
  /** شماره/سریال کنتور */
  meterNumber: string | null;
  /** شمارنده پرونده */
  fileNumber: string | null;
  /** شهر */
  city: string | null;
  /** ظرفیت اشتراک مثلا 25 آمپر یا 10 متر مکعب */
  capacity: number | null;
  /** تاریخ قرائت قبلی */
  previousReadDate: string | null;
  /** تاریخ قرائت فعلی */
  currentReadDate: string | null;
  /** مصرف دوره جاری */
  currentConsumption: number | null;
  /** رقم قبلی کنتور */
  previousNumber: number | null;
  /** رقم فعلی کنتور */
  currentNumber: number | null;
}

export interface WatterBillInfoRes {
  info: WatterBillDetails | null;
  print: string;
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
 * وب سرویس قبض آب با جزئیات
 *
 * وضعیت پرداخت قبوض آب مشترکین به همراه مشخصات استعلام می نماید. این سرویس برای تسهیل مدیریت پرداخت ها و جلوگیری از قطعی خدمات آب کاربرد دارد.
 *
 * @param billID شناسه قبض
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع WatterBillInfoRes است
 */
export async function watterBillInfo(
  billID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<WatterBillInfoRes>> {
  return request<WatterBillInfoRes>(URL, { billID }, timeout);
}
