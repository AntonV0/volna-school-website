import type { Locale } from "@/lib/i18n/config";
import type { PageRouteKey } from "@/lib/i18n/routing";

export type CourseSectionId =
  | "overview"
  | "study-options"
  | "prices"
  | "calendar"
  | "faq"
  | "registration";

type CourseRouteKey = Extract<
  PageRouteKey,
  "children" | "gcse" | "alevel" | "adults"
>;

export type CourseContent = {
  routeKey: CourseRouteKey;
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    mediaLabel: string;
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

type CourseSeed = {
  routeKey: CourseRouteKey;
  title: string;
  audience: string;
  primaryFormat: string;
  progression: string;
  support: string;
};

const englishSeeds: Record<CourseRouteKey, CourseSeed> = {
  children: {
    routeKey: "children",
    title: "Children's Russian Classes",
    audience: "children and families",
    primaryFormat: "Small group classes",
    progression: "Exam pathway support",
    support: "Individual support",
  },
  gcse: {
    routeKey: "gcse",
    title: "GCSE Russian Courses",
    audience: "GCSE students and families",
    primaryFormat: "GCSE preparation groups",
    progression: "Specification and exam planning",
    support: "Mock exam support",
  },
  alevel: {
    routeKey: "alevel",
    title: "A-Level Russian Courses",
    audience: "A-Level students and families",
    primaryFormat: "A-Level preparation groups",
    progression: "Essay and speaking preparation",
    support: "Exam technique support",
  },
  adults: {
    routeKey: "adults",
    title: "Adult Russian Courses",
    audience: "adult learners",
    primaryFormat: "Group courses",
    progression: "Custom learning pathways",
    support: "Private lesson support",
  },
};

const russianSeeds: Record<CourseRouteKey, CourseSeed> = {
  children: {
    routeKey: "children",
    title: "Детские занятия по русскому языку",
    audience: "детей и семей",
    primaryFormat: "Небольшие группы",
    progression: "Поддержка экзаменационного пути",
    support: "Индивидуальная поддержка",
  },
  gcse: {
    routeKey: "gcse",
    title: "Курсы русского языка GCSE",
    audience: "учеников GCSE и семей",
    primaryFormat: "Группы подготовки к GCSE",
    progression: "Спецификация и экзаменационный план",
    support: "Поддержка пробных экзаменов",
  },
  alevel: {
    routeKey: "alevel",
    title: "Курсы русского языка A-Level",
    audience: "учеников A-Level и семей",
    primaryFormat: "Группы подготовки к A-Level",
    progression: "Подготовка к эссе и устной части",
    support: "Поддержка экзаменационной техники",
  },
  adults: {
    routeKey: "adults",
    title: "Курсы русского языка для взрослых",
    audience: "взрослых учеников",
    primaryFormat: "Групповые курсы",
    progression: "Индивидуальные учебные траектории",
    support: "Поддержка частных занятий",
  },
};

function createEnglishCourse(seed: CourseSeed): CourseContent {
  return {
    routeKey: seed.routeKey,
    hero: {
      eyebrow: "Course template",
      title: seed.title,
      summary: `A reviewed-content placeholder for ${seed.audience}, designed to prove reusable course page sections before final copy is approved.`,
      primaryCtaLabel: "Register for a Free Trial Lesson",
      secondaryCtaLabel: "View sections",
      mediaLabel: "Course image pending review",
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
      title: "A practical course page structure",
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
      title: "Reusable cards for course formats",
      cards: [
        {
          title: seed.primaryFormat,
          description:
            "A placeholder slot for the main course format, learning rhythm, and expected level.",
          detail: "Final schedule and level wording pending review.",
        },
        {
          title: seed.progression,
          description:
            "A placeholder slot for goals, progression, specifications, or learner outcomes.",
          detail: "Use only after pathway wording is approved.",
        },
        {
          title: seed.support,
          description:
            "A placeholder slot for additional support, tailored study, or one-to-one options.",
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
            "This is a placeholder answer. The final audience, age range, level, and entry guidance should be approved before publication.",
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
      title: "Arrange a free trial lesson",
      body:
        "Use the registration form to share initial details. The school will contact you to arrange the free trial lesson.",
      ctaLabel: "Register for a Free Trial Lesson",
    },
  };
}

function createRussianCourse(seed: CourseSeed): CourseContent {
  return {
    routeKey: seed.routeKey,
    hero: {
      eyebrow: "Шаблон курса",
      title: seed.title,
      summary: `Проверочный текст для ${seed.audience}: он нужен, чтобы собрать структуру курса до утверждения финального публичного контента.`,
      primaryCtaLabel: "Записаться на бесплатный пробный урок",
      secondaryCtaLabel: "Разделы страницы",
      mediaLabel: "Фото курса ожидает утверждения",
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
      title: "Практичная структура страницы курса",
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
      title: "Карточки для вариантов курса",
      cards: [
        {
          title: seed.primaryFormat,
          description:
            "Место для описания основного формата курса, учебного ритма и ожидаемого уровня.",
          detail: "Расписание и описание уровня требуют проверки.",
        },
        {
          title: seed.progression,
          description:
            "Место для целей, прогресса, спецификаций или результатов обучения.",
          detail: "Формулировку пути нужно утвердить.",
        },
        {
          title: seed.support,
          description:
            "Место для дополнительной поддержки, адаптированного обучения или индивидуальных занятий.",
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
            "Это временный ответ. Финальные аудиторию, возраст, уровень и условия поступления нужно утвердить.",
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
      title: "Договориться о бесплатном пробном уроке",
      body:
        "Заполните форму регистрации с первичными деталями. Школа свяжется с вами, чтобы договориться о бесплатном пробном уроке.",
      ctaLabel: "Записаться на бесплатный пробный урок",
    },
  };
}

export const courseContent: Record<Locale, Record<CourseRouteKey, CourseContent>> = {
  en: {
    children: createEnglishCourse(englishSeeds.children),
    gcse: createEnglishCourse(englishSeeds.gcse),
    alevel: createEnglishCourse(englishSeeds.alevel),
    adults: createEnglishCourse(englishSeeds.adults),
  },
  ru: {
    children: createRussianCourse(russianSeeds.children),
    gcse: createRussianCourse(russianSeeds.gcse),
    alevel: createRussianCourse(russianSeeds.alevel),
    adults: createRussianCourse(russianSeeds.adults),
  },
};

export function getCourseContent(locale: Locale, routeKey: CourseRouteKey) {
  return courseContent[locale][routeKey];
}
