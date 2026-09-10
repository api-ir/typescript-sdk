/**
 * API.IR TypeScript SDK — استعلام سامانه ثنا
 * سرویس Sana: داشتن یا نداشتن شماره ثنا
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/Sana";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * استعلام سامانه ثنا
 *
 * این وب سرویس با دریافت شماره شناسه ملی، وضعیت داشتن یا نداشتن شماره ثنا را استعلام کرده و نتیجه را به‌صورت فوری و دقیق اعلام می‌کند. این سرویس برای تایید ثبت‌نام در سیستم ثنا و دسترسی به اطلاعات مرتبط با آن کاربرد دارد.
 *
 * @param nationalCode کد ملی یا شناسه ملی
 * @param isCompany حقوقی یا حقیقی (پیش‌فرض false)
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function sana(
  nationalCode: string,
  isCompany = false,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { nationalCode, isCompany }, timeout);
}
