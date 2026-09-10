/**
 * API.IR TypeScript SDK — استعلام مشخصات و مدل خودرو
 * سرویس VehicleInfo: شماره موتور، شاسی، VIN و مدل خودرو
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/VehicleInfo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface VehicleInfoRes {
  /** نام خودرو */
  name: string | null;
  /** شماره موتور */
  engineNumber: string | null;
  /** شماره شاسی */
  chassisNumber: string | null;
  /** شماره VIN */
  vin: string | null;
  /** مدل */
  model: number;
}

/**
 * استعلام مشخصات و مدل خودرو
 *
 * این سرویس با دریافت کد ملی و شماره پلاک شماره موتور ، شماره شاسی، شماره vin و مدل خودرو را بر می گرداند. پلاک را از سمت چپ به راست به ترتیب وارد کنید. ابتداد مقدار عددی بعد مقدار حرف بعد عدد 3 رقمی و بعد عدد دو رقمی مربوط به بخش ایران پلاک را وارد کنید. نمونه از چپ بخوانید : 11188ب12
 *
 * @param nationalCode کد ملی
 * @param plateNumber پلاک به فرمت : ایران 11 – 1111 ب 11
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع VehicleInfoRes است
 */
export async function vehicleInfo(
  nationalCode: string,
  plateNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<VehicleInfoRes>> {
  return request<VehicleInfoRes>(URL, { nationalCode, plateNumber }, timeout);
}
