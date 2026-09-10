/**
 * API.IR TypeScript SDK — استعلام وضعیت پاسپورت
 * سرویس PassportStatus: اعتبار و وضعیت پاسپورت
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/PassportStatus";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface PassportStatusRes {
  /** آیا درخواست گذرنامه ثبت شده است؟ */
  hasRequest: boolean;
  /** وضعیت درخواست گذرنامه */
  requestStatus: string | null;
  /** تاریخ ثبت درخواست */
  requestDate: string | null;
  /** کد رهگیری پستی */
  postalTrackingCode: string | null;
  /** آیا گذرنامه صادر شده است؟ */
  hasPassport: boolean;
  /** شماره گذرنامه */
  passportNumber: string | null;
  /** تاریخ صدور گذرنامه */
  issueDate: string | null;
  /** تاریخ انقضای گذرنامه */
  expirationDate: string | null;
  /** وضعیت فعلی گذرنامه */
  passportStatus: string | null;
  /** آیا فرد در سیستم یافت شد؟ */
  personFound: boolean;
}

/**
 * استعلام وضعیت پاسپورت
 *
 * اگر در زمینه گردشگری فعالیت می کنید و می خواهید اعتبار پاسپورت فرد را چک کنید ، با این سرویس می توانید اعتبار یک پاسپورت را استعلام کنید
 *
 * @param nationalCode کد ملی
 * @param mobile موبایل با فرمت 09120001111
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع PassportStatusRes است
 */
export async function passportStatus(
  nationalCode: string,
  mobile: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<PassportStatusRes>> {
  return request<PassportStatusRes>(URL, { nationalCode, mobile }, timeout);
}
