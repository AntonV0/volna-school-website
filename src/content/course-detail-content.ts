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

type DetailSeed = {
  title: string;
  eyebrow: string;
  summary: string;
  summaryTitle: string;
  items: [string, string, string];
  sections: [DetailSection, DetailSection, DetailSection];
  nextTitle: string;
  nextBody: string;
};

const enCta = {
  primary: "Register for a Free Trial Lesson",
  secondary: "View course summary",
  nextEyebrow: "Next step",
  focusLabel: "Focus",
  nextStepLabel: "Next step",
};

const ruCta = {
  primary: "Записаться на бесплатный пробный урок",
  secondary: "Кратко о курсе",
  nextEyebrow: "Следующий шаг",
  focusLabel: "Фокус",
  nextStepLabel: "Следующий шаг",
};

function makeDetail(
  key: CourseDetailKey,
  seed: DetailSeed,
  cta: typeof enCta,
): CourseDetailContent {
  return {
    key,
    parentKey: courseDetailParents[key],
    hero: {
      eyebrow: seed.eyebrow,
      title: seed.title,
      summary: seed.summary,
      primaryCtaLabel: cta.primary,
      secondaryCtaLabel: cta.secondary,
    },
    summary: {
      eyebrow: cta.secondary,
      title: seed.summaryTitle,
      items: [
        { label: seed.items[0], value: seed.items[1] },
        { label: cta.focusLabel, value: seed.items[2] },
        { label: cta.nextStepLabel, value: cta.primary },
      ],
    },
    sections: seed.sections,
    nextSteps: {
      eyebrow: cta.nextEyebrow,
      title: seed.nextTitle,
      body: seed.nextBody,
      ctaLabel: cta.primary,
    },
  };
}

const enSeeds: Record<CourseDetailKey, DetailSeed> = {
  "children-primary": {
    eyebrow: "Children's Russian",
    title: "Primary Russian Course",
    summary:
      "A steady Russian language pathway for primary-age learners, written for families who want structure, warmth, and clear progression without overloading the main course page.",
    summaryTitle: "Primary-age language support",
    items: ["Learner stage", "Primary-age children", "Core literacy, speaking confidence, and steady family communication"],
    sections: [
      {
        title: "Who it is for",
        body:
          "This page is for families comparing a regular Russian course for children who are ready to build reading, writing, listening, and speaking habits. Final age bands and placement wording should be confirmed before publication.",
      },
      {
        title: "Learning focus",
        body:
          "The approved copy can explain phonics, handwriting, vocabulary, simple grammar, reading fluency, and spoken confidence in a way that feels reassuring to parents and manageable for children.",
      },
      {
        title: "Progression",
        body:
          "Use this page to show how primary learners can move from foundations toward more independent language work, heritage-language confidence, or future exam preparation.",
      },
    ],
    nextTitle: "Start with a friendly first lesson",
    nextBody:
      "A free trial lesson gives the school enough context to suggest a suitable class or support route before detailed schedules are discussed.",
  },
  "children-beginners": {
    eyebrow: "Children's Russian",
    title: "Russian for Beginners",
    summary:
      "A focused page for children starting Russian from little or no prior knowledge, with review-ready copy for families who need a calm entry point.",
    summaryTitle: "A gentle starting point",
    items: ["Learner stage", "Children new to Russian", "Foundations, pronunciation, practical vocabulary, and confidence"],
    sections: [
      {
        title: "Who it is for",
        body:
          "This path supports children who are new to Russian or who have only heard a small amount at home. The final page should confirm placement criteria after the school reviews class availability.",
      },
      {
        title: "Learning focus",
        body:
          "The content can introduce alphabet work, everyday phrases, pronunciation, listening practice, and small speaking wins that help children feel capable from the beginning.",
      },
      {
        title: "Family support",
        body:
          "Use this section to set expectations around homework, parent updates, and how families can encourage practice without needing to be fluent themselves.",
      },
    ],
    nextTitle: "Find the right beginner route",
    nextBody:
      "The trial lesson helps identify whether a group, private lesson, or staged beginner pathway is the best next step.",
  },
  "children-native-speakers": {
    eyebrow: "Children's Russian",
    title: "Russian for Native and Heritage Speakers",
    summary:
      "A deeper explanation page for children who already understand or speak Russian and need structured literacy, grammar, and cultural learning.",
    summaryTitle: "For Russian-speaking homes",
    items: ["Learner stage", "Native or heritage speakers", "Literacy, accuracy, vocabulary range, and confident expression"],
    sections: [
      {
        title: "Who it is for",
        body:
          "This page supports families whose children may speak Russian at home but need a more structured academic route. Final placement language should avoid assumptions and be reviewed by the teaching team.",
      },
      {
        title: "Learning focus",
        body:
          "Approved copy can cover reading stamina, writing accuracy, grammar, spelling, richer vocabulary, and age-appropriate cultural topics.",
      },
      {
        title: "Longer-term pathway",
        body:
          "This is a natural place to explain how confident heritage speakers may later move toward GCSE or A-Level preparation when the timing is right.",
      },
    ],
    nextTitle: "Discuss your child's current level",
    nextBody:
      "A short trial conversation gives the school a more reliable sense of confidence, literacy, and class fit than a form alone.",
  },
  "children-online-lessons": {
    eyebrow: "Children's Russian",
    title: "Online Russian Lessons for Children",
    summary:
      "A practical SEO page for families comparing online Russian lessons, with space for the school to explain format, attention, and home support.",
    summaryTitle: "Online learning with structure",
    items: ["Format", "Online lessons for children", "Teacher-led routines, interaction, materials, and family communication"],
    sections: [
      {
        title: "How online lessons work",
        body:
          "This section can explain the learning environment, class routines, materials, and expectations once the school approves the exact platforms and processes to name publicly.",
      },
      {
        title: "Keeping children engaged",
        body:
          "Use this section for warm, practical copy about short tasks, speaking turns, visual materials, feedback, and steady teacher attention.",
      },
      {
        title: "What families need",
        body:
          "The final page can list simple setup expectations, attendance guidance, and how parents receive updates without publishing private operational details.",
      },
    ],
    nextTitle: "Try the online format first",
    nextBody:
      "The trial lesson lets families see whether the online routine feels comfortable before choosing an ongoing class.",
  },
  "gcse-preparation": {
    eyebrow: "GCSE Russian",
    title: "GCSE Russian Exam Preparation",
    summary:
      "A focused preparation page for students and families who need exam technique, structured practice, and a clear route toward the final assessment.",
    summaryTitle: "Exam preparation priorities",
    items: ["Learner stage", "GCSE candidates", "Speaking, writing, reading, listening, vocabulary, and feedback"],
    sections: [
      {
        title: "Who it is for",
        body:
          "This page is for GCSE students who need a guided preparation plan. Final copy should confirm entry expectations and any exam-board wording after review.",
      },
      {
        title: "Skills covered",
        body:
          "Use approved wording to explain practice across listening, reading, writing, speaking, vocabulary, grammar, and timed tasks without promising specific outcomes.",
      },
      {
        title: "Planning and feedback",
        body:
          "This page can describe checkpoints, homework review, mock-style practice, and parent communication in general terms until dates and logistics are verified.",
      },
    ],
    nextTitle: "Plan GCSE support",
    nextBody:
      "The free trial lesson helps the school understand the student's current level, timeline, and support needs.",
  },
  "gcse-curriculum": {
    eyebrow: "GCSE Russian",
    title: "GCSE Russian Curriculum",
    summary:
      "A curriculum overview page for families who want to understand how GCSE Russian study can be organised before final syllabus details are approved.",
    summaryTitle: "A structured curriculum overview",
    items: ["Learner stage", "GCSE students", "Themes, grammar, language skills, revision, and independent practice"],
    sections: [
      {
        title: "Curriculum shape",
        body:
          "Use this section to explain the course structure at a high level: topic work, grammar, vocabulary, skill rotation, and revision cycles.",
      },
      {
        title: "Skill balance",
        body:
          "The page can show how lessons balance comprehension, written accuracy, spoken fluency, and exam-style confidence.",
      },
      {
        title: "Review required",
        body:
          "Specific specification references, assessment dates, and exam-board details should be added only after the teaching team confirms the exact public wording.",
      },
    ],
    nextTitle: "Check curriculum fit",
    nextBody:
      "A trial lesson gives the school a practical way to recommend the right GCSE study route.",
  },
  "gcse-faq": {
    eyebrow: "GCSE Russian",
    title: "GCSE Russian FAQ",
    summary:
      "A question-led page for common GCSE Russian decisions, ready for final answers about placement, lessons, homework, and exam logistics.",
    summaryTitle: "Questions families often ask",
    items: ["Format", "GCSE decision support", "Placement, lesson format, homework, exams, and next steps"],
    sections: [
      {
        title: "Before joining",
        body:
          "Final copy can answer who the course suits, what prior knowledge helps, and when a student should begin preparing.",
      },
      {
        title: "During the course",
        body:
          "Use this section for approved details about lesson routines, homework, materials, feedback, and family updates.",
      },
      {
        title: "Exam questions",
        body:
          "Keep public answers general until exam-entry options, centres, dates, and any fees are verified for the current year.",
      },
    ],
    nextTitle: "Ask about GCSE preparation",
    nextBody:
      "Families can use the trial request to share the student's timeline and the questions they want answered first.",
  },
  "alevel-preparation": {
    eyebrow: "A-Level Russian",
    title: "A-Level Russian Exam Preparation",
    summary:
      "A focused page for advanced students who need structured support with language accuracy, speaking confidence, essays, and exam practice.",
    summaryTitle: "Advanced preparation support",
    items: ["Learner stage", "A-Level candidates", "Advanced language, analysis, independent work, and exam technique"],
    sections: [
      {
        title: "Who it is for",
        body:
          "This page is for students preparing for A-Level Russian or exploring whether their current level is ready for that route.",
      },
      {
        title: "Preparation focus",
        body:
          "Approved copy can explain grammar refinement, speaking practice, essay planning, cultural topics, research habits, and exam-style feedback.",
      },
      {
        title: "Study expectations",
        body:
          "Use this page to set a mature tone around independent preparation, reading, drafting, revision, and regular feedback without publishing unverified schedules.",
      },
    ],
    nextTitle: "Plan A-Level support",
    nextBody:
      "A trial lesson helps clarify the student's current level, goals, and the preparation route that would be most appropriate.",
  },
  "alevel-curriculum": {
    eyebrow: "A-Level Russian",
    title: "A-Level Russian Curriculum",
    summary:
      "A curriculum page for students and parents who want a clearer view of advanced Russian study before final specification wording is published.",
    summaryTitle: "Advanced curriculum shape",
    items: ["Learner stage", "A-Level students", "Language precision, cultural study, essays, speaking, and research"],
    sections: [
      {
        title: "Curriculum shape",
        body:
          "This page can describe the broad balance between language development, cultural material, analytical writing, speaking, and independent study.",
      },
      {
        title: "Skills and outcomes",
        body:
          "Approved copy can explain how students develop accuracy, argument, vocabulary range, listening confidence, and more fluent spoken responses.",
      },
      {
        title: "Review required",
        body:
          "Exact texts, films, topics, exam components, and exam-board references should remain under review until the school approves them for public use.",
      },
    ],
    nextTitle: "Review the best route",
    nextBody:
      "The school can use a trial lesson to understand whether the student needs a full course, targeted support, or a preparation check.",
  },
  "alevel-faq": {
    eyebrow: "A-Level Russian",
    title: "A-Level Russian FAQ",
    summary:
      "A decision-support page for A-Level Russian questions around readiness, lesson format, independent study, and exam preparation.",
    summaryTitle: "Advanced course questions",
    items: ["Format", "A-Level decision support", "Readiness, study routine, feedback, exams, and next steps"],
    sections: [
      {
        title: "Readiness",
        body:
          "Final copy can answer what prior study is recommended, how current level is assessed, and what students should prepare before joining.",
      },
      {
        title: "Lessons and feedback",
        body:
          "Use this section for approved answers about lesson materials, homework, speaking practice, essays, and teacher feedback.",
      },
      {
        title: "Exam planning",
        body:
          "Keep public details general until assessment routes, centres, dates, and any current-year logistics are verified.",
      },
    ],
    nextTitle: "Ask about A-Level preparation",
    nextBody:
      "The trial lesson request gives students and families a clear way to share goals, deadlines, and current concerns.",
  },
  "adult-foundations": {
    eyebrow: "Adult Russian",
    title: "Russian Foundations for Adults",
    summary:
      "A practical page for adults beginning Russian or returning after a long break, with a calm route into pronunciation, grammar, and everyday communication.",
    summaryTitle: "A clear adult starting point",
    items: ["Learner stage", "Beginner or returning adults", "Everyday language, pronunciation, grammar basics, and confidence"],
    sections: [
      {
        title: "Who it is for",
        body:
          "This path suits adults who want a structured beginning, a reset after earlier study, or a practical route into Russian for personal goals.",
      },
      {
        title: "Learning focus",
        body:
          "Approved copy can cover the alphabet, pronunciation, common phrases, reading basics, grammar patterns, listening, and supported speaking practice.",
      },
      {
        title: "Flexible progression",
        body:
          "Use this section to describe how adult learners can progress toward conversation, travel, culture, professional goals, or private tuition.",
      },
    ],
    nextTitle: "Try a first adult lesson",
    nextBody:
      "A trial lesson helps the school understand your goals and recommend the most suitable next step.",
  },
  "adult-conversation": {
    eyebrow: "Adult Russian",
    title: "Russian Conversation Lessons",
    summary:
      "A focused page for adults who want more confidence speaking Russian in practical, cultural, travel, or family settings.",
    summaryTitle: "Speaking confidence for adults",
    items: ["Learner stage", "Adult learners with conversation goals", "Fluency, listening, vocabulary, pronunciation, and real-life situations"],
    sections: [
      {
        title: "Who it is for",
        body:
          "This page supports adults who know some Russian and want to speak more naturally, as well as learners who need guided conversation practice alongside foundations.",
      },
      {
        title: "Lesson focus",
        body:
          "Approved copy can describe topic-based discussion, pronunciation work, listening practice, useful phrases, correction, and confidence-building routines.",
      },
      {
        title: "Personal goals",
        body:
          "Use this page to show how lessons can be shaped around travel, family communication, culture, reading, or day-to-day confidence once availability is confirmed.",
      },
    ],
    nextTitle: "Talk through your goals",
    nextBody:
      "The trial lesson is a simple way to check your level and choose a conversation focus that feels useful.",
  },
  "adult-business-russian": {
    eyebrow: "Adult Russian",
    title: "Business Russian Lessons",
    summary:
      "A review-ready SEO page for adults exploring Russian for professional communication, workplace confidence, or business-related travel.",
    summaryTitle: "Professional Russian support",
    items: ["Learner stage", "Adult professional learners", "Workplace vocabulary, meetings, correspondence, and practical confidence"],
    sections: [
      {
        title: "Who it is for",
        body:
          "This path is for adults who want Russian for professional contexts. Final copy should confirm the range of supported industries and formats before publication.",
      },
      {
        title: "Learning focus",
        body:
          "Approved wording can cover introductions, calls, meetings, emails, sector vocabulary, cultural awareness, and practical rehearsal for real situations.",
      },
      {
        title: "Tailored support",
        body:
          "Use this section to describe tailored goals and private or small-group options only after the school confirms availability and scope.",
      },
    ],
    nextTitle: "Discuss professional goals",
    nextBody:
      "A trial lesson helps clarify your current level, use case, and whether business-focused Russian is the right route.",
  },
};

const ruSeeds: Record<CourseDetailKey, DetailSeed> = {
  "children-primary": {
    eyebrow: "Русский для детей",
    title: "Курс русского языка для младших школьников",
    summary:
      "Последовательная страница для семей, которым нужен понятный путь обучения русскому языку: спокойно, структурно и без перегрузки основной страницы курса.",
    summaryTitle: "Поддержка для младшего школьного возраста",
    items: ["Этап обучения", "Дети младшего школьного возраста", "Грамотность, устная речь, уверенность и связь с семьей"],
    sections: [
      { title: "Для кого", body: "Страница помогает семьям понять, подойдет ли регулярный курс ребенку, который готов развивать чтение, письмо, аудирование и устную речь. Возрастные рамки и правила распределения нужно утвердить отдельно." },
      { title: "Фокус обучения", body: "Финальный текст может описать звуки и буквы, письмо, словарный запас, простую грамматику, чтение и уверенную устную речь на понятном для родителей языке." },
      { title: "Дальнейший путь", body: "Здесь можно показать, как базовые навыки ведут к более самостоятельной учебе, поддержке русского в семье и будущей экзаменационной подготовке." },
    ],
    nextTitle: "Начать с доброжелательного пробного урока",
    nextBody: "Пробный урок помогает школе понять уровень ребенка и предложить подходящий класс или формат поддержки.",
  },
  "children-beginners": {
    eyebrow: "Русский для детей",
    title: "Русский язык для начинающих детей",
    summary: "Страница для детей, которые начинают русский почти с нуля и нуждаются в мягком, понятном входе в обучение.",
    summaryTitle: "Спокойное начало",
    items: ["Этап обучения", "Дети, которые только начинают русский", "Основы, произношение, практическая лексика и уверенность"],
    sections: [
      { title: "Для кого", body: "Этот путь подходит детям, которые мало знакомы с русским языком или только слышали его дома. Финальные критерии распределения должны быть проверены школой." },
      { title: "Фокус обучения", body: "Можно описать алфавит, простые фразы, произношение, аудирование и небольшие разговорные успехи, которые помогают ребенку почувствовать уверенность." },
      { title: "Поддержка семьи", body: "Здесь стоит объяснить домашнюю практику, обратную связь для родителей и способы поддерживать ребенка без требования свободного владения русским." },
    ],
    nextTitle: "Подобрать маршрут для начинающего",
    nextBody: "Пробный урок помогает понять, лучше подойдет группа, индивидуальные занятия или постепенный вводный курс.",
  },
  "children-native-speakers": {
    eyebrow: "Русский для детей",
    title: "Русский для носителей и билингвальных детей",
    summary: "Страница для детей, которые уже понимают или говорят по-русски, но нуждаются в системной грамотности, грамматике и культурном контексте.",
    summaryTitle: "Для русскоговорящих семей",
    items: ["Этап обучения", "Носители и билингвальные дети", "Грамотность, точность, словарный запас и выразительная речь"],
    sections: [
      { title: "Для кого", body: "Страница помогает семьям, где ребенок говорит по-русски дома, но нуждается в более академическом и последовательном обучении." },
      { title: "Фокус обучения", body: "Финальный текст может включать чтение, письмо, орфографию, грамматику, богатую лексику и культурные темы по возрасту." },
      { title: "Долгосрочный путь", body: "Здесь можно объяснить, как уверенные билингвальные ученики позже переходят к подготовке GCSE или A-Level, если это соответствует их целям." },
    ],
    nextTitle: "Обсудить текущий уровень ребенка",
    nextBody: "Короткий пробный урок дает более точное понимание речи, грамотности и подходящего класса.",
  },
  "children-online-lessons": {
    eyebrow: "Русский для детей",
    title: "Онлайн-уроки русского языка для детей",
    summary: "Практичная SEO-страница для семей, которые сравнивают онлайн-занятия русским языком и хотят понять формат, внимание учителя и поддержку дома.",
    summaryTitle: "Онлайн-обучение со структурой",
    items: ["Формат", "Онлайн-уроки для детей", "Ритм занятия, взаимодействие, материалы и связь с семьей"],
    sections: [
      { title: "Как проходят онлайн-уроки", body: "Этот раздел может объяснить учебную среду, структуру урока, материалы и ожидания после утверждения платформ и процессов." },
      { title: "Вовлеченность детей", body: "Подойдет теплое практичное описание коротких заданий, очередности ответов, визуальных материалов, обратной связи и внимания учителя." },
      { title: "Что нужно семье", body: "Финальная страница может перечислить базовые технические требования, посещаемость и формат обновлений для родителей без частных операционных деталей." },
    ],
    nextTitle: "Сначала попробовать онлайн-формат",
    nextBody: "Пробный урок помогает семье понять, комфортен ли онлайн-ритм до выбора постоянного курса.",
  },
  "gcse-preparation": {
    eyebrow: "GCSE русский",
    title: "Подготовка к GCSE по русскому языку",
    summary: "Страница для учеников и семей, которым нужна экзаменационная техника, системная практика и понятный план подготовки.",
    summaryTitle: "Приоритеты подготовки к экзамену",
    items: ["Этап обучения", "Кандидаты GCSE", "Говорение, письмо, чтение, аудирование, лексика и обратная связь"],
    sections: [
      { title: "Для кого", body: "Страница предназначена для учеников GCSE, которым нужен управляемый план подготовки. Входные требования и формулировки про экзаменационные программы следует утвердить отдельно." },
      { title: "Какие навыки развиваются", body: "Можно описать практику аудирования, чтения, письма, говорения, лексики, грамматики и заданий с ограничением времени без обещания конкретных результатов." },
      { title: "План и обратная связь", body: "Здесь можно говорить о контрольных точках, проверке домашних заданий, пробной практике и связи с родителями в общих формулировках." },
    ],
    nextTitle: "Спланировать подготовку GCSE",
    nextBody: "Пробный урок помогает понять текущий уровень, сроки и нужный формат поддержки.",
  },
  "gcse-curriculum": {
    eyebrow: "GCSE русский",
    title: "Программа GCSE по русскому языку",
    summary: "Обзорная страница для семей, которые хотят понять структуру обучения GCSE до публикации окончательных деталей программы.",
    summaryTitle: "Структурный обзор программы",
    items: ["Этап обучения", "Ученики GCSE", "Темы, грамматика, навыки, повторение и самостоятельная практика"],
    sections: [
      { title: "Структура программы", body: "Здесь можно описать темы, грамматику, лексику, чередование навыков и циклы повторения на высоком уровне." },
      { title: "Баланс навыков", body: "Страница показывает, как уроки соединяют понимание текста и речи, письменную точность, устную уверенность и экзаменационный формат." },
      { title: "Требует проверки", body: "Конкретные ссылки на спецификации, компоненты и даты следует добавлять только после подтверждения школьной командой." },
    ],
    nextTitle: "Проверить, подходит ли программа",
    nextBody: "Пробный урок помогает школе рекомендовать подходящий маршрут подготовки GCSE.",
  },
  "gcse-faq": {
    eyebrow: "GCSE русский",
    title: "Вопросы и ответы о GCSE по русскому языку",
    summary: "Страница для частых вопросов о GCSE: распределение, формат уроков, домашняя работа и экзаменационная логистика.",
    summaryTitle: "Частые вопросы семей",
    items: ["Формат", "Поддержка решения по GCSE", "Распределение, уроки, домашняя работа, экзамены и следующие шаги"],
    sections: [
      { title: "До начала", body: "Финальный текст может ответить, кому подходит курс, какой уровень полезен и когда лучше начинать подготовку." },
      { title: "Во время курса", body: "Здесь можно описать ритм занятий, материалы, домашние задания, обратную связь и обновления для семьи." },
      { title: "Экзаменационные вопросы", body: "Публичные ответы лучше оставить общими, пока варианты сдачи, центры, даты и возможные сборы не проверены." },
    ],
    nextTitle: "Задать вопрос о подготовке GCSE",
    nextBody: "В заявке на пробный урок семья может указать сроки ученика и вопросы, которые важно обсудить в первую очередь.",
  },
  "alevel-preparation": {
    eyebrow: "A-Level русский",
    title: "Подготовка к A-Level по русскому языку",
    summary: "Страница для продвинутых учеников, которым нужна поддержка в точности языка, устной речи, эссе и экзаменационной практике.",
    summaryTitle: "Поддержка продвинутой подготовки",
    items: ["Этап обучения", "Кандидаты A-Level", "Продвинутый язык, анализ, самостоятельная работа и экзаменационная техника"],
    sections: [
      { title: "Для кого", body: "Страница подходит ученикам, которые готовятся к A-Level или проверяют, готов ли их текущий уровень к этому маршруту." },
      { title: "Фокус подготовки", body: "Можно описать грамматику, устную практику, планирование эссе, культурные темы, исследовательские навыки и обратную связь." },
      { title: "Ожидания от учебы", body: "Здесь важно задать зрелый тон: самостоятельная подготовка, чтение, черновики, повторение и регулярная обратная связь без непроверенных расписаний." },
    ],
    nextTitle: "Спланировать поддержку A-Level",
    nextBody: "Пробный урок помогает понять уровень ученика, цели и наиболее подходящий маршрут подготовки.",
  },
  "alevel-curriculum": {
    eyebrow: "A-Level русский",
    title: "Программа A-Level по русскому языку",
    summary: "Страница для учеников и родителей, которым нужен обзор продвинутого изучения русского языка до утверждения деталей спецификации.",
    summaryTitle: "Структура продвинутой программы",
    items: ["Этап обучения", "Ученики A-Level", "Точность языка, культурные темы, эссе, говорение и исследование"],
    sections: [
      { title: "Структура программы", body: "Можно описать баланс языкового развития, культурного материала, аналитического письма, устной речи и самостоятельной работы." },
      { title: "Навыки и результаты", body: "Финальный текст может объяснить развитие точности, аргументации, словарного запаса, аудирования и более свободных устных ответов." },
      { title: "Требует проверки", body: "Конкретные тексты, фильмы, темы, компоненты экзамена и ссылки на экзаменационные программы остаются под проверкой." },
    ],
    nextTitle: "Проверить лучший маршрут",
    nextBody: "На пробном уроке школа поймет, нужен ли полный курс, точечная поддержка или проверка подготовки.",
  },
  "alevel-faq": {
    eyebrow: "A-Level русский",
    title: "Вопросы и ответы об A-Level по русскому языку",
    summary: "Страница для вопросов о готовности, формате уроков, самостоятельной работе и подготовке к A-Level.",
    summaryTitle: "Вопросы о продвинутом курсе",
    items: ["Формат", "Поддержка решения по A-Level", "Готовность, учебный ритм, обратная связь, экзамены и следующие шаги"],
    sections: [
      { title: "Готовность", body: "Финальный текст может объяснить рекомендуемую предыдущую подготовку, оценку уровня и то, что стоит подготовить перед началом." },
      { title: "Уроки и обратная связь", body: "Здесь можно ответить о материалах, домашних заданиях, устной практике, эссе и комментариях преподавателя." },
      { title: "Экзаменационный план", body: "Детали должны оставаться общими, пока маршруты сдачи, центры, даты и логистика текущего года не подтверждены." },
    ],
    nextTitle: "Задать вопрос о подготовке A-Level",
    nextBody: "Заявка на пробный урок помогает ученикам и семьям заранее обозначить цели, сроки и вопросы.",
  },
  "adult-foundations": {
    eyebrow: "Русский для взрослых",
    title: "Основы русского языка для взрослых",
    summary: "Практичная страница для взрослых, которые начинают русский или возвращаются после перерыва.",
    summaryTitle: "Понятное начало для взрослых",
    items: ["Этап обучения", "Начинающие или возвращающиеся взрослые", "Повседневный язык, произношение, базовая грамматика и уверенность"],
    sections: [
      { title: "Для кого", body: "Этот путь подходит взрослым, которым нужен структурный старт, восстановление после прежней учебы или практичный маршрут к личным целям." },
      { title: "Фокус обучения", body: "Можно описать алфавит, произношение, частые фразы, основы чтения, грамматические модели, аудирование и поддержанную устную практику." },
      { title: "Гибкое развитие", body: "Здесь можно показать движение к разговорной практике, путешествиям, культуре, профессиональным задачам или индивидуальным урокам." },
    ],
    nextTitle: "Попробовать первый взрослый урок",
    nextBody: "Пробный урок помогает школе понять ваши цели и предложить подходящий следующий шаг.",
  },
  "adult-conversation": {
    eyebrow: "Русский для взрослых",
    title: "Разговорные уроки русского языка",
    summary: "Страница для взрослых, которые хотят увереннее говорить по-русски в практических, культурных, семейных или туристических ситуациях.",
    summaryTitle: "Разговорная уверенность для взрослых",
    items: ["Этап обучения", "Взрослые с разговорными целями", "Беглость, аудирование, лексика, произношение и реальные ситуации"],
    sections: [
      { title: "Для кого", body: "Страница подходит взрослым, которые уже немного знают русский и хотят говорить естественнее, а также тем, кому нужна разговорная практика параллельно с основами." },
      { title: "Фокус урока", body: "Можно описать тематические обсуждения, произношение, аудирование, полезные фразы, корректировку и упражнения на уверенность." },
      { title: "Личные цели", body: "Здесь можно показать, как занятия подстраиваются под путешествия, семью, культуру, чтение или повседневную коммуникацию после подтверждения доступности." },
    ],
    nextTitle: "Обсудить разговорные цели",
    nextBody: "Пробный урок помогает проверить уровень и выбрать разговорный фокус, который будет действительно полезен.",
  },
  "adult-business-russian": {
    eyebrow: "Русский для взрослых",
    title: "Деловой русский язык",
    summary: "SEO-страница для взрослых, которым русский нужен для профессионального общения, рабочей уверенности или деловых поездок.",
    summaryTitle: "Поддержка профессионального русского",
    items: ["Этап обучения", "Взрослые профессиональные ученики", "Рабочая лексика, встречи, переписка и практическая уверенность"],
    sections: [
      { title: "Для кого", body: "Этот путь подходит взрослым, которым русский нужен в профессиональном контексте. Диапазон отраслей и форматов нужно подтвердить перед публикацией." },
      { title: "Фокус обучения", body: "Финальный текст может включать знакомства, звонки, встречи, письма, профессиональную лексику, культурный контекст и репетицию реальных ситуаций." },
      { title: "Индивидуальная поддержка", body: "Индивидуальные цели, частные занятия или мини-группы стоит описывать только после подтверждения доступности и объема услуги." },
    ],
    nextTitle: "Обсудить профессиональные цели",
    nextBody: "Пробный урок помогает понять ваш уровень, рабочие задачи и подходит ли деловой русский как отдельный маршрут.",
  },
};

const enDetails = Object.fromEntries(
  courseDetailKeys.map((key) => [key, makeDetail(key, enSeeds[key], enCta)]),
) as Record<CourseDetailKey, CourseDetailContent>;

const ruDetails = Object.fromEntries(
  courseDetailKeys.map((key) => [key, makeDetail(key, ruSeeds[key], ruCta)]),
) as Record<CourseDetailKey, CourseDetailContent>;

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
