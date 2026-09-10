/**
 * API.IR TypeScript SDK — استعلام مشخصات هویتی 2
 * سرویس PersonData: مشخصات هویتی به‌همراه عکس کارت ملی از ثبت احوال
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/PersonData";

/** مهلت پیش‌فرض این سرویس به ثانیه — خروجی شامل تصویر Base64 کارت ملی است */
const DEFAULT_TIMEOUT = 60;

export interface PersonDataRes {
  /** کد ملی */
  nationalCode: string | null;
  /** نام */
  firstName: string | null;
  /** نام خانوادگی */
  lastName: string | null;
  /** نام پدر */
  fatherName: string | null;
  /** جنسیت آقا=1 خانم=2 */
  gender: number | null;
  /** زنده بودن */
  alive: boolean | null;
  /** تصویر به فرمت base64 در صورت وجود */
  imageBase64: string | null;
}

/**
 * استعلام مشخصات هویتی 2
 *
 * این وب سرویس با دریافت کد ملی و تاریخ تولد صحیح مشخصات هویتی و همین طور زنده بودن یک فرد را همراه با عکس کارت ملی از ثبت احوال استعلام می نماید. (ارائه این سرویس به سازمان ها و شرکت ها با ارائه مجوز های لازم مقدور است)
 *
 * @param nationalCode کد ملی
 * @param birthDate تاریخ تولد به فرمت : 1370/1/1
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۶۰ ثانیه — خروجی شامل تصویر Base64 کارت ملی است
 * @returns مقدار data از نوع PersonDataRes است
 */
export async function personData(
  nationalCode: string,
  birthDate: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<PersonDataRes>> {
  return request<PersonDataRes>(URL, { nationalCode, birthDate }, timeout);
}
