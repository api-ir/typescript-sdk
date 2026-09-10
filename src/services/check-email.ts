/**
 * API.IR TypeScript SDK — اعتبار سنجی ایمیل
 * سرویس CheckEmail: صحت آدرس و فعال بودن ایمیل
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CheckEmail";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * اعتبار سنجی ایمیل
 *
 * این وب سرویس صحت آدرس و فعال بودن یک ایمیل را استعلام می نماید
 *
 * @param email ایمیل
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function checkEmail(
  email: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { email }, timeout);
}
