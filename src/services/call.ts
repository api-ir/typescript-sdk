/**
 * API.IR TypeScript SDK — وب سرویس تماس تلفنی
 * سرویس Call: تماس تلفنی با فایل صوتی به شماره‌های ثابت و همراه
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/Call";

/** مهلت پیش‌فرض این سرویس به ثانیه — ارسال گروهی به لیست شماره‌ها */
const DEFAULT_TIMEOUT = 60;

/**
 * وب سرویس تماس تلفنی
 *
 * این وب سرویس برای برقراری تماس با مشتری است با این وب سرویس می توانید پیام های طولانی را از طریق تماس به مشتری اعلام کنید. تماس تلفنی بلک لیست ندارد. به تمامی شماره های ثابت و همراه قابل ارسال است. امکان سفارشی سازی لهجه و گویش و موزیک پس زمینه را دارد و از اثر بخشی بالایی برخوردار است.
 *
 * @param voiceID شناسه فایل صوتی
 * @param numbers لیستی از شماره موبایل ها یا تلفن های ثابت
 * @param timeout مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۶۰ ثانیه — ارسال گروهی به لیست شماره‌ها
 * @returns مقدار data از نوع boolean است
 */
export async function call(
  voiceID: string,
  numbers: string[],
  timeout: number = DEFAULT_TIMEOUT,
): Promise<ApiResult<boolean>> {
  return request<boolean>(URL, { voiceID, numbers }, timeout);
}
