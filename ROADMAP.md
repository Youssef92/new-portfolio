# Portfolio Roadmap

خطة تطوير البورتفوليو بعد النسخة الأولى. كل بند فيه: إيه هو، ليه مهم، وأولويته.
علّم على البند بـ `[x]` بدل `[ ]` أول ما يخلص.

---

## 🔴 أولوية عالية — تأثير مباشر على فرص الشغل

- [x] **Education & Training section**
  إضافة قسم بعد About مباشرة يوضح: بكالوريوس علوم حاسب (كلية الحاسبات والمعلومات، جامعة طنطا)، وتدريب ITI في Frontend Development. نقطة مصداقية قوية لعميل بيدور على "خريج جديد بس شاطر".

- [x] **زرار Download CV (PDF)**
  زرار في الـ Navbar أو الـ Hero يحمّل نسخة PDF جاهزة من الـ CV. يحتاج ملف PDF مُجهّز مسبقًا (لينك تحميل ثابت أو ملف داخل `public/`).

- [x] **Open Graph preview image**
  صورة معاينة (1200×630px) تظهر لما اللينك يتبعت في واتساب/لينكدإن/Upwork chat. يحتاج تصميم صورة + إضافة meta tags (`og:image`, `og:title`, `og:description`) في `index.html`.

---

## 🟡 أولوية متوسطة — يقوي الانطباع العام

- [x] **Services section**
  قسم يوضح بالظبط إيه اللي بتقدمه كخدمات (React App Development, API Integration, Forms & Auth Flows, Responsive UI...) — بيسهّل على العميل يفهم يطلب منك إيه.

- [ ] **Case study أعمق لكل مشروع**
  صفحة تفصيلية منفصلة لكل مشروع (مش بس كارت في الصفحة الرئيسية) بصيغة "التحدي / الحل / النتيجة"، مستفيدين من التفاصيل التقنية الموجودة في الـ handoff docs (KYC flow, 2FA, SignalR...).

---

## 🟢 أولوية منخفضة — تحسينات تقنية

- [x] **Analytics بسيط**
  تم إضافة `@vercel/analytics` — يتفعّل تلقائيًا بعد النشر على Vercel من تبويب Analytics في الداشبورد، من غير أي كود إضافي.

- [x] **Lazy loading للصور**
  تم إضافة `loading="lazy"` و`decoding="async"` لصور كروت المشاريع. صور الـ Lightbox أصلاً بتتحمل عند الطلب بس (on-demand).

- [x] **SEO meta tags أوضح**
  تمت إضافة: `robots.txt`, `sitemap.xml`, `canonical` link, `theme-color`, وJSON-LD structured data (schema.org Person). **الدومين الحقيقي (`youssefhassan-portfolio.vercel.app`) اتحدث في كل الملفات دي بالفعل.**

---

## ملاحظات عامة
- كل بند لما يتنفذ، نبنيه ونختبره فعليًا (build + screenshot) قبل ما نعلّمه `[x]`.
- لو بند احتاج قرار أو محتوى منك (زي نص الـ Services أو ملف الـ CV)، هسألك قبل ما أبدأ فيه.

---

## 📋 المحتوى المجمّع (Content Log)

### Education & Training
- **الدرجة:** بكالوريوس علوم حاسب — كلية الحاسبات والمعلومات، جامعة طنطا
- **التخرج:** يونيو 2026 تقريبًا (خريج جديد، خرّج من شهرين وقت كتابة هذا الملف)
- **GPA:** 3.5 / 4.0 — العرض بالرقم مؤكد من يوسف
- **ITI:** تدريب Frontend Development مدة شهر واحد. عمل فيه مشروع (React + Vite + Bootstrap) لكنه أول مشروع وضعيف نسبيًا — **قرار: نذكر التدريب كخبرة/شهادة بس من غير ما نلينك المشروع أو نعرضه في قسم Projects.**

### CV (PDF)
- يوسف معندوش ملف جاهز — **مطلوب نعمله من الصفر** بمعايير CV قوي (هيُبنى من محتوى البورتفوليو + المعلومات دي).

### Services section — الخمس خدمات المؤكدة (كلهم "واثق فيها")
1. **React Web App Development** — بناء مواقع React من الصفر: صفحات، تنقل (routing)، وترتيب كود احترافي.
2. **Responsive UI & Animations** — تصميم متجاوب (Tailwind) + حركات/انتقالات (Framer Motion).
3. **API & Real-time Integration** — ربط بباك إند حقيقي (Axios) + بيانات لحظية (SignalR).
4. **Forms, Validation & Auth Flows** — نماذج معقدة مع تحقق من البيانات (React Hook Form + Zod)، تسجيل دخول/حسابات، تأمين إضافي (2FA).
5. **Multi-Role Dashboard Development** — لوحات تحكم مختلفة حسب نوع المستخدم مع صلاحيات محمية (Protected Routes).

### Open Graph image
- يوسف هيرفع صورة شخصية/احترافية (headshot) لاستخدامها. **لسه منتظرين الرفع.**

