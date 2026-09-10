/**
 * API.IR TypeScript SDK — استعلام خدمت سربازی
 * سرویس MilitaryStatus: وضعیت نظام وظیفه با کد ملی و تاریخ تولد
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/MilitaryStatus";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface MilitaryStatusRes {
  /** مجاز بودن شخص از نظر وضعیت نظام وظیفه */
  isAllowed: boolean;
}

/**
 * استعلام خدمت سربازی
 *
 * این وب سرویس با دریافت کد ملی، کد وضعیت نظام وظیفه، توضیحات مرتبط با وضعیت خدمت و تاریخ اتمام معافیت موقت (در صورت وجود) را ارائه می دهد. این سرویس برای احراز اصالت و بررسی وضعیت نظام وظیفه افراد در فرآیندهای استخدامی و اداری کاربرد دارد.
 *
 * @param nationalCode کد ملی شخص جهت استعلام وضعیت نظام وظیفه
 * @param birthDate تاریخ تولد شخص به فرمت yyyy/mm/dd
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع MilitaryStatusRes است
 */
export async function militaryStatus(
  nationalCode: string,
  birthDate: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<MilitaryStatusRes>> {
  return request<MilitaryStatusRes>(URL, { nationalCode, birthDate }, timeout);
}
