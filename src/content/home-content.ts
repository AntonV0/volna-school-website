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
    trustSignals: string[];
  };
  courseChooser: {
    eyebrow: string;
    title: string;
    courses: HomeCourse[];
    placement: {
      title: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
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
      focus: string;
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
      title: "Learn Russian online with Volna School",
      summary:
        "Warm, structured Russian lessons for children, GCSE and A-Level students, and adults, with careful placement and a free first lesson.",
      primaryCtaLabel: "Register for a Free Trial Lesson",
      secondaryCtaLabel: "Find the right class",
      trustSignals: [
        "UK-based online school",
        "Free first lesson",
        "Teams and Zoom lessons",
        "Children, exams, and adults",
      ],
    },
    courseChooser: {
      eyebrow: "Course routes",
      title: "Choose the right course route",
      courses: [
        {
          routeKey: "children",
          title: "Children's Classes",
          summary:
            "Friendly weekly Russian lessons for bilingual children, beginners, and children who need individual support.",
          bullets: ["Ages 3-16", "Group and private options", "Homework and progress support"],
        },
        {
          routeKey: "gcse",
          title: "GCSE Courses",
          summary:
            "Teacher-led Pearson Edexcel GCSE Russian preparation with exam practice, feedback, and entry guidance.",
          bullets: ["1-year and 2-year routes", "Mock exam support", "Exam entry guidance"],
        },
        {
          routeKey: "alevel",
          title: "A-Level Courses",
          summary:
            "Advanced Russian support for speaking, essays, literature, film, and the independent research project.",
          bullets: ["Advanced exam preparation", "Essay and speaking practice", "IRP support"],
        },
        {
          routeKey: "adults",
          title: "Adult Courses",
          summary:
            "Private Russian tuition for beginners, returning learners, conversation, travel, culture, and work.",
          bullets: ["Beginner to tailored support", "Flexible scheduling", "Practical conversation"],
        },
      ],
      placement: {
        title: "How the right route is chosen",
        steps: [
          {
            title: "Share the learner context",
            description:
              "Tell the school about age, current Russian level, exam plans, confidence, and preferred lesson format.",
          },
          {
            title: "Use the free trial lesson",
            description:
              "The first lesson or consultation helps check level, learning style, and whether group or private support is the better fit.",
          },
          {
            title: "Confirm the next step",
            description:
              "The school recommends a course route, lesson rhythm, homework expectations, and any exam-planning checks that matter.",
          },
        ],
      },
    },
    welcome: {
      eyebrow: "Welcome",
      title: "A warm online Russian school with real classroom roots",
      body:
        "Before Volna became an online school, our teachers worked with children and families through supplementary Russian schools across the UK. That community spirit still shapes the lessons: warm, structured, practical, and personal.",
      ctaLabel: "About the school",
    },
    approach: {
      eyebrow: "Teaching approach",
      title: "Structured, personal, and practical",
      points: [
        {
          title: "Experienced educators",
          description:
            "Learners are guided by teachers with a track record in Russian language teaching, exam preparation, and family communication.",
        },
        {
          title: "Comprehensive curriculum",
          description:
            "Lessons balance grammar, vocabulary, reading, writing, listening, and speaking, with course-specific routes for GCSE and A-Level.",
        },
        {
          title: "Interactive online learning",
          description:
            "Online lessons use familiar video tools, clear routines, homework, feedback, and speaking practice to keep learners engaged.",
        },
        {
          title: "Careful placement",
          description:
            "The trial lesson helps the school recommend a class or private route based on age, goals, fluency, and confidence.",
        },
      ],
    },
    team: {
      eyebrow: "Lead teaching team",
      title: "Meet the people guiding the school",
      people: [
        {
          focus: "School leadership",
          name: "Elena Vlasenko",
          role: "Headteacher and Russian educator",
        },
        {
          focus: "Exam preparation",
          name: "Marina Lucas",
          role: "GCSE and A-Level Russian tutor",
        },
        {
          focus: "Early-years learning",
          name: "Irina Nogai",
          role: "Early-years Russian teacher",
        },
        {
          focus: "Admissions and operations",
          name: "Anton Vlasenko",
          role: "School director and operations lead",
        },
      ],
    },
    enrollment: {
      title: "Start with a free first lesson",
      body:
        "Choose the most relevant course and send a short trial request. The school will follow up to understand the learner's level, goals, timetable, and best next step.",
      ctaLabel: "Register for a Free Trial Lesson",
    },
    testimonial: {
      eyebrow: "Community",
      quote:
        "Families value lessons that feel friendly, structured, and confidence-building, especially when learners need a clear path into Russian or exam preparation.",
      attribution: "Volna School parent feedback theme",
    },
  },
  ru: {
    hero: {
      eyebrow: "Онлайн-школа русского языка",
      title: "Русский онлайн с понятным маршрутом для каждого ученика",
      summary:
        "Volna School помогает детям, ученикам GCSE и A-Level, а также взрослым изучать русский язык онлайн: со структурой, внимательным подбором класса и бесплатным первым уроком.",
      primaryCtaLabel: "Записаться на бесплатный пробный урок",
      secondaryCtaLabel: "Выбрать курс",
      trustSignals: [
        "Онлайн-школа в Великобритании",
        "Бесплатный первый урок",
        "Уроки в Teams и Zoom",
        "Дети, экзамены и взрослые",
      ],
    },
    courseChooser: {
      eyebrow: "Направления",
      title: "Выберите курс под вашу цель",
      courses: [
        {
          routeKey: "children",
          title: "Детские занятия",
          summary:
            "Занятия для билингвальных детей, начинающих учеников и тех, кому нужна индивидуальная поддержка.",
          bullets: ["Возраст 3-16 лет", "Группы и индивидуальные уроки", "Домашние задания и прогресс"],
        },
        {
          routeKey: "gcse",
          title: "GCSE",
          summary:
            "Подготовка к Pearson Edexcel GCSE Russian со структурированной практикой и обратной связью.",
          bullets: ["Маршруты на 1 и 2 года", "Поддержка пробных экзаменов", "Помощь с экзаменационным планом"],
        },
        {
          routeKey: "alevel",
          title: "A-Level",
          summary:
            "Продвинутая подготовка: точность языка, эссе, устная часть, литература, фильм и исследовательский проект.",
          bullets: ["Продвинутая экзаменационная подготовка", "Эссе и устная практика", "Поддержка IRP"],
        },
        {
          routeKey: "adults",
          title: "Курсы для взрослых",
          summary:
            "Гибкие занятия для начинающих, продолжающих, разговорной практики и профессиональных целей.",
          bullets: ["От основ до индивидуальных целей", "Гибкое расписание", "Практическая речь"],
        },
      ],
      placement: {
        title: "Как выбирается подходящий маршрут",
        steps: [
          {
            title: "Опишите ситуацию ученика",
            description:
              "Укажите возраст, текущий уровень русского, экзаменационные планы, уверенность и желаемый формат занятий.",
          },
          {
            title: "Используйте бесплатный пробный урок",
            description:
              "Первый урок или консультация помогает проверить уровень, стиль обучения и подходящий формат: группа или индивидуальная поддержка.",
          },
          {
            title: "Подтвердите следующий шаг",
            description:
              "Школа рекомендует маршрут, учебный ритм, домашние задания и важные проверки, если речь идет об экзамене.",
          },
        ],
      },
    },
    welcome: {
      eyebrow: "Добро пожаловать",
      title: "Теплая онлайн-школа русского языка в Великобритании",
      body:
        "Школа объединяет опытных преподавателей, понятный онлайн-формат и практическую программу для учеников разного возраста и уровня. Атмосфера остается дружелюбной, а учебный путь - ясным.",
      ctaLabel: "О школе",
    },
    approach: {
      eyebrow: "Подход к обучению",
      title: "Структурно, внимательно и практично",
      points: [
        {
          title: "Опытные преподаватели",
          description:
            "Ученики занимаются с педагогами, у которых есть опыт преподавания русского языка, подготовки к экзаменам и общения с семьями.",
        },
        {
          title: "Полная программа",
          description:
            "Уроки развивают грамматику, словарный запас, чтение, письмо, аудирование и речь, а для GCSE и A-Level есть отдельные маршруты.",
        },
        {
          title: "Интерактивные онлайн-уроки",
          description:
            "Занятия проходят в знакомых видеосервисах с понятным ритмом, домашними заданиями, обратной связью и разговорной практикой.",
        },
        {
          title: "Внимательный подбор класса",
          description:
            "Пробный урок помогает подобрать группу или индивидуальный формат с учетом возраста, целей, уровня и уверенности ученика.",
        },
      ],
    },
    team: {
      eyebrow: "Команда",
      title: "Люди, которые ведут школу",
      people: [
        {
          focus: "Руководство школой",
          name: "Елена Власенко",
          role: "Руководитель школы и преподаватель русского",
        },
        {
          focus: "Подготовка к экзаменам",
          name: "Марина Лукас",
          role: "Преподаватель GCSE и A-Level",
        },
        {
          focus: "Младшие дети",
          name: "Ирина Ногай",
          role: "Преподаватель русского для младших детей",
        },
        {
          focus: "Запись и организация",
          name: "Антон Власенко",
          role: "Директор школы и операционный руководитель",
        },
      ],
    },
    enrollment: {
      title: "Начните с бесплатного первого урока",
      body:
        "Выберите подходящее направление и отправьте короткую заявку. Школа свяжется с вами, чтобы уточнить уровень, цели, расписание и лучший следующий шаг.",
      ctaLabel: "Записаться на бесплатный пробный урок",
    },
    testimonial: {
      eyebrow: "Сообщество",
      quote:
        "Семьи ценят занятия, которые одновременно дружелюбные, структурные и помогают ученикам увереннее двигаться к русскому языку или экзаменам.",
      attribution: "Общая тема отзывов родителей Volna School",
    },
  },
};
