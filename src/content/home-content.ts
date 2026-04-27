import type { Locale } from "@/lib/i18n/config";
import type { PageRouteKey } from "@/lib/i18n/routing";

type HomeCourse = {
  routeKey: Extract<PageRouteKey, "children" | "gcse" | "alevel" | "adults">;
  title: string;
  summary: string;
  bullets: string[];
};

type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  courseChooser: {
    eyebrow: string;
    title: string;
    courses: HomeCourse[];
  };
  welcome: {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  team: {
    eyebrow: string;
    title: string;
    people: Array<{
      name: string;
      role: string;
    }>;
  };
  enrollment: {
    title: string;
    body: string;
    ctaLabel: string;
  };
  testimonial: {
    eyebrow: string;
    quote: string;
    attribution: string;
  };
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    hero: {
      eyebrow: "Online Russian school",
      title: "Learn Russian with a clear path for every learner",
      summary:
        "A design-ready homepage scaffold for families, exam students, and adult learners. Final approved copy and photography can drop into this structure later.",
      primaryCtaLabel: "Try a first lesson",
      secondaryCtaLabel: "Choose a course",
    },
    courseChooser: {
      eyebrow: "Course pathways",
      title: "Choose the route that fits your goals",
      courses: [
        {
          routeKey: "children",
          title: "Children's Classes",
          summary: "Foundational Russian learning for younger students.",
          bullets: ["Small groups", "Age-aware structure", "Progress tracking"],
        },
        {
          routeKey: "gcse",
          title: "GCSE Courses",
          summary: "Exam-focused support for GCSE Russian.",
          bullets: ["Specification planning", "Mock preparation", "Exam confidence"],
        },
        {
          routeKey: "alevel",
          title: "A-Level Courses",
          summary: "Advanced preparation for A-Level Russian.",
          bullets: ["Essay support", "Speaking practice", "Exam technique"],
        },
        {
          routeKey: "adults",
          title: "Adult Courses",
          summary: "Flexible Russian learning for adult goals.",
          bullets: ["Beginner routes", "Custom pacing", "Private support"],
        },
      ],
    },
    welcome: {
      eyebrow: "Welcome",
      title: "A warm bilingual learning space",
      body:
        "This section mirrors the current site's reassuring school introduction while keeping the wording safe for public review. It will later carry approved school history, teaching values, and community proof.",
      ctaLabel: "About the school",
    },
    approach: {
      eyebrow: "Teaching approach",
      title: "Structured, personal, and practical",
      points: [
        {
          title: "Experienced educators",
          description: "A slot for teacher expertise and classroom care.",
        },
        {
          title: "Clear curriculum",
          description: "A slot for progression, homework, and feedback rhythm.",
        },
        {
          title: "Interactive online learning",
          description: "A slot for online class tools, speaking practice, and support.",
        },
      ],
    },
    team: {
      eyebrow: "Team preview",
      title: "Meet the teaching team",
      people: [
        { name: "Teacher profile", role: "Role pending review" },
        { name: "Teacher profile", role: "Role pending review" },
        { name: "Teacher profile", role: "Role pending review" },
        { name: "Teacher profile", role: "Role pending review" },
      ],
    },
    enrollment: {
      title: "Get ready for your first lesson",
      body:
        "The final registration form will be connected after field values, privacy text, and submission handling are approved.",
      ctaLabel: "Register interest",
    },
    testimonial: {
      eyebrow: "Community",
      quote:
        "A parent or learner testimonial can sit here once it has been reviewed for public use.",
      attribution: "Approved testimonial pending",
    },
  },
  ru: {
    hero: {
      eyebrow: "Онлайн-школа русского языка",
      title: "Русский язык с понятным маршрутом для каждого ученика",
      summary:
        "Главная страница с безопасным проверочным текстом для семей, экзаменационных учеников и взрослых. Утвержденные тексты и фотографии можно добавить позже.",
      primaryCtaLabel: "Попробовать урок",
      secondaryCtaLabel: "Выбрать курс",
    },
    courseChooser: {
      eyebrow: "Направления",
      title: "Выберите маршрут под вашу цель",
      courses: [
        {
          routeKey: "children",
          title: "Детские занятия",
          summary: "Основы русского языка для младших учеников.",
          bullets: ["Небольшие группы", "Возрастная структура", "Отслеживание прогресса"],
        },
        {
          routeKey: "gcse",
          title: "GCSE",
          summary: "Поддержка для подготовки к GCSE Russian.",
          bullets: ["План спецификации", "Пробные задания", "Уверенность на экзамене"],
        },
        {
          routeKey: "alevel",
          title: "A-Level",
          summary: "Продвинутая подготовка к A-Level Russian.",
          bullets: ["Поддержка эссе", "Устная практика", "Экзаменационная техника"],
        },
        {
          routeKey: "adults",
          title: "Курсы для взрослых",
          summary: "Гибкое обучение русскому языку для взрослых целей.",
          bullets: ["Начальный уровень", "Удобный темп", "Индивидуальная поддержка"],
        },
      ],
    },
    welcome: {
      eyebrow: "Добро пожаловать",
      title: "Теплая двуязычная учебная среда",
      body:
        "Этот раздел повторяет спокойное вступление текущего сайта, но использует безопасный текст до публичного утверждения. Позже здесь будут история школы, ценности и подтверждения доверия.",
      ctaLabel: "О школе",
    },
    approach: {
      eyebrow: "Подход к обучению",
      title: "Структурно, внимательно и практично",
      points: [
        {
          title: "Опытные преподаватели",
          description: "Место для экспертизы педагогов и заботы о классе.",
        },
        {
          title: "Понятная программа",
          description: "Место для прогресса, домашних заданий и обратной связи.",
        },
        {
          title: "Интерактивное онлайн-обучение",
          description: "Место для онлайн-инструментов, разговорной практики и поддержки.",
        },
      ],
    },
    team: {
      eyebrow: "Команда",
      title: "Познакомьтесь с преподавателями",
      people: [
        { name: "Профиль преподавателя", role: "Роль ожидает проверки" },
        { name: "Профиль преподавателя", role: "Роль ожидает проверки" },
        { name: "Профиль преподавателя", role: "Роль ожидает проверки" },
        { name: "Профиль преподавателя", role: "Роль ожидает проверки" },
      ],
    },
    enrollment: {
      title: "Подготовьтесь к первому уроку",
      body:
        "Финальная форма регистрации будет подключена после утверждения полей, текста о конфиденциальности и способа отправки.",
      ctaLabel: "Оставить интерес",
    },
    testimonial: {
      eyebrow: "Сообщество",
      quote:
        "Здесь может быть отзыв родителя или ученика после проверки и разрешения на публичное использование.",
      attribution: "Отзыв ожидает утверждения",
    },
  },
};
