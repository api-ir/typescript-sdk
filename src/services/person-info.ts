/**
 * API.IR TypeScript SDK — استعلام مشخصات هویتی
 * سرویس PersonInfo: مشخصات هویتی و زنده بودن فرد با کد ملی و تاریخ تولد
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/PersonInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface PersonInfoRes {
  /** کد ملی استعلام شده */
  nationalCode: string | null;
  /** نام */
  firstName: string | null;
  /** نام خانوادگی */
  lastName: string | null;
  /** نام پدر */
  fatherName: string | null;
  /** جنسیت (زن/مرد) */
  gender: number | null;
  /** وضعیت حیات (زنده/مرده) */
  alive: boolean | null;
}

/**
 * استعلام مشخصات هویتی
 *
 * این وب سرویس با دریافت کد ملی و تاریخ تولد صحیح مشخصات هویتی و همین طور زنده بودن یک فرد را از ثبت احوال استعلام می نماید. (نیاز سطح مجوز trust level)
 *
 * @param nationalCode کد ملی
 * @param birthDate تاریخ تولد به فرمت : 1370/1/1
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع PersonInfoRes است
 */
export async function personInfo(
  nationalCode: string,
  birthDate: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<PersonInfoRes>> {
  return request<PersonInfoRes>(URL, { nationalCode, birthDate }, timeout);
}
