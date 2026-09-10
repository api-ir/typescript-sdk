/**
 * API.IR TypeScript SDK — استعلام تعداد چک برگشتی پرو
 * سرویس UnpaidChequePro: تعداد، مبلغ و لیست چک‌های برگشتی به‌همراه شعبه
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/UnpaidChequePro";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface BackChequesChequeItem {
  /** شماره حساب مربوط به چک */
  accountNumber: string | null;
  /** مبلغ چک برگشتی */
  amount: string | null;
  /** مبلغ برگشتی */
  bouncedAmount: string | null;
  /** کد بانک صادرکننده چک */
  bankCode: string | null;
  /** کد شعبه صادرکننده چک */
  branchCode: string | null;
  /** نام و شعبه بانک صادرکننده چک */
  branchDescription: string | null;
  /** نام شعبه برگشت‌زننده */
  dishonoringBranchName: string | null;
  /** دلیل برگشت چک */
  dishonorReason: string | null;
  /** کد شعبه برگشت‌زننده */
  branchCodeBounced: string | null;
  /** تاریخ وصول چک */
  chequeDate: string | null;
  /** تاریخ برگشت چک */
  backDate: string | null;
  /** کد رهگیری / شناسه چک */
  chequeID: string | null;
  /** شماره چک */
  chequeNumber: string | null;
}

export interface UnpaidChequeProRes {
  /** کد ملی کاربر */
  nationalCode: string | null;
  /** شناسه ملی شخص حقوقی */
  legalId: string | null;
  /** نام و نام خانوادگی کاربر */
  name: string | null;
  /** تعداد چک برگشتی */
  count: number | null;
  /** لیست چک‌های برگشتی کاربر */
  chequeList: BackChequesChequeItem[];
}

/**
 * استعلام تعداد چک برگشتی پرو
 *
 * در نسخه پرو علاوه بر تعداد چک و مبلغ چک برگشتی، لیست چک ها به همراهه اطلاع شعبه برگشت دهنده چک نیز برگردانده می شود. این سرویس به بانک ها و کسب وکارها کمک می کند تا ریسک اعتباری مشتریان را بهتر ارزیابی و مدیریت کنند. این نسخه فقط به شرکت ها و سازمان ها قابل ارائه می باشد
 *
 * @param nationalCode کد ملی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع UnpaidChequeProRes است
 */
export async function unpaidChequePro(
  nationalCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<UnpaidChequeProRes>> {
  return request<UnpaidChequeProRes>(URL, { nationalCode }, timeout);
}
