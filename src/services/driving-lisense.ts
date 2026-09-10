/**
 * API.IR TypeScript SDK — استعلام گواهینامه رانندگی قدیم
 * سرویس DrivingLisense: اعتبار گواهینامه رانندگی (نسخه قدیم)
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/DrivingLisense";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface DrivingData {
  /** کد ملی */
  nationalCode: string | null;
  /** نام */
  firstName: string | null;
  /** نام خانوادگی */
  lastName: string | null;
  /** عنوان گواهینامه */
  title: string | null;
  /** تایخ درخواست */
  requestDate: string | null;
  /** تاریخ تایید */
  confirmDate: string | null;
  /** تاریخ چاپ */
  printDate: string | null;
  /** بار کد پستی */
  postalBarcode: string | null;
  /** وضعیت راهور */
  rahvarStatus: string | null;
  /** شماره گواهینامه */
  lisenseNumber: string | null;
  /** مدت اعتبار به سال */
  validYears: string | null;
}

export interface DrivingLisenseRes {
  /** گواهینامه ها */
  lisenses: DrivingData[];
}

/**
 * استعلام گواهینامه رانندگی قدیم
 *
 * وب سرویس استعلام گواهینامه رانندگی، این امکان را به شما می دهد که اعتبار گواهینامه فرد را بررسی کنید
 *
 * @param nationalCode کد ملی یا شناسه ملی
 * @param mobile موبایل با فرمت 09120001111
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع DrivingLisenseRes است
 */
export async function drivingLisense(
  nationalCode: string,
  mobile: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<DrivingLisenseRes>> {
  return request<DrivingLisenseRes>(URL, { nationalCode, mobile }, timeout);
}
