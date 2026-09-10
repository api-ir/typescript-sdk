/**
 * API.IR TypeScript SDK — استعلام اعتبار پروانه پزشکی
 * سرویس MedicalLicense: اعتبار پروانه پزشکی
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/MedicalLicense";

/** مهلت پیش‌فرض این سرویس به ثانیه — خروجی شامل تصویر QR به‌صورت Base64 */
const DEFAULT_TIMEOUT = 60;

export interface LicenseInfo {
  /** نوع مجوز */
  licenseType: string | null;
  /** شهر مجوز */
  licenseCity: string | null;
  /** مدرک مرتبط */
  relatedDegree: string | null;
  /** تاریخ انقضا */
  expireDate: string | null;
  /** تصویر کد QR به صورت Base64 */
  qrCodeBase64: string | null;
  /** وضعیت فعال بودن */
  isActive: boolean | null;
}

export interface MedicalLicenseRes {
  /** نام */
  firstName: string | null;
  /** نام خانوادگی */
  lastName: string | null;
  /** کد نظام پزشکی */
  medicalCode: string | null;
  /** مدرک تحصیلی */
  degree: string | null;
  /** شهر */
  city: string | null;
  /** نوع عضویت */
  membershipType: string | null;
  /** لیست مجوزها */
  licenses: LicenseInfo[];
}

/**
 * استعلام اعتبار پروانه پزشکی
 *
 * با این وب سرویس می توانید اعتبار پروانه پزشکی را استعلام بگیرید
 *
 * @param medicalCode کد پیگیری مجوز
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۶۰ ثانیه — خروجی شامل تصویر QR به‌صورت Base64
 * @returns مقدار data از نوع MedicalLicenseRes است
 */
export async function medicalLicense(
  medicalCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<MedicalLicenseRes>> {
  return request<MedicalLicenseRes>(URL, { medicalCode }, timeout);
}
