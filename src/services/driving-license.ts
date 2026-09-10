/**
 * API.IR TypeScript SDK — استعلام گواهینامه رانندگی جدید
 * سرویس DrivingLicense: اعتبار گواهینامه رانندگی (نسخه جدید)
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/DrivingLicense";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface DrivingLicenseData {
  /** کد ملی دارنده گواهینامه */
  nationalCode: string | null;
  /** نام */
  firstName: string | null;
  /** نام خانوادگی */
  lastName: string | null;
  /** شماره گواهینامه */
  licenseNumber: string | null;
  /** وضعیت گواهینامه */
  licenseStatus: string | null;
  /** نوع گواهینامه */
  licenseType: string | null;
  /** تایخ درخواست */
  requestDate: string | null;
  /** تاریخ تایید */
  confirmDate: string | null;
  /** تاریخ صدور گواهینامه */
  issueDate: string | null;
  /** تاریخ چاپ */
  printDate: string | null;
  /** مدت اعتبار به سال */
  validityYears: string | null;
  /** بارکد پستی گواهینامه */
  postalBarcode: string | null;
}

export interface DrivingLicenseRes {
  /** گواهینامه ها */
  licenses: DrivingLicenseData[];
}

/**
 * استعلام گواهینامه رانندگی جدید
 *
 * وب سرویس استعلام گواهینامه رانندگی، این امکان را به شما می دهد که اعتبار گواهینامه فرد را بررسی کنید
 *
 * @param nationalCode کد ملی یا شناسه ملی
 * @param mobile موبایل با فرمت 09120001111
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع DrivingLicenseRes است
 */
export async function drivingLicense(
  nationalCode: string,
  mobile: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<DrivingLicenseRes>> {
  return request<DrivingLicenseRes>(URL, { nationalCode, mobile }, timeout);
}
