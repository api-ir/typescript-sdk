/**
 * API.IR TypeScript SDK — وب سرویس قبض گاز با جزئیات
 * سرویس GasBillInfo: قبض گاز به‌همراه مشخصات اشتراک
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/GasBillInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface GasBillDetails {
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

export interface GasBillInfoRes {
  info: GasBillDetails | null;
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
 * وب سرویس قبض گاز با جزئیات
 *
 * وضعیت پرداخت و بدهی های قبوض گاز مشترکین به همراه مشخصات اشتراک را استعلام می نماید. این سرویس برای کنترل مصرف، مدیریت پرداخت ها و جلوگیری از قطعی خدمات گاز کاربرد فراوان دارد.
 *
 * @param billID شناسه اشتراک
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع GasBillInfoRes است
 */
export async function gasBillInfo(
  billID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<GasBillInfoRes>> {
  return request<GasBillInfoRes>(URL, { billID }, timeout);
}
