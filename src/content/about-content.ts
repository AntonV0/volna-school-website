import type { Locale } from "@/lib/i18n/config";
import type { PageRouteKey } from "@/lib/i18n/routing";

type AboutAnchorId =
  | "welcome"
  | "mission"
  | "values"
  | "history"
  | "curriculum"
  | "classes";

type AboutContent = {
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
  };
  anchors: Array<{
    id: AboutAnchorId;
    label: string;
  }>;
  welcome: {
    eyebrow: string;
    title: string;
    body: string;
    signature: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    body: string;
  };
  values: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  history: {
    eyebrow: string;
    title: string;
    body: string;
    notes: string[];
  };
  curriculum: {
    eyebrow: string;
    title: string;
    tracks: Array<{
      title: string;
      description: string;
    }>;
  };
  classes: {
    eyebrow: string;
    title: string;
    routes: Array<Extract<PageRouteKey, "children" | "gcse" | "alevel" | "adults">>;
  };
};

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    hero: {
      eyebrow: "About Volna School",
      title: "A bilingual school story, ready for reviewed content",
      summary:
        "This About page structure follows the current site's history, mission, values, curriculum, and class selection flow without publishing unapproved long-form copy.",
    },
    anchors: [
      { id: "welcome", label: "Welcome" },
      { id: "mission", label: "Mission" },
      { id: "values", label: "Values" },
      { id: "history", label: "History" },
      { id: "curriculum", label: "Curriculum" },
      { id: "classes", label: "Classes" },
    ],
    welcome: {
      eyebrow: "Welcome",
      title: "A clear introduction for families and learners",
      body:
        "This placeholder section is designed for the headteacher welcome and school introduction once the public wording has been reviewed.",
      signature: "Headteacher note pending review",
    },
    mission: {
      eyebrow: "Mission",
      title: "Supportive Russian learning online",
      body:
        "A concise mission slot for the school's learning environment, teaching standards, and bilingual community promise.",
    },
    values: {
      eyebrow: "Values",
      title: "The principles that shape the school",
      items: [
        {
          title: "Excellence",
          description: "A slot for high standards and steady progress.",
        },
        {
          title: "Inclusivity",
          description: "A slot for welcoming learners with varied backgrounds.",
        },
        {
          title: "Integrity",
          description: "A slot for trust, clarity, and responsible teaching.",
        },
        {
          title: "Cooperation",
          description: "A slot for partnership between teachers and families.",
        },
        {
          title: "Leadership",
          description: "A slot for confident learning and learner ownership.",
        },
        {
          title: "Community",
          description: "A slot for belonging across English and Russian speakers.",
        },
      ],
    },
    history: {
      eyebrow: "History",
      title: "From local school roots to online learning",
      body:
        "This section mirrors the current page's school history flow, ready for approved dates, milestones, and image captions.",
      notes: [
        "Use reviewed public milestones only.",
        "Add approved community photography after asset review.",
        "Keep dense history copy broken into scannable blocks.",
      ],
    },
    curriculum: {
      eyebrow: "Curriculum",
      title: "A distinct path for each learner group",
      tracks: [
        {
          title: "Children's curriculum",
          description:
            "A safe placeholder for foundations, literacy, speaking, and progression.",
        },
        {
          title: "GCSE and A-Level curriculum",
          description:
            "A safe placeholder for specifications, exam preparation, and feedback.",
        },
        {
          title: "Adult curriculum",
          description:
            "A safe placeholder for flexible goals, confidence, and practical use.",
        },
      ],
    },
    classes: {
      eyebrow: "Class selection",
      title: "Choose a class and enroll when ready",
      routes: ["children", "gcse", "alevel", "adults"],
    },
  },
  ru: {
    hero: {
      eyebrow: "О Volna School",
      title: "История двуязычной школы для проверенного контента",
      summary:
        "Структура страницы повторяет логику текущего сайта: история, миссия, ценности, программа и выбор класса без публикации неутвержденного длинного текста.",
    },
    anchors: [
      { id: "welcome", label: "Приветствие" },
      { id: "mission", label: "Миссия" },
      { id: "values", label: "Ценности" },
      { id: "history", label: "История" },
      { id: "curriculum", label: "Программа" },
      { id: "classes", label: "Классы" },
    ],
    welcome: {
      eyebrow: "Приветствие",
      title: "Понятное вступление для семей и учеников",
      body:
        "Этот временный раздел предназначен для приветствия руководителя и вводного текста школы после проверки публичной формулировки.",
      signature: "Заметка руководителя ожидает проверки",
    },
    mission: {
      eyebrow: "Миссия",
      title: "Поддерживающее онлайн-обучение русскому языку",
      body:
        "Краткое место для описания учебной среды, педагогических стандартов и двуязычного сообщества школы.",
    },
    values: {
      eyebrow: "Ценности",
      title: "Принципы, которые формируют школу",
      items: [
        {
          title: "Качество",
          description: "Место для высоких стандартов и стабильного прогресса.",
        },
        {
          title: "Открытость",
          description: "Место для учеников с разным языковым опытом.",
        },
        {
          title: "Честность",
          description: "Место для доверия, ясности и ответственного обучения.",
        },
        {
          title: "Сотрудничество",
          description: "Место для связи между преподавателями и семьями.",
        },
        {
          title: "Самостоятельность",
          description: "Место для уверенного и осознанного обучения.",
        },
        {
          title: "Сообщество",
          description: "Место для связи между англо- и русскоязычными учениками.",
        },
      ],
    },
    history: {
      eyebrow: "История",
      title: "От местных школьных корней к онлайн-обучению",
      body:
        "Этот раздел повторяет историческую структуру текущей страницы и готов для утвержденных дат, этапов и подписей к изображениям.",
      notes: [
        "Использовать только проверенные публичные этапы.",
        "Добавить утвержденные фотографии после проверки активов.",
        "Длинный исторический текст разбивать на удобные блоки.",
      ],
    },
    curriculum: {
      eyebrow: "Программа",
      title: "Отдельный путь для каждой группы учеников",
      tracks: [
        {
          title: "Детская программа",
          description:
            "Безопасное место для основ языка, грамотности, речи и прогресса.",
        },
        {
          title: "Программа GCSE и A-Level",
          description:
            "Безопасное место для спецификаций, подготовки к экзаменам и обратной связи.",
        },
        {
          title: "Программа для взрослых",
          description:
            "Безопасное место для гибких целей, уверенности и практического применения.",
        },
      ],
    },
    classes: {
      eyebrow: "Выбор класса",
      title: "Выберите класс и запишитесь, когда будете готовы",
      routes: ["children", "gcse", "alevel", "adults"],
    },
  },
};
