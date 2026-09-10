/**
 * API.IR TypeScript SDK — وب سرویس بگراند پویا برنامه
 * سرویس Wallpaper: تصویر بک‌گراند روزانه از سراسر جهان
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/Wallpaper";

/** مهلت پیش‌فرض این سرویس به ثانیه — بدون ورودی، استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * وب سرویس بگراند پویا برنامه
 *
 * این وب سرویس به صورت روزانه تصاویر بک گراند جدیدی از سراسر جهان به شما نمایش می دهد که می تواند محیط نرم افزار و سایت شما را جذاب کند
 *
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — بدون ورودی، استعلام سبک
 * @returns مقدار data از نوع string است
 */
export async function wallpaper(timeout: number = DEFAULT_TIMEOUT): Promise<ApiResult<string>> {
  return request<string>(URL, {}, timeout);
}
