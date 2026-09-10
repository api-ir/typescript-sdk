/**
 * API.IR TypeScript SDK — وب سرویس قبض برق با جزئیات
 * سرویس PowerBillInfo: قبض برق به‌همراه مشخصات مشترک
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/PowerBillInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface PowerBillDetails {
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

export interface PowerBillInfoRes {
  info: PowerBillDetails | null;
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
 * وب سرویس قبض برق با جزئیات
 *
 * اطلاعات مربوط به وضعیت پرداخت قبوض برق + مشخصات مشترک را استعلام می نماید. این سرویس به مشترکین کمک می کند تا از وضعیت مصرف و پرداخت های خود به صورت دقیق مطلع شوند و مدیریت بهتری روی قبوض برق خود داشته باشند.
 *
 * @param billID شناسه قبض
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع PowerBillInfoRes است
 */
export async function powerBillInfo(
  billID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<PowerBillInfoRes>> {
  return request<PowerBillInfoRes>(URL, { billID }, timeout);
}
