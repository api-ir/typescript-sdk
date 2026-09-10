/**
 * API.IR TypeScript SDK — استعلام مشخصات چک صیادی
 * سرویس ChequeInfo: مشخصات کامل چک با شناسه صیادی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/ChequeInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface ChequeInfoRes {
  /** شماره شبا دارنده چک */
  iban: string | null;
  /** تاریخ صدور دسته چک */
  issuedDate: string | null;
  /** تاریخ انقضای دسته چک */
  expirationDate: string | null;
  /** شماره سریال */
  serialNumber: string | null;
  /** شماره سری */
  seriesNumber: string | null;
  /** نوع چک (BANS: عادی، CHD: الکترونیک، CHS: موردی، CHT: بانکی) */
  chequeType: string | null;
  /** کد شعبه */
  branchCode: string | null;
  /** نام و نام خانوادگی دارنده دسته چک */
  name: string | null;
}

/**
 * استعلام مشخصات چک صیادی
 *
 * با وب‌سرویس «استعلام شناسه چک صیادی»، می‌توانید اطلاعات کامل و دقیق چک‌ها را در عرض چند ثانیه دریافت کنید. کافی است شناسه چک را وارد کنید تا جزئیاتی مانند نام دارنده، شماره شبا، شماره سریال، تاریخ صدور و نوع چک به‌صورت امن و قابل اعتماد در اختیار شما قرار گیرد. این سرویس به کسب‌وکارها و افراد امکان می‌دهد تصمیمات مالی و تجاری خود را با سرعت، دقت و شفافیت کامل اتخاذ کنند و فرآیندهای مالی روزانه خود را سیستمی نمایند.
 *
 * @param chequeID شناسه چک صیاد
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع ChequeInfoRes است
 */
export async function chequeInfo(
  chequeID: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<ChequeInfoRes>> {
  return request<ChequeInfoRes>(URL, { chequeID }, timeout);
}
