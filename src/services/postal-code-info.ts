/**
 * API.IR TypeScript SDK — سرویس استعلام کدپستی
 * سرویس PostalCodeInfo: آدرس دقیق از کد پستی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/PostalCodeInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface PostalCodeInfoRes {
  /** استان */
  province: string | null;
  /** شهر */
  city: string | null;
  /** شهرستان / بخش */
  town: string | null;
  /** منطقه / ناحیه */
  district: string | null;
  /** خیابان اصلی */
  street: string | null;
  /** خیابان فرعی / کوچه */
  street2: string | null;
  /** پلاک */
  number: string | null;
  /** طبقه */
  floor: string | null;
  /** جهت طبقه (مثلاً شرقی یا غربی) */
  sideFloor: string | null;
  /** نام ساختمان */
  buildingName: string | null;
  /** توضیحات تکمیلی */
  description: string | null;
  /** آدرس */
  address: string | null;
}

/**
 * سرویس استعلام کدپستی
 *
 * با این وب سرویس می توانید با داشتن کد پستی آدرس دقیق آن را از پست استعلام کنید
 *
 * @param postalCode کد پستی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع PostalCodeInfoRes است
 */
export async function postalCodeInfo(
  postalCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<PostalCodeInfoRes>> {
  return request<PostalCodeInfoRes>(URL, { postalCode }, timeout);
}
