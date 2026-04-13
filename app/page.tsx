"use client";
// @ts-nocheck

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Landmark,
  BookOpen,
  Users,
  Briefcase,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  GraduationCap,
  HandCoins,
  BadgeCheck,
  Menu,
  X,
  Globe,
  MessageSquare,
  Send,
  Sparkles,
  Bot,
  Building2,
  Newspaper,
  CircleDollarSign,
} from "lucide-react";
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children }) {
  return <div className={cn("bg-white", className)}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardHeader({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardTitle({ className = "", children }) {
  return <h3 className={className}>{children}</h3>;
}

function CardDescription({ className = "", children }) {
  return <p className={className}>{children}</p>;
}

function Button({ className = "", variant = "default", size = "default", children, ...props }) {
  const base = "inline-flex items-center justify-center transition font-medium disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-[#12382f] text-white hover:bg-[#0f2f27]",
    outline: "border border-[#12382f]/20 bg-white text-[#12382f] hover:bg-emerald-50",
  };
  const sizes = {
    default: "px-5 py-2.5 text-sm",
    sm: "px-4 py-2 text-sm",
  };
  return (
    <button className={cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className)} {...props}>
      {children}
    </button>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={cn("w-full border border-emerald-950/10 bg-white px-4 py-3 text-sm text-[#12382f] outline-none ring-0 placeholder:text-slate-400", className)}
      {...props}
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={cn("w-full border border-emerald-950/10 bg-white px-4 py-3 text-sm text-[#12382f] outline-none ring-0 placeholder:text-slate-400", className)}
      {...props}
    />
  );
}

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

const rtlLanguages: LanguageCode[] = [];



const uzLatin = {
  brand: {
    name: "MIZANIA",
    tagline: "Adolat · Muvozanat · Ishonch",
    website: "mizania.uz",
    email: "mizaniamchj@gmail.com",
    phone: "+998 90 901 23 73",
  },
  pages: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    services: "Xizmatlar",
    islamicFinance: "Islomiy moliya",
    courses: "Kurslar",
    consulting: "Konsalting",
    investors: "Investorlar",
    network: "Ekspertlar tarmog‘i",
    blog: "Blog",
    faq: "FAQ",
    contact: "Aloqa",
  },
  nav: {
    speak: "Bog‘lanish",
    ai: "AI yordamchi",
  },
  hero: {
    badge: "Premium halol moliya va konsalting brendi",
    title: "Tamoyil, strategiya va ishonchga tayangan moliya.",
    highlight: "Tamoyil",
    description:
      "MIZANIA halol moliya, islomiy moliya, ta’lim, konsalting va investorlar bilan ishlash yo‘nalishlarida global premium darajadagi brend sifatida qurilgan.",
    cta1: "Xizmatlarni ko‘rish",
    cta2: "Konsultatsiya so‘rash",
    cards: [
      ["Premium", "Global korporativ ko‘rinish"],
      ["Adolatli", "Adolatga tayangan yondashuv"],
      ["Ishonchli", "Sokin va professional imidj"],
    ],
    promise: "Brend va’dasi",
    promiseText:
      "MIZANIA tashqi ko‘rinish uchun emas, mazmun, muvozanat va uzoq muddatli ishonch uchun qurilgan.",
  },
  trust: {
    eyebrow: "Ishonch indikatorlari",
    items: [
      ["Tamoyilli", "Tamoyilga asoslangan qarorlar"],
      ["Islomiy", "Shariatga mos moliyaviy yondashuv"],
      ["Ta’lim", "Bilimga asoslangan qiymat"],
      ["Premium", "Global darajadagi taqdimot"],
    ],
  },
  about: {
    eyebrow: "Brend haqida",
    title: "Aniqlik, halollik va uzoq muddatli ishonchni qadrlaydiganlar uchun yaratilgan.",
    description:
      "MIZANIA oddiy moliyaviy sayt emas. U adolat, muvozanat, ta’lim va strategik ishonchga qurilgan premium platforma.",
    points: [
      "Adolat va tamoyilga asoslangan premium pozitsiya",
      "Nafis va minimal vizual identitet",
      "Kuchli ta’lim va konsalting qiyofasi",
      "Global auditoriya va jiddiy hamkorlar uchun mos",
    ],
    button: "Batafsil",
  },
  services: {
    eyebrow: "Xizmatlar",
    title: "Halol va barqaror o‘sish uchun premium xizmatlar.",
    description:
      "Har bir taklif nafis, strategik va yuqori ishonch uyg‘otadigan tarzda ishlab chiqilgan.",
    button: "Barcha xizmatlar",
    items: [
      {
        title: "Islomiy moliya maslahati",
        text: "Halol moliyaviy yechimlar, biznes model tekshiruvi va Shariatga mos o‘sish strategiyasi.",
      },
      {
        title: "Ta’lim va kurslar",
        text: "Tadbirkorlar, talabalar va professional auditoriya uchun premium ta’lim tajribasi.",
      },
      {
        title: "Strategik konsalting",
        text: "Pozitsiyalash, taklif dizayni, biznes yo‘nalishi va ishonch me’morchiligi.",
      },
      {
        title: "Investorlar bilan ishlash",
        text: "Ishonchga tayangan kommunikatsiya va investorlar uchun kuchli taqdimot modeli.",
      },
    ],
  },
  why: {
    eyebrow: "Nega MIZANIA",
    title: "Shovqinsiz. Shablonsiz. Ishonchli va ajralib turuvchi.",
    description:
      "Brend tili ataylab sokin va baland darajada qurilgan. U ortiqcha shovqinsiz ishonch, isrofsiz premiumlik va bosimsiz ekspertiza beradi.",
    cards: [
      ["Adolatga tayangan identitet", "Brend hikoyasi adolat, muvozanat va mas’uliyat tamoyillariga qurilgan."],
      ["Premium korporativ dizayn", "Global konsalting va moliya sohasi uchun mos vizual tizim."],
      ["Murojaat uchun qulay tuzilma", "CTA, aloqa nuqtalari va foydalanuvchini murojaatga olib keluvchi sodda arxitektura."],
      ["AI yordamchi", "Savol-javob, yo‘naltirish va xizmatlar bo‘yicha tezkor yordam imkoniyati."],
    ],
  },
  principles: {
    eyebrow: "Halol va adolatli moliya tamoyillari",
    title: "Tamoyillar bezak emas. Ular butun tuzilmaning o‘zi.",
    description:
      "MIZANIAning moliyaga qarashi adolat, shaffoflik, javobgarlik va haqiqiy qiymat yaratishga tayangan.",
    button: "Islomiy moliyani ko‘rish",
    items: [
      "Foydadan oldin adolat",
      "O‘sish va mas’uliyat o‘rtasida muvozanat",
      "Tuzilma va kommunikatsiyada shaffoflik",
      "Har bir bitimning asosi — ishonch",
      "Bilimga tayangan moliyaviy qarorlar",
      "Qisqa muddatli foydadan ko‘ra uzoq muddatli qiymat",
    ],
  },
  education: {
    eyebrow: "Ta’lim takliflari",
    title: "Jiddiy o‘sish uchun yaratilgan bilim.",
    description:
      "Halol moliya, islomiy moliya va amaliy strategik fikrlashni chuqur tushunishni istaganlar uchun kurslar va workshoplar.",
    button1: "Kurslarni ko‘rish",
    button2: "Dastur so‘rash",
    cards: [
      ["Asoslar", "Halol va islomiy moliya tamoyillari"],
      ["Executive", "Qaror qabul qiluvchilar uchun yopiq workshoplar"],
      ["Amaliy", "Keyslar asosidagi mashg‘ulotlar"],
      ["Premium", "Yuqori darajadagi ta’lim tajribasi"],
    ],
  },
  testimonials: {
    eyebrow: "Yondashuv",
    title: "MIZANIA bilan ishlash aniqlik, tartib va ishonchga tayangan yondashuvga qurilgan.",
    description:
      "Bu bo‘lim MIZANIA qanday ishlashi, mijozga qanday yondashishi va hamkorlikni qanday olib borishini qisqacha ko‘rsatadi.",
    items: [
      {
        name: "Aniqlik",
        role: "Har bir bosqich tushunarli",
        quote:
          "Har bir so‘rov maqsad, ish hajmi va kutilayotgan natija aniq belgilangan holda ko‘rib chiqiladi.",
      },
      {
        name: "Ishonch",
        role: "Munosabatning asosi",
        quote:
          "Muloqotda shaffoflik, va’dalarda mas’uliyat va har bir tavsiyada ishonch ustuvor bo‘ladi.",
      },
      {
        name: "Sifat",
        role: "Professional taqdimot",
        quote:
          "Mazmun, tartib va taqdimot birgalikda yuqori darajadagi professional taassurot qoldirishi kerak.",
      },
    ],
  },
  cta: {
    eyebrow: "Suhbatni boshlang",
    title: "Keyingi moliyaviy qadamingizni kuchliroq asosda quring.",
    description:
      "Sizga maslahat, ta’lim, strategik aniqlik yoki investorlar uchun premium taqdimot kerak bo‘lsa, MIZANIA kuchli boshlanish nuqtasini beradi.",
    button1: "Konsultatsiya so‘rash",
    button2: "Investorlar sahifasi",
    formTitle: "So‘rov shakli",
    fullName: "To‘liq ism",
    email: "Email manzil",
    company: "Kompaniya yoki tashkilot",
    message: "Nimani izlayotganingizni yozing",
    send: "So‘rov yuborish",
  },
  faq: {
    eyebrow: "Ko‘p so‘raladigan savollar",
    title: "Aniqlik ishonchni oshiradi va to‘siqlarni kamaytiradi.",
    description:
      "Muhim savollarga oldindan javob berish ishonchni oshiradi va murojaat ehtimolini kuchaytiradi.",
    button: "To‘liq FAQ",
    items: [
      {
        q: "MIZANIA nimaga ixtisoslashgan?",
        a: "MIZANIA halol moliya, islomiy moliya, ta’lim, strategik konsalting va investorlar bilan ishlash yo‘nalishlariga ixtisoslashgan.",
      },
      {
        q: "Onlayn kurslar bormi?",
        a: "Ha. MIZANIA kurslar, workshoplar va premium ta’lim yo‘nalishlarini taqdim eta oladi.",
      },
      {
        q: "AI yordamchi nima qiladi?",
        a: "AI yordamchi xizmatlar, kurslar, islomiy moliya, investorlar bo‘limi va aloqa bo‘yicha foydalanuvchini yo‘naltiradi.",
      },
      {
        q: "Qanday bog‘lanish mumkin?",
        a: "Siz forma, email yoki telefon orqali MIZANIA bilan bog‘lanishingiz mumkin.",
      },
    ],
  },
  investors: {
    eyebrow: "Investorlar",
    title: "Ishonchli va uzoq muddatli kapital bilan ishlashga mos sahifa.",
    description:
      "Bu bo‘lim investorlarni MIZANIA falsafasi, boshqaruv yondashuvi va ishonchliligi bilan tanishtiradi.",
    blocks: [
      ["Ishonchga tayangan pozitsiya", "Investorlar uchun imkoniyatdan tashqari intizom, aniqlik va tamoyillarga sodiqlik ham muhim."],
      ["Uzoq muddatli qiymat", "MIZANIA kapitalni mas’uliyat va barqaror foyda vositasi sifatida ko‘radi."],
      ["Taqdimot sifati", "Premium vizual uslub va korporativ darajadagi taqdimot investor ishonchini oshiradi."],
    ],
    cta: "Investor so‘rovi",
  },
  blog: {
    eyebrow: "Blog",
    title: "Avtoritet va SEOni kuchaytiruvchi tahririy kontent.",
    description: "Blog sahifasi qidiruv ko‘rinishi, ekspertlik va brend chuqurligini oshiradi.",
    read: "Maqolani o‘qish",
    items: [
      {
        category: "Halol moliya",
        title: "Zamonaviy iqtisodda halol moliya nimani anglatadi",
        excerpt: "Mas’uliyat, ishonch va barqaror qiymat yaratish haqidagi professional qarash.",
      },
      {
        category: "Islomiy moliya",
        title: "Asoschilar va investorlar uchun islomiy moliya tamoyillari",
        excerpt: "Adolatga tayangan moliyaviy yondashuvlarga amaliy kirish.",
      },
      {
        category: "Konsalting",
        title: "Nega ishonch strategik aktiv hisoblanadi",
        excerpt: "Shaffoflik va izchillik qanday uzoq muddatli ustunlikka aylanadi.",
      },
    ],
  },
  contact: {
    eyebrow: "Aloqa",
    title: "MIZANIA bilan bog‘lanish uchun qulay va ishonchli nuqta.",
    description:
      "Savolingiz, hamkorlik taklifi yoki konsultatsiya so‘rovingiz bo‘lsa, bizga yozing. Jamoamiz siz bilan tez orada bog‘lanadi.",
    name: "Ismingiz",
    email: "Email manzil",
    phone: "Telefon raqam",
    company: "Kompaniya yoki tashkilot",
    message: "MIZANIA sizga qanday yordam bera oladi?",
    send: "Xabar yuborish",
  },
  footer: {
    description:
      "Adolat, muvozanat va ishonchga tayangan premium halol moliya, islomiy moliya, konsalting va ta’lim.",
    pages: "Sahifalar",
    explore: "Bo‘limlar",
    contact: "Aloqa",
    rights: "© 2026 MIZANIA. Barcha huquqlar himoyalangan.",
    note: "Premium ishonch, zamonaviy aniqlik va AI yordamchi bilan kuchaytirilgan platforma.",
  },
  ai: {
    title: "MIZANIA AI",
    subtitle: "Savollaringizga tezkor yo‘naltiruvchi yordamchi",
    placeholder: "Savolingizni yozing...",
    send: "Yuborish",
    hello:
      "Assalomu alaykum. Men MIZANIA AI yordamchisiman. Sizga xizmatlar, kurslar, islomiy moliya, investorlar va aloqa bo‘yicha yordam bera olaman.",
    suggestions: ["Xizmatlaringiz qanday?", "Islomiy moliya haqida", "Kurslar bormi?", "Qanday bog‘lanaman?"],
    lead: "Agar xohlasangiz, men sizni Contact bo‘limiga yo‘naltiraman.",
  },
};

const en = {
  brand: {
    name: "MIZANIA",
    tagline: "Justice · Balance · Trust",
    website: "mizania.uz",
    email: "mizaniamchj@gmail.com",
    phone: "+998 90 901 23 73",
  },
  pages: {
    home: "Home",
    about: "About",
    services: "Services",
    islamicFinance: "Islamic Finance",
    courses: "Courses",
    consulting: "Consulting",
    investors: "Investors",
    network: "Expert Network",
    blog: "Blog",
    faq: "FAQ",
    contact: "Contact",
  },
  nav: { speak: "Contact Us", ai: "AI Assistant" },
  hero: {
    badge: "Premium ethical finance and advisory brand",
    title: "Finance guided by principle, strategy, and trust.",
    highlight: "principle",
    description:
      "MIZANIA is a premium platform for ethical finance, Islamic finance, education, consulting, and investor-facing communication.",
    cta1: "Explore Services",
    cta2: "Request Consultation",
    cards: [
      ["Premium", "Global corporate look"],
      ["Ethical", "Justice-led positioning"],
      ["Trusted", "Calm professional image"],
    ],
    promise: "Brand Promise",
    promiseText:
      "MIZANIA is built to express depth, balance, and long-term trust rather than appearance without substance.",
  },
  trust: {
    eyebrow: "Trust Indicators",
    items: [
      ["Ethical", "Principles-led decisions"],
      ["Islamic", "Sharia-aware financial direction"],
      ["Educational", "Knowledge-based value"],
      ["Premium", "Global-grade presentation"],
    ],
  },
  about: {
    eyebrow: "About the Brand",
    title: "Built for people who value clarity, integrity, and enduring trust.",
    description:
      "MIZANIA is a premium brand built around justice, balance, education, and strategic credibility.",
    points: [
      "Premium positioning rooted in ethics",
      "Luxury-minimal visual identity",
      "Strong education and consulting presence",
      "Suitable for global audiences and serious stakeholders",
    ],
    button: "Learn More",
  },
  services: {
    eyebrow: "Services",
    title: "A premium service architecture for ethical growth.",
    description:
      "Each offer is designed to feel sophisticated, strategic, and trust-centered.",
    button: "All Services",
    items: [
      { title: "Islamic Finance Advisory", text: "Halal financial structuring, model review, and Sharia-aware growth guidance." },
      { title: "Education & Courses", text: "Premium learning experiences for entrepreneurs, students, and professionals." },
      { title: "Strategic Consulting", text: "Business positioning, offer design, and trust architecture." },
      { title: "Investor Relations", text: "Clear communication and premium investor-facing presentation." },
    ],
  },
  why: {
    eyebrow: "Why MIZANIA",
    title: "Not loud. Not generic. Distinctly credible.",
    description:
      "The brand language is calm, refined, and strategic. It communicates confidence without noise.",
    cards: [
      ["Justice-led identity", "Built around fairness, balance, and responsibility."],
      ["Premium corporate design", "Suitable for global consulting and finance audiences."],
      ["Lead generation ready", "Structured pathways for conversion and inquiry."],
      ["AI-powered guidance", "A built-in assistant helps users navigate the site."],
    ],
  },
  principles: {
    eyebrow: "Ethical Finance Principles",
    title: "Principles are not decorative. They are the structure.",
    description:
      "MIZANIA’s financial perspective is rooted in fairness, transparency, accountability, and meaningful value creation.",
    button: "Explore Islamic Finance",
    items: [
      "Justice before profit",
      "Balance between growth and responsibility",
      "Transparency in structure and communication",
      "Trust as the foundation of every transaction",
      "Knowledge-led financial decisions",
      "Long-term value over short-term gain",
    ],
  },
  education: {
    eyebrow: "Educational Offers",
    title: "Knowledge designed for serious growth.",
    description:
      "Courses, workshops, and premium educational pathways for those seeking depth in ethical and Islamic finance.",
    button1: "Browse Courses",
    button2: "Request Curriculum",
    cards: [
      ["Foundations", "Ethical and Islamic finance principles"],
      ["Executive", "Private workshops for decision-makers"],
      ["Applied", "Case-based sessions"],
      ["Premium", "High-trust learning experience"],
    ],
  },
  testimonials: {
    eyebrow: "Approach",
    title: "Working with MIZANIA is built on clarity, structure, and trust.",
    description:
      "This section explains how MIZANIA works, how it approaches clients, and what kind of experience partners can expect.",
    items: [
      {
        name: "Clarity",
        role: "Each step is clearly defined",
        quote:
          "Every request is reviewed with a clear understanding of objectives, scope, and expected outcomes.",
      },
      {
        name: "Trust",
        role: "The foundation of the relationship",
        quote:
          "Communication is transparent, commitments are handled responsibly, and trust remains central to every recommendation.",
      },
      {
        name: "Quality",
        role: "Professional presentation",
        quote:
          "Content, structure, and presentation are expected to work together at a consistently high standard.",
      },
    ],
  },
  cta: {
    eyebrow: "Start the Conversation",
    title: "Build your next financial step on a stronger foundation.",
    description:
      "Whether you need guidance, education, strategic clarity, or investor-ready presentation, MIZANIA offers a premium starting point.",
    button1: "Request Consultation",
    button2: "Investor Page",
    formTitle: "Lead Generation Form",
    fullName: "Full name",
    email: "Email address",
    company: "Company or organization",
    message: "Tell us what you are looking for",
    send: "Submit Inquiry",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Elegant clarity reduces hesitation and builds confidence.",
    description: "A premium site should answer key questions before they become objections.",
    button: "View Full FAQ",
    items: [
      { q: "What does MIZANIA specialize in?", a: "Ethical finance, Islamic finance, education, strategic consulting, and investor-facing communication." },
      { q: "Do you offer courses?", a: "Yes. MIZANIA can present courses, workshops, and premium learning pathways." },
      { q: "What does the AI assistant do?", a: "It helps users navigate services, courses, Islamic finance topics, and contact options." },
      { q: "How can I get in touch?", a: "You can contact MIZANIA through the form, email, or phone." },
    ],
  },
  investors: {
    eyebrow: "Investors",
    title: "A page designed to speak to ethical, long-term capital.",
    description: "This section presents MIZANIA’s philosophy, governance mindset, and premium credibility.",
    blocks: [
      ["Trust-led positioning", "Investors need discipline, clarity, and ethical coherence."],
      ["Long-term value", "Capital is framed as responsibility and sustainable benefit."],
      ["Presentation quality", "Premium communication improves investor confidence."],
    ],
    cta: "Investor Inquiry",
  },
  blog: {
    eyebrow: "Blog",
    title: "Editorial content that strengthens authority and SEO.",
    description: "The blog supports search visibility, expertise, and brand depth.",
    read: "Read article",
    items: [
      { category: "Ethical Finance", title: "What Ethical Finance Means in a Modern Economy", excerpt: "A premium perspective on responsibility, trust, and sustainable value creation." },
      { category: "Islamic Finance", title: "Islamic Finance Principles for Founders and Investors", excerpt: "A practical introduction to justice-based financial thinking." },
      { category: "Consulting", title: "Why Trust Is a Strategic Asset", excerpt: "How transparency and consistency become long-term advantages." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "A clear and reliable way to get in touch with MIZANIA.",
    description: "If you have a question, a partnership proposal, or a consultation request, send us a message. Our team will get back to you shortly.",
    name: "Your name",
    email: "Email address",
    phone: "Phone number",
    company: "Company or organization",
    message: "How can MIZANIA support you?",
    send: "Send Message",
  },
  footer: {
    description: "Premium ethical finance, Islamic finance insight, consulting, and education shaped by justice, balance, and trust.",
    pages: "Pages",
    explore: "Explore",
    contact: "Contact",
    rights: "© 2026 MIZANIA. All rights reserved.",
    note: "Built for premium trust, modern clarity, and AI-assisted navigation.",
  },
  ai: {
    title: "MIZANIA AI",
    subtitle: "Smart guidance for your questions",
    placeholder: "Type your question...",
    send: "Send",
    hello: "Hello. I am MIZANIA AI. I can help with services, Islamic finance, courses, investors, and contact information.",
    suggestions: ["What services do you offer?", "Tell me about Islamic finance", "Do you have courses?", "How can I contact you?"],
    lead: "I can also direct you to the Contact page.",
  },
};

const ru = {
  ...en,
  brand: { ...en.brand, tagline: "Справедливость · Баланс · Доверие" },
  pages: {
    home: "Главная",
    about: "О бренде",
    services: "Услуги",
    islamicFinance: "Исламские финансы",
    courses: "Курсы",
    consulting: "Консалтинг",
    investors: "Инвесторам",
    network: "Сеть экспертов",
    blog: "Блог",
    faq: "FAQ",
    contact: "Контакты",
  },
  nav: { speak: "Связаться", ai: "AI помощник" },
  hero: {
    badge: "Премиальный бренд этичных финансов и консалтинга",
    title: "Финансы, основанные на принципах, стратегии и доверии.",
    highlight: "принципах",
    description: "MIZANIA — премиальная платформа в сфере этичных финансов, исламских финансов, образования, консалтинга и работы с инвесторами.",
    cta1: "Смотреть услуги",
    cta2: "Запросить консультацию",
    cards: [["Премиум", "Глобальный корпоративный вид"], ["Этика", "Позиционирование через справедливость"], ["Доверие", "Спокойный профессиональный образ"]],
    promise: "Обещание бренда",
    promiseText: "MIZANIA создана для глубины, баланса и долгосрочного доверия, а не для красивой формы без содержания.",
  },
  trust: { eyebrow: "Индикаторы доверия", items: [["Этика", "Решения на основе принципов"], ["Исламски", "Финансовый подход с учетом Шариата"], ["Образование", "Ценность через знания"], ["Премиум", "Подача глобального уровня"]] },
  about: {
    eyebrow: "О бренде",
    title: "Создано для тех, кто ценит ясность, целостность и устойчивое доверие.",
    description: "MIZANIA — не просто финансовый сайт. Это премиальная платформа, построенная на справедливости, балансе, образовании и стратегическом доверии.",
    points: ["Премиальное позиционирование на основе этики", "Luxury-minimal визуальная идентичность", "Сильный образ в образовании и консалтинге", "Подходит для глобальной аудитории и серьёзных стейкхолдеров"],
    button: "Подробнее",
  },
  services: {
    eyebrow: "Услуги",
    title: "Премиальная архитектура услуг для этичного роста.",
    description: "Каждое предложение выглядит изысканно, стратегично и вызывает доверие.",
    button: "Все услуги",
    items: [
      { title: "Консалтинг по исламским финансам", text: "Халяльные финансовые решения, проверка бизнес-модели и рост с учетом норм Шариата." },
      { title: "Образование и курсы", text: "Премиальное обучение для предпринимателей, студентов и профессиональной аудитории." },
      { title: "Стратегический консалтинг", text: "Позиционирование, дизайн предложения и архитектура доверия." },
      { title: "Работа с инвесторами", text: "Ясная коммуникация и сильная премиальная подача для инвесторов." },
    ],
  },
  why: {
    eyebrow: "Почему MIZANIA",
    title: "Без шума. Без шаблонности. С убедительной репутацией.",
    description: "Язык бренда спокойный, изысканный и стратегичный. Он передаёт уверенность без лишнего шума.",
    cards: [["Идентичность справедливости", "Построено вокруг справедливости, баланса и ответственности."], ["Премиальный корпоративный дизайн", "Подходит для глобального консалтинга и финансов."], ["Готовность к лидам", "Продуманная логика обращений и конверсии."], ["AI-навигация", "Встроенный помощник направляет пользователя по сайту."]],
  },
  principles: {
    eyebrow: "Принципы этичных финансов",
    title: "Принципы — это не декор. Это сама структура.",
    description: "Финансовый взгляд MIZANIA основан на справедливости, прозрачности, ответственности и создании реальной ценности.",
    button: "Исламские финансы",
    items: ["Справедливость выше прибыли", "Баланс между ростом и ответственностью", "Прозрачность структуры и коммуникации", "Доверие как основа каждой сделки", "Решения, основанные на знаниях", "Долгосрочная ценность вместо краткосрочной выгоды"],
  },
  education: {
    eyebrow: "Образовательные предложения",
    title: "Знания, созданные для серьёзного роста.",
    description: "Курсы, воркшопы и премиальные образовательные направления для глубокого понимания этичных и исламских финансов.",
    button1: "Смотреть курсы",
    button2: "Запросить программу",
    cards: [["База", "Принципы этичных и исламских финансов"], ["Executive", "Закрытые воркшопы для принимающих решения"], ["Практика", "Кейс-ориентированные занятия"], ["Премиум", "Высокий уровень образовательного опыта"]],
  },
  testimonials: {
    eyebrow: "Подход",
    title: "Работа с MIZANIA строится на ясности, порядке и доверии.",
    description:
      "Этот блок кратко показывает, как MIZANIA выстраивает работу, взаимодействует с клиентами и ведёт сотрудничество.",
    items: [
      {
        name: "Ясность",
        role: "Каждый этап понятен",
        quote:
          "Каждый запрос рассматривается с чётким пониманием цели, объёма работы и ожидаемого результата.",
      },
      {
        name: "Доверие",
        role: "Основа взаимодействия",
        quote:
          "Коммуникация строится на прозрачности, обязательства — на ответственности, а доверие остаётся основой каждой рекомендации.",
      },
      {
        name: "Качество",
        role: "Профессиональная подача",
        quote:
          "Содержание, структура и подача должны вместе формировать сильное и профессиональное впечатление.",
      },
    ],
  },
  cta: {
    eyebrow: "Начните диалог",
    title: "Постройте следующий финансовый шаг на более сильной основе.",
    description: "Если вам нужны консультации, обучение, стратегическая ясность или инвесторская подача, MIZANIA даёт премиальную точку входа.",
    button1: "Запросить консультацию",
    button2: "Страница инвесторов",
    formTitle: "Форма заявки",
    fullName: "Полное имя",
    email: "Email",
    company: "Компания или организация",
    message: "Опишите ваш запрос",
    send: "Отправить",
  },
  faq: {
    eyebrow: "Часто задаваемые вопросы",
    title: "Ясность снижает сомнения и усиливает доверие.",
    description: "Премиальный сайт должен отвечать на ключевые вопросы заранее.",
    button: "Все FAQ",
    items: [
      { q: "На чём специализируется MIZANIA?", a: "Этичные финансы, исламские финансы, образование, стратегический консалтинг и работа с инвесторами." },
      { q: "Есть ли курсы?", a: "Да. MIZANIA может предлагать курсы, воркшопы и премиальные образовательные форматы." },
      { q: "Что делает AI помощник?", a: "Он помогает ориентироваться по услугам, курсам, исламским финансам и контактам." },
      { q: "Как с вами связаться?", a: "Через форму, email или телефон." },
    ],
  },
  investors: {
    eyebrow: "Инвесторам",
    title: "Страница, говорящая с этичным и долгосрочным капиталом.",
    description: "Этот раздел знакомит инвесторов с философией MIZANIA, подходом к управлению и уровнем доверия бренда.",
    blocks: [["Позиционирование через доверие", "Инвесторам нужны дисциплина, ясность и этическая целостность."], ["Долгосрочная ценность", "Капитал рассматривается как ответственность и источник устойчивой пользы."], ["Качество презентации", "Премиальная подача усиливает доверие инвесторов."]],
    cta: "Инвесторский запрос",
  },
  blog: {
    eyebrow: "Блог",
    title: "Редакционный контент, усиливающий авторитет и SEO.",
    description: "Блог усиливает поисковую видимость, экспертность и глубину бренда.",
    read: "Читать",
    items: [
      { category: "Этичные финансы", title: "Что такое этичные финансы в современной экономике", excerpt: "Премиальный взгляд на ответственность, доверие и устойчивое создание ценности." },
      { category: "Исламские финансы", title: "Принципы исламских финансов для основателей и инвесторов", excerpt: "Практичное введение в справедливые финансовые подходы." },
      { category: "Консалтинг", title: "Почему доверие — стратегический актив", excerpt: "Как прозрачность и последовательность превращаются в долгосрочное преимущество." },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Удобный и надёжный способ связаться с MIZANIA.",
    description: "Если у вас есть вопрос, предложение о сотрудничестве или запрос на консультацию, напишите нам. Наша команда свяжется с вами в ближайшее время.",
    name: "Ваше имя",
    email: "Email",
    phone: "Телефон",
    company: "Компания или организация",
    message: "Как MIZANIA может вам помочь?",
    send: "Отправить сообщение",
  },
  footer: {
    description: "Премиальные этичные финансы, исламская финансовая экспертиза, консалтинг и образование, основанные на справедливости, балансе и доверии.",
    pages: "Страницы",
    explore: "Разделы",
    contact: "Контакты",
    rights: "© 2026 MIZANIA. Все права защищены.",
    note: "Создано для премиального доверия, современной ясности и AI-навигации.",
  },
  ai: {
    title: "MIZANIA AI",
    subtitle: "Умный помощник по сайту",
    placeholder: "Напишите ваш вопрос...",
    send: "Отправить",
    hello: "Здравствуйте. Я AI помощник MIZANIA. Я могу помочь по услугам, исламским финансам, курсам, инвесторам и контактам.",
    suggestions: ["Какие у вас услуги?", "Расскажите про исламские финансы", "Есть ли курсы?", "Как с вами связаться?"],
    lead: "При необходимости я направлю вас в раздел Contact.",
  },
};

const dictionary: Record<LanguageCode, any> = {
  en: {
    ...en,
    network: {
      eyebrow: "Expert & Advisory Network",
      title: "Selected experts who strengthen MIZANIA’s knowledge and advisory capacity.",
      description: "MIZANIA works with selected scholars, researchers, and industry experts across ethical finance, Islamic finance, education, and advisory initiatives.",
      note: "Profiles are presented for general informational purposes within the context of MIZANIA’s expert and advisory collaborations.",
      cta: "Contact MIZANIA",
    },
  },
  ru: {
    ...ru,
    network: {
      eyebrow: "Сеть экспертов и консультационного сотрудничества",
      title: "Отобранные эксперты, усиливающие экспертный и консультационный потенциал MIZANIA.",
      description: "MIZANIA сотрудничает с учёными, исследователями и отраслевыми специалистами в сферах этичных финансов, исламских финансов, образования и консультационных инициатив.",
      note: "Профили размещены исключительно в ознакомительных целях в рамках экспертного и консультационного сотрудничества.",
      cta: "Связаться с MIZANIA",
    },
  },
  uz: {
    ...uzLatin,
    network: {
      eyebrow: "Ekspert va maslahat hamkorlik tarmog‘i",
      title: "MIZANIA’ning bilim va maslahat salohiyatini kuchaytiruvchi tanlangan hamkor ekspertlar.",
      description: "MIZANIA halol moliya, islomiy moliya, ta’lim va maslahat yo‘nalishlarida tanlangan olimlar, tadqiqotchilar va sohaviy mutaxassislar bilan hamkorlik qiladi.",
      note: "Profillar MIZANIAning bilim va maslahat yo‘nalishidagi hamkorliklari haqida umumiy ma’lumot sifatida taqdim etilgan.",
      cta: "MIZANIA bilan bog‘lanish",
    },
  },
};

const serviceIcons = [Landmark, GraduationCap, Briefcase, HandCoins];
const investorIcons = [CircleDollarSign, Building2, BadgeCheck];
const blogIcons = [Newspaper, BookOpen, Sparkles];
const networkIcons = [ShieldCheck, GraduationCap, Landmark, BadgeCheck, BookOpen];

const collaboratingExperts: Record<LanguageCode, Array<any>> = {
  en: [
    {
      name: "Prof. Dr. Engku Rabiah Adawiah",
      role: "Collaborating Expert",
      focus: "Islamic capital market, sukuk, takaful, Shariah advisory",
      bio: "Distinguished scholar in Islamic finance with deep experience in Shariah advisory, Islamic capital market, takaful, and regulatory-facing advisory work.",
      image: "https://as-salihin.com/wp-content/uploads/2024/11/assalihin_Org-Chart-2024_Board-Of-Syariah-Advisors-3_Prof-Dr-Engku-Rabiah-Adawiah.png",
      sourceUrl: "https://as-salihin.com/en/dr-engku-rabiah-adawiah/",
    },
    {
      name: "Dr. Mohammad Mahbubi Ali",
      role: "Collaborating Expert",
      focus: "Islamic banking, Shariah governance, product development, policy advisory",
      bio: "Academic and industry specialist with experience across Islamic banking, Shariah governance, regulatory development, training, and advisory initiatives.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/11477.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/NC9vVmt6eTNMV3hLZ2RhSnBaNWpRZz09",
    },
    {
      name: "Prof. Dato’ Dr. Aznan Hasan",
      role: "Collaborating Expert",
      focus: "Islamic finance structuring, capital markets, Shariah governance",
      bio: "Senior Shariah scholar with extensive involvement in Islamic finance structuring, advisory work, governance, and institutional development.",
      image: "https://www.etiqa.com/wp-content/uploads/2022/03/Aznan-Hassan.png",
      sourceUrl: "https://www.etiqa.com/our-leaders-post/professor-dr-aznan-hasan/",
    },
    {
      name: "Mezbah Uddin Ahmed",
      role: "Collaborating Expert",
      focus: "Sukuk, Shariah audit, AAOIFI, Islamic finance research",
      bio: "Research and advisory professional active in Islamic finance research, sukuk, Shariah audit, AAOIFI-related work, and technical advisory projects.",
      image: "https://inceif.edu.my/wp-content/uploads/2024/08/Mezbah-Uddin-Ahmed-743x1024.png",
      sourceUrl: "https://inceif.edu.my/explore-inceif/about-us/academic-research-staff/mezbah-uddin-ahmed/",
    },
    {
      name: "Prof. Dr. Azman Mohd Noor",
      role: "Collaborating Expert",
      focus: "Islamic law of transactions, takaful, waqf, Shariah advisory",
      bio: "Experienced academic and Shariah advisor with strong background in Islamic law of transactions, takaful, waqf, and applied Islamic finance matters.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/2902.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/Nlo2Qm9EMUVlUjlKWVRJWGJuTUlXQT09",
    },
  ],
  ru: [
    {
      name: "Prof. Dr. Engku Rabiah Adawiah",
      role: "Эксперт по сотрудничеству",
      focus: "Исламский рынок капитала, сукук, такафул, шариатское консультирование",
      bio: "Известный учёный в области исламских финансов с глубоким опытом в шариатском консультировании, исламском рынке капитала, такафуле и работе с регуляторной средой.",
      image: "https://as-salihin.com/wp-content/uploads/2024/11/assalihin_Org-Chart-2024_Board-Of-Syariah-Advisors-3_Prof-Dr-Engku-Rabiah-Adawiah.png",
      sourceUrl: "https://as-salihin.com/en/dr-engku-rabiah-adawiah/",
    },
    {
      name: "Dr. Mohammad Mahbubi Ali",
      role: "Эксперт по сотрудничеству",
      focus: "Исламский банкинг, шариатское управление, разработка продуктов, консультации по политике",
      bio: "Академический и отраслевой специалист с опытом в исламском банкинге, шариатском управлении, регуляторном развитии, обучении и консультационных инициативах.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/11477.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/NC9vVmt6eTNMV3hLZ2RhSnBaNWpRZz09",
    },
    {
      name: "Prof. Dato’ Dr. Aznan Hasan",
      role: "Эксперт по сотрудничеству",
      focus: "Структурирование исламских финансов, рынки капитала, шариатское управление",
      bio: "Старший шариатский учёный с обширным опытом в структурировании исламских финансов, консультационной работе, управлении и институциональном развитии.",
      image: "https://www.etiqa.com/wp-content/uploads/2022/03/Aznan-Hassan.png",
      sourceUrl: "https://www.etiqa.com/our-leaders-post/professor-dr-aznan-hasan/",
    },
    {
      name: "Mezbah Uddin Ahmed",
      role: "Эксперт по сотрудничеству",
      focus: "Сукук, шариатский аудит, AAOIFI, исследования в исламских финансах",
      bio: "Исследователь и консультант, активно работающий в исламских финансах, сукук, шариатском аудите, AAOIFI и технических консультационных проектах.",
      image: "https://inceif.edu.my/wp-content/uploads/2024/08/Mezbah-Uddin-Ahmed-743x1024.png",
      sourceUrl: "https://inceif.edu.my/explore-inceif/about-us/academic-research-staff/mezbah-uddin-ahmed/",
    },
    {
      name: "Prof. Dr. Azman Mohd Noor",
      role: "Эксперт по сотрудничеству",
      focus: "Исламское право сделок, такафул, вакф, шариатское консультирование",
      bio: "Опытный академик и шариатский консультант с сильной экспертизой в исламском праве сделок, такафуле, вакфе и прикладных вопросах исламских финансов.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/2902.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/Nlo2Qm9EMUVlUjlKWVRJWGJuTUlXQT09",
    },
  ],
  uz: [
    {
      name: "Prof. Dr. Engku Rabiah Adawiah",
      role: "Hamkor ekspert",
      focus: "Islomiy kapital bozori, sukuk, takaful, shariat maslahati",
      bio: "Islomiy moliya sohasida taniqli olima bo‘lib, shariat maslahati, islomiy kapital bozori, takaful va regulyatorlar bilan bog‘liq maslahat yo‘nalishlarida chuqur tajribaga ega.",
      image: "https://as-salihin.com/wp-content/uploads/2024/11/assalihin_Org-Chart-2024_Board-Of-Syariah-Advisors-3_Prof-Dr-Engku-Rabiah-Adawiah.png",
      sourceUrl: "https://as-salihin.com/en/dr-engku-rabiah-adawiah/",
    },
    {
      name: "Dr. Mohammad Mahbubi Ali",
      role: "Hamkor ekspert",
      focus: "Islomiy bank ishi, shariat boshqaruvi, mahsulot ishlab chiqish, siyosat bo‘yicha maslahat",
      bio: "Islomiy bank ishi, shariat boshqaruvi, regulyator rivoji, ta’lim va maslahat tashabbuslari bo‘yicha tajribaga ega akademik va sohaviy mutaxassis.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/11477.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/NC9vVmt6eTNMV3hLZ2RhSnBaNWpRZz09",
    },
    {
      name: "Prof. Dato’ Dr. Aznan Hasan",
      role: "Hamkor ekspert",
      focus: "Islomiy moliya tuzilmalari, kapital bozorlari, shariat boshqaruvi",
      bio: "Islomiy moliya tuzilmalari, maslahat faoliyati, boshqaruv va institutsional rivojlanish bo‘yicha katta tajribaga ega yirik shariat olimi.",
      image: "https://www.etiqa.com/wp-content/uploads/2022/03/Aznan-Hassan.png",
      sourceUrl: "https://www.etiqa.com/our-leaders-post/professor-dr-aznan-hasan/",
    },
    {
      name: "Mezbah Uddin Ahmed",
      role: "Hamkor ekspert",
      focus: "Sukuk, shariat auditi, AAOIFI, islomiy moliya tadqiqotlari",
      bio: "Islomiy moliya tadqiqotlari, sukuk, shariat auditi, AAOIFI va texnik maslahat loyihalarida faol ishlaydigan tadqiqotchi va maslahat mutaxassisi.",
      image: "https://inceif.edu.my/wp-content/uploads/2024/08/Mezbah-Uddin-Ahmed-743x1024.png",
      sourceUrl: "https://inceif.edu.my/explore-inceif/about-us/academic-research-staff/mezbah-uddin-ahmed/",
    },
    {
      name: "Prof. Dr. Azman Mohd Noor",
      role: "Hamkor ekspert",
      focus: "Islomiy muomalot huquqi, takaful, vaqf, shariat maslahati",
      bio: "Islomiy muomalot huquqi, takaful, vaqf va amaliy islomiy moliya masalalarida kuchli tajribaga ega tajribali akademik va shariat maslahatchisi.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/2902.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/Nlo2Qm9EMUVlUjlKWVRJWGJuTUlXQT09",
    },
  ],
};

function SectionTitle({ eyebrow, title, description, isRTL = false }) {
  return (
    <div className={`max-w-3xl space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
      <div className="text-xs sm:text-sm uppercase tracking-[0.28em] text-emerald-800/70 font-medium">{eyebrow}</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0e2c24] leading-tight">{title}</h2>
      {description ? <p className="text-base sm:text-lg text-[#24463c]/80 leading-8">{description}</p> : null}
    </div>
  );
}

function GoldDivider() {
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />;
}

function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-950/10 bg-white/70 p-1 shadow-sm">
      <div className="flex items-center gap-2 px-3 text-[#12382f]">
        <Globe className="h-4 w-4" />
      </div>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`rounded-full px-3 py-2 text-xs font-medium transition ${language === lang.code ? "bg-[#12382f] text-white" : "text-[#20453b] hover:bg-emerald-50"}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

function MobileLanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="grid grid-cols-3 gap-2 pt-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`rounded-2xl px-3 py-2 text-sm ${language === lang.code ? "bg-[#12382f] text-white" : "bg-emerald-50 text-[#12382f]"}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

const MIZANIA_LOGO = "/logo.png";

function BrandMark({ compact = false, isRTL = false, tagline = "" }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
      <div className={`relative overflow-hidden rounded-[1.2rem] border border-[#d8cdb5] bg-white ${compact ? "h-12 w-12 sm:h-16 sm:w-16" : "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24"} shadow-[0_10px_24px_rgba(16,48,40,0.08)]`}>
        <img src={MIZANIA_LOGO} alt="MIZANIA logo" className="h-full w-full object-contain p-1.5" />
      </div>
      <div className={isRTL ? "text-right" : "text-left"}>
        <div className={`${compact ? "text-[1.1rem] sm:text-[1.55rem]" : "text-[1.5rem] sm:text-[2rem] lg:text-[2.2rem]"} leading-none tracking-[0.22em] font-semibold text-[#12382f]`}>
          MIZANIA
        </div>
        <div className="mt-1.5 hidden text-[10px] uppercase tracking-[0.22em] text-[#8b7744] sm:block">
          {tagline}
        </div>
      </div>
    </div>
  );
}

function Nav({ currentPage, setCurrentPage, mobileOpen, setMobileOpen, t, pageLabels, language, setLanguage, isRTL, setChatOpen }) {
  const getNavLabel = (page) => {
    if (page.key !== "network") return page.label;
    if (language === "ru") return "Эксперты";
    if (language === "uz") return "Ekspertlar";
    return "Experts";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8cdb5] bg-[#fbf8f1] shadow-[0_8px_24px_rgba(16,48,40,0.06)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className={`flex min-h-[78px] sm:min-h-[92px] items-center justify-between gap-3 sm:gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <button className={isRTL ? "text-right" : "text-left"} onClick={() => setCurrentPage("home")}>
            <BrandMark compact isRTL={isRTL} tagline={t.brand.tagline} />
          </button>

          <nav className="hidden xl:flex items-center gap-1 rounded-full border border-[#d8cdb5] bg-white px-2 py-1.5 shadow-sm">
            {pageLabels.slice(0, 8).map((page) => (
              <button
                key={page.key}
                onClick={() => setCurrentPage(page.key)}
                className={`rounded-full px-3.5 py-2.5 text-[13px] transition ${currentPage === page.key ? "bg-[#12382f] text-white shadow-sm" : "text-[#20453b] hover:bg-[#f5efe1]"}`}
              >
                {getNavLabel(page)}
              </button>
            ))}
          </nav>

          <div className={`hidden md:flex items-center gap-3 shrink-0 ${isRTL ? "flex-row-reverse" : ""}`}>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <button
              onClick={() => setChatOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbb91] bg-white text-[#12382f] transition hover:bg-[#f5efe1]"
              aria-label={t.nav.ai}
              title={t.nav.ai}
            >
              <MessageSquare className="h-4 w-4" />
            </button>
            <Button className="rounded-full bg-[#cba95a] px-5 py-3 text-[#12382f] hover:bg-[#c39f4d]" onClick={() => setCurrentPage("contact")}>
              {t.nav.speak}
            </Button>
          </div>

          <button className="xl:hidden rounded-full border border-[#d8cdb5] p-3 text-[#12382f]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="xl:hidden pb-4">
            <div className="grid grid-cols-1 gap-2 rounded-3xl border border-[#d8cdb5] bg-white p-3 shadow-lg">
              {pageLabels.map((page) => (
                <button
                  key={page.key}
                  onClick={() => {
                    setCurrentPage(page.key);
                    setMobileOpen(false);
                  }}
                  className={`rounded-2xl px-4 py-3 ${isRTL ? "text-right" : "text-left"} text-sm ${currentPage === page.key ? "bg-[#12382f] text-white" : "text-[#20453b] hover:bg-[#f5efe1]"}`}
                >
                  {page.label}
                </button>
              ))}
              <button
                onClick={() => setChatOpen(true)}
                className={`rounded-2xl bg-[#f5efe1] px-4 py-3 text-sm text-[#12382f] ${isRTL ? "text-right" : "text-left"}`}
              >
                {t.nav.ai}
              </button>
              <MobileLanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function Hero({ setCurrentPage, t, isRTL }) {
  const highlight = t.hero.highlight;
  const parts = t.hero.title.split(highlight);
  return (
    <section className="relative overflow-hidden bg-[#f8f3e8] pt-3 sm:pt-6 lg:pt-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,45,37,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(201,169,90,0.12),transparent_28%)]" />
      <div className={`mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:gap-8 sm:px-6 md:py-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12 lg:px-8 lg:py-16 ${isRTL ? "lg:[direction:rtl]" : ""}`}>
        <div className={`rounded-[1.5rem] sm:rounded-[2rem] border border-[#d8cdb5] bg-white p-5 sm:p-8 shadow-[0_16px_40px_rgba(16,48,40,0.06)] lg:p-10 ${isRTL ? "text-right" : "text-left"}`}>
          <BrandMark isRTL={isRTL} tagline={t.brand.tagline} />
          <div className={`mt-6 inline-flex items-center gap-2 rounded-full border border-[#d7c398] bg-[#fbf8f1] px-4 py-2 text-sm text-[#7b6a3d] ${isRTL ? "flex-row-reverse" : ""}`}>
            <BadgeCheck className="h-4 w-4" />
            {t.hero.badge}
          </div>
          <div className="mt-8 space-y-6">
            <h1 className="max-w-3xl text-[2.35rem] font-semibold leading-[1.04] tracking-tight text-[#0d2d25] sm:text-5xl lg:text-[4.5rem]">
              {parts[0]}
              <span className="text-[#8c7440]">{highlight}</span>
              {parts[1] || ""}
            </h1>
            <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#38544b]">{t.hero.description}</p>
          </div>
          <div className={`mt-7 flex flex-col gap-3 sm:flex-row ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <Button className="rounded-full bg-[#cba95a] px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base text-[#12382f] hover:bg-[#c39f4d]" onClick={() => setCurrentPage("services")}>
              {t.hero.cta1} {isRTL ? <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> : <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
            <Button variant="outline" className="rounded-full border-[#cdbb91] px-8 py-6 text-base text-[#12382f] hover:bg-[#f5efe1]" onClick={() => setCurrentPage("contact")}>
              {t.hero.cta2}
            </Button>
          </div>
        </div>

        <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-[#254238] bg-gradient-to-br from-[#0f3028] via-[#164337] to-[#0a211b] p-4 sm:p-6 text-white shadow-[0_24px_60px_rgba(10,34,28,0.18)] lg:p-5">
          <div className="grid h-full gap-5 lg:grid-rows-[auto_1fr_auto]">
            <div className={`flex items-start justify-between gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className={isRTL ? "text-right" : "text-left"}>
                <div className="text-sm uppercase tracking-[0.22em] text-amber-300/70">MIZANIA</div>
                <div className="mt-2 text-[1.35rem] sm:text-[1.7rem] font-medium leading-tight">{t.hero.promise}</div>
              </div>
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border border-amber-300/20 bg-[radial-gradient(circle_at_30%_30%,rgba(232,204,127,0.35),transparent_35%),radial-gradient(circle_at_60%_70%,rgba(73,116,92,0.45),transparent_35%),linear-gradient(135deg,#284c40,#0f3028)] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                <div className="absolute inset-2 rounded-full border border-white/10" />
              </div>
            </div>
            <div className="grid gap-2.5">
              {[
                [ShieldCheck, t.services.items[0].title],
                [BookOpen, t.services.items[1].title],
                [Users, t.services.items[3].title],
              ].map(([Icon, label]) => (
                <div key={label} className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3.5 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                  <div className="rounded-2xl bg-[#f2e1ac]/10 p-3"><Icon className="h-5 w-5 text-[#e0c66f]" /></div>
                  <div className="text-base text-white/90">{label}</div>
                </div>
              ))}
            </div>
            <div className={`rounded-[1.75rem] border border-[#d9c27a]/20 bg-white/5 p-4.5 ${isRTL ? "text-right" : "text-left"}`}>
              <div className="text-xs uppercase tracking-[0.22em] text-[#d9c27a]">{t.hero.promise}</div>
              <p className="mt-3 text-[15px] leading-8 text-white/85">{t.hero.promiseText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustIndicators({ t, isRTL }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-sm sm:grid-cols-4 lg:p-8">
        {t.trust.items.map(([title, subtitle]) => (
          <div key={title} className={`space-y-2 rounded-2xl p-2 ${isRTL ? "text-right" : "text-left"}`}>
            <div className="text-2xl font-semibold text-[#12382f]">{title}</div>
            <div className="text-sm text-[#526a62]">{subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPreview({ setCurrentPage, t, isRTL }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className={`grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start ${isRTL ? "lg:[direction:rtl]" : ""}`}>
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.description} isRTL={isRTL} />
        <Card className="rounded-[2rem] border-emerald-950/10 shadow-sm">
          <CardContent className="p-8 space-y-5">
            {t.about.points.map((item) => (
              <div key={item} className={`flex items-start gap-3 text-[#183e34] ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#7e6a39]" />
                <span>{item}</span>
              </div>
            ))}
            <Button variant="outline" className="rounded-full border-[#12382f]/20 text-[#12382f] hover:bg-emerald-50" onClick={() => setCurrentPage("about")}>
              {t.about.button} {isRTL ? <ChevronRight className="mr-1 h-4 w-4 rotate-180" /> : <ChevronRight className="ml-1 h-4 w-4" />}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ServicesGrid({ setCurrentPage, t, isRTL }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between ${isRTL ? "lg:flex-row-reverse" : ""}`}>
        <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} description={t.services.description} isRTL={isRTL} />
        <Button variant="outline" className="rounded-full border-[#12382f]/20 text-[#12382f] hover:bg-emerald-50" onClick={() => setCurrentPage("services")}>
          {t.services.button}
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {t.services.items.map((service, idx) => {
          const Icon = serviceIcons[idx];
          return (
            <Card key={service.title} className="rounded-[2rem] border-emerald-950/10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7">
                <div className="mb-5 inline-flex rounded-2xl bg-emerald-50 p-3 text-[#12382f]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-semibold text-[#103128] ${isRTL ? "text-right" : "text-left"}`}>{service.title}</h3>
                <p className={`mt-3 text-[#4c665d] leading-7 ${isRTL ? "text-right" : "text-left"}`}>{service.text}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function WhyMizania({ t, isRTL }) {
  return (
    <section className="bg-[#f8fbfa] border-y border-emerald-950/8">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={t.why.eyebrow} title={t.why.title} description={t.why.description} isRTL={isRTL} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.why.cards.map(([title, text]) => (
            <div key={title} className={`rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-sm ${isRTL ? "text-right" : "text-left"}`}>
              <div className="text-lg font-semibold text-[#12382f]">{title}</div>
              <p className="mt-3 text-[#516962] leading-7">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection({ setCurrentPage, t, isRTL }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className={`grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 items-start ${isRTL ? "lg:[direction:rtl]" : ""}`}>
        <SectionTitle eyebrow={t.principles.eyebrow} title={t.principles.title} description={t.principles.description} isRTL={isRTL} />
        <Card className="rounded-[2rem] border-emerald-950/10 shadow-sm overflow-hidden">
          <CardContent className="p-8">
            <div className="grid gap-4">
              {t.principles.items.map((item) => (
                <div key={item} className={`flex items-start gap-3 rounded-2xl border border-emerald-950/10 p-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                  <Scale className="mt-0.5 h-5 w-5 text-[#7e6a39]" />
                  <div className="text-[#173d33]">{item}</div>
                </div>
              ))}
            </div>
            <Button className="mt-6 rounded-full bg-[#12382f] hover:bg-[#0f2f27]" onClick={() => setCurrentPage("islamicFinance")}>
              {t.principles.button}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function EducationSection({ setCurrentPage, t, isRTL }) {
  return (
    <section className="bg-[#0f3028] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${isRTL ? "lg:[direction:rtl]" : ""}`}>
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="text-sm uppercase tracking-[0.28em] text-amber-300/80">{t.education.eyebrow}</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t.education.title}</h2>
            <p className="mt-6 max-w-2xl text-white/75 leading-8 text-lg">{t.education.description}</p>
            <div className={`mt-8 flex flex-col gap-4 sm:flex-row ${isRTL ? "sm:flex-row-reverse" : ""}`}>
              <Button className="rounded-full bg-white text-[#12382f] hover:bg-white/90" onClick={() => setCurrentPage("courses")}>
                {t.education.button1}
              </Button>
              <Button variant="outline" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10" onClick={() => setCurrentPage("contact")}>
                {t.education.button2}
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.education.cards.map(([title, text]) => (
              <div key={title} className={`rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm ${isRTL ? "text-right" : "text-left"}`}>
                <div className="text-xl font-semibold text-white">{title}</div>
                <div className="mt-2 text-white/70 leading-7">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ t, isRTL }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} description={t.testimonials.description} isRTL={isRTL} />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {t.testimonials.items.map((item) => (
          <Card key={item.name} className="rounded-[2rem] border-emerald-950/10 shadow-sm">
            <CardContent className={`p-7 ${isRTL ? "text-right" : "text-left"}`}>
              <p className="text-[#28483f] leading-8">“{item.quote}”</p>
              <div className="mt-6">
                <div className="font-semibold text-[#12382f]">{item.name}</div>
                <div className="text-sm text-[#677e76]">{item.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CTASection({ setCurrentPage, t, isRTL }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="rounded-[2.25rem] bg-gradient-to-br from-[#12382f] to-[#0b221c] p-8 text-white shadow-[0_30px_100px_rgba(10,34,28,0.22)] sm:p-12 lg:p-14">
        <div className={`grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center ${isRTL ? "lg:[direction:rtl]" : ""}`}>
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="text-sm uppercase tracking-[0.24em] text-amber-300/75">{t.cta.eyebrow}</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t.cta.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{t.cta.description}</p>
            <div className={`mt-8 flex flex-col gap-4 sm:flex-row ${isRTL ? "sm:flex-row-reverse" : ""}`}>
              <Button className="rounded-full bg-white text-[#12382f] hover:bg-white/90" onClick={() => setCurrentPage("contact")}>
                {t.cta.button1}
              </Button>
              <Button variant="outline" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10" onClick={() => setCurrentPage("investors")}>
                {t.cta.button2}
              </Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className={`text-lg font-medium ${isRTL ? "text-right" : "text-left"}`}>{t.cta.formTitle}</div>
            <div className="mt-5 grid gap-4">
              <Input placeholder={t.cta.fullName} className={`rounded-2xl border-white/10 bg-white text-[#12382f] placeholder:text-slate-400 ${isRTL ? "text-right" : "text-left"}`} />
              <Input placeholder={t.cta.email} className={`rounded-2xl border-white/10 bg-white text-[#12382f] placeholder:text-slate-400 ${isRTL ? "text-right" : "text-left"}`} />
              <Input placeholder={t.cta.company} className={`rounded-2xl border-white/10 bg-white text-[#12382f] placeholder:text-slate-400 ${isRTL ? "text-right" : "text-left"}`} />
              <Textarea placeholder={t.cta.message} className={`min-h-[120px] rounded-2xl border-white/10 bg-white text-[#12382f] placeholder:text-slate-400 ${isRTL ? "text-right" : "text-left"}`} />
              <Button className="rounded-full bg-[#d9c08d] text-[#12382f] hover:bg-[#ceb57f]">{t.cta.send}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQPreview({ setCurrentPage, t, isRTL }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className={`grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 items-start ${isRTL ? "lg:[direction:rtl]" : ""}`}>
        <SectionTitle eyebrow={t.faq.eyebrow} title={t.faq.title} description={t.faq.description} isRTL={isRTL} />
        <div className="space-y-4">
          {t.faq.items.slice(0, 3).map((faq) => (
            <div key={faq.q} className="rounded-[1.5rem] border border-emerald-950/10 bg-white p-6 shadow-sm">
              <div className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                <CircleHelp className="mt-1 h-5 w-5 text-[#7e6a39]" />
                <div>
                  <div className="font-semibold text-[#14372f]">{faq.q}</div>
                  <div className="mt-2 text-[#516962] leading-7">{faq.a}</div>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="rounded-full border-[#12382f]/20 text-[#12382f] hover:bg-emerald-50" onClick={() => setCurrentPage("faq")}>
            {t.faq.button}
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer({ setCurrentPage, t, pageLabels, isRTL }) {
  return (
    <footer className="border-t border-emerald-950/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr] ${isRTL ? "lg:[direction:rtl]" : ""}`}>
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="text-2xl tracking-[0.28em] font-semibold text-[#0f3028]">MIZANIA</div>
            <p className="mt-4 max-w-md text-[#566e66] leading-7">{t.footer.description}</p>
          </div>
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="font-semibold text-[#12382f]">{t.footer.pages}</div>
            <div className="mt-4 space-y-3 text-[#566e66]">
              {pageLabels.slice(0, 5).map((page) => (
                <button key={page.key} onClick={() => setCurrentPage(page.key)} className="block hover:text-[#12382f]">{page.label}</button>
              ))}
            </div>
          </div>
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="font-semibold text-[#12382f]">{t.footer.explore}</div>
            <div className="mt-4 space-y-3 text-[#566e66]">
              {pageLabels.slice(5).map((page) => (
                <button key={page.key} onClick={() => setCurrentPage(page.key)} className="block hover:text-[#12382f]">{page.label}</button>
              ))}
            </div>
          </div>
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="font-semibold text-[#12382f]">{t.footer.contact}</div>
            <div className="mt-4 space-y-4 text-[#566e66]">
              <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}><Mail className="h-4 w-4 text-[#7e6a39]" /> {t.brand.email}</div>
              <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}><Phone className="h-4 w-4 text-[#7e6a39]" /> {t.brand.phone}</div>
              <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}><Globe className="h-4 w-4 text-[#7e6a39]" /> {t.brand.website}</div>
            </div>
          </div>
        </div>
        <GoldDivider />
        <div className={`mt-6 flex flex-col gap-3 text-sm text-[#6f847d] lg:flex-row lg:items-center lg:justify-between ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <div>{t.footer.rights}</div>
          <div>{t.footer.note}</div>
        </div>
      </div>
    </footer>
  );
}

function MiniExpertPreview({ language, isRTL, setCurrentPage }) {
  const experts = (collaboratingExperts[language] || collaboratingExperts.en).slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className={`flex items-end justify-between gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
        <SectionTitle
          eyebrow={language === "ru" ? "Эксперты" : language === "uz" ? "Ekspertlar" : "Experts"}
          title={language === "ru" ? "Selected collaborating experts" : language === "uz" ? "Tanlangan hamkor ekspertlar" : "Selected collaborating experts"}
          description={language === "ru" ? "Profiles shown in a light, elegant format to strengthen trust and authority." : language === "uz" ? "Ishonch va nufuzni kuchaytirish uchun yengil va nafis formatda taqdim etilgan profillar." : "Profiles shown in a light, elegant format to strengthen trust and authority."}
          isRTL={isRTL}
        />
        <Button variant="outline" className="w-full sm:w-auto rounded-full border-[#cdbb91] text-[#12382f] hover:bg-[#f5efe1]" onClick={() => setCurrentPage("network")}>
          {language === "ru" ? "Все эксперты" : language === "uz" ? "Barcha ekspertlar" : "View all"}
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {experts.map((expert) => (
          <Card key={expert.name} className="overflow-hidden rounded-[2rem] border border-[#d8cdb5] bg-white shadow-sm">
            <div className="aspect-[4/3] overflow-hidden bg-[#f5efe1]">
              <img src={expert.image} alt={expert.name} className="h-full w-full object-cover object-top" loading="lazy" referrerPolicy="no-referrer" />
            </div>
            <CardContent className={`p-6 ${isRTL ? "text-right" : "text-left"}`}>
              <div className="text-lg font-semibold text-[#12382f]">{expert.name}</div>
              <div className="mt-2 text-sm text-[#7b6a3d]">{expert.role}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function HomePage({ setCurrentPage, t, isRTL, language }) {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} />
      <TrustIndicators t={t} isRTL={isRTL} />
      <AboutPreview setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} />
      <ServicesGrid setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} />
      <WhyMizania t={t} isRTL={isRTL} />
      <PrinciplesSection setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} />
      <EducationSection setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} />
      <MiniExpertPreview language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />
      <TestimonialsSection t={t} isRTL={isRTL} />
      <CTASection setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} />
      <FAQPreview setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} />
    </>
  );
}

function GenericBlocksPage({ eyebrow, title, description, blocks, icons, ctaLabel, ctaAction, isRTL }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionTitle eyebrow={eyebrow} title={title} description={description} isRTL={isRTL} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blocks.map((block, idx) => {
          const Icon = icons?.[idx] || Scale;
          return (
            <Card key={block.title || block[0]} className="rounded-[2rem] border-emerald-950/10 shadow-sm">
              <CardHeader className="pb-3">
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 text-[#12382f] w-fit">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className={`text-[#12382f] text-xl ${isRTL ? "text-right" : "text-left"}`}>{block.title || block[0]}</CardTitle>
                <CardDescription className={`text-[#566e66] leading-7 text-base ${isRTL ? "text-right" : "text-left"}`}>{block.text || block[1]}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
      {ctaLabel ? (
        <div className={`mt-10 ${isRTL ? "text-right" : "text-left"}`}>
          <Button className="rounded-full bg-[#12382f] hover:bg-[#0f2f27]" onClick={ctaAction}>{ctaLabel}</Button>
        </div>
      ) : null}
    </section>
  );
}

function NetworkPage({ t, isRTL, setCurrentPage, language }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionTitle eyebrow={t.network.eyebrow} title={t.network.title} description={t.network.description} isRTL={isRTL} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {(collaboratingExperts[language] || collaboratingExperts.en).map((expert, idx) => {
          const Icon = networkIcons[idx] || BadgeCheck;
          return (
            <Card key={expert.name} className="overflow-hidden rounded-[2rem] border-emerald-950/10 shadow-sm">
              <div className="aspect-[4/3] bg-emerald-50 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardContent className={`p-7 ${isRTL ? "text-right" : "text-left"}`}>
                <div className="mb-5 inline-flex rounded-2xl bg-emerald-50 p-3 text-[#12382f]"><Icon className="h-5 w-5" /></div>
                <div className="text-xl font-semibold text-[#12382f]">{expert.name}</div>
                <div className="mt-2 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#7b6a3d]">{expert.role}</div>
                <div className="mt-4 text-sm font-medium text-[#2c4f45]">{expert.focus}</div>
                <p className="mt-3 text-[#566e66] leading-7">{expert.bio}</p>
                <div className={`mt-5 flex ${isRTL ? "justify-end" : "justify-start"}`}>
                  <a href={expert.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-[#12382f]/15 px-4 py-2 text-sm text-[#12382f] hover:bg-emerald-50">
                    {language === "ru" ? "Источник профиля" : language === "uz" ? "Profil manbasi" : "Profile Source"} <ChevronRight className={`${isRTL ? "mr-1 rotate-180" : "ml-1"} h-4 w-4`} />
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className={`mt-8 rounded-[1.75rem] border border-emerald-950/10 bg-emerald-50/60 p-6 text-sm text-[#4d655d] ${isRTL ? "text-right" : "text-left"}`}>
        {t.network.note}
      </div>
      <div className={`mt-8 ${isRTL ? "text-right" : "text-left"}`}>
        <Button className="rounded-full bg-[#12382f] hover:bg-[#0f2f27]" onClick={() => setCurrentPage("contact")}>{t.network.cta}</Button>
      </div>
    </section>
  );
}

function BlogPage({ t, isRTL }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionTitle eyebrow={t.blog.eyebrow} title={t.blog.title} description={t.blog.description} isRTL={isRTL} />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {t.blog.items.map((post, idx) => {
          const Icon = blogIcons[idx];
          return (
            <Card key={post.title} className="rounded-[2rem] border-emerald-950/10 shadow-sm">
              <CardContent className={`p-7 ${isRTL ? "text-right" : "text-left"}`}>
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 text-[#12382f]"><Icon className="h-5 w-5" /></div>
                <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#7b6a3d]">{post.category}</div>
                <div className="mt-4 text-2xl font-semibold leading-tight text-[#12382f]">{post.title}</div>
                <p className="mt-3 text-[#566e66] leading-7">{post.excerpt}</p>
                <button className={`mt-6 inline-flex items-center text-[#12382f] font-medium ${isRTL ? "flex-row-reverse" : ""}`}>{t.blog.read} <ChevronRight className={`${isRTL ? "mr-1 rotate-180" : "ml-1"} h-4 w-4`} /></button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function FAQPage({ t, isRTL }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionTitle eyebrow={t.faq.eyebrow} title={t.faq.title} description={t.faq.description} isRTL={isRTL} />
      <div className="mt-10 space-y-4">
        {t.faq.items.map((faq) => (
          <div key={faq.q} className={`rounded-[1.75rem] border border-emerald-950/10 bg-white p-6 shadow-sm ${isRTL ? "text-right" : "text-left"}`}>
            <div className="font-semibold text-[#12382f] text-lg">{faq.q}</div>
            <div className="mt-2 text-[#566e66] leading-7">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage({ t, isRTL, leadDraft, setLeadDraft }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 items-start ${isRTL ? "lg:[direction:rtl]" : ""}`}>
        <div>
          <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} isRTL={isRTL} />
          <div className={`mt-8 space-y-4 text-[#4e665f] ${isRTL ? "text-right" : "text-left"}`}>
            <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}><Mail className="h-5 w-5 text-[#7e6a39]" /> {t.brand.email}</div>
            <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}><Phone className="h-5 w-5 text-[#7e6a39]" /> {t.brand.phone}</div>
            <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}><Globe className="h-5 w-5 text-[#7e6a39]" /> {t.brand.website}</div>
          </div>
        </div>
        <Card className="rounded-[2rem] border-emerald-950/10 shadow-sm">
          <CardContent className="p-8 grid gap-4">
            <Input value={leadDraft.name} onChange={(e) => setLeadDraft((prev) => ({ ...prev, name: e.target.value }))} placeholder={t.contact.name} className={`rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
            <Input value={leadDraft.email || ""} onChange={(e) => setLeadDraft((prev) => ({ ...prev, email: e.target.value }))} placeholder={t.contact.email} className={`rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
            <Input value={leadDraft.phone} onChange={(e) => setLeadDraft((prev) => ({ ...prev, phone: e.target.value }))} placeholder={t.contact.phone} className={`rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
            <Input value={leadDraft.company} onChange={(e) => setLeadDraft((prev) => ({ ...prev, company: e.target.value }))} placeholder={t.contact.company} className={`rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
            <Textarea value={leadDraft.message} onChange={(e) => setLeadDraft((prev) => ({ ...prev, message: e.target.value }))} placeholder={t.contact.message} className={`min-h-[140px] rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
            <Button className="rounded-full bg-[#12382f] hover:bg-[#0f2f27]">{t.contact.send}</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
  page?: string | null;
};

type LeadDraft = {
  name: string;
  email?: string;
  phone: string;
  company: string;
  message: string;
};

function AIChatWidget({ t, language, setCurrentPage, isRTL, chatOpen, setChatOpen, leadDraft, setLeadDraft }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "assistant", text: t.ai.hello }]);
  const [leadStep, setLeadStep] = useState<"name" | "phone" | "company" | "message" | null>(null);
  const messagesContainerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const savedMessages = typeof window !== "undefined" ? sessionStorage.getItem(`mizania_ai_messages_${language}`) : null;
    const savedLead = typeof window !== "undefined" ? sessionStorage.getItem("mizania_ai_lead") : null;
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch {
        setMessages([{ role: "assistant", text: t.ai.hello }]);
      }
    } else {
      setMessages([{ role: "assistant", text: t.ai.hello }]);
    }
    if (savedLead) {
      try {
        setLeadDraft(JSON.parse(savedLead));
      } catch {}
    }
    setInput("");
  }, [language, t.ai.hello, setLeadDraft]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`mizania_ai_messages_${language}`, JSON.stringify(messages));
      sessionStorage.setItem("mizania_ai_lead", JSON.stringify(leadDraft));
    }
  }, [messages, leadDraft, language]);

  React.useEffect(() => {
    if (!chatOpen) return;
    const el = messagesContainerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    });
  }, [messages, chatOpen]);

  const quickSuggestions =
    language === "ru"
      ? [
          "Какие у вас услуги?",
          "Что входит в консалтинг?",
          "Расскажите про исламские финансы",
          "Что есть для инвесторов?",
          "Кто ваши эксперты?",
          "Оставить заявку",
        ]
      : language === "en"
      ? [
          "What services do you offer?",
          "What does consulting include?",
          "Tell me about Islamic finance",
          "What is available for investors?",
          "Who are your experts?",
          "Leave a request",
        ]
      : [
          "Xizmatlaringiz qanday?",
          "Konsalting nimani o‘z ichiga oladi?",
          "Islomiy moliya haqida",
          "Investorlar uchun nima bor?",
          "Ekspertlar kimlar?",
          "Ariza qoldirmoqchiman",
        ];

  const openSectionLabel = language === "ru" ? "Открыть раздел" : language === "en" ? "Open section" : "Bo‘limni ochish";

  function normalizeText(value) {
    let out = String(value || "").toLowerCase();
    ["ʻ", "ʼ", "‘", "’", "`", "´"].forEach((ch) => {
      out = out.split(ch).join("'");
    });
    [".", ",", "?", "!", ":", ";", "(", ")", "[", "]", "{", "}", "-", "_", '"'].forEach((ch) => {
      out = out.split(ch).join(" ");
    });
    return out.split(" ").filter(Boolean).join(" ");
  }

  function bulletList(items) {
    return items.map((item) => `• ${item}`).join("\n");
  }

  function isSkip(value) {
    const text = normalizeText(value);
    return ["skip", "otkazib yubor", "o tkazib yubor", "proskip", "пропустить"].some((x) => text.includes(x));
  }

  function leadPrompt(step) {
    const prompts = {
      name:
        language === "ru"
          ? "Хорошо. Давайте быстро оформим заявку. Сначала напишите ваше имя."
          : language === "en"
          ? "Great. Let’s prepare your request quickly. First, please write your name."
          : "Yaxshi. Keling, so‘rovni tez tayyorlaymiz. Avval ismingizni yozing.",
      phone:
        language === "ru"
          ? "Спасибо. Теперь напишите ваш телефон номер."
          : language === "en"
          ? "Thank you. Now please send your phone number."
          : "Rahmat. Endi telefon raqamingizni yozing.",
      company:
        language === "ru"
          ? "Если есть, напишите компанию или организацию. Можно пропустить."
          : language === "en"
          ? "If relevant, write your company or organization. You can also skip this step."
          : "Agar bo‘lsa, kompaniya yoki tashkilot nomini yozing. Istasangiz bu bosqichni o‘tkazib yuborishingiz mumkin.",
      message:
        language === "ru"
          ? "Кратко напишите, какая помощь вам нужна."
          : language === "en"
          ? "Briefly describe what kind of help you need."
          : "Qisqacha yozing: sizga qanday yordam kerak?",
      done:
        language === "ru"
          ? "Готово. Я заполнил основные данные и направил вас в Contact. Проверьте форму и отправьте запрос."
          : language === "en"
          ? "Done. I filled the key details and moved you to Contact. Please review the form and submit your request."
          : "Tayyor. Asosiy ma’lumotlar to‘ldirildi va siz Contact bo‘limiga yo‘naltirildingiz. Formani tekshirib, so‘rovni yuboring.",
    };
    return prompts[step];
  }

  function answerText(raw) {
    const text = normalizeText(raw);
    const hasAny = (arr) => arr.some((word) => text.includes(word));

    const greetings =
      language === "ru"
        ? ["привет", "здравствуйте", "добрый день", "салам"]
        : language === "en"
        ? ["hello", "hi", "hey", "good morning", "good afternoon"]
        : ["salom", "assalomu alaykum", "assalom", "vaalaykum", "qalaysiz"];

    const thanks =
      language === "ru"
        ? ["спасибо", "благодар", "рахмат"]
        : language === "en"
        ? ["thanks", "thank you"]
        : ["rahmat", "tashakkur"];

    const intents = {
      about: language === "ru" ? ["о бренде", "кто вы", "о компании", "mizania"] : language === "en" ? ["about", "who are you", "brand", "mizania"] : ["biz haqimizda", "kimsizlar", "mizania", "brend", "brand"],
      services: language === "ru" ? ["услуг", "сервис", "что вы делаете"] : language === "en" ? ["service", "services", "what do you offer"] : ["xizmat", "xizmatlar", "nima qilasiz", "taklif"],
      consulting: language === "ru" ? ["консалт", "консультац", "стратег"] : language === "en" ? ["consulting", "consultation", "advisory", "strategy"] : ["konsalting", "konsultatsiya", "maslahat", "strategiya"],
      islamic: language === "ru" ? ["ислам", "шариат", "халяль"] : language === "en" ? ["islamic", "sharia", "halal"] : ["islom", "shariat", "halol"],
      courses: language === "ru" ? ["курс", "обуч", "образован", "воркшоп"] : language === "en" ? ["course", "courses", "education", "workshop"] : ["kurs", "kurslar", "ta'lim", "talim", "dars", "workshop"],
      investors: language === "ru" ? ["инвест", "капитал", "партнер"] : language === "en" ? ["investor", "investors", "capital"] : ["investor", "investorlar", "kapital"],
      experts: language === "ru" ? ["эксперт", "учен", "сеть экспертов"] : language === "en" ? ["expert", "experts", "scholar", "network"] : ["ekspert", "ekspertlar", "olim", "hamkor ekspert"],
      blog: language === "ru" ? ["блог", "стать", "материал", "seo"] : language === "en" ? ["blog", "article", "articles", "content"] : ["blog", "maqola", "kontent", "material"],
      contact: language === "ru" ? ["контакт", "связ", "email", "почта", "телефон"] : language === "en" ? ["contact", "email", "phone", "reach you"] : ["aloqa", "bog'lan", "bog‘lan", "email", "telefon"],
      price: language === "ru" ? ["цена", "стоимость", "сколько стоит"] : language === "en" ? ["price", "pricing", "cost", "how much"] : ["narx", "qancha", "baho", "hisob"],
      faq: language === "ru" ? ["faq", "вопрос", "часто", "помощь"] : language === "en" ? ["faq", "question", "questions", "help"] : ["faq", "savol", "savollar", "yordam"],
      lead: language === "ru" ? ["оставить заявку", "хочу консультацию", "свяжитесь", "перезвоните"] : language === "en" ? ["leave a request", "i need consultation", "contact me", "call me"] : ["ariza qoldirmoqchiman", "konsultatsiya kerak", "men bilan bog'laning", "menga telefon qiling"],
    };

    if (hasAny(greetings)) return { text: t.ai.hello, page: null, lead: false };
    if (hasAny(thanks)) {
      return {
        text: language === "ru" ? "Пожалуйста. Я также могу помочь по услугам, консалтингу, курсам, исламским финансам, инвесторам, экспертам и контактам." : language === "en" ? "You’re welcome. I can also help with services, consulting, courses, Islamic finance, investors, experts, and contact information." : "Marhamat. Men sizga xizmatlar, konsalting, kurslar, islomiy moliya, investorlar, ekspertlar va aloqa bo‘yicha ham yordam bera olaman.",
        page: null,
        lead: false,
      };
    }
    if (hasAny(intents.lead)) return { text: leadPrompt("name"), page: null, lead: true };
    if (hasAny(intents.about)) return { text: `${t.about.description}

${bulletList(t.about.points.slice(0, 3))}`, page: "about", lead: false };
    if (hasAny(intents.services)) return { text: t.services.items.map((item) => `• ${item.title}: ${item.text}`).join("\n"), page: "services", lead: false };
    if (hasAny(intents.consulting)) return { text: `${t.services.items[2].title}: ${t.services.items[2].text}

• ${t.why.cards[1][0]} — ${t.why.cards[1][1]}
• ${t.why.cards[2][0]} — ${t.why.cards[2][1]}`, page: "consulting", lead: false };
    if (hasAny(intents.islamic)) return { text: `${t.principles.description}

${bulletList(t.principles.items.slice(0, 4))}`, page: "islamicFinance", lead: false };
    if (hasAny(intents.courses)) return { text: `${t.education.description}

${t.education.cards.map((item) => `• ${item[0]} — ${item[1]}`).join("\n")}`, page: "courses", lead: false };
    if (hasAny(intents.investors)) return { text: `${t.investors.description}

${t.investors.blocks.map((item) => `• ${item[0]} — ${item[1]}`).join("\n")}`, page: "investors", lead: false };
    if (hasAny(intents.experts)) {
      const experts = (collaboratingExperts[language] || collaboratingExperts.en).slice(0, 3);
      return { text: experts.map((expert) => `• ${expert.name} — ${expert.focus}`).join("\n"), page: "network", lead: false };
    }
    if (hasAny(intents.blog)) return { text: t.blog.items.map((post) => `• ${post.title} — ${post.excerpt}`).join("\n"), page: "blog", lead: false };
    if (hasAny(intents.contact)) return { text: `${t.brand.email}
${t.brand.phone}
${t.ai.lead}`, page: "contact", lead: false };
    if (hasAny(intents.price)) return { text: language === "ru" ? "Стоимость зависит от формата услуги, объёма запроса и уровня сопровождения. Для точного расчёта лучше перейти в Contact и отправить краткий запрос." : language === "en" ? "Pricing depends on the service format, scope of work, and level of support. For an exact quote, please use the Contact page." : "Narx xizmat turi, ish hajmi va hamroh bo‘lish darajasiga qarab belgilanadi. Aniq hisob uchun Contact bo‘limiga o‘ting.", page: "contact", lead: false };
    if (hasAny(intents.faq)) return { text: t.faq.items.map((item) => `• ${item.q}
${item.a}`).join("\n\n"), page: "faq", lead: false };

    const matchedFaq = t.faq.items.find((item) => {
      const parts = normalizeText(item.q).split(" ").filter(Boolean);
      return parts.some((part) => part.length > 4 && text.includes(part));
    });
    if (matchedFaq) return { text: `${matchedFaq.q}

${matchedFaq.a}`, page: "faq", lead: false };

    return {
      text: language === "ru" ? "Я могу помочь по услугам, консалтингу, исламским финансам, курсам, инвесторам, экспертам, блогу, FAQ и контактам. Задайте вопрос чуть точнее." : language === "en" ? "I can help with services, consulting, Islamic finance, courses, investors, experts, blog content, FAQ, and contact information. Please ask a more specific question." : "Men xizmatlar, konsalting, islomiy moliya, kurslar, investorlar, ekspertlar, blog, FAQ va aloqa bo‘yicha yordam bera olaman. Savolni biroz aniqroq yozing.",
      page: null,
      lead: false,
    };
  }

  function sendMessage(customText?: string) {
    const text = String(customText || input).trim();
    if (!text) return;

    if (leadStep) {
      const nextLead = { ...leadDraft };
      if (leadStep === "name") nextLead.name = text;
      if (leadStep === "phone") nextLead.phone = text;
      if (leadStep === "company" && !isSkip(text)) nextLead.company = text;
      if (leadStep === "message") nextLead.message = text;
      setLeadDraft(nextLead);

      let nextStep = null;
      if (leadStep === "name") nextStep = "phone";
      if (leadStep === "phone") nextStep = "company";
      if (leadStep === "company") nextStep = "message";
      if (leadStep === "message") nextStep = null;

      if (nextStep) {
        setLeadStep(nextStep);
        setMessages((prev) => [...prev, { role: "user", text }, { role: "assistant", text: leadPrompt(nextStep), page: null }]);
      } else {
        setLeadStep(null);
        setCurrentPage("contact");
        setMessages((prev) => [...prev, { role: "user", text }, { role: "assistant", text: leadPrompt("done"), page: "contact" }]);
      }
      setInput("");
      return;
    }

    const answer = answerText(text);
    if (answer.lead) setLeadStep("name");
    setMessages((prev) => [...prev, { role: "user", text }, { role: "assistant", text: answer.text, page: answer.page }]);
    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setChatOpen(true)}
        className={`fixed bottom-4 sm:bottom-6 z-50 inline-flex items-center gap-2.5 sm:gap-3 rounded-full bg-[#12382f] px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base text-white shadow-[0_18px_40px_rgba(18,56,47,0.28)] hover:bg-[#0f2f27] ${isRTL ? "left-4 sm:left-6" : "right-4 sm:right-6"}`}
      >
        <MessageSquare className="h-5 w-5" />
        <span className="hidden sm:inline font-medium">{t.ai.title}</span>
      </button>

      <AnimatePresence>
        {chatOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-50 w-[calc(100vw-1rem)] sm:w-[92vw] max-w-[460px] ${isRTL ? "left-2 sm:left-6" : "right-2 sm:right-6"} bottom-20 sm:bottom-24 max-sm:top-[84px]`}
          >
            <Card className="overflow-hidden rounded-[2rem] border-emerald-950/10 shadow-[0_24px_60px_rgba(10,34,28,0.18)]">
              <div className="bg-[#12382f] p-5 text-white">
                <div className={`flex items-start justify-between gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <Bot className="h-5 w-5 text-amber-300" /> {t.ai.title}
                    </div>
                    <div className="mt-1 text-sm text-white/75">{t.ai.subtitle}</div>
                  </div>
                  <button onClick={() => setChatOpen(false)} className="rounded-full bg-white/10 p-2 hover:bg-white/15">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <CardContent className="p-0">
                <div ref={messagesContainerRef} className="max-h-[calc(100vh-15rem)] sm:max-h-[460px] space-y-4 overflow-y-auto overscroll-contain bg-[#fbfcfb] p-4 sm:p-5">
                  {messages.map((message, idx) => (
                    <div key={`${message.role}-${idx}`} className={`flex ${message.role === "user" ? (isRTL ? "justify-start" : "justify-end") : (isRTL ? "justify-end" : "justify-start")}`}>
                      <div className={`max-w-[88%] rounded-3xl px-4 py-3 text-sm leading-7 whitespace-pre-line ${message.role === "user" ? "bg-[#12382f] text-white" : "bg-white text-[#1e3f36] border border-emerald-950/10"}`}>
                        {message.text}
                        {message.page ? (
                          <div className="mt-3">
                            <Button size="sm" variant="outline" className="rounded-full border-[#12382f]/20 text-[#12382f] hover:bg-emerald-50" onClick={() => setCurrentPage(message.page)}>
                              {openSectionLabel}
                            </Button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-emerald-950/10 bg-white p-4">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {quickSuggestions.map((s) => (
                      <button key={s} onClick={() => sendMessage(s)} className="rounded-full bg-emerald-50 px-3 py-2 text-xs text-[#12382f] hover:bg-emerald-100">
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <Input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder={t.ai.placeholder} className={`rounded-full ${isRTL ? "text-right" : "text-left"}`} />
                    <Button onClick={() => sendMessage()} className="rounded-full bg-[#12382f] px-4 hover:bg-[#0f2f27]">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default function MIZANIAWebsiteV2() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>("uz");
  const [chatOpen, setChatOpen] = useState(false);
  const [leadDraft, setLeadDraft] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const t = dictionary[language];
  const isRTL = rtlLanguages.includes(language);

  const pageLabels = [
    { key: "home", label: t.pages.home },
    { key: "about", label: t.pages.about },
    { key: "services", label: t.pages.services },
    { key: "islamicFinance", label: t.pages.islamicFinance },
    { key: "courses", label: t.pages.courses },
    { key: "consulting", label: t.pages.consulting },
    { key: "investors", label: t.pages.investors },
    { key: "network", label: t.pages.network },
    { key: "blog", label: t.pages.blog },
    { key: "faq", label: t.pages.faq },
    { key: "contact", label: t.pages.contact },
  ];

  const pageContent = useMemo(() => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} language={language} />;
      case "about":
        return (
          <GenericBlocksPage
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
            blocks={t.about.points.map((p) => ({ title: p, text: t.about.description }))}
            icons={[ShieldCheck, Scale, BadgeCheck, Users]}
            ctaLabel={t.nav.speak}
            ctaAction={() => setCurrentPage("contact")}
            isRTL={isRTL}
          />
        );
      case "services":
        return (
          <GenericBlocksPage
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
            blocks={t.services.items}
            icons={serviceIcons}
            ctaLabel={t.nav.speak}
            ctaAction={() => setCurrentPage("contact")}
            isRTL={isRTL}
          />
        );
      case "islamicFinance":
        return (
          <GenericBlocksPage
            eyebrow={t.principles.eyebrow}
            title={t.principles.title}
            description={t.principles.description}
            blocks={t.principles.items.map((x) => ({ title: x, text: t.principles.description }))}
            icons={[Scale, ShieldCheck, Landmark, BookOpen, HandCoins, BadgeCheck]}
            ctaLabel={t.nav.speak}
            ctaAction={() => setCurrentPage("contact")}
            isRTL={isRTL}
          />
        );
      case "courses":
        return (
          <GenericBlocksPage
            eyebrow={t.education.eyebrow}
            title={t.education.title}
            description={t.education.description}
            blocks={t.education.cards.map((x) => ({ title: x[0], text: x[1] }))}
            icons={[GraduationCap, Users, BookOpen, BadgeCheck]}
            ctaLabel={t.education.button2}
            ctaAction={() => setCurrentPage("contact")}
            isRTL={isRTL}
          />
        );
      case "consulting":
        return (
          <GenericBlocksPage
            eyebrow={t.pages.consulting}
            title={t.services.items[2].title}
            description={t.services.items[2].text}
            blocks={[
              { title: t.services.items[2].title, text: t.services.items[2].text },
              { title: t.why.cards[1][0], text: t.why.cards[1][1] },
              { title: t.why.cards[2][0], text: t.why.cards[2][1] },
            ]}
            icons={[Briefcase, ShieldCheck, Sparkles]}
            ctaLabel={t.nav.speak}
            ctaAction={() => setCurrentPage("contact")}
            isRTL={isRTL}
          />
        );
      case "investors":
        return (
          <GenericBlocksPage
            eyebrow={t.investors.eyebrow}
            title={t.investors.title}
            description={t.investors.description}
            blocks={t.investors.blocks}
            icons={investorIcons}
            ctaLabel={t.investors.cta}
            ctaAction={() => setCurrentPage("contact")}
            isRTL={isRTL}
          />
        );
      case "network":
        return <NetworkPage t={t} isRTL={isRTL} setCurrentPage={setCurrentPage} language={language} />;
      case "blog":
        return <BlogPage t={t} isRTL={isRTL} />;
      case "faq":
        return <FAQPage t={t} isRTL={isRTL} />;
      case "contact":
        return <ContactPage t={t} isRTL={isRTL} leadDraft={leadDraft} setLeadDraft={setLeadDraft} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} language={language} />;
    }
  }, [currentPage, t, isRTL, language, leadDraft]);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#fcfdfc] text-slate-900">
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        t={t}
        pageLabels={pageLabels}
        language={language}
        setLanguage={setLanguage}
        isRTL={isRTL}
        setChatOpen={setChatOpen}
      />
      <motion.main key={`${currentPage}-${language}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }}>
        {pageContent}
      </motion.main>
      <Footer setCurrentPage={setCurrentPage} t={t} pageLabels={pageLabels} isRTL={isRTL} />
      <AIChatWidget
        t={t}
        language={language}
        setCurrentPage={setCurrentPage}
        isRTL={isRTL}
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
        leadDraft={leadDraft}
        setLeadDraft={setLeadDraft}
      />
    </div>
  );
}
