/**
 * API.IR TypeScript SDK — دریافت متن تصادفی ورودی احراز ویدئویی
 * سرویس VideoVerifySpeechText: تولید متن تصادفی برای خواندن در احراز ویدئویی
 *
 * @see https://api.ir
 */

import { config } from "../config.js";
import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/VideoVerifySpeechText";

/** مهلت پیش‌فرض این سرویس به ثانیه — بدون ورودی، استعلام سبک، از تنظیم سراسری */
const DEFAULT_TIMEOUT = config.timeout;

/**
 * دریافت متن تصادفی ورودی احراز ویدئویی
 *
 * این سرویس با هر بار اجرا متنی تصاوفی جهت خواندن در احراز ویدئویی تولید می کند
 *
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس config.timeout (۳۰ ثانیه) — بدون ورودی، استعلام سبک
 * @returns مقدار data از نوع string است
 */
export async function videoVerifySpeechText(timeout: number = DEFAULT_TIMEOUT): Promise<ApiResult<string>> {
  return request<string>(URL, {}, timeout);
}
