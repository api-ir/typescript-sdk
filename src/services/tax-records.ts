/**
 * API.IR TypeScript SDK — استعلام پرونده ها مالیاتی
 * سرویس TaxRecords: پرونده‌های مالیاتی و وضعیت ثبت‌نام اشخاص حقیقی و حقوقی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/TaxRecords";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface TaxRecordsData {
  /** نام پرونده */
  name: string | null;
  /** کد اقتصادی */
  economicCode: string | null;
  /** وضعیت ثبت نام */
  registrationStatus: string | null;
  /** گام ثبت نام */
  registrationStep: string | null;
}

export interface TaxRecordsRes {
  /** لیست پرونده ها */
  records: TaxRecordsData[];
}

/**
 * استعلام پرونده ها مالیاتی
 *
 * با استفاده از این سرویس می توانید پرونده یا پرونده های مالیاتی و وضعیت ثبت نام اشخاص حقیقی یا حقوقی را استعلام بگیرید . به این ترتیب می توانید امور مالی دقیق تر و بهتری داشته باشید
 *
 * @param inquiryCode شماره ملی حقیقی/ شناسه ملی حقوقی/ شماره فراگیر/ شماره رهگیری/ شماره اقتصادی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع TaxRecordsRes است
 */
export async function taxRecords(
  inquiryCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<TaxRecordsRes>> {
  return request<TaxRecordsRes>(URL, { inquiryCode }, timeout);
}
