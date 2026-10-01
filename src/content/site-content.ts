import type { Locale } from "@/lib/i18n/config";
import {
  courseRouteKeys,
  type PageRouteKey,
  type RouteKey,
} from "@/lib/i18n/routing";

type NavigationContent = {
  brandLabel: string;
  primaryNavLabel: string;
  mobilePrimaryNavLabel: string;
  languageNavLabel: string;
  tagline: string;
  primary: PageRouteKey[];
  enrollRoutes: PageRouteKey[];
  ctaLabel: string;
  mobileMenuLabel: string;
  closeMenuLabel: string;
};

type FooterGroup = {
  title: string;
  routeKey: PageRouteKey;
  links: Array<{
    label: string;
    routeKey: PageRouteKey;
    anchor?: string;
  }>;
};

type SiteContent = {
  locale: Locale;
  metadata: {
    title: string;
    description: string;
  };
  navigation: NavigationContent;
  routeLabels: Record<RouteKey, string>;
  footer: {
    intro: string;
    groups: FooterGroup[];
    legalLabel: string;
    navLabel: string;
    coursesTitle: string;
    usefulTitle: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButtonLabel: string;
    contact: {
      title: string;
      phoneLabel: string;
      phone: string;
      emailLabel: string;
      email: string;
    };
  };
};

const enRouteLabels: Record<RouteKey, string> = {
  home: "Home",
  about: "About Us",
  children: "Classes for children",
  gcse: "GCSE courses",
  alevel: "A Level courses",
  adults: "Courses for adults",
  registration: "Registration",
  termDates: "Term dates",
  privacy: "Privacy Policy",
  refund: "Refund Policy",
  safeguarding: "Safeguarding Policy",
};

const ruRouteLabels: Record<RouteKey, string> = {
  home: "Главная",
  about: "О школе",
  children: "Детские занятия",
  gcse: "GCSE",
  alevel: "A Level",
  adults: "Курсы для взрослых",
  registration: "Запись",
  termDates: "Школьный календарь",
  privacy: "Политика конфиденциальности",
  refund: "Политика возврата",
  safeguarding: "Защита детей",
};

function createFooterGroups(
  labels: Record<RouteKey, string>,
  locale: Locale,
): FooterGroup[] {
  const viewPageLabel = locale === "en" ? "View full page" : "Открыть страницу";
  const footerLabels = {
    en: {
      calendar: "Calendar",
      faq: "FAQ",
      mission: "Mission",
      options: "Study options",
      overview: "Overview",
      prices: "Prices",
      register: "Register",
      results: "Results",
      values: "Values",
      welcome: "Welcome",
    },
    ru: {
      calendar: "Календарь",
      faq: "Вопросы",
      mission: "Миссия",
      options: "Форматы",
      overview: "Обзор",
      prices: "Цены",
      register: "Запись",
      results: "Результаты",
      values: "Ценности",
      welcome: "Приветствие",
    },
  }[locale];

  return [
    {
      title: labels.about,
      routeKey: "about",
      links: [
        { label: viewPageLabel, routeKey: "about" },
        { label: footerLabels.welcome, routeKey: "about", anchor: "welcome" },
        { label: footerLabels.mission, routeKey: "about", anchor: "mission" },
        { label: footerLabels.values, routeKey: "about", anchor: "values" },
      ],
    },
    ...courseRouteKeys.map((routeKey) => ({
      title: labels[routeKey],
      routeKey,
      links: [
        { label: viewPageLabel, routeKey },
        ...(routeKey === "children" || routeKey === "adults"
          ? []
          : [{ label: footerLabels.results, routeKey, anchor: "results" }]),
        { label: footerLabels.overview, routeKey, anchor: "overview" },
        { label: footerLabels.options, routeKey, anchor: "study-options" },
        { label: footerLabels.prices, routeKey, anchor: "prices" },
        { label: footerLabels.calendar, routeKey, anchor: "calendar" },
        { label: footerLabels.faq, routeKey, anchor: "faq" },
        { label: footerLabels.register, routeKey, anchor: "registration" },
      ],
    })),
  ];
}

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    metadata: {
      title: "Volna School",
      description:
        "Online Russian lessons for children, GCSE and A Level students, and adult learners.",
    },
    navigation: {
      brandLabel: "Volna School",
      primaryNavLabel: "Primary navigation",
      mobilePrimaryNavLabel: "Mobile primary navigation",
      languageNavLabel: "Language",
      tagline: "Online Russian School",
      primary: ["about", ...courseRouteKeys],
      enrollRoutes: [...courseRouteKeys],
      ctaLabel: "Register",
      mobileMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
    },
    routeLabels: enRouteLabels,
    footer: {
      intro:
        "Live online Russian lessons for children, GCSE and A Level students, and adults across the UK.",
      groups: createFooterGroups(enRouteLabels, "en"),
      legalLabel: "Policies",
      navLabel: "Footer navigation",
      coursesTitle: "Courses",
      usefulTitle: "Useful links",
      ctaEyebrow: "Questions?",
      ctaTitle: "Speak to our team",
      ctaBody:
        "We’re happy to help with course details, lesson formats and registration.",
      ctaButtonLabel: "Email the school",
      contact: {
        title: "Contact",
        phoneLabel: "Call",
        phone: "+44 7881 764892",
        emailLabel: "Email",
        email: "info@volnaschool.com",
      },
    },
  },
  ru: {
    locale: "ru",
    metadata: {
      title: "Volna School",
      description:
        "Онлайн-занятия русским языком для детей, экзаменационных учеников и взрослых.",
    },
    navigation: {
      brandLabel: "Volna School",
      primaryNavLabel: "Основная навигация",
      mobilePrimaryNavLabel: "Мобильная навигация",
      languageNavLabel: "Язык",
      tagline: "Онлайн-школа русского языка",
      primary: ["about", ...courseRouteKeys],
      enrollRoutes: [...courseRouteKeys],
      ctaLabel: "Запись",
      mobileMenuLabel: "Открыть меню",
      closeMenuLabel: "Закрыть меню",
    },
    routeLabels: ruRouteLabels,
    footer: {
      intro:
        "Онлайн-занятия русским языком для детей, учеников GCSE и A Level и взрослых по всей Великобритании.",
      groups: createFooterGroups(ruRouteLabels, "ru"),
      legalLabel: "Документы",
      navLabel: "Навигация в подвале сайта",
      coursesTitle: "Курсы",
      usefulTitle: "Полезные ссылки",
      ctaEyebrow: "Есть вопросы?",
      ctaTitle: "Свяжитесь с нашей командой",
      ctaBody:
        "Мы поможем уточнить детали курсов, форматы занятий и процесс записи.",
      ctaButtonLabel: "Написать в школу",
      contact: {
        title: "Контакты",
        phoneLabel: "Телефон",
        phone: "+44 7881 764892",
        emailLabel: "Email",
        email: "info@volnaschool.com",
      },
    },
  },
};
