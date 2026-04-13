"use client";

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
  { code: "kir", label: "КИР" },
  { code: "lat", label: "LAT" },
  { code: "ar", label: "AR" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

const rtlLanguages = ["ar"];

function latinUzbekToCyrillic(text) {
  if (!text) return text;
  let s = text;

  s = s.replace(/G‘/g, "Ғ").replace(/g‘/g, "ғ");
  s = s.replace(/O‘/g, "Ў").replace(/o‘/g, "ў");
  s = s.replace(/G'/g, "Ғ").replace(/g'/g, "ғ");
  s = s.replace(/O'/g, "Ў").replace(/o'/g, "ў");
  s = s.replace(/Gʻ/g, "Ғ").replace(/gʻ/g, "ғ");
  s = s.replace(/Oʻ/g, "Ў").replace(/oʻ/g, "ў");
  s = s.replace(/Gʼ/g, "Ғ").replace(/gʼ/g, "ғ");
  s = s.replace(/Oʼ/g, "Ў").replace(/oʼ/g, "ў");

  s = s.replace(/Sh/g, "Ш").replace(/sh/g, "ш");
  s = s.replace(/Ch/g, "Ч").replace(/ch/g, "ч");
  s = s.replace(/Ya/g, "Я").replace(/ya/g, "я");
  s = s.replace(/Yo/g, "Ё").replace(/yo/g, "ё");
  s = s.replace(/Yu/g, "Ю").replace(/yu/g, "ю");

  const map = {
    A: "А", a: "а",
    B: "Б", b: "б",
    D: "Д", d: "д",
    E: "Е", e: "е",
    F: "Ф", f: "ф",
    G: "Г", g: "г",
    H: "Ҳ", h: "ҳ",
    I: "И", i: "и",
    J: "Ж", j: "ж",
    K: "К", k: "к",
    L: "Л", l: "л",
    M: "М", m: "м",
    N: "Н", n: "н",
    O: "О", o: "о",
    P: "П", p: "п",
    Q: "Қ", q: "қ",
    R: "Р", r: "р",
    S: "С", s: "с",
    T: "Т", t: "т",
    U: "У", u: "у",
    V: "В", v: "в",
    X: "Х", x: "х",
    Y: "Й", y: "й",
    Z: "З", z: "з",
    "'": "",
    "ʻ": "",
    "ʼ": "",
    "’": "",
    "‘": "",
    "`": "",
  };

  return s
    .split("")
    .map((ch) => (map[ch] !== undefined ? map[ch] : ch))
    .join("");
}

function convertToCyrillic(value) {
  if (typeof value === "string") return latinUzbekToCyrillic(value);
  if (Array.isArray(value)) return value.map(convertToCyrillic);
  if (value && typeof value === "object") {
    const result = {};
    Object.keys(value).forEach((key) => {
      result[key] = convertToCyrillic(value[key]);
    });
    return result;
  }
  return value;
}

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
    badge: "Premium etik moliya va konsalting brendi",
    title: "Tamoyil, strategiya va ishonchga tayangan moliya.",
    highlight: "Tamoyil",
    description:
      "MIZANIA etik moliya, islomiy moliya, ta’lim, konsalting va investorlar bilan ishlash yo‘nalishlarida global premium darajadagi brend sifatida qurilgan.",
    cta1: "Xizmatlarni ko‘rish",
    cta2: "Konsultatsiya so‘rash",
    cards: [
      ["Premium", "Global korporativ ko‘rinish"],
      ["Etik", "Adolatga tayangan yondashuv"],
      ["Ishonchli", "Sokin va professional imidj"],
    ],
    promise: "Brend va’dasi",
    promiseText:
      "MIZANIA tashqi ko‘rinish uchun emas, mazmun, muvozanat va uzoq muddatli ishonch uchun qurilgan.",
  },
  trust: {
    eyebrow: "Ishonch indikatorlari",
    items: [
      ["Etik", "Tamoyilga asoslangan qarorlar"],
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
      "Etikaga asoslangan premium pozitsiya",
      "Nafis va minimal vizual identitet",
      "Kuchli ta’lim va konsalting qiyofasi",
      "Global auditoriya va jiddiy hamkorlar uchun mos",
    ],
    button: "Batafsil",
  },
  services: {
    eyebrow: "Xizmatlar",
    title: "Etik o‘sish uchun premium xizmat arxitekturasi.",
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
      ["Adolatga tayangan identitet", "Brend hikoyasi adolat, muvozanat va mas’uliyatga qurilgan."],
      ["Premium korporativ dizayn", "Global konsalting va moliya sohasi uchun mos vizual tizim."],
      ["Murojaat uchun qulay tuzilma", "CTA, aloqa nuqtalari va foydalanuvchini murojaatga olib keluvchi sodda arxitektura."],
      ["AI yordamchi", "Savol-javob, yo‘naltirish va xizmatlar bo‘yicha tezkor yordam imkoniyati."],
    ],
  },
  principles: {
    eyebrow: "Etik moliya tamoyillari",
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
      "Etik moliya, islomiy moliya va amaliy strategik fikrlashni chuqur tushunishni istaganlar uchun kurslar va workshoplar.",
    button1: "Kurslarni ko‘rish",
    button2: "Dastur so‘rash",
    cards: [
      ["Asoslar", "Etik va islomiy moliya tamoyillari"],
      ["Executive", "Qaror qabul qiluvchilar uchun yopiq workshoplar"],
      ["Amaliy", "Keyslar asosidagi mashg‘ulotlar"],
      ["Premium", "Yuqori darajadagi ta’lim tajribasi"],
    ],
  },
  testimonials: {
    eyebrow: "Fikrlar",
    title: "Chuqurlik, intizom va ishonch bilan shakllangan obro‘.",
    description:
      "Quyidagi namunaviy fikrlar premium moliya va konsalting brendining ohangini ko‘rsatadi.",
    items: [
      {
        name: "Xususiy investor",
        role: "Etik kapital hamkori",
        quote:
          "MIZANIA sokin professionallikni noyob ma’naviy aniqlik bilan uyg‘unlashtiradi. Brend global va ishonchli ko‘rinadi.",
      },
      {
        name: "Asoschi mijoz",
        role: "Biznes egasi",
        quote:
          "Faqat moliyaviy yo‘l-yo‘riq emas, balki har bir tavsiyadagi tartib, ishonch va muvozanat ta’sir qildi.",
      },
      {
        name: "Kurs ishtirokchisi",
        role: "Tinglovchi",
        quote:
          "Ta’lim premium va amaliy tuyuldi. Murakkab mavzular chuqurligini yo‘qotmasdan tushunarli bo‘ldi.",
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
    formTitle: "Lead generation forma",
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
      "Premium sayt savollarga oldindan javob berib, ishonch va murojaat ehtimolini oshiradi.",
    button: "To‘liq FAQ",
    items: [
      {
        q: "MIZANIA nimaga ixtisoslashgan?",
        a: "MIZANIA etik moliya, islomiy moliya, ta’lim, strategik konsalting va investorlar bilan ishlash yo‘nalishlariga ixtisoslashgan.",
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
    title: "Etik va uzoq muddatli kapital bilan ishlashga mos sahifa.",
    description:
      "Bu bo‘lim investorlarni MIZANIA falsafasi, boshqaruv yondashuvi va ishonchliligi bilan tanishtiradi.",
    blocks: [
      ["Ishonchga tayangan pozitsiya", "Investorlar uchun imkoniyatdan tashqari intizom, aniqlik va etik yaxlitlik ham muhim."],
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
        category: "Etik moliya",
        title: "Zamonaviy iqtisodda etik moliya nimani anglatadi",
        excerpt: "Mas’uliyat, ishonch va barqaror qiymat yaratish haqidagi premium qarash.",
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
    description: "Savolingiz, hamkorlik taklifi yoki konsultatsiya so‘rovingiz bo‘lsa, bizga yozing. Jamoamiz siz bilan tez orada bog‘lanadi.",
    name: "Ismingiz",
    email: "Email manzil",
    phone: "Telefon raqam",
    company: "Kompaniya yoki tashkilot",
    message: "MIZANIA sizga qanday yordam bera oladi?",
    send: "Xabar yuborish",
  },
  footer: {
    description: "Adolat, muvozanat va ishonchga tayangan premium etik moliya, islomiy moliya, konsalting va ta’lim.",
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
    eyebrow: "Testimonials",
    title: "A reputation shaped by depth, discipline, and trust.",
    description: "Sample statements illustrating the tone of a premium finance and consulting brand.",
    items: [
      {
        name: "Private Investor",
        role: "Ethical Capital Partner",
        quote: "MIZANIA combines calm professionalism with rare moral clarity. The brand feels global and trustworthy.",
      },
      {
        name: "Founder Client",
        role: "Business Owner",
        quote: "What stood out was the structure, confidence, and balance behind every recommendation.",
      },
      {
        name: "Course Participant",
        role: "Learner",
        quote: "The learning experience felt premium and practical. Complex topics became much clearer.",
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
    eyebrow: "Отзывы",
    title: "Репутация, построенная на глубине, дисциплине и доверии.",
    description: "Эти примеры передают тон премиального финансового и консалтингового бренда.",
    items: [
      { name: "Частный инвестор", role: "Партнёр по этичному капиталу", quote: "MIZANIA сочетает спокойный профессионализм с редкой моральной ясностью. Бренд выглядит глобально и внушает доверие." },
      { name: "Клиент-основатель", role: "Владелец бизнеса", quote: "Впечатлили структура, уверенность и баланс, стоящие за каждой рекомендацией." },
      { name: "Участник курса", role: "Слушатель", quote: "Обучение выглядело премиально и практично. Сложные темы стали понятнее." },
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

const ar = {
  ...en,
  brand: { ...en.brand, tagline: "العدالة · التوازن · الثقة" },
  pages: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    islamicFinance: "التمويل الإسلامي",
    courses: "الدورات",
    consulting: "الاستشارات",
    investors: "للمستثمرين",
    network: "شبكة الخبراء",
    blog: "المدونة",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا",
  },
  nav: { speak: "تواصل معنا", ai: "المساعد الذكي" },
  hero: {
    badge: "علامة فاخرة للتمويل الأخلاقي والاستشارات",
    title: "تمويل يرتكز على المبدأ والاستراتيجية والثقة.",
    highlight: "المبدأ",
    description: "MIZANIA منصة فاخرة للتمويل الأخلاقي والتمويل الإسلامي والتعليم والاستشارات والعمل مع المستثمرين.",
    cta1: "استكشف الخدمات",
    cta2: "اطلب استشارة",
    cards: [["فاخر", "مظهر مؤسسي عالمي"], ["أخلاقي", "تموضع قائم على العدالة"], ["موثوق", "صورة مهنية هادئة"]],
    promise: "وعد العلامة",
    promiseText: "تم بناء MIZANIA للعمق والتوازن والثقة طويلة الأجل، لا للمظهر بلا مضمون.",
  },
  trust: { eyebrow: "مؤشرات الثقة", items: [["أخلاقي", "قرارات مبنية على المبادئ"], ["إسلامي", "توجيه مالي متوافق مع الشريعة"], ["تعليمي", "قيمة قائمة على المعرفة"], ["فاخر", "عرض بمستوى عالمي"]] },
  about: {
    eyebrow: "عن العلامة",
    title: "صُممت لمن يقدّر الوضوح والنزاهة والثقة المستدامة.",
    description: "MIZANIA ليست مجرد موقع مالي. إنها منصة فاخرة مبنية على العدالة والتوازن والتعليم والثقة الاستراتيجية.",
    points: ["تموضع فاخر قائم على الأخلاق", "هوية بصرية فاخرة وبسيطة", "حضور قوي في التعليم والاستشارات", "مناسبة لجمهور عالمي وأصحاب مصلحة جادين"],
    button: "المزيد",
  },
  services: {
    eyebrow: "الخدمات",
    title: "هيكل خدمات فاخر للنمو الأخلاقي.",
    description: "كل خدمة مصممة لتبدو راقية واستراتيجية وعالية الثقة.",
    button: "كل الخدمات",
    items: [
      { title: "استشارات التمويل الإسلامي", text: "حلول مالية حلال ومراجعة النماذج التجارية ونمو متوافق مع الشريعة." },
      { title: "التعليم والدورات", text: "تجارب تعليمية فاخرة لرواد الأعمال والطلاب والمهنيين." },
      { title: "الاستشارات الاستراتيجية", text: "التموضع وتصميم العروض وهندسة الثقة." },
      { title: "علاقات المستثمرين", text: "تواصل واضح وعرض فاخر موجّه للمستثمرين." },
    ],
  },
  why: {
    eyebrow: "لماذا MIZANIA",
    title: "ليست صاخبة ولا نمطية، بل موثوقة بتميز.",
    description: "لغة العلامة هادئة وراقية واستراتيجية، وتعكس الثقة بلا ضجيج.",
    cards: [["هوية قائمة على العدالة", "مبنية على العدالة والتوازن والمسؤولية."], ["تصميم مؤسسي فاخر", "مناسب للاستشارات والتمويل على مستوى عالمي."], ["جاهزة لتوليد العملاء", "مسارات واضحة للتحويل والتواصل."], ["إرشاد عبر AI", "مساعد مدمج يساعد المستخدم على التنقل."]],
  },
  principles: {
    eyebrow: "مبادئ التمويل الأخلاقي",
    title: "المبادئ ليست زينة، بل هي البنية نفسها.",
    description: "رؤية MIZANIA المالية مبنية على العدالة والشفافية والمسؤولية وصناعة قيمة حقيقية.",
    button: "استكشاف التمويل الإسلامي",
    items: ["العدالة قبل الربح", "التوازن بين النمو والمسؤولية", "الشفافية في الهيكل والتواصل", "الثقة أساس كل معاملة", "قرارات تقودها المعرفة", "قيمة طويلة الأجل بدل الربح القصير"],
  },
  education: {
    eyebrow: "العروض التعليمية",
    title: "معرفة صُممت لنمو جاد.",
    description: "دورات وورش وبرامج تعليمية فاخرة لمن يريد التعمق في التمويل الأخلاقي والإسلامي.",
    button1: "تصفح الدورات",
    button2: "اطلب المنهج",
    cards: [["الأساسيات", "مبادئ التمويل الأخلاقي والإسلامي"], ["تنفيذي", "ورش خاصة لصنّاع القرار"], ["تطبيقي", "جلسات قائمة على الحالات"], ["فاخر", "تجربة تعليمية عالية الثقة"]],
  },
  testimonials: {
    eyebrow: "الشهادات",
    title: "سمعة تتشكل بالعمق والانضباط والثقة.",
    description: "هذه العبارات النموذجية تعكس نبرة علامة مالية واستشارية فاخرة.",
    items: [
      { name: "مستثمر خاص", role: "شريك رأس مال أخلاقي", quote: "تجمع MIZANIA بين المهنية الهادئة والوضوح الأخلاقي النادر. تبدو العلامة عالمية وجديرة بالثقة." },
      { name: "عميل مؤسس", role: "صاحب عمل", quote: "ما لفتني هو البنية والثقة والتوازن الكامن خلف كل توصية." },
      { name: "مشارك في دورة", role: "متعلم", quote: "كانت التجربة التعليمية راقية وعملية. أصبحت الموضوعات المعقدة أوضح بكثير." },
    ],
  },
  cta: {
    eyebrow: "ابدأ الحوار",
    title: "ابنِ خطوتك المالية القادمة على أساس أقوى.",
    description: "إذا كنت تبحث عن استشارة أو تعليم أو وضوح استراتيجي أو عرض جاهز للمستثمرين، فإن MIZANIA تقدم نقطة بداية راقية.",
    button1: "طلب استشارة",
    button2: "صفحة المستثمرين",
    formTitle: "نموذج التواصل",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    company: "الشركة أو المؤسسة",
    message: "أخبرنا بما تبحث عنه",
    send: "إرسال الطلب",
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "الوضوح الراقي يخفف التردد ويعزز الثقة.",
    description: "الموقع الفاخر يجب أن يجيب عن الأسئلة الأساسية قبل أن تصبح اعتراضات.",
    button: "عرض كامل الأسئلة",
    items: [
      { q: "في ماذا تتخصص MIZANIA؟", a: "التمويل الأخلاقي، التمويل الإسلامي، التعليم، الاستشارات الاستراتيجية، والعمل مع المستثمرين." },
      { q: "هل لديكم دورات؟", a: "نعم. يمكن لـ MIZANIA تقديم دورات وورش ومسارات تعليمية فاخرة." },
      { q: "ما وظيفة المساعد الذكي؟", a: "يساعد المستخدم في التنقل بين الخدمات والدورات والتمويل الإسلامي وطرق التواصل." },
      { q: "كيف أتواصل معكم؟", a: "من خلال النموذج أو البريد الإلكتروني أو الهاتف." },
    ],
  },
  investors: {
    eyebrow: "للمستثمرين",
    title: "صفحة تتحدث إلى رأس المال الأخلاقي طويل الأجل.",
    description: "هذا القسم يعرّف المستثمرين على فلسفة MIZANIA ونهجها في الحوكمة ومستوى مصداقيتها.",
    blocks: [["تموضع قائم على الثقة", "يحتاج المستثمرون إلى الانضباط والوضوح والتماسك الأخلاقي."], ["قيمة طويلة الأجل", "يتم النظر إلى رأس المال كمسؤولية ومنفعة مستدامة."], ["جودة العرض", "العرض الفاخر يرفع ثقة المستثمرين."]],
    cta: "استفسار استثماري",
  },
  blog: {
    eyebrow: "المدونة",
    title: "محتوى تحريري يعزز السلطة والظهور في البحث.",
    description: "المدونة تدعم الظهور العضوي والخبرة وعمق العلامة.",
    read: "اقرأ المقال",
    items: [
      { category: "التمويل الأخلاقي", title: "ماذا يعني التمويل الأخلاقي في الاقتصاد الحديث؟", excerpt: "رؤية فاخرة للمسؤولية والثقة وصناعة القيمة المستدامة." },
      { category: "التمويل الإسلامي", title: "مبادئ التمويل الإسلامي للمؤسسين والمستثمرين", excerpt: "مقدمة عملية إلى التفكير المالي القائم على العدالة." },
      { category: "الاستشارات", title: "لماذا تعد الثقة أصلاً استراتيجياً؟", excerpt: "كيف تتحول الشفافية والاتساق إلى مزايا طويلة المدى." },
    ],
  },
  contact: {
    eyebrow: "اتصل بنا",
    title: "طريقة واضحة وموثوقة للتواصل مع MIZANIA.",
    description: "إذا كان لديك سؤال أو عرض شراكة أو طلب استشارة، فأرسل لنا رسالة، وسيعود إليك فريقنا في أقرب وقت.",
    name: "اسمك",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    company: "الشركة أو المؤسسة",
    message: "كيف يمكن لـ MIZANIA مساعدتك؟",
    send: "إرسال الرسالة",
  },
  footer: {
    description: "تمويل أخلاقي فاخر ورؤية في التمويل الإسلامي واستشارات وتعليم قائمون على العدالة والتوازن والثقة.",
    pages: "الصفحات",
    explore: "استكشف",
    contact: "التواصل",
    rights: "© 2026 MIZANIA. جميع الحقوق محفوظة.",
    note: "بُني من أجل الثقة الراقية والوضوح العصري والمساعدة الذكية.",
  },
  ai: {
    title: "MIZANIA AI",
    subtitle: "مساعد ذكي لأسئلتك",
    placeholder: "اكتب سؤالك...",
    send: "إرسال",
    hello: "مرحباً. أنا مساعد MIZANIA الذكي. أستطيع مساعدتك في الخدمات والتمويل الإسلامي والدورات والمستثمرين وبيانات التواصل.",
    suggestions: ["ما هي خدماتكم؟", "أخبرني عن التمويل الإسلامي", "هل لديكم دورات؟", "كيف يمكنني التواصل؟"],
    lead: "يمكنني أيضاً توجيهك إلى صفحة التواصل.",
  },
};

const kir = convertToCyrillic(uzLatin);
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
  kir: {
    ...kir,
    network: {
      eyebrow: "Эксперт ва маслаҳат ҳамкорлик тармоғи",
      title: "MIZANIA’нинг билим ва маслаҳат салоҳиятини кучайтирувчи танланган ҳамкор экспертлар.",
      description: "MIZANIA этик молия, исломий молия, таълим ва маслаҳат йўналишларида танланган олимлар, тадқиқотчилар ва соҳавий мутахассислар билан ҳамкорлик қилади.",
      note: "Профиллар MIZANIAнинг билим ва маслаҳат йўналишидаги ҳамкорликлари ҳақида умумий маълумот сифатида тақдим этилган.",
      cta: "MIZANIA билан боғланиш",
    },
  },
  lat: {
    ...uzLatin,
    network: {
      eyebrow: "Ekspert va maslahat hamkorlik tarmog‘i",
      title: "MIZANIA’ning bilim va maslahat salohiyatini kuchaytiruvchi tanlangan hamkor ekspertlar.",
      description: "MIZANIA etik moliya, islomiy moliya, ta’lim va maslahat yo‘nalishlarida tanlangan olimlar, tadqiqotchilar va sohaviy mutaxassislar bilan hamkorlik qiladi.",
      note: "Profillar MIZANIAнинг bilim va maslahat yo‘nalishidagi hamkorliklari haqida umumiy ma’lumot sifatida taqdim etilgan.",
      cta: "MIZANIA bilan bog‘lanish",
    },
  },
  ar: {
    ...ar,
    network: {
      eyebrow: "شبكة الخبراء والتعاون الاستشاري",
      title: "خبراء متعاونون مختارون يعززون العمق المعرفي والاستشاري لدى MIZANIA.",
      description: "تتعاون MIZANIA مع نخبة من العلماء والباحثين والمتخصصين في التمويل الأخلاقي والتمويل الإسلامي والتعليم والمبادرات الاستشارية.",
      note: "تُعرض هذه الملفات لأغراض تعريفية عامة ضمن إطار التعاون المعرفي والاستشاري المستمر.",
      cta: "التواصل مع MIZANIA",
    },
  },
};

const serviceIcons = [Landmark, GraduationCap, Briefcase, HandCoins];
const investorIcons = [CircleDollarSign, Building2, BadgeCheck];
const blogIcons = [Newspaper, BookOpen, Sparkles];
const networkIcons = [ShieldCheck, GraduationCap, Landmark, BadgeCheck, BookOpen];

const collaboratingExperts = {
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
      focus: "Исламский рынок капитала, сукук, такафул, шариатский advisory",
      bio: "Известный учёный в области исламских финансов с глубоким опытом в шариатском консультировании, исламском рынке капитала, такафуле и работе с регуляторной средой.",
      image: "https://as-salihin.com/wp-content/uploads/2024/11/assalihin_Org-Chart-2024_Board-Of-Syariah-Advisors-3_Prof-Dr-Engku-Rabiah-Adawiah.png",
      sourceUrl: "https://as-salihin.com/en/dr-engku-rabiah-adawiah/",
    },
    {
      name: "Dr. Mohammad Mahbubi Ali",
      role: "Эксперт по сотрудничеству",
      focus: "Исламский банкинг, Shariah governance, разработка продуктов, policy advisory",
      bio: "Академический и отраслевой специалист с опытом в исламском банкинге, шариатском governance, регуляторном развитии, обучении и advisory initiatives.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/11477.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/NC9vVmt6eTNMV3hLZ2RhSnBaNWpRZz09",
    },
    {
      name: "Prof. Dato’ Dr. Aznan Hasan",
      role: "Эксперт по сотрудничеству",
      focus: "Структурирование исламских финансов, рынки капитала, Shariah governance",
      bio: "Старший шариатский учёный с обширным опытом в структурировании исламских финансов, advisory work, governance и institutional development.",
      image: "https://www.etiqa.com/wp-content/uploads/2022/03/Aznan-Hassan.png",
      sourceUrl: "https://www.etiqa.com/our-leaders-post/professor-dr-aznan-hasan/",
    },
    {
      name: "Mezbah Uddin Ahmed",
      role: "Эксперт по сотрудничеству",
      focus: "Сукук, шариатский аудит, AAOIFI, исследования в исламских финансах",
      bio: "Исследователь и advisory specialist, активно работающий в исламских финансах, сукук, шариатском аудите, AAOIFI и технических консультационных проектах.",
      image: "https://inceif.edu.my/wp-content/uploads/2024/08/Mezbah-Uddin-Ahmed-743x1024.png",
      sourceUrl: "https://inceif.edu.my/explore-inceif/about-us/academic-research-staff/mezbah-uddin-ahmed/",
    },
    {
      name: "Prof. Dr. Azman Mohd Noor",
      role: "Эксперт по сотрудничеству",
      focus: "Исламское право сделок, такафул, вакф, шариатский advisory",
      bio: "Опытный академик и шариатский консультант с сильной экспертизой в исламском праве сделок, такафуле, вакфе и прикладных вопросах исламских финансов.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/2902.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/Nlo2Qm9EMUVlUjlKWVRJWGJuTUlXQT09",
    },
  ],
  lat: [
    {
      name: "Prof. Dr. Engku Rabiah Adawiah",
      role: "Hamkor ekspert",
      focus: "Islomiy kapital bozori, sukuk, takaful, Shariah advisory",
      bio: "Islomiy moliya sohasida taniqli olima bo‘lib, Shariah advisory, islomiy kapital bozori, takaful va regulyatorlar bilan bog‘liq maslahat yo‘nalishlarida chuqur tajribaga ega.",
      image: "https://as-salihin.com/wp-content/uploads/2024/11/assalihin_Org-Chart-2024_Board-Of-Syariah-Advisors-3_Prof-Dr-Engku-Rabiah-Adawiah.png",
      sourceUrl: "https://as-salihin.com/en/dr-engku-rabiah-adawiah/",
    },
    {
      name: "Dr. Mohammad Mahbubi Ali",
      role: "Hamkor ekspert",
      focus: "Islomiy bank ishi, Shariah governance, mahsulot ishlab chiqish, policy advisory",
      bio: "Islomiy bank ishi, shariat boshqaruvi, regulyator rivoji, ta’lim va maslahat tashabbuslari bo‘yicha tajribaga ega akademik va sohaviy mutaxassis.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/11477.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/NC9vVmt6eTNMV3hLZ2RhSnBaNWpRZz09",
    },
    {
      name: "Prof. Dato’ Dr. Aznan Hasan",
      role: "Hamkor ekspert",
      focus: "Islomiy moliya strukturalari, kapital bozorlari, Shariah governance",
      bio: "Islomiy moliya strukturalari, maslahat faoliyati, boshqaruv va institutsional rivojlanish bo‘yicha katta tajribaga ega katta shariat olimi.",
      image: "https://www.etiqa.com/wp-content/uploads/2022/03/Aznan-Hassan.png",
      sourceUrl: "https://www.etiqa.com/our-leaders-post/professor-dr-aznan-hasan/",
    },
    {
      name: "Mezbah Uddin Ahmed",
      role: "Hamkor ekspert",
      focus: "Sukuk, Shariah audit, AAOIFI, islomiy moliya tadqiqotlari",
      bio: "Islomiy moliya tadqiqotlari, sukuk, Shariah audit, AAOIFI va texnik maslahat loyihalarida faol ishlaydigan tadqiqotchi va advisory mutaxassis.",
      image: "https://inceif.edu.my/wp-content/uploads/2024/08/Mezbah-Uddin-Ahmed-743x1024.png",
      sourceUrl: "https://inceif.edu.my/explore-inceif/about-us/academic-research-staff/mezbah-uddin-ahmed/",
    },
    {
      name: "Prof. Dr. Azman Mohd Noor",
      role: "Hamkor ekspert",
      focus: "Islomiy muomalot huquqi, takaful, waqf, Shariah advisory",
      bio: "Islomiy muomalot huquqi, takaful, waqf va amaliy islomiy moliya masalalarida kuchli tajribaga ega tajribali akademik va shariat maslahatchisi.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/2902.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/Nlo2Qm9EMUVlUjlKWVRJWGJuTUlXQT09",
    },
  ],
  kir: [
    {
      name: "Prof. Dr. Engku Rabiah Adawiah",
      role: "Ҳамкор эксперт",
      focus: "Исломий капитал бозори, сукук, такафул, Shariah advisory",
      bio: "Исломий молия соҳасида таниқли олима бўлиб, Shariah advisory, исломий капитал бозори, такафул ва регуляторлар билан боғлиқ маслаҳат йўналишларида чуқур тажрибага эга.",
      image: "https://as-salihin.com/wp-content/uploads/2024/11/assalihin_Org-Chart-2024_Board-Of-Syariah-Advisors-3_Prof-Dr-Engku-Rabiah-Adawiah.png",
      sourceUrl: "https://as-salihin.com/en/dr-engku-rabiah-adawiah/",
    },
    {
      name: "Dr. Mohammad Mahbubi Ali",
      role: "Ҳамкор эксперт",
      focus: "Исломий банк иши, Shariah governance, маҳсулот ишлаб чиқиш, policy advisory",
      bio: "Исломий банк иши, шариат бошқаруви, регулятор ривожи, таълим ва маслаҳат ташаббуслари бўйича тажрибага эга академик ва соҳавий мутахассис.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/11477.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/NC9vVmt6eTNMV3hLZ2RhSnBaNWpRZz09",
    },
    {
      name: "Prof. Dato’ Dr. Aznan Hasan",
      role: "Ҳамкор эксперт",
      focus: "Исломий молия структуралари, капитал бозорлари, Shariah governance",
      bio: "Исломий молия структуралари, маслаҳат фаолияти, бошқарув ва институционал ривожланиш бўйича катта тажрибага эга катта шариат олими.",
      image: "https://www.etiqa.com/wp-content/uploads/2022/03/Aznan-Hassan.png",
      sourceUrl: "https://www.etiqa.com/our-leaders-post/professor-dr-aznan-hasan/",
    },
    {
      name: "Mezbah Uddin Ahmed",
      role: "Ҳамкор эксперт",
      focus: "Сукук, Shariah audit, AAOIFI, исломий молия тадқиқотлари",
      bio: "Исломий молия тадқиқотлари, сукук, Shariah audit, AAOIFI ва техник маслаҳат лойиҳаларида фаол ишлайдиган тадқиқотчи ва advisory мутахассис.",
      image: "https://inceif.edu.my/wp-content/uploads/2024/08/Mezbah-Uddin-Ahmed-743x1024.png",
      sourceUrl: "https://inceif.edu.my/explore-inceif/about-us/academic-research-staff/mezbah-uddin-ahmed/",
    },
    {
      name: "Prof. Dr. Azman Mohd Noor",
      role: "Ҳамкор эксперт",
      focus: "Исломий муомалот ҳуқуқи, такафул, вақф, Shariah advisory",
      bio: "Исломий муомалот ҳуқуқи, такафул, вақф ва амалий исломий молия масалаларида кучли тажрибага эга тажрибали академик ва шариат маслаҳатчиси.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/2902.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/Nlo2Qm9EMUVlUjlKWVRJWGJuTUlXQT09",
    },
  ],
  ar: [
    {
      name: "Prof. Dr. Engku Rabiah Adawiah",
      role: "خبير متعاون",
      focus: "سوق رأس المال الإسلامي، الصكوك، التكافل، الاستشارات الشرعية",
      bio: "عالمة بارزة في المالية الإسلامية تتمتع بخبرة عميقة في الاستشارات الشرعية وسوق رأس المال الإسلامي والتكافل والعمل الاستشاري المرتبط بالجهات التنظيمية.",
      image: "https://as-salihin.com/wp-content/uploads/2024/11/assalihin_Org-Chart-2024_Board-Of-Syariah-Advisors-3_Prof-Dr-Engku-Rabiah-Adawiah.png",
      sourceUrl: "https://as-salihin.com/en/dr-engku-rabiah-adawiah/",
    },
    {
      name: "Dr. Mohammad Mahbubi Ali",
      role: "خبير متعاون",
      focus: "الصيرفة الإسلامية، حوكمة الشريعة، تطوير المنتجات، الاستشارات السياساتية",
      bio: "أكاديمي ومتخصص صناعي لديه خبرة في الصيرفة الإسلامية وحوكمة الشريعة والتطوير التنظيمي والتدريب والمبادرات الاستشارية.",
      image: "https://xcess.iium.edu.my/packages/card/printing/camera/uploads/original/11477.jpeg",
      sourceUrl: "https://www.iium.edu.my/directory/show/NC9vVmt6eTNMV3hLZ2RhSnBaNWpRZz09",
    },
    {
      name: "Prof. Dato’ Dr. Aznan Hasan",
      role: "خبير متعاون",
      focus: "هيكلة التمويل الإسلامي، أسواق رأس المال، حوكمة الشريعة",
      bio: "عالم شريعة بارز يتمتع بخبرة واسعة في هيكلة التمويل الإسلامي والعمل الاستشاري والحوكمة والتطوير المؤسسي.",
      image: "https://www.etiqa.com/wp-content/uploads/2022/03/Aznan-Hassan.png",
      sourceUrl: "https://www.etiqa.com/our-leaders-post/professor-dr-aznan-hasan/",
    },
    {
      name: "Mezbah Uddin Ahmed",
      role: "خبير متعاون",
      focus: "الصكوك، التدقيق الشرعي، AAOIFI، بحوث المالية الإسلامية",
      bio: "باحث ومتخصص استشاري ينشط في بحوث المالية الإسلامية والصكوك والتدقيق الشرعي وأعمال AAOIFI والمشاريع الاستشارية الفنية.",
      image: "https://inceif.edu.my/wp-content/uploads/2024/08/Mezbah-Uddin-Ahmed-743x1024.png",
      sourceUrl: "https://inceif.edu.my/explore-inceif/about-us/academic-research-staff/mezbah-uddin-ahmed/",
    },
    {
      name: "Prof. Dr. Azman Mohd Noor",
      role: "خبير متعاون",
      focus: "فقه المعاملات، التكافل، الوقف، الاستشارات الشرعية",
      bio: "أكاديمي ومستشار شرعي متمرس يتمتع بخلفية قوية في فقه المعاملات والتكافل والوقف والمسائل التطبيقية في المالية الإسلامية.",
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
    <div className="grid grid-cols-5 gap-2 pt-2">
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
    <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
      <div className={`relative overflow-hidden rounded-[1.2rem] border border-[#d8cdb5] bg-white ${compact ? "h-16 w-16" : "h-20 w-20 sm:h-24 sm:w-24"} shadow-[0_10px_24px_rgba(16,48,40,0.08)]`}>
        <img src={MIZANIA_LOGO} alt="MIZANIA logo" className="h-full w-full object-contain p-1.5" />
      </div>
      <div className={isRTL ? "text-right" : "text-left"}>
        <div className={`${compact ? "text-[1.55rem]" : "text-[2rem] sm:text-[2.2rem]"} leading-none tracking-[0.22em] font-semibold text-[#12382f]`}>
          MIZANIA
        </div>
        <div className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-[#8b7744]">
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
    if (language === "kir") return "Экспертлар";
    if (language === "lat") return "Ekspertlar";
    if (language === "ar") return "الخبراء";
    return "Experts";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8cdb5] bg-[#fbf8f1] shadow-[0_8px_24px_rgba(16,48,40,0.06)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className={`flex min-h-[92px] items-center justify-between gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
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
    <section className="relative overflow-hidden bg-[#f8f3e8] pt-6 lg:pt-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,45,37,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(201,169,90,0.12),transparent_28%)]" />
      <div className={`mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12 lg:px-8 lg:py-16 ${isRTL ? "lg:[direction:rtl]" : ""}`}>
        <div className={`rounded-[2rem] border border-[#d8cdb5] bg-white p-8 shadow-[0_16px_40px_rgba(16,48,40,0.06)] lg:p-10 ${isRTL ? "text-right" : "text-left"}`}>
          <BrandMark isRTL={isRTL} tagline={t.brand.tagline} />
          <div className={`mt-8 inline-flex items-center gap-2 rounded-full border border-[#d7c398] bg-[#fbf8f1] px-4 py-2 text-sm text-[#7b6a3d] ${isRTL ? "flex-row-reverse" : ""}`}>
            <BadgeCheck className="h-4 w-4" />
            {t.hero.badge}
          </div>
          <div className="mt-8 space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-[#0d2d25] sm:text-5xl lg:text-[4.5rem]">
              {parts[0]}
              <span className="text-[#8c7440]">{highlight}</span>
              {parts[1] || ""}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#38544b]">{t.hero.description}</p>
          </div>
          <div className={`mt-8 flex flex-col gap-4 sm:flex-row ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <Button className="rounded-full bg-[#cba95a] px-8 py-6 text-base text-[#12382f] hover:bg-[#c39f4d]" onClick={() => setCurrentPage("services")}>
              {t.hero.cta1} {isRTL ? <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> : <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
            <Button variant="outline" className="rounded-full border-[#cdbb91] px-8 py-6 text-base text-[#12382f] hover:bg-[#f5efe1]" onClick={() => setCurrentPage("contact")}>
              {t.hero.cta2}
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#254238] bg-gradient-to-br from-[#0f3028] via-[#164337] to-[#0a211b] p-6 text-white shadow-[0_24px_60px_rgba(10,34,28,0.18)] lg:p-5">
          <div className="grid h-full gap-5 lg:grid-rows-[auto_1fr_auto]">
            <div className={`flex items-start justify-between gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className={isRTL ? "text-right" : "text-left"}>
                <div className="text-sm uppercase tracking-[0.22em] text-amber-300/70">MIZANIA</div>
                <div className="mt-2 text-[1.7rem] font-medium leading-tight">{t.hero.promise}</div>
              </div>
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-amber-300/20 bg-[radial-gradient(circle_at_30%_30%,rgba(232,204,127,0.35),transparent_35%),radial-gradient(circle_at_60%_70%,rgba(73,116,92,0.45),transparent_35%),linear-gradient(135deg,#284c40,#0f3028)] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
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
        <div className={`grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr] ${isRTL ? "lg:[direction:rtl]" : ""}`}>
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
        <div className={`mt-6 flex flex-col gap-3 text-sm text-[#6f847d] sm:flex-row sm:items-center sm:justify-between ${isRTL ? "sm:flex-row-reverse" : ""}`}>
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
          eyebrow={language === "ru" ? "Эксперты" : language === "ar" ? "الخبراء" : language === "kir" ? "Экспертлар" : language === "lat" ? "Ekspertlar" : "Experts"}
          title={language === "ru" ? "Selected collaborating experts" : language === "ar" ? "Selected collaborating experts" : language === "kir" ? "Танланган ҳамкор экспертлар" : language === "lat" ? "Tanlangan hamkor ekspertlar" : "Selected collaborating experts"}
          description={language === "ru" ? "Profiles shown in a light, elegant format to strengthen trust and authority." : language === "ar" ? "Profiles shown in a light, elegant format to strengthen trust and authority." : language === "kir" ? "Ишонч ва нуфузни кучайтириш учун енгил ва нафис форматда тақдим этилган профиллар." : language === "lat" ? "Ishonch va nufuzni kuchaytirish uchun yengil va nafis formatda taqdim etilgan profillar." : "Profiles shown in a light, elegant format to strengthen trust and authority."}
          isRTL={isRTL}
        />
        <Button variant="outline" className="rounded-full border-[#cdbb91] text-[#12382f] hover:bg-[#f5efe1]" onClick={() => setCurrentPage("network")}>
          {language === "ru" ? "Все эксперты" : language === "ar" ? "جميع الخبراء" : language === "kir" ? "Барча экспертлар" : language === "lat" ? "Barcha ekspertlar" : "View all"}
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
                    {language === "ru" ? "Источник профиля" : language === "ar" ? "مصدر الملف" : language === "kir" ? "Профил манбаси" : language === "lat" ? "Profil manbasi" : "Profile Source"} <ChevronRight className={`${isRTL ? "mr-1 rotate-180" : "ml-1"} h-4 w-4`} />
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

function ContactPage({ t, isRTL }) {
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
            <Input placeholder={t.contact.name} className={`rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
            <Input placeholder={t.contact.email} className={`rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
            <Input placeholder={t.contact.phone} className={`rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
            <Input placeholder={t.contact.company} className={`rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
            <Textarea placeholder={t.contact.message} className={`min-h-[140px] rounded-2xl ${isRTL ? "text-right" : "text-left"}`} />
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

function AIChatWidget({ t, language, setCurrentPage, isRTL, chatOpen, setChatOpen }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "assistant", text: t.ai.hello }]);

  React.useEffect(() => {
    setMessages([{ role: "assistant", text: t.ai.hello }]);
    setInput("");
  }, [language, t.ai.hello]);

  function getAnswer(raw) {
    const text = raw.toLowerCase();

    const contains = (arr) => arr.some((k) => text.includes(k));

    const keysets = {
      services: ["xizmat", "service", "услуг", "خدم"],
      islamic: ["islom", "islamic", "ислам", "شرعي", "شريعة"],
      courses: ["kurs", "course", "курс", "دور"],
      investors: ["investor", "инвест", "مستثمر"],
      contact: ["aloqa", "contact", "email", "phone", "bog‘lan", "связ", "контакт", "اتصل", "تواصل"],
      price: ["narx", "price", "cost", "цена", "стоим", "سعر", "تكلف"],
    };

    if (contains(keysets.services)) {
      return {
        text: t.services.items.map((s) => `• ${s.title}: ${s.text}`).join("\n"),
        page: "services",
      };
    }
    if (contains(keysets.islamic)) {
      return {
        text: `${t.principles.description}\n\n${t.principles.items.slice(0, 3).map((x) => `• ${x}`).join("\n")}`,
        page: "islamicFinance",
      };
    }
    if (contains(keysets.courses)) {
      return {
        text: `${t.education.description}\n\n${t.education.cards.map((x) => `• ${x[0]} — ${x[1]}`).join("\n")}`,
        page: "courses",
      };
    }
    if (contains(keysets.investors)) {
      return {
        text: `${t.investors.description}\n\n${t.investors.blocks.map((x) => `• ${x[0]} — ${x[1]}`).join("\n")}`,
        page: "investors",
      };
    }
    if (contains(keysets.contact)) {
      return {
        text: `${t.brand.email}\n${t.brand.phone}\n${t.ai.lead}`,
        page: "contact",
      };
    }
    if (contains(keysets.price)) {
      return {
        text: language === "ru"
          ? "Стоимость зависит от формата услуги, объёма запроса и уровня сопровождения. Для точного расчёта лучше перейти в Contact и отправить краткий запрос."
          : language === "en"
          ? "Pricing depends on the service format, scope of work, and level of support. For an exact quote, please use the Contact page."
          : language === "ar"
          ? "تعتمد الأسعار على نوع الخدمة ونطاق العمل ومستوى المتابعة. للحصول على عرض دقيق، يُفضّل استخدام صفحة التواصل."
          : "Narx xizmat turi, ish hajmi va hamroh bo‘lish darajasiga qarab belgilanadi. Aniq hisob учун Contact bo‘limiga o‘ting.",
        page: "contact",
      };
    }

    return {
      text: language === "ru"
        ? "Я могу помочь по услугам, исламским финансам, курсам, инвесторам и контактам. Задайте вопрос более конкретно."
        : language === "en"
        ? "I can help with services, Islamic finance, courses, investors, and contact information. Please ask a more specific question."
        : language === "ar"
        ? "يمكنني المساعدة في الخدمات والتمويل الإسلامي والدورات والمستثمرين وبيانات التواصل. فضلاً اطرح سؤالك بشكل أدق."
        : "Men xizmatlar, islomiy moliya, kurslar, investorlar va aloqa bo‘yicha yordam bera olaman. Savolni biroz aniqroq yozing.",
      page: null,
    };
  }

  function sendMessage(customText?: string) {
    const text = (customText ?? input).trim();
    if (!text) return;
    const userMsg: ChatMessage = { role: "user", text };
    const answer = getAnswer(text);
    const assistantMsg: ChatMessage = { role: "assistant", text: answer.text, page: answer.page };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setChatOpen(true)}
        className={`fixed bottom-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#12382f] px-5 py-4 text-white shadow-[0_18px_40px_rgba(18,56,47,0.28)] hover:bg-[#0f2f27] ${isRTL ? "left-6" : "right-6"}`}
      >
        <MessageSquare className="h-5 w-5" />
        <span className="font-medium">{t.ai.title}</span>
      </button>

      <AnimatePresence>
        {chatOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-24 z-50 w-[92vw] max-w-[420px] ${isRTL ? "left-6" : "right-6"}`}
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
                <div className="max-h-[420px] space-y-4 overflow-y-auto bg-[#fbfcfb] p-5">
                  {messages.map((message, idx) => (
                    <div key={`${message.role}-${idx}`} className={`flex ${message.role === "user" ? (isRTL ? "justify-start" : "justify-end") : (isRTL ? "justify-end" : "justify-start")}`}>
                      <div className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-7 whitespace-pre-line ${message.role === "user" ? "bg-[#12382f] text-white" : "bg-white text-[#1e3f36] border border-emerald-950/10"}`}>
                        {message.text}
                        {message.page ? (
                          <div className="mt-3">
                            <Button size="sm" variant="outline" className="rounded-full border-[#12382f]/20 text-[#12382f] hover:bg-emerald-50" onClick={() => setCurrentPage(message.page)}>
                              {t.nav.speak}
                            </Button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-emerald-950/10 bg-white p-4">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {t.ai.suggestions.map((s) => (
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
  const [language, setLanguage] = useState<LanguageCode>("kir");
  const [chatOpen, setChatOpen] = useState(false);

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
        return <ContactPage t={t} isRTL={isRTL} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} t={t} isRTL={isRTL} language={language} />;
    }
  }, [currentPage, t, isRTL, language]);

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
      <AIChatWidget t={t} language={language} setCurrentPage={setCurrentPage} isRTL={isRTL} chatOpen={chatOpen} setChatOpen={setChatOpen} />
    </div>
  );
}
