/**
 * API.IR TypeScript SDK — سرویس رهیگیری بسته پستی
 * سرویس PostalTracking: وضعیت و رویدادهای مرسوله پستی با کد رهگیری
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/PostalTracking";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface PostalTrackingItem {
  /** تاریخ */
  date: string | null;
  /** رویداد */
  event: string | null;
  /** شماره */
  id: string | null;
  /** موقعیت پستی */
  postalNode: string | null;
  /** ساعت */
  time: string | null;
}

export interface PostalTrackingRes {
  /** نوع ارسال */
  postType: string | null;
  /** دفتر پست مبدا */
  sourcePostOffice: string | null;
  /** مبدا */
  source: string | null;
  /** مقصد */
  destination: string | null;
  /** فرستنده */
  senderName: string | null;
  /** گیرنده */
  receiverName: string | null;
  /** کدپستی مبدا */
  sourcePostalCode: string | null;
  /** کدپستی مقصد */
  destinationPostalCode: string | null;
  /** وزن */
  weight: string | null;
  /** هزینه */
  totalAmount: string | null;
  /** جزئیات */
  details: PostalTrackingItem[];
}

/**
 * سرویس رهیگیری بسته پستی
 *
 * با سرویس استعلام مرسولات پستی می‌توانید وضعیت بسته‌های پستی خود را به‌سادگی و در هر لحظه مشاهده کنید. تنها کافی است کد پیگیری مرسوله را وارد کنید تا اطلاعات کامل شامل نوع ارسال، دفتر پست مبدا، مبدا و مقصد، فرستنده و گیرنده، وزن، هزینه و تمامی رویدادهای مسیر بسته از تولید بارکد تا تحویل نهایی برای شما نمایش داده شود. این سرویس با امنیت بالا و استفاده آسان، همه جزئیات حرکت بسته را در قالب یک پاسخ واضح و قابل فهم ارائه می‌دهد و مناسب افرادی است که می‌خواهند بدون پیچیدگی‌های فنی، بسته‌های خود را پیگیری کنند.
 *
 * @param trackingCode کد رهیگیری مرسوله
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع PostalTrackingRes است
 */
export async function postalTracking(
  trackingCode: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<PostalTrackingRes>> {
  return request<PostalTrackingRes>(URL, { trackingCode }, timeout);
}
