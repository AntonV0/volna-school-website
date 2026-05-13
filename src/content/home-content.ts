import type { Locale } from "@/lib/i18n/config";
import type { PageRouteKey } from "@/lib/i18n/routing";

type HomeCourse = {
  routeKey: Extract<PageRouteKey, "children" | "gcse" | "alevel" | "adults">;
  title: string;
  summary: string;
  bullets: string[];
};

type HomeCourseDepthRoute = {
  routeKey: HomeCourse["routeKey"];
  eyebrow: string;
  title: string;
  summary: string;
  decisionBullets: string[];
  optionLabels: string[];
  proofLabel?: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  reviewNote?: string;
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
  courseDepth?: {
    eyebrow: string;
    title: string;
    intro: string;
    routes: HomeCourseDepthRoute[];
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
    routePrompt?: string;
    responseNote?: string;
  };
  testimonial: {
    eyebrow: string;
    quote: string;
    attribution: string;
    themes?: Array<{
      routeKey: HomeCourse["routeKey"];
      title: string;
      body: string;
      attribution: string;
      reviewNote?: string;
    }>;
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
    courseDepth: {
      eyebrow: "Course depth",
      title: "What each route includes",
      intro:
        "A quick comparison for families and adult learners who need more than a label before choosing the right next page.",
      routes: [
        {
          routeKey: "children",
          eyebrow: "Ages 3-16",
          title: "Children's Russian classes",
          summary:
            "For bilingual children, beginners, and families who want steady online Russian with homework, encouragement, and a clear next step.",
          decisionBullets: [
            "Bilingual and Russian-as-a-foreign-language routes",
            "Small online groups with regular teacher feedback",
            "Private tuition for custom pace or confidence support",
            "Homework and progress support between lessons",
            "A pathway toward GCSE Russian when the learner is ready",
          ],
          optionLabels: [
            "Bilingual groups",
            "RFL beginners",
            "Private tuition",
            "GCSE pathway",
          ],
          primaryCtaLabel: "View children's classes",
          secondaryCtaLabel: "Book a children's trial",
        },
        {
          routeKey: "gcse",
          eyebrow: "Pearson Edexcel",
          title: "GCSE Russian preparation",
          summary:
            "Structured GCSE Russian support for students who need exam practice, feedback, mock preparation, and a route into the right exam plan.",
          decisionBullets: [
            "1-year and 2-year GCSE preparation routes",
            "Pearson Edexcel Higher Tier focus",
            "Speaking, writing, reading, and listening practice",
            "Homework, feedback, and optional mock exam support",
            "Guidance around exam route and next steps",
          ],
          optionLabels: [
            "1-year route",
            "2-year route",
            "Mock support",
            "Private tuition",
          ],
          proofLabel: "Exam result proof",
          primaryCtaLabel: "View GCSE courses",
          secondaryCtaLabel: "Book a GCSE trial",
          reviewNote:
            "Review before launch: result and fee claims are sourced from private migration notes and should be business-approved.",
        },
        {
          routeKey: "alevel",
          eyebrow: "Advanced exam route",
          title: "A-Level Russian preparation",
          summary:
            "Advanced support for students working toward A-Level Russian, including essays, speaking, literature, film, and the independent research project.",
          decisionBullets: [
            "1-year and 2-year A-Level preparation routes",
            "Literature, film, essay, and speaking support",
            "Independent Research Project guidance",
            "Exam technique, feedback, and mock preparation",
            "University-facing language confidence",
          ],
          optionLabels: [
            "1-year route",
            "2-year route",
            "IRP support",
            "University prep",
          ],
          proofLabel: "A-Level result proof",
          primaryCtaLabel: "View A-Level courses",
          secondaryCtaLabel: "Book an A-Level trial",
          reviewNote:
            "Review before launch: result and fee claims are sourced from private migration notes and should be business-approved.",
        },
        {
          routeKey: "adults",
          eyebrow: "Flexible private learning",
          title: "Russian courses for adults",
          summary:
            "Private Russian tuition for adults learning from scratch, returning after a break, or building practical confidence for family, travel, culture, or work.",
          decisionBullets: [
            "Beginner, intermediate, and customised routes",
            "Flexible scheduling around adult learners",
            "Conversation, grammar, culture, and practical goals",
            "Native-speaker teacher support",
            "Progress tracked lesson by lesson",
          ],
          optionLabels: [
            "Beginner",
            "Intermediate",
            "Customised",
            "Flexible schedule",
          ],
          primaryCtaLabel: "View adult courses",
          secondaryCtaLabel: "Book an adult trial",
        },
      ],
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
        "Choose the most relevant course and send a short trial request. Volna will follow up to understand the learner's level, goals, timetable, and best next step.",
      ctaLabel: "Register for a Free Trial Lesson",
      routePrompt: "Choose a trial route",
      responseNote:
        "The first reply focuses on placement, timetable fit, and whether group or private support is the calmer next step.",
    },
    testimonial: {
      eyebrow: "What families notice",
      quote:
        "Families value lessons that feel friendly, structured, and confidence-building, especially when learners need a clear path into Russian or exam preparation.",
      attribution: "Volna School parent feedback theme",
      themes: [
        {
          routeKey: "children",
          title: "Children settle into a routine",
          body:
            "Parents are looking for warmth, clear homework, and a teacher who can keep Russian moving without making lessons feel intimidating.",
          attribution: "Children's classes feedback theme",
        },
        {
          routeKey: "gcse",
          title: "Exam families want clarity",
          body:
            "GCSE enquiries usually need a route, practice plan, mock support, and honest guidance about what must be checked for the current exam year.",
          attribution: "GCSE preparation feedback theme",
          reviewNote:
            "Review before launch: keep testimonial wording thematic until individual permission or public review text is approved.",
        },
        {
          routeKey: "alevel",
          title: "Advanced students need depth",
          body:
            "A-Level learners need more than conversation: essays, speaking confidence, cultural material, IRP planning, and regular feedback all matter.",
          attribution: "A-Level preparation feedback theme",
          reviewNote:
            "Review before launch: keep testimonial wording thematic until individual permission or public review text is approved.",
        },
        {
          routeKey: "adults",
          title: "Adults want practical progress",
          body:
            "Adult learners often come back to Russian with specific goals, so flexible private lessons and a calm first conversation are important.",
          attribution: "Adult learner feedback theme",
        },
      ],
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
