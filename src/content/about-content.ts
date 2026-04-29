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
      title: "A warm, structured online Russian school",
      summary:
        "Volna School brings the experience of UK supplementary Russian schools into a focused online format for children, exam students, and adult learners.",
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
      title: "Learning Russian should feel clear, personal, and encouraging",
      body:
        "The school is designed for families and learners who want Russian lessons with structure rather than guesswork. Before a learner joins, the first conversation and trial lesson help match them to a suitable route.",
      signature: "Headteacher welcome to be owner-approved before launch",
    },
    mission: {
      eyebrow: "Mission",
      title: "Supportive online learning with high expectations",
      body:
        "Volna School aims to combine qualified teaching, careful placement, regular feedback, and practical online routines so learners can build fluency, literacy, and exam confidence from wherever they study.",
    },
    values: {
      eyebrow: "Values",
      title: "The principles that shape the school",
      items: [
        { title: "Excellence", description: "Clear standards, thoughtful planning, and steady progress." },
        { title: "Inclusivity", description: "Routes for bilingual learners, beginners, exam students, and adults." },
        { title: "Integrity", description: "Honest guidance about level, course fit, fees, and next steps." },
        { title: "Cooperation", description: "Communication between teachers, learners, and families." },
        { title: "Confidence", description: "A calm environment where learners can speak, ask, and improve." },
        { title: "Community", description: "A bilingual school identity that respects both English and Russian contexts." },
      ],
    },
    history: {
      eyebrow: "History",
      title: "From local school roots to an online Russian school",
      body:
        "The original site describes a move from in-person supplementary school experience into an online-only Russian school model in 2020. The final launch should keep that story, rewritten and approved for public use.",
      notes: [
        "Use only approved dates, milestones, and public-safe school history.",
        "Add staff or community images only after asset permission is confirmed.",
        "Keep the story scannable on mobile rather than copying long source blocks.",
      ],
    },
    curriculum: {
      eyebrow: "Curriculum",
      title: "Different paths for different learner goals",
      tracks: [
        { title: "Children's curriculum", description: "Foundations, literacy, speaking confidence, culture, and progression toward later exam study." },
        { title: "GCSE and A-Level curriculum", description: "Specification-aware preparation, homework, feedback, exam technique, and confidence." },
        { title: "Adult curriculum", description: "Flexible foundations, conversation, reading, culture, travel, family, or professional goals." },
      ],
    },
    classes: {
      eyebrow: "Class selection",
      title: "Choose the right course path",
      routes: ["children", "gcse", "alevel", "adults"],
    },
  },
  ru: {
    hero: {
      eyebrow: "О Volna School",
      title: "Теплая и структурная онлайн-школа русского языка",
      summary:
        "Volna School переносит опыт дополнительных русских школ в Великобритании в сфокусированный онлайн-формат для детей, экзаменационных учеников и взрослых.",
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
      title: "Изучение русского должно быть понятным, личным и поддерживающим",
      body:
        "Школа создана для семей и учеников, которым нужны занятия со структурой. Перед началом первая беседа и пробный урок помогают подобрать подходящий маршрут.",
      signature: "Приветствие руководителя требует утверждения перед запуском",
    },
    mission: {
      eyebrow: "Миссия",
      title: "Поддерживающее онлайн-обучение с высокими ожиданиями",
      body:
        "Volna School соединяет квалифицированное преподавание, внимательный подбор уровня, регулярную обратную связь и понятный онлайн-ритм, чтобы ученики развивали речь, грамотность и экзаменационную уверенность.",
    },
    values: {
      eyebrow: "Ценности",
      title: "Принципы, которые формируют школу",
      items: [
        { title: "Качество", description: "Ясные стандарты, продуманная программа и устойчивый прогресс." },
        { title: "Открытость", description: "Маршруты для билингвальных детей, начинающих, экзаменационных учеников и взрослых." },
        { title: "Честность", description: "Открытые рекомендации по уровню, формату, ценам и следующим шагам." },
        { title: "Сотрудничество", description: "Связь между преподавателями, учениками и семьями." },
        { title: "Уверенность", description: "Спокойная среда, где можно говорить, спрашивать и развиваться." },
        { title: "Сообщество", description: "Двуязычная идентичность школы в английском и русском контексте." },
      ],
    },
    history: {
      eyebrow: "История",
      title: "От локальных школьных корней к онлайн-школе русского",
      body:
        "Исходный сайт рассказывает о переходе от опыта очных дополнительных школ к онлайн-модели в 2020 году. Для финального запуска эту историю нужно сохранить, переписать и утвердить.",
      notes: [
        "Использовать только утвержденные даты, этапы и публично безопасную историю школы.",
        "Добавлять фотографии команды или сообщества только после подтверждения прав.",
        "На мобильных устройствах история должна быть удобной для чтения, а не длинным скопированным текстом.",
      ],
    },
    curriculum: {
      eyebrow: "Программа",
      title: "Разные маршруты для разных целей",
      tracks: [
        { title: "Детская программа", description: "Основы, грамотность, уверенная речь, культура и движение к экзаменационным курсам." },
        { title: "GCSE и A-Level", description: "Подготовка с учетом спецификаций, домашние задания, обратная связь и экзаменационная техника." },
        { title: "Программа для взрослых", description: "Гибкие основы, разговор, чтение, культура, путешествия, семья или профессиональные цели." },
      ],
    },
    classes: {
      eyebrow: "Выбор курса",
      title: "Выберите подходящее направление",
      routes: ["children", "gcse", "alevel", "adults"],
    },
  },
};
