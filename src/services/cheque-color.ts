/**
 * API.IR TypeScript SDK — استعلام رنگ چک صیادی
 * سرویس ChequeColor: رنگ چک صیادی صادرکننده
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/ChequeColor";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface ChequeColorRes {
  /** کد رنگ چک */
  chequeColor: string | null;
  /** سفید=1 زرد=2 نارنجی=3 قهوه‌ای=4 قرمز=5 */
  chequeColorCode: number;
}

/**
 * استعلام رنگ چک صیادی
 *
 * سرویس «استعلام رنگ چک» به شما کمک می‌کند قبل از دریافت چک، از اعتبار مالی صادرکننده مطمئن شوید. با یک استعلام ساده و سریع، وضعیت چک به‌صورت رنگی و کاملاً قابل‌فهم نمایش داده می‌شود و میزان ریسک معامله را مشخص می‌کند. این سرویس ابزاری هوشمند برای کاهش خطرات مالی، افزایش اطمینان در معاملات و تصمیم‌گیری آگاهانه‌تر در کسب‌وکار شماست.
 *
 * @param nationalCode کد ملی یا شناسه ملی
 * @param isCompany حقوقی یا حقیقی (پیش‌فرض false)
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع ChequeColorRes است
 */
export async function chequeColor(
  nationalCode: string,
  isCompany = false,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<ChequeColorRes>> {
  return request<ChequeColorRes>(URL, { nationalCode, isCompany }, timeout);
}
