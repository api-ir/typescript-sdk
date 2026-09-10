/**
 * API.IR TypeScript SDK — استعلام اگهی های روزنامه رسمی
 * سرویس CompanyNewspapers: آگهی‌های روزنامه رسمی و محلی شرکت
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CompanyNewspapers";

/** مهلت پیش‌فرض این سرویس به ثانیه — فهرست آگهی‌ها به‌همراه متن کامل روزنامه رسمی */
const DEFAULT_TIMEOUT = 60;

export interface CompanyNewspapersRes {
  /** شناسه */
  newsID: number | null;
  /** عنوان */
  title: string | null;
  /** شناسه ملی */
  nationalID: string | null;
  /** متن روزنامه */
  description: string | null;
  /** مقدار افزایش/کاهش سرمایه */
  capital: number | null;
  /** تاریخ انتشار */
  publicationDate: string | null;
  /** شماره روزنامه */
  number: string | null;
  /** شهر روزنامه */
  city: string | null;
  /** صفحه روزنامه */
  page: number | null;
  /** تاریخ نامه */
  letterDate: string | null;
  /** شماره نامه */
  letterNumber: string | null;
}

/**
 * استعلام اگهی های روزنامه رسمی
 *
 * این وب سرویس اطلاعات آگهی‌های منتشر شده در روزنامه‌های رسمی و محلی شرکت ها استعلام می نماید. این سرویس برای بررسی صحت آگهی‌ها، اطلاع‌رسانی قانونی و پیگیری موضوعات مرتبط با کسب‌وکارها و افراد کاربردی است.
 *
 * @param nationalID شناسه ملی شرکت
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۶۰ ثانیه — فهرست آگهی‌ها به‌همراه متن کامل روزنامه رسمی
 * @returns مقدار data از نوع CompanyNewspapersRes[] است
 */
export async function companyNewspapers(
  nationalID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<CompanyNewspapersRes[]>> {
  return request<CompanyNewspapersRes[]>(URL, { nationalID }, timeout);
}
