/**
 * API.IR TypeScript SDK — تبدیل لوکیشن به آدرس
 * سرویس GeoToAddress: تبدیل مختصات جغرافیایی به استان، شهر و آدرس
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/GeoToAddress";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface GeoToAddressRes {
  /** استان */
  province: string | null;
  /** شهر */
  city: string | null;
  /** آدرس */
  address: string | null;
}

/**
 * تبدیل لوکیشن به آدرس
 *
 * این وب سرویس با دریافت مختصات نقطه Latitude و Longitude آدرس را بر می گرداند. خروجی این وب سرویس استان، شهر و آدرس است
 *
 * @param latitude طول جغرافیایی
 * @param longitude عرض جغرافیایی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع GeoToAddressRes است
 */
export async function geoToAddress(
  latitude: number,
  longitude: number,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<GeoToAddressRes>> {
  return request<GeoToAddressRes>(URL, { latitude, longitude }, timeout);
}
