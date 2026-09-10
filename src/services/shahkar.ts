/**
 * API.IR TypeScript SDK — احراز هویت شاهکار
 * سرویس Shahkar: تطبیق کد ملی با شماره موبایل به‌صورت رمزشده، حقیقی و حقوقی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/Shahkar";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * احراز هویت شاهکار
 *
 * وب سرویس شاهکار تطبیق کد ملی با شماره موبایل را استعلام می نماید. در این نسخه دیتا به صورت رمز شده استعلام می گردد. همچنین امکان استعلام شناسه ملی و سیم کارت اشخاص حقوقی هم دارد
 *
 * @param nationalCode کد ملی یا شناسه ملی
 * @param mobile موبایل با فرمت 09120001111
 * @param isCompany حقوقی یا حقیقی (پیش‌فرض false)
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function shahkar(
  nationalCode: string,
  mobile: string,
  isCompany = false,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { nationalCode, mobile, isCompany }, timeout);
}
