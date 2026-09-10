/**
 * API.IR TypeScript SDK — تطبیق کد ملی با شبا پرو (سیاح)
 * سرویس IbanMatchPro: تطبیق کد ملی با شبا بدون تاریخ تولد
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/IbanMatchPro";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * تطبیق کد ملی با شبا پرو (سیاح)
 *
 * سرویس تطبیق شماره شبا و کد ملی **بدون تاریخ تولد** امکان اعتبارسنجی مالک حساب بانکی را به‌صورت سریع و امن برای کسب‌وکارها فراهم می‌کند. این API با دریافت شماره شبا و کد ملی، تطابق یا عدم تطابق اطلاعات را به‌صورت شفاف در خروجی اعلام می‌کند و به کاهش خطا، تقلب و ریسک‌های مالی کمک می‌نماید. استفاده از این سرویس در فرآیندهای KYC، پرداخت، تسویه‌حساب و پذیرش مشتریان بسیار کاربردی است. کسب‌وکارها با بهره‌گیری از این سرویس می‌توانند اعتماد کاربران را افزایش داده و فرآیندهای مالی خود را مطابق با الزامات نظارتی و بانکی به‌صورت هوشمند مدیریت کنند.
 *
 * @param nationalCode کد ملی
 * @param iban شماره شبا 26 رقمی به فرمت IR000000000000000000000000
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function ibanMatchPro(
  nationalCode: string,
  iban: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { nationalCode, iban }, timeout);
}
