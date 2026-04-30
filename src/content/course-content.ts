import type { Locale } from "@/lib/i18n/config";
import type { PageRouteKey } from "@/lib/i18n/routing";

export type CourseSectionId =
  | "results"
  | "overview"
  | "study-options"
  | "exam-guide"
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
  results?: {
    eyebrow: string;
    title: string;
    note: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  };
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
  examGuide?: {
    eyebrow: string;
    title: string;
    note: string;
    cards: Array<{
      title: string;
      description: string;
      points: string[];
    }>;
    reviewNote: string;
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

const enCommon = {
  cta: "Register for a Free Trial Lesson",
  media: "Live online classes with structured teacher support",
  verifiedPricing:
    "Current public fees are shown in GBP. The school confirms the exact timetable and payment arrangement after registration.",
  verifiedCalendar:
    "The school follows the published academic calendar for 2025-2026, with holiday breaks for regular group courses.",
};

const ruCommon = {
  cta: "Записаться на бесплатный пробный урок",
  media: "Живые онлайн-занятия с понятной поддержкой преподавателя",
  verifiedPricing:
    "Актуальные публичные цены указаны в GBP. Точное расписание и формат оплаты школа подтверждает после заявки.",
  verifiedCalendar:
    "Школа следует опубликованному календарю 2025-2026 учебного года с каникулами для регулярных групповых курсов.",
};

const enSectionLabels = {
  calendar: "Calendar",
  examGuide: "Exam Guide",
  faq: "FAQ",
  options: "Study Options",
  overview: "Overview",
  prices: "Prices",
  registration: "Register",
  results: "Results",
};

const ruSectionLabels = {
  calendar: "Календарь",
  examGuide: "Экзамен",
  faq: "Вопросы",
  options: "Форматы",
  overview: "Обзор",
  prices: "Цены",
  registration: "Запись",
  results: "Результаты",
};

function createSectionNav(
  labels: typeof enSectionLabels,
  hasResults = false,
  hasExamGuide = false,
) {
  return [
    ...(hasResults ? [{ id: "results" as const, label: labels.results }] : []),
    { id: "overview" as const, label: labels.overview },
    { id: "study-options" as const, label: labels.options },
    ...(hasExamGuide
      ? [{ id: "exam-guide" as const, label: labels.examGuide }]
      : []),
    { id: "prices" as const, label: labels.prices },
    { id: "calendar" as const, label: labels.calendar },
    { id: "faq" as const, label: labels.faq },
    { id: "registration" as const, label: labels.registration },
  ];
}

export const courseContent: Record<Locale, Record<CourseRouteKey, CourseContent>> = {
  en: {
    children: {
      routeKey: "children",
      hero: {
        eyebrow: "Children's Russian",
        title: "Russian Language Classes for Children",
        summary:
          "Online Russian lessons for children aged 3-16, with routes for bilingual learners, beginners, and families who need flexible private tuition.",
        primaryCtaLabel: enCommon.cta,
        secondaryCtaLabel: "Compare class options",
        mediaLabel: enCommon.media,
      },
      sectionNav: createSectionNav(enSectionLabels),
      overview: {
        eyebrow: "Why families choose Volna",
        title: "A structured route for every stage of Russian development",
        body:
          "Children can join a route that matches their current relationship with Russian: confident home speakers, learners starting from the alphabet, or pupils who need one-to-one attention.",
        highlights: [
          "Bilingual and Russian-as-a-foreign-language routes",
          "Small online groups with homework and progress support",
          "Private tuition for flexible schedules or targeted goals",
          "A natural pathway toward GCSE preparation when the time is right",
        ],
      },
      studyOptions: {
        eyebrow: "Study options",
        title: "Choose the route that fits your child",
        cards: [
          {
            title: "Bilingual group classes",
            description:
              "For children who already hear or speak Russian and need stronger literacy, accuracy, vocabulary, and cultural confidence.",
            detail: "Original site model: small groups, weekly homework, progress toward exam routes.",
          },
          {
            title: "Russian as a Foreign Language",
            description:
              "For children new to Russian, with age-aware foundations in pronunciation, reading, writing, speaking, and everyday topics.",
            detail: "The trial lesson helps confirm age range, current level, and the best starting group.",
          },
          {
            title: "Private tuition",
            description:
              "One-to-one lessons for families who need a custom pace, extra confidence, catch-up support, or a schedule outside group classes.",
            detail: "30-minute, 1-hour, and 90-minute lesson options are available depending on the learner's needs.",
          },
        ],
      },
      pricing: {
        eyebrow: "Tuition prices",
        title: "Transparent class and private lesson options",
        note: enCommon.verifiedPricing,
        rows: [
          {
            label: "Group classes",
            value: "From GBP 15/hour",
            detail:
              "For bilingual and beginner routes. The original model uses small groups, regular weekly lessons, homework, and class placement after registration.",
          },
          {
            label: "Private tuition",
            value: "From GBP 35/hour",
            detail:
              "For flexible scheduling or tailored goals, with shorter and longer lesson lengths available by arrangement.",
          },
        ],
      },
      calendar: {
        eyebrow: "School calendar",
        title: "Lessons follow an academic-year rhythm",
        note: enCommon.verifiedCalendar,
        items: [
          { label: "Group lessons", value: "Follow school-term patterns with half-term and holiday breaks." },
          { label: "Private lessons", value: "May continue during holidays depending on teacher availability." },
          { label: "2025-2026 holidays", value: "Published breaks include October half-term, Christmas, February half-term, Easter, May half-term, and summer holidays." },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions families ask before joining",
        items: [
          {
            question: "Which class should my child join?",
            answer:
              "The trial lesson helps the school recommend a bilingual, beginner, or private route based on age, confidence, and current Russian level.",
          },
          {
            question: "Can a child switch class later?",
            answer:
              "Yes. Class fit should be reviewed as the learner progresses, especially if a group feels too easy, too difficult, or no longer matches the family schedule.",
          },
          {
            question: "What happens after registration?",
            answer:
              "The school contacts the family, clarifies placement details, and arranges the first free lesson or consultation.",
          },
        ],
      },
      registration: {
        eyebrow: "Registration",
        title: "Arrange a free trial lesson",
        body:
          "Share your child's age, current Russian level, and course interest. The school will follow up with the most suitable class or private lesson route.",
        ctaLabel: enCommon.cta,
      },
    },
    gcse: {
      routeKey: "gcse",
      hero: {
        eyebrow: "GCSE Russian",
        title: "GCSE Russian Courses",
        summary:
          "Exam-focused online support for Pearson Edexcel GCSE Russian, with one-year and two-year preparation routes, mock practice, and exam entry guidance.",
        primaryCtaLabel: enCommon.cta,
        secondaryCtaLabel: "View exam support",
        mediaLabel: enCommon.media,
      },
      sectionNav: createSectionNav(enSectionLabels, true, true),
      results: {
        eyebrow: "Past results",
        title: "Strong GCSE Russian outcomes",
        note:
          "Published results show consistently high GCSE Russian grades across recent cohorts.",
        items: [
          { label: "2021", value: "100% Grade 9" },
          { label: "2022", value: "75% Grade 9, 25% Grade 8" },
          { label: "2023", value: "80% Grade 9, 20% Grade 8" },
          { label: "2024", value: "100% Grade 9" },
          { label: "2025", value: "92% Grade 9, 8% Grade 8" },
        ],
      },
      overview: {
        eyebrow: "Course overview",
        title: "A practical GCSE preparation route",
        body:
          "Students prepare across listening, speaking, reading, and writing while building exam confidence, vocabulary, grammar accuracy, and timed-task technique.",
        highlights: [
          "Pearson Edexcel GCSE Russian focus",
          "Small online classes and private tuition",
          "Homework, feedback, and mock-style practice",
          "Guidance for families choosing an exam entry route",
        ],
      },
      studyOptions: {
        eyebrow: "Study options",
        title: "Choose the GCSE preparation pace",
        cards: [
          {
            title: "1-year group class",
            description:
              "An intensive route for students ready to complete GCSE preparation within the academic year.",
            detail: "Best for Year 11 or strong younger students after level review.",
          },
          {
            title: "2-year group class",
            description:
              "A steadier preparation route with more time to build confidence, language range, and exam technique.",
            detail: "Best for Year 10 or younger students planning ahead.",
          },
          {
            title: "Private tuition and mocks",
            description:
              "Targeted one-to-one support, catch-up work, mock papers, and feedback for specific exam components.",
            detail: "Mock exam format, dates, and feedback are arranged around the exam-year plan.",
          },
        ],
      },
      examGuide: {
        eyebrow: "Exam guide",
        title: "What GCSE Russian preparation needs to cover",
        note:
          "The course is shaped around Pearson Edexcel GCSE Russian requirements while keeping the final exam route practical for each family.",
        cards: [
          {
            title: "Skills and assessment",
            description:
              "Students build the four exam skills together, so vocabulary, grammar, accuracy, and confidence develop in a balanced way.",
            points: [
              "Listening, speaking, reading, and writing practice",
              "Topic vocabulary and grammar accuracy",
              "Timed tasks and exam-style question routines",
            ],
          },
          {
            title: "Mock exam support",
            description:
              "Mock-style practice helps students understand timing, pressure, and the areas that need more work before the final exam.",
            points: [
              "Marked feedback on exam-style work",
              "Speaking and writing confidence checks",
              "Revision priorities agreed after practice",
            ],
          },
          {
            title: "Exam entry guidance",
            description:
              "Families often need help understanding whether the exam is arranged through school or an external centre.",
            points: [
              "Discuss school, private candidate, or centre routes",
              "Check current-year fees and availability",
              "Plan speaking assessment timing early",
            ],
          },
        ],
        reviewNote:
          "Exam board codes, paper timings, centre fees, and current exam dates should be checked against the latest Pearson Edexcel guidance before final launch or enrolment decisions.",
      },
      pricing: {
        eyebrow: "Tuition prices",
        title: "GCSE group and private support",
        note: enCommon.verifiedPricing,
        rows: [
          { label: "Group classes", value: "From GBP 18/hour", detail: "Original model includes 1-year and 2-year routes with small groups and weekly homework." },
          { label: "Private tuition", value: "From GBP 40/hour", detail: "For targeted support, flexible scheduling, or specific exam areas." },
          { label: "Mock exams", value: "Approx. GBP 60", detail: "Online mock practice with marked feedback for exam readiness." },
        ],
      },
      calendar: {
        eyebrow: "Holiday calendar",
        title: "Plan around exam-year dates",
        note: enCommon.verifiedCalendar,
        items: [
          { label: "Autumn and spring terms", value: "Used for regular class work and mock-style checkpoints." },
          { label: "Summer term", value: "Exam-year classes may finish before the final GCSE Russian exam." },
          { label: "2025-2026 holidays", value: "Holiday blocks are published for the current academic year; exam dates are checked against the exam board timetable." },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "GCSE questions before enrolling",
        items: [
          { question: "When should a student start?", answer: "The one-year route suits students close to exam readiness; the two-year route gives more time for language development and confidence." },
          { question: "Can the school help with exam entry?", answer: "The original site explains common routes through a current school, an external centre, or a local exam centre. Fees and availability must be verified each year." },
          { question: "Are mock exams available?", answer: "Yes. Mock exam support is available online with marked feedback and current-year timing agreed with the school." },
        ],
      },
      registration: {
        eyebrow: "Registration",
        title: "Plan GCSE Russian support",
        body:
          "Use the trial request to share the student's year group, Russian level, exam timeline, and whether they need group preparation or private support.",
        ctaLabel: enCommon.cta,
      },
    },
    alevel: {
      routeKey: "alevel",
      hero: {
        eyebrow: "A-Level Russian",
        title: "A-Level Russian Courses",
        summary:
          "Advanced online preparation for Pearson Edexcel A-Level Russian, including essay writing, speaking, literature, film, research, and exam technique.",
        primaryCtaLabel: enCommon.cta,
        secondaryCtaLabel: "View advanced support",
        mediaLabel: enCommon.media,
      },
      sectionNav: createSectionNav(enSectionLabels, true, true),
      results: {
        eyebrow: "Past results",
        title: "Strong A-Level Russian outcomes",
        note:
          "Published results show a strong A*/A history for A-Level Russian students.",
        items: [
          { label: "2021", value: "100% A*/A" },
          { label: "2022", value: "80% A*/A" },
          { label: "2023", value: "100% A*/A" },
          { label: "2024", value: "86% A*" },
          { label: "2025", value: "90% A*/A" },
        ],
      },
      overview: {
        eyebrow: "Course overview",
        title: "Advanced Russian with exam and university goals in mind",
        body:
          "A-Level learners need mature language accuracy, analytical writing, confident speaking, independent research habits, and a clear understanding of the specification.",
        highlights: [
          "Pearson Edexcel A-Level Russian focus",
          "Essay, speaking, literature, film, and IRP support",
          "Small groups and private tuition",
          "Guidance around exam routes and preparation expectations",
        ],
      },
      studyOptions: {
        eyebrow: "Study options",
        title: "A-Level preparation routes",
        cards: [
          {
            title: "1-year intensive route",
            description:
              "For students with a strong current level who need focused preparation for the next exam cycle.",
            detail: "Readiness should be assessed before placement.",
          },
          {
            title: "2-year standard route",
            description:
              "A steadier path for students building advanced fluency, grammar, essay technique, and cultural knowledge.",
            detail: "Suitable for planning A-Level preparation earlier.",
          },
          {
            title: "Private support",
            description:
              "Targeted support for essays, speaking, literature and film study, independent research, or a specific exam component.",
            detail: "Texts, film, and exam details are matched to the learner's specification and preparation route.",
          },
        ],
      },
      examGuide: {
        eyebrow: "Exam guide",
        title: "Advanced preparation for A-Level Russian",
        note:
          "A-Level preparation needs more than language practice: students need analytical writing, confident speaking, independent research habits, and specification-aware planning.",
        cards: [
          {
            title: "Papers and components",
            description:
              "Students prepare for advanced language work across the main exam components while developing a mature command of Russian.",
            points: [
              "Listening, reading, translation, and writing accuracy",
              "Speaking preparation and discussion practice",
              "Essay technique for literature, film, or cultural study",
            ],
          },
          {
            title: "IRP and cultural study",
            description:
              "The independent research project and cultural topics need steady planning, source selection, and regular feedback.",
            points: [
              "Research question and source planning",
              "Argument structure and specialist vocabulary",
              "Practice explaining ideas aloud",
            ],
          },
          {
            title: "Exam route planning",
            description:
              "A-Level families often need to coordinate the learner's school situation, exam centre, specification, and set material choices.",
            points: [
              "Confirm current specification and set material fit",
              "Discuss school or external centre routes",
              "Schedule mocks, essays, and speaking preparation",
            ],
          },
        ],
        reviewNote:
          "Set texts, film choices, paper timings, centre fees, and exam windows should be verified for the learner's current Pearson Edexcel route before final launch or enrolment decisions.",
      },
      pricing: {
        eyebrow: "Tuition prices",
        title: "A-Level group and private support",
        note: enCommon.verifiedPricing,
        rows: [
          { label: "Group classes", value: "From GBP 20/hour", detail: "Original model includes 1-year and 2-year routes with small groups and weekly homework." },
          { label: "Private tuition", value: "From GBP 45/hour", detail: "For tailored exam preparation, essay feedback, speaking practice, or IRP support." },
          { label: "Mock exams", value: "Approx. GBP 60", detail: "Online mock support with papers, timing, and feedback agreed for the exam plan." },
        ],
      },
      calendar: {
        eyebrow: "Holiday calendar",
        title: "Coordinate learning with exam timing",
        note: enCommon.verifiedCalendar,
        items: [
          { label: "Autumn and spring", value: "Core study, feedback cycles, and exam technique work." },
          { label: "Summer", value: "Exam-year lessons may conclude before final A-Level Russian papers." },
          { label: "2025-2026 holidays", value: "Holiday blocks are published for the current academic year; exam windows and set texts are checked against the relevant specification." },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "A-Level questions before enrolling",
        items: [
          { question: "What level is needed?", answer: "A-Level students need strong Russian foundations. The trial lesson should confirm readiness and whether a group or private route is suitable." },
          { question: "Does the course cover literature, film, and IRP?", answer: "Yes. The course supports literature, film, speaking, essay writing, and independent research project preparation." },
          { question: "Can the school advise on exam entry?", answer: "The original site explains several exam-entry routes. Current fees and centre availability must be verified each year." },
        ],
      },
      registration: {
        eyebrow: "Registration",
        title: "Plan A-Level Russian support",
        body:
          "Share the student's current level, target exam year, school situation, and support needs so the school can recommend the right route.",
        ctaLabel: enCommon.cta,
      },
    },
    adults: {
      routeKey: "adults",
      hero: {
        eyebrow: "Adult Russian",
        title: "Russian Courses for Adults",
        summary:
          "Flexible online Russian tuition for adult learners, from foundations and conversation to tailored private study for personal or professional goals.",
        primaryCtaLabel: enCommon.cta,
        secondaryCtaLabel: "Explore adult options",
        mediaLabel: enCommon.media,
      },
      sectionNav: createSectionNav(enSectionLabels),
      overview: {
        eyebrow: "Why learn Russian",
        title: "Practical Russian for real adult goals",
        body:
          "Adult learners often need a different rhythm: clear explanations, useful phrases, flexible practice, and a route that respects work, family, travel, or cultural goals.",
        highlights: [
          "Beginner, intermediate, and customised paths",
          "Private online tuition with flexible scheduling",
          "Conversation, pronunciation, grammar, and confidence",
          "Support shaped around personal or professional aims",
        ],
      },
      studyOptions: {
        eyebrow: "Course overview",
        title: "Flexible adult learning routes",
        cards: [
          { title: "Beginner Russian", description: "A structured start for adults new to Russian or returning after a long break.", detail: "Alphabet, pronunciation, everyday phrases, and core grammar." },
          { title: "Intermediate and conversation", description: "Practice for adults who know some Russian and want to speak more naturally.", detail: "Topic-based speaking, correction, listening, and fluency." },
          { title: "Customised private study", description: "A tailored route for travel, family communication, culture, reading, or professional goals.", detail: "The school confirms scope and availability after registration." },
        ],
      },
      pricing: {
        eyebrow: "Tuition prices",
        title: "Private tuition for adult learners",
        note: enCommon.verifiedPricing,
        rows: [
          { label: "Private tuition", value: "From GBP 35/hour", detail: "The original adult model centers on one-to-one online lessons with flexible scheduling." },
          { label: "Short sessions", value: "GBP 20 / 30 min", detail: "Useful for focused conversation, pronunciation, or review." },
          { label: "Extended sessions", value: "GBP 50 / 90 min", detail: "Useful for deeper study or intensive support." },
        ],
      },
      calendar: {
        eyebrow: "Holiday calendar",
        title: "Flexible scheduling around the school year",
        note: enCommon.verifiedCalendar,
        items: [
          { label: "Private lesson rhythm", value: "Adult lessons can be arranged around availability and learning goals." },
          { label: "Holiday planning", value: "Availability during school holidays depends on teacher schedules." },
          { label: "2025-2026 holidays", value: "Adult lesson availability is agreed around teacher schedules and the published school holiday calendar." },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Adult course questions",
        items: [
          { question: "Can I start as a complete beginner?", answer: "Yes. The adult route can start with foundations, pronunciation, alphabet work, and practical everyday language." },
          { question: "Can lessons focus on conversation?", answer: "Yes. Conversation goals can be built into private tuition, with correction, useful phrases, and confidence-building practice." },
          { question: "Can I switch to exam preparation later?", answer: "Some adult learners may later move toward GCSE or A-Level style goals. The school can advise after understanding your level and timeline." },
        ],
      },
      registration: {
        eyebrow: "Registration",
        title: "Discuss your adult learning goals",
        body:
          "Use the trial request to share your current level, preferred schedule, and what you want Russian to help you do.",
        ctaLabel: enCommon.cta,
      },
    },
  },
  ru: {
    children: {
      routeKey: "children",
      hero: {
        eyebrow: "Русский для детей",
        title: "Занятия русским языком для детей",
        summary:
          "Онлайн-занятия для детей 3-16 лет: отдельные маршруты для билингвальных учеников, начинающих и семей, которым нужен индивидуальный формат.",
        primaryCtaLabel: ruCommon.cta,
        secondaryCtaLabel: "Сравнить форматы",
        mediaLabel: ruCommon.media,
      },
      sectionNav: createSectionNav(ruSectionLabels),
      overview: {
        eyebrow: "Почему выбирают Volna",
        title: "Понятный маршрут для каждого этапа развития русского",
        body:
          "Ребенок может попасть в формат, который соответствует его уровню: русский дома, начало с алфавита или индивидуальная поддержка.",
        highlights: [
          "Маршруты для билингвальных детей и изучающих русский как иностранный",
          "Небольшие онлайн-группы с домашними заданиями",
          "Индивидуальные занятия для гибкого расписания",
          "Путь к подготовке GCSE, когда ученик будет готов",
        ],
      },
      studyOptions: {
        eyebrow: "Форматы",
        title: "Выберите подходящий маршрут для ребенка",
        cards: [
          { title: "Группы для билингвальных детей", description: "Для детей, которые слышат или говорят по-русски дома и хотят укрепить грамотность, точность и словарный запас.", detail: "Модель исходного сайта: небольшие группы, домашние задания и движение к экзаменационным курсам." },
          { title: "Русский как иностранный", description: "Для детей, которые начинают русский с нуля: произношение, чтение, письмо, речь и близкие детям темы.", detail: "Пробный урок помогает определить возрастную группу, уровень и лучший старт." },
          { title: "Индивидуальные занятия", description: "Для семей, которым нужен личный темп, дополнительная уверенность, догоняющая программа или гибкое расписание.", detail: "Длительность уроков требует подтверждения владельцем." },
        ],
      },
      pricing: {
        eyebrow: "Цены",
        title: "Групповые и индивидуальные варианты",
        note: ruCommon.verifiedPricing,
        rows: [
          { label: "Групповые занятия", value: "От GBP 15/час", detail: "Для билингвального маршрута и RFL. Подбор класса проходит после заявки и пробного урока." },
          { label: "Индивидуальные уроки", value: "От GBP 35/час", detail: "Для гибкого расписания, личных целей или дополнительной поддержки." },
        ],
      },
      calendar: {
        eyebrow: "Календарь",
        title: "Занятия идут в ритме учебного года",
        note: ruCommon.verifiedCalendar,
        items: [
          { label: "Групповые уроки", value: "Обычно следуют триместрам, каникулам и half-term." },
          { label: "Индивидуальные уроки", value: "Могут продолжаться на каникулах при наличии преподавателя." },
          { label: "Каникулы 2025-2026", value: "Опубликованы перерывы на октябрьские каникулы, Рождество, февральские каникулы, Пасху, майские каникулы и лето." },
        ],
      },
      faq: {
        eyebrow: "Вопросы",
        title: "Что важно знать семьям",
        items: [
          { question: "Как выбрать класс?", answer: "Пробный урок помогает подобрать билингвальный, начальный или индивидуальный формат по возрасту и уровню." },
          { question: "Можно ли перейти в другой класс?", answer: "Да. Подходящий уровень можно пересмотреть, если группа стала слишком легкой, сложной или неудобной по расписанию." },
          { question: "Что происходит после заявки?", answer: "Школа связывается с семьей, уточняет детали и договаривается о первом бесплатном уроке." },
        ],
      },
      registration: {
        eyebrow: "Запись",
        title: "Договориться о бесплатном пробном уроке",
        body:
          "Укажите возраст ребенка, текущий уровень русского и интересующий курс. Школа предложит подходящую группу или индивидуальный маршрут.",
        ctaLabel: ruCommon.cta,
      },
    },
    gcse: {
      routeKey: "gcse",
      hero: {
        eyebrow: "GCSE Russian",
        title: "Курсы русского языка GCSE",
        summary:
          "Онлайн-подготовка к Pearson Edexcel GCSE Russian: маршруты на один и два года, пробные задания, обратная связь и помощь с экзаменационным планом.",
        primaryCtaLabel: ruCommon.cta,
        secondaryCtaLabel: "Посмотреть подготовку",
        mediaLabel: ruCommon.media,
      },
      sectionNav: createSectionNav(ruSectionLabels, true, true),
      results: {
        eyebrow: "Результаты",
        title: "Сильные результаты GCSE Russian",
        note: "Точные заявления о результатах должны быть подтверждены владельцем перед финальным запуском.",
        items: [
          { label: "2021", value: "100% Grade 9" },
          { label: "2022", value: "75% Grade 9, 25% Grade 8" },
          { label: "2023", value: "80% Grade 9, 20% Grade 8" },
          { label: "2024", value: "100% Grade 9" },
          { label: "2025", value: "92% Grade 9, 8% Grade 8" },
        ],
      },
      overview: {
        eyebrow: "Обзор курса",
        title: "Практичный маршрут подготовки к GCSE",
        body:
          "Ученики развивают аудирование, говорение, чтение и письмо, а также экзаменационную уверенность, словарный запас, грамматику и работу на время.",
        highlights: ["Фокус на Pearson Edexcel GCSE Russian", "Небольшие онлайн-группы и индивидуальная поддержка", "Домашние задания, обратная связь и пробная практика", "Поддержка семей при выборе экзаменационного маршрута"],
      },
      studyOptions: {
        eyebrow: "Форматы",
        title: "Выберите темп подготовки GCSE",
        cards: [
          { title: "Группа на 1 год", description: "Интенсивный маршрут для учеников, готовых пройти подготовку в течение учебного года.", detail: "Подходит после проверки уровня." },
          { title: "Группа на 2 года", description: "Более спокойный маршрут с большим временем на язык, уверенность и экзаменационную технику.", detail: "Подходит для планирования заранее." },
          { title: "Индивидуальная поддержка и mocks", description: "Точечная помощь, догоняющая работа, пробные задания и обратная связь по компонентам экзамена.", detail: "Формат, даты и обратная связь планируются вокруг экзаменационного маршрута." },
        ],
      },
      examGuide: {
        eyebrow: "Экзаменационный маршрут",
        title: "Что должна покрывать подготовка к GCSE Russian",
        note:
          "Курс строится вокруг требований Pearson Edexcel GCSE Russian, но экзаменационный маршрут подбирается под ситуацию каждой семьи.",
        cards: [
          {
            title: "Навыки и оценивание",
            description:
              "Ученики развивают четыре экзаменационных навыка вместе, чтобы словарь, грамматика, точность и уверенность росли системно.",
            points: [
              "Аудирование, говорение, чтение и письмо",
              "Темы, словарь и грамматическая точность",
              "Задания на время и экзаменационные форматы",
            ],
          },
          {
            title: "Пробная практика",
            description:
              "Пробные задания помогают понять тайминг, уровень давления и темы, которые нужно повторить до экзамена.",
            points: [
              "Проверка заданий в экзаменационном стиле",
              "Оценка уверенности в устной части и письме",
              "Понятные приоритеты для повторения",
            ],
          },
          {
            title: "Путь к сдаче экзамена",
            description:
              "Семьям часто нужна помощь с пониманием, где и как ученик будет сдавать экзамен.",
            points: [
              "Обсуждение школы, внешнего центра или маршрута private candidate",
              "Проверка актуальных сборов и доступности",
              "Раннее планирование устной части",
            ],
          },
        ],
        reviewNote:
          "Коды экзаменационной комиссии, длительность работ, сборы центров и текущие даты экзаменов нужно сверить с последними материалами Pearson Edexcel перед финальным запуском или записью.",
      },
      pricing: {
        eyebrow: "Цены",
        title: "Групповая и индивидуальная подготовка GCSE",
        note: ruCommon.verifiedPricing,
        rows: [
          { label: "Групповые занятия", value: "От GBP 18/час", detail: "Исходная модель включает маршруты на 1 и 2 года, небольшие группы и домашние задания." },
          { label: "Индивидуальные уроки", value: "От GBP 40/час", detail: "Для точечной подготовки, гибкого расписания или отдельных частей экзамена." },
          { label: "Пробные экзамены", value: "Около GBP 60", detail: "Онлайн-практика с проверкой и обратной связью для готовности к экзамену." },
        ],
      },
      calendar: {
        eyebrow: "Календарь",
        title: "Планирование вокруг экзаменационного года",
        note: ruCommon.verifiedCalendar,
        items: [
          { label: "Осень и весна", value: "Основная работа по курсу и контрольные точки." },
          { label: "Лето", value: "Класс экзаменационного года может завершиться до финального экзамена." },
          { label: "Каникулы 2025-2026", value: "Каникулы опубликованы на текущий учебный год; даты экзаменов сверяются с расписанием экзаменационной комиссии." },
        ],
      },
      faq: {
        eyebrow: "Вопросы",
        title: "Вопросы о GCSE перед записью",
        items: [
          { question: "Когда начинать подготовку?", answer: "Годовой маршрут подходит ученикам, близким к экзаменационному уровню; двухлетний дает больше времени." },
          { question: "Помогает ли школа с экзаменационным маршрутом?", answer: "Можно обсудить школу, внешний центр или местный экзаменационный центр. Стоимость и доступность нужно проверять ежегодно." },
          { question: "Есть ли пробные экзамены?", answer: "Да. Пробная практика доступна онлайн с проверкой, обратной связью и сроками, согласованными со школой." },
        ],
      },
      registration: {
        eyebrow: "Запись",
        title: "Спланировать подготовку GCSE Russian",
        body: "Укажите класс, уровень русского, срок экзамена и интересующий формат, чтобы школа предложила подходящий маршрут.",
        ctaLabel: ruCommon.cta,
      },
    },
    alevel: {
      routeKey: "alevel",
      hero: {
        eyebrow: "A-Level Russian",
        title: "Курсы русского языка A-Level",
        summary:
          "Продвинутая подготовка к Pearson Edexcel A-Level Russian: эссе, устная часть, литература, фильм, исследовательский проект и экзаменационная техника.",
        primaryCtaLabel: ruCommon.cta,
        secondaryCtaLabel: "Посмотреть поддержку",
        mediaLabel: ruCommon.media,
      },
      sectionNav: createSectionNav(ruSectionLabels, true, true),
      results: {
        eyebrow: "Результаты",
        title: "Сильные результаты A-Level Russian",
        note: "Опубликованные результаты показывают сильную историю оценок A*/A у учеников A-Level Russian.",
        items: [
          { label: "2021", value: "100% A*/A" },
          { label: "2022", value: "80% A*/A" },
          { label: "2023", value: "100% A*/A" },
          { label: "2024", value: "86% A*" },
          { label: "2025", value: "90% A*/A" },
        ],
      },
      overview: {
        eyebrow: "Обзор курса",
        title: "Продвинутый русский для экзамена и университетских целей",
        body:
          "Ученикам A-Level нужны точность языка, аналитическое письмо, уверенная устная речь, исследовательские навыки и понимание спецификации.",
        highlights: ["Фокус на Pearson Edexcel A-Level Russian", "Эссе, устная часть, литература, фильм и IRP", "Небольшие группы и индивидуальная поддержка", "Помощь с экзаменационным планом"],
      },
      studyOptions: {
        eyebrow: "Форматы",
        title: "Маршруты подготовки A-Level",
        cards: [
          { title: "Интенсивный маршрут на 1 год", description: "Для учеников с сильным уровнем, которым нужна сфокусированная подготовка к ближайшему экзамену.", detail: "Готовность нужно проверить перед зачислением." },
          { title: "Стандартный маршрут на 2 года", description: "Более спокойный путь к продвинутой речи, грамматике, эссе и культурным темам.", detail: "Подходит для раннего планирования." },
          { title: "Индивидуальная поддержка", description: "Помощь с эссе, устной частью, литературой, фильмом, IRP или конкретным компонентом.", detail: "Тексты, фильм и детали экзамена подбираются под спецификацию и маршрут ученика." },
        ],
      },
      examGuide: {
        eyebrow: "Экзаменационный маршрут",
        title: "Продвинутая подготовка к A-Level Russian",
        note:
          "A-Level требует не только языковой практики: важны аналитическое письмо, уверенная устная речь, исследовательские навыки и понимание спецификации.",
        cards: [
          {
            title: "Работы и компоненты",
            description:
              "Ученики готовятся к продвинутой языковой работе по основным компонентам экзамена и укрепляют зрелое владение русским.",
            points: [
              "Аудирование, чтение, перевод и точность письма",
              "Устная часть и практика обсуждения",
              "Эссе по литературе, фильму или культурной теме",
            ],
          },
          {
            title: "IRP и культурные темы",
            description:
              "Индивидуальный исследовательский проект и культурные темы требуют планирования, подбора источников и регулярной обратной связи.",
            points: [
              "Выбор вопроса и источников",
              "Структура аргумента и специальная лексика",
              "Практика устного объяснения идей",
            ],
          },
          {
            title: "План экзамена",
            description:
              "Семье важно согласовать школьную ситуацию ученика, экзаменационный центр, спецификацию и выбранные материалы.",
            points: [
              "Проверка актуальной спецификации и материалов",
              "Обсуждение школы или внешнего центра",
              "Планирование пробных экзаменов, эссе и устной практики",
            ],
          },
        ],
        reviewNote:
          "Тексты, фильм, длительность работ, сборы центров и экзаменационные окна нужно подтвердить для текущего маршрута Pearson Edexcel перед финальным запуском или записью.",
      },
      pricing: {
        eyebrow: "Цены",
        title: "Групповая и индивидуальная поддержка A-Level",
        note: ruCommon.verifiedPricing,
        rows: [
          { label: "Групповые занятия", value: "От GBP 20/час", detail: "Исходная модель включает маршруты на 1 и 2 года, небольшие группы и домашние задания." },
          { label: "Индивидуальные уроки", value: "От GBP 45/час", detail: "Для эссе, устной практики, IRP или точечной подготовки." },
          { label: "Пробные экзамены", value: "Около GBP 60", detail: "Онлайн-поддержка с заданиями, сроками и обратной связью под экзаменационный план." },
        ],
      },
      calendar: {
        eyebrow: "Календарь",
        title: "Учебный план вокруг экзаменационных дат",
        note: ruCommon.verifiedCalendar,
        items: [
          { label: "Осень и весна", value: "Основная программа, обратная связь и экзаменационная техника." },
          { label: "Лето", value: "Занятия экзаменационного года могут завершиться до финальных работ." },
          { label: "Каникулы 2025-2026", value: "Каникулы опубликованы на текущий учебный год; экзаменационные окна и материалы сверяются со спецификацией." },
        ],
      },
      faq: {
        eyebrow: "Вопросы",
        title: "Вопросы об A-Level перед записью",
        items: [
          { question: "Какой уровень нужен?", answer: "Нужна сильная база русского. Пробный урок помогает понять готовность и подходящий формат." },
          { question: "Есть ли литература, фильм и IRP?", answer: "Да. Курс поддерживает литературу, фильм, устную часть, эссе и индивидуальный исследовательский проект." },
          { question: "Можно ли обсудить экзаменационный центр?", answer: "Да, но стоимость и доступность центров нужно проверять каждый год." },
        ],
      },
      registration: {
        eyebrow: "Запись",
        title: "Спланировать подготовку A-Level Russian",
        body: "Укажите текущий уровень, год экзамена, школьную ситуацию и нужный формат поддержки.",
        ctaLabel: ruCommon.cta,
      },
    },
    adults: {
      routeKey: "adults",
      hero: {
        eyebrow: "Русский для взрослых",
        title: "Курсы русского языка для взрослых",
        summary:
          "Гибкие онлайн-занятия для взрослых: основы, разговорная практика и индивидуальное обучение под личные или профессиональные цели.",
        primaryCtaLabel: ruCommon.cta,
        secondaryCtaLabel: "Посмотреть варианты",
        mediaLabel: ruCommon.media,
      },
      sectionNav: createSectionNav(ruSectionLabels),
      overview: {
        eyebrow: "Зачем учить русский",
        title: "Практический русский для реальных целей",
        body:
          "Взрослым часто нужен другой темп: ясные объяснения, полезные фразы, гибкая практика и маршрут, который учитывает работу, семью, путешествия или культуру.",
        highlights: ["Начальный, продолжающий и индивидуальный маршруты", "Индивидуальные онлайн-уроки с гибким расписанием", "Разговор, произношение, грамматика и уверенность", "Поддержка под личные или профессиональные задачи"],
      },
      studyOptions: {
        eyebrow: "Обзор курса",
        title: "Гибкие маршруты для взрослых",
        cards: [
          { title: "Русский с нуля", description: "Структурное начало для взрослых, которые только начинают или возвращаются после перерыва.", detail: "Алфавит, произношение, фразы и базовая грамматика." },
          { title: "Средний уровень и разговор", description: "Практика для тех, кто уже немного знает русский и хочет говорить естественнее.", detail: "Темы, коррекция, аудирование и беглость." },
          { title: "Индивидуальный курс", description: "Маршрут под путешествия, семью, культуру, чтение или профессиональные цели.", detail: "Школа подтверждает объем и доступность после заявки." },
        ],
      },
      pricing: {
        eyebrow: "Цены",
        title: "Индивидуальные занятия для взрослых",
        note: ruCommon.verifiedPricing,
        rows: [
          { label: "Индивидуальные уроки", value: "От GBP 35/час", detail: "Исходная модель для взрослых основана на индивидуальных онлайн-занятиях." },
          { label: "Короткие занятия", value: "GBP 20 / 30 мин", detail: "Для точечной разговорной практики или повторения." },
          { label: "Длинные занятия", value: "GBP 50 / 90 мин", detail: "Для более глубокого занятия или интенсивной поддержки." },
        ],
      },
      calendar: {
        eyebrow: "Календарь",
        title: "Гибкое расписание вокруг учебного года",
        note: ruCommon.verifiedCalendar,
        items: [
          { label: "Ритм занятий", value: "Уроки для взрослых можно согласовать под цели и доступность." },
          { label: "Каникулы", value: "Занятия во время школьных каникул зависят от расписания преподавателя." },
          { label: "Каникулы 2025-2026", value: "Доступность занятий для взрослых согласуется с расписанием преподавателя и школьным календарем каникул." },
        ],
      },
      faq: {
        eyebrow: "Вопросы",
        title: "Вопросы взрослых учеников",
        items: [
          { question: "Можно ли начать с нуля?", answer: "Да. Курс может начинаться с алфавита, произношения и практических фраз." },
          { question: "Можно ли сосредоточиться на разговоре?", answer: "Да. Разговорные цели можно встроить в индивидуальные занятия с коррекцией и полезными фразами." },
          { question: "Можно ли позже перейти к экзаменационным целям?", answer: "Иногда взрослые ученики переходят к GCSE или A-Level. Школа подскажет маршрут после оценки уровня." },
        ],
      },
      registration: {
        eyebrow: "Запись",
        title: "Обсудить цели изучения русского",
        body: "Укажите текущий уровень, желаемое расписание и задачи, ради которых вы изучаете русский.",
        ctaLabel: ruCommon.cta,
      },
    },
  },
};

export function getCourseContent(locale: Locale, routeKey: CourseRouteKey) {
  return courseContent[locale][routeKey];
}
