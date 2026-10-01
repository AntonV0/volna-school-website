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
    introduction?: string;
    title: string;
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
      eyebrow: "A UK-based Russian school",
      title: "Online Russian lessons for all ages",
      summary:
        "Explore group classes, GCSE and A Level Russian courses, and private tuition at Volna School. Our structured, teacher-led lessons help learners develop fluency and confidence.",
      primaryCtaLabel: "Request a free trial lesson",
      secondaryCtaLabel: "Compare classes and courses",
      trustSignals: [
        "UK-based online school",
        "Free trial lesson",
        "Teams and Zoom lessons",
        "Children, exams, and adults",
      ],
    },
    courseChooser: {
      eyebrow: "Classes and courses",
      title: "Russian classes for every learner",
      courses: [
        {
          routeKey: "children",
          title: "Classes for children",
          summary:
            "Weekly Russian lessons for complete beginners, bilingual learners, and children needing individual support.",
          bullets: ["Ages 3-16", "Group and private options", "Homework and progress support"],
        },
        {
          routeKey: "gcse",
          title: "GCSE courses",
          summary:
            "For school-age learners with existing Russian who want to work towards a GCSE qualification.",
          bullets: ["1-year and 2-year routes", "Mock exam support", "Exam entry guidance"],
        },
        {
          routeKey: "alevel",
          title: "A Level courses",
          summary:
            "For students ready to develop advanced Russian and work towards an A Level qualification.",
          bullets: ["Advanced exam preparation", "Essay and speaking practice", "IRP support"],
        },
        {
          routeKey: "adults",
          title: "Courses for adults",
          summary:
            "For adults starting Russian, returning to study or learning for family, travel, culture or work.",
          bullets: ["Beginner to tailored support", "Flexible scheduling", "Practical conversation"],
        },
      ],
      placement: {
        title: "How the right route is chosen",
        steps: [
          {
            title: "Tell us about the learner",
            description:
              "Share the learner’s age, current Russian level, goals and the course you are considering.",
          },
          {
            title: "We arrange the trial",
            description:
              "We’ll discuss the learner’s needs and agree a suitable lesson time and format.",
          },
          {
            title: "Confirm the right route",
            description:
              "After the trial, we recommend the most suitable class or private tuition option.",
          },
        ],
      },
    },
    courseDepth: {
      introduction: "Compare our",
      title: "Russian classes and courses",
      routes: [
        {
          routeKey: "children",
          eyebrow: "Ages 3–16 · Beginners and bilingual learners",
          title: "Russian classes for children",
          summary:
            "Choose from ten groups across age and ability levels, or private tuition. Lessons combine guided practice, homework and teacher feedback.",
          decisionHeading: "Designed for children who",
          decisionBullets: [
            "Speak Russian at home and want greater fluency and accuracy",
            "Are starting Russian with little or no previous experience",
            "Benefit from regular homework and teacher feedback",
            "Want to build strong foundations for future GCSE Russian study",
          ],
          optionLabels: [
            "Bilingual groups",
            "Russian for beginners",
            "Early years",
            "1-to-1 tuition",
          ],
          proofLabel: "Choose from",
          proofValue: "10 classes",
          proofNote: "Across ages and ability levels",
          actionPrompt: "Find the right starting class",
          primaryCtaLabel: "View classes for children",
          secondaryCtaLabel: "Request a free trial lesson",
        },
        {
          routeKey: "gcse",
          eyebrow: "Pearson Edexcel · 1RU0 · Higher tier",
          title: "GCSE Russian courses",
          summary:
            "Choose a one-year course, a two-year course or private tuition, with structured coverage of the Higher Tier specification and practice for each paper.",
          decisionHeading: "Designed for students who",
          decisionBullets: [
            "Have basic reading and writing skills in Russian",
            "Want all exam themes, grammar and vocabulary taught systematically",
            "Benefit from weekly homework, detailed marking and specific feedback",
            "Need speaking practice, timed mocks and guidance on arranging exam entry",
          ],
          optionLabels: [
            "One-year course",
            "Two-year course",
            "Private tuition",
            "Speaking exam prep",
          ],
          proofLabel: "GCSE results since 2020",
          proofValue: "100% pass rate",
          proofNote: "Most students achieved Grade 9",
          actionPrompt: "Compare your GCSE study options",
          primaryCtaLabel: "View GCSE courses",
          secondaryCtaLabel: "Request a free trial lesson",
        },
        {
          routeKey: "alevel",
          eyebrow: "Pearson Edexcel · 9RU0",
          title: "A Level Russian courses",
          summary:
            "Choose a one-year course, a two-year course or private tuition, with literature and film analysis, essay practice and independent research support.",
          decisionHeading: "Designed for students who",
          decisionBullets: [
            "Have strong reading, writing and speaking skills; Russian GCSE is recommended",
            "Need analytical essay practice on the set literature and film",
            "Want to present and discuss their research project confidently",
            "Aim for a top grade to strengthen their university applications",
          ],
          optionLabels: [
            "One-year course",
            "Two-year course",
            "Private tuition",
            "Research project prep",
          ],
          proofLabel: "A Level results since 2020",
          proofValue: "100% pass rate",
          proofNote: "Most students achieved A* or A",
          actionPrompt: "Compare your A Level study options",
          primaryCtaLabel: "View A Level courses",
          secondaryCtaLabel: "Request a free trial lesson",
        },
        {
          routeKey: "adults",
          eyebrow: "Private tuition · Flexible scheduling",
          title: "Russian courses for adults",
          summary:
            "One-to-one lessons with flexible scheduling and a focus agreed with your teacher. Adults can also prepare for GCSE or A Level through private tuition.",
          decisionHeading: "Designed for learners who",
          decisionBullets: [
            "Are complete beginners and want a clear introduction to Russian",
            "Are building on previous study or returning after a break",
            "Want to communicate more confidently with Russian-speaking family",
            "Want Russian for travel, cultural interests or professional goals",
          ],
          optionLabels: [
            "Beginner Russian",
            "Intermediate Russian",
            "Russian for Your Goals",
            "GCSE & A Level for adults",
          ],
          actionPrompt: "Shape lessons around your goals",
          primaryCtaLabel: "View courses for adults",
          secondaryCtaLabel: "Request a free trial lesson",
        },
      ],
    },
    welcome: {
      eyebrow: "Our story",
      title: "More than a decade of classroom experience shaped our online Russian school",
      body:
        "Before opening Volna School, our team taught hundreds of pupils at Pushkin’s School, worked closely with families and helped establish Russian school communities across several UK locations.",
      ctaLabel: "Read our story",
    },
    approach: {
      eyebrow: "Teaching approach",
      title: "What learners can expect from every lesson",
      points: [
        {
          title: "A clear focus each week",
          description:
            "Each week begins with a defined aim, so learners understand what they are working towards.",
        },
        {
          title: "Active use of Russian",
          description:
            "Learners speak, listen, read and write throughout each lesson, putting new language into practice as they learn.",
        },
        {
          title: "Purposeful practice between lessons",
          description:
            "Homework reinforces new material and helps teachers identify what needs revisiting.",
        },
        {
          title: "Feedback guides what comes next",
          description:
            "Corrections and guidance carry into future lessons, keeping learning focused and progress visible.",
        },
      ],
    },
    team: {
      eyebrow: "Our team",
      title: "Meet the people guiding Volna School",
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
      title: "Start with a free trial lesson",
      body:
        "Tell us a little about the learner and our team will contact you to arrange a suitable trial time and format.",
      ctaLabel: "Request a free trial lesson",
      routePrompt: "Explore our classes and courses",
    },
    testimonial: {
      eyebrow: "Community voices",
      title: "What our community says",
      items: [
        {
          routeKey: "children",
          courseLabel: "Bilingual classes for children",
          name: "Ekaterina",
          quote:
            "My son already knew some Russian when he joined, but Volna School has helped him keep progressing as if he were still attending school in Russia. He enjoys learning with his friends, says the lessons are fun and always looks forward to class.",
          role: "Parent",
        },
        {
          routeKey: "children",
          courseLabel: "Russian for beginners",
          name: "Ivan",
          quote:
            "Within a few weeks of joining Volna, my daughter was eager to teach me the new Russian words she had learned. She started without knowing any Russian, so it has been lovely to see how quickly she settled in and how much she enjoys it.",
          role: "Parent",
        },
        {
          routeKey: "gcse",
          courseLabel: "GCSE course",
          name: "Tatiana",
          quote:
            "I speak Russian fluently myself, but helping my daughter prepare for the GCSE was a completely different matter. Her tutors knew exactly what the exam required and gave her plenty of extra practice. When she opened her results and saw a Grade 9, we were both thrilled.",
          role: "Parent",
        },
        {
          routeKey: "gcse",
          courseLabel: "GCSE course",
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
            title: "Расскажите об ученике",
            description:
              "Укажите возраст, текущий уровень русского, цели и курс, который вы рассматриваете.",
          },
          {
            title: "Мы организуем пробный урок",
            description:
              "Наша команда свяжется с вами, чтобы обсудить ученика и согласовать удобное время и формат.",
          },
          {
            title: "Подтвердите подходящий маршрут",
            description:
              "После пробного урока мы порекомендуем подходящую группу или индивидуальные занятия.",
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
          title: "Понятная обратная связь",
          description:
            "Регулярная обратная связь помогает видеть прогресс, понимать, чему уделить внимание и что изучать дальше.",
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
        "Расскажите немного об ученике, и наша команда лично свяжется с вами, чтобы организовать пробный урок.",
      ctaLabel: "Записаться на пробный урок",
      routePrompt: "Выберите курс, чтобы заполнить часть формы заранее",
      responseNote:
        "Если вы не уверены, используйте общую форму — мы поможем выбрать.",
    },
    testimonial: {
      eyebrow: "Сообщество",
      quote:
        "Семьи ценят занятия, которые одновременно дружелюбные, структурные и помогают ученикам увереннее двигаться к русскому языку или экзаменам.",
      attribution: "Общая тема отзывов родителей Volna School",
    },
  },
};
