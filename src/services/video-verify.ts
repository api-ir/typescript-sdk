/**
 * API.IR TypeScript SDK — احراز ویدئویی بایومتریک
 * سرویس VideoVerify: احراز هویت بایومتریک ویدئویی با زنده‌سنجی و تطبیق گفتار
 *
 * @see https://api.ir
 */

import { request, type ApiResult } from "../core.js";

const URL = "https://s.api.ir/api/sw1/VideoVerify";

/** مهلت پیش‌فرض این سرویس به ثانیه — ارسال ویدئوی Base64 تا ۵ مگابایت و پردازش بایومتریک زمان‌بر */
const DEFAULT_TIMEOUT = 120;

/** ورودی سرویس VideoVerify */
export interface VideoVerifyInput {
  /** کد ملی */
  nationalCode: string;
  /** تاریخ تولد به فرمت : 1370/1/1 */
  birthDate: string;
  /** سریال پشت کارت ملی یا رهیگیری رسید کارت ملی */
  serialNumber: string;
  /** ویدئوی سلفی کاربر به صورت بیس64 و حداکثر 5مگابایت */
  videoBase64: string;
  /** متنی تصادفی که فرد در زمان ضبط می خواند و از متد VideoSpeechText دریافت کنید */
  speechText: string;
  /** حد آستانه تطبیق چهره (پیش‌فرض 80) */
  matchingThreshold?: number;
  /** حد آستانه زنده سنجی (پیش‌فرض 80) */
  livenessThreshold?: number;
  /** حد آستانه تطبیق گفتار (پیش‌فرض 50) */
  speechThreshold?: number;
  /** مهلت پاسخ به ثانیه؛ پیش‌فرض این سرویس ۱۲۰ ثانیه — ارسال ویدئوی Base64 تا ۵ مگابایت و پردازش بایومتریک زمان‌بر */
  timeout?: number;
}

export interface VideoVerifyRes {
  /** میزان تطبیق چهره */
  matchingScore: number;
  /** تطبیق */
  isMatch: boolean;
  /** میزان تطبیق زنده سنجی */
  livenessScore: number;
  /** زنده بودن */
  isLiveness: boolean;
  /** میزان تطبیق گفتار */
  speechScore: number;
  /** تطبیق گفتار */
  isSpeechMatched: boolean;
  /** نتیجه نهایی */
  isPassed: boolean;
}

/**
 * احراز ویدئویی بایومتریک
 *
 * احراز هویت بایومتریک +Live، نوعی احراز بایومتریک ویدئویی است که فیلم کوتاه از چهره فرد گرفته شده و با اطلاعات هویتی و تصویر کارت ملی وی مقایسه می گردد و در نهایت تطبیق انها اعلام می شود و زنده سنجی کاربر را انجام می دهد + امکان خواندن متنی به جهت آگاهی کاربر و اعلام کاربر را دارد
 *
 * @param input ورودی سرویس (8 فیلد، به‌همراه timeout اختیاری)
 * @returns مقدار data از نوع VideoVerifyRes است
 */
export async function videoVerify(input: VideoVerifyInput): Promise<ApiResult<VideoVerifyRes>> {
  const body = {
    nationalCode: input.nationalCode,
    birthDate: input.birthDate,
    serialNumber: input.serialNumber,
    videoBase64: input.videoBase64,
    speechText: input.speechText,
    matchingThreshold: input.matchingThreshold ?? 80,
    livenessThreshold: input.livenessThreshold ?? 80,
    speechThreshold: input.speechThreshold ?? 50,
  };
  return request<VideoVerifyRes>(URL, body, input.timeout ?? DEFAULT_TIMEOUT);
}
