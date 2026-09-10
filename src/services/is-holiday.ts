/**
 * API.IR TypeScript SDK — استعلام تعطیلی امروز
 * سرویس IsHoliday: تعیین تعطیل بودن امروز
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/IsHoliday";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * استعلام تعطیلی امروز
 *
 * این وب سرویس وضعیت تعطیل بودن امروز را تعیین می کند و برای اجرا یا توقف برخی سرویس ها در روز های تعطیل کاربرد دارد
 *
 * @param weekend تعطیلات آخر هفته هم لحاظ شود؟ (پیش‌فرض true)
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع boolean است
 */
export async function isHoliday(
  weekend = true,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { weekend }, timeout);
}
