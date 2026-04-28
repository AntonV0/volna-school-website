import type { Locale } from "@/lib/i18n/config";
import {
  courseDetailKeys,
  courseDetailParents,
  type CourseDetailKey,
} from "@/lib/i18n/routing";

type DetailSection = {
  title: string;
  body: string;
};

export type CourseDetailContent = {
  key: CourseDetailKey;
  parentKey: (typeof courseDetailParents)[CourseDetailKey];
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  summary: {
    eyebrow: string;
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  };
  sections: DetailSection[];
  nextSteps: {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
  };
};

const enDetails: Record<CourseDetailKey, CourseDetailContent> = {
  "children-primary": {
    key: "children-primary",
    parentKey: "children",
    hero: {
      eyebrow: "Children's course detail",
      title: "Primary Russian Course",
      summary:
        "A review-ready scaffold for families comparing a steady Russian language pathway for primary-age learners.",
      primaryCtaLabel: "Register for a Free Trial Lesson",
      secondaryCtaLabel: "View course summary",
    },
    summary: {
      eyebrow: "At a glance",
      title: "What this page is ready to explain",
      items: [
        { label: "Learner stage", value: "Primary-age learners" },
        { label: "Format", value: "Small group pathway pending confirmation" },
        { label: "Next step", value: "Free trial lesson request" },
      ],
    },
    sections: [
      {
        title: "Who it is for",
        body:
          "Use this section for approved age, level, and family guidance once the school confirms the public wording.",
      },
      {
        title: "Learning focus",
        body:
          "Use this section for a concise description of reading, writing, speaking, and cultural learning goals.",
      },
      {
        title: "Progression",
        body:
          "Use this section to explain how learners move from foundation skills toward exam or heritage-language pathways.",
      },
    ],
    nextSteps: {
      eyebrow: "Next step",
      title: "Start with a trial lesson",
      body:
        "The detailed registration workflow is handled separately; this page keeps the public marketing CTA clear and lightweight.",
      ctaLabel: "Register for a Free Trial Lesson",
    },
  },
  "gcse-preparation": {
    key: "gcse-preparation",
    parentKey: "gcse",
    hero: {
      eyebrow: "GCSE course detail",
      title: "GCSE Russian Exam Preparation",
      summary:
        "A structured page scaffold for explaining GCSE Russian support without publishing unverified exam, schedule, or pricing claims.",
      primaryCtaLabel: "Register for a Free Trial Lesson",
      secondaryCtaLabel: "View course summary",
    },
    summary: {
      eyebrow: "At a glance",
      title: "Practical GCSE decision points",
      items: [
        { label: "Learner stage", value: "GCSE candidates" },
        { label: "Focus", value: "Exam skills and guided practice" },
        { label: "Next step", value: "Free trial lesson request" },
      ],
    },
    sections: [
      {
        title: "Who it is for",
        body:
          "Use this section for approved entry guidance, exam board references, and support expectations.",
      },
      {
        title: "Course focus",
        body:
          "Use this section for speaking, writing, listening, reading, vocabulary, and mock-practice information.",
      },
      {
        title: "Exam planning",
        body:
          "Use this section for approved timelines, assessment checkpoints, and family communication points.",
      },
    ],
    nextSteps: {
      eyebrow: "Next step",
      title: "Discuss the GCSE pathway",
      body:
        "A trial lesson CTA gives families a clear action while final course logistics remain under review.",
      ctaLabel: "Register for a Free Trial Lesson",
    },
  },
  "alevel-preparation": {
    key: "alevel-preparation",
    parentKey: "alevel",
    hero: {
      eyebrow: "A-Level course detail",
      title: "A-Level Russian Preparation",
      summary:
        "A scannable scaffold for A-Level Russian course detail, ready for approved wording about essays, speaking, and exam planning.",
      primaryCtaLabel: "Register for a Free Trial Lesson",
      secondaryCtaLabel: "View course summary",
    },
    summary: {
      eyebrow: "At a glance",
      title: "What A-Level families can compare",
      items: [
        { label: "Learner stage", value: "A-Level candidates" },
        { label: "Focus", value: "Advanced language and exam technique" },
        { label: "Next step", value: "Free trial lesson request" },
      ],
    },
    sections: [
      {
        title: "Who it is for",
        body:
          "Use this section for approved learner profile, prior knowledge, and independent study expectations.",
      },
      {
        title: "Course focus",
        body:
          "Use this section for approved essay, speaking, grammar, cultural topic, and exam-practice descriptions.",
      },
      {
        title: "Progress planning",
        body:
          "Use this section for milestones, feedback rhythm, and preparation checkpoints once confirmed.",
      },
    ],
    nextSteps: {
      eyebrow: "Next step",
      title: "Plan A-Level support",
      body:
        "The free trial lesson CTA keeps the page useful before final schedules and course-specific evidence are published.",
      ctaLabel: "Register for a Free Trial Lesson",
    },
  },
  "adult-foundations": {
    key: "adult-foundations",
    parentKey: "adults",
    hero: {
      eyebrow: "Adult course detail",
      title: "Russian Foundations for Adults",
      summary:
        "A review-ready page scaffold for adults exploring a practical starting point for Russian study.",
      primaryCtaLabel: "Register for a Free Trial Lesson",
      secondaryCtaLabel: "View course summary",
    },
    summary: {
      eyebrow: "At a glance",
      title: "A practical adult learner summary",
      items: [
        { label: "Learner stage", value: "Beginner or returning adults" },
        { label: "Focus", value: "Everyday language foundations" },
        { label: "Next step", value: "Free trial lesson request" },
      ],
    },
    sections: [
      {
        title: "Who it is for",
        body:
          "Use this section for approved level guidance, learning goals, and expectations for adult learners.",
      },
      {
        title: "Course focus",
        body:
          "Use this section for approved details on conversation, grammar, pronunciation, reading, and listening practice.",
      },
      {
        title: "Flexible support",
        body:
          "Use this section to explain group and individual support options after availability is confirmed.",
      },
    ],
    nextSteps: {
      eyebrow: "Next step",
      title: "Try a first lesson",
      body:
        "The page can point adults to the same primary trial-lesson action while registration details remain outside this slice.",
      ctaLabel: "Register for a Free Trial Lesson",
    },
  },
};

const ruDetails: Record<CourseDetailKey, CourseDetailContent> = {
  "children-primary": {
    key: "children-primary",
    parentKey: "children",
    hero: {
      eyebrow: "Детский курс",
      title: "Курс русского языка для младших школьников",
      summary:
        "Проверочный каркас страницы для семей, которые выбирают последовательный путь изучения русского языка для детей.",
      primaryCtaLabel: "Записаться на бесплатный пробный урок",
      secondaryCtaLabel: "Кратко о курсе",
    },
    summary: {
      eyebrow: "Кратко",
      title: "Что будет объяснять эта страница",
      items: [
        { label: "Этап обучения", value: "Младший школьный возраст" },
        { label: "Формат", value: "Небольшая группа, требует подтверждения" },
        { label: "Следующий шаг", value: "Запрос пробного урока" },
      ],
    },
    sections: [
      {
        title: "Для кого",
        body:
          "Здесь будет утвержденная информация о возрасте, уровне и рекомендациях для семей.",
      },
      {
        title: "Фокус обучения",
        body:
          "Здесь будет краткое описание целей по чтению, письму, устной речи и культурному контексту.",
      },
      {
        title: "Развитие",
        body:
          "Здесь можно объяснить переход от базовых навыков к экзаменационному или наследному языковому пути.",
      },
    ],
    nextSteps: {
      eyebrow: "Следующий шаг",
      title: "Начать с пробного урока",
      body:
        "Подробный процесс записи будет реализован отдельно; здесь остается ясный публичный призыв к действию.",
      ctaLabel: "Записаться на бесплатный пробный урок",
    },
  },
  "gcse-preparation": {
    key: "gcse-preparation",
    parentKey: "gcse",
    hero: {
      eyebrow: "Курс GCSE",
      title: "Подготовка к GCSE по русскому языку",
      summary:
        "Структура страницы для описания поддержки GCSE без публикации непроверенных данных об экзаменах, расписании или ценах.",
      primaryCtaLabel: "Записаться на бесплатный пробный урок",
      secondaryCtaLabel: "Кратко о курсе",
    },
    summary: {
      eyebrow: "Кратко",
      title: "Что важно для выбора GCSE",
      items: [
        { label: "Этап обучения", value: "Кандидаты GCSE" },
        { label: "Фокус", value: "Экзаменационные навыки и практика" },
        { label: "Следующий шаг", value: "Запрос пробного урока" },
      ],
    },
    sections: [
      {
        title: "Для кого",
        body:
          "Здесь будет утвержденная информация о входном уровне, экзаменационной программе и ожиданиях.",
      },
      {
        title: "Фокус курса",
        body:
          "Здесь будет описание говорения, письма, аудирования, чтения, лексики и пробной практики.",
      },
      {
        title: "Планирование экзамена",
        body:
          "Здесь будут утвержденные сроки, контрольные точки и формат связи с семьей.",
      },
    ],
    nextSteps: {
      eyebrow: "Следующий шаг",
      title: "Обсудить путь GCSE",
      body:
        "Пробный урок дает семье понятное действие, пока финальные детали курса проходят проверку.",
      ctaLabel: "Записаться на бесплатный пробный урок",
    },
  },
  "alevel-preparation": {
    key: "alevel-preparation",
    parentKey: "alevel",
    hero: {
      eyebrow: "Курс A-Level",
      title: "Подготовка к A-Level по русскому языку",
      summary:
        "Удобный для чтения каркас страницы A-Level, готовый для утвержденного текста об эссе, устной части и экзаменационном плане.",
      primaryCtaLabel: "Записаться на бесплатный пробный урок",
      secondaryCtaLabel: "Кратко о курсе",
    },
    summary: {
      eyebrow: "Кратко",
      title: "Что можно сравнить на этапе A-Level",
      items: [
        { label: "Этап обучения", value: "Кандидаты A-Level" },
        { label: "Фокус", value: "Продвинутый язык и экзаменационная техника" },
        { label: "Следующий шаг", value: "Запрос пробного урока" },
      ],
    },
    sections: [
      {
        title: "Для кого",
        body:
          "Здесь будет утвержденная информация о профиле ученика, базовых знаниях и самостоятельной работе.",
      },
      {
        title: "Фокус курса",
        body:
          "Здесь будет описание эссе, устной части, грамматики, культурных тем и экзаменационной практики.",
      },
      {
        title: "План развития",
        body:
          "Здесь будут этапы, ритм обратной связи и контрольные точки подготовки после подтверждения.",
      },
    ],
    nextSteps: {
      eyebrow: "Следующий шаг",
      title: "Спланировать поддержку A-Level",
      body:
        "Призыв к пробному уроку делает страницу полезной до публикации финального расписания и деталей курса.",
      ctaLabel: "Записаться на бесплатный пробный урок",
    },
  },
  "adult-foundations": {
    key: "adult-foundations",
    parentKey: "adults",
    hero: {
      eyebrow: "Курс для взрослых",
      title: "Основы русского языка для взрослых",
      summary:
        "Проверочный каркас страницы для взрослых, которые ищут практичную отправную точку для изучения русского языка.",
      primaryCtaLabel: "Записаться на бесплатный пробный урок",
      secondaryCtaLabel: "Кратко о курсе",
    },
    summary: {
      eyebrow: "Кратко",
      title: "Практичное резюме для взрослых",
      items: [
        { label: "Этап обучения", value: "Начинающие или возвращающиеся ученики" },
        { label: "Фокус", value: "Базовый язык для повседневных задач" },
        { label: "Следующий шаг", value: "Запрос пробного урока" },
      ],
    },
    sections: [
      {
        title: "Для кого",
        body:
          "Здесь будет утвержденная информация об уровне, целях обучения и ожиданиях взрослых учеников.",
      },
      {
        title: "Фокус курса",
        body:
          "Здесь будут детали о разговорной практике, грамматике, произношении, чтении и аудировании.",
      },
      {
        title: "Гибкая поддержка",
        body:
          "Здесь можно объяснить групповые и индивидуальные варианты после подтверждения доступности.",
      },
    ],
    nextSteps: {
      eyebrow: "Следующий шаг",
      title: "Попробовать первый урок",
      body:
        "Страница может вести взрослых к тому же основному действию, пока детали записи остаются за пределами этого этапа.",
      ctaLabel: "Записаться на бесплатный пробный урок",
    },
  },
};

export const courseDetailContent: Record<
  Locale,
  Record<CourseDetailKey, CourseDetailContent>
> = {
  en: enDetails,
  ru: ruDetails,
};

export function getCourseDetailContent(
  locale: Locale,
  detailKey: CourseDetailKey,
) {
  return courseDetailContent[locale][detailKey];
}

export function getCourseDetailKeysForParent(
  parentKey: CourseDetailContent["parentKey"],
) {
  return courseDetailKeys.filter(
    (detailKey) => courseDetailParents[detailKey] === parentKey,
  );
}
