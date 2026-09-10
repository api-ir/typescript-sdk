/**
 * API.IR TypeScript SDK — ارسال پیامک خدماتی
 * سرویس SendSms: ارسال پیامک خدماتی با خط اختصاصی به لیست شماره‌ها
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/SendSms";

/** مهلت پیش‌فرض این سرویس به ثانیه — ارسال گروهی به لیست شماره‌ها */
const DEFAULT_TIMEOUT = 60;

/**
 * ارسال پیامک خدماتی
 *
 * این وب سرویس برای ارسال انواع پیامک به تمامی شماره ها با خط اختصاصی و خدماتی می باشد.
 *
 * @param message متن پیامک
 * @param mobiles موبابل ها به صورت لیست
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۶۰ ثانیه — ارسال گروهی به لیست شماره‌ها
 * @returns مقدار data از نوع number است
 */
export async function sendSms(
  message: string,
  mobiles: string[],
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<number>> {
  return request<number>(URL, { message, mobiles }, timeout);
}
