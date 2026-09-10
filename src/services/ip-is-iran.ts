/**
 * API.IR TypeScript SDK — وب سرویس تشخیص IP ایرانی
 * سرویس IPIsIran: ایرانی بودن IP کاربر
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/IPIsIran";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * وب سرویس تشخیص IP ایرانی
 *
 * ایرانی بودن IP کاربر را مشخص می کند
 *
 * @param ip آی پی ورژن 4
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function ipIsIran(
  ip: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { ip }, timeout);
}
