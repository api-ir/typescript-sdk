/**
 * API.IR TypeScript SDK — استعلام پلاک های فعال
 * سرویس ActivePlates: فهرست پلاک‌های فعال یک فرد
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/ActivePlates";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface ActivePlatesRes {
  /** کد ملی دارنده پلاک */
  nationalCode: string | null;
  /** شماره پلاک خودرو */
  plateNumber: string | null;
  /** وضعیت فک پلاک */
  revoked: boolean | null;
  /** تاریخ و زمان فک پلاک */
  revokedDate: string | null;
  /** توضیحات فک پلاک */
  revokedDescription: string | null;
  /** شماره سریال پلاک */
  serialNumber: string | null;
}

/**
 * استعلام پلاک های فعال
 *
 * سرویس «لیست پلاک‌های فعال» امکان دسترسی ساده و امن به تمام پلاک‌های فعال متعلق به یک فرد را فراهم می‌کند. با وارد کردن کد ملی و شماره موبایل، می‌توانید فهرست کامل پلاک‌ها، وضعیت فعال یا فک‌شده بودن هر پلاک، تاریخ فک و توضیحات مربوط به آن را مشاهده کنید. این سرویس برای مدیریت خودروها، بررسی سوابق مالکیت و کنترل دارایی‌ها بسیار کاربردی است و به افراد و سازمان‌ها اجازه می‌دهد اطلاعات پلاک‌ها را بدون پیچیدگی فنی، سریع و دقیق در اختیار داشته باشند.
 *
 * @param nationalCode کد ملی صاحب خودرو
 * @param mobile شماره موبایل صاحب خودرو
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع ActivePlatesRes[] است
 */
export async function activePlates(
  nationalCode: string,
  mobile: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<ActivePlatesRes[]>> {
  return request<ActivePlatesRes[]>(URL, { nationalCode, mobile }, timeout);
}
