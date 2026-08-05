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
  decisionHeading?: string;
  decisionBullets: string[];
  optionLabels: string[];
  proofLabel?: string;
  proofNote?: string;
  proofValue?: string;
  actionPrompt: string;
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
    title?: string;
    quote?: string;
    attribution?: string;
    items?: Array<{
      routeKey: HomeCourse["routeKey"];
      courseLabel: string;
      name: string;
      quote: string;
      role: string;
    }>;
  };
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    hero: {
      eyebrow: "UK-based online Russian school",
      title: "Online Russian Tuition for All Ages",
      summary:
        "Explore Russian group classes, GCSE and A Level courses, and private tuition for children, exam students, and adults. Volna helps learners grow in fluency and confidence through structured, expert-led lessons.",
      primaryCtaLabel: "Try a Free Russian Lesson",
      secondaryCtaLabel: "Find the right class",
      trustSignals: [
        "UK-based online school",
        "Free first lesson",
        "Teams and Zoom lessons",
        "Children, exams, and adults",
      ],
    },
    courseChooser: {
      eyebrow: "Classes and courses",
      title: "Choose the right class",
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
          title: "A Level Courses",
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
      eyebrow: "Class details",
      title: "What each class path includes",
      intro:
        "A quick comparison for families and adult learners who need more than a label before choosing the right next page.",
      routes: [
        {
          routeKey: "children",
          eyebrow: "Ages 3–16 · Group classes · 1-to-1 tuition",
          title: "Russian classes for children",
          summary:
            "Structured and engaging lessons that build confidence in communication, stronger literacy and steady progress in Russian.",
          decisionHeading: "Designed for children who",
          decisionBullets: [
            "Speak Russian at home and want to develop greater fluency and accuracy",
            "Are learning Russian as a new language for the first time",
            "Benefit from regular homework and clear teacher feedback",
            "Want to make long-term progress towards GCSE Russian",
          ],
          optionLabels: [
            "Bilingual groups",
            "RFL beginners",
            "Private tuition",
            "GCSE pathway",
          ],
          proofLabel: "Choose from",
          proofValue: "10 classes",
          proofNote: "For every learning stage",
          actionPrompt: "Find the right starting class",
          primaryCtaLabel: "View children's classes",
          secondaryCtaLabel: "Ask about class fit",
        },
        {
          routeKey: "gcse",
          eyebrow: "Pearson Edexcel · 1RU0 · Higher tier",
          title: "GCSE Russian courses",
          summary:
            "Structured GCSE Russian support for students who need exam practice, feedback, mock preparation, and a route into the right exam plan.",
          decisionHeading: "Designed for students who",
          decisionBullets: [
            "Need a one-year intensive or two-year structured route",
            "Want focused practice in listening, speaking, reading and writing",
            "Benefit from regular homework, detailed marking and feedback",
            "Need mock-exam practice and support with exam technique",
          ],
          optionLabels: [
            "1-year route",
            "2-year route",
            "Mock support",
            "Private tuition",
          ],
          proofLabel: "GCSE results since 2020",
          proofValue: "100% pass rate",
          proofNote: "Most students achieved Grade 9",
          actionPrompt: "Choose the right exam route",
          primaryCtaLabel: "View GCSE courses",
          secondaryCtaLabel: "Get exam course advice",
          reviewNote:
            "Review before launch: result and fee claims are sourced from private migration notes and should be business-approved.",
        },
        {
          routeKey: "alevel",
          eyebrow: "Pearson Edexcel · 9RU0",
          title: "A Level Russian courses",
          summary:
            "Advanced support for students working toward A Level Russian, including essays, speaking, literature, film, and the independent research project.",
          decisionHeading: "Designed for students who",
          decisionBullets: [
            "Have strong Russian foundations and are ready for advanced study",
            "Need a one-year intensive or two-year structured route",
            "Want support with literature, film, essays, speaking and the IRP",
            "Benefit from detailed feedback, mock exams and focused exam technique",
          ],
          optionLabels: [
            "1-year route",
            "2-year route",
            "IRP support",
            "University prep",
          ],
          proofLabel: "A Level results since 2020",
          proofValue: "100% pass rate",
          proofNote: "Most students achieved A* or A",
          actionPrompt: "Build the right preparation plan",
          primaryCtaLabel: "View A Level courses",
          secondaryCtaLabel: "Get exam course advice",
          reviewNote:
            "Review before launch: result and fee claims are sourced from private migration notes and should be business-approved.",
        },
        {
          routeKey: "adults",
          eyebrow: "Private tuition · Flexible scheduling",
          title: "Russian courses for adults",
          summary:
            "Private Russian tuition for adults learning from scratch, returning after a break, or building practical confidence for family, travel, culture, or work.",
          decisionHeading: "Designed for adults who",
          decisionBullets: [
            "Are starting from scratch or returning after a break",
            "Want Russian for family, travel, culture or work",
            "Need practical speaking alongside clear grammar and vocabulary support",
            "Value native-speaker guidance and progress tracked over time",
          ],
          optionLabels: [
            "Beginner",
            "Intermediate",
            "Customised",
            "Flexible schedule",
          ],
          actionPrompt: "Shape lessons around your goals",
          primaryCtaLabel: "View adult courses",
          secondaryCtaLabel: "Ask about class fit",
        },
      ],
    },
    welcome: {
      eyebrow: "Welcome",
      title: "Welcome to Volna School",
      body:
        "A trusted online Russian school based in the UK, offering live Microsoft Teams and Zoom lessons for children, exam students, and adults.",
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
            "Lessons balance grammar, vocabulary, reading, writing, listening, and speaking, with course-specific routes for GCSE and A Level.",
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
          role: "GCSE and A Level Russian tutor",
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
      ctaLabel: "Start Registration",
      routePrompt: "Choose a trial route",
      responseNote:
        "The first reply focuses on placement, timetable fit, and whether group or private support is the calmer next step.",
    },
    testimonial: {
      eyebrow: "Community voices",
      title: "What Our Community Says",
      items: [
        {
          routeKey: "children",
          courseLabel: "Bilingual Children’s Classes",
          name: "Ekaterina",
          quote:
            "My son already knew some Russian when he joined, but Volna School has helped him keep progressing as if he were still attending school in Russia. He enjoys learning with his friends, says the lessons are fun and always looks forward to class.",
          role: "Parent",
        },
        {
          routeKey: "children",
          courseLabel: "RFL Children’s Classes",
          name: "Ivan",
          quote:
            "Within a few weeks of joining Volna, my daughter was eager to teach me the new Russian words she had learned. She started without knowing any Russian, so it has been lovely to see how quickly she settled in and how much she enjoys it.",
          role: "Parent",
        },
        {
          routeKey: "gcse",
          courseLabel: "GCSE Course",
          name: "Tatiana",
          quote:
            "I speak Russian fluently myself, but helping my daughter prepare for the GCSE was a completely different matter. Her tutors knew exactly what the exam required and gave her plenty of extra practice. When she opened her results and saw a Grade 9, we were both thrilled.",
          role: "Parent",
        },
        {
          routeKey: "gcse",
          courseLabel: "GCSE Course",
          name: "Daniel",
          quote:
            "I never expected to get a Grade 9 when I joined Volna two years ago. I could barely put a Russian sentence together and writing was a real struggle, but discussing difficult topics with the other students helped everything make much more sense.",
          role: "Student",
        },
        {
          routeKey: "alevel",
          courseLabel: "A Level Course",
          name: "Svetlana",
          quote:
            "What impressed us most was how quickly my son’s teacher understood where he needed support. The jump to A Level was bigger than we expected, particularly the literature and essay writing, but with individual guidance he went into his exams well prepared and achieved the grades he needed for university.",
          role: "Parent",
        },
        {
          routeKey: "alevel",
          courseLabel: "A Level Course",
          name: "Sasha",
          quote:
            "Being offered a place at my first-choice university was a wonderful end to my four years at Volna. By then, my teachers really knew when I needed encouragement, and their feedback on my essays and my research project helped me achieve an A*.",
          role: "Student",
        },
        {
          routeKey: "adults",
          courseLabel: "Beginner Adult Course",
          name: "Paul",
          quote:
            "I started learning Russian because my wife’s family doesn’t speak much English. After six months of private lessons, I can finally join in at the dinner table instead of just smiling and nodding.",
          role: "Adult Learner",
        },
        {
          routeKey: "adults",
          courseLabel: "Intermediate Adult Course",
          name: "Lily",
          quote:
            "I could already get by in Russian, but I relied on the same phrases and often translated directly from English. The lessons have helped me notice mistakes I had been making for years. I now speak more naturally and don’t get stuck halfway through a conversation.",
          role: "Adult Learner",
        },
      ],
    },
  },
  ru: {
    hero: {
      eyebrow: "Онлайн-школа русского языка",
      title: "Русский онлайн с понятным маршрутом обучения",
      summary:
        "Volna School помогает детям, ученикам GCSE и A Level, а также взрослым изучать русский язык онлайн: со структурой, внимательным подбором класса и бесплатным первым уроком.",
      primaryCtaLabel: "Записаться на пробный урок",
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
          title: "A Level",
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
            "Уроки развивают грамматику, словарный запас, чтение, письмо, аудирование и речь, а для GCSE и A Level есть отдельные маршруты.",
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
          role: "Преподаватель GCSE и A Level",
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
      ctaLabel: "Начать запись",
    },
    testimonial: {
      eyebrow: "Сообщество",
      quote:
        "Семьи ценят занятия, которые одновременно дружелюбные, структурные и помогают ученикам увереннее двигаться к русскому языку или экзаменам.",
      attribution: "Общая тема отзывов родителей Volna School",
    },
  },
};
