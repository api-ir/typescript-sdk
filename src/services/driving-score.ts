/**
 * API.IR TypeScript SDK — استعلام نمره منفی گواهینامه
 * سرویس DrivingScore: نمرات منفی ثبت‌شده روی گواهینامه رانندگی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/DrivingScore";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface DrivingScoreRes {
  /** شماره گواهینامه */
  licenseNumber: string | null;
  /** امتیاز منفی گواهینامه */
  negativeScore: number | null;
  /** تعداد خلافی */
  offenseCount: number | null;
  /** حکم یا قانون مرتبط با وضعیت گواهینامه */
  rule: string | null;
}

/**
 * استعلام نمره منفی گواهینامه
 *
 * اطلاعات مربوط به نمرات منفی ثبت‌شده روی گواهینامه رانندگی را ارائه می‌دهد. این سرویس به رانندگان و سازمان‌های مرتبط کمک می‌کند تا وضعیت تخلفات رانندگی و امتیاز باقی‌مانده گواهینامه را بررسی کنند.
 *
 * @param nationalCode کد ملی
 * @param mobile شماره موبایل
 * @param licenseNumber شماره گواهینامه
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع DrivingScoreRes است
 */
export async function drivingScore(
  nationalCode: string,
  mobile: string,
  licenseNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<DrivingScoreRes>> {
  return request<DrivingScoreRes>(URL, { nationalCode, mobile, licenseNumber }, timeout);
}
