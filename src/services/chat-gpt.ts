/**
 * API.IR TypeScript SDK — وب سرویس Chat GPT
 * سرویس ChatGPT: دسترسی به GPT نسخه ۴
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/ChatGPT";

/** مهلت پیش‌فرض این سرویس به ثانیه — پردازش زمان‌بر هوش مصنوعی */
const DEFAULT_TIMEOUT = 120;

/**
 * وب سرویس Chat GPT
 *
 * این وب سرویس gpt ورژن 4 است که دسترسی ان برای ایرانیان با محدودیت هایی روبرو شده که از این طریق می توانید از ان استفاده کنید
 *
 * @param command دستور پردازش (مقدار نمونه در OpenAPI: GenerateSummary)
 * @param data متن ورودی برای پردازش
 * @param temperature پارامتر temperature مدل (پیش‌فرض 1)
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۱۲۰ ثانیه — پردازش زمان‌بر هوش مصنوعی
 * @returns مقدار data از نوع string است
 */
export async function chatGpt(
  command: string,
  data: string,
  temperature = 1,
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<string>> {
  return request<string>(URL, { command, data, temperature }, timeout);
}
