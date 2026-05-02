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
      "Focused support for GCSE Russian students who need a clear study route, exam technique, and feedback across all language skills.",
    summaryTitle: "GCSE preparation priorities",
    stage: "Students preparing for GCSE Russian or checking exam readiness",
    focus: "Speaking, writing, reading, listening, vocabulary, grammar, and exam technique",
    nextTitle: "Plan the right GCSE route",
    nextBody:
      "The trial lesson helps clarify the student's current Russian, exam timeline, confidence, and whether group preparation or private support is the better fit.",
    sections: [
      {
        title: "Who it is for",
        body: "For students preparing for GCSE Russian, families deciding when to start, or learners who need a readiness check before choosing a route.",
      },
      {
        title: "Level and timeline fit",
        body: "Placement considers school year, current language level, heritage-language background, writing accuracy, speaking confidence, and the likely exam window.",
      },
      {
        title: "Skills covered",
        body: "Lessons can cover listening, reading, writing, speaking, vocabulary, grammar, translation habits, timed tasks, and exam-style routines.",
      },
      {
        title: "Speaking and writing",
        body: "Students practise fuller spoken answers, topic vocabulary, opinion phrases, paragraph structure, accuracy, and clear correction after mistakes.",
      },
      {
        title: "Homework and feedback",
        body: "Regular homework, review, mock-style practice, and teacher feedback help students and families see what still needs attention.",
      },
      {
        title: "Exam entry planning",
        body: "The school can discuss likely exam-entry routes with families, while final centres, fees, dates, and requirements are checked for the current exam year.",
      },
    ],
  },
  "gcse-curriculum": {
    eyebrow: "GCSE Russian",
    title: "GCSE Russian Curriculum",
    summary:
      "A clear view of how GCSE Russian study can be organised across themes, grammar, language skills, revision, and independent practice.",
    summaryTitle: "Structured GCSE curriculum overview",
    stage: "GCSE students who need a planned route through content and revision",
    focus: "Specification themes, grammar, vocabulary, skills rotation, revision, and exam confidence",
    nextTitle: "Check the curriculum fit",
    nextBody:
      "A trial lesson gives the school a practical way to see what the student already knows and recommend the most useful GCSE study route.",
    sections: [
      {
        title: "Curriculum shape",
        body: "Study can be organised around GCSE themes, vocabulary, grammar, reading, listening, speaking, writing, and planned revision cycles.",
      },
      {
        title: "Grammar and accuracy",
        body: "Students build reliable sentence patterns, tenses, cases, agreement, word order, and correction habits for clearer exam answers.",
      },
      {
        title: "Skill balance",
        body: "The curriculum keeps comprehension, writing accuracy, spoken fluency, translation, and exam-style confidence moving together.",
      },
      {
        title: "Revision rhythm",
        body: "Homework and review tasks help vocabulary and grammar return regularly, so revision does not wait until the final stretch.",
      },
      {
        title: "Mock-style checkpoints",
        body: "Practice tasks can reveal whether the student needs more vocabulary, grammar repair, speaking confidence, or timed writing practice.",
      },
      {
        title: "Current exam context",
        body: "Specification details, exam-board wording, dates, and assessment arrangements should be checked against the current exam-year plan.",
      },
    ],
  },
  "gcse-faq": {
    eyebrow: "GCSE Russian",
    title: "GCSE Russian FAQ",
    summary:
      "Decision support for families comparing GCSE placement, lesson format, homework expectations, exam entry, and next steps.",
    summaryTitle: "GCSE questions families often ask",
    stage: "GCSE decision support",
    focus: "Readiness, placement, lesson format, homework, exams, and next steps",
    nextTitle: "Ask about GCSE preparation",
    nextBody:
      "Families can use the trial request to share the student's timeline, current level, school situation, and questions before choosing a route.",
    sections: [
      {
        title: "When to begin",
        body: "A one-year route may suit students close to readiness, while a longer route gives more time for vocabulary, grammar, confidence, and exam technique.",
      },
      {
        title: "Group or private support",
        body: "Group preparation can suit students ready for a shared pace. Private tuition can help with gaps, confidence, scheduling, or a specific component.",
      },
      {
        title: "What prior level helps",
        body: "The right starting point depends on reading, writing, speaking, grammar, and whether Russian is already used at home or school.",
      },
      {
        title: "Homework expectations",
        body: "GCSE preparation usually needs regular independent practice, vocabulary review, written tasks, and feedback between lessons.",
      },
      {
        title: "Mock-style practice",
        body: "Mock-style tasks can help students understand timing, pressure, and which skills need more attention before final preparation.",
      },
      {
        title: "Exam entry questions",
        body: "Families can discuss school, external centre, or private-candidate routes, then verify centre availability, fees, dates, and rules for the current year.",
      },
    ],
  },
  "alevel-preparation": {
    eyebrow: "A-Level Russian",
    title: "A-Level Russian Exam Preparation",
    summary:
      "Advanced support for A-Level Russian students who need language accuracy, speaking confidence, analytical writing, and exam-focused feedback.",
    summaryTitle: "Advanced exam preparation support",
    stage: "Students preparing for A-Level Russian or checking readiness for the route",
    focus: "Advanced grammar, speaking, essays, cultural study, independent work, and exam technique",
    nextTitle: "Plan the right A-Level route",
    nextBody:
      "A trial lesson helps clarify the student's current level, goals, exam timeline, and whether a full course or targeted support is the better fit.",
    sections: [
      {
        title: "Who it is for",
        body: "For students preparing for A-Level Russian, considering whether they are ready, or needing focused help with a specific exam component.",
      },
      {
        title: "Level and route fit",
        body: "Placement considers prior study, current fluency, grammar control, confidence with longer texts, writing accuracy, and the likely exam window.",
      },
      {
        title: "Language accuracy",
        body: "Lessons can refine cases, aspect, tense choice, complex sentences, register, vocabulary range, and correction habits for advanced work.",
      },
      {
        title: "Speaking confidence",
        body: "Students practise sustained answers, discussion, opinion, evidence, pronunciation, and repair strategies for more natural exam speaking.",
      },
      {
        title: "Essays and analysis",
        body: "Support can include essay planning, paragraph structure, argument, evidence, drafting, redrafting, and teacher feedback on written work.",
      },
      {
        title: "Independent study",
        body: "A-Level preparation relies on regular reading, vocabulary review, drafting, revision, and clear feedback priorities between lessons.",
      },
    ],
  },
  "alevel-curriculum": {
    eyebrow: "A-Level Russian",
    title: "A-Level Russian Curriculum",
    summary:
      "A concise view of advanced Russian study across language precision, cultural material, analytical essays, speaking, and independent research.",
    summaryTitle: "Structured A-Level curriculum shape",
    stage: "A-Level students who need a planned advanced study route",
    focus: "Language precision, cultural study, literature or film, essays, speaking, and research",
    nextTitle: "Review the best A-Level route",
    nextBody:
      "The school can advise whether a student needs a full A-Level course, targeted component support, or a readiness check before committing.",
    sections: [
      {
        title: "Curriculum shape",
        body: "Study can combine advanced language, cultural topics, literature or film, speaking, essay writing, research habits, and revision cycles.",
      },
      {
        title: "Grammar and precision",
        body: "Students work toward more accurate, flexible Russian through advanced grammar, vocabulary choice, sentence control, and register.",
      },
      {
        title: "Cultural study",
        body: "Texts, film, themes, history, society, and cultural discussion are used to build ideas, vocabulary, and analytical confidence.",
      },
      {
        title: "Essay development",
        body: "The curriculum should support argument, structure, evidence, paragraph flow, introductions, conclusions, and revision after feedback.",
      },
      {
        title: "Speaking and research",
        body: "Students practise extended responses, discussion, research explanation, topic vocabulary, and confident handling of follow-up questions.",
      },
      {
        title: "Specification-aware planning",
        body: "Texts, films, topics, components, dates, centres, and exam-board requirements should be checked against the student's current route.",
      },
    ],
  },
  "alevel-faq": {
    eyebrow: "A-Level Russian",
    title: "A-Level Russian FAQ",
    summary:
      "Answers for A-Level Russian readiness, lesson format, independent study, feedback, cultural material, and exam preparation.",
    summaryTitle: "Advanced course questions",
    stage: "A-Level decision support",
    focus: "Readiness, route fit, study routine, feedback, exams, and next steps",
    nextTitle: "Ask about A-Level preparation",
    nextBody:
      "The trial request gives students and families a clear way to share goals, deadlines, school context, and questions before choosing a route.",
    sections: [
      {
        title: "Readiness",
        body: "Readiness depends on prior study, fluency, grammar control, reading confidence, writing accuracy, and willingness to work independently.",
      },
      {
        title: "Course or targeted support",
        body: "Some students need a full route; others need help with essays, speaking, literature, film, research, grammar, or final revision.",
      },
      {
        title: "Independent study",
        body: "A-Level preparation normally needs reading, note-taking, vocabulary review, drafting, research, and revision beyond lesson time.",
      },
      {
        title: "Essays and feedback",
        body: "Teacher feedback can help students improve argument, structure, evidence, style, accuracy, and confidence across drafts.",
      },
      {
        title: "Speaking questions",
        body: "Speaking support can cover topic discussion, pronunciation, extended answers, cultural references, and handling follow-up questions.",
      },
      {
        title: "Exam planning",
        body: "Assessment routes, centres, dates, fees, texts, films, and component requirements should be checked for the current exam year.",
      },
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
    summary: "Фокусированная поддержка для GCSE Russian: понятный учебный маршрут, техника экзамена и обратная связь по всем языковым навыкам.",
    summaryTitle: "Приоритеты подготовки GCSE",
    stage: "Ученики, готовящиеся к GCSE Russian или проверяющие готовность",
    focus: "Говорение, письмо, чтение, аудирование, словарь, грамматика и экзаменационная техника",
    nextTitle: "Спланировать подходящий маршрут GCSE",
    nextBody: "Пробный урок помогает понять текущий русский, сроки экзамена, уверенность ученика и подходящий формат: группу или индивидуальную поддержку.",
    sections: [
      {
        title: "Для кого",
        body: "Для учеников, которые готовятся к GCSE Russian, выбирают время старта или хотят проверить готовность перед выбором маршрута.",
      },
      {
        title: "Уровень и сроки",
        body: "При подборе учитываются школьный год, текущий язык, билингвальный опыт, точность письма, уверенность в речи и предполагаемое окно экзамена.",
      },
      {
        title: "Навыки",
        body: "Уроки могут покрывать аудирование, чтение, письмо, говорение, словарь, грамматику, перевод, задания на время и экзаменационные форматы.",
      },
      {
        title: "Речь и письмо",
        body: "Ученики тренируют более полные устные ответы, тематический словарь, выражение мнения, структуру абзаца, точность и работу над ошибками.",
      },
      {
        title: "Домашние задания",
        body: "Регулярная практика, проверка, пробные задания и обратная связь помогают ученику и семье видеть, что еще требует внимания.",
      },
      {
        title: "План сдачи экзамена",
        body: "Школа может обсудить возможные маршруты сдачи, а финальные центры, сборы, даты и требования нужно сверять на текущий экзаменационный год.",
      },
    ],
  },
  "gcse-curriculum": {
    eyebrow: "GCSE Russian",
    title: "Программа GCSE Russian",
    summary: "Как можно организовать GCSE Russian: темы, грамматика, языковые навыки, повторение и самостоятельная практика.",
    summaryTitle: "Структура программы GCSE",
    stage: "Ученики GCSE, которым нужен понятный план по темам и повторению",
    focus: "Темы спецификации, грамматика, словарь, чередование навыков, повторение и экзаменационная уверенность",
    nextTitle: "Проверить подходящий учебный маршрут",
    nextBody: "Пробный урок помогает увидеть, что ученик уже умеет, и рекомендовать самый полезный формат подготовки GCSE.",
    sections: [
      {
        title: "Форма программы",
        body: "Обучение может строиться вокруг тем GCSE, словаря, грамматики, чтения, аудирования, говорения, письма и циклов повторения.",
      },
      {
        title: "Грамматика и точность",
        body: "Ученики укрепляют модели предложений, времена, падежи, согласование, порядок слов и привычку исправлять ошибки.",
      },
      {
        title: "Баланс навыков",
        body: "Программа удерживает вместе понимание текста и речи, точность письма, устную беглость, перевод и экзаменационную уверенность.",
      },
      {
        title: "Ритм повторения",
        body: "Домашние задания и проверка помогают регулярно возвращать словарь и грамматику, не откладывая повторение на последний этап.",
      },
      {
        title: "Пробные точки",
        body: "Задания в экзаменационном стиле показывают, нужны ли ученику словарь, грамматический ремонт, устная уверенность или письмо на время.",
      },
      {
        title: "Актуальный экзаменационный контекст",
        body: "Детали спецификации, формулировки комиссии, даты и assessment arrangements нужно сверять с планом текущего экзаменационного года.",
      },
    ],
  },
  "gcse-faq": {
    eyebrow: "GCSE Russian",
    title: "Вопросы о GCSE Russian",
    summary: "Помощь семьям с вопросами о готовности, формате уроков, домашних заданиях, сдаче экзамена и следующих шагах.",
    summaryTitle: "Частые вопросы о GCSE",
    stage: "Поддержка выбора GCSE",
    focus: "Готовность, подбор, формат уроков, домашние задания, экзамены и следующие шаги",
    nextTitle: "Задать вопрос о GCSE",
    nextBody: "В заявке можно указать сроки, текущий уровень, школьную ситуацию и главные вопросы перед выбором маршрута.",
    sections: [
      {
        title: "Когда начинать",
        body: "Годовой маршрут может подойти ученикам, близким к готовности; более длинный путь дает время на словарь, грамматику и уверенность.",
      },
      {
        title: "Группа или индивидуально",
        body: "Группа подходит ученикам, готовым к общему темпу. Индивидуальные занятия помогают с пробелами, уверенностью, расписанием или отдельным компонентом.",
      },
      {
        title: "Какой уровень нужен",
        body: "Старт зависит от чтения, письма, речи, грамматики и того, используется ли русский дома или в школе.",
      },
      {
        title: "Домашние задания",
        body: "Подготовка к GCSE обычно требует регулярной самостоятельной практики, повторения словаря, письменных заданий и обратной связи.",
      },
      {
        title: "Пробная практика",
        body: "Задания в формате экзамена помогают понять тайминг, давление и навыки, которым нужно больше внимания перед финальной подготовкой.",
      },
      {
        title: "Вопросы о сдаче",
        body: "Семья может обсудить школу, внешний центр или маршрут private candidate, а затем проверить доступность, сборы, даты и правила текущего года.",
      },
    ],
  },
  "alevel-preparation": {
    eyebrow: "A-Level Russian",
    title: "Подготовка к A-Level Russian",
    summary: "Продвинутая поддержка для A-Level Russian: точность языка, устная уверенность, аналитическое письмо и экзаменационная обратная связь.",
    summaryTitle: "Продвинутая экзаменационная подготовка",
    stage: "Ученики, готовящиеся к A-Level Russian или проверяющие готовность",
    focus: "Продвинутая грамматика, речь, эссе, культурные темы, самостоятельная работа и техника экзамена",
    nextTitle: "Спланировать подходящий маршрут A-Level",
    nextBody: "Пробный урок помогает понять текущий уровень, цели, сроки экзамена и подходящий формат: полный курс или точечную поддержку.",
    sections: [
      {
        title: "Для кого",
        body: "Для учеников, которые готовятся к A-Level Russian, проверяют готовность или нуждаются в помощи с отдельным компонентом экзамена.",
      },
      {
        title: "Уровень и маршрут",
        body: "При подборе учитываются предыдущая подготовка, беглость, грамматика, работа с длинными текстами, точность письма и сроки экзамена.",
      },
      {
        title: "Точность языка",
        body: "Уроки могут укреплять падежи, вид, времена, сложные предложения, регистр, словарный диапазон и привычку исправлять ошибки.",
      },
      {
        title: "Уверенная речь",
        body: "Ученики тренируют развернутые ответы, обсуждение, мнение, аргументы, произношение и способы исправиться в устной части.",
      },
      {
        title: "Эссе и анализ",
        body: "Поддержка может включать планирование эссе, структуру абзацев, аргумент, доказательства, черновики, доработку и комментарии преподавателя.",
      },
      {
        title: "Самостоятельная работа",
        body: "Подготовка к A-Level требует регулярного чтения, повторения словаря, черновиков, ревизии и понятных приоритетов между уроками.",
      },
    ],
  },
  "alevel-curriculum": {
    eyebrow: "A-Level Russian",
    title: "Программа A-Level Russian",
    summary: "Продвинутый русский: точность языка, культурный материал, аналитические эссе, устная часть и самостоятельное исследование.",
    summaryTitle: "Структура программы A-Level",
    stage: "Ученики A-Level, которым нужен продуманный продвинутый маршрут",
    focus: "Точность языка, культурные темы, литература или фильм, эссе, речь и исследование",
    nextTitle: "Проверить лучший маршрут A-Level",
    nextBody: "Школа подскажет, нужен ли полный курс A-Level, поддержка отдельного компонента или проверка готовности перед стартом.",
    sections: [
      {
        title: "Форма программы",
        body: "Обучение может соединять продвинутый язык, культурные темы, литературу или фильм, речь, эссе, исследовательские навыки и повторение.",
      },
      {
        title: "Грамматика и точность",
        body: "Ученики развивают более точный и гибкий русский через грамматику, выбор слов, контроль предложения и подходящий регистр.",
      },
      {
        title: "Культурное изучение",
        body: "Тексты, фильм, темы, история, общество и обсуждение культуры помогают строить идеи, словарь и аналитическую уверенность.",
      },
      {
        title: "Развитие эссе",
        body: "Программа должна поддерживать аргумент, структуру, доказательства, связность абзацев, вступления, выводы и доработку после обратной связи.",
      },
      {
        title: "Речь и исследование",
        body: "Ученики тренируют развернутые ответы, обсуждение, объяснение исследования, тематический словарь и уверенные ответы на уточняющие вопросы.",
      },
      {
        title: "Планирование по спецификации",
        body: "Тексты, фильм, темы, компоненты, даты, центры и требования комиссии нужно сверять с текущим маршрутом ученика.",
      },
    ],
  },
  "alevel-faq": {
    eyebrow: "A-Level Russian",
    title: "Вопросы об A-Level Russian",
    summary: "Ответы о готовности к A-Level Russian, формате уроков, самостоятельной работе, обратной связи, культурном материале и экзаменах.",
    summaryTitle: "Вопросы о продвинутом курсе",
    stage: "Поддержка выбора A-Level",
    focus: "Готовность, подходящий маршрут, учебный ритм, обратная связь, экзамены и следующие шаги",
    nextTitle: "Задать вопрос об A-Level",
    nextBody: "Заявка помогает заранее обозначить цели, сроки, школьную ситуацию и вопросы перед выбором маршрута.",
    sections: [
      {
        title: "Готовность",
        body: "Готовность зависит от предыдущей подготовки, беглости, контроля грамматики, уверенного чтения, точности письма и самостоятельности.",
      },
      {
        title: "Курс или точечная поддержка",
        body: "Одним ученикам нужен полный маршрут, другим - помощь с эссе, речью, литературой, фильмом, исследованием, грамматикой или повторением.",
      },
      {
        title: "Самостоятельная работа",
        body: "Подготовка к A-Level обычно требует чтения, конспектов, повторения словаря, черновиков, исследования и ревизии вне урока.",
      },
      {
        title: "Эссе и обратная связь",
        body: "Комментарии преподавателя помогают улучшать аргумент, структуру, доказательства, стиль, точность и уверенность от черновика к черновику.",
      },
      {
        title: "Вопросы устной части",
        body: "Поддержка речи может включать обсуждение тем, произношение, развернутые ответы, культурные ссылки и ответы на уточняющие вопросы.",
      },
      {
        title: "Экзамены",
        body: "Маршруты сдачи, центры, даты, сборы, тексты, фильм и требования компонентов нужно проверять на текущий экзаменационный год.",
      },
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
