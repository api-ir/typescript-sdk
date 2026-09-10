/**
 * API.IR TypeScript SDK — سرویس دریافت لوکیشن با کدپستی
 * سرویس PostalCodeLocation: مختصات جغرافیایی یک کد پستی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/PostalCodeLocation";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface PostalCodeLocationRes {
  /** لینک نمایش لوکیشن */
  mapUrl: string | null;
  /** عرض جغرافیایی */
  lat: number;
  /** طول جغرافیایی */
  long: number;
}

/**
 * سرویس دریافت لوکیشن با کدپستی
 *
 * وب سرویس استعلام و دریافت لوکیشن با کد پستی، این وب سرویس نقش مهمی در تحویل و ارسال مرسولات پستی و راهنمایی پستی یا پیک دارد.
 *
 * @param postalCode کد پستی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع PostalCodeLocationRes است
 */
export async function postalCodeLocation(
  postalCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<PostalCodeLocationRes>> {
  return request<PostalCodeLocationRes>(URL, { postalCode }, timeout);
}
