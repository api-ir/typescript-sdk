/**
 * API.IR TypeScript SDK — استعلام تاریخچه پلاک
 * سرویس PlateHistory: تاریخچه کامل پلاک و مدل خودرو
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/PlateHistory";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface PlateHistoryModel {
  /** سیستم خودرو */
  vehicleSystem: string | null;
  /** نوع وسیله نقلیه */
  vehicleType: string | null;
  /** تاریخ نصب پلاک */
  installDate: string | null;
  /** تاریخ فک پلاک */
  detachDate: string | null;
  /** سال وسیله نقلیه */
  vehicleModel: string | null;
}

export interface PlateHistoryRes {
  /** تاریخچه پلاک */
  plateHistory: PlateHistoryModel[];
  /** شرح / وضعیت پلاک */
  description: string | null;
  /** شماره سریال پلاک */
  serialNumber: string | null;
}

/**
 * استعلام تاریخچه پلاک
 *
 * با سرویس «تاریخچه پلاک» می توانید با وارد کردن شماره پلاک و کد ملی مالک، می‌توانید تاریخچه کامل پلاک، مدل خودرو، سال ساخت، و تاریخ نصب و جداسازی آن را در یک نگاه مشاهده کنید. این سرویس نه تنها اطلاعات دقیق و قابل پیگیری در اختیار شما می‌گذارد، بلکه مدیریت خودروها و پلاک‌ها را سریع، شفاف و امن می‌کند. برای کسب‌وکارها، سازمان‌ها یا هر فردی که نیاز به بررسی دقیق سوابق پلاک دارد، «تاریخچه پلاک» راهکاری کاربردی و هوشمند است.
 *
 * @param nationalCode کد ملی
 * @param plateNumber پلاک به فرمت : ایران 11 – 1111 ب 11
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع PlateHistoryRes است
 */
export async function plateHistory(
  nationalCode: string,
  plateNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<PlateHistoryRes>> {
  return request<PlateHistoryRes>(URL, { nationalCode, plateNumber }, timeout);
}
