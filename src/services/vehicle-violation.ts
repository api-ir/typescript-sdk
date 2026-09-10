/**
 * API.IR TypeScript SDK — وب سرویس استعلام خلافی خودرو
 * سرویس VehicleViolation: میزان خلافی‌های خودرو
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/VehicleViolation";

/** مهلت پیش‌فرض این سرویس به ثانیه — فهرست کامل خلافی‌ها با جزئیات */
const DEFAULT_TIMEOUT = 60;

export interface OffenseItem {
  /** شناسه پرداخت */
  id: string | null;
  /** نوع تخلف */
  type: string | null;
  /** شرح نوع ثبت تخلف */
  description: string | null;
  /** کد تخلف */
  code: string | null;
  /** مبلغ خلافی */
  price: number;
  /** شهر محل وقوع تخلف */
  city: string | null;
  /** آدرس محدوده تخلف */
  location: string | null;
  /** پلاک کد شده */
  serial: string | null;
  /** مقدار داده اضافی */
  dataValue: string | null;
  /** بارکد قبض */
  barcode: string | null;
  /** شماره پلاک خودرو */
  license: string | null;
  /** شناسه قبض */
  billId: string | null;
  /** شناسه پرداخت */
  paymentId: string | null;
  /** تاریخ شمسی وقوع تخلف */
  date: string | null;
  /** تاریخ میلادی وقوع تخلف */
  dateEn: string | null;
  /** قابلیت پرداخت جریمه */
  isPayable: boolean | null;
  /** کد پلیس ثبت‌کننده تخلف */
  policemanCode: string | null;
  /** وضعیت ثبت تصویر توسط دوربین */
  hasImage: boolean | null;
}

export interface VehicleViolationRes {
  /** لیست خلافی‌های خودرو */
  violations: OffenseItem[];
  /** مبلغ کل جریمه‌ها */
  totalAmount: number;
  /** تعداد */
  count: number;
}

/**
 * وب سرویس استعلام خلافی خودرو
 *
 * از طریق این وب سرویس می تواند میزان خلافی های خودرو را استعلام نمود.
 *
 * @param nationalCode کد ملی
 * @param mobile موبایل با فرمت 09120001111
 * @param plateNumber پلاک به فرمت : ایران 11 – 1111 ب 11
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۶۰ ثانیه — فهرست کامل خلافی‌ها با جزئیات
 * @returns مقدار data از نوع VehicleViolationRes است
 */
export async function vehicleViolation(
  nationalCode: string,
  mobile: string,
  plateNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<VehicleViolationRes>> {
  return request<VehicleViolationRes>(URL, { nationalCode, mobile, plateNumber }, timeout);
}
