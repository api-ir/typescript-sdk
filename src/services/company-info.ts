/**
 * API.IR TypeScript SDK — استعلام شخص حقوقی
 * سرویس CompanyInfo: اطلاعات ثبتی شخص حقوقی با شناسه ملی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CompanyInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface CompanyInfoRes {
  /** نوع شرکت */
  companyType: string | null;
  /** نام شرکت */
  name: string | null;
  /** شناسه ملی */
  nationalID: number | null;
  /** شماره ثبت */
  registerNumber: number | null;
  /** تاریخ ثبت */
  registerDate: string | null;
  /** وضعیت فعال بودن */
  active: boolean;
  /** آدرس ثبتی */
  address: string | null;
  /** کد پستی */
  postalCode: string | null;
  /** استان */
  province: string | null;
  /** شهر */
  city: string | null;
  /** تاریخ انحلال */
  endDate: string | null;
}

/**
 * استعلام شخص حقوقی
 *
 * این وب سرویس با دریافت شناسه ملی، اطلاعات ثبتی آن شخص حقوقی ( شرکت یا موسسه یا سازمان) را استعلام می نماید. این سرویس برای اعتبار سنجی و استعلام دقیق مشخصات شخص حقوقی کاربرد دارد
 *
 * @param nationalID شناسه ملی شرکت
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع CompanyInfoRes است
 */
export async function companyInfo(
  nationalID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<CompanyInfoRes>> {
  return request<CompanyInfoRes>(URL, { nationalID }, timeout);
}
