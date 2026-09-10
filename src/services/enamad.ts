/**
 * API.IR TypeScript SDK — استعلام دارنده اینماد
 * سرویس Enamad: وضعیت نماد اعتماد الکترونیکی یک وب‌سایت
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/Enamad";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface EnamadModel {
  domain: string | null;
  title: string | null;
  province: string | null;
  city: string | null;
  star: number | null;
  addDate: string | null;
  expDate: string | null;
}

/**
 * استعلام دارنده اینماد
 *
 * با این وب سرویس می توانید وضعیت نماد اعتماد یک وب سایت را استعلام کنید
 *
 * @param domain نام دامنه
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع EnamadModel است
 */
export async function enamad(
  domain: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<EnamadModel>> {
  return request<EnamadModel>(URL, { domain }, timeout);
}
