# SDK رسمی TypeScript پلتفرم api.ir

رابط رسمی پلتفرم **api.ir** برای Node.js 20+ و TypeScript 5 — ساده، خوانا و با تنها یک وابستگی.
احراز هویت، استعلام‌های هویتی و بانکی، OTP پیامکی و صوتی و پیامک، همه با **یک کلید یکپارچه**.

> ⚠️ **این SDK فقط سمت سرور اجرا می‌شود.** توکن api.ir نباید هرگز به مرورگر برسد.

## فهرست

1. [معرفی api.ir](#۱-معرفی-apiir)
2. [ثبت‌نام و دریافت کلید](#۲-ثبتنام-و-دریافت-کلید)
3. [شروع سریع](#۳-شروع-سریع)
4. [قرارداد خروجی](#۴-قرارداد-خروجی)
5. [فهرست کامل وب‌سرویس‌ها](#۵-فهرست-کامل-وبسرویسها)
6. [راهنمای هر سرویس](#۶-راهنمای-هر-سرویس)
7. [سناریوهای پرکاربرد](#۷-سناریوهای-پرکاربرد)
8. [تست بدون هزینه](#۸-تست-بدون-هزینه)
9. [مدیریت خطا](#۹-مدیریت-خطا)
10. [نکات امنیتی و عملیاتی](#۱۰-نکات-امنیتی-و-عملیاتی)
11. [پشتیبانی و منابع](#۱۱-پشتیبانی-و-منابع)

---

## ۱. معرفی api.ir

**api.ir** یک **پلتفرم جامع ارائه وب‌سرویس** است که احراز هویت، استعلام‌های هویتی و بانکی، OTP پیامکی و صوتی و پیامک را با **استاندارد واحد** و **پایداری بالا** از طریق **یک کلید یکپارچه** در اختیار شما می‌گذارد.

### ویژگی‌های کلیدی

- **پرداخت به‌ازای مصرف (PayAsYouGo)** که به‌ازای هر فراخوانی کسر می‌شود، و **نداشتن هزینه‌ی اولیه**
- **فعال‌سازی آنی و لحظه‌ای** پس از ساخت کلید در `https://p.api.ir`
- **سرویس‌های مدیریت‌شده با مدیریت لاگ** همه‌ی فراخوانی‌ها در پنل کاربری
- سرویس **Sandbox Echo** روی `https://s.api.ir/api/sandbox/echo` برای تست و پیاده‌سازی آسان
- **نمونه‌کدهای آماده برای تمامی زبان‌های برنامه‌نویسی و اکثر کتابخانه‌ها** از طریق `https://s.api.ir/code`
- ارائه‌ی **پروتکل OpenAPI به‌روز** به آدرس `https://s.api.ir/json` (همان ورودی ساخت این SDK)
- **مستندات تخصصی و حرفه‌ای** و **مستندات Postman** به آدرس `https://documenter.getpostman.com/view/40733477/2sAYJ7gJsi`
- ساخت **۵ کلید برای هر حساب کاربری به‌صورت رایگان** و اتصال **۵ نرم‌افزار یا پلتفرم**
- امکان **مدیریت IP و محدودیت برای هر کلید**
- استاندارد **Bearer Token** و ویژگی‌های بسیار دیگر که پیاده‌سازی و توسعه‌ی برنامه‌هایتان را جلو می‌اندازد
- **استاندارد پایداری بالای ۹۹.۹٪** با شفافیت — اطمینان از استفاده از یک **پلتفرم رده‌اول ایران**؛ در هر لحظه می‌توانید اپتایم سرویس‌ها را در `https://status.api.ir/status/api-ir` مشاهده نمایید

---

## ۲. ثبت‌نام و دریافت کلید

1. **ثبت‌نام** — حساب کاربری خود را در `https://p.api.ir` بسازید؛ رایگان و **بدون هزینه‌ی اولیه**.
2. **ساخت کلید** — وارد پنل `https://p.api.ir` شوید و کلید API بسازید. هر حساب **۵ کلید رایگان** و اتصال **۵ نرم‌افزار یا پلتفرم** دارد؛ کلید **آنی و لحظه‌ای** فعال می‌شود و **مدیریت IP و محدودیت برای هر کلید** از همان پنل انجام می‌شود.
3. **قرار دادن کلید در SDK** — کلید را کپی کنید و در متغیر محیطی `APIIR_TOKEN` قرار دهید (فقط سمت سرور)، سپس به بخش [۳. شروع سریع](#۳-شروع-سریع) بروید. اعتبار حساب و **لاگ همه‌ی فراخوانی‌ها** نیز در همان پنل دیده می‌شود (**پرداخت به‌ازای مصرف**).

> برای هر نرم‌افزار یک کلید مجزا بسازید و پس از تحویل پروژه کلید را حذف کنید.

---

## ۳. شروع سریع

**پیش‌نیاز:** Node.js 20+ و TypeScript 5.

> ⚠️ این SDK **فقط سمت سرور** اجرا می‌شود. توکن را هرگز در کد مرورگر، اپ موبایل یا متغیرهای عمومی (مثل `NEXT_PUBLIC_`) قرار ندهید.

1. در `https://p.api.ir` ثبت‌نام کنید و کلید بسازید (بخش ۲).
2. این پوشه را در پروژه‌ی خود کپی کنید (یا `npm install` را داخل آن اجرا کنید).
3. کلید را در متغیر محیطی قرار دهید:

   ```bash
   # Linux / macOS
   export APIIR_TOKEN="کلید-شما"

   # Windows PowerShell
   $env:APIIR_TOKEN = "کلید-شما"
   ```

4. وابستگی‌ها را نصب و نمونه را اجرا کنید:

   ```bash
   npm install
   npm run example
   ```

سه تنظیم SDK — `token`، `timeout` و `sslVerify` — کنار هم در [src/config.ts](src/config.ts) هستند. `timeout` علاوه بر آن در هر فراخوانی قابل تغییر است.

### نمونه کد شروع سریع

```ts
import { shahkar } from "./src/index.js";

const result = await shahkar("0010007700", "09121001000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تطابق تایید شد." : "❌ تطابق ندارد.");
}
```

این کد بدون هیچ تغییری (جز تنظیم `APIIR_TOKEN`) اجرا می‌شود و همان چیزی است که در [example.ts](example.ts) آمده است.

### احراز هویت

- احراز هویت با استاندارد **Bearer Token** انجام می‌شود. کلید از پنل کاربری `https://p.api.ir` ساخته می‌شود (**۵ کلید رایگان** برای هر حساب).
- شما فقط متغیر محیطی `APIIR_TOKEN` (یا مقدار `config.token` در [src/config.ts](src/config.ts)) را تنظیم می‌کنید؛ SDK آن را به‌صورت خودکار در هدر `Authorization: Bearer {token}` **همه‌ی درخواست‌ها** قرار می‌دهد.
- **هیچ تابع سرویسی پارامتر توکن ندارد.**
- کلید نامعتبر یا تنظیم‌نشده با `success === false` و `code === 401` برمی‌گردد (بخش [۹. مدیریت خطا](#۹-مدیریت-خطا)).
- محدودیت IP برای هر کلید از همان پنل قابل تنظیم است. توکن هرگز نباید به مرورگر برسد.

### مهلت پاسخ (timeout)

- واحد همه‌جا **ثانیه** است: در `config.ts`، در فایل‌های سرویس و در آرگومان توابع.
- `config.timeout` (پیش‌فرض `30`) مهلت سراسری **سرویس‌های سبک** است.
- هر سرویس `DEFAULT_TIMEOUT` مخصوص خودش را دارد: سرویس‌های سبک از `config.timeout` می‌خوانند؛ سرویس‌های حجیم (ارسال گروهی، Base64، هوش مصنوعی) مقدار بزرگ‌تر `60` یا `120` دارند. مقدار و دلیل هر سرویس در بخش ۶ آمده است.
- در هر فراخوانی می‌توانید مهلت را با **آرگومان آخر** `timeout` (یا فیلد `timeout` در آبجکت ورودی) تغییر دهید:

  ```ts
  const result = await shahkar("0010007700", "09121001000", false, 10); // ۱۰ ثانیه فقط برای همین فراخوانی
  ```

- وقتی مهلت تمام شود، خروجی همان `ApiResult<T>` با `success === false` و متن خطا در `message` است؛ Promise **هرگز reject نمی‌شود**.

### اعتبارسنجی SSL

- `config.sslVerify` پیش‌فرض `true` است و گواهی سرور `s.api.ir` را بررسی می‌کند.
- این تنظیم **سراسری** است، برای همه‌ی توابع یکسان اعمال می‌شود و به‌ازای هر فراخوانی قابل تغییر نیست؛ هیچ تابع سرویسی پارامتر SSL ندارد.
- چون `Agent` یک بار در سطح ماژول ساخته می‌شود، مقدار آن باید **قبل از اولین import هسته** در `config.ts` تنظیم شده باشد.
- فقط اگر محیط داخلی شما خطای گواهی می‌دهد و **فقط به‌صورت موقت** آن را `false` کنید. راه‌حل درست نصب گواهی معتبر روی سرور است.
- ⚠️ خاموش کردن آن امنیت ارتباط را از بین می‌برد و فقط در Node کار می‌کند (با `Agent` از پکیج `undici`).

---

## ۴. قرارداد خروجی

هر تابع سرویس **همیشه** یک شیء با همین چهار فیلد برمی‌گرداند:

```ts
export interface ApiResult<T> {
  /** فقط وقتی true است که سرویس هم true برگردانده باشد */
  success: boolean;
  /** فیلد code سرویس */
  code: number;
  /** در حالت خطا هرگز null نیست */
  message: string | null;
  /** فیلد data سرویس */
  data: T | null;
}
```

> **همیشه اول `success` را بررسی کنید، سپس در صورت `null` نبودن `data`، مقدار آن را بخوانید.**

الگوی استاندارد:

```ts
const result = await personInfo("0010007700", "1371/1/1");

if (!result.success || result.data === null) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(`${result.data.firstName} ${result.data.lastName}`);
}
```

- **هیچ تابعی `throw` نمی‌کند**؛ بنابراین `try/catch` لازم نیست.
- در هر شرایطی — خطای شبکه، پایان مهلت، پاسخ غیر ۲۰۰، پاسخ غیرقابل تبدیل — همین شیء برمی‌گردد و اگر خطایی رخ داده باشد، متن آن در `message` است.
- کد HTTP در خروجی وجود ندارد؛ پاسخ سرور با هر کد HTTP به همین قالب تبدیل می‌شود.

---

## ۵. فهرست کامل وب‌سرویس‌ها

همه‌ی ۶۷ متد OpenAPI به همان ترتیب، بدون دسته‌بندی:

| سرویس | نام فارسی | شرح مختصر | پیاده‌سازی |
|---|---|---|---|
| `Echo` | Echo | تست و پیاده‌سازی رایگان با ساختاری یکسان با سایر وب‌سرویس‌ها | [echo.ts](src/services/echo.ts) |
| `Shahkar` | احراز هویت شاهکار | تطبیق کد ملی با شماره موبایل به‌صورت رمزشده، حقیقی و حقوقی | [shahkar.ts](src/services/shahkar.ts) |
| `ShahkarLite` | احراز هویت شاهکار Lite | نسخه سبک شاهکار مناسب کسب‌وکارهای کوچک | [shahkar-lite.ts](src/services/shahkar-lite.ts) |
| `ShahkarPro` | احراز هویت شاهکار Pro | شاهکار با پایداری بالاتر برای سازمان‌ها و کسب‌وکارهای بزرگ | [shahkar-pro.ts](src/services/shahkar-pro.ts) |
| `PersonInfo` | استعلام مشخصات هویتی | مشخصات هویتی و زنده بودن فرد با کد ملی و تاریخ تولد | [person-info.ts](src/services/person-info.ts) |
| `PersonData` | استعلام مشخصات هویتی 2 | مشخصات هویتی به‌همراه عکس کارت ملی از ثبت احوال | [person-data.ts](src/services/person-data.ts) |
| `CardMatch` | تطبیق کد ملی با کارت بانکی | تطبیق کد ملی با شماره کارت بانکی | [card-match.ts](src/services/card-match.ts) |
| `CardMobileMatch` | تطبیق کارت بانکی با موبایل | تطبیق شماره موبایل با کارت بانکی | [card-mobile-match.ts](src/services/card-mobile-match.ts) |
| `IbanMatch` | تطبیق کد ملی با شبا | تطبیق کد ملی با شماره شبا | [iban-match.ts](src/services/iban-match.ts) |
| `IbanMatchPro` | تطبیق کد ملی با شبا پرو (سیاح) | تطبیق کد ملی با شبا بدون تاریخ تولد | [iban-match-pro.ts](src/services/iban-match-pro.ts) |
| `Call` | وب سرویس تماس تلفنی | تماس تلفنی با فایل صوتی به شماره‌های ثابت و همراه | [call.ts](src/services/call.ts) |
| `CallOTP` | وب سرویس OTP تلفنی | اعلام کد یک‌بارمصرف از طریق تماس تلفنی | [call-otp.ts](src/services/call-otp.ts) |
| `CallOTPalt` | وب سرویس OTP تلفنی alt | OTP تلفنی با شبکه مجزا به‌عنوان پشتیبان CallOTP | [call-otp-alt.ts](src/services/call-otp-alt.ts) |
| `SmsOTP` | وب سرویس OTP پیامکی | ارسال کد یک‌بارمصرف پیامکی با خط ۸ رقمی به تمامی شماره‌ها | [sms-otp.ts](src/services/sms-otp.ts) |
| `SendSms` | ارسال پیامک خدماتی | ارسال پیامک خدماتی با خط اختصاصی به لیست شماره‌ها | [send-sms.ts](src/services/send-sms.ts) |
| `VideoVerifySpeechText` | دریافت متن تصادفی ورودی احراز ویدئویی | تولید متن تصادفی برای خواندن در احراز ویدئویی | [video-verify-speech-text.ts](src/services/video-verify-speech-text.ts) |
| `VideoVerify` | احراز ویدئویی بایومتریک | احراز هویت بایومتریک ویدئویی با زنده‌سنجی و تطبیق گفتار | [video-verify.ts](src/services/video-verify.ts) |
| `Enamad` | استعلام دارنده اینماد | وضعیت نماد اعتماد الکترونیکی یک وب‌سایت | [enamad.ts](src/services/enamad.ts) |
| `IsHoliday` | استعلام تعطیلی امروز | تعیین تعطیل بودن امروز | [is-holiday.ts](src/services/is-holiday.ts) |
| `Wallpaper` | وب سرویس بگراند پویا برنامه | تصویر بک‌گراند روزانه از سراسر جهان | [wallpaper.ts](src/services/wallpaper.ts) |
| `IPLocation` | وب سرویس تشخیص موقعیت IP | موقعیت جغرافیایی یک IP | [ip-location.ts](src/services/ip-location.ts) |
| `CheckEmail` | اعتبار سنجی ایمیل | صحت آدرس و فعال بودن ایمیل | [check-email.ts](src/services/check-email.ts) |
| `IPIsIran` | وب سرویس تشخیص IP ایرانی | ایرانی بودن IP کاربر | [ip-is-iran.ts](src/services/ip-is-iran.ts) |
| `MyIP` | وب سرویس دریافت IP برنامه (کلاینت) | دریافت IP برنامه (کلاینت) | [my-ip.ts](src/services/my-ip.ts) |
| `BankAccountInfo` | استعلام شبا با شماره حساب | دریافت شبا از شماره حساب بانکی | [bank-account-info.ts](src/services/bank-account-info.ts) |
| `BankCardInfo` | استعلام مشخصات کارت بانکی | نام دارنده، شبا و شماره حساب از شماره کارت | [bank-card-info.ts](src/services/bank-card-info.ts) |
| `CardInfo` | استعلام نام مالک کارت بانکی | نام صاحب کارت بانکی | [card-info.ts](src/services/card-info.ts) |
| `CardToIban` | سرویس تبدیل کارت به شبا | مشخصات شبای یک کارت بانکی | [card-to-iban.ts](src/services/card-to-iban.ts) |
| `IbanInfo` | استعلام نام دارنده شبا | نام شخص، نام بانک و وضعیت فعال بودن شبا | [iban-info.ts](src/services/iban-info.ts) |
| `CompanyInfo` | استعلام شخص حقوقی | اطلاعات ثبتی شخص حقوقی با شناسه ملی | [company-info.ts](src/services/company-info.ts) |
| `CompanyMembers` | استعلام اعضای هیئت مدیره | اعضای هیئت مدیره و سهامداران شرکت | [company-members.ts](src/services/company-members.ts) |
| `CompanyNewspapers` | استعلام اگهی های روزنامه رسمی | آگهی‌های روزنامه رسمی و محلی شرکت | [company-newspapers.ts](src/services/company-newspapers.ts) |
| `CompanySignatories` | استعلام صاحبین حق امضا شرکت‌ها | صاحبان حق امضای شرکت طبق روزنامه رسمی | [company-signatories.ts](src/services/company-signatories.ts) |
| `TaxRecords` | استعلام پرونده ها مالیاتی | پرونده‌های مالیاتی و وضعیت ثبت‌نام اشخاص حقیقی و حقوقی | [tax-records.ts](src/services/tax-records.ts) |
| `GeoToAddress` | تبدیل لوکیشن به آدرس | تبدیل مختصات جغرافیایی به استان، شهر و آدرس | [geo-to-address.ts](src/services/geo-to-address.ts) |
| `PostalCodeInfo` | سرویس استعلام کدپستی | آدرس دقیق از کد پستی | [postal-code-info.ts](src/services/postal-code-info.ts) |
| `PostalCodePro` | سرویس استعلام کدپستی نسخه Pro | آدرس دقیق از کد پستی به‌همراه لوکیشن | [postal-code-pro.ts](src/services/postal-code-pro.ts) |
| `PostalTracking` | سرویس رهیگیری بسته پستی | وضعیت و رویدادهای مرسوله پستی با کد رهگیری | [postal-tracking.ts](src/services/postal-tracking.ts) |
| `PostalCodeLocation` | سرویس دریافت لوکیشن با کدپستی | مختصات جغرافیایی یک کد پستی | [postal-code-location.ts](src/services/postal-code-location.ts) |
| `ChatGPT` | وب سرویس Chat GPT | دسترسی به GPT نسخه ۴ | [chat-gpt.ts](src/services/chat-gpt.ts) |
| `TextToSpeech` | تبدیل متن به صوت با هوش مصنوعی بومی | تبدیل متن کوتاه به صوت با هوش مصنوعی بومی | [text-to-speech.ts](src/services/text-to-speech.ts) |
| `Sana` | استعلام سامانه ثنا | داشتن یا نداشتن شماره ثنا | [sana.ts](src/services/sana.ts) |
| `UnpaidCheque` | استعلام تعداد چک برگشتی | تعداد و مبلغ چک‌های برگشتی | [unpaid-cheque.ts](src/services/unpaid-cheque.ts) |
| `UnpaidChequeLite` | استعلام تعداد چک برگشتی Lite | فقط تعداد چک‌های برگشتی | [unpaid-cheque-lite.ts](src/services/unpaid-cheque-lite.ts) |
| `UnpaidChequePro` | استعلام تعداد چک برگشتی پرو | تعداد، مبلغ و لیست چک‌های برگشتی به‌همراه شعبه | [unpaid-cheque-pro.ts](src/services/unpaid-cheque-pro.ts) |
| `ChequeColor` | استعلام رنگ چک صیادی | رنگ چک صیادی صادرکننده | [cheque-color.ts](src/services/cheque-color.ts) |
| `ChequeInfo` | استعلام مشخصات چک صیادی | مشخصات کامل چک با شناسه صیادی | [cheque-info.ts](src/services/cheque-info.ts) |
| `License` | استعلام اعتبار مجوز شغلی | اعتبار مجوز شغلی (پروانه کسب) | [license.ts](src/services/license.ts) |
| `MedicalLicense` | استعلام اعتبار پروانه پزشکی | اعتبار پروانه پزشکی | [medical-license.ts](src/services/medical-license.ts) |
| `ActiveLoans` | استعلام تسهیلات فعال بانکی | تسهیلات و وام‌های فعال مشتری | [active-loans.ts](src/services/active-loans.ts) |
| `PassportStatus` | استعلام وضعیت پاسپورت | اعتبار و وضعیت پاسپورت | [passport-status.ts](src/services/passport-status.ts) |
| `DrivingScore` | استعلام نمره منفی گواهینامه | نمرات منفی ثبت‌شده روی گواهینامه رانندگی | [driving-score.ts](src/services/driving-score.ts) |
| `DrivingLisense` | استعلام گواهینامه رانندگی قدیم | اعتبار گواهینامه رانندگی (نسخه قدیم) | [driving-lisense.ts](src/services/driving-lisense.ts) |
| `DrivingLicense` | استعلام گواهینامه رانندگی جدید | اعتبار گواهینامه رانندگی (نسخه جدید) | [driving-license.ts](src/services/driving-license.ts) |
| `MilitaryStatus` | استعلام خدمت سربازی | وضعیت نظام وظیفه با کد ملی و تاریخ تولد | [military-status.ts](src/services/military-status.ts) |
| `ActivePlates` | استعلام پلاک های فعال | فهرست پلاک‌های فعال یک فرد | [active-plates.ts](src/services/active-plates.ts) |
| `PlateHistory` | استعلام تاریخچه پلاک | تاریخچه کامل پلاک و مدل خودرو | [plate-history.ts](src/services/plate-history.ts) |
| `VehicleCard` | استعلام کارت و سند خودرو | اطلاعات کارت خودرو و سند مالکیت | [vehicle-card.ts](src/services/vehicle-card.ts) |
| `VehicleInfo` | استعلام مشخصات و مدل خودرو | شماره موتور، شاسی، VIN و مدل خودرو | [vehicle-info.ts](src/services/vehicle-info.ts) |
| `VehicleViolation` | وب سرویس استعلام خلافی خودرو | میزان خلافی‌های خودرو | [vehicle-violation.ts](src/services/vehicle-violation.ts) |
| `NationalityStatus` | استعلام وضعیت اتباع | اعتبار کارت اتباع از مراجع انتظامی | [nationality-status.ts](src/services/nationality-status.ts) |
| `WatterBill` | وب سرویس قبض آب | وضعیت پرداخت قبض آب | [watter-bill.ts](src/services/watter-bill.ts) |
| `WatterBillInfo` | وب سرویس قبض آب با جزئیات | قبض آب به‌همراه مشخصات مشترک | [watter-bill-info.ts](src/services/watter-bill-info.ts) |
| `GasBill` | وب سرویس قبض گاز | وضعیت پرداخت و بدهی قبض گاز | [gas-bill.ts](src/services/gas-bill.ts) |
| `GasBillInfo` | وب سرویس قبض گاز با جزئیات | قبض گاز به‌همراه مشخصات اشتراک | [gas-bill-info.ts](src/services/gas-bill-info.ts) |
| `PowerBill` | وب سرویس قبض برق | وضعیت پرداخت قبض برق | [power-bill.ts](src/services/power-bill.ts) |
| `PowerBillInfo` | وب سرویس قبض برق با جزئیات | قبض برق به‌همراه مشخصات مشترک | [power-bill-info.ts](src/services/power-bill-info.ts) |

---

## ۶. راهنمای هر سرویس

در همه‌ی نمونه‌ها `result` از نوع `ApiResult<T>` است و ابتدا `success` بررسی می‌شود. مقادیر نمونه همان مقادیر نمونه‌ی OpenAPI هستند.

### ۱. Echo — Echo

`POST https://s.api.ir/api/Sandbox/Echo` · پیاده‌سازی: [echo.ts](src/services/echo.ts)

**کاربرد:** تست و پیاده‌سازی رایگان با ساختاری یکسان با سایر وب‌سرویس‌ها.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `name` | `string` | بله | نام شما؟ | `"علی"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { echo } from "./src/index.js";

const result = await echo("علی");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`EchoRes`):

```json
{
  "greeting": "سلام علی",
  "job": "Developer",
  "quirks": [],
  "tokenStatus": false
}
```

> **نکته:** این سرویس بدون هزینه است و برای بررسی صحت کلید مناسب است؛ فیلد `tokenStatus` در `data` وضعیت کلید شما را نشان می‌دهد.

### ۲. Shahkar — احراز هویت شاهکار

`POST https://s.api.ir/api/sw1/Shahkar` · پیاده‌سازی: [shahkar.ts](src/services/shahkar.ts)

**کاربرد:** تطبیق کد ملی با شماره موبایل به‌صورت رمزشده، حقیقی و حقوقی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی یا شناسه ملی | `"0010007700"` |
| `mobile` | `string` | بله | موبایل با فرمت 09120001111 | `"09120000000"` |
| `isCompany` | `boolean` | خیر (پیش‌فرض `false`) | حقوقی یا حقیقی | `false` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { shahkar } from "./src/index.js";

const result = await shahkar("0010007700", "09120000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

> **نکته:** برای اشخاص حقوقی، شناسه ملی را در `nationalCode` و `isCompany` را `true` بدهید.

### ۳. ShahkarLite — احراز هویت شاهکار Lite

`POST https://s.api.ir/api/sw1/ShahkarLite` · پیاده‌سازی: [shahkar-lite.ts](src/services/shahkar-lite.ts)

**کاربرد:** نسخه سبک شاهکار مناسب کسب‌وکارهای کوچک.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `mobile` | `string` | بله | موبایل با فرمت 09120001111 | `"09120000000"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { shahkarLite } from "./src/index.js";

const result = await shahkarLite("0010007700", "09120000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

### ۴. ShahkarPro — احراز هویت شاهکار Pro

`POST https://s.api.ir/api/sw1/ShahkarPro` · پیاده‌سازی: [shahkar-pro.ts](src/services/shahkar-pro.ts)

**کاربرد:** شاهکار با پایداری بالاتر برای سازمان‌ها و کسب‌وکارهای بزرگ.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی یا شناسه ملی | `"0010007700"` |
| `mobile` | `string` | بله | موبایل با فرمت 09120001111 | `"09120000000"` |
| `isCompany` | `boolean` | خیر (پیش‌فرض `false`) | حقوقی یا حقیقی | `false` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { shahkarPro } from "./src/index.js";

const result = await shahkarPro("0010007700", "09120000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

> **نکته:** برای اشخاص حقوقی، شناسه ملی را در `nationalCode` و `isCompany` را `true` بدهید.

### ۵. PersonInfo — استعلام مشخصات هویتی

`POST https://s.api.ir/api/sw1/PersonInfo` · پیاده‌سازی: [person-info.ts](src/services/person-info.ts)

**کاربرد:** مشخصات هویتی و زنده بودن فرد با کد ملی و تاریخ تولد.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `birthDate` | `string` | بله | تاریخ تولد به فرمت : 1370/1/1 | `"1371/1/1"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { personInfo } from "./src/index.js";

const result = await personInfo("0010007700", "1371/1/1");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PersonInfoRes`):

```json
{
  "nationalCode": "0010007700",
  "firstName": "محسن",
  "lastName": "اکبری",
  "fatherName": "علی",
  "gender": 1,
  "alive": true
}
```

> **نکته:** طبق OpenAPI این سرویس به سطح مجوز trust level نیاز دارد.

### ۶. PersonData — استعلام مشخصات هویتی 2

`POST https://s.api.ir/api/sw1/PersonData` · پیاده‌سازی: [person-data.ts](src/services/person-data.ts)

**کاربرد:** مشخصات هویتی به‌همراه عکس کارت ملی از ثبت احوال.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `birthDate` | `string` | بله | تاریخ تولد به فرمت : 1370/1/1 | `"1371/1/1"` |

**مهلت پیش‌فرض این سرویس:** ۶۰ ثانیه — خروجی شامل تصویر Base64 کارت ملی است.

```ts
import { personData } from "./src/index.js";

const result = await personData("0010007700", "1371/1/1");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PersonDataRes`):

```json
{
  "nationalCode": "0010007700",
  "firstName": "علی",
  "lastName": "رضایی",
  "fatherName": "محمد",
  "gender": 1,
  "alive": true,
  "imageBase64": "iVBORw0KGgoAAAANSUhEUgAA..."
}
```

> **نکته:** طبق OpenAPI ارائه‌ی این سرویس به سازمان‌ها و شرکت‌ها با ارائه‌ی مجوزهای لازم مقدور است. مقدار `gender`: آقا=1 خانم=2.

### ۷. CardMatch — تطبیق کد ملی با کارت بانکی

`POST https://s.api.ir/api/sw1/CardMatch` · پیاده‌سازی: [card-match.ts](src/services/card-match.ts)

**کاربرد:** تطبیق کد ملی با شماره کارت بانکی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `birthDate` | `string` | بله | تاریخ تولد به فرمت : 1370/1/1 | `"1371/1/1"` |
| `cardNumber` | `string` | بله | شماره کارت بانکی | `"6037990000000000"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { cardMatch } from "./src/index.js";

const result = await cardMatch("0010007700", "1371/1/1", "6037990000000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

### ۸. CardMobileMatch — تطبیق کارت بانکی با موبایل

`POST https://s.api.ir/api/sw1/CardMobileMatch` · پیاده‌سازی: [card-mobile-match.ts](src/services/card-mobile-match.ts)

**کاربرد:** تطبیق شماره موبایل با کارت بانکی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `mobile` | `string` | بله | موبایل با فرمت 09120001111 | `"09120000000"` |
| `cardNumber` | `string` | بله | شماره کارت بانکی | `"6037990000000000"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { cardMobileMatch } from "./src/index.js";

const result = await cardMobileMatch("09120000000", "6037990000000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

### ۹. IbanMatch — تطبیق کد ملی با شبا

`POST https://s.api.ir/api/sw1/IbanMatch` · پیاده‌سازی: [iban-match.ts](src/services/iban-match.ts)

**کاربرد:** تطبیق کد ملی با شماره شبا.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `birthDate` | `string` | بله | تاریخ تولد به فرمت : 1370/1/1 | `"1371/1/1"` |
| `iban` | `string` | بله | شماره شبا 26 رقمی به فرمت IR000000000000000000000000 | `"IR820540102680020817909002"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { ibanMatch } from "./src/index.js";

const result = await ibanMatch("0010007700", "1371/1/1", "IR820540102680020817909002");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

### ۱۰. IbanMatchPro — تطبیق کد ملی با شبا پرو (سیاح)

`POST https://s.api.ir/api/sw1/IbanMatchPro` · پیاده‌سازی: [iban-match-pro.ts](src/services/iban-match-pro.ts)

**کاربرد:** تطبیق کد ملی با شبا بدون تاریخ تولد.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `iban` | `string` | بله | شماره شبا 26 رقمی به فرمت IR000000000000000000000000 | `"IR820540102680020817909002"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { ibanMatchPro } from "./src/index.js";

const result = await ibanMatchPro("0010007700", "IR820540102680020817909002");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

> **نکته:** برخلاف `ibanMatch`، این سرویس تاریخ تولد نمی‌گیرد.

### ۱۱. Call — وب سرویس تماس تلفنی

`POST https://s.api.ir/api/sw1/Call` · پیاده‌سازی: [call.ts](src/services/call.ts)

**کاربرد:** تماس تلفنی با فایل صوتی به شماره‌های ثابت و همراه.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `voiceID` | `string` | بله | شناسه فایل صوتی | `"397FB7F7-38A5-4748-A72B-352FF36B0D71"` |
| `numbers` | `string[]` | بله | لیستی از شماره موبایل ها یا تلفن های ثابت | `["09120000000","02112345678"]` |

**مهلت پیش‌فرض این سرویس:** ۶۰ ثانیه — ارسال گروهی به لیست شماره‌ها.

```ts
import { call } from "./src/index.js";

const result = await call("397FB7F7-38A5-4748-A72B-352FF36B0D71", ["09120000000","02112345678"]);

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

> **نکته:** طبق OpenAPI تماس تلفنی بلک‌لیست ندارد و به تمامی شماره‌های ثابت و همراه قابل ارسال است.

### ۱۲. CallOTP — وب سرویس OTP تلفنی

`POST https://s.api.ir/api/sw1/CallOTP` · پیاده‌سازی: [call-otp.ts](src/services/call-otp.ts)

**کاربرد:** اعلام کد یک‌بارمصرف از طریق تماس تلفنی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `code` | `string` | بله | کد یکبار مصرف یا OTP | `"12345"` |
| `number` | `string` | بله | شماره موبایل 09121112222 یا تلفن ثابت به فرمت 02122228888 | `"09121112222"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { callOtp } from "./src/index.js";

const result = await callOtp("12345", "09121112222");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

> **نکته:** طبق OpenAPI این سرویس به‌عنوان پشتیبان ارسال کدهای پیامکی پیشنهاد شده است.

### ۱۳. CallOTPalt — وب سرویس OTP تلفنی alt

`POST https://s.api.ir/api/sw1/CallOTPalt` · پیاده‌سازی: [call-otp-alt.ts](src/services/call-otp-alt.ts)

**کاربرد:** OTP تلفنی با شبکه مجزا به‌عنوان پشتیبان CallOTP.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `code` | `string` | بله | کد یکبار مصرف یا OTP | `"1234"` |
| `number` | `string` | بله | شماره موبایل 09121112222 یا تلفن ثابت به فرمت 02122228888 | `"09121112222"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { callOtpAlt } from "./src/index.js";

const result = await callOtpAlt("1234", "09121112222");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

> **نکته:** طبق OpenAPI این سرویس با شبکه‌ی مجزا، گزینه‌ی پشتیبان `callOtp` است.

### ۱۴. SmsOTP — وب سرویس OTP پیامکی

`POST https://s.api.ir/api/sw1/SmsOTP` · پیاده‌سازی: [sms-otp.ts](src/services/sms-otp.ts)

**کاربرد:** ارسال کد یک‌بارمصرف پیامکی با خط ۸ رقمی به تمامی شماره‌ها.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `code` | `string` | بله | کد یا OTP | `"123456"` |
| `mobile` | `string` | بله | موبایل به فرمت 09121112222 | `"09120000000"` |
| `template` | `number` | خیر (پیش‌فرض `1`) | کد=0 کد ورود=1 کد تایید=2 رمز=3 رمز ورود=4 و برای افزودن نام به انتها پیامک به پشتیبانی پیام دهید | `1` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { smsOtp } from "./src/index.js";

const result = await smsOtp("123456", "09120000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

> **نکته:** مقدار `template`: کد=0، کد ورود=1، کد تایید=2، رمز=3، رمز ورود=4. برای افزودن نام به انتهای پیامک به پشتیبانی پیام دهید.

### ۱۵. SendSms — ارسال پیامک خدماتی

`POST https://s.api.ir/api/sw1/SendSms` · پیاده‌سازی: [send-sms.ts](src/services/send-sms.ts)

**کاربرد:** ارسال پیامک خدماتی با خط اختصاصی به لیست شماره‌ها.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `message` | `string` | بله | متن پیامک | `"کاربر گرامی بسته شما با شماره 1828772 به پست ارسال شد"` |
| `mobiles` | `string[]` | بله | موبابل ها به صورت لیست | `["09120001111","09120002222"]` |

**مهلت پیش‌فرض این سرویس:** ۶۰ ثانیه — ارسال گروهی به لیست شماره‌ها.

```ts
import { sendSms } from "./src/index.js";

const result = await sendSms("کاربر گرامی بسته شما با شماره 1828772 به پست ارسال شد", ["09120001111","09120002222"]);

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`number`):

```json
0
```

### ۱۶. VideoVerifySpeechText — دریافت متن تصادفی ورودی احراز ویدئویی

`POST https://s.api.ir/api/sw1/VideoVerifySpeechText` · پیاده‌سازی: [video-verify-speech-text.ts](src/services/video-verify-speech-text.ts)

**کاربرد:** تولید متن تصادفی برای خواندن در احراز ویدئویی.

این سرویس ورودی ندارد و بدنه‌ی `{}` ارسال می‌شود.

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — بدون ورودی، استعلام سبک.

```ts
import { videoVerifySpeechText } from "./src/index.js";

const result = await videoVerifySpeechText();

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`string`):

```json
null
```

> **نکته:** متن برگشتی را عیناً در فیلد `speechText` سرویس `videoVerify` استفاده کنید.

### ۱۷. VideoVerify — احراز ویدئویی بایومتریک

`POST https://s.api.ir/api/sw1/VideoVerify` · پیاده‌سازی: [video-verify.ts](src/services/video-verify.ts)

**کاربرد:** احراز هویت بایومتریک ویدئویی با زنده‌سنجی و تطبیق گفتار.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `birthDate` | `string` | بله | تاریخ تولد به فرمت : 1370/1/1 | `"1371/1/1"` |
| `serialNumber` | `string` | بله | سریال پشت کارت ملی یا رهیگیری رسید کارت ملی | `"i1R8389398"` |
| `videoBase64` | `string` | بله | ویدئوی سلفی کاربر به صورت بیس64 و حداکثر 5مگابایت | `"iVBORw0KGgoAAAANSUhEUgAA..."` |
| `speechText` | `string` | بله | متنی تصادفی که فرد در زمان ضبط می خواند و از متد VideoSpeechText دریافت کنید | `"بهار فصل شگوفه هاست"` |
| `matchingThreshold` | `number` | خیر (پیش‌فرض `80`) | حد آستانه تطبیق چهره | `80` |
| `livenessThreshold` | `number` | خیر (پیش‌فرض `80`) | حد آستانه زنده سنجی | `80` |
| `speechThreshold` | `number` | خیر (پیش‌فرض `50`) | حد آستانه تطبیق گفتار | `50` |

**مهلت پیش‌فرض این سرویس:** ۱۲۰ ثانیه — ارسال ویدئوی Base64 تا ۵ مگابایت و پردازش بایومتریک زمان‌بر.

```ts
import { videoVerify } from "./src/index.js";

const result = await videoVerify({
  nationalCode: "0010007700",
  birthDate: "1371/1/1",
  serialNumber: "i1R8389398",
  videoBase64: "iVBORw0KGgoAAAANSUhEUgAA...",
  speechText: "بهار فصل شگوفه هاست",
});

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`VideoVerifyRes`):

```json
{
  "matchingScore": 95,
  "isMatch": true,
  "livenessScore": 85,
  "isLiveness": true,
  "speechScore": 55,
  "isSpeechMatched": true,
  "isPassed": true
}
```

> **نکته:** ویدئوی سلفی به‌صورت Base64 و حداکثر ۵ مگابایت است؛ در Node می‌توانید با `readFileSync("selfie.mp4").toString("base64")` آن را بسازید. `serialNumber` حداقل ۵ و `speechText` حداقل ۱۰ کاراکتر است.

### ۱۸. Enamad — استعلام دارنده اینماد

`POST https://s.api.ir/api/sw1/Enamad` · پیاده‌سازی: [enamad.ts](src/services/enamad.ts)

**کاربرد:** وضعیت نماد اعتماد الکترونیکی یک وب‌سایت.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `domain` | `string` | بله | نام دامنه | `"mci.ir"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { enamad } from "./src/index.js";

const result = await enamad("mci.ir");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`EnamadModel`):

```json
{
  "domain": null,
  "title": null,
  "province": null,
  "city": null,
  "star": null,
  "addDate": null,
  "expDate": null
}
```

### ۱۹. IsHoliday — استعلام تعطیلی امروز

`POST https://s.api.ir/api/sw1/IsHoliday` · پیاده‌سازی: [is-holiday.ts](src/services/is-holiday.ts)

**کاربرد:** تعیین تعطیل بودن امروز.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `weekend` | `boolean` | خیر (پیش‌فرض `true`) | تعطیلات آخر هفته هم لحاظ شود؟ | `true` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { isHoliday } from "./src/index.js";

const result = await isHoliday();

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

> **نکته:** با `weekend = false` تعطیلات آخر هفته لحاظ نمی‌شود.

### ۲۰. Wallpaper — وب سرویس بگراند پویا برنامه

`POST https://s.api.ir/api/sw1/Wallpaper` · پیاده‌سازی: [wallpaper.ts](src/services/wallpaper.ts)

**کاربرد:** تصویر بک‌گراند روزانه از سراسر جهان.

این سرویس ورودی ندارد و بدنه‌ی `{}` ارسال می‌شود.

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — بدون ورودی، استعلام سبک.

```ts
import { wallpaper } from "./src/index.js";

const result = await wallpaper();

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`string`):

```json
null
```

### ۲۱. IPLocation — وب سرویس تشخیص موقعیت IP

`POST https://s.api.ir/api/sw1/IPLocation` · پیاده‌سازی: [ip-location.ts](src/services/ip-location.ts)

**کاربرد:** موقعیت جغرافیایی یک IP.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `ip` | `string` | بله | آی پی ورژن 4 | `"5.212.154.19"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { ipLocation } from "./src/index.js";

const result = await ipLocation("5.212.154.19");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`IPLocationRes`):

```json
{
  "query": "5.212.154.19",
  "status": "success",
  "country": "Iran",
  "countryCode": "IR",
  "region": "30",
  "regionName": "Tehran Province",
  "city": "Tehran",
  "zip": "13243676865",
  "lat": 35.1327,
  "lon": 50.2916,
  "timezone": "Asia/Tehran",
  "isp": "Mobile Communication Company of Iran",
  "org": "Mobile Communication Company",
  "as": "AS197207 Mobile Communication Company of Iran PLC"
}
```

### ۲۲. CheckEmail — اعتبار سنجی ایمیل

`POST https://s.api.ir/api/sw1/CheckEmail` · پیاده‌سازی: [check-email.ts](src/services/check-email.ts)

**کاربرد:** صحت آدرس و فعال بودن ایمیل.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `email` | `string` | بله | ایمیل | `"info@api.ir"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { checkEmail } from "./src/index.js";

const result = await checkEmail("info@api.ir");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

### ۲۳. IPIsIran — وب سرویس تشخیص IP ایرانی

`POST https://s.api.ir/api/sw1/IPIsIran` · پیاده‌سازی: [ip-is-iran.ts](src/services/ip-is-iran.ts)

**کاربرد:** ایرانی بودن IP کاربر.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `ip` | `string` | بله | آی پی ورژن 4 | `"192.168.1.1"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { ipIsIran } from "./src/index.js";

const result = await ipIsIran("192.168.1.1");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

### ۲۴. MyIP — وب سرویس دریافت IP برنامه (کلاینت)

`POST https://s.api.ir/api/sw1/MyIP` · پیاده‌سازی: [my-ip.ts](src/services/my-ip.ts)

**کاربرد:** دریافت IP برنامه (کلاینت).

این سرویس ورودی ندارد و بدنه‌ی `{}` ارسال می‌شود.

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — بدون ورودی، استعلام سبک.

```ts
import { myIp } from "./src/index.js";

const result = await myIp();

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`string`):

```json
null
```

### ۲۵. BankAccountInfo — استعلام شبا با شماره حساب

`POST https://s.api.ir/api/sw1/BankAccountInfo` · پیاده‌سازی: [bank-account-info.ts](src/services/bank-account-info.ts)

**کاربرد:** دریافت شبا از شماره حساب بانکی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `accountNumber` | `string` | بله | شماره حساب بانکی | `"3022.100.18878774.1"` |
| `bankCode` | `string` | خیر | مرکزی=010 صنعت‌ومعدن=011 ملت=012 رفاه=013 مسکن=014 سپه=015 کشاورزی=016 ملی=017 تجارت=018 صادرات=019 توسعه‌صادرات=020 پست‌بانک=021 توسعه‌تعاون=022 کارآفرین=053 پارسیان=054 اقتصادنوین=055 سامان=056 پاسارگاد=057 سرمایه=058 سینا=059 مهرایران=060 شهر=061 آینده=062 گردشگری=064 دی=066 ایران‌زمین=069 رسالت=070 ملل=075 خاورمیانه=080 | `"012"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { bankAccountInfo } from "./src/index.js";

const result = await bankAccountInfo("3022.100.18878774.1");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`BankAccountInfoRes`):

```json
{
  "iban": "IR820540102680020817909002",
  "active": true,
  "owners": [
    "مالک ۱",
    "مالک ۲"
  ]
}
```

> **نکته:** کد بانک اختیاری است: مرکزی=010 صنعت‌ومعدن=011 ملت=012 رفاه=013 مسکن=014 سپه=015 کشاورزی=016 ملی=017 تجارت=018 صادرات=019 توسعه‌صادرات=020 پست‌بانک=021 توسعه‌تعاون=022 کارآفرین=053 پارسیان=054 اقتصادنوین=055 سامان=056 (فهرست کامل در OpenAPI).

### ۲۶. BankCardInfo — استعلام مشخصات کارت بانکی

`POST https://s.api.ir/api/sw1/BankCardInfo` · پیاده‌سازی: [bank-card-info.ts](src/services/bank-card-info.ts)

**کاربرد:** نام دارنده، شبا و شماره حساب از شماره کارت.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `cardNumber` | `string` | بله | شماره کارت | `"6037990000000000"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { bankCardInfo } from "./src/index.js";

const result = await bankCardInfo("6037990000000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`BankCardInfoRes`):

```json
{
  "name": "امیر تبریزی",
  "iban": "IR820540102680020817909002",
  "accountNumber": "122.344.1234567890.1"
}
```

### ۲۷. CardInfo — استعلام نام مالک کارت بانکی

`POST https://s.api.ir/api/sw1/CardInfo` · پیاده‌سازی: [card-info.ts](src/services/card-info.ts)

**کاربرد:** نام صاحب کارت بانکی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `cardNumber` | `string` | بله | شماره کارت بانکی | `"6037990000000000"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { cardInfo } from "./src/index.js";

const result = await cardInfo("6037990000000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`CardInfoRes`):

```json
{
  "name": "بانک ملت"
}
```

### ۲۸. CardToIban — سرویس تبدیل کارت به شبا

`POST https://s.api.ir/api/sw1/CardToIban` · پیاده‌سازی: [card-to-iban.ts](src/services/card-to-iban.ts)

**کاربرد:** مشخصات شبای یک کارت بانکی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `cardNumber` | `string` | بله | شماره کارت بانکی | `"6037990000000000"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { cardToIban } from "./src/index.js";

const result = await cardToIban("6037990000000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`CardToIbanRes`):

```json
{
  "name": "علی رضایی",
  "iban": "IR820540102680020817909002",
  "bankName": "بانک ملت"
}
```

### ۲۹. IbanInfo — استعلام نام دارنده شبا

`POST https://s.api.ir/api/sw1/IbanInfo` · پیاده‌سازی: [iban-info.ts](src/services/iban-info.ts)

**کاربرد:** نام شخص، نام بانک و وضعیت فعال بودن شبا.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `iban` | `string` | بله | شماره شبا 26 رقمی به فرمت IR000000000000000000000000 | `"IR820540102680020817909002"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { ibanInfo } from "./src/index.js";

const result = await ibanInfo("IR820540102680020817909002");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`IbanInfoRes`):

```json
{
  "name": "علی رضایی",
  "bankName": "بانک ملت",
  "active": true
}
```

### ۳۰. CompanyInfo — استعلام شخص حقوقی

`POST https://s.api.ir/api/sw1/CompanyInfo` · پیاده‌سازی: [company-info.ts](src/services/company-info.ts)

**کاربرد:** اطلاعات ثبتی شخص حقوقی با شناسه ملی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalID` | `string` | بله | شناسه ملی شرکت | `"14007650912"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { companyInfo } from "./src/index.js";

const result = await companyInfo("14007650912");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`CompanyInfoRes`):

```json
{
  "companyType": "شركت سهامي خاص",
  "name": "شرکت نمونه",
  "nationalID": 14000567890,
  "registerNumber": 12345,
  "registerDate": "1400/01/01",
  "active": true,
  "address": "تهران، خیابان انقلاب، پلاک 12",
  "postalCode": "1234567890",
  "province": "تهران",
  "city": "تهران",
  "endDate": null
}
```

### ۳۱. CompanyMembers — استعلام اعضای هیئت مدیره

`POST https://s.api.ir/api/sw1/CompanyMembers` · پیاده‌سازی: [company-members.ts](src/services/company-members.ts)

**کاربرد:** اعضای هیئت مدیره و سهامداران شرکت.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalID` | `string` | بله | شناسه ملی شرکت | `"14007650912"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { companyMembers } from "./src/index.js";

const result = await companyMembers("14007650912");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`CompanyMembersRes`):

```json
{
  "boardMembers": [
    {
      "nationalID": "0010007700",
      "firstName": "علی",
      "lastName": "رضایی",
      "roleCode": 1,
      "roleName": "مدیرعامل"
    }
  ],
  "shareHolders": [
    {
      "nationalID": "0010007700",
      "firstName": "علی",
      "lastName": "رضایی",
      "percentage": 0.1
    }
  ]
}
```

### ۳۲. CompanyNewspapers — استعلام اگهی های روزنامه رسمی

`POST https://s.api.ir/api/sw1/CompanyNewspapers` · پیاده‌سازی: [company-newspapers.ts](src/services/company-newspapers.ts)

**کاربرد:** آگهی‌های روزنامه رسمی و محلی شرکت.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalID` | `string` | بله | شناسه ملی شرکت | `"14007650912"` |

**مهلت پیش‌فرض این سرویس:** ۶۰ ثانیه — فهرست آگهی‌ها به‌همراه متن کامل روزنامه رسمی.

```ts
import { companyNewspapers } from "./src/index.js";

const result = await companyNewspapers("14007650912");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`CompanyNewspapersRes[]`):

```json
[
  {
    "newsID": 127530479,
    "title": "14007650912",
    "nationalID": "14007650912",
    "description": "به استناد صورتجلسه هییت مدیره مورخ 1400/9/9 تصمیمات ذیل اتخاذ شد...",
    "capital": 500000000,
    "publicationDate": "1404/01/01",
    "number": "12345",
    "city": "تهران",
    "page": 24,
    "letterDate": "1404/01/02",
    "letterNumber": "140330919101129712"
  }
]
```

### ۳۳. CompanySignatories — استعلام صاحبین حق امضا شرکت‌ها

`POST https://s.api.ir/api/sw1/CompanySignatories` · پیاده‌سازی: [company-signatories.ts](src/services/company-signatories.ts)

**کاربرد:** صاحبان حق امضای شرکت طبق روزنامه رسمی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalID` | `string` | بله | شناسه ملی شرکت | `"14000567890"` |

**مهلت پیش‌فرض این سرویس:** ۶۰ ثانیه — خروجی شامل متن کامل آگهی و فهرست‌های تودرتو.

```ts
import { companySignatories } from "./src/index.js";

const result = await companySignatories("14000567890");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`CompanySignatoriesRes`):

```json
{
  "allowedTopics": "کلیه اوراق اسناد بهادار تعهد آور شرکت ...",
  "signholders": {
    "obligatorySignature": [
      {
        "name": "علی رضایی",
        "title": "مدیرعامل",
        "obligatoryStatus": true,
        "personID": "0010007700"
      }
    ],
    "normalSignature": [
      {
        "name": "مریم حسینی",
        "title": "مدیر مالی",
        "normalStatus": true,
        "personID": "0010007701"
      }
    ],
    "obligatoryAndNormalSignature": [
      {
        "name": "حسن کاظمی",
        "title": "عضو هیئت مدیره",
        "personID": "0010007702"
      }
    ]
  },
  "signatureFullText": "کلیه اوراق اسناد بهادار تعهد آور شرکت از قبیل چک سفته بروات قراردادها عقود اسلامی همچنین کلیه نامه‌های عادی اداری با امضا ...",
  "newspaperDate": "2025-01-01T00:00:00",
  "newsletterDate": "2025-01-02T00:00:00",
  "title": "دیجی یکالا",
  "boardMembers": [
    {
      "startDate": "2025-01-01T00:00:00",
      "endDate": "2025-12-31T00:00:00",
      "byNewsID": 3001,
      "person": {
        "title": "علی رضایی",
        "nationalCode": "0055454333"
      },
      "position": {
        "title": "مدیر عامل و عضو هییت مدیره",
        "firstRole": "عضو هیئت مدیره",
        "secondRole": "مدیرعامل"
      }
    }
  ]
}
```

### ۳۴. TaxRecords — استعلام پرونده ها مالیاتی

`POST https://s.api.ir/api/sw1/TaxRecords` · پیاده‌سازی: [tax-records.ts](src/services/tax-records.ts)

**کاربرد:** پرونده‌های مالیاتی و وضعیت ثبت‌نام اشخاص حقیقی و حقوقی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `inquiryCode` | `string` | بله | شماره ملی حقیقی/ شناسه ملی حقوقی/ شماره فراگیر/ شماره رهگیری/ شماره اقتصادی | `"14007650912"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { taxRecords } from "./src/index.js";

const result = await taxRecords("14007650912");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`TaxRecordsRes`):

```json
{
  "records": [
    {
      "name": "شرکت سهامی پتروپارس",
      "economicCode": "14000567890",
      "registrationStatus": "فعال",
      "registrationStep": "گام 4"
    }
  ]
}
```

### ۳۵. GeoToAddress — تبدیل لوکیشن به آدرس

`POST https://s.api.ir/api/sw1/GeoToAddress` · پیاده‌سازی: [geo-to-address.ts](src/services/geo-to-address.ts)

**کاربرد:** تبدیل مختصات جغرافیایی به استان، شهر و آدرس.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `latitude` | `number` | بله | طول جغرافیایی | `35.6892` |
| `longitude` | `number` | بله | عرض جغرافیایی | `51.389` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { geoToAddress } from "./src/index.js";

const result = await geoToAddress(35.6892, 51.389);

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`GeoToAddressRes`):

```json
{
  "province": "تهران",
  "city": "تهران",
  "address": "تهران، خیابان انقلاب، پلاک 12"
}
```

> **نکته:** طبق OpenAPI، `latitude` «طول جغرافیایی» و `longitude` «عرض جغرافیایی» توصیف شده‌اند؛ نام فیلدها عیناً حفظ شده است.

### ۳۶. PostalCodeInfo — سرویس استعلام کدپستی

`POST https://s.api.ir/api/sw1/PostalCodeInfo` · پیاده‌سازی: [postal-code-info.ts](src/services/postal-code-info.ts)

**کاربرد:** آدرس دقیق از کد پستی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `postalCode` | `string` | بله | کد پستی | `"1234567890"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { postalCodeInfo } from "./src/index.js";

const result = await postalCodeInfo("1234567890");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PostalCodeInfoRes`):

```json
{
  "province": "تهران",
  "city": "تهران",
  "town": "مرکز",
  "district": "1",
  "street": "انقلاب",
  "street2": "12",
  "number": "10",
  "floor": "1",
  "sideFloor": "شرقی",
  "buildingName": "ساختمان نمونه",
  "description": "بدون توضیح",
  "address": "تهران تهران خیابان استاد مطهری ..."
}
```

### ۳۷. PostalCodePro — سرویس استعلام کدپستی نسخه Pro

`POST https://s.api.ir/api/sw1/PostalCodePro` · پیاده‌سازی: [postal-code-pro.ts](src/services/postal-code-pro.ts)

**کاربرد:** آدرس دقیق از کد پستی به‌همراه لوکیشن.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `postalCode` | `string` | بله | کد پستی | `"1234567890"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { postalCodePro } from "./src/index.js";

const result = await postalCodePro("1234567890");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PostalCodeProRes`):

```json
{
  "province": "تهران",
  "city": "تهران",
  "town": "مرکز",
  "district": "1",
  "street": "انقلاب",
  "street2": "12",
  "number": "10",
  "floor": "1",
  "sideFloor": "شرقی",
  "buildingName": "ساختمان نمونه",
  "description": "بدون توضیح",
  "address": "تهران تهران خیابان استاد مطهری ...",
  "mapUrl": "https://maps.google.com/?q==34.6892,55.3890",
  "lat": 35.6892,
  "long": 51.389
}
```

### ۳۸. PostalTracking — سرویس رهیگیری بسته پستی

`POST https://s.api.ir/api/sw1/PostalTracking` · پیاده‌سازی: [postal-tracking.ts](src/services/postal-tracking.ts)

**کاربرد:** وضعیت و رویدادهای مرسوله پستی با کد رهگیری.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `trackingCode` | `string` | بله | کد رهیگیری مرسوله | `"1234567890"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { postalTracking } from "./src/index.js";

const result = await postalTracking("1234567890");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PostalTrackingRes`):

```json
{
  "postType": "سفارشی",
  "sourcePostOffice": "دفتر پست مرکزی تهران",
  "source": "تهران",
  "destination": "مشهد",
  "senderName": "علی رضایی",
  "receiverName": "سارا احمدی",
  "sourcePostalCode": "1234567890",
  "destinationPostalCode": "0987654321",
  "weight": "500 گرم",
  "totalAmount": "150000 ریال",
  "details": [
    {
      "date": "1403/01/15",
      "event": "تحویل در مرکز پستی",
      "id": "123456",
      "postalNode": "تهران، مرکز پستی شمال",
      "time": "14:30"
    }
  ]
}
```

### ۳۹. PostalCodeLocation — سرویس دریافت لوکیشن با کدپستی

`POST https://s.api.ir/api/sw1/PostalCodeLocation` · پیاده‌سازی: [postal-code-location.ts](src/services/postal-code-location.ts)

**کاربرد:** مختصات جغرافیایی یک کد پستی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `postalCode` | `string` | بله | کد پستی | `"1234567890"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { postalCodeLocation } from "./src/index.js";

const result = await postalCodeLocation("1234567890");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PostalCodeLocationRes`):

```json
{
  "mapUrl": "https://maps.google.com/?q=34.6892,55.3890",
  "lat": 35.6892,
  "long": 51.389
}
```

### ۴۰. ChatGPT — وب سرویس Chat GPT

`POST https://s.api.ir/api/sw1/ChatGPT` · پیاده‌سازی: [chat-gpt.ts](src/services/chat-gpt.ts)

**کاربرد:** دسترسی به GPT نسخه ۴.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `command` | `string` | بله | دستور پردازش (مقدار نمونه در OpenAPI: GenerateSummary) | `"GenerateSummary"` |
| `data` | `string` | بله | متن ورودی برای پردازش | `"متن نمونه برای پردازش"` |
| `temperature` | `number` | خیر (پیش‌فرض `1`) | پارامتر temperature مدل | `1` |

**مهلت پیش‌فرض این سرویس:** ۱۲۰ ثانیه — پردازش زمان‌بر هوش مصنوعی.

```ts
import { chatGpt } from "./src/index.js";

const result = await chatGpt("GenerateSummary", "متن نمونه برای پردازش");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`string`):

```json
null
```

> **نکته:** OpenAPI فهرستی از دستورهای مجاز `command` ارائه نمی‌دهد؛ مقدار نمونه `"GenerateSummary"` است.

### ۴۱. TextToSpeech — تبدیل متن به صوت با هوش مصنوعی بومی

`POST https://s.api.ir/api/sw1/TextToSpeech` · پیاده‌سازی: [text-to-speech.ts](src/services/text-to-speech.ts)

**کاربرد:** تبدیل متن کوتاه به صوت با هوش مصنوعی بومی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `text` | `string` | بله | متن پیام | `"برای حضور در هر باشگاه یا تیم ملی شرایط را به طور کامل خواهد سنجید و به‌نوعی باید اوضاع برای همکاری فراهم باشد."` |
| `ttsEngine` | `number` | بله | موتور هوشمند=1 موتور با هوش مصنوعی بومی=2 هوش مصنوعی خارجی=3 | `1` |
| `male` | `boolean` | خیر (پیش‌فرض `true`) | صدای گوینده آقا باشد یا خیر؟ | `true` |

**مهلت پیش‌فرض این سرویس:** ۱۲۰ ثانیه — تولید صوت با هوش مصنوعی.

```ts
import { textToSpeech } from "./src/index.js";

const result = await textToSpeech("برای حضور در هر باشگاه یا تیم ملی شرایط را به طور کامل خواهد سنجید و به‌نوعی باید اوضاع برای همکاری فراهم باشد.", 1);

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`string`):

```json
null
```

> **نکته:** مقدار `ttsEngine`: موتور هوشمند=1، موتور با هوش مصنوعی بومی=2، هوش مصنوعی خارجی=3. طبق OpenAPI موتور بومی در اینترنت ملی هم کار می‌کند.

### ۴۲. Sana — استعلام سامانه ثنا

`POST https://s.api.ir/api/sw1/Sana` · پیاده‌سازی: [sana.ts](src/services/sana.ts)

**کاربرد:** داشتن یا نداشتن شماره ثنا.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی یا شناسه ملی | `"0010007700"` |
| `isCompany` | `boolean` | خیر (پیش‌فرض `false`) | حقوقی یا حقیقی | `false` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { sana } from "./src/index.js";

const result = await sana("0010007700");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data === true ? "✅ تایید شد" : "❌ تایید نشد");
}
```

**نمونه‌ی `data`** (`boolean`):

```json
true
```

### ۴۳. UnpaidCheque — استعلام تعداد چک برگشتی

`POST https://s.api.ir/api/sw1/UnpaidCheque` · پیاده‌سازی: [unpaid-cheque.ts](src/services/unpaid-cheque.ts)

**کاربرد:** تعداد و مبلغ چک‌های برگشتی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { unpaidCheque } from "./src/index.js";

const result = await unpaidCheque("0010007700");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`UnpaidChequeRes`):

```json
{
  "count": 0,
  "sumAmount": 250000000,
  "sumBouncedAmount": 250000000
}
```

> **نکته:** طبق OpenAPI این سرویس به کسب‌وکارها در سطح ۲ قابل ارائه است.

### ۴۴. UnpaidChequeLite — استعلام تعداد چک برگشتی Lite

`POST https://s.api.ir/api/sw1/UnpaidChequeLite` · پیاده‌سازی: [unpaid-cheque-lite.ts](src/services/unpaid-cheque-lite.ts)

**کاربرد:** فقط تعداد چک‌های برگشتی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { unpaidChequeLite } from "./src/index.js";

const result = await unpaidChequeLite("0010007700");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`UnpaidChequeLiteRes`):

```json
{
  "count": 0
}
```

### ۴۵. UnpaidChequePro — استعلام تعداد چک برگشتی پرو

`POST https://s.api.ir/api/sw1/UnpaidChequePro` · پیاده‌سازی: [unpaid-cheque-pro.ts](src/services/unpaid-cheque-pro.ts)

**کاربرد:** تعداد، مبلغ و لیست چک‌های برگشتی به‌همراه شعبه.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { unpaidChequePro } from "./src/index.js";

const result = await unpaidChequePro("0010007700");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`UnpaidChequeProRes`):

```json
{
  "nationalCode": "0012345678",
  "legalId": "10101234567",
  "name": "رضا محمدی",
  "count": 0,
  "chequeList": [
    {
      "accountNumber": "IR120180000000123456789012",
      "amount": "250000000",
      "bouncedAmount": "250000000",
      "bankCode": "18",
      "branchCode": "00125",
      "branchDescription": "بانک تجارت - شعبه مرکزی",
      "dishonoringBranchName": "بانک تجارت - شعبه ولیعصر",
      "dishonorReason": "حساب دارای کسری موجودی است.",
      "branchCodeBounced": "00151",
      "chequeDate": "14030120",
      "backDate": "14030122",
      "chequeID": "1234567890123456",
      "chequeNumber": "0001234567"
    }
  ]
}
```

> **نکته:** طبق OpenAPI این نسخه فقط به شرکت‌ها و سازمان‌ها قابل ارائه است.

### ۴۶. ChequeColor — استعلام رنگ چک صیادی

`POST https://s.api.ir/api/sw1/ChequeColor` · پیاده‌سازی: [cheque-color.ts](src/services/cheque-color.ts)

**کاربرد:** رنگ چک صیادی صادرکننده.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی یا شناسه ملی | `"0010007700"` |
| `isCompany` | `boolean` | خیر (پیش‌فرض `false`) | حقوقی یا حقیقی | `false` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { chequeColor } from "./src/index.js";

const result = await chequeColor("0010007700");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`ChequeColorRes`):

```json
{
  "chequeColor": "سفید",
  "chequeColorCode": 1
}
```

> **نکته:** مقدار `chequeColorCode`: سفید=1 زرد=2 نارنجی=3 قهوه‌ای=4 قرمز=5.

### ۴۷. ChequeInfo — استعلام مشخصات چک صیادی

`POST https://s.api.ir/api/sw1/ChequeInfo` · پیاده‌سازی: [cheque-info.ts](src/services/cheque-info.ts)

**کاربرد:** مشخصات کامل چک با شناسه صیادی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `chequeID` | `string` | بله | شناسه چک صیاد | `"111110010007700"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { chequeInfo } from "./src/index.js";

const result = await chequeInfo("111110010007700");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`ChequeInfoRes`):

```json
{
  "iban": "IR820540102680020817909002",
  "issuedDate": "1403/01/15",
  "expirationDate": "1406/01/15",
  "serialNumber": "12345678",
  "seriesNumber": "987654",
  "chequeType": "BANS",
  "branchCode": "1026",
  "name": "علی محمدی"
}
```

> **نکته:** مقدار `chequeType`: BANS عادی، CHD الکترونیک، CHS موردی، CHT بانکی.

### ۴۸. License — استعلام اعتبار مجوز شغلی

`POST https://s.api.ir/api/sw1/License` · پیاده‌سازی: [license.ts](src/services/license.ts)

**کاربرد:** اعتبار مجوز شغلی (پروانه کسب).

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `trackingCode` | `string` | بله | کد پیگیری مجوز | `"BL123456"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { license } from "./src/index.js";

const result = await license("BL123456");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`LicenseRes`):

```json
{
  "title": "خدمات نرم افزاری",
  "trackingCode": "BL123456",
  "isuuer": "اتاق اصناف",
  "fullName": "علی رضایی",
  "fatherName": "محمد",
  "nationalCode": "0010007700",
  "phone": "09120000000",
  "issueDate": "1402/01/01",
  "expireDate": "1402/01/01",
  "province": "تهران",
  "city": "تهران",
  "address": "",
  "postalCode": ""
}
```

### ۴۹. MedicalLicense — استعلام اعتبار پروانه پزشکی

`POST https://s.api.ir/api/sw1/MedicalLicense` · پیاده‌سازی: [medical-license.ts](src/services/medical-license.ts)

**کاربرد:** اعتبار پروانه پزشکی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `medicalCode` | `string` | بله | کد پیگیری مجوز | `"BL123456"` |

**مهلت پیش‌فرض این سرویس:** ۶۰ ثانیه — خروجی شامل تصویر QR به‌صورت Base64.

```ts
import { medicalLicense } from "./src/index.js";

const result = await medicalLicense("BL123456");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`MedicalLicenseRes`):

```json
{
  "firstName": "علی",
  "lastName": "محمدی",
  "medicalCode": "123456",
  "degree": "پزشک عمومی",
  "city": "تهران",
  "membershipType": "عضو اصلی",
  "licenses": [
    {
      "licenseType": "مجوز فعالیت",
      "licenseCity": "تهران",
      "relatedDegree": "پزشک عمومی",
      "expireDate": "1404/12/29",
      "qrCodeBase64": "iVBORw0KGgoAAAANSUhEUgAAAAUA...",
      "isActive": false
    }
  ]
}
```

### ۵۰. ActiveLoans — استعلام تسهیلات فعال بانکی

`POST https://s.api.ir/api/sw1/ActiveLoans` · پیاده‌سازی: [active-loans.ts](src/services/active-loans.ts)

**کاربرد:** تسهیلات و وام‌های فعال مشتری.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی یا شناسه ملی | `"0010007700"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { activeLoans } from "./src/index.js";

const result = await activeLoans("0010007700");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`ActiveLoansRes`):

```json
{
  "count": 3,
  "info": {
    "nationalCode": "0012345678",
    "name": "علی طهرانی",
    "totalAmount": 2500000000,
    "debtTotalAmount": 1450000000,
    "pastExpiredTotalAmount": 320000000,
    "deferredTotalAmount": 180000000,
    "suspiciousTotalAmount": 95000000,
    "dishonored": 120000000
  }
}
```

### ۵۱. PassportStatus — استعلام وضعیت پاسپورت

`POST https://s.api.ir/api/sw1/PassportStatus` · پیاده‌سازی: [passport-status.ts](src/services/passport-status.ts)

**کاربرد:** اعتبار و وضعیت پاسپورت.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `mobile` | `string` | بله | موبایل با فرمت 09120001111 | `"09120000000"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { passportStatus } from "./src/index.js";

const result = await passportStatus("0010007700", "09120000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PassportStatusRes`):

```json
{
  "hasRequest": false,
  "requestStatus": "ثبت نشده",
  "requestDate": "1404/01/01",
  "postalTrackingCode": "PT123456789",
  "hasPassport": false,
  "passportNumber": "A12345678",
  "issueDate": "1404/01/15",
  "expirationDate": "1414/01/15",
  "passportStatus": "فعال",
  "personFound": true
}
```

### ۵۲. DrivingScore — استعلام نمره منفی گواهینامه

`POST https://s.api.ir/api/sw1/DrivingScore` · پیاده‌سازی: [driving-score.ts](src/services/driving-score.ts)

**کاربرد:** نمرات منفی ثبت‌شده روی گواهینامه رانندگی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `mobile` | `string` | بله | شماره موبایل | `"09120000000"` |
| `licenseNumber` | `string` | بله | شماره گواهینامه | `"20983905093"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { drivingScore } from "./src/index.js";

const result = await drivingScore("0010007700", "09120000000", "20983905093");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`DrivingScoreRes`):

```json
{
  "licenseNumber": "9380904743",
  "negativeScore": 2,
  "offenseCount": 5,
  "rule": "-"
}
```

### ۵۳. DrivingLisense — استعلام گواهینامه رانندگی قدیم

`POST https://s.api.ir/api/sw1/DrivingLisense` · پیاده‌سازی: [driving-lisense.ts](src/services/driving-lisense.ts)

**کاربرد:** اعتبار گواهینامه رانندگی (نسخه قدیم).

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی یا شناسه ملی | `"0010007700"` |
| `mobile` | `string` | بله | موبایل با فرمت 09120001111 | `"09120000000"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { drivingLisense } from "./src/index.js";

const result = await drivingLisense("0010007700", "09120000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`DrivingLisenseRes`):

```json
{
  "lisenses": [
    {
      "nationalCode": "0010007700",
      "firstName": "علی",
      "lastName": "رضایی",
      "title": "پايه سوم",
      "requestDate": "1404/01/01",
      "confirmDate": "1404/01/02",
      "printDate": "1404/01/03",
      "postalBarcode": "1234567890235907093971s8003",
      "rahvarStatus": "تحويل به پست",
      "lisenseNumber": "17687675",
      "validYears": "10"
    }
  ]
}
```

> **نکته:** املای `DrivingLisense` عیناً از OpenAPI حفظ شده است؛ نسخه‌ی جدید سرویس `drivingLicense` است.

### ۵۴. DrivingLicense — استعلام گواهینامه رانندگی جدید

`POST https://s.api.ir/api/sw1/DrivingLicense` · پیاده‌سازی: [driving-license.ts](src/services/driving-license.ts)

**کاربرد:** اعتبار گواهینامه رانندگی (نسخه جدید).

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی یا شناسه ملی | `"0010007700"` |
| `mobile` | `string` | بله | موبایل با فرمت 09120001111 | `"09120000000"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { drivingLicense } from "./src/index.js";

const result = await drivingLicense("0010007700", "09120000000");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`DrivingLicenseRes`):

```json
{
  "licenses": [
    {
      "nationalCode": "0012345678",
      "firstName": "علی",
      "lastName": "رضایی",
      "licenseNumber": "9901234567",
      "licenseStatus": "تحويل به پست",
      "licenseType": "پایه سوم",
      "requestDate": "1404/01/01",
      "confirmDate": "1404/01/02",
      "issueDate": "1404/01/03",
      "printDate": "1404/01/03",
      "validityYears": "10",
      "postalBarcode": "12345678901234567890"
    }
  ]
}
```

### ۵۵. MilitaryStatus — استعلام خدمت سربازی

`POST https://s.api.ir/api/sw1/MilitaryStatus` · پیاده‌سازی: [military-status.ts](src/services/military-status.ts)

**کاربرد:** وضعیت نظام وظیفه با کد ملی و تاریخ تولد.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی شخص جهت استعلام وضعیت نظام وظیفه | `"0012345678"` |
| `birthDate` | `string` | بله | تاریخ تولد شخص به فرمت yyyy/mm/dd | `"1370/05/20"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { militaryStatus } from "./src/index.js";

const result = await militaryStatus("0012345678", "1370/05/20");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`MilitaryStatusRes`):

```json
{
  "isAllowed": false
}
```

> **نکته:** تاریخ تولد به فرمت `yyyy/mm/dd` ارسال شود.

### ۵۶. ActivePlates — استعلام پلاک های فعال

`POST https://s.api.ir/api/sw1/ActivePlates` · پیاده‌سازی: [active-plates.ts](src/services/active-plates.ts)

**کاربرد:** فهرست پلاک‌های فعال یک فرد.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی صاحب خودرو | `"0057684356"` |
| `mobile` | `string` | بله | شماره موبایل صاحب خودرو | `"09123456789"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { activePlates } from "./src/index.js";

const result = await activePlates("0057684356", "09123456789");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`ActivePlatesRes[]`):

```json
[
  {
    "nationalCode": "0057684356",
    "plateNumber": "ایران 68 - 245 ج 12",
    "revoked": false,
    "revokedDate": "1401/1/1 13:23:40",
    "revokedDescription": "شماره گذاری تهران - دارای مالک - پلاک آزاد",
    "serialNumber": "10100448779921"
  }
]
```

### ۵۷. PlateHistory — استعلام تاریخچه پلاک

`POST https://s.api.ir/api/sw1/PlateHistory` · پیاده‌سازی: [plate-history.ts](src/services/plate-history.ts)

**کاربرد:** تاریخچه کامل پلاک و مدل خودرو.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `plateNumber` | `string` | بله | پلاک به فرمت : ایران 11 – 1111 ب 11 | `"ایران 11 – 1111 ب 11"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { plateHistory } from "./src/index.js";

const result = await plateHistory("0010007700", "ایران 11 – 1111 ب 11");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PlateHistoryRes`):

```json
{
  "plateHistory": [
    {
      "vehicleSystem": "پژو",
      "vehicleType": "206 تیپ 5",
      "installDate": "1402/01/01",
      "detachDate": "1403/01/01",
      "vehicleModel": "1400"
    }
  ],
  "description": "دارای مالک - نصب برروی وسیله",
  "serialNumber": "123456789"
}
```

### ۵۸. VehicleCard — استعلام کارت و سند خودرو

`POST https://s.api.ir/api/sw1/VehicleCard` · پیاده‌سازی: [vehicle-card.ts](src/services/vehicle-card.ts)

**کاربرد:** اطلاعات کارت خودرو و سند مالکیت.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `plateNumber` | `string` | بله | پلاک به فرمت : ایران 11 – 1111 ب 11 | `"ایران 11 – 1111 ب 11"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { vehicleCard } from "./src/index.js";

const result = await vehicleCard("0010007700", "ایران 11 – 1111 ب 11");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`VehicleCardRes`):

```json
{
  "cardPostalBarcode": "1234567890",
  "cardStatus": {
    "id": 1,
    "description": "فعال"
  },
  "cardIssuanceDate": "2025-01-01T00:00:00",
  "cardPrintDate": "2025-01-02T00:00:00",
  "isSmart": true,
  "cardType": {
    "id": 1,
    "description": "نوع A"
  },
  "documentStatus": 1,
  "documentIssuanceDate": "2025-01-03T00:00:00",
  "documentPrintDate": "2025-01-04T00:00:00",
  "documentType": {
    "id": 1,
    "description": "نوع سند A"
  }
}
```

> **نکته:** طبق توضیح OpenAPI فرمت صحیح درج پلاک در این سرویس `635ب11ایران20` است؛ مقدار نمونه‌ی schema `ایران 11 – 1111 ب 11` است.

### ۵۹. VehicleInfo — استعلام مشخصات و مدل خودرو

`POST https://s.api.ir/api/sw1/VehicleInfo` · پیاده‌سازی: [vehicle-info.ts](src/services/vehicle-info.ts)

**کاربرد:** شماره موتور، شاسی، VIN و مدل خودرو.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `plateNumber` | `string` | بله | پلاک به فرمت : ایران 11 – 1111 ب 11 | `"ایران 11 – 1111 ب 11"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { vehicleInfo } from "./src/index.js";

const result = await vehicleInfo("0010007700", "ایران 11 – 1111 ب 11");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`VehicleInfoRes`):

```json
{
  "name": "پژو 206",
  "engineNumber": "MHA882UJJAJOAQ",
  "chassisNumber": "N9JINJWJ2NXVAI31",
  "vin": "UK3939028JMJ3P202",
  "model": 1403
}
```

> **نکته:** طبق OpenAPI پلاک از چپ به راست وارد می‌شود: ابتدا عدد، سپس حرف، سپس عدد سه‌رقمی و بعد عدد دو رقمی بخش ایران؛ نمونه: `11188ب12`.

### ۶۰. VehicleViolation — وب سرویس استعلام خلافی خودرو

`POST https://s.api.ir/api/sw1/VehicleViolation` · پیاده‌سازی: [vehicle-violation.ts](src/services/vehicle-violation.ts)

**کاربرد:** میزان خلافی‌های خودرو.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `nationalCode` | `string` | بله | کد ملی | `"0010007700"` |
| `mobile` | `string` | بله | موبایل با فرمت 09120001111 | `"09120001111"` |
| `plateNumber` | `string` | بله | پلاک به فرمت : ایران 11 – 1111 ب 11 | `"ایران 11 – 1111 ب 11"` |

**مهلت پیش‌فرض این سرویس:** ۶۰ ثانیه — فهرست کامل خلافی‌ها با جزئیات.

```ts
import { vehicleViolation } from "./src/index.js";

const result = await vehicleViolation("0010007700", "09120001111", "ایران 11 – 1111 ب 11");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`VehicleViolationRes`):

```json
{
  "violations": [
    {
      "id": "A9F3C21B",
      "type": "توقف دوبله در معابر",
      "description": "الصاقی",
      "code": "2085",
      "price": 600000,
      "city": "تهران",
      "location": "تهران، ولیعصر، بهرامی",
      "serial": "999999999_99",
      "dataValue": "",
      "barcode": "BC-784512369",
      "license": "552411188",
      "billId": "12345678",
      "paymentId": "987654321",
      "date": "1402/07/15 - 11:30",
      "dateEn": "2023-10-07T11:30:00",
      "isPayable": true,
      "policemanCode": "POL-2215",
      "hasImage": false
    }
  ],
  "totalAmount": 600000,
  "count": 600000
}
```

### ۶۱. NationalityStatus — استعلام وضعیت اتباع

`POST https://s.api.ir/api/sw1/NationalityStatus` · پیاده‌سازی: [nationality-status.ts](src/services/nationality-status.ts)

**کاربرد:** اعتبار کارت اتباع از مراجع انتظامی.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `code` | `string` | بله | کد | `"121302310622"` |
| `codeType` | `number` | بله | کد شناسایی تبعه=1 فیدا=2 شناسه فراگیر ناجا=3 کد یکتا=4 | `2` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { nationalityStatus } from "./src/index.js";

const result = await nationalityStatus("121302310622", 2);

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`NationalityStatusRes`):

```json
{
  "id": 1,
  "uniqeCode": 12345678901234,
  "fidaCode": 987654321,
  "birthDate": "2025-12-31T00:00:00",
  "birthDatePersian": "1370/01/01",
  "firstName": "علی",
  "lastName": "رضایی",
  "fatherName": "محمد",
  "grandFatherName": "حسین",
  "gender": 1,
  "provinceID": 10,
  "province": "تهران",
  "nationalityID": 1,
  "nationalityName": "افغانستان",
  "status": 1,
  "familyID": 1234567890,
  "exit": true,
  "identityCode": 1234567890,
  "relative": 0,
  "education": 0,
  "isActive": true,
  "deleteAt": ""
}
```

> **نکته:** مقدار `codeType`: کد شناسایی تبعه=1، فیدا=2، شناسه فراگیر ناجا=3، کد یکتا=4.

### ۶۲. WatterBill — وب سرویس قبض آب

`POST https://s.api.ir/api/sw1/WatterBill` · پیاده‌سازی: [watter-bill.ts](src/services/watter-bill.ts)

**کاربرد:** وضعیت پرداخت قبض آب.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `billID` | `string` | بله | شناسه قبض | `"1100151403410"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { watterBill } from "./src/index.js";

const result = await watterBill("1100151403410");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`WatterBillRes`):

```json
{
  "amount": 150000,
  "billID": "1100151403410",
  "payID": "987654321",
  "date": "1404/01/01"
}
```

> **نکته:** املای `WatterBill` عیناً از OpenAPI حفظ شده است.

### ۶۳. WatterBillInfo — وب سرویس قبض آب با جزئیات

`POST https://s.api.ir/api/sw1/WatterBillInfo` · پیاده‌سازی: [watter-bill-info.ts](src/services/watter-bill-info.ts)

**کاربرد:** قبض آب به‌همراه مشخصات مشترک.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `billID` | `string` | بله | شناسه قبض | `"1100151403410"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { watterBillInfo } from "./src/index.js";

const result = await watterBillInfo("1100151403410");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`WatterBillInfoRes`):

```json
{
  "info": {
    "ownerName": "نسیم مطهری",
    "address": "تهران تهران خیایان مطهری",
    "postalCode": "1234567890",
    "usageType": "خانگی",
    "meterNumber": "987654",
    "fileNumber": "101",
    "city": "تهران",
    "capacity": 25,
    "previousReadDate": "1402/1/1",
    "currentReadDate": "1402/1/1",
    "currentConsumption": 150,
    "previousNumber": 1050,
    "currentNumber": 1150
  },
  "print": "",
  "amount": 150000,
  "billID": "1100151403410",
  "payID": "987654321",
  "date": "1404/01/01"
}
```

### ۶۴. GasBill — وب سرویس قبض گاز

`POST https://s.api.ir/api/sw1/GasBill` · پیاده‌سازی: [gas-bill.ts](src/services/gas-bill.ts)

**کاربرد:** وضعیت پرداخت و بدهی قبض گاز.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `billID` | `string` | بله | شناسه قبض | `"1100151403410"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { gasBill } from "./src/index.js";

const result = await gasBill("1100151403410");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`GasBillRes`):

```json
{
  "amount": 150000,
  "billID": "1100151403410",
  "payID": "987654321",
  "date": "1404/01/01"
}
```

### ۶۵. GasBillInfo — وب سرویس قبض گاز با جزئیات

`POST https://s.api.ir/api/sw1/GasBillInfo` · پیاده‌سازی: [gas-bill-info.ts](src/services/gas-bill-info.ts)

**کاربرد:** قبض گاز به‌همراه مشخصات اشتراک.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `billID` | `string` | بله | شناسه اشتراک | `"1100151403410"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { gasBillInfo } from "./src/index.js";

const result = await gasBillInfo("1100151403410");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`GasBillInfoRes`):

```json
{
  "info": {
    "ownerName": "نسیم مطهری",
    "address": "تهران تهران خیایان مطهری",
    "postalCode": "1234567890",
    "usageType": "خانگی",
    "meterNumber": "987654",
    "fileNumber": "101",
    "city": "تهران",
    "capacity": 25,
    "previousReadDate": "1402/1/1",
    "currentReadDate": "1402/1/1",
    "currentConsumption": 150,
    "previousNumber": 1050,
    "currentNumber": 1150
  },
  "print": "",
  "amount": 150000,
  "billID": "1100151403410",
  "payID": "987654321",
  "date": "1404/01/01"
}
```

### ۶۶. PowerBill — وب سرویس قبض برق

`POST https://s.api.ir/api/sw1/PowerBill` · پیاده‌سازی: [power-bill.ts](src/services/power-bill.ts)

**کاربرد:** وضعیت پرداخت قبض برق.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `billID` | `string` | بله | شناسه قبض | `"1100151403410"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { powerBill } from "./src/index.js";

const result = await powerBill("1100151403410");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PowerBillRes`):

```json
{
  "amount": 150000,
  "billID": "1100151403410",
  "payID": "987654321",
  "date": "1404/01/01"
}
```

### ۶۷. PowerBillInfo — وب سرویس قبض برق با جزئیات

`POST https://s.api.ir/api/sw1/PowerBillInfo` · پیاده‌سازی: [power-bill-info.ts](src/services/power-bill-info.ts)

**کاربرد:** قبض برق به‌همراه مشخصات مشترک.

| پارامتر | نوع | اجباری | توضیح | نمونه‌مقدار |
|---|---|---|---|---|
| `billID` | `string` | بله | شناسه قبض | `"1100151403410"` |

**مهلت پیش‌فرض این سرویس:** ۳۰ ثانیه (از `config.timeout`) — استعلام سبک.

```ts
import { powerBillInfo } from "./src/index.js";

const result = await powerBillInfo("1100151403410");

if (!result.success) {
  console.log(`❌ ${result.message} (code: ${result.code})`);
} else {
  console.log(result.data);
}
```

**نمونه‌ی `data`** (`PowerBillInfoRes`):

```json
{
  "info": {
    "ownerName": "نسیم مطهری",
    "address": "تهران تهران خیایان مطهری",
    "postalCode": "1234567890",
    "usageType": "خانگی",
    "meterNumber": "987654",
    "fileNumber": "101",
    "city": "تهران",
    "capacity": 25,
    "previousReadDate": "1402/1/1",
    "currentReadDate": "1402/1/1",
    "currentConsumption": 150,
    "previousNumber": 1050,
    "currentNumber": 1150
  },
  "print": "",
  "amount": 150000,
  "billID": "1100151403410",
  "payID": "987654321",
  "date": "1404/01/01"
}
```

---

## ۷. سناریوهای پرکاربرد

الگوی ثابت هر سناریو: **اعتبارسنجی ورودی قبل از ارسال** (تا اعتبار حساب بابت درخواست نامعتبر مصرف نشود) → **یک فراخوانی** → بررسی `success` → تفسیر `data` مطابق نوع آن در OpenAPI → پیام مناسب به کاربر. **شکست یعنی توقف:** پس از `success === false` پیام نمایش داده می‌شود و برنامه متوقف می‌شود؛ هیچ فراخوانی خودکار دوم، هیچ fallback خودکار و هیچ تلاش مجدد.

### سناریوی ۱ — کد یک‌بارمصرف پیامکی با انقضا (`smsOtp`، `data: boolean`)

کد سمت برنامه با `crypto.randomInt` تولید می‌شود، با زمان انقضا ذخیره می‌شود (برای تست `Map` درون‌حافظه‌ای؛ در production از Redis استفاده کنید)، بررسی ورودی کاربر شامل مقایسه + انقضا + حذف پس از مصرف است و ارسال مجدد محدودیت زمانی دارد.

```ts
import { randomInt } from "node:crypto";
import { smsOtp } from "./src/index.js";

const otpStore = new Map<string, { code: string; expiresAt: number }>(); // production: Redis
const TTL_MS = 2 * 60 * 1000;      // اعتبار کد: ۲ دقیقه
const RESEND_MS = 60 * 1000;       // حداقل فاصله‌ی ارسال مجدد: ۱ دقیقه

export async function sendLoginCode(mobile: string): Promise<string | null> {
  if (!/^09\d{9}$/.test(mobile)) return "شماره موبایل معتبر نیست.";               // اعتبارسنجی قبل از ارسال
  const last = otpStore.get(mobile);
  if (last && last.expiresAt - TTL_MS + RESEND_MS > Date.now()) return "لطفاً یک دقیقه صبر کنید.";
  const code = String(randomInt(100000, 999999));                                 // تولید سمت برنامه
  const result = await smsOtp(code, mobile, 1);                                   // یک فراخوانی
  if (!result.success || result.data !== true) return result.message ?? "ارسال انجام نشد."; // شکست یعنی توقف
  otpStore.set(mobile, { code, expiresAt: Date.now() + TTL_MS });
  return null;                                                                    // کد را هرگز در پاسخ HTTP یا لاگ برنگردانید
}

export function verifyLoginCode(mobile: string, input: string): boolean {
  const entry = otpStore.get(mobile);
  if (!entry || entry.expiresAt < Date.now()) return false;                      // نبود یا انقضا
  otpStore.delete(mobile);                                                        // حذف پس از مصرف
  return entry.code === input;
}
```

### سناریوی ۲ — ارسال پیامک خدماتی گروهی (`sendSms`، `data: number`)

```ts
import { sendSms } from "./src/index.js";

export async function notifyShipment(mobiles: string[], trackingCode: string): Promise<void> {
  const valid = mobiles.filter((m) => /^09\d{9}$/.test(m));                       // اعتبارسنجی قبل از ارسال
  if (valid.length === 0) {
    console.log("هیچ شماره‌ی معتبری وجود ندارد.");
    return;
  }

  const result = await sendSms(`کاربر گرامی بسته شما با شماره ${trackingCode} به پست ارسال شد`, valid); // یک فراخوانی

  if (!result.success) {
    console.log(`❌ ${result.message} (code: ${result.code})`);                    // شکست یعنی توقف؛ بدون تلاش مجدد
    return;
  }

  console.log(`✅ ارسال انجام شد. مقدار عددی برگشتی سرویس: ${result.data}`);       // data از نوع number
}
```

### سناریوی ۳ — استعلام نام دارنده شبا (`ibanInfo`، `data: IbanInfoRes`)

```ts
import { ibanInfo } from "./src/index.js";

export async function checkIban(iban: string): Promise<void> {
  if (!/^IR\d{24}$/.test(iban)) {                                                 // اعتبارسنجی قبل از ارسال
    console.log("شماره شبا باید با IR شروع شود و ۲۶ کاراکتر باشد.");
    return;
  }

  const result = await ibanInfo(iban);                                            // یک فراخوانی

  if (!result.success || result.data === null) {
    console.log(`❌ ${result.message} (code: ${result.code})`);                    // شکست یعنی توقف
    return;
  }

  const { name, bankName, active } = result.data;                                 // data از نوع IbanInfoRes
  console.log(active ? `✅ ${name} — ${bankName}` : `⚠️ شبا غیرفعال است (${bankName})`);
}
```

---

## ۸. تست بدون هزینه

سرویس **Echo** روی `https://s.api.ir/api/sandbox/echo` **بدون هزینه و بدون نیاز به اعتبار** است و برای بررسی صحت کلید و باز بودن مسیر شبکه به کار می‌رود. این مسیر در OpenAPI وجود دارد و تابع [echo.ts](src/services/echo.ts) از آن تولید شده است؛ فیلد `tokenStatus` در `data` وضعیت کلید شما را نشان می‌دهد.

نمونه‌ی تست اتصال، مناسب برای health check:

```ts
import { echo } from "./src/index.js";

export async function healthCheck(): Promise<boolean> {
  const result = await echo("api.ir", 10); // مهلت ۱۰ ثانیه فقط برای همین فراخوانی

  if (!result.success || result.data === null) {
    console.log(`❌ اتصال یا کلید مشکل دارد: ${result.message} (code: ${result.code})`);
    return false;
  }

  console.log(`✅ اتصال برقرار است. وضعیت کلید: ${result.data.tokenStatus}`);
  return true;
}
```

---

## ۹. مدیریت خطا

**قاعده‌ی تفسیر خروجی:** شما فقط `success` را بررسی می‌کنید.

- `success === true` یعنی پاسخ پردازش شده و قابل استفاده است و `data` نتیجه‌ی موردنظر را دارد.
- هر چیزی غیر از آن یعنی ناموفق؛ دلیل در `message` و معادل عددی همان دلیل در `code` است.
- مقدار `code` (از جمله `0`) رسیدن یا نرسیدن درخواست به سرور را تعیین نمی‌کند؛ از آن چنین تفسیری نکنید.
- `code === 401` یعنی مشکل کلید (تنظیم‌نشده، نامعتبر یا خارج از محدودیت IP).
- **کد HTTP در این SDK وجود ندارد.** همه‌ی پاسخ‌ها، حتی ۴۰۱، با همان قالب `success / code / message / data` برمی‌گردند. OpenAPI جدول کد خطای دیگری تعریف نکرده است.

خطاهای رایج:

| نشانه | علت محتمل | راه‌حل |
|---|---|---|
| `code === 401` | توکن تنظیم‌نشده یا نامعتبر | `APIIR_TOKEN` را تنظیم کنید؛ کلید و محدودیت IP را در `https://p.api.ir` بررسی کنید |
| `message` شامل خطای اتصال یا DNS | بسته بودن مسیر خروجی سرور به `s.api.ir` | دسترسی خروجی HTTPS سرور را باز کنید |
| `message` شامل خطای گواهی (certificate) | محیط داخلی با گواهی مشکل‌دار | گواهی معتبر نصب کنید؛ فقط به‌صورت موقت `config.sslVerify = false` |
| `message` شامل `timeout` یا `aborted` | پایان مهلت پاسخ | `timeout` همان فراخوانی را بیشتر کنید (بخش ۳) |
| خطای `process is not defined` یا مشابه | اجرای اشتباه SDK در مرورگر | SDK را فقط سمت سرور اجرا کنید |

> ⚠️ **از حلقه‌ی بی‌نهایت بپرهیزید.** retry خودکار توصیه نمی‌شود؛ هر فراخوانی هزینه دارد. پس از شکست، پیام را نمایش دهید و متوقف شوید.

---

## ۱۰. نکات امنیتی و عملیاتی

- **توکن فقط سمت سرور و در متغیر محیطی** `APIIR_TOKEN` نگهداری شود؛ هرگز در مخزن کد commit نشود.
- در **Next.js** از Route Handler یا Server Action استفاده کنید و **هرگز** توکن را در متغیر `NEXT_PUBLIC_` قرار ندهید.
- **پس از تحویل پروژه کلید را حذف کنید** و مالک پروژه کلید خودش را در `https://p.api.ir` بسازد. برای هر نرم‌افزار یک کلید مجزا بسازید.
- روی فرم‌ها **قفل ضد ارسال دوباره** بگذارید تا یک کلیک چندباره چند فراخوانی (و چند بار هزینه) ایجاد نکند.
- **ورودی کاربر را قبل از ارسال اعتبارسنجی کنید** (طول کد ملی، فرمت موبایل، فرمت شبا) تا اعتبار حساب بابت درخواست نامعتبر مصرف نشود.
- محدودیت IP هر کلید را در پنل فعال کنید تا کلید فقط از سرور شما قابل استفاده باشد.
- هیچ‌وقت پاسخ سرویس یا کدهای یک‌بارمصرف را در لاگ یا پاسخ HTTP به کاربر برنگردانید.

---

## ۱۱. پشتیبانی و منابع

| منبع | آدرس |
|---|---|
| پنل کاربری | `https://p.api.ir` |
| نمونه‌کد سایر زبان‌ها | `https://s.api.ir/code` |
| OpenAPI به‌روز | `https://s.api.ir/json` |
| مستندات Postman | `https://documenter.getpostman.com/view/40733477/2sAYJ7gJsi` |
| وضعیت و اپتایم سرویس‌ها | `https://status.api.ir/status/api-ir` |
| ایمیل | `info@api.ir` |
| تلفن | `90002244` |
| وب‌سایت | `https://api.ir` |
