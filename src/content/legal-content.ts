import type { Locale } from "@/lib/i18n/config";
import type { PageRouteKey } from "@/lib/i18n/routing";

type LegalRouteKey = Extract<PageRouteKey, "privacy" | "refund">;

type LegalContent = {
  routeKey: LegalRouteKey;
  eyebrow: string;
  title: string;
  summary: string;
  reviewNotice: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

const englishLegal: Record<LegalRouteKey, LegalContent> = {
  privacy: {
    routeKey: "privacy",
    eyebrow: "Policy placeholder",
    title: "Privacy Policy",
    summary:
      "This page is structured for readable policy content, but final legal wording is pending review before publication.",
    reviewNotice:
      "Do not replace this placeholder with copied live policy text until the content has been approved for the public repository.",
    sections: [
      {
        title: "Information we collect",
        body: "A reviewed description of form data, contact details, and lesson-related information will live here.",
      },
      {
        title: "How information is used",
        body: "A reviewed explanation of registration, communication, and lesson administration will live here.",
      },
      {
        title: "Contact and rights",
        body: "Approved contact details and privacy-rights wording will live here.",
      },
    ],
  },
  refund: {
    routeKey: "refund",
    eyebrow: "Policy placeholder",
    title: "Refund Policy",
    summary:
      "This page is structured for readable policy content, but final refund wording is pending review before publication.",
    reviewNotice:
      "Do not replace this placeholder with copied live policy text until the content has been approved for the public repository.",
    sections: [
      {
        title: "Lesson and course payments",
        body: "Approved payment timing, missed lesson, and cancellation wording will live here.",
      },
      {
        title: "Refund requests",
        body: "Approved refund request conditions and contact steps will live here.",
      },
      {
        title: "Exceptions",
        body: "Approved exceptions or discretionary handling language will live here.",
      },
    ],
  },
};

const russianLegal: Record<LegalRouteKey, LegalContent> = {
  privacy: {
    routeKey: "privacy",
    eyebrow: "Шаблон документа",
    title: "Политика конфиденциальности",
    summary:
      "Страница подготовлена для удобного юридического текста, но финальная формулировка ожидает проверки перед публикацией.",
    reviewNotice:
      "Не заменять этот шаблон скопированным текстом с текущего сайта, пока документ не утвержден для публичного репозитория.",
    sections: [
      {
        title: "Какие данные собираются",
        body: "Здесь будет проверенное описание данных форм, контактов и информации, связанной с уроками.",
      },
      {
        title: "Как используются данные",
        body: "Здесь будет проверенное описание регистрации, коммуникации и организации занятий.",
      },
      {
        title: "Контакты и права",
        body: "Здесь будут утвержденные контактные данные и текст о правах пользователя.",
      },
    ],
  },
  refund: {
    routeKey: "refund",
    eyebrow: "Шаблон документа",
    title: "Политика возврата",
    summary:
      "Страница подготовлена для удобного текста политики возврата, но финальная формулировка ожидает проверки перед публикацией.",
    reviewNotice:
      "Не заменять этот шаблон скопированным текстом с текущего сайта, пока документ не утвержден для публичного репозитория.",
    sections: [
      {
        title: "Оплата уроков и курсов",
        body: "Здесь будут утвержденные условия оплаты, пропущенных уроков и отмен.",
      },
      {
        title: "Запросы на возврат",
        body: "Здесь будут утвержденные условия возврата и шаги для обращения.",
      },
      {
        title: "Исключения",
        body: "Здесь будет утвержденный текст об исключениях или индивидуальном рассмотрении.",
      },
    ],
  },
};

export const legalContent: Record<Locale, Record<LegalRouteKey, LegalContent>> = {
  en: englishLegal,
  ru: russianLegal,
};
