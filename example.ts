/**
 * API.IR TypeScript SDK — نمونه استفاده
 * اجرا: تنظیم APIIR_TOKEN → npm run example
 *
 * @see https://api.ir
 */

import { shahkar } from "./src/index.js";

const result = await shahkar("0010007700", "09121001000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true
    ? "✅ تطابق شماره موبایل با کد ملی تایید شد."
    : "❌ شماره موبایل با کد ملی تطابق ندارد.");
}
