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
  sections: DetailSection[];
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
      "A steady route for primary-age learners who need Russian literacy, speaking confidence, and a clear routine that families can understand.",
    summaryTitle: "Primary-age Russian support",
    stage: "Primary-age children who are ready for regular, age-aware language study",
    focus: "Reading, writing, speaking, vocabulary, and steady homework habits",
    nextTitle: "Start with a friendly placement lesson",
    nextBody:
      "The trial lesson helps the school understand your child's reading, writing, speaking confidence, and learning pace before recommending a group or individual route.",
    sections: [
      {
        title: "Who it is for",
        body: "For families who want Russian to become a regular learning routine, whether the child already hears Russian at home or needs clearer literacy support.",
      },
      {
        title: "Age and level fit",
        body: "Placement looks at age, attention span, confidence, reading readiness, and how much Russian the child already understands or uses.",
      },
      {
        title: "Learning focus",
        body: "Lessons can cover sounds, handwriting, vocabulary, simple grammar, reading fluency, spelling, short writing, and spoken answers.",
      },
      {
        title: "Speaking confidence",
        body: "Children practise saying full answers, asking simple questions, retelling short texts, and using Russian without feeling rushed.",
      },
      {
        title: "Homework and progress",
        body: "Homework is used to keep language moving between lessons. Teachers can watch participation, accuracy, reading stamina, and confidence over time.",
      },
      {
        title: "Longer-term path",
        body: "Primary learners can build toward more independent language work, stronger heritage-language confidence, and later GCSE preparation when ready.",
      },
    ],
  },
  "children-beginners": {
    eyebrow: "Children's Russian",
    title: "Russian for Beginners",
    summary:
      "A calm starting point for children with little or no Russian, focused on confidence, pronunciation, first words, and a clear route into learning.",
    summaryTitle: "A gentle beginner route",
    stage: "Children starting Russian from the beginning or returning after light exposure",
    focus: "Alphabet, pronunciation, first phrases, listening, speaking, and early literacy",
    nextTitle: "Find the right beginner starting point",
    nextBody:
      "A trial lesson helps decide whether a beginner group, private lesson, or staged introduction is the best first step for your child.",
    sections: [
      {
        title: "Who it is for",
        body: "For children who are new to Russian, have only heard a little at home, or need to rebuild confidence after an early break.",
      },
      {
        title: "Age and level fit",
        body: "Younger beginners may need more visual, playful tasks. Older beginners can usually move faster into reading, writing, and simple grammar.",
      },
      {
        title: "Learning focus",
        body: "Lessons start with sounds, letters, useful classroom language, everyday vocabulary, listening practice, and short speaking turns.",
      },
      {
        title: "Confidence first",
        body: "The route is designed so children can answer, repeat, read small amounts, and try new words without feeling exposed.",
      },
      {
        title: "Homework and home support",
        body: "Short practice tasks help new language settle. Parents can support routines even when they are not fluent Russian speakers.",
      },
      {
        title: "Next stages",
        body: "As foundations grow, children can move toward fuller reading and writing, heritage-speaker groups, or later GCSE preparation when appropriate.",
      },
    ],
  },
  "children-native-speakers": {
    eyebrow: "Children's Russian",
    title: "Russian for Native and Heritage Speakers",
    summary:
      "Structured literacy, grammar, vocabulary, speaking, and cultural learning for children who already understand or speak Russian.",
    summaryTitle: "For Russian-speaking homes",
    stage: "Native or heritage speakers who need stronger academic Russian",
    focus: "Literacy, accuracy, vocabulary range, confident expression, and cultural context",
    nextTitle: "Discuss your child's current Russian",
    nextBody:
      "A short trial conversation helps the school understand spoken confidence, reading and writing habits, and the most suitable class level.",
    sections: [
      {
        title: "Who it is for",
        body: "For children who may understand or speak Russian at home but need stronger reading, writing, grammar, and school-style vocabulary.",
      },
      {
        title: "Age and level fit",
        body: "Placement considers spoken fluency, reading stamina, spelling, grammar awareness, and whether the child can work comfortably in a group.",
      },
      {
        title: "Learning focus",
        body: "Lessons can develop reading comprehension, spelling, grammar, writing accuracy, richer vocabulary, and more precise spoken expression.",
      },
      {
        title: "Culture and creativity",
        body: "Stories, poems, discussion, traditions, and creative tasks help children connect Russian with culture, identity, and real communication.",
      },
      {
        title: "Homework and feedback",
        body: "Regular practice supports literacy growth. Teachers can use homework, class participation, and written work to track next steps.",
      },
      {
        title: "Route toward exams",
        body: "When a learner is ready, strong heritage-language study can become a pathway toward GCSE Russian and later exam preparation.",
      },
    ],
  },
  "children-online-lessons": {
    eyebrow: "Children's Russian",
    title: "Online Russian Lessons for Children",
    summary:
      "Teacher-led online Russian lessons for children, with structure, speaking practice, homework routines, and clear family communication.",
    summaryTitle: "Online learning with school structure",
    stage: "Children who can learn online with the right level of support and routine",
    focus: "Teacher-led interaction, visual materials, speaking turns, homework, and progress checks",
    nextTitle: "Try the online format before deciding",
    nextBody:
      "The trial lesson lets families see whether the online format, lesson pace, and teacher interaction feel comfortable for the child.",
    sections: [
      {
        title: "Who it is for",
        body: "For families who need Russian lessons from home while still wanting teacher direction, continuity, and a considered placement process.",
      },
      {
        title: "Format fit",
        body: "Online lessons work best when the child can focus with a quiet setup, stable connection, and age-appropriate support nearby when needed.",
      },
      {
        title: "Lesson rhythm",
        body: "Teachers use clear routines, visual materials, speaking turns, short written tasks, and regular checking for understanding.",
      },
      {
        title: "Keeping children engaged",
        body: "Lessons can include conversation, reading, games, creative tasks, and cultural themes so online learning still feels active.",
      },
      {
        title: "Homework and progress",
        body: "Between lessons, families may receive manageable practice tasks. Progress is reviewed through participation, homework, and confidence.",
      },
      {
        title: "Placement after trial",
        body: "After the first lesson, the school can recommend online group study, individual support, or a later move toward GCSE when ready.",
      },
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
      { title: "Current exam context", body: "Exam-board wording, dates, and assessment details are checked against the current specification and exam-year plan." },
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
      { title: "Exam questions", body: "Exam-entry routes and fees are discussed with families and checked for the current exam year." },
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
      { title: "Specification-aware planning", body: "Texts, films, topics, components, and exam-board references are matched to the learner's current route." },
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
      { title: "Exam planning", body: "Assessment routes, centres, dates, and fees are checked for the current exam year." },
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
      { title: "Tailored support", body: "Scope and availability are agreed after the trial conversation, so professional goals stay realistic and focused." },
    ],
  },
};

const ruSeeds: Record<CourseDetailKey, DetailSeed> = {
  "children-primary": {
    eyebrow: "Русский для детей",
    title: "Курс русского для младших школьников",
    summary: "Спокойный маршрут для детей младшего возраста: грамотность, речь и понятный учебный ритм, который легко объяснить семье.",
    summaryTitle: "Поддержка русского в младшем возрасте",
    stage: "Младшие школьники, готовые к регулярным занятиям с учетом возраста",
    focus: "Чтение, письмо, речь, словарь и привычка к домашней практике",
    nextTitle: "Начните с дружелюбного пробного урока",
    nextBody: "Пробный урок помогает понять чтение, письмо, речевую уверенность и темп ребенка перед рекомендацией группы или индивидуального маршрута.",
    sections: [
      {
        title: "Для кого",
        body: "Для семей, которые хотят сделать русский регулярной учебной привычкой, если ребенок слышит язык дома или нуждается в поддержке грамотности.",
      },
      {
        title: "Возраст и уровень",
        body: "При подборе учитываются возраст, концентрация, уверенность, готовность к чтению и то, сколько русского ребенок уже понимает или использует.",
      },
      {
        title: "Фокус обучения",
        body: "Уроки могут включать звуки, письмо, словарь, простую грамматику, беглость чтения, орфографию, короткие тексты и устные ответы.",
      },
      {
        title: "Уверенная речь",
        body: "Дети тренируются отвечать полными фразами, задавать простые вопросы, пересказывать короткие тексты и говорить без спешки.",
      },
      {
        title: "Домашние задания",
        body: "Практика между уроками помогает сохранять ритм. Преподаватель следит за участием, точностью, чтением и уверенностью.",
      },
      {
        title: "Дальнейший путь",
        body: "Маршрут может вести к более самостоятельной работе, уверенности билингва и будущей подготовке к GCSE, когда ребенок будет готов.",
      },
    ],
  },
  "children-beginners": {
    eyebrow: "Русский для детей",
    title: "Русский для начинающих",
    summary: "Мягкое начало для детей, которые почти не знают русский язык: уверенность, произношение, первые слова и понятный вход в обучение.",
    summaryTitle: "Спокойный маршрут для начинающих",
    stage: "Дети, начинающие русский с нуля или возвращающиеся после небольшого опыта",
    focus: "Алфавит, произношение, первые фразы, аудирование, речь и начальная грамотность",
    nextTitle: "Найти подходящую точку старта",
    nextBody: "Пробный урок помогает понять, подойдет ли ребенку начальная группа, индивидуальный урок или постепенный вводный маршрут.",
    sections: [
      {
        title: "Для кого",
        body: "Для детей, которые только знакомятся с русским, слышали язык немного дома или хотят вернуть уверенность после раннего перерыва.",
      },
      {
        title: "Возраст и уровень",
        body: "Младшим начинающим часто нужны наглядность и игровые задания. Старшие могут быстрее переходить к чтению, письму и грамматике.",
      },
      {
        title: "Фокус обучения",
        body: "Начало строится вокруг звуков, букв, полезных фраз на уроке, близкой детям лексики, аудирования и коротких речевых попыток.",
      },
      {
        title: "Сначала уверенность",
        body: "Маршрут помогает ребенку отвечать, повторять, читать небольшие фрагменты и пробовать новые слова без лишнего напряжения.",
      },
      {
        title: "Домашняя практика",
        body: "Короткие задания помогают закреплять язык. Родители могут поддерживать ритм даже без свободного владения русским.",
      },
      {
        title: "Следующие этапы",
        body: "Когда база укрепится, ребенок может двигаться к чтению и письму, группе для билингвов или будущей подготовке к GCSE.",
      },
    ],
  },
  "children-native-speakers": {
    eyebrow: "Русский для детей",
    title: "Русский для билингвальных детей",
    summary: "Структурная грамотность, грамматика, словарь, речь и культура для детей, которые уже понимают или говорят по-русски.",
    summaryTitle: "Для русскоязычных семей",
    stage: "Билингвальные дети, которым нужен более сильный учебный русский",
    focus: "Грамотность, точность, словарный запас, уверенная речь и культурный контекст",
    nextTitle: "Обсудить текущий русский ребенка",
    nextBody: "Короткая пробная беседа помогает понять речь, привычки чтения и письма, а также подходящий уровень класса.",
    sections: [
      {
        title: "Для кого",
        body: "Для детей, которые понимают или говорят по-русски дома, но нуждаются в более сильном чтении, письме, грамматике и учебной лексике.",
      },
      {
        title: "Возраст и уровень",
        body: "При подборе учитываются речь, выносливость чтения, орфография, грамматика и готовность комфортно работать в группе.",
      },
      {
        title: "Фокус обучения",
        body: "Уроки развивают понимание текста, орфографию, грамматику, точность письма, более богатый словарь и выразительную речь.",
      },
      {
        title: "Культура и творчество",
        body: "Рассказы, стихи, обсуждения, традиции и творческие задания связывают русский с культурой, идентичностью и живым общением.",
      },
      {
        title: "Домашние задания",
        body: "Регулярная практика поддерживает грамотность. Участие, домашние работы и письменные задания помогают видеть следующий шаг.",
      },
      {
        title: "Путь к экзаменам",
        body: "Когда ученик готов, сильный билингвальный маршрут может стать основой для подготовки к GCSE Russian.",
      },
    ],
  },
  "children-online-lessons": {
    eyebrow: "Русский для детей",
    title: "Онлайн-уроки русского для детей",
    summary: "Онлайн-уроки русского для детей с преподавателем, структурой, речевой практикой, домашними заданиями и понятной связью с семьей.",
    summaryTitle: "Онлайн-обучение со школьной структурой",
    stage: "Дети, которым подходит онлайн-формат с правильной поддержкой и ритмом",
    focus: "Работа с преподавателем, наглядные материалы, речевые очереди, домашние задания и отслеживание прогресса",
    nextTitle: "Попробовать онлайн-формат до решения",
    nextBody: "Пробный урок показывает семье, комфортны ли ребенку онлайн-формат, темп урока и взаимодействие с преподавателем.",
    sections: [
      {
        title: "Для кого",
        body: "Для семей, которым нужны занятия из дома, но при этом важны направление преподавателя, постоянство и внимательный подбор уровня.",
      },
      {
        title: "Подходит ли формат",
        body: "Онлайн лучше работает, когда у ребенка есть спокойное место, стабильная связь и поддержка рядом, если она нужна по возрасту.",
      },
      {
        title: "Ритм урока",
        body: "Преподаватель использует понятную структуру, наглядные материалы, речевые очереди, короткие письменные задания и проверку понимания.",
      },
      {
        title: "Вовлеченность",
        body: "На уроках могут быть разговор, чтение, игровые элементы, творческие задания и культурные темы, чтобы формат оставался активным.",
      },
      {
        title: "Домашние задания",
        body: "Между уроками семья может получать посильную практику. Прогресс виден по участию, домашним заданиям и уверенности.",
      },
      {
        title: "Подбор после пробы",
        body: "После первого урока школа может рекомендовать онлайн-группу, индивидуальную поддержку или будущий переход к GCSE, когда ученик будет готов.",
      },
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
      { title: "Актуальный экзаменационный контекст", body: "Формулировки, даты и детали assessment сверяются с текущей спецификацией и планом экзаменационного года." },
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
      { title: "Экзамены", body: "Маршруты сдачи и fees обсуждаются с семьей и сверяются на текущий экзаменационный год." },
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
      { title: "Планирование по спецификации", body: "Тексты, фильм, темы и компоненты экзамена подбираются под текущий маршрут ученика." },
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
      { title: "Экзамены", body: "Маршруты, центры, даты и fees сверяются на текущий экзаменационный год." },
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
      { title: "Индивидуальная поддержка", body: "Объем и доступность согласуются после пробной беседы, чтобы профессиональные цели оставались реалистичными." },
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
