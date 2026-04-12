"use client";

import React, { useMemo, useState } from "react";
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
} from "lucide-react";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
  { code: "ar", label: "AR" },
] as const;

const rtlLanguages = ["ar"];

const dictionary = {
  en: {
    pages: {
      home: "Home",
      about: "About",
      services: "Services",
      islamicFinance: "Islamic Finance",
      courses: "Courses",
      consulting: "Consulting",
      investors: "Investors",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
    },
    nav: { tagline: "Justice · Balance · Trust", speak: "Speak With Us" },
    hero: {
      badge: "Premium ethical finance & advisory brand",
      title: "Finance guided by principle, strategy, and trust.",
      highlight: "principle",
      description:
        "MIZANIA helps individuals, founders, investors, and institutions navigate ethical finance, Islamic finance, education, and consulting with global-level clarity and premium presentation.",
      cta1: "Explore Advisory",
      cta2: "View Courses",
      cards: [
        ["Trust-Centered", "Brand positioning"],
        ["Sharia-Aware", "Financial guidance"],
        ["Global-Level", "Premium presentation"],
      ],
      panelTitle: "A refined platform for ethical growth.",
      panelItems: [
        "Trust-first positioning",
        "Education with substance",
        "Advisory for founders & investors",
      ],
      promise: "Brand Promise",
      promiseText:
        "We do not pursue appearance without substance. MIZANIA is designed to communicate depth, balance, and credibility at every touchpoint.",
    },
    trust: [
      ["Ethical", "Principles-led decisions"],
      ["Islamic", "Finance-aligned expertise"],
      ["Premium", "Global corporate presentation"],
      ["Educational", "Knowledge-driven value"],
    ],
    home: {
      aboutEyebrow: "About the brand",
      aboutTitle: "Built for people who value clarity, integrity, and enduring trust.",
      aboutDescription:
        "MIZANIA is not simply a finance brand. It is a disciplined identity built around justice, balance, education, and principled growth.",
      aboutPoints: [
        "Premium positioning rooted in ethics",
        "Luxury-minimal visual identity",
        "Strong educational and consulting credibility",
        "Suitable for global audiences and serious stakeholders",
      ],
      readStory: "Read Brand Story",
      servicesEyebrow: "Services",
      servicesTitle: "A premium service architecture for ethical growth.",
      servicesDescription:
        "Each offer is positioned to feel sophisticated, strategic, and high-trust.",
      viewAllServices: "View All Services",
      whyEyebrow: "Why MIZANIA",
      whyTitle: "Not loud. Not generic. Distinctly credible.",
      whyDescription:
        "The brand language is intentionally calm and elevated. It reflects confidence without noise, luxury without excess, and expertise without intimidation.",
      whyCards: [
        ["Justice-led identity", "A brand narrative anchored in fairness, balance, and responsibility."],
        ["Premium corporate design", "A visual system suitable for global consulting, finance, and institutional trust."],
        ["Lead generation ready", "Structured CTAs, contact pathways, and conversion-focused page architecture."],
        ["SEO-aware foundation", "Search-friendly headings, semantic sections, and content hierarchy."],
      ],
      principlesEyebrow: "Ethical finance principles",
      principlesTitle: "Principles are not a decorative layer. They are the structure.",
      principlesDescription:
        "MIZANIA’s finance perspective is based on fairness, transparency, accountability, and meaningful value creation.",
      exploreIslamic: "Explore Islamic Finance",
      educationEyebrow: "Educational offers",
      educationTitle: "Knowledge designed for serious growth.",
      educationDescription:
        "Courses, workshops, and premium educational pathways for those who want to understand ethical finance, Islamic finance, and practical strategic thinking with depth.",
      browseCourses: "Browse Courses",
      requestCurriculum: "Request Curriculum",
      educationCards: [
        ["Foundations", "Ethical & Islamic finance principles"],
        ["Executive", "Private workshops for decision-makers"],
        ["Applied", "Case-based practical sessions"],
        ["Premium", "High-trust learning experience"],
      ],
      testimonialsEyebrow: "Testimonials",
      testimonialsTitle: "A reputation shaped by depth, discipline, and trust.",
      testimonialsDescription:
        "These sample endorsements illustrate the tone a premium finance and consulting brand should convey.",
      ctaEyebrow: "Begin the conversation",
      ctaTitle: "Build your next financial step on a stronger foundation.",
      ctaDescription:
        "Whether you seek guidance, education, strategic clarity, or a refined investor-facing presence, MIZANIA offers a premium starting point.",
      requestConsultation: "Request Consultation",
      exploreInvestorPage: "Explore Investor Page",
      leadFormTitle: "Lead Generation Form",
      fullName: "Full name",
      emailAddress: "Email address",
      company: "Company or organization",
      tellUs: "Tell us what you are looking for",
      submitInquiry: "Submit Inquiry",
      faqEyebrow: "Frequently asked questions",
      faqTitle: "Elegant clarity reduces friction and builds confidence.",
      faqDescription:
        "A premium website anticipates questions before they become objections.",
      viewFullFaq: "View Full FAQ",
    },
    services: [
      { title: "Islamic Finance Advisory", text: "Structuring halal financial solutions, reviewing business models, and aligning growth with Sharia-compliant principles." },
      { title: "Education & Courses", text: "Premium learning experiences for entrepreneurs, students, and professionals seeking clarity in finance and ethical decision-making." },
      { title: "Strategic Consulting", text: "Business strategy, financial positioning, offer design, and market direction for founders and growth-stage organizations." },
      { title: "Investor Relations", text: "Trust-centered communication, opportunity framing, and governance-minded presentation for ethical investors." },
    ],
    principles: [
      "Justice before profit",
      "Balance between growth and responsibility",
      "Transparency in structure and communication",
      "Trust as the foundation of every transaction",
      "Knowledge-led financial decisions",
      "Long-term value over short-term gain",
    ],
    testimonials: [
      { name: "Private Investor", role: "Ethical Capital Partner", quote: "MIZANIA combines calm professionalism with rare moral clarity. The brand feels global, disciplined, and genuinely trustworthy." },
      { name: "Founder Client", role: "SME Business Owner", quote: "What stood out was not only the financial guidance, but the structure, confidence, and balanced thinking behind every recommendation." },
      { name: "Course Participant", role: "Finance Learner", quote: "The learning experience felt premium and practical. Complex topics became clear without losing depth or integrity." },
    ],
    faqs: [
      { q: "What does MIZANIA specialize in?", a: "MIZANIA focuses on ethical finance, Islamic finance guidance, education, strategic consulting, and investor-facing advisory with a premium, trust-led approach." },
      { q: "Who is MIZANIA for?", a: "Entrepreneurs, investors, students, families, institutions, and professionals seeking principled financial clarity and premium advisory support." },
      { q: "Do you offer online courses?", a: "Yes. MIZANIA can present structured courses, workshops, and executive learning paths in ethical finance and Islamic finance-related topics." },
      { q: "Can MIZANIA support businesses and investors directly?", a: "Yes. The consulting and investor sections are designed to support founders, teams, and stakeholders with strategy, communication, and ethical finance alignment." },
    ],
    blogPosts: [
      { title: "What Ethical Finance Means in a Modern Economy", excerpt: "A premium perspective on responsibility, trust, and sustainable value creation in finance.", category: "Ethical Finance" },
      { title: "Islamic Finance Principles for Founders and Investors", excerpt: "A practical introduction to justice-based frameworks for modern business decisions.", category: "Islamic Finance" },
      { title: "Why Trust Is a Strategic Asset", excerpt: "How credibility, transparency, and consistency become long-term business advantages.", category: "Consulting" },
    ],
  },
  ru: {
    pages: { home: "Главная", about: "О бренде", services: "Услуги", islamicFinance: "Исламские финансы", courses: "Курсы", consulting: "Консалтинг", investors: "Инвесторам", blog: "Блог", faq: "FAQ", contact: "Контакты" },
    nav: { tagline: "Справедливость · Баланс · Доверие", speak: "Связаться с нами" },
    hero: {
      badge: "Премиальный бренд этичных финансов и консалтинга",
      title: "Финансы, основанные на принципах, стратегии и доверии.",
      highlight: "принципах",
      description: "MIZANIA помогает частным лицам, основателям, инвесторам и организациям ориентироваться в этичных финансах, исламских финансах, образовании и консалтинге.",
      cta1: "Изучить консалтинг", cta2: "Смотреть курсы",
      cards: [["Доверие", "Позиционирование бренда"], ["Шариат", "Финансовая экспертиза"], ["Глобально", "Премиальная подача"]],
      panelTitle: "Утончённая платформа для этичного роста.",
      panelItems: ["Доверие в основе", "Образование с глубиной", "Консалтинг для основателей и инвесторов"],
      promise: "Обещание бренда",
      promiseText: "MIZANIA создана, чтобы транслировать глубину, баланс и доверие в каждой точке контакта.",
    },
    trust: [["Этично", "Решения на основе принципов"], ["Исламски", "Экспертиза в исламских финансах"], ["Премиально", "Глобальный корпоративный стиль"], ["Образовательно", "Ценность через знания"]],
    home: {
      aboutEyebrow: "О бренде", aboutTitle: "Создано для людей, которые ценят ясность, целостность и устойчивое доверие.", aboutDescription: "MIZANIA — это дисциплинированная идентичность, построенная вокруг справедливости, баланса, образования и принципиального роста.",
      aboutPoints: ["Премиальное позиционирование на основе этики", "Минималистичная люксовая визуальная идентичность", "Сильная образовательная и консалтинговая экспертиза", "Подходит для глобальной аудитории"],
      readStory: "История бренда", servicesEyebrow: "Услуги", servicesTitle: "Премиальная архитектура услуг для этичного роста.", servicesDescription: "Каждое предложение выстроено так, чтобы выглядеть изысканно, стратегично и внушать доверие.", viewAllServices: "Все услуги",
      whyEyebrow: "Почему MIZANIA", whyTitle: "Без шума. Без шаблонности. С убедительной репутацией.", whyDescription: "Язык бренда намеренно спокоен и возвышен.", whyCards: [["Идентичность справедливости", "Бренд строится вокруг справедливости, баланса и ответственности."], ["Премиальный корпоративный дизайн", "Визуальная система для глобального консалтинга, финансов и институционального доверия."], ["Готовность к лидам", "Структурированные CTA и логика конверсии."], ["SEO-основа", "Иерархия контента и поисково-дружественная структура."]],
      principlesEyebrow: "Принципы этичных финансов", principlesTitle: "Принципы — это не декор. Это сама конструкция.", principlesDescription: "Подход MIZANIA к финансам основан на справедливости, прозрачности и ответственности.", exploreIslamic: "Изучить исламские финансы",
      educationEyebrow: "Образовательные предложения", educationTitle: "Знания, созданные для серьёзного роста.", educationDescription: "Курсы, воркшопы и премиальные образовательные программы.", browseCourses: "Смотреть курсы", requestCurriculum: "Запросить программу", educationCards: [["База", "Принципы этичных и исламских финансов"], ["Executive", "Закрытые воркшопы для принимающих решения"], ["Практика", "Кейсы и прикладные сессии"], ["Премиум", "Высокий уровень образовательного опыта"]],
      testimonialsEyebrow: "Отзывы", testimonialsTitle: "Репутация, основанная на глубине, дисциплине и доверии.", testimonialsDescription: "Эти примеры отзывов передают тон премиального бренда.",
      ctaEyebrow: "Начните диалог", ctaTitle: "Постройте следующий финансовый шаг на более сильной основе.", ctaDescription: "MIZANIA предлагает премиальную точку входа.", requestConsultation: "Запросить консультацию", exploreInvestorPage: "Раздел для инвесторов",
      leadFormTitle: "Форма заявки", fullName: "Полное имя", emailAddress: "Электронная почта", company: "Компания или организация", tellUs: "Опишите ваш запрос", submitInquiry: "Отправить заявку",
      faqEyebrow: "Часто задаваемые вопросы", faqTitle: "Ясность снижает барьеры и усиливает доверие.", faqDescription: "Премиальный сайт заранее отвечает на вопросы.", viewFullFaq: "Смотреть все FAQ",
    },
    services: [
      { title: "Консалтинг по исламским финансам", text: "Структурирование халяльных финансовых решений и адаптация роста к шариатским принципам." },
      { title: "Образование и курсы", text: "Премиальное обучение для предпринимателей, студентов и специалистов." },
      { title: "Стратегический консалтинг", text: "Бизнес-стратегия, позиционирование, упаковка предложений и развитие." },
      { title: "Работа с инвесторами", text: "Коммуникация, основанная на доверии, и грамотная подача возможностей." },
    ],
    principles: ["Справедливость выше прибыли", "Баланс между ростом и ответственностью", "Прозрачность структуры и коммуникации", "Доверие как основа каждой сделки", "Финансовые решения, основанные на знаниях", "Долгосрочная ценность вместо краткосрочной выгоды"],
    testimonials: [
      { name: "Частный инвестор", role: "Партнёр по этичному капиталу", quote: "MIZANIA сочетает спокойный профессионализм с редкой моральной ясностью." },
      { name: "Клиент-основатель", role: "Владелец SME", quote: "Впечатлили не только финансовые рекомендации, но и структура и уверенность." },
      { name: "Участник курса", role: "Слушатель", quote: "Обучение выглядело премиально и практично." },
    ],
    faqs: [
      { q: "На чём специализируется MIZANIA?", a: "MIZANIA специализируется на этичных финансах, исламских финансах, образовании и стратегическом консалтинге." },
      { q: "Для кого создана MIZANIA?", a: "Для предпринимателей, инвесторов, студентов и организаций." },
      { q: "Есть ли онлайн-курсы?", a: "Да. MIZANIA может предлагать структурированные курсы и воркшопы." },
      { q: "Может ли MIZANIA работать с бизнесом и инвесторами напрямую?", a: "Да. Разделы консалтинга и инвесторов созданы именно для этого." },
    ],
    blogPosts: [
      { title: "Что такое этичные финансы в современной экономике", excerpt: "Премиальный взгляд на ответственность и устойчивое создание ценности.", category: "Этичные финансы" },
      { title: "Принципы исламских финансов для основателей и инвесторов", excerpt: "Практичное введение в модели, основанные на справедливости.", category: "Исламские финансы" },
      { title: "Почему доверие — это стратегический актив", excerpt: "Как прозрачность и последовательность становятся долгосрочным преимуществом.", category: "Консалтинг" },
    ],
  },
  uz: {
    pages: { home: "Bosh sahifa", about: "Biz haqimizda", services: "Xizmatlar", islamicFinance: "Islomiy moliya", courses: "Kurslar", consulting: "Konsalting", investors: "Investorlar", blog: "Blog", faq: "FAQ", contact: "Aloqa" },
    nav: { tagline: "Adolat · Muvozanat · Ishonch", speak: "Bog‘lanish" },
    hero: {
      badge: "Premium etik moliya va konsalting brendi",
      title: "Tamoyil, strategiya va ishonchga tayangan moliya.",
      highlight: "Tamoyil",
      description: "MIZANIA shaxslar, asoschilar, investorlar va tashkilotlarga etik moliya, islomiy moliya, ta’lim va konsalting yo‘nalishlarida yo‘l ko‘rsatadi.",
      cta1: "Konsaltingni ko‘rish", cta2: "Kurslarni ko‘rish",
      cards: [["Ishonchga tayangan", "Brend pozitsiyasi"], ["Shariatga mos", "Moliyaviy yo‘nalish"], ["Global daraja", "Premium taqdimot"]],
      panelTitle: "Etik o‘sish uchun nafis platforma.",
      panelItems: ["Ishonchga asoslangan pozitsiya", "Mazmunli ta’lim", "Asoschilar va investorlar uchun maslahat"],
      promise: "Brend va’dasi",
      promiseText: "MIZANIA har bir nuqtada chuqurlik, muvozanat va ishonchni namoyon etish uchun yaratilgan.",
    },
    trust: [["Etik", "Tamoyilga asoslangan qarorlar"], ["Islomiy", "Moliyaviy moslik va ekspertiza"], ["Premium", "Global korporativ ko‘rinish"], ["Ta’lim", "Bilimga asoslangan qiymat"]],
    home: {
      aboutEyebrow: "Brend haqida", aboutTitle: "Aniqlik, halollik va uzoq muddatli ishonchni qadrlaydiganlar uchun yaratilgan.", aboutDescription: "MIZANIA adolat, muvozanat, ta’lim va tamoyilli o‘sishga qurilgan identitetdir.",
      aboutPoints: ["Etikaga asoslangan premium pozitsiya", "Luxury-minimal vizual identitet", "Kuchli ta’lim va konsalting ishonchliligi", "Global auditoriya uchun mos"],
      readStory: "Brend hikoyasi", servicesEyebrow: "Xizmatlar", servicesTitle: "Etik o‘sish uchun premium xizmat arxitekturasi.", servicesDescription: "Har bir taklif nafis, strategik va yuqori ishonch uyg‘otadigan tarzda qurilgan.", viewAllServices: "Barcha xizmatlar",
      whyEyebrow: "Nega MIZANIA", whyTitle: "Shovqinsiz. Shablonsiz. Ishonchli va ajralib turuvchi.", whyDescription: "Brend tili ataylab sokin va yuqori darajada qurilgan.", whyCards: [["Adolatga tayangan identitet", "Brend hikoyasi adolat, muvozanat va mas’uliyatga qurilgan."], ["Premium korporativ dizayn", "Global konsalting, moliya va institutsional ishonch uchun mos vizual tizim."], ["Lid yig‘ishga tayyor", "CTA va aloqa nuqtalari."], ["SEO tayyor asos", "Qidiruv uchun qulay sarlavhalar va kontent iyerarxiyasi."]],
      principlesEyebrow: "Etik moliya tamoyillari", principlesTitle: "Tamoyillar bezak emas. Ular butun tuzilmaning o‘zi.", principlesDescription: "MIZANIAning moliyaga qarashi adolat, shaffoflik va javobgarlikka tayangan.", exploreIslamic: "Islomiy moliyani ko‘rish",
      educationEyebrow: "Ta’lim takliflari", educationTitle: "Jiddiy o‘sish uchun yaratilgan bilim.", educationDescription: "Etik moliya va islomiy moliyani chuqur tushunishni istaganlar uchun kurslar va workshoplar.", browseCourses: "Kurslarni ko‘rish", requestCurriculum: "Dastur so‘rash", educationCards: [["Asoslar", "Etik va islomiy moliya tamoyillari"], ["Executive", "Qaror qabul qiluvchilar uchun yopiq workshoplar"], ["Amaliy", "Keyslar asosidagi mashg‘ulotlar"], ["Premium", "Yuqori ishonchli ta’lim tajribasi"]],
      testimonialsEyebrow: "Fikrlar", testimonialsTitle: "Chuqurlik, intizom va ishonch bilan shakllangan obro‘.", testimonialsDescription: "Ushbu namunaviy fikrlar premium brend ohangini ko‘rsatadi.",
      ctaEyebrow: "Suhbatni boshlang", ctaTitle: "Keyingi moliyaviy qadamingizni kuchliroq asosda quring.", ctaDescription: "MIZANIA kuchli boshlanish nuqtasini beradi.", requestConsultation: "Konsultatsiya so‘rash", exploreInvestorPage: "Investorlar sahifasi",
      leadFormTitle: "Lead generation forma", fullName: "To‘liq ism", emailAddress: "Email manzil", company: "Kompaniya yoki tashkilot", tellUs: "Nimani izlayotganingizni yozing", submitInquiry: "So‘rov yuborish",
      faqEyebrow: "Ko‘p so‘raladigan savollar", faqTitle: "Aniqlik ishonchni oshiradi va to‘siqlarni kamaytiradi.", faqDescription: "Premium sayt savollarga oldindan javob beradi.", viewFullFaq: "To‘liq FAQ",
    },
    services: [
      { title: "Islomiy moliya maslahati", text: "Halol moliyaviy yechimlarni tuzish va o‘sishni shariat tamoyillariga moslashtirish." },
      { title: "Ta’lim va kurslar", text: "Tadbirkorlar, talabalar va mutaxassislar uchun premium ta’lim tajribasi." },
      { title: "Strategik konsalting", text: "Biznes strategiyasi, pozitsiyalash va o‘sish yo‘nalishi." },
      { title: "Investorlar bilan ishlash", text: "Ishonchga asoslangan kommunikatsiya va imkoniyatlarni to‘g‘ri taqdim etish." },
    ],
    principles: ["Foydadan oldin adolat", "O‘sish va mas’uliyat o‘rtasida muvozanat", "Tuzilma va kommunikatsiyada shaffoflik", "Har bir bitimning asosi — ishonch", "Bilimga tayangan moliyaviy qarorlar", "Qisqa muddatli foydadan ko‘ra uzoq muddatli qiymat"],
    testimonials: [
      { name: "Xususiy investor", role: "Etik kapital hamkori", quote: "MIZANIA sokin professionallikni ma’naviy aniqlik bilan uyg‘unlashtiradi." },
      { name: "Asoschi mijoz", role: "SME biznes egasi", quote: "Tartib, ishonch va muvozanat ta’sir qildi." },
      { name: "Kurs ishtirokchisi", role: "Tinglovchi", quote: "Ta’lim premium va amaliy tuyuldi." },
    ],
    faqs: [
      { q: "MIZANIA nimaga ixtisoslashgan?", a: "MIZANIA etik moliya, islomiy moliya, ta’lim va strategik konsalting yo‘nalishlariga ixtisoslashgan." },
      { q: "MIZANIA kimlar uchun?", a: "Tadbirkorlar, investorlar, talabalar va tashkilotlar uchun." },
      { q: "Onlayn kurslar bormi?", a: "Ha. MIZANIA tuzilgan kurslar va workshoplarni taqdim eta oladi." },
      { q: "MIZANIA biznes va investorlar bilan to‘g‘ridan-to‘g‘ri ishlaydimi?", a: "Ha. Konsalting va investorlar bo‘limlari aynan shu maqsadda yaratilgan." },
    ],
    blogPosts: [
      { title: "Zamonaviy iqtisodda etik moliya nimani anglatadi", excerpt: "Mas’uliyat, ishonch va barqaror qiymat yaratish ҳақида premium qarash.", category: "Etik moliya" },
      { title: "Asoschilar va investorlar uchun islomiy moliya tamoyillari", excerpt: "Adolatga tayangan moliyaviy yondashuvlarga amaliy kirish.", category: "Islomiy moliya" },
      { title: "Nega ishonch strategik aktiv ҳисобланади", excerpt: "Shaffoflik va izchillik qanday ustunlikka aylanadi.", category: "Konsalting" },
    ],
  },
  ar: {
    pages: { home: "الرئيسية", about: "من نحن", services: "الخدمات", islamicFinance: "التمويل الإسلامي", courses: "الدورات", consulting: "الاستشارات", investors: "للمستثمرين", blog: "المدونة", faq: "الأسئلة الشائعة", contact: "اتصل بنا" },
    nav: { tagline: "العدالة · التوازن · الثقة", speak: "تواصل معنا" },
    hero: {
      badge: "علامة فاخرة للتمويل الأخلاقي والاستشارات",
      title: "تمويل يرتكز على المبدأ والاستراتيجية والثقة.",
      highlight: "المبدأ",
      description: "تساعد MIZANIA الأفراد والمؤسسين والمستثمرين والمؤسسات على فهم التمويل الأخلاقي والتمويل الإسلامي والتعليم والاستشارات.",
      cta1: "استكشف الاستشارات", cta2: "عرض الدورات",
      cards: [["مرتكز على الثقة", "تموضع العلامة"], ["متوافق مع الشريعة", "توجيه مالي"], ["مستوى عالمي", "عرض فاخر"]],
      panelTitle: "منصة راقية للنمو الأخلاقي.",
      panelItems: ["تموضع قائم على الثقة", "تعليم ذو مضمون", "استشارات للمؤسسين والمستثمرين"],
      promise: "وعد العلامة",
      promiseText: "صُممت MIZANIA لتعكس العمق والتوازن والمصداقية في كل نقطة تواصل.",
    },
    trust: [["أخلاقي", "قرارات مبنية على المبادئ"], ["إسلامي", "خبرة متوافقة مع التمويل الإسلامي"], ["فاخر", "مظهر مؤسسي عالمي"], ["تعليمي", "قيمة مبنية على المعرفة"]],
    home: {
      aboutEyebrow: "عن العلامة", aboutTitle: "صُممت لمن يقدّر الوضوح والنزاهة والثقة المستدامة.", aboutDescription: "MIZANIA هوية منضبطة مبنية على العدالة والتوازن والتعليم والنمو القائم على المبادئ.",
      aboutPoints: ["تموضع فاخر قائم على الأخلاق", "هوية بصرية فاخرة وبسيطة", "مصداقية قوية في التعليم والاستشارات", "مناسبة لجمهور عالمي"],
      readStory: "قصة العلامة", servicesEyebrow: "الخدمات", servicesTitle: "هيكل خدمات فاخر للنمو الأخلاقي.", servicesDescription: "كل خدمة مصممة لتبدو راقية واستراتيجية وعالية الثقة.", viewAllServices: "عرض جميع الخدمات",
      whyEyebrow: "لماذا MIZANIA", whyTitle: "ليست صاخبة ولا نمطية، بل موثوقة بتميز.", whyDescription: "لغة العلامة هادئة وراقية عمداً.", whyCards: [["هوية قائمة على العدالة", "سرد العلامة مبني على العدالة والتوازن والمسؤولية."], ["تصميم مؤسسي فاخر", "نظام بصري مناسب للاستشارات العالمية والتمويل والثقة المؤسسية."], ["جاهزية لتوليد العملاء", "دعوات إجراء منظمة ونقاط تواصل."], ["أساس صديق لمحركات البحث", "عناوين وهيكلية محتوى تدعم الظهور في البحث."]],
      principlesEyebrow: "مبادئ التمويل الأخلاقي", principlesTitle: "المبادئ ليست طبقة تجميلية، بل هي البنية نفسها.", principlesDescription: "منظور MIZANIA المالي قائم على العدالة والشفافية والمسؤولية.", exploreIslamic: "استكشاف التمويل الإسلامي",
      educationEyebrow: "العروض التعليمية", educationTitle: "معرفة صُممت لنمو جاد.", educationDescription: "دورات وورش وبرامج تعليمية فاخرة لمن يريد فهماً أعمق.", browseCourses: "تصفح الدورات", requestCurriculum: "طلب المنهج", educationCards: [["الأساسيات", "مبادئ التمويل الأخلاقي والإسلامي"], ["تنفيذي", "ورش خاصة لصنّاع القرار"], ["تطبيقي", "جلسات قائمة على الحالات العملية"], ["فاخر", "تجربة تعليمية عالية الثقة"]],
      testimonialsEyebrow: "الشهادات", testimonialsTitle: "سمعة تتشكل بالعمق والانضباط والثقة.", testimonialsDescription: "هذه الشهادات النموذجية تعكس نبرة علامة فاخرة.",
      ctaEyebrow: "ابدأ الحوار", ctaTitle: "ابنِ خطوتك المالية القادمة على أساس أقوى.", ctaDescription: "تقدم MIZANIA نقطة بداية راقية.", requestConsultation: "طلب استشارة", exploreInvestorPage: "صفحة المستثمرين",
      leadFormTitle: "نموذج التواصل", fullName: "الاسم الكامل", emailAddress: "البريد الإلكتروني", company: "الشركة أو المؤسسة", tellUs: "أخبرنا بما تبحث عنه", submitInquiry: "إرسال الطلب",
      faqEyebrow: "الأسئلة الشائعة", faqTitle: "الوضوح الراقي يخفف التردد ويعزز الثقة.", faqDescription: "الموقع الفاخر يجيب عن الأسئلة قبل أن تتحول إلى اعتراضات.", viewFullFaq: "عرض جميع الأسئلة",
    },
    services: [
      { title: "استشارات التمويل الإسلامي", text: "هيكلة حلول مالية حلال ومواءمة النمو مع مبادئ الشريعة." },
      { title: "التعليم والدورات", text: "تجارب تعليمية فاخرة لرواد الأعمال والطلاب والمهنيين." },
      { title: "الاستشارات الاستراتيجية", text: "استراتيجية الأعمال والتموضع وتصميم العروض وتوجيه النمو." },
      { title: "علاقات المستثمرين", text: "تواصل قائم على الثقة وتقديم مهني للفرص أمام المستثمرين." },
    ],
    principles: ["العدالة قبل الربح", "التوازن بين النمو والمسؤولية", "الشفافية في الهيكل والتواصل", "الثقة أساس كل معاملة", "قرارات مالية قائمة على المعرفة", "قيمة طويلة الأجل بدل المكاسب السريعة"],
    testimonials: [
      { name: "مستثمر خاص", role: "شريك رأس مال أخلاقي", quote: "تجمع MIZANIA بين المهنية الهادئة والوضوح الأخلاقي." },
      { name: "عميل مؤسس", role: "صاحب شركة صغيرة", quote: "ما لفتني هو البنية والثقة والتوازن في كل توصية." },
      { name: "مشارك في دورة", role: "متعلم", quote: "كانت التجربة التعليمية راقية وعملية." },
    ],
    faqs: [
      { q: "في ماذا تتخصص MIZANIA؟", a: "تركز MIZANIA على التمويل الأخلاقي والتمويل الإسلامي والتعليم والاستشارات الاستراتيجية." },
      { q: "لمن صُممت MIZANIA؟", a: "لرواد الأعمال والمستثمرين والطلاب والمؤسسات." },
      { q: "هل تقدمون دورات عبر الإنترنت؟", a: "نعم، يمكن لـ MIZANIA تقديم دورات وورش وبرامج تعليمية منظمة." },
      { q: "هل تدعم MIZANIA الشركات والمستثمرين مباشرة؟", a: "نعم، تم تصميم أقسام الاستشارات والمستثمرين لهذا الغرض." },
    ],
    blogPosts: [
      { title: "ماذا يعني التمويل الأخلاقي في الاقتصاد الحديث؟", excerpt: "رؤية فاخرة للمسؤولية والثقة وصناعة القيمة المستدامة.", category: "التمويل الأخلاقي" },
      { title: "مبادئ التمويل الإسلامي للمؤسسين والمستثمرين", excerpt: "مقدمة عملية إلى الأطر القائمة على العدالة.", category: "التمويل الإسلامي" },
      { title: "لماذا تعد الثقة أصلاً استراتيجياً؟", excerpt: "كيف تتحول المصداقية والشفافية إلى ميزة طويلة المدى.", category: "الاستشارات" },
    ],
  },
} as const;

const serviceIcons = [Landmark, GraduationCap, Briefcase, HandCoins];
const genericIcons = {
  about: [Scale, ShieldCheck, Users],
  islamicFinance: [Scale, Landmark, BookOpen],
  courses: [GraduationCap, Users, BadgeCheck],
  consulting: [Briefcase, ShieldCheck, HandCoins],
  investors: [HandCoins, Landmark, ShieldCheck],
};

function cn(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function Btn({ children, onClick, variant = "solid", className = "" }: { children: React.ReactNode; onClick?: () => void; variant?: "solid" | "outline"; className?: string; }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-6 py-3 text-sm md:text-base transition font-medium",
        variant === "solid"
          ? "bg-[#12382f] text-white hover:bg-[#0f2f27]"
          : "border border-[#12382f]/20 text-[#12382f] hover:bg-emerald-50",
        className
      )}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-[2rem] border border-emerald-950/10 bg-white shadow-sm", className)}>{children}</div>;
}

function Input({ placeholder, className = "" }: { placeholder: string; className?: string }) {
  return <input placeholder={placeholder} className={cn("w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200", className)} />;
}

function Textarea({ placeholder, className = "" }: { placeholder: string; className?: string }) {
  return <textarea placeholder={placeholder} className={cn("w-full min-h-[120px] rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200", className)} />;
}

function SectionTitle({ eyebrow, title, description, isRTL = false }: { eyebrow: string; title: string; description?: string; isRTL?: boolean; }) {
  return (
    <div className={cn("max-w-3xl space-y-4", isRTL && "text-right")}>
      <div className="text-xs sm:text-sm uppercase tracking-[0.28em] text-emerald-800/70 font-medium">{eyebrow}</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0e2c24] leading-tight">{title}</h2>
      {description && <p className="text-base sm:text-lg text-[#24463c]/80 leading-8">{description}</p>}
    </div>
  );
}

function GoldDivider() {
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />;
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home");
  const [language, setLanguage] = useState<"en" | "ru" | "uz" | "ar">("en");
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = dictionary[language];
  const isRTL = rtlLanguages.includes(language);
  const dir = isRTL ? "rtl" : "ltr";

  const pageLabels = [
    { key: "home", label: t.pages.home },
    { key: "about", label: t.pages.about },
    { key: "services", label: t.pages.services },
    { key: "islamicFinance", label: t.pages.islamicFinance },
    { key: "courses", label: t.pages.courses },
    { key: "consulting", label: t.pages.consulting },
    { key: "investors", label: t.pages.investors },
    { key: "blog", label: t.pages.blog },
    { key: "faq", label: t.pages.faq },
    { key: "contact", label: t.pages.contact },
  ];

  const GenericPage = ({ eyebrow, title, description, blocks, ctaLabel, ctaAction, icons }: any) => (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionTitle eyebrow={eyebrow} title={title} description={description} isRTL={isRTL} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blocks.map((block: any, idx: number) => {
          const Icon = icons?.[idx] || Scale;
          return (
            <Card key={block.title}>
              <div className="p-7">
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 text-[#12382f]"><Icon className="h-6 w-6" /></div>
                <div className={cn("text-xl font-semibold text-[#12382f]", isRTL && "text-right")}>{block.title}</div>
                <div className={cn("mt-3 text-[#566e66] leading-7", isRTL && "text-right")}>{block.text}</div>
              </div>
            </Card>
          );
        })}
      </div>
      {ctaLabel && <div className={cn("mt-10", isRTL && "text-right")}><Btn onClick={ctaAction}>{ctaLabel}</Btn></div>}
    </section>
  );

  const content = useMemo(() => {
    if (currentPage === "home") {
      const highlight = t.hero.highlight;
      const parts = t.hero.title.split(highlight);
      return (
        <>
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,120,88,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(194,153,77,0.14),transparent_28%)]" />
            <div className={cn("mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28", isRTL && "lg:[direction:rtl]")}>
              <div className={cn("relative z-10 space-y-8", isRTL && "text-right")}>
                <div className={cn("inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/80 px-4 py-2 text-sm text-[#7b6a3d] shadow-sm", isRTL && "flex-row-reverse")}>
                  <BadgeCheck className="h-4 w-4" />{t.hero.badge}
                </div>
                <div className="space-y-6">
                  <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#0d2d25] sm:text-6xl lg:text-7xl">
                    {parts[0]}<span className="text-[#7e6a39]">{highlight}</span>{parts[1] || ""}
                  </h1>
                  <p className="max-w-xl text-lg leading-8 text-[#27473e]/85 sm:text-xl">{t.hero.description}</p>
                </div>
                <div className={cn("flex flex-col gap-4 sm:flex-row", isRTL && "sm:flex-row-reverse")}>
                  <Btn onClick={() => setCurrentPage("consulting")}>{t.hero.cta1} <ArrowRight className={cn("inline h-4 w-4", !isRTL ? "ml-2" : "mr-2 rotate-180")} /></Btn>
                  <Btn variant="outline" onClick={() => setCurrentPage("courses")}>{t.hero.cta2}</Btn>
                </div>
                <div className="grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                  {t.hero.cards.map(([title, subtitle]) => (
                    <div key={title} className="rounded-3xl border border-emerald-950/10 bg-white/75 p-4 shadow-sm backdrop-blur">
                      <div className="text-lg font-semibold text-[#0f3028]">{title}</div>
                      <div className="mt-1 text-sm text-[#486158]">{subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10">
                <div className="rounded-[2rem] border border-emerald-950/10 bg-white/90 p-4 shadow-[0_30px_100px_rgba(10,34,28,0.12)] backdrop-blur-xl sm:p-6">
                  <div className="min-h-[520px] rounded-[1.75rem] bg-[#0f3028] p-6 text-white sm:p-8 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className={cn("flex items-center justify-between", isRTL && "flex-row-reverse")}>
                        <div className={cn(isRTL && "text-right")}>
                          <div className="text-sm uppercase tracking-[0.22em] text-white/65">MIZANIA</div>
                          <div className="mt-2 text-2xl sm:text-3xl font-medium leading-tight">{t.hero.panelTitle}</div>
                        </div>
                        <Scale className="h-10 w-10 text-amber-300" />
                      </div>
                      <GoldDivider />
                      <div className="grid gap-4">
                        {[ShieldCheck, BookOpen, Users].map((Icon, index) => (
                          <div key={t.hero.panelItems[index]} className={cn("flex items-center gap-4 rounded-2xl bg-white/5 p-4 border border-white/10", isRTL && "flex-row-reverse text-right")}>
                            <div className="rounded-2xl bg-white/10 p-3"><Icon className="h-5 w-5 text-amber-300" /></div>
                            <div className="text-base text-white/90">{t.hero.panelItems[index]}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={cn("mt-8 rounded-3xl border border-amber-300/25 bg-white/5 p-5", isRTL && "text-right")}>
                      <div className="text-sm uppercase tracking-[0.18em] text-amber-200/80">{t.hero.promise}</div>
                      <p className="mt-3 text-lg leading-8 text-white/90">{t.hero.promiseText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-sm sm:grid-cols-4 lg:p-8">
              {t.trust.map(([title, subtitle]) => (
                <div key={title} className={cn("space-y-2 rounded-2xl p-2", isRTL && "text-right")}>
                  <div className="text-2xl font-semibold text-[#12382f]">{title}</div>
                  <div className="text-sm text-[#526a62]">{subtitle}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className={cn("grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start", isRTL && "lg:[direction:rtl]")}>
              <SectionTitle eyebrow={t.home.aboutEyebrow} title={t.home.aboutTitle} description={t.home.aboutDescription} isRTL={isRTL} />
              <Card>
                <div className="p-8 space-y-5">
                  {t.home.aboutPoints.map((item) => (
                    <div key={item} className={cn("flex items-start gap-3 text-[#183e34]", isRTL && "flex-row-reverse text-right")}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#7e6a39]" />
                      <span>{item}</span>
                    </div>
                  ))}
                  <Btn variant="outline" onClick={() => setCurrentPage("about")}>{t.home.readStory} <ChevronRight className={cn("inline h-4 w-4", !isRTL ? "ml-1" : "mr-1 rotate-180")} /></Btn>
                </div>
              </Card>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className={cn("flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between", isRTL && "lg:flex-row-reverse")}>
              <SectionTitle eyebrow={t.home.servicesEyebrow} title={t.home.servicesTitle} description={t.home.servicesDescription} isRTL={isRTL} />
              <Btn variant="outline" onClick={() => setCurrentPage("services")}>{t.home.viewAllServices}</Btn>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {t.services.map((service, idx) => {
                const Icon = serviceIcons[idx];
                return (
                  <Card key={service.title}>
                    <div className="p-7">
                      <div className="mb-5 inline-flex rounded-2xl bg-emerald-50 p-3 text-[#12382f]"><Icon className="h-6 w-6" /></div>
                      <h3 className={cn("text-xl font-semibold text-[#103128]", isRTL && "text-right")}>{service.title}</h3>
                      <p className={cn("mt-3 text-[#4c665d] leading-7", isRTL && "text-right")}>{service.text}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="border-y border-emerald-950/8 bg-[#f8fbfa]">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <SectionTitle eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} description={t.home.whyDescription} isRTL={isRTL} />
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {t.home.whyCards.map(([title, text]) => (
                  <div key={title} className={cn("rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-sm", isRTL && "text-right")}>
                    <div className="text-lg font-semibold text-[#12382f]">{title}</div>
                    <p className="mt-3 text-[#516962] leading-7">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className={cn("grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 items-start", isRTL && "lg:[direction:rtl]")}>
              <SectionTitle eyebrow={t.home.principlesEyebrow} title={t.home.principlesTitle} description={t.home.principlesDescription} isRTL={isRTL} />
              <Card>
                <div className="p-8">
                  <div className="grid gap-4">
                    {t.principles.map((item) => (
                      <div key={item} className={cn("flex items-start gap-3 rounded-2xl border border-emerald-950/10 p-4", isRTL && "flex-row-reverse text-right")}>
                        <Scale className="mt-0.5 h-5 w-5 text-[#7e6a39]" />
                        <div className="text-[#173d33]">{item}</div>
                      </div>
                    ))}
                  </div>
                  <Btn className="mt-6" onClick={() => setCurrentPage("islamicFinance")}>{t.home.exploreIslamic}</Btn>
                </div>
              </Card>
            </div>
          </section>

          <section className="bg-[#0f3028] text-white">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className={cn("grid gap-10 lg:grid-cols-2 lg:gap-16 items-center", isRTL && "lg:[direction:rtl]")}>
                <div className={cn(isRTL && "text-right")}>
                  <div className="text-sm uppercase tracking-[0.28em] text-amber-300/80">{t.home.educationEyebrow}</div>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t.home.educationTitle}</h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{t.home.educationDescription}</p>
                  <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row", isRTL && "sm:flex-row-reverse")}>
                    <button onClick={() => setCurrentPage("courses")} className="rounded-full bg-white px-6 py-3 text-[#12382f] hover:bg-white/90">{t.home.browseCourses}</button>
                    <button onClick={() => setCurrentPage("contact")} className="rounded-full border border-white/20 px-6 py-3 hover:bg-white/10">{t.home.requestCurriculum}</button>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {t.home.educationCards.map(([title, text]) => (
                    <div key={title} className={cn("rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm", isRTL && "text-right")}>
                      <div className="text-xl font-semibold text-white">{title}</div>
                      <div className="mt-2 text-white/70 leading-7">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionTitle eyebrow={t.home.testimonialsEyebrow} title={t.home.testimonialsTitle} description={t.home.testimonialsDescription} isRTL={isRTL} />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {t.testimonials.map((item) => (
                <Card key={item.name}>
                  <div className={cn("p-7", isRTL && "text-right")}>
                    <p className="text-[#28483f] leading-8">“{item.quote}”</p>
                    <div className="mt-6">
                      <div className="font-semibold text-[#12382f]">{item.name}</div>
                      <div className="text-sm text-[#677e76]">{item.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
            <div className="rounded-[2.25rem] bg-gradient-to-br from-[#12382f] to-[#0b221c] p-8 text-white shadow-[0_30px_100px_rgba(10,34,28,0.22)] sm:p-12 lg:p-14">
              <div className={cn("grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center", isRTL && "lg:[direction:rtl]")}>
                <div className={cn(isRTL && "text-right")}>
                  <div className="text-sm uppercase tracking-[0.24em] text-amber-300/75">{t.home.ctaEyebrow}</div>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t.home.ctaTitle}</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{t.home.ctaDescription}</p>
                  <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row", isRTL && "sm:flex-row-reverse")}>
                    <button onClick={() => setCurrentPage("contact")} className="rounded-full bg-white px-6 py-3 text-[#12382f] hover:bg-white/90">{t.home.requestConsultation}</button>
                    <button onClick={() => setCurrentPage("investors")} className="rounded-full border border-white/20 px-6 py-3 hover:bg-white/10">{t.home.exploreInvestorPage}</button>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className={cn("text-lg font-medium", isRTL && "text-right")}>{t.home.leadFormTitle}</div>
                  <div className="mt-5 grid gap-4">
                    <Input placeholder={t.home.fullName} className={cn("border-white/10 bg-white text-[#12382f]", isRTL && "text-right")} />
                    <Input placeholder={t.home.emailAddress} className={cn("border-white/10 bg-white text-[#12382f]", isRTL && "text-right")} />
                    <Input placeholder={t.home.company} className={cn("border-white/10 bg-white text-[#12382f]", isRTL && "text-right")} />
                    <Textarea placeholder={t.home.tellUs} className={cn("border-white/10 bg-white text-[#12382f]", isRTL && "text-right")} />
                    <button className="rounded-full bg-[#d9c08d] px-6 py-3 font-medium text-[#12382f] hover:bg-[#ceb57f]">{t.home.submitInquiry}</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className={cn("grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 items-start", isRTL && "lg:[direction:rtl]")}>
              <SectionTitle eyebrow={t.home.faqEyebrow} title={t.home.faqTitle} description={t.home.faqDescription} isRTL={isRTL} />
              <div className="space-y-4">
                {t.faqs.slice(0, 3).map((faq) => (
                  <div key={faq.q} className="rounded-[1.5rem] border border-emerald-950/10 bg-white p-6 shadow-sm">
                    <div className={cn("flex items-start gap-3", isRTL && "flex-row-reverse text-right")}>
                      <CircleHelp className="mt-1 h-5 w-5 text-[#7e6a39]" />
                      <div>
                        <div className="font-semibold text-[#14372f]">{faq.q}</div>
                        <div className="mt-2 text-[#516962] leading-7">{faq.a}</div>
                      </div>
                    </div>
                  </div>
                ))}
                <Btn variant="outline" onClick={() => setCurrentPage("faq")}>{t.home.viewFullFaq}</Btn>
              </div>
            </div>
          </section>
        </>
      );
    }

    if (currentPage === "about") return <GenericPage eyebrow={t.pages.about} title={t.home.aboutTitle} description={t.home.aboutDescription} blocks={[{ title: t.home.aboutPoints[0], text: t.home.aboutPoints[1] }, { title: t.home.aboutPoints[2], text: t.home.aboutPoints[3] }, { title: "MIZANIA", text: t.nav.tagline }]} ctaLabel={t.pages.contact} ctaAction={() => setCurrentPage("contact")} icons={genericIcons.about} />;
    if (currentPage === "services") return <GenericPage eyebrow={t.pages.services} title={t.home.servicesTitle} description={t.home.servicesDescription} blocks={t.services} ctaLabel={t.pages.contact} ctaAction={() => setCurrentPage("contact")} icons={serviceIcons} />;
    if (currentPage === "islamicFinance") return <GenericPage eyebrow={t.pages.islamicFinance} title={t.home.principlesTitle} description={t.home.principlesDescription} blocks={t.principles.map((x) => ({ title: x, text: x }))} ctaLabel={t.pages.contact} ctaAction={() => setCurrentPage("contact")} icons={genericIcons.islamicFinance} />;
    if (currentPage === "courses") return <GenericPage eyebrow={t.pages.courses} title={t.home.educationTitle} description={t.home.educationDescription} blocks={t.home.educationCards.map(([title, text]) => ({ title, text }))} ctaLabel={t.pages.contact} ctaAction={() => setCurrentPage("contact")} icons={genericIcons.courses} />;
    if (currentPage === "consulting") return <GenericPage eyebrow={t.pages.consulting} title={t.home.servicesTitle} description={t.home.servicesDescription} blocks={t.services.slice(0,3)} ctaLabel={t.pages.contact} ctaAction={() => setCurrentPage("contact")} icons={genericIcons.consulting} />;
    if (currentPage === "investors") return <GenericPage eyebrow={t.pages.investors} title={t.home.ctaTitle} description={t.home.ctaDescription} blocks={t.services.slice(1,4)} ctaLabel={t.pages.contact} ctaAction={() => setCurrentPage("contact")} icons={genericIcons.investors} />;
    if (currentPage === "blog") return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionTitle eyebrow={t.pages.blog} title={t.home.whyTitle} description={t.home.whyDescription} isRTL={isRTL} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {t.blogPosts.map((post) => (
            <Card key={post.title}>
              <div className={cn("p-7", isRTL && "text-right")}>
                <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#7b6a3d]">{post.category}</div>
                <div className="mt-4 text-2xl font-semibold leading-tight text-[#12382f]">{post.title}</div>
                <p className="mt-3 text-[#566e66] leading-7">{post.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    );
    if (currentPage === "faq") return (
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionTitle eyebrow={t.pages.faq} title={t.home.faqTitle} description={t.home.faqDescription} isRTL={isRTL} />
        <div className="mt-10 space-y-4">
          {t.faqs.map((faq) => (
            <div key={faq.q} className={cn("rounded-[1.75rem] border border-emerald-950/10 bg-white p-6 shadow-sm", isRTL && "text-right")}>
              <div className="text-lg font-semibold text-[#12382f]">{faq.q}</div>
              <div className="mt-2 text-[#566e66] leading-7">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
    );
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className={cn("grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 items-start", isRTL && "lg:[direction:rtl]")}>
          <div>
            <SectionTitle eyebrow={t.pages.contact} title={t.pages.contact} description="MIZANIA" isRTL={isRTL} />
            <div className={cn("mt-8 space-y-4 text-[#4e665f]", isRTL && "text-right")}>
              <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}><Mail className="h-5 w-5 text-[#7e6a39]" /> mizaniamchj@gmail.com</div>
              <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}><Phone className="h-5 w-5 text-[#7e6a39]" /> +998 90 901 23 73</div>
              <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}><MapPin className="h-5 w-5 text-[#7e6a39]" /> mizania.uz</div>
            </div>
          </div>
          <Card>
            <div className="grid gap-4 p-8">
              <Input placeholder={t.home.fullName} className={cn(isRTL && "text-right")} />
              <Input placeholder={t.home.emailAddress} className={cn(isRTL && "text-right")} />
              <Input placeholder={t.home.company} className={cn(isRTL && "text-right")} />
              <Textarea placeholder={t.home.tellUs} className={cn(isRTL && "text-right")} />
              <Btn>{t.home.submitInquiry}</Btn>
            </div>
          </Card>
        </div>
      </section>
    );
  }, [currentPage, language]);

  return (
    <div dir={dir} className="min-h-screen bg-[#fcfdfc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={cn("flex h-20 items-center justify-between gap-6", isRTL && "flex-row-reverse")}>
            <button className={cn(isRTL ? "text-right" : "text-left")} onClick={() => setCurrentPage("home")}>
              <div className="text-2xl tracking-[0.28em] font-semibold text-[#0f3028]">MIZANIA</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#7b6a3d]">{t.nav.tagline}</div>
            </button>
            <nav className="hidden xl:flex items-center gap-1 rounded-full border border-emerald-950/10 bg-white/70 p-1 shadow-sm">
              {pageLabels.map((page) => (
                <button key={page.key} onClick={() => setCurrentPage(page.key)} className={cn("rounded-full px-4 py-2 text-sm transition", currentPage === page.key ? "bg-[#12382f] text-white" : "text-[#20453b] hover:bg-emerald-50")}>
                  {page.label}
                </button>
              ))}
            </nav>
            <div className={cn("hidden md:flex items-center gap-3", isRTL && "flex-row-reverse")}>
              <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-950/10 bg-white/70 p-1 shadow-sm">
                <div className="flex items-center gap-2 px-3 text-[#12382f]"><Globe className="h-4 w-4" /></div>
                {languages.map((lang) => (
                  <button key={lang.code} onClick={() => setLanguage(lang.code)} className={cn("rounded-full px-3 py-2 text-xs font-medium transition", language === lang.code ? "bg-[#12382f] text-white" : "text-[#20453b] hover:bg-emerald-50")}>
                    {lang.label}
                  </button>
                ))}
              </div>
              <Btn variant="outline" onClick={() => setCurrentPage("contact")}>{t.nav.speak}</Btn>
            </div>
            <button className="xl:hidden rounded-full border border-emerald-950/10 p-3 text-[#12382f]" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {mobileOpen && (
            <div className="xl:hidden pb-4">
              <div className="grid grid-cols-1 gap-2 rounded-3xl border border-emerald-950/10 bg-white p-3 shadow-lg">
                {pageLabels.map((page) => (
                  <button key={page.key} onClick={() => { setCurrentPage(page.key); setMobileOpen(false); }} className={cn("rounded-2xl px-4 py-3 text-sm", isRTL ? "text-right" : "text-left", currentPage === page.key ? "bg-[#12382f] text-white" : "text-[#20453b] hover:bg-emerald-50")}>
                    {page.label}
                  </button>
                ))}
                <div className="grid grid-cols-4 gap-2 pt-2">
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => setLanguage(lang.code)} className={cn("rounded-2xl px-3 py-2 text-sm", language === lang.code ? "bg-[#12382f] text-white" : "bg-emerald-50 text-[#12382f]")}>{lang.label}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>{content}</main>

      <footer className="border-t border-emerald-950/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className={cn("grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]", isRTL && "lg:[direction:rtl]")}>
            <div className={cn(isRTL && "text-right")}>
              <div className="text-2xl tracking-[0.28em] font-semibold text-[#0f3028]">MIZANIA</div>
              <p className="mt-4 max-w-md text-[#566e66] leading-7">Premium ethical finance, Islamic finance insight, consulting, and education shaped by justice, balance, and trust.</p>
            </div>
            <div className={cn(isRTL && "text-right")}>
              <div className="font-semibold text-[#12382f]">{language === "ru" ? "Страницы" : language === "uz" ? "Sahifalar" : language === "ar" ? "الصفحات" : "Pages"}</div>
              <div className="mt-4 space-y-3 text-[#566e66]">
                {pageLabels.slice(0, 5).map((page) => <button key={page.key} onClick={() => setCurrentPage(page.key)} className="block hover:text-[#12382f]">{page.label}</button>)}
              </div>
            </div>
            <div className={cn(isRTL && "text-right")}>
              <div className="font-semibold text-[#12382f]">{language === "ru" ? "Разделы" : language === "uz" ? "Bo‘limlar" : language === "ar" ? "استكشف" : "Explore"}</div>
              <div className="mt-4 space-y-3 text-[#566e66]">
                {pageLabels.slice(5).map((page) => <button key={page.key} onClick={() => setCurrentPage(page.key)} className="block hover:text-[#12382f]">{page.label}</button>)}
              </div>
            </div>
            <div className={cn(isRTL && "text-right")}>
              <div className="font-semibold text-[#12382f]">{t.pages.contact}</div>
              <div className="mt-4 space-y-4 text-[#566e66]">
                <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}><Mail className="h-4 w-4 text-[#7e6a39]" /> mizaniamchj@gmail.com</div>
                <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}><Phone className="h-4 w-4 text-[#7e6a39]" /> +998 90 901 23 73</div>
                <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}><MapPin className="h-4 w-4 text-[#7e6a39]" /> mizania.uz</div>
              </div>
            </div>
          </div>
          <GoldDivider />
          <div className={cn("mt-6 flex flex-col gap-3 text-sm text-[#6f847d] sm:flex-row sm:items-center sm:justify-between", isRTL && "sm:flex-row-reverse")}>
            <div>© 2026 MIZANIA. All rights reserved.</div>
            <div>Structured for premium trust, modern clarity, and SEO-aware presentation.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
