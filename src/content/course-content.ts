import type { Locale } from "@/lib/i18n/config";
import type { PageRouteKey } from "@/lib/i18n/routing";

export type CourseSectionId =
  | "overview"
  | "study-options"
  | "prices"
  | "calendar"
  | "faq"
  | "registration";

export type CourseContent = {
  routeKey: PageRouteKey;
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  sectionNav: Array<{
    id: CourseSectionId;
    label: string;
  }>;
  overview: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: string[];
  };
  studyOptions: {
    eyebrow: string;
    title: string;
    cards: Array<{
      title: string;
      description: string;
      detail: string;
    }>;
  };
  pricing: {
    eyebrow: string;
    title: string;
    note: string;
    rows: Array<{
      label: string;
      value: string;
      detail: string;
    }>;
  };
  calendar: {
    eyebrow: string;
    title: string;
    note: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  registration: {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
  };
};

export const courseContent: Record<Locale, Partial<Record<PageRouteKey, CourseContent>>> = {
  en: {
    children: {
      routeKey: "children",
      hero: {
        eyebrow: "Pilot course template",
        title: "Children's Russian Classes",
        summary:
          "A reviewed-content placeholder for the children course pathway, designed to prove reusable course page sections before final copy is approved.",
        primaryCtaLabel: "Register interest",
        secondaryCtaLabel: "View sections",
      },
      sectionNav: [
        { id: "overview", label: "Overview" },
        { id: "study-options", label: "Study Options" },
        { id: "prices", label: "Prices" },
        { id: "calendar", label: "Calendar" },
        { id: "faq", label: "FAQ" },
        { id: "registration", label: "Register" },
      ],
      overview: {
        eyebrow: "Overview",
        title: "A parent-friendly course page structure",
        body:
          "This section is intentionally concise while the final public text is reviewed. It establishes the layout for course positioning, proof points, and practical next steps.",
        highlights: [
          "Bilingual content slots are matched across English and Russian.",
          "Course details are modeled as structured data, not long copied blocks.",
          "Images, dates, forms, and legal text remain pending approval.",
        ],
      },
      studyOptions: {
        eyebrow: "Study options",
        title: "Reusable cards for class formats",
        cards: [
          {
            title: "Small group classes",
            description:
              "A placeholder slot for the main children class format and learning rhythm.",
            detail: "Final schedule and age-group wording pending review.",
          },
          {
            title: "Exam pathway support",
            description:
              "A placeholder for linking children learning into later GCSE or A-Level routes.",
            detail: "Use only after the progression language is approved.",
          },
          {
            title: "Individual support",
            description:
              "A placeholder for one-to-one or tailored learning options where offered.",
            detail: "Confirm availability before publishing.",
          },
        ],
      },
      pricing: {
        eyebrow: "Prices",
        title: "Structured pricing placeholder",
        note:
          "Pricing values are placeholders until reviewed and approved for public use.",
        rows: [
          {
            label: "Course option",
            value: "Review pending",
            detail: "Replace with approved class format and fee.",
          },
          {
            label: "First lesson",
            value: "Review pending",
            detail: "Confirm trial lesson wording before publishing.",
          },
        ],
      },
      calendar: {
        eyebrow: "Calendar",
        title: "Term date slots",
        note:
          "The live calendar needs date verification before it is represented as public structured data.",
        items: [
          { label: "Autumn term", value: "Dates pending verification" },
          { label: "Spring term", value: "Dates pending verification" },
          { label: "Summer term", value: "Dates pending verification" },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Starter FAQ structure",
        items: [
          {
            question: "Who is this course for?",
            answer:
              "This is a placeholder answer. The final age range and entry guidance should be approved before publication.",
          },
          {
            question: "How are classes delivered?",
            answer:
              "This is a placeholder answer for class format, online delivery, and attendance expectations.",
          },
          {
            question: "What happens after registration?",
            answer:
              "This is a placeholder answer for the follow-up process and first lesson arrangement.",
          },
        ],
      },
      registration: {
        eyebrow: "Registration",
        title: "Registration CTA foundation",
        body:
          "The form itself will be built after field values, privacy wording, and submission handling are approved.",
        ctaLabel: "Form coming soon",
      },
    },
  },
  ru: {
    children: {
      routeKey: "children",
      hero: {
        eyebrow: "Пилотный шаблон курса",
        title: "Детские занятия по русскому языку",
        summary:
          "Проверочный текст для детского направления: он нужен, чтобы собрать структуру курса до утверждения финального публичного контента.",
        primaryCtaLabel: "Оставить интерес",
        secondaryCtaLabel: "Разделы страницы",
      },
      sectionNav: [
        { id: "overview", label: "Обзор" },
        { id: "study-options", label: "Форматы" },
        { id: "prices", label: "Цены" },
        { id: "calendar", label: "Календарь" },
        { id: "faq", label: "Вопросы" },
        { id: "registration", label: "Запись" },
      ],
      overview: {
        eyebrow: "Обзор",
        title: "Структура страницы для родителей",
        body:
          "Этот раздел намеренно краткий, пока финальный текст проходит проверку. Он задает место для описания курса, преимуществ и следующих шагов.",
        highlights: [
          "Английская и русская версии используют одинаковую структуру.",
          "Детали курса оформлены как данные, а не как длинные скопированные блоки.",
          "Изображения, даты, формы и юридические тексты ожидают утверждения.",
        ],
      },
      studyOptions: {
        eyebrow: "Форматы обучения",
        title: "Карточки для вариантов занятий",
        cards: [
          {
            title: "Небольшие группы",
            description:
              "Место для описания основного формата детских занятий и учебного ритма.",
            detail: "Расписание и возрастные группы требуют проверки.",
          },
          {
            title: "Поддержка экзаменационного пути",
            description:
              "Место для связи детского курса с будущими GCSE или A-Level направлениями.",
            detail: "Формулировку прогресса нужно утвердить.",
          },
          {
            title: "Индивидуальная поддержка",
            description:
              "Место для индивидуальных или адаптированных занятий, если они доступны.",
            detail: "Подтвердить доступность перед публикацией.",
          },
        ],
      },
      pricing: {
        eyebrow: "Цены",
        title: "Структура блока цен",
        note: "Значения временные, пока цены не утверждены для публикации.",
        rows: [
          {
            label: "Вариант курса",
            value: "Ожидает проверки",
            detail: "Заменить утвержденным форматом и стоимостью.",
          },
          {
            label: "Первый урок",
            value: "Ожидает проверки",
            detail: "Утвердить формулировку пробного занятия.",
          },
        ],
      },
      calendar: {
        eyebrow: "Календарь",
        title: "Места для дат триместров",
        note:
          "Даты с текущего сайта нужно проверить перед публикацией в структурированном виде.",
        items: [
          { label: "Осенний триместр", value: "Даты ожидают проверки" },
          { label: "Весенний триместр", value: "Даты ожидают проверки" },
          { label: "Летний триместр", value: "Даты ожидают проверки" },
        ],
      },
      faq: {
        eyebrow: "Вопросы",
        title: "Начальная структура FAQ",
        items: [
          {
            question: "Для кого этот курс?",
            answer:
              "Это временный ответ. Финальные возрастные рамки и условия поступления нужно утвердить.",
          },
          {
            question: "Как проходят занятия?",
            answer:
              "Это временный ответ о формате занятий, онлайн-обучении и ожиданиях по посещению.",
          },
          {
            question: "Что происходит после записи?",
            answer:
              "Это временный ответ о дальнейших шагах и организации первого урока.",
          },
        ],
      },
      registration: {
        eyebrow: "Запись",
        title: "Основа регистрационного блока",
        body:
          "Форма будет собрана после утверждения полей, текста о конфиденциальности и способа отправки.",
        ctaLabel: "Форма скоро появится",
      },
    },
  },
};

export function getCourseContent(locale: Locale, routeKey: PageRouteKey) {
  const content = courseContent[locale][routeKey];

  if (!content) {
    throw new Error(`Missing course content for ${locale}/${routeKey}.`);
  }

  return content;
}
