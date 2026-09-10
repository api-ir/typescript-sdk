/**
 * API.IR TypeScript SDK — استعلام کارت و سند خودرو
 * سرویس VehicleCard: اطلاعات کارت خودرو و سند مالکیت
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/VehicleCard";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface VehicleCardStatus {
  id: number;
  description: string;
}

export interface VehicleCardType {
  id: number;
  description: string;
}

export interface VehicleDocumentType {
  id: number;
  description: string;
}

export interface VehicleCardRes {
  /** بارکد پستی کارت */
  cardPostalBarcode: string;
  cardStatus: VehicleCardStatus;
  /** تاریخ صدور کارت */
  cardIssuanceDate: string;
  /** تاریخ چاپ کارت */
  cardPrintDate: string;
  /** کارت هوشمند هست یا نه */
  isSmart: boolean;
  cardType: VehicleCardType;
  /** وضعیت سند */
  documentStatus: number;
  /** تاریخ صدور سند */
  documentIssuanceDate: string;
  /** تاریخ چاپ سند */
  documentPrintDate: string;
  documentType: VehicleDocumentType;
}

/**
 * استعلام کارت و سند خودرو
 *
 * اطلاعات مربوط به کارت خودرو و سند مالکیت را ارائه می‌دهد تا صحت و اعتبار مدارک مالکیت وسیله نقلیه را تایید کند. این سرویس برای جلوگیری از جعل مدارک و تضمین اصالت خودرو در معاملات و نقل‌وانتقالات کاربردی است. فرمت صحیح پلاک درج پلاک به صورت 635ب11ایران20 است
 *
 * @param nationalCode کد ملی
 * @param plateNumber پلاک به فرمت : ایران 11 – 1111 ب 11
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع VehicleCardRes است
 */
export async function vehicleCard(
  nationalCode: string,
  plateNumber: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<VehicleCardRes>> {
  return request<VehicleCardRes>(URL, { nationalCode, plateNumber }, timeout);
}
