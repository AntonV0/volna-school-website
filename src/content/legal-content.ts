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
    eyebrow: "Policy review",
    title: "Privacy Policy",
    summary:
      "This page is ready for the owner's approved privacy wording. Until then, it describes the policy areas the school must confirm before launch.",
    reviewNotice:
      "Final privacy wording must be owner-approved before the live domain moves to this rebuild.",
    sections: [
      {
        title: "Information collected",
        body:
          "The final policy should explain what trial registration, contact, lesson administration, and private portal information may be collected.",
      },
      {
        title: "How information is used",
        body:
          "The final policy should cover arranging trial lessons, responding to enquiries, managing lessons, and operating private school workflows.",
      },
      {
        title: "Rights, retention, and contact",
        body:
          "Approved contact details, data-rights wording, retention expectations, and third-party service references should be added before launch.",
      },
    ],
  },
  refund: {
    routeKey: "refund",
    eyebrow: "Policy review",
    title: "Refund Policy",
    summary:
      "This page is ready for the owner's approved refund wording. Until then, it keeps the refund policy structure visible without inventing legal terms.",
    reviewNotice:
      "Final refund wording must be owner-approved before the live domain moves to this rebuild.",
    sections: [
      {
        title: "Lesson and course payments",
        body:
          "The final policy should confirm payment timing, invoice handling, missed lessons, cancellation rules, and any course-specific conditions.",
      },
      {
        title: "Refund requests",
        body:
          "The final policy should explain how families or learners request a refund and what information the school needs to review it.",
      },
      {
        title: "Exceptions",
        body:
          "Any discretionary handling, illness, holiday, or teacher-availability exceptions should be confirmed by the owner before publication.",
      },
    ],
  },
};

const russianLegal: Record<LegalRouteKey, LegalContent> = {
  privacy: {
    routeKey: "privacy",
    eyebrow: "Проверка документа",
    title: "Политика конфиденциальности",
    summary:
      "Страница готова для утвержденного текста политики конфиденциальности. Пока здесь описаны области, которые нужно подтвердить перед запуском.",
    reviewNotice:
      "Финальный текст политики должен быть утвержден владельцем до переноса основного домена на этот сайт.",
    sections: [
      {
        title: "Какие данные собираются",
        body:
          "Финальная политика должна объяснить, какие данные могут собираться при заявке на пробный урок, контакте, организации занятий и работе личного кабинета.",
      },
      {
        title: "Как используются данные",
        body:
          "Финальная политика должна описать запись на пробный урок, ответы на запросы, организацию занятий и внутренние школьные процессы.",
      },
      {
        title: "Права, хранение и контакты",
        body:
          "Утвержденные контакты, права пользователя, сроки хранения и ссылки на сторонние сервисы нужно добавить перед запуском.",
      },
    ],
  },
  refund: {
    routeKey: "refund",
    eyebrow: "Проверка документа",
    title: "Политика возврата",
    summary:
      "Страница готова для утвержденного текста политики возврата. Пока она показывает структуру без самостоятельного создания юридических условий.",
    reviewNotice:
      "Финальный текст политики возврата должен быть утвержден владельцем до переноса основного домена на этот сайт.",
    sections: [
      {
        title: "Оплата уроков и курсов",
        body:
          "Финальная политика должна подтвердить сроки оплаты, работу с инвойсами, пропущенные уроки, отмены и условия для разных курсов.",
      },
      {
        title: "Запросы на возврат",
        body:
          "Финальная политика должна объяснить, как семья или ученик запрашивает возврат и какая информация нужна школе для рассмотрения.",
      },
      {
        title: "Исключения",
        body:
          "Любые исключения по болезни, каникулам, доступности преподавателя или индивидуальным случаям нужно утвердить перед публикацией.",
      },
    ],
  },
};

export const legalContent: Record<Locale, Record<LegalRouteKey, LegalContent>> = {
  en: englishLegal,
  ru: russianLegal,
};
