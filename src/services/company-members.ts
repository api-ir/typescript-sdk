/**
 * API.IR TypeScript SDK — استعلام اعضای هیئت مدیره
 * سرویس CompanyMembers: اعضای هیئت مدیره و سهامداران شرکت
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CompanyMembers";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface BoardMember {
  /** کد ملی یا شناسه ملی */
  nationalID: string | null;
  /** نام شخص حقیقی یا نام شرکت */
  firstName: string | null;
  /** نام خانوادگی فقط برای شخص حقیقی */
  lastName: string | null;
  /** کد عددی سمت */
  roleCode: number;
  /** نام سمت */
  roleName: string | null;
}

export interface Shareholder {
  /** کد ملی یا شناسه ملی */
  nationalID: string | null;
  /** نام شخص حقیقی یا نام شرکت */
  firstName: string | null;
  /** نام خانوادگی فقط برای شخص حقیقی */
  lastName: string | null;
  /** در صد سهام */
  percentage: number;
}

export interface CompanyMembersRes {
  /** اعضاء شرکت */
  boardMembers: BoardMember[];
  /** سهامدار */
  shareHolders: Shareholder[];
}

/**
 * استعلام اعضای هیئت مدیره
 *
 * فهرست اعضای هیئت مدیره یک شرکت یا سازمان را همراه با اطلاعات مربوط به سمت‌ها و وضعیت آنها ارائه می‌دهد. این سرویس برای بررسی ساختار مدیریتی و بازرسین و هیئت مدیره کاربرد دارد.
 *
 * @param nationalID شناسه ملی شرکت
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع CompanyMembersRes است
 */
export async function companyMembers(
  nationalID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<CompanyMembersRes>> {
  return request<CompanyMembersRes>(URL, { nationalID }, timeout);
}
