/**
 * API.IR TypeScript SDK — تبدیل متن به صوت با هوش مصنوعی بومی
 * سرویس TextToSpeech: تبدیل متن کوتاه به صوت با هوش مصنوعی بومی
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/TextToSpeech";

/** مهلت پیش‌فرض این سرویس به ثانیه — تولید صوت با هوش مصنوعی */
const DEFAULT_TIMEOUT = 120;

/**
 * تبدیل متن به صوت با هوش مصنوعی بومی
 *
 * این وب سرویس تبدیل متن های کوتاه به صوت با هوش مصنوعی کاربرد دارد نکته مهم اینکه این هوش مصنوعی بومی بوده در اینترنت ملی هم کار می کند و ارتباط بین المللی وابسته نیست
 *
 * @param text متن پیام
 * @param ttsEngine موتور هوشمند=1 موتور با هوش مصنوعی بومی=2 هوش مصنوعی خارجی=3
 * @param male صدای گوینده آقا باشد یا خیر؟ (پیش‌فرض true)
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۱۲۰ ثانیه — تولید صوت با هوش مصنوعی
 * @returns مقدار data از نوع string است
 */
export async function textToSpeech(
  text: string,
  ttsEngine: number,
  male = true,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<string>> {
  return request<string>(URL, { text, ttsEngine, male }, timeout);
}
