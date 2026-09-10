/**
 * API.IR TypeScript SDK — استعلام اعتبار مجوز شغلی
 * سرویس License: اعتبار مجوز شغلی (پروانه کسب)
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/License";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface LicenseRes {
  /** عنوان مجوز */
  title: string | null;
  /** کد پیگیری مجوز */
  trackingCode: string | null;
  /** صادر کننده مجوز */
  isuuer: string | null;
  /** نام کامل */
  fullName: string | null;
  /** نام پدر */
  fatherName: string | null;
  /** کد ملی */
  nationalCode: string | null;
  /** تلفن */
  phone: string | null;
  /** تاریخ صدور */
  issueDate: string | null;
  /** تاریخ انقضاء< */
  expireDate: string | null;
  /** استان */
  province: string | null;
  /** شهر */
  city: string | null;
  /** آدرس */
  address: string | null;
  /** کد پستی */
  postalCode: string | null;
}

/**
 * استعلام اعتبار مجوز شغلی
 *
 * با این وب سرویس می توانید اعتبار مجوز شغلی (پروانه کسب) شخصی یا شرکتی را استعلام بگیرید و از معتبر بودن مجوز صنفی اطمینان حاصل نمایید.
 *
 * @param trackingCode کد پیگیری مجوز
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع LicenseRes است
 */
export async function license(
  trackingCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<LicenseRes>> {
  return request<LicenseRes>(URL, { trackingCode }, timeout);
}
