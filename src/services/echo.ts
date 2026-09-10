/**
 * API.IR TypeScript SDK — Echo
 * سرویس Echo: تست و پیاده‌سازی رایگان با ساختاری یکسان با سایر وب‌سرویس‌ها
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/Sandbox/Echo";

/** مهلت پیش‌فرض این سرویس به ثانیه — استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

export interface EchoRes {
  /** دیتا نمونه رشته ای : پیام خوش‌آمدگویی */
  greeting: string | null;
  /** دیتا نمونه رشته ای : شغل */
  job: string | null;
  /** دیتا نمونه لیست : خصوصیات */
  quirks: string[];
  /** دیتا نمونه بولین : وضعیت توکن/کلید */
  tokenStatus: boolean;
}

/**
 * Echo
 *
 * این وب سرویس برای تمرین، تست، دیباگ و پیاده سازی صحیح و رایگان وب سرویس ها قبل از پیاده سازی عملیاتی می باشد و ساختار آن با دیگر وب سرویس ها یکسان در نظر گرفته شده که بتوانید به آسانی تست و پیاده سازی اولیه را انجام دهید
 *
 * @param name نام شما؟
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — استعلام سبک
 * @returns مقدار data از نوع EchoRes است
 */
export async function echo(
  name: string,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<EchoRes>> {
  return request<EchoRes>(URL, { name }, timeout);
}
