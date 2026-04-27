import type { Locale } from "@/lib/i18n/config";
import {
  courseRouteKeys,
  pageRouteKeys,
  type PageRouteKey,
  type RouteKey,
} from "@/lib/i18n/routing";

type NavigationContent = {
  brandLabel: string;
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

export type PageScaffoldContent = {
  routeKey: RouteKey;
  title: string;
  eyebrow: string;
  description: string;
  statusLabel: string;
  statusItems: string[];
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
    contactPlaceholder: string;
  };
  pages: Record<RouteKey, PageScaffoldContent>;
};

const enRouteLabels: Record<RouteKey, string> = {
  home: "Home",
  about: "About Us",
  children: "Children's Classes",
  gcse: "GCSE Courses",
  alevel: "A-Level Courses",
  adults: "Adult Courses",
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
  privacy: "Политика конфиденциальности",
  refund: "Политика возврата",
};

function createPages(
  locale: Locale,
  labels: Record<RouteKey, string>,
): Record<RouteKey, PageScaffoldContent> {
  const isEnglish = locale === "en";
  const allRouteKeys: RouteKey[] = ["home", ...pageRouteKeys];

  return Object.fromEntries(
    allRouteKeys.map((routeKey) => [
      routeKey,
      {
        routeKey,
        title:
          routeKey === "home"
            ? isEnglish
              ? "Volna School rebuild architecture"
              : "Архитектура обновления Volna School"
            : labels[routeKey],
        eyebrow: isEnglish ? "Rebuild scaffold" : "Каркас раздела",
        description: isEnglish
          ? "This route is wired into the localized shell and ready for reviewed public copy."
          : "Этот маршрут подключен к локализованной структуре и ожидает проверенный публичный текст.",
        statusLabel: isEnglish ? "Architecture status" : "Статус архитектуры",
        statusItems: isEnglish
          ? [
              "Route key and localized path are defined.",
              "Header, footer, and mobile navigation render from shared content.",
              "Final page copy and approved imagery still need review.",
            ]
          : [
              "Ключ маршрута и путь для языка определены.",
              "Шапка, подвал и мобильная навигация используют общие данные.",
              "Финальные тексты и изображения еще должны пройти проверку.",
            ],
      },
    ]),
  ) as Record<RouteKey, PageScaffoldContent>;
}

function createFooterGroups(
  labels: Record<RouteKey, string>,
  locale: Locale,
): FooterGroup[] {
  const viewPageLabel = locale === "en" ? "View page" : "Открыть страницу";
  const placeholderAnchorLabel =
    locale === "en" ? "Section plan" : "План разделов";

  return courseRouteKeys.map((routeKey) => ({
    title: labels[routeKey],
    routeKey,
    links: [
      { label: viewPageLabel, routeKey },
      {
        label: placeholderAnchorLabel,
        routeKey,
        anchor: "section-plan",
      },
    ],
  }));
}

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    metadata: {
      title: "Volna School",
      description: "Localized rebuild architecture for the Volna School website.",
    },
    navigation: {
      brandLabel: "Volna School",
      primary: ["about", ...courseRouteKeys],
      enrollRoutes: [...courseRouteKeys],
      ctaLabel: "Enroll Today",
      mobileMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
    },
    routeLabels: enRouteLabels,
    footer: {
      intro:
        "A bilingual school website rebuild scaffold with reviewed content slots.",
      groups: createFooterGroups(enRouteLabels, "en"),
      legalLabel: "Policies",
      contactPlaceholder: "Contact details pending public review.",
    },
    pages: createPages("en", enRouteLabels),
  },
  ru: {
    locale: "ru",
    metadata: {
      title: "Volna School",
      description: "Локализованная архитектура обновления сайта Volna School.",
    },
    navigation: {
      brandLabel: "Volna School",
      primary: ["about", ...courseRouteKeys],
      enrollRoutes: [...courseRouteKeys],
      ctaLabel: "Записаться",
      mobileMenuLabel: "Открыть меню",
      closeMenuLabel: "Закрыть меню",
    },
    routeLabels: ruRouteLabels,
    footer: {
      intro:
        "Каркас двуязычного сайта школы с местами для проверенного контента.",
      groups: createFooterGroups(ruRouteLabels, "ru"),
      legalLabel: "Документы",
      contactPlaceholder: "Контактные данные ожидают публичную проверку.",
    },
    pages: createPages("ru", ruRouteLabels),
  },
};
