/**
 * API.IR TypeScript SDK — احراز هویت شاهکار Pro
 * سرویس ShahkarPro: شاهکار با پایداری بالاتر برای سازمان‌ها و کسب‌وکارهای بزرگ
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/ShahkarPro";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * احراز هویت شاهکار Pro
 *
 * وب سرویس شاهکار پرو تطبیق کد ملی با شماره موبایل را استعلام می نماید. در این نسخه دیتا به صورت رمز شده استعلام می گردد. همچنین امکان استعلام شناسه ملی و سیم کارت اشخاص حقوقی هم دارد. تفاوت کلیدی آن با نسخه شاهکار در پایداری بالاتر ان به دلیل تفاوت آن در معماری ارتباطی ان است و مناسب کسب و کار های سازمان ها و کسب و کار های بزرگ است
 *
 * @param nationalCode کد ملی یا شناسه ملی
 * @param mobile موبایل با فرمت 09120001111
 * @param isCompany حقوقی یا حقیقی (پیش‌فرض false)
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function shahkarPro(
  nationalCode: string,
  mobile: string,
  isCompany = false,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { nationalCode, mobile, isCompany }, timeout);
}
