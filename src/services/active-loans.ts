/**
 * API.IR TypeScript SDK — استعلام تسهیلات فعال بانکی
 * سرویس ActiveLoans: تسهیلات و وام‌های فعال مشتری
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/ActiveLoans";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface ActiveLoansDetails {
  /** کد ملی کاربر */
  nationalCode: string | null;
  /** نام و نام خانوادگی کاربر */
  name: string | null;
  /** مجموع مبلغ تسهیلات */
  totalAmount: number;
  /** مجموع تسهیلات مانده */
  debtTotalAmount: number;
  /** مانده سررسید گذشته */
  pastExpiredTotalAmount: number;
  /** مانده معوق */
  deferredTotalAmount: number;
  /** مانده مشکوک‌الوصول */
  suspiciousTotalAmount: number;
  /** مبلغ تسهیلات یا تعهدات برگشتی */
  dishonored: number;
}

export interface ActiveLoansRes {
  /** تعداد تسهیلات فعال کاربر */
  count: number;
  info: ActiveLoansDetails | null;
}

/**
 * استعلام تسهیلات فعال بانکی
 *
 * وب‌سرویس استعلام تسهیلات فعال روشی آسان برای مشاهده تسهیلات و وام‌های فعال مشتری است. از مجموع وام‌های دریافتی و مانده بدهی گرفته تا تسهیلات سررسید گذشته یا معوق اطلاع یابید. این سرویس یکی از روش های ایده‌آل برای اعتبارسنجی، تصمیم‌گیری مالی و افزایش شفافیت در فروش اقساطی خواهد بود
 *
 * @param nationalCode کد ملی یا شناسه ملی
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع ActiveLoansRes است
 */
export async function activeLoans(
  nationalCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<ActiveLoansRes>> {
  return request<ActiveLoansRes>(URL, { nationalCode }, timeout);
}
