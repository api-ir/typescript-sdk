/**
 * API.IR TypeScript SDK — نقطه‌ی ورود
 * export همه‌ی سرویس‌ها، اینترفیس‌ها، تنظیمات و قالب خروجی
 *
 * @see https://api.ir
 */

export { config } from "./config.js";
export type { ApiResult } from "./core.js";

export * from "./services/echo.js";
export * from "./services/shahkar.js";
export * from "./services/shahkar-lite.js";
export * from "./services/shahkar-pro.js";
export * from "./services/person-info.js";
export * from "./services/person-data.js";
export * from "./services/card-match.js";
export * from "./services/card-mobile-match.js";
export * from "./services/iban-match.js";
export * from "./services/iban-match-pro.js";
export * from "./services/call.js";
export * from "./services/call-otp.js";
export * from "./services/call-otp-alt.js";
export * from "./services/sms-otp.js";
export * from "./services/send-sms.js";
export * from "./services/video-verify-speech-text.js";
export * from "./services/video-verify.js";
export * from "./services/enamad.js";
export * from "./services/is-holiday.js";
export * from "./services/wallpaper.js";
export * from "./services/ip-location.js";
export * from "./services/check-email.js";
export * from "./services/ip-is-iran.js";
export * from "./services/my-ip.js";
export * from "./services/bank-account-info.js";
export * from "./services/bank-card-info.js";
export * from "./services/card-info.js";
export * from "./services/card-to-iban.js";
export * from "./services/iban-info.js";
export * from "./services/company-info.js";
export * from "./services/company-members.js";
export * from "./services/company-newspapers.js";
export * from "./services/company-signatories.js";
export * from "./services/tax-records.js";
export * from "./services/geo-to-address.js";
export * from "./services/postal-code-info.js";
export * from "./services/postal-code-pro.js";
export * from "./services/postal-tracking.js";
export * from "./services/postal-code-location.js";
export * from "./services/chat-gpt.js";
export * from "./services/text-to-speech.js";
export * from "./services/sana.js";
export * from "./services/unpaid-cheque.js";
export * from "./services/unpaid-cheque-lite.js";
export * from "./services/unpaid-cheque-pro.js";
export * from "./services/cheque-color.js";
export * from "./services/cheque-info.js";
export * from "./services/license.js";
export * from "./services/medical-license.js";
export * from "./services/active-loans.js";
export * from "./services/passport-status.js";
export * from "./services/driving-score.js";
export * from "./services/driving-lisense.js";
export * from "./services/driving-license.js";
export * from "./services/military-status.js";
export * from "./services/active-plates.js";
export * from "./services/plate-history.js";
export * from "./services/vehicle-card.js";
export * from "./services/vehicle-info.js";
export * from "./services/vehicle-violation.js";
export * from "./services/nationality-status.js";
export * from "./services/watter-bill.js";
export * from "./services/watter-bill-info.js";
export * from "./services/gas-bill.js";
export * from "./services/gas-bill-info.js";
export * from "./services/power-bill.js";
export * from "./services/power-bill-info.js";
