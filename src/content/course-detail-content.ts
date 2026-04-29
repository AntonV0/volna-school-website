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
  eyebrow: string;
  title: string;
  summary: string;
  summaryTitle: string;
  stage: string;
  focus: string;
  nextTitle: string;
  nextBody: string;
  sections: [DetailSection, DetailSection, DetailSection];
};

const enCta = {
  primary: "Register for a Free Trial Lesson",
  secondary: "Course summary",
  nextEyebrow: "Next step",
  stageLabel: "Learner stage",
  focusLabel: "Focus",
  nextStepLabel: "Next step",
};

const ruCta = {
  primary: "Записаться на бесплатный пробный урок",
  secondary: "Кратко о курсе",
  nextEyebrow: "Следующий шаг",
  stageLabel: "Этап обучения",
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
        { label: cta.stageLabel, value: seed.stage },
        { label: cta.focusLabel, value: seed.focus },
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
      "A steady route for primary-age learners who need Russian literacy, speaking confidence, and a clear routine.",
    summaryTitle: "Primary-age language support",
    stage: "Primary-age children",
    focus: "Reading, writing, speaking, and steady family communication",
    nextTitle: "Start with a friendly first lesson",
    nextBody:
      "The trial lesson helps the school understand your child's confidence and recommend the right class.",
    sections: [
      { title: "Who it is for", body: "For families who want regular Russian study that feels structured, supportive, and age-aware." },
      { title: "Learning focus", body: "Lessons can cover phonics, handwriting, vocabulary, simple grammar, reading fluency, and spoken confidence." },
      { title: "Progression", body: "Primary learners can build toward independent language work, heritage-language confidence, or later exam preparation." },
    ],
  },
  "children-beginners": {
    eyebrow: "Children's Russian",
    title: "Russian for Beginners",
    summary:
      "A calm starting point for children with little or no Russian, focused on confidence and foundations.",
    summaryTitle: "A gentle starting point",
    stage: "Children new to Russian",
    focus: "Alphabet, pronunciation, everyday vocabulary, and confidence",
    nextTitle: "Find the right beginner route",
    nextBody:
      "A trial lesson helps decide whether a group, private lesson, or staged beginner route fits best.",
    sections: [
      { title: "Who it is for", body: "For children starting Russian from the beginning or returning after only light exposure." },
      { title: "Learning focus", body: "Alphabet work, pronunciation, useful phrases, listening, and small speaking wins." },
      { title: "Family support", body: "Parents can support practice through simple routines even if they are not fluent themselves." },
    ],
  },
  "children-native-speakers": {
    eyebrow: "Children's Russian",
    title: "Russian for Native and Heritage Speakers",
    summary:
      "Structured literacy, grammar, vocabulary, and cultural learning for children who already understand or speak Russian.",
    summaryTitle: "For Russian-speaking homes",
    stage: "Native or heritage speakers",
    focus: "Literacy, accuracy, vocabulary range, and confident expression",
    nextTitle: "Discuss your child's current level",
    nextBody:
      "A short trial conversation is the best way to understand spoken confidence and literacy needs.",
    sections: [
      { title: "Who it is for", body: "For children who may speak Russian at home but need stronger academic language and writing." },
      { title: "Learning focus", body: "Reading stamina, spelling, grammar, richer vocabulary, and age-appropriate cultural themes." },
      { title: "Longer-term path", body: "Confident heritage speakers may later move toward GCSE or A-Level preparation when ready." },
    ],
  },
  "children-online-lessons": {
    eyebrow: "Children's Russian",
    title: "Online Russian Lessons for Children",
    summary:
      "A practical overview for families comparing online Russian lessons with teacher-led structure and home support.",
    summaryTitle: "Online learning with structure",
    stage: "Children learning online",
    focus: "Teacher-led routines, materials, interaction, and family communication",
    nextTitle: "Try the online format first",
    nextBody:
      "The trial lesson lets families see whether the online routine feels comfortable.",
    sections: [
      { title: "How online lessons work", body: "Lessons use familiar video tools, clear class routines, and guided activities." },
      { title: "Keeping children engaged", body: "Short tasks, speaking turns, visual materials, and feedback help children stay involved." },
      { title: "What families need", body: "A stable connection, quiet setup, and regular attendance make online lessons easier." },
    ],
  },
  "gcse-preparation": {
    eyebrow: "GCSE Russian",
    title: "GCSE Russian Exam Preparation",
    summary:
      "Focused support for GCSE students who need structure, exam technique, and feedback across all language skills.",
    summaryTitle: "Exam preparation priorities",
    stage: "GCSE candidates",
    focus: "Speaking, writing, reading, listening, vocabulary, and feedback",
    nextTitle: "Plan GCSE support",
    nextBody:
      "The trial lesson helps clarify the student's level, timeline, and support needs.",
    sections: [
      { title: "Who it is for", body: "For students preparing for GCSE Russian or deciding how much support they need before the exam." },
      { title: "Skills covered", body: "Listening, reading, writing, speaking, vocabulary, grammar, timed tasks, and exam confidence." },
      { title: "Planning and feedback", body: "Homework review, mock-style practice, and family updates keep preparation visible." },
    ],
  },
  "gcse-curriculum": {
    eyebrow: "GCSE Russian",
    title: "GCSE Russian Curriculum",
    summary:
      "A clear view of how GCSE Russian study can be organised across themes, grammar, skills, and revision.",
    summaryTitle: "A structured curriculum overview",
    stage: "GCSE students",
    focus: "Themes, grammar, skills, revision, and independent practice",
    nextTitle: "Check curriculum fit",
    nextBody:
      "A trial lesson gives the school a practical way to recommend the right GCSE route.",
    sections: [
      { title: "Curriculum shape", body: "Topic work, grammar, vocabulary, skill rotation, and revision cycles." },
      { title: "Skill balance", body: "Comprehension, writing accuracy, spoken fluency, and exam-style confidence." },
      { title: "Review required", body: "Exact exam-board wording, dates, and assessment details should be verified before launch." },
    ],
  },
  "gcse-faq": {
    eyebrow: "GCSE Russian",
    title: "GCSE Russian FAQ",
    summary:
      "Decision support for families comparing placement, lesson format, homework, exam entry, and next steps.",
    summaryTitle: "Questions families often ask",
    stage: "GCSE decision support",
    focus: "Placement, lesson format, homework, exams, and next steps",
    nextTitle: "Ask about GCSE preparation",
    nextBody:
      "Families can use the trial request to share timeline and questions before choosing a route.",
    sections: [
      { title: "Before joining", body: "Who the course suits, what prior knowledge helps, and when to begin." },
      { title: "During the course", body: "Lesson routines, homework, materials, feedback, and family updates." },
      { title: "Exam questions", body: "Exam-entry routes and fees need current-year verification before publication." },
    ],
  },
  "alevel-preparation": {
    eyebrow: "A-Level Russian",
    title: "A-Level Russian Exam Preparation",
    summary:
      "Advanced support with language accuracy, speaking confidence, analytical writing, and exam practice.",
    summaryTitle: "Advanced preparation support",
    stage: "A-Level candidates",
    focus: "Advanced language, analysis, independent work, and exam technique",
    nextTitle: "Plan A-Level support",
    nextBody:
      "A trial lesson helps clarify current level, goals, and the most suitable route.",
    sections: [
      { title: "Who it is for", body: "For students preparing for A-Level Russian or checking readiness for that route." },
      { title: "Preparation focus", body: "Grammar refinement, speaking practice, essay planning, cultural topics, and feedback." },
      { title: "Study expectations", body: "Independent reading, drafting, revision, and regular feedback are part of mature preparation." },
    ],
  },
  "alevel-curriculum": {
    eyebrow: "A-Level Russian",
    title: "A-Level Russian Curriculum",
    summary:
      "A concise view of advanced Russian study across language, cultural material, essays, speaking, and research.",
    summaryTitle: "Advanced curriculum shape",
    stage: "A-Level students",
    focus: "Language precision, cultural study, essays, speaking, and research",
    nextTitle: "Review the best route",
    nextBody:
      "The school can advise whether a student needs a full course, targeted support, or a readiness check.",
    sections: [
      { title: "Curriculum shape", body: "Language development, cultural study, analytical writing, speaking, and independent work." },
      { title: "Skills and outcomes", body: "Accuracy, argument, vocabulary range, listening confidence, and fluent spoken responses." },
      { title: "Review required", body: "Exact texts, films, topics, components, and exam-board references need owner confirmation." },
    ],
  },
  "alevel-faq": {
    eyebrow: "A-Level Russian",
    title: "A-Level Russian FAQ",
    summary:
      "Answers for readiness, lesson format, independent study, feedback, and exam preparation.",
    summaryTitle: "Advanced course questions",
    stage: "A-Level decision support",
    focus: "Readiness, study routine, feedback, exams, and next steps",
    nextTitle: "Ask about A-Level preparation",
    nextBody:
      "The trial request gives students and families a clear way to share goals and deadlines.",
    sections: [
      { title: "Readiness", body: "Recommended prior study, level assessment, and preparation before joining." },
      { title: "Lessons and feedback", body: "Materials, homework, speaking practice, essays, and teacher comments." },
      { title: "Exam planning", body: "Assessment routes, centres, dates, and fees should stay current-year verified." },
    ],
  },
  "adult-foundations": {
    eyebrow: "Adult Russian",
    title: "Russian Foundations for Adults",
    summary:
      "A practical route for adults beginning Russian or returning after a long break.",
    summaryTitle: "A clear adult starting point",
    stage: "Beginner or returning adults",
    focus: "Everyday language, pronunciation, grammar basics, and confidence",
    nextTitle: "Try a first adult lesson",
    nextBody:
      "A trial lesson helps the school understand your goals and recommend the next step.",
    sections: [
      { title: "Who it is for", body: "For adults who want a structured beginning or a reset after earlier study." },
      { title: "Learning focus", body: "Alphabet, pronunciation, common phrases, reading basics, grammar, listening, and speaking." },
      { title: "Flexible progression", body: "Move toward conversation, travel, culture, family communication, or private tuition goals." },
    ],
  },
  "adult-conversation": {
    eyebrow: "Adult Russian",
    title: "Russian Conversation Lessons",
    summary:
      "Speaking-focused lessons for adults who want more confidence in practical, cultural, travel, or family settings.",
    summaryTitle: "Speaking confidence for adults",
    stage: "Adults with conversation goals",
    focus: "Fluency, listening, vocabulary, pronunciation, and real-life situations",
    nextTitle: "Talk through your goals",
    nextBody:
      "The trial lesson checks your level and helps choose a useful conversation focus.",
    sections: [
      { title: "Who it is for", body: "For adults who know some Russian and want to speak more naturally." },
      { title: "Lesson focus", body: "Topic-based discussion, pronunciation, listening, useful phrases, and correction." },
      { title: "Personal goals", body: "Lessons can be shaped around travel, family, culture, reading, or everyday communication." },
    ],
  },
  "adult-business-russian": {
    eyebrow: "Adult Russian",
    title: "Business Russian Lessons",
    summary:
      "Tailored Russian support for professional communication, workplace confidence, or business-related travel.",
    summaryTitle: "Professional Russian support",
    stage: "Adult professional learners",
    focus: "Workplace vocabulary, meetings, correspondence, and practical confidence",
    nextTitle: "Discuss professional goals",
    nextBody:
      "A trial lesson helps decide whether business Russian should be a separate route or part of broader private tuition.",
    sections: [
      { title: "Who it is for", body: "For adults who need Russian in professional or business-adjacent contexts." },
      { title: "Learning focus", body: "Introductions, calls, meetings, emails, vocabulary, cultural context, and rehearsal." },
      { title: "Tailored support", body: "Scope and availability should be confirmed before making public commitments." },
    ],
  },
};

const ruSeeds: Record<CourseDetailKey, DetailSeed> = {
  "children-primary": {
    eyebrow: "Русский для детей",
    title: "Курс русского для младших школьников",
    summary: "Спокойный маршрут для детей младшего возраста: грамотность, речь и понятный учебный ритм.",
    summaryTitle: "Поддержка младших школьников",
    stage: "Дети младшего школьного возраста",
    focus: "Чтение, письмо, речь и связь с семьей",
    nextTitle: "Начните с дружелюбного первого урока",
    nextBody: "Пробный урок помогает понять уверенность ребенка и подобрать подходящий класс.",
    sections: [
      { title: "Для кого", body: "Для семей, которым нужны регулярные занятия русским с понятной структурой." },
      { title: "Фокус обучения", body: "Фонетика, письмо, словарь, простая грамматика, чтение и устная уверенность." },
      { title: "Развитие", body: "Путь может вести к самостоятельной работе, билингвальной уверенности или будущим экзаменам." },
    ],
  },
  "children-beginners": {
    eyebrow: "Русский для детей",
    title: "Русский для начинающих",
    summary: "Мягкое начало для детей, которые почти не знают русский язык.",
    summaryTitle: "Спокойная точка входа",
    stage: "Дети, начинающие русский",
    focus: "Алфавит, произношение, базовая лексика и уверенность",
    nextTitle: "Найти подходящий начальный маршрут",
    nextBody: "Пробный урок помогает выбрать группу, индивидуальные уроки или поэтапный старт.",
    sections: [
      { title: "Для кого", body: "Для детей, которые начинают с нуля или возвращаются после небольшого опыта." },
      { title: "Фокус обучения", body: "Алфавит, произношение, фразы, аудирование и первые устные успехи." },
      { title: "Поддержка семьи", body: "Родители могут поддерживать практику простыми привычками даже без свободного русского." },
    ],
  },
  "children-native-speakers": {
    eyebrow: "Русский для детей",
    title: "Русский для билингвальных детей",
    summary: "Структурная грамотность, грамматика, словарь и культура для детей, которые уже понимают или говорят по-русски.",
    summaryTitle: "Для русскоязычных семей",
    stage: "Билингвальные ученики",
    focus: "Грамотность, точность, словарный запас и выражение мыслей",
    nextTitle: "Обсудить текущий уровень ребенка",
    nextBody: "Короткая пробная беседа помогает понять речь и потребности в грамотности.",
    sections: [
      { title: "Для кого", body: "Для детей, которые говорят дома по-русски, но нуждаются в академическом языке и письме." },
      { title: "Фокус обучения", body: "Чтение, орфография, грамматика, богатый словарь и культурные темы." },
      { title: "Дальнейший путь", body: "Уверенные ученики могут позже перейти к GCSE или A-Level." },
    ],
  },
  "children-online-lessons": {
    eyebrow: "Русский для детей",
    title: "Онлайн-уроки русского для детей",
    summary: "Практичный обзор онлайн-занятий с преподавателем, структурой и поддержкой дома.",
    summaryTitle: "Онлайн-обучение со структурой",
    stage: "Дети, занимающиеся онлайн",
    focus: "Ритм урока, материалы, взаимодействие и связь с семьей",
    nextTitle: "Попробовать онлайн-формат",
    nextBody: "Пробный урок показывает, подходит ли ребенку онлайн-ритм.",
    sections: [
      { title: "Как проходят уроки", body: "Занятия используют знакомые видеосервисы, понятные routines и задания." },
      { title: "Вовлеченность", body: "Короткие задания, очередность речи, визуальные материалы и обратная связь помогают удерживать внимание." },
      { title: "Что нужно семье", body: "Стабильная связь, спокойное место и регулярное присутствие." },
    ],
  },
  "gcse-preparation": {
    eyebrow: "GCSE Russian",
    title: "Подготовка к GCSE Russian",
    summary: "Фокусированная поддержка для GCSE: структура, техника экзамена и обратная связь.",
    summaryTitle: "Приоритеты подготовки",
    stage: "Ученики GCSE",
    focus: "Говорение, письмо, чтение, аудирование, словарь и feedback",
    nextTitle: "Спланировать поддержку GCSE",
    nextBody: "Пробный урок помогает понять уровень, сроки и нужный формат.",
    sections: [
      { title: "Для кого", body: "Для учеников, готовящихся к GCSE Russian или выбирающих объем поддержки." },
      { title: "Навыки", body: "Аудирование, чтение, письмо, говорение, словарь, грамматика и задания на время." },
      { title: "План и обратная связь", body: "Проверка домашней работы, пробная практика и понятная коммуникация с семьей." },
    ],
  },
  "gcse-curriculum": {
    eyebrow: "GCSE Russian",
    title: "Программа GCSE Russian",
    summary: "Как можно организовать GCSE Russian: темы, грамматика, навыки и повторение.",
    summaryTitle: "Структура программы",
    stage: "Ученики GCSE",
    focus: "Темы, грамматика, навыки, повторение и самостоятельная практика",
    nextTitle: "Проверить подходящий маршрут",
    nextBody: "Пробный урок помогает рекомендовать правильный GCSE-формат.",
    sections: [
      { title: "Форма программы", body: "Темы, грамматика, словарь, чередование навыков и циклы повторения." },
      { title: "Баланс навыков", body: "Понимание, письмо, речь и экзаменационная уверенность." },
      { title: "Требует проверки", body: "Формулировки экзаменационной комиссии, даты и детали assessment нужно сверить." },
    ],
  },
  "gcse-faq": {
    eyebrow: "GCSE Russian",
    title: "Вопросы о GCSE Russian",
    summary: "Помощь с решениями о уровне, формате, домашних заданиях, экзамене и следующих шагах.",
    summaryTitle: "Частые вопросы семей",
    stage: "Поддержка выбора GCSE",
    focus: "Подбор, формат, домашние задания, экзамены и следующие шаги",
    nextTitle: "Задать вопрос о GCSE",
    nextBody: "В заявке можно указать сроки и главные вопросы перед выбором маршрута.",
    sections: [
      { title: "Перед началом", body: "Кому подходит курс, какой уровень полезен и когда начинать." },
      { title: "Во время курса", body: "Ритм уроков, материалы, домашние задания и обратная связь." },
      { title: "Экзамены", body: "Маршруты сдачи и fees нужно проверять на текущий год." },
    ],
  },
  "alevel-preparation": {
    eyebrow: "A-Level Russian",
    title: "Подготовка к A-Level Russian",
    summary: "Продвинутая поддержка: точность языка, устная уверенность, аналитическое письмо и практика.",
    summaryTitle: "Продвинутая подготовка",
    stage: "Ученики A-Level",
    focus: "Продвинутый язык, анализ, самостоятельная работа и техника экзамена",
    nextTitle: "Спланировать поддержку A-Level",
    nextBody: "Пробный урок уточняет уровень, цели и подходящий маршрут.",
    sections: [
      { title: "Для кого", body: "Для учеников, готовящихся к A-Level Russian или проверяющих готовность." },
      { title: "Фокус подготовки", body: "Грамматика, устная практика, эссе, культурные темы и feedback." },
      { title: "Ожидания", body: "Самостоятельное чтение, черновики, повторение и регулярная обратная связь." },
    ],
  },
  "alevel-curriculum": {
    eyebrow: "A-Level Russian",
    title: "Программа A-Level Russian",
    summary: "Продвинутый русский: язык, культура, эссе, устная часть и исследование.",
    summaryTitle: "Структура продвинутой программы",
    stage: "Ученики A-Level",
    focus: "Точность языка, культура, эссе, речь и исследование",
    nextTitle: "Проверить лучший маршрут",
    nextBody: "Школа подскажет, нужен ли полный курс, точечная поддержка или проверка готовности.",
    sections: [
      { title: "Форма программы", body: "Развитие языка, культура, аналитическое письмо, устная речь и самостоятельная работа." },
      { title: "Навыки", body: "Точность, аргументация, словарь, аудирование и свободные устные ответы." },
      { title: "Требует проверки", body: "Тексты, фильм, темы и компоненты экзамена нужно подтвердить." },
    ],
  },
  "alevel-faq": {
    eyebrow: "A-Level Russian",
    title: "Вопросы об A-Level Russian",
    summary: "Ответы о готовности, формате уроков, самостоятельной работе, feedback и экзаменах.",
    summaryTitle: "Вопросы о продвинутом курсе",
    stage: "Поддержка выбора A-Level",
    focus: "Готовность, учебный ритм, обратная связь, экзамены и следующие шаги",
    nextTitle: "Задать вопрос об A-Level",
    nextBody: "Заявка помогает заранее обозначить цели и сроки.",
    sections: [
      { title: "Готовность", body: "Предыдущая подготовка, оценка уровня и подготовка к старту." },
      { title: "Уроки и feedback", body: "Материалы, домашние задания, устная практика, эссе и комментарии." },
      { title: "Экзамены", body: "Маршруты, центры, даты и fees должны быть актуально проверены." },
    ],
  },
  "adult-foundations": {
    eyebrow: "Русский для взрослых",
    title: "Основы русского для взрослых",
    summary: "Практичный маршрут для взрослых, начинающих русский или возвращающихся после перерыва.",
    summaryTitle: "Понятное начало",
    stage: "Начинающие или возвращающиеся взрослые",
    focus: "Повседневный язык, произношение, базовая грамматика и уверенность",
    nextTitle: "Попробовать первый взрослый урок",
    nextBody: "Пробный урок помогает понять цели и следующий шаг.",
    sections: [
      { title: "Для кого", body: "Для взрослых, которым нужен структурный старт или перезапуск." },
      { title: "Фокус", body: "Алфавит, произношение, фразы, чтение, грамматика, аудирование и речь." },
      { title: "Развитие", body: "Движение к разговору, путешествиям, культуре, семье или индивидуальным целям." },
    ],
  },
  "adult-conversation": {
    eyebrow: "Русский для взрослых",
    title: "Разговорные уроки русского",
    summary: "Уроки для взрослых, которые хотят увереннее говорить в реальных ситуациях.",
    summaryTitle: "Разговорная уверенность",
    stage: "Взрослые с разговорными целями",
    focus: "Беглость, аудирование, словарь, произношение и реальные ситуации",
    nextTitle: "Обсудить разговорные цели",
    nextBody: "Пробный урок помогает проверить уровень и выбрать полезный фокус.",
    sections: [
      { title: "Для кого", body: "Для взрослых, которые уже немного знают русский и хотят говорить естественнее." },
      { title: "Фокус урока", body: "Темы, произношение, аудирование, полезные фразы и коррекция." },
      { title: "Личные цели", body: "Путешествия, семья, культура, чтение или повседневное общение." },
    ],
  },
  "adult-business-russian": {
    eyebrow: "Русский для взрослых",
    title: "Деловой русский",
    summary: "Индивидуальная поддержка для профессионального общения, рабочих задач или деловых поездок.",
    summaryTitle: "Профессиональный русский",
    stage: "Взрослые с профессиональными целями",
    focus: "Рабочая лексика, встречи, переписка и практическая уверенность",
    nextTitle: "Обсудить профессиональные цели",
    nextBody: "Пробный урок помогает понять, нужен ли отдельный деловой маршрут.",
    sections: [
      { title: "Для кого", body: "Для взрослых, которым русский нужен в профессиональном контексте." },
      { title: "Фокус", body: "Знакомства, звонки, встречи, письма, лексика, культурный контекст и репетиция." },
      { title: "Индивидуальная поддержка", body: "Объем и доступность нужно подтвердить перед публичными обещаниями." },
    ],
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
