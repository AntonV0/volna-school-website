import type { Locale } from "@/lib/i18n/config";
import {
  courseRouteKeys,
  type PageRouteKey,
  type RouteKey,
} from "@/lib/i18n/routing";

type NavigationContent = {
  brandLabel: string;
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
    contact: {
      title: string;
      phone: string;
      email: string;
    };
  };
};

const enRouteLabels: Record<RouteKey, string> = {
  home: "Home",
  about: "About Us",
  children: "Children's Classes",
  gcse: "GCSE Courses",
  alevel: "A-Level Courses",
  adults: "Adult Courses",
  registration: "Registration",
  privacy: "Privacy Policy",
  refund: "Refund Policy",
};

const ruRouteLabels: Record<RouteKey, string> = {
  home: "Главная",
  about: "О школе",
  children: "Детские занятия",
  gcse: "GCSE",
  alevel: "A-Level",
  adults: "Курсы для взрослых",
  registration: "Запись",
  privacy: "Политика конфиденциальности",
  refund: "Политика возврата",
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
        "Online Russian lessons for children, GCSE and A-Level students, and adult learners.",
    },
    navigation: {
      brandLabel: "Volna School",
      tagline: "Online Russian School",
      primary: ["about", ...courseRouteKeys],
      enrollRoutes: [...courseRouteKeys],
      ctaLabel: "Register for a Free Trial Lesson",
      mobileMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
    },
    routeLabels: enRouteLabels,
    footer: {
      intro:
        "Online Russian lessons for children, exam students, and adults, with a clear route into a free trial lesson.",
      groups: createFooterGroups(enRouteLabels, "en"),
      legalLabel: "Policies",
      contact: {
        title: "Contact",
        phone: "+44 7881 764892",
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
      tagline: "Онлайн-школа русского языка",
      primary: ["about", ...courseRouteKeys],
      enrollRoutes: [...courseRouteKeys],
      ctaLabel: "Записаться на бесплатный пробный урок",
      mobileMenuLabel: "Открыть меню",
      closeMenuLabel: "Закрыть меню",
    },
    routeLabels: ruRouteLabels,
    footer: {
      intro:
        "Онлайн-занятия русским языком для детей, экзаменационных учеников и взрослых с понятным шагом к пробному уроку.",
      groups: createFooterGroups(ruRouteLabels, "ru"),
      legalLabel: "Документы",
      contact: {
        title: "Контакты",
        phone: "+44 7881 764892",
        email: "info@volnaschool.com",
      },
    },
  },
};
