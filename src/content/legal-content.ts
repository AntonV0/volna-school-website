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
    eyebrow: "Privacy",
    title: "Privacy Policy",
    summary:
      "Volna School uses personal information to respond to enquiries, arrange trial lessons, manage learning, and operate school administration.",
    reviewNotice:
      "For privacy questions, contact info@volnaschool.com.",
    sections: [
      {
        title: "Information collected",
        body:
          "The school may collect contact details, learner age or year group, course interest, placement notes shared through forms, and information needed to arrange lessons or respond to enquiries.",
      },
      {
        title: "How information is used",
        body:
          "Information is used to contact families and learners, recommend an appropriate class or private lesson route, manage school communication, and support enrolled learners.",
      },
      {
        title: "Rights, retention, and contact",
        body:
          "Families and learners can ask to update or remove their information by contacting the school. Records are kept only for school administration, safeguarding, legal, or accounting needs.",
      },
    ],
  },
  refund: {
    routeKey: "refund",
    eyebrow: "Payments",
    title: "Refund Policy",
    summary:
      "This policy summarises how Volna School handles lesson payments, cancellations, missed lessons, and refund requests.",
    reviewNotice:
      "For payment or refund questions, contact info@volnaschool.com.",
    sections: [
      {
        title: "Lesson and course payments",
        body:
          "Lesson and course fees should be paid according to the invoice or payment instructions provided by the school. Group courses and private tuition may have different scheduling and payment arrangements.",
      },
      {
        title: "Refund requests",
        body:
          "Refund requests should be sent to the school with the learner name, course or lesson details, payment reference, and the reason for the request so the school can review the circumstances.",
      },
      {
        title: "Exceptions",
        body:
          "Missed lessons, illness, holidays, teacher availability, and course-specific commitments are reviewed case by case in line with the agreed lesson arrangement.",
      },
    ],
  },
};

const russianLegal: Record<LegalRouteKey, LegalContent> = {
  privacy: {
    routeKey: "privacy",
    eyebrow: "Конфиденциальность",
    title: "Политика конфиденциальности",
    summary:
      "Volna School использует персональные данные, чтобы отвечать на запросы, организовывать пробные уроки, вести обучение и школьную администрацию.",
    reviewNotice:
      "По вопросам конфиденциальности можно написать на info@volnaschool.com.",
    sections: [
      {
        title: "Какие данные собираются",
        body:
          "Школа может собирать контактные данные, возраст или класс ученика, интересующий курс, заметки для подбора уровня и информацию, нужную для организации занятий или ответа на запрос.",
      },
      {
        title: "Как используются данные",
        body:
          "Данные используются для связи с семьями и учениками, рекомендации подходящего класса или индивидуального формата, школьной коммуникации и поддержки зачисленных учеников.",
      },
      {
        title: "Права, хранение и контакты",
        body:
          "Семьи и ученики могут попросить обновить или удалить данные, связавшись со школой. Записи хранятся только для учебных, административных, юридических или бухгалтерских целей.",
      },
    ],
  },
  refund: {
    routeKey: "refund",
    eyebrow: "Оплата",
    title: "Политика возврата",
    summary:
      "Эта политика кратко описывает, как Volna School рассматривает оплату уроков, отмены, пропущенные занятия и запросы на возврат.",
    reviewNotice:
      "По вопросам оплаты и возврата можно написать на info@volnaschool.com.",
    sections: [
      {
        title: "Оплата уроков и курсов",
        body:
          "Уроки и курсы оплачиваются согласно инвойсу или инструкции школы. Для групповых курсов и индивидуальных занятий могут действовать разные условия расписания и оплаты.",
      },
      {
        title: "Запросы на возврат",
        body:
          "Запрос на возврат нужно отправить в школу, указав имя ученика, курс или урок, платежную информацию и причину запроса, чтобы школа могла рассмотреть обстоятельства.",
      },
      {
        title: "Исключения",
        body:
          "Пропущенные уроки, болезнь, каникулы, доступность преподавателя и условия конкретного курса рассматриваются индивидуально согласно согласованному формату занятий.",
      },
    ],
  },
};

export const legalContent: Record<Locale, Record<LegalRouteKey, LegalContent>> = {
  en: englishLegal,
  ru: russianLegal,
};
