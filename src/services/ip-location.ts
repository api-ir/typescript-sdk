/**
 * API.IR TypeScript SDK — وب سرویس تشخیص موقعیت IP
 * سرویس IPLocation: موقعیت جغرافیایی یک IP
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/IPLocation";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface IPLocationRes {
  /** آی پی استعلام شده */
  query: string | null;
  /** وضعیت */
  status: string | null;
  /** کشور */
  country: string | null;
  /** کد کشور */
  countryCode: string | null;
  /** کد منطقه */
  region: string | null;
  /** نام منطقه */
  regionName: string | null;
  /** شهر */
  city: string | null;
  /** کد پستی */
  zip: string | null;
  /** طول جغرافیایی */
  lat: number;
  /** عرض جغرافیایی */
  lon: number;
  /** منطقه */
  timezone: string | null;
  /** آی اس پی */
  isp: string | null;
  /** سازمان */
  org: string | null;
  /** شناسه بین‌المللی سیستم شبکه */
  as: string | null;
}

/**
 * وب سرویس تشخیص موقعیت IP
 *
 * لوکیشن یک IP را بر می گرداند
 *
 * @param ip آی پی ورژن 4
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع IPLocationRes است
 */
export async function ipLocation(
  ip: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<IPLocationRes>> {
  return request<IPLocationRes>(URL, { ip }, timeout);
}
