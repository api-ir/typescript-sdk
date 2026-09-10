/**
 * API.IR TypeScript SDK — استعلام وضعیت اتباع
 * سرویس NationalityStatus: اعتبار کارت اتباع از مراجع انتظامی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/NationalityStatus";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface NationalityStatusRes {
  /** شناسه */
  id: number;
  /** کد یکتا */
  uniqeCode: number;
  /** کد فیدا */
  fidaCode: number;
  /** تاریخ تولید میلادی */
  birthDate: string;
  /** تاریخ تولد شمسی */
  birthDatePersian: string;
  /** نام */
  firstName: string;
  /** نام خانوادگی */
  lastName: string;
  /** نام پدر */
  fatherName: string;
  /** نام پدر بزرگ */
  grandFatherName: string;
  /** جنسیت */
  gender: number;
  /** شناسه استان */
  provinceID: number;
  /** نام استان */
  province: string;
  /** شناسه ملیت */
  nationalityID: number;
  /** نام ملیت */
  nationalityName: string;
  /** وضعیت */
  status: number;
  /** شناسه خانواده */
  familyID: number;
  /** خروج؟ */
  exit: boolean;
  /** کد شناسایی */
  identityCode: number;
  relative: number;
  /** تحصیلات */
  education: number;
  /** فعال */
  isActive: boolean;
  /** حذف شده؟ */
  deleteAt: string;
}

/**
 * استعلام وضعیت اتباع
 *
 * این وب سرویس اطلاعات کارت اتباع را از مراجع انتظامی استعلام می نماید و اعتبار کارت اتباع را مشخص می نماید.
 *
 * @param code کد
 * @param codeType کد شناسایی تبعه=1 فیدا=2 شناسه فراگیر ناجا=3 کد یکتا=4
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع NationalityStatusRes است
 */
export async function nationalityStatus(
  code: string,
  codeType: number,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<NationalityStatusRes>> {
  return request<NationalityStatusRes>(URL, { code, codeType }, timeout);
}
