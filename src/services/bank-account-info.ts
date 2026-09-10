/**
 * API.IR TypeScript SDK — استعلام شبا با شماره حساب
 * سرویس BankAccountInfo: دریافت شبا از شماره حساب بانکی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/BankAccountInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface BankAccountInfoRes {
  /** شماره شبا */
  iban: string | null;
  /** وضعیت فعال بودن */
  active: boolean;
  /** مالک کارت */
  owners: string[];
}

/**
 * استعلام شبا با شماره حساب
 *
 * این وب سرویس شماره حساب بانکی را استعلام کرده و شماره شبا را متعلق به آن حساب را ارائه می دهد
 *
 * @param accountNumber شماره حساب بانکی
 * @param bankCode مرکزی=010 صنعت‌ومعدن=011 ملت=012 رفاه=013 مسکن=014 سپه=015 کشاورزی=016 ملی=017 تجارت=018 صادرات=019 توسعه‌صادرات=020 پست‌بانک=021 توسعه‌تعاون=022 کارآفرین=053 پارسیان=054 اقتصادنوین=055 سامان=056 پاسارگاد=057 سرمایه=058 سینا=059 مهرایران=060 شهر=061 آینده=062 گردشگری=064 دی=066 ایران‌زمین=069 رسالت=070 ملل=075 خاورمیانه=080 (اختیاری)
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع BankAccountInfoRes است
 */
export async function bankAccountInfo(
  accountNumber: string,
  bankCode?: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<BankAccountInfoRes>> {
  return request<BankAccountInfoRes>(URL, { accountNumber, bankCode }, timeout);
}
