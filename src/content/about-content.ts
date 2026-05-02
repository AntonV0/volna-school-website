import type { Locale } from "@/lib/i18n/config";
import type { PageRouteKey } from "@/lib/i18n/routing";

type AboutAnchorId =
  | "proof"
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
    facts: Array<{
      label: string;
      value: string;
    }>;
  };
  anchors: Array<{
    id: AboutAnchorId;
    label: string;
  }>;
  welcome: {
    eyebrow: string;
    title: string;
    body: string[];
    signature: string;
    profile: {
      title: string;
      items: string[];
    };
  };
  proof: {
    eyebrow: string;
    title: string;
    items: Array<{
      value: string;
      label: string;
      detail: string;
    }>;
  };
  mission: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
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
    milestones: Array<{
      year: string;
      title: string;
      description: string;
    }>;
    notes: Array<{
      title: string;
      description: string;
    }>;
  };
  curriculum: {
    eyebrow: string;
    title: string;
    intro: string;
    tracks: Array<{
      title: string;
      description: string;
      points: string[];
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
      title: "From supplementary school roots to focused online Russian lessons",
      summary:
        "Volna School brings UK Russian supplementary-school experience into a focused online format for children, GCSE and A-Level students, and adult learners.",
      facts: [
        { label: "School roots", value: "Since 2009" },
        { label: "Online model", value: "Since 2020" },
        { label: "Course paths", value: "Children, exams, adults" },
      ],
    },
    anchors: [
      { id: "proof", label: "At a glance" },
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
      body: [
        "Volna is built for families and learners who want Russian lessons with structure rather than guesswork. Before a learner joins, the first conversation and trial lesson help match them to a suitable route.",
        "That route may be a bilingual children's group, a beginner-friendly Russian as a Foreign Language class, an exam preparation pathway, or individual tuition for a specific goal.",
        "The shared aim is simple: students should understand what they are learning, feel supported by their teacher, and see steady progress over time.",
      ],
      signature: "Elena Vlasenko, Headteacher",
      profile: {
        title: "Headteacher focus",
        items: [
          "Careful placement before families commit",
          "Curriculum continuity from children to exam routes",
          "Warm online lessons with clear expectations",
        ],
      },
    },
    proof: {
      eyebrow: "At a glance",
      title: "A school with a clear public story",
      items: [
        {
          value: "2009",
          label: "Supplementary-school roots",
          detail:
            "The school story begins with Russian supplementary education in the UK, before Volna moved into a fully online format.",
        },
        {
          value: "2020",
          label: "Online school launch",
          detail:
            "Volna's online model grew during the pandemic and remains central to the way lessons are delivered.",
        },
        {
          value: "4",
          label: "Main learner routes",
          detail:
            "Children's classes, GCSE, A-Level, and adult tuition are presented as connected but distinct pathways.",
        },
        {
          value: "UK",
          label: "Exam-aware teaching",
          detail:
            "Older learners are supported with GCSE and A-Level preparation, mock practice, and practical exam planning.",
        },
      ],
    },
    mission: {
      eyebrow: "Mission",
      title: "Supportive online learning with high expectations",
      body:
        "Volna School aims to combine qualified teaching, careful placement, regular feedback, and practical online routines so learners can build fluency, literacy, and exam confidence from wherever they study.",
      pillars: [
        {
          title: "Placement before pressure",
          description:
            "Families begin with a trial or consultation so the teacher can understand age, level, confidence, and goals.",
        },
        {
          title: "Structured online routines",
          description:
            "Lessons use live teaching, homework, feedback, and regular practice rather than passive self-study.",
        },
        {
          title: "Progression between routes",
          description:
            "Children can build toward GCSE when ready, while older learners can move from language foundations into exam technique.",
        },
      ],
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
        "Volna's public story starts with weekend Russian teaching in the UK and develops into a school designed around online lessons, careful placement, and course routes for different ages.",
      milestones: [
        {
          year: "2009",
          title: "Russian supplementary-school foundations",
          description:
            "The school story begins with weekend Russian language and literature teaching for children in the UK.",
        },
        {
          year: "2014",
          title: "Curriculum development",
          description:
            "The programme was developed with a stronger staged curriculum for children's language, literacy, and cultural learning.",
        },
        {
          year: "2020",
          title: "Volna Online Russian School",
          description:
            "The online format became the central model, making live Russian lessons accessible to families beyond one local classroom.",
        },
        {
          year: "Now",
          title: "Connected learner pathways",
          description:
            "Volna now presents linked routes for children, GCSE, A-Level, and adults, with placement guidance before enrolment.",
        },
      ],
      notes: [
        {
          title: "What changed online",
          description:
            "The school no longer depends on one local classroom; families can join live lessons from home while keeping a familiar school rhythm.",
        },
        {
          title: "What stayed consistent",
          description:
            "The teaching still centres on careful placement, teacher-led lessons, homework, feedback, and a warm Russian school identity.",
        },
      ],
    },
    curriculum: {
      eyebrow: "Curriculum",
      title: "Different paths for different learner goals",
      intro:
        "The curriculum is presented as a set of related pathways: children build foundations and bilingual confidence, exam students work toward specification demands, and adults study around practical goals.",
      tracks: [
        {
          title: "Children's curriculum",
          description:
            "Foundations, literacy, speaking confidence, culture, and progression toward later exam study.",
          points: [
            "Bilingual and beginner routes",
            "Reading, writing, speaking, grammar, and vocabulary",
            "Creative cultural tasks and homework rhythm",
          ],
        },
        {
          title: "GCSE and A-Level curriculum",
          description:
            "Specification-aware preparation, homework, feedback, exam technique, and confidence.",
          points: [
            "Listening, speaking, reading, and writing practice",
            "Mock-style preparation and timed tasks",
            "A-Level cultural study and independent research support",
          ],
        },
        {
          title: "Adult curriculum",
          description:
            "Flexible foundations, conversation, reading, culture, travel, family, or professional goals.",
          points: [
            "Beginner foundations and pronunciation",
            "Conversation practice with correction",
            "Private tuition shaped around individual aims",
          ],
        },
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
      title: "От дополнительной школы к сфокусированным онлайн-урокам русского",
      summary:
        "Volna School переносит опыт дополнительных русских школ в Великобритании в онлайн-формат для детей, учеников GCSE и A-Level и взрослых.",
      facts: [
        { label: "Школьные корни", value: "С 2009" },
        { label: "Онлайн-модель", value: "С 2020" },
        { label: "Маршруты", value: "Дети, экзамены, взрослые" },
      ],
    },
    anchors: [
      { id: "proof", label: "Кратко" },
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
      body: [
        "Volna создана для семей и учеников, которым нужны уроки русского со структурой, а не с догадками. Перед началом беседа и пробный урок помогают подобрать подходящий маршрут.",
        "Это может быть группа для билингвальных детей, русский как иностранный, экзаменационная подготовка или индивидуальные занятия под конкретную цель.",
        "Главная задача остается общей: ученик понимает, чему учится, чувствует поддержку преподавателя и видит устойчивый прогресс.",
      ],
      signature: "Елена Власенко, руководитель школы",
      profile: {
        title: "Фокус руководителя",
        items: [
          "Внимательный подбор уровня до оплаты курса",
          "Связная программа от детских групп к экзаменам",
          "Теплые онлайн-уроки с понятными ожиданиями",
        ],
      },
    },
    proof: {
      eyebrow: "Кратко",
      title: "У школы есть понятная публичная история",
      items: [
        {
          value: "2009",
          label: "Корни дополнительной школы",
          detail:
            "История школы начинается с дополнительного русского образования в Великобритании до перехода Volna в онлайн-формат.",
        },
        {
          value: "2020",
          label: "Запуск онлайн-школы",
          detail:
            "Онлайн-модель Volna развилась во время пандемии и остается центральной для проведения уроков.",
        },
        {
          value: "4",
          label: "Основные маршруты",
          detail:
            "Детские занятия, GCSE, A-Level и взрослые курсы представлены как связанные, но разные направления.",
        },
        {
          value: "UK",
          label: "Экзаменационная подготовка",
          detail:
            "Старшие ученики получают поддержку по GCSE и A-Level, пробным заданиям и практическому планированию экзамена.",
        },
      ],
    },
    mission: {
      eyebrow: "Миссия",
      title: "Поддерживающее онлайн-обучение с высокими ожиданиями",
      body:
        "Volna School соединяет квалифицированное преподавание, внимательный подбор уровня, регулярную обратную связь и понятный онлайн-ритм, чтобы ученики развивали речь, грамотность и экзаменационную уверенность.",
      pillars: [
        {
          title: "Подбор до давления",
          description:
            "Семья начинает с пробного урока или консультации, чтобы преподаватель понял возраст, уровень, уверенность и цели.",
        },
        {
          title: "Структурный онлайн-ритм",
          description:
            "Уроки строятся на живом преподавании, домашних заданиях, обратной связи и регулярной практике.",
        },
        {
          title: "Переход между маршрутами",
          description:
            "Дети могут постепенно двигаться к GCSE, а старшие ученики переходят от языковой базы к экзаменационной технике.",
        },
      ],
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
        "Публичная история Volna начинается с занятий русского в выходные и развивается в школу, построенную вокруг онлайн-уроков, внимательного подбора уровня и разных учебных маршрутов.",
      milestones: [
        {
          year: "2009",
          title: "Основа дополнительной русской школы",
          description:
            "История начинается с преподавания русского языка и литературы детям в Великобритании по выходным.",
        },
        {
          year: "2014",
          title: "Развитие программы",
          description:
            "Программа получила более последовательные этапы для языка, грамотности и культурного развития детей.",
        },
        {
          year: "2020",
          title: "Volna Online Russian School",
          description:
            "Онлайн-формат стал основной моделью и сделал живые уроки русского доступными не только для одного локального класса.",
        },
        {
          year: "Сейчас",
          title: "Связанные учебные маршруты",
          description:
            "Volna показывает маршруты для детей, GCSE, A-Level и взрослых с рекомендацией по уровню до начала обучения.",
        },
      ],
      notes: [
        {
          title: "Что изменилось онлайн",
          description:
            "Школа больше не зависит от одного локального класса: семьи могут подключаться к живым урокам из дома, сохраняя понятный школьный ритм.",
        },
        {
          title: "Что осталось прежним",
          description:
            "В центре остаются внимательный подбор уровня, уроки с преподавателем, домашняя практика, обратная связь и теплая русская школьная среда.",
        },
      ],
    },
    curriculum: {
      eyebrow: "Программа",
      title: "Разные маршруты для разных целей",
      intro:
        "Программа представлена как набор связанных маршрутов: дети строят базу и билингвальную уверенность, экзаменационные ученики работают с требованиями спецификаций, взрослые учатся вокруг практических целей.",
      tracks: [
        {
          title: "Детская программа",
          description:
            "Основы, грамотность, уверенная речь, культура и движение к экзаменационным курсам.",
          points: [
            "Маршруты для билингвальных детей и начинающих",
            "Чтение, письмо, речь, грамматика и словарь",
            "Творческие культурные задания и домашняя практика",
          ],
        },
        {
          title: "GCSE и A-Level",
          description:
            "Подготовка с учетом спецификаций, домашние задания, обратная связь и экзаменационная техника.",
          points: [
            "Практика аудирования, говорения, чтения и письма",
            "Пробные задания и работа на время",
            "Культурное исследование и поддержка IRP для A-Level",
          ],
        },
        {
          title: "Программа для взрослых",
          description:
            "Гибкие основы, разговор, чтение, культура, путешествия, семья или профессиональные цели.",
          points: [
            "Начальная база и произношение",
            "Разговорная практика с коррекцией",
            "Индивидуальные занятия под личные цели",
          ],
        },
      ],
    },
    classes: {
      eyebrow: "Выбор курса",
      title: "Выберите подходящее направление",
      routes: ["children", "gcse", "alevel", "adults"],
    },
  },
};
