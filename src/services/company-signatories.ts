/**
 * API.IR TypeScript SDK — استعلام صاحبین حق امضا شرکت‌ها
 * سرویس CompanySignatories: صاحبان حق امضای شرکت طبق روزنامه رسمی
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/CompanySignatories";

/** مهلت پیش‌فرض این سرویس به ثانیه — خروجی شامل متن کامل آگهی و فهرست‌های تودرتو */
const DEFAULT_TIMEOUT = 60;

export interface ObligatorySignature {
  /** نام فرد یا شرکت */
  name: string | null;
  /** سمت */
  title: string | null;
  obligatoryStatus: boolean | null;
  /** شناسه ملی یا کد ملی */
  personID: string | null;
}

export interface NormalSignature {
  /** نام فرد یا شرکت */
  name: string | null;
  /** سمت */
  title: string | null;
  normalStatus: boolean | null;
  /** شناسه ملی یا کد ملی */
  personID: string | null;
}

export interface ObligatoryAndNormalSignature {
  /** نام فرد یا شرکت */
  name: string | null;
  /** سمت */
  title: string | null;
  /** شناسه ملی یا کد ملی */
  personID: string | null;
}

export interface Signholders {
  obligatorySignature: ObligatorySignature[];
  normalSignature: NormalSignature[];
  obligatoryAndNormalSignature: ObligatoryAndNormalSignature[];
}

export interface CompanySignatoriesPerson {
  title: string;
  /** کد ملی */
  nationalCode: string;
}

export interface CompanySignatoriesPosition {
  title: string;
  firstRole: string;
  secondRole: string;
}

export interface CompanySignatoriesBoardMember {
  /** تاریخ آغاز */
  startDate: string;
  /** تا تاریخ */
  endDate: string | null;
  /** شناسه روزنامه */
  byNewsID: number;
  person: CompanySignatoriesPerson;
  position: CompanySignatoriesPosition;
}

export interface CompanySignatoriesRes {
  /** موضوعات مجاز */
  allowedTopics: string;
  signholders: Signholders;
  /** متن کامل اگهی */
  signatureFullText: string;
  /** تاریخ روزنامه */
  newspaperDate: string;
  /** تاریخ نامه */
  newsletterDate: string;
  /** نام شرکت */
  title: string;
  /** لیست اعضا سهام داران */
  boardMembers: CompanySignatoriesBoardMember[];
}

/**
 * استعلام صاحبین حق امضا شرکت‌ها
 *
 * تایید قرارداد ها و امضاء اسناد تنها توسط امضاء دار معتبر است. این سرویس فهرست افرادی که طبق روزنامه رسمی در یک شرکت یا سازمان حق امضا دارند را مشخص می نماید.
 *
 * @param nationalID شناسه ملی شرکت
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۶۰ ثانیه — خروجی شامل متن کامل آگهی و فهرست‌های تودرتو
 * @returns مقدار data از نوع CompanySignatoriesRes است
 */
export async function companySignatories(
  nationalID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<CompanySignatoriesRes>> {
  return request<CompanySignatoriesRes>(URL, { nationalID }, timeout);
}
