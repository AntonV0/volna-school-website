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
  format?: string;
  fee?: string;
  primaryCta?: string;
  nextTitle: string;
  nextBody: string;
  sections: DetailSection[];
};

const enCta = {
  primary: "Start Registration",
  secondary: "Course summary",
  nextEyebrow: "Next step",
  stageLabel: "Learner stage",
  focusLabel: "Focus",
  formatLabel: "Lesson format",
  feeLabel: "Typical fee",
};

const ruCta = {
  primary: "Начать запись",
  secondary: "Кратко о курсе",
  nextEyebrow: "Следующий шаг",
  stageLabel: "Этап обучения",
  focusLabel: "Фокус",
  formatLabel: "Формат занятий",
  feeLabel: "Стоимость",
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
      primaryCtaLabel: seed.primaryCta ?? cta.primary,
      secondaryCtaLabel: cta.secondary,
    },
    summary: {
      eyebrow: cta.secondary,
      title: seed.summaryTitle,
      items: [
        { label: cta.stageLabel, value: seed.stage },
        { label: cta.focusLabel, value: seed.focus },
        ...(seed.format ? [{ label: cta.formatLabel, value: seed.format }] : []),
        ...(seed.fee ? [{ label: cta.feeLabel, value: seed.fee }] : []),
      ],
    },
    sections: seed.sections,
    nextSteps: {
      eyebrow: cta.nextEyebrow,
      title: seed.nextTitle,
      body: seed.nextBody,
      ctaLabel: seed.primaryCta ?? cta.primary,
    },
  };
}

const enSeeds: Record<CourseDetailKey, DetailSeed> = {
  "children-bilingual": {
    eyebrow: "Online Russian for children",
    title: "Russian Classes for Bilingual Children",
    summary:
      "Small online groups for children who speak or understand Russian at home, developing confident literacy, accurate expression, and a lasting connection with the language.",
    summaryTitle: "Bilingual group classes at a glance",
    stage: "Children who already understand or speak Russian at home and are ready for group learning",
    focus: "Reading, writing, grammar, vocabulary, speaking, and cultural confidence",
    format: "Small online groups with regular weekly lessons and homework",
    fee: "£15 per hour",
    primaryCta: "Register for a free trial lesson",
    nextTitle: "Find the right bilingual class",
    nextBody:
      "The free trial helps the school understand your child's spoken Russian, literacy, confidence, and learning pace before recommending the most suitable group.",
    sections: [
      {
        title: "Who it is for",
        body: "For children who understand or speak Russian at home and need stronger reading, writing, grammar, vocabulary, and confident expression.",
      },
      {
        title: "Placement by level",
        body: "Placement considers age, spoken fluency, reading stamina, spelling, writing confidence, and whether the child can work comfortably at the pace of a group.",
      },
      {
        title: "A structured curriculum",
        body: "Classes develop reading comprehension, spelling, grammar, accurate writing, richer vocabulary, and more precise spoken Russian through an age-aware curriculum.",
      },
      {
        title: "Culture and creativity",
        body: "Stories, poems, discussion, traditions, and creative tasks help children connect Russian with culture, identity, and communication beyond the home.",
      },
      {
        title: "Homework and feedback",
        body: "Regular homework reinforces literacy and vocabulary. Teachers use participation, written work, and ongoing feedback to identify the next learning step.",
      },
      {
        title: "A pathway toward GCSE",
        body: "As fluency and literacy grow, learners can progress through the children's programme and build strong foundations for future GCSE Russian study.",
      },
    ],
  },
  "children-rfl": {
    eyebrow: "Online Russian for children",
    title: "Russian as a Foreign Language Classes",
    summary:
      "Age-appropriate online RFL classes for children with little or no previous Russian, building a strong foundation in speaking, reading, and writing.",
    summaryTitle: "A structured beginner route",
    stage: "Children aged 4–16 who are beginning Russian or returning after limited previous exposure",
    focus: "Alphabet, pronunciation, first phrases, listening, speaking, and early literacy",
    format: "Separate online group routes for younger learners aged 4–8 and older learners aged 9–16",
    fee: "£15 per hour",
    primaryCta: "Register for a free trial lesson",
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
        body: "Younger beginners learn through visual, playful tasks, while older beginners can move more quickly into reading, writing, grammar, and longer speaking turns.",
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
  "children-early-years": {
    eyebrow: "Early Years Russian",
    title: "Online Russian Classes for Early Years",
    summary:
      "Playful small-group Russian lessons for children aged 3–7, using songs, stories, games, and guided conversation to build confidence in speaking and understanding.",
    summaryTitle: "A playful first step into Russian",
    stage: "Children aged 3–7, including bilingual children and early beginners",
    focus: "Speaking, listening, useful vocabulary, stories, songs, movement, and early literacy readiness",
    format: "Small online groups with short, varied activities and age-appropriate routines",
    fee: "£15 per hour",
    primaryCta: "Register for a free trial lesson",
    nextTitle: "Let your child try the Early Years format",
    nextBody:
      "The free trial gives your child a gentle introduction to the teacher and online routine while helping the school recommend the most suitable starting group.",
    sections: [
      {
        title: "Who it is for",
        body: "For children aged 3–7 who are beginning to use Russian, hear it at home, or need a positive and playful setting in which to speak more confidently.",
      },
      {
        title: "Learning through play",
        body: "Songs, stories, movement, pictures, simple games, and creative activities keep young children actively involved while new language becomes familiar.",
      },
      {
        title: "Speaking and understanding",
        body: "Children practise listening, responding, naming familiar objects, using short phrases, and joining guided conversations without being rushed.",
      },
      {
        title: "Preparing for literacy",
        body: "Age-appropriate sound awareness, rhymes, stories, and fine-motor activities can prepare children for later reading and writing without formal pressure too early.",
      },
      {
        title: "A comfortable online routine",
        body: "Short activity changes and clear teacher cues help sustain attention. A parent may stay nearby when a younger learner needs practical support.",
      },
      {
        title: "The next class stage",
        body: "When ready, children can move into an age-appropriate bilingual or beginner route with more structured speaking, reading, writing, and homework.",
      },
    ],
  },
  "children-private-tuition": {
    eyebrow: "One-to-one Russian",
    title: "Private Russian Tuition for Children",
    summary:
      "Personalised online Russian lessons for children who need individual attention, a flexible timetable, or focused support with particular language goals.",
    summaryTitle: "One-to-one tuition at a glance",
    stage: "Children of any level who benefit from a personal pace, targeted goals, or flexible scheduling",
    focus: "A tailored balance of speaking, reading, writing, grammar, confidence, and school or exam preparation",
    format: "Private online lessons with 30, 60, or 90-minute options arranged around the learner",
    fee: "£35 per hour, with shorter and longer lessons available",
    primaryCta: "Register for a free trial lesson",
    nextTitle: "Plan a personalised first lesson",
    nextBody:
      "The free trial helps the teacher understand your child's level, confidence, schedule, and priorities before recommending a lesson length and starting plan.",
    sections: [
      {
        title: "Who it is for",
        body: "For children who need more individual attention, catch-up support, a quieter learning setting, specific language goals, or a timetable that does not fit a group.",
      },
      {
        title: "A personal learning plan",
        body: "The teacher can adjust the pace, materials, level of challenge, and balance of skills as soon as the learner needs more repetition or more challenge.",
      },
      {
        title: "Flexible lesson lengths",
        body: "Families can discuss 30, 60, or 90-minute lessons and agree a schedule that suits the child's age, concentration, goals, and weekly routine.",
      },
      {
        title: "Focused language goals",
        body: "Lessons can target conversation, literacy, grammar gaps, handwriting, school projects, confidence, or preparation for a future group or exam route.",
      },
      {
        title: "Homework and feedback",
        body: "Practice can be tailored to the learner's available time. Direct feedback helps families understand progress and what to reinforce between lessons.",
      },
      {
        title: "A route into the next stage",
        body: "Private tuition can remain the main format or help a child prepare for a suitable group, strengthen foundations, or move toward GCSE Russian when ready.",
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
    eyebrow: "A Level Russian",
    title: "A Level Russian Exam Preparation",
    summary:
      "Advanced support for A Level Russian students who need language accuracy, speaking confidence, analytical writing, and exam-focused feedback.",
    summaryTitle: "Advanced exam preparation support",
    stage: "Students preparing for A Level Russian or checking readiness for the route",
    focus: "Advanced grammar, speaking, essays, cultural study, independent work, and exam technique",
    nextTitle: "Plan the right A Level route",
    nextBody:
      "A trial lesson helps clarify the student's current level, goals, exam timeline, and whether a full course or targeted support is the better fit.",
    sections: [
      {
        title: "Who it is for",
        body: "For students preparing for A Level Russian, considering whether they are ready, or needing focused help with a specific exam component.",
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
        body: "A Level preparation relies on regular reading, vocabulary review, drafting, revision, and clear feedback priorities between lessons.",
      },
    ],
  },
  "alevel-curriculum": {
    eyebrow: "A Level Russian",
    title: "A Level Russian Curriculum",
    summary:
      "A concise view of advanced Russian study across language precision, cultural material, analytical essays, speaking, and independent research.",
    summaryTitle: "Structured A Level curriculum shape",
    stage: "A Level students who need a planned advanced study route",
    focus: "Language precision, cultural study, literature or film, essays, speaking, and research",
    nextTitle: "Review the best A Level route",
    nextBody:
      "The school can advise whether a student needs a full A Level course, targeted component support, or a readiness check before committing.",
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
    eyebrow: "A Level Russian",
    title: "A Level Russian FAQ",
    summary:
      "Answers for A Level Russian readiness, lesson format, independent study, feedback, cultural material, and exam preparation.",
    summaryTitle: "Advanced course questions",
    stage: "A Level decision support",
    focus: "Readiness, route fit, study routine, feedback, exams, and next steps",
    nextTitle: "Ask about A Level preparation",
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
        body: "A Level preparation normally needs reading, note-taking, vocabulary review, drafting, research, and revision beyond lesson time.",
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
      "A practical route for adults beginning Russian or returning after a long break, with clear foundations and realistic next steps.",
    summaryTitle: "Clear foundations for adult learners",
    stage: "Beginner or returning adults who want structured support",
    focus: "Pronunciation, alphabet, everyday phrases, reading basics, grammar foundations, and confidence",
    nextTitle: "Try a first adult placement lesson",
    nextBody:
      "A trial lesson helps the school understand your previous experience, goals, confidence, and whether foundations, conversation, or private study is the right next step.",
    sections: [
      {
        title: "Who it is for",
        body: "For adults starting Russian from the beginning, returning after earlier study, or wanting a calmer reset before speaking more actively.",
      },
      {
        title: "Starting level",
        body: "Placement considers alphabet knowledge, pronunciation, listening comfort, reading confidence, grammar memory, and personal goals.",
      },
      {
        title: "Learning focus",
        body: "Lessons can cover sounds, letters, reading basics, common phrases, everyday vocabulary, simple grammar, listening, and short speaking tasks.",
      },
      {
        title: "Confidence and pace",
        body: "Adult beginners often need time to connect pronunciation, spelling, and grammar. The route keeps expectations practical and paced.",
      },
      {
        title: "Practice between lessons",
        body: "Short review tasks, vocabulary practice, reading aloud, and small writing exercises help foundations settle without overload.",
      },
      {
        title: "Flexible progression",
        body: "Learners can move toward conversation, travel, culture, family communication, reading goals, or tailored private tuition.",
      },
    ],
  },
  "adult-conversation": {
    eyebrow: "Adult Russian",
    title: "Russian Conversation Lessons",
    summary:
      "Speaking-focused lessons for adults who want more confidence in practical, cultural, travel, family, or everyday communication settings.",
    summaryTitle: "Speaking confidence for adults",
    stage: "Adults with some Russian who want to speak more naturally",
    focus: "Fluency, listening, vocabulary, pronunciation, correction, and real-life situations",
    nextTitle: "Talk through your goals",
    nextBody:
      "The trial lesson checks your current level, confidence, conversation goals, and whether speaking lessons should be broad or topic-specific.",
    sections: [
      {
        title: "Who it is for",
        body: "For adults who know some Russian but hesitate when speaking, lose words under pressure, or want more natural conversation practice.",
      },
      {
        title: "Level fit",
        body: "Placement looks at listening comfort, vocabulary range, pronunciation, grammar control, and how much support is needed during conversation.",
      },
      {
        title: "Lesson focus",
        body: "Lessons can use topic-based discussion, useful phrases, pronunciation work, listening tasks, correction, and follow-up vocabulary.",
      },
      {
        title: "Fluency and confidence",
        body: "Learners practise longer answers, asking questions, repairing mistakes, reacting naturally, and speaking without translating every word.",
      },
      {
        title: "Personal topics",
        body: "Conversation can be shaped around travel, family, culture, reading, current events, heritage connection, or everyday situations.",
      },
      {
        title: "Practice rhythm",
        body: "Small review tasks, vocabulary notes, listening links, or short preparation prompts can keep speaking goals moving between lessons.",
      },
    ],
  },
  "adult-business-russian": {
    eyebrow: "Adult Russian",
    title: "Business Russian Lessons",
    summary:
      "Tailored Russian support for professional communication, workplace confidence, business-related travel, or focused work scenarios.",
    summaryTitle: "Professional Russian support",
    stage: "Adult learners with professional or business-adjacent goals",
    focus: "Workplace vocabulary, meetings, calls, correspondence, cultural context, and practical confidence",
    nextTitle: "Discuss professional goals",
    nextBody:
      "A trial lesson helps define the professional context, current level, realistic scope, and whether business Russian should be separate or part of wider private tuition.",
    sections: [
      {
        title: "Who it is for",
        body: "For adults who need Russian for work, business travel, professional relationships, meetings, correspondence, or sector-specific confidence.",
      },
      {
        title: "Goal and level fit",
        body: "Placement considers current Russian, urgency, workplace context, vocabulary needs, speaking confidence, and whether goals are narrow or broad.",
      },
      {
        title: "Learning focus",
        body: "Lessons can cover introductions, calls, meetings, emails, presentation language, professional vocabulary, cultural context, and rehearsal.",
      },
      {
        title: "Practical rehearsal",
        body: "Learners can practise realistic conversations, role-play likely situations, refine phrasing, and prepare language for specific tasks.",
      },
      {
        title: "Materials and privacy",
        body: "Any work-related examples should stay appropriate for study and avoid sharing confidential client, employer, or commercial information.",
      },
      {
        title: "Tailored support",
        body: "Scope and availability are agreed after the trial conversation so professional goals remain realistic, focused, and teachable.",
      },
    ],
  },
};

const ruSeeds: Record<CourseDetailKey, DetailSeed> = {
  "children-bilingual": {
    eyebrow: "Русский онлайн для детей",
    title: "Занятия для билингвальных детей",
    summary: "Небольшие онлайн-группы для детей, которые понимают или говорят по-русски дома и хотят развивать грамотность, точность речи и уверенное владение языком.",
    summaryTitle: "Коротко о группах для билингвов",
    stage: "Дети, которые понимают или говорят по-русски дома и готовы заниматься в группе",
    focus: "Чтение, письмо, грамматика, словарный запас, речь и культурный контекст",
    format: "Небольшие онлайн-группы, регулярные занятия и домашние задания",
    fee: "£15 в час",
    primaryCta: "Записаться на бесплатный урок",
    nextTitle: "Найти подходящую группу для билингва",
    nextBody: "Бесплатный пробный урок помогает оценить устную речь, грамотность, уверенность и темп ребенка перед рекомендацией подходящей группы.",
    sections: [
      {
        title: "Для кого",
        body: "Для детей, которые понимают или говорят по-русски дома, но хотят увереннее читать, писать, использовать грамматику и расширять словарный запас.",
      },
      {
        title: "Подбор по уровню",
        body: "При подборе учитываются возраст, устная речь, чтение, орфография, письменные навыки и готовность работать в темпе группы.",
      },
      {
        title: "Структурная программа",
        body: "Занятия развивают понимание текста, орфографию, грамматику, точность письма, богатый словарь и более выразительную русскую речь.",
      },
      {
        title: "Культура и творчество",
        body: "Рассказы, стихи, обсуждения, традиции и творческие задания помогают связать русский язык с культурой, семьей и живым общением.",
      },
      {
        title: "Домашние задания и обратная связь",
        body: "Регулярная практика закрепляет грамотность и лексику, а письменные работы и обратная связь показывают следующий учебный шаг.",
      },
      {
        title: "Путь к GCSE",
        body: "По мере роста грамотности ребенок может двигаться по программе детских классов и создавать прочную базу для будущей подготовки к GCSE Russian.",
      },
    ],
  },
  "children-rfl": {
    eyebrow: "Русский онлайн для детей",
    title: "Русский как иностранный для детей",
    summary: "Онлайн-занятия РКИ для детей, которые почти не знают русский язык и хотят создать прочную базу в речи, чтении и письме.",
    summaryTitle: "Структурный маршрут для начинающих",
    stage: "Дети 4–16 лет, начинающие русский с нуля или возвращающиеся после небольшого опыта",
    focus: "Алфавит, произношение, первые фразы, аудирование, речь и начальная грамотность",
    format: "Отдельные онлайн-группы для детей 4–8 лет и учеников 9–16 лет",
    fee: "£15 в час",
    primaryCta: "Записаться на бесплатный урок",
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
  "children-early-years": {
    eyebrow: "Русский для дошкольников",
    title: "Онлайн-занятия русского для детей 3–7 лет",
    summary: "Игровые занятия в небольших группах с песнями, историями, играми и разговорной практикой для уверенного понимания и речи.",
    summaryTitle: "Мягкое и увлекательное начало",
    stage: "Дети 3–7 лет, включая билингвов и начинающих",
    focus: "Речь, аудирование, полезная лексика, истории, песни, движение и подготовка к грамотности",
    format: "Небольшие онлайн-группы с короткими заданиями и понятным ритмом",
    fee: "£15 в час",
    primaryCta: "Записаться на бесплатный урок",
    nextTitle: "Попробовать формат Early Years",
    nextBody: "Бесплатный пробный урок знакомит ребенка с преподавателем и помогает школе рекомендовать подходящую стартовую группу.",
    sections: [
      {
        title: "Для кого",
        body: "Для детей 3–7 лет, которые начинают использовать русский, слышат его дома или хотят увереннее говорить в доброжелательной игровой среде.",
      },
      {
        title: "Обучение через игру",
        body: "Песни, истории, движение, картинки, игры и творческие задания помогают детям активно участвовать и запоминать новую лексику.",
      },
      {
        title: "Речь и понимание",
        body: "Дети учатся слушать, отвечать, называть знакомые предметы, использовать короткие фразы и участвовать в беседе без спешки.",
      },
      {
        title: "Подготовка к чтению и письму",
        body: "Звуковые игры, рифмы, истории и задания для мелкой моторики готовят ребенка к дальнейшей грамотности без раннего учебного давления.",
      },
      {
        title: "Комфортный онлайн-ритм",
        body: "Частая смена коротких заданий и понятные подсказки преподавателя поддерживают внимание. Младшим детям при необходимости помогает взрослый рядом.",
      },
      {
        title: "Следующий этап",
        body: "Когда ребенок готов, он может перейти в подходящую билингвальную группу или группу РКИ с более структурной речью, чтением и письмом.",
      },
    ],
  },
  "children-private-tuition": {
    eyebrow: "Индивидуальный русский",
    title: "Индивидуальные занятия русского для детей",
    summary: "Персональные онлайн-уроки для детей, которым нужен индивидуальный темп, гибкое расписание или поддержка по конкретным языковым целям.",
    summaryTitle: "Коротко об индивидуальных занятиях",
    stage: "Дети любого уровня, которым подходит персональный темп, конкретные цели или гибкое расписание",
    focus: "Индивидуальный баланс речи, чтения, письма, грамматики, уверенности и подготовки к школе или экзаменам",
    format: "Онлайн-уроки по 30, 60 или 90 минут по договоренности",
    fee: "£35 в час; доступны более короткие и длинные уроки",
    primaryCta: "Записаться на бесплатный урок",
    nextTitle: "Спланировать персональный первый урок",
    nextBody: "Бесплатный пробный урок помогает преподавателю понять уровень, уверенность, расписание и цели ребенка перед выбором длительности и плана занятий.",
    sections: [
      {
        title: "Для кого",
        body: "Для детей, которым нужны индивидуальное внимание, поддержка по пробелам, спокойная обстановка, конкретные цели или расписание вне групповых занятий.",
      },
      {
        title: "Персональный план",
        body: "Преподаватель быстро меняет темп, материалы, сложность и баланс навыков, когда ученику требуется повторение или дополнительный вызов.",
      },
      {
        title: "Гибкая длительность",
        body: "Семья может обсудить уроки по 30, 60 или 90 минут и выбрать расписание с учетом возраста, концентрации и целей ребенка.",
      },
      {
        title: "Конкретные учебные цели",
        body: "Занятия могут развивать разговорную речь, грамотность, грамматику, письмо, уверенность, школьные проекты или подготовку к будущей группе и экзаменам.",
      },
      {
        title: "Домашние задания и обратная связь",
        body: "Практика подбирается с учетом времени ученика, а прямая обратная связь помогает семье понимать прогресс и следующие задачи.",
      },
      {
        title: "Переход к следующему этапу",
        body: "Индивидуальные занятия могут оставаться основным форматом или подготовить ребенка к группе, укрепить базу и привести к GCSE Russian, когда он будет готов.",
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
    eyebrow: "A Level Russian",
    title: "Подготовка к A Level Russian",
    summary: "Продвинутая поддержка для A Level Russian: точность языка, устная уверенность, аналитическое письмо и экзаменационная обратная связь.",
    summaryTitle: "Продвинутая экзаменационная подготовка",
    stage: "Ученики, готовящиеся к A Level Russian или проверяющие готовность",
    focus: "Продвинутая грамматика, речь, эссе, культурные темы, самостоятельная работа и техника экзамена",
    nextTitle: "Спланировать подходящий маршрут A Level",
    nextBody: "Пробный урок помогает понять текущий уровень, цели, сроки экзамена и подходящий формат: полный курс или точечную поддержку.",
    sections: [
      {
        title: "Для кого",
        body: "Для учеников, которые готовятся к A Level Russian, проверяют готовность или нуждаются в помощи с отдельным компонентом экзамена.",
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
        body: "Подготовка к A Level требует регулярного чтения, повторения словаря, черновиков, ревизии и понятных приоритетов между уроками.",
      },
    ],
  },
  "alevel-curriculum": {
    eyebrow: "A Level Russian",
    title: "Программа A Level Russian",
    summary: "Продвинутый русский: точность языка, культурный материал, аналитические эссе, устная часть и самостоятельное исследование.",
    summaryTitle: "Структура программы A Level",
    stage: "Ученики A Level, которым нужен продуманный продвинутый маршрут",
    focus: "Точность языка, культурные темы, литература или фильм, эссе, речь и исследование",
    nextTitle: "Проверить лучший маршрут A Level",
    nextBody: "Школа подскажет, нужен ли полный курс A Level, поддержка отдельного компонента или проверка готовности перед стартом.",
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
    eyebrow: "A Level Russian",
    title: "Вопросы об A Level Russian",
    summary: "Ответы о готовности к A Level Russian, формате уроков, самостоятельной работе, обратной связи, культурном материале и экзаменах.",
    summaryTitle: "Вопросы о продвинутом курсе",
    stage: "Поддержка выбора A Level",
    focus: "Готовность, подходящий маршрут, учебный ритм, обратная связь, экзамены и следующие шаги",
    nextTitle: "Задать вопрос об A Level",
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
        body: "Подготовка к A Level обычно требует чтения, конспектов, повторения словаря, черновиков, исследования и ревизии вне урока.",
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
    summary: "Практичный маршрут для взрослых, начинающих русский или возвращающихся после перерыва: понятная база и реалистичные следующие шаги.",
    summaryTitle: "Понятная база для взрослых",
    stage: "Начинающие или возвращающиеся взрослые, которым нужна структура",
    focus: "Произношение, алфавит, повседневные фразы, чтение, базовая грамматика и уверенность",
    nextTitle: "Попробовать первый взрослый пробный урок",
    nextBody: "Пробный урок помогает понять предыдущий опыт, цели, уверенность и следующий шаг: основы, разговор или индивидуальный маршрут.",
    sections: [
      {
        title: "Для кого",
        body: "Для взрослых, которые начинают русский с нуля, возвращаются после прежнего опыта или хотят спокойно восстановить базу перед разговором.",
      },
      {
        title: "Стартовый уровень",
        body: "При подборе учитываются знание алфавита, произношение, понимание на слух, чтение, память грамматики и личные цели.",
      },
      {
        title: "Фокус обучения",
        body: "Уроки могут включать звуки, буквы, основы чтения, полезные фразы, повседневную лексику, простую грамматику, аудирование и короткую речь.",
      },
      {
        title: "Уверенность и темп",
        body: "Взрослым начинающим часто нужно время связать произношение, написание и грамматику. Темп остается практичным и спокойным.",
      },
      {
        title: "Практика между уроками",
        body: "Короткое повторение, словарь, чтение вслух и небольшие письменные задания помогают базе закрепляться без перегруза.",
      },
      {
        title: "Дальнейший путь",
        body: "Ученик может двигаться к разговору, путешествиям, культуре, семейному общению, чтению или индивидуальным целям.",
      },
    ],
  },
  "adult-conversation": {
    eyebrow: "Русский для взрослых",
    title: "Разговорные уроки русского",
    summary: "Уроки для взрослых, которые хотят увереннее говорить в практичных, культурных, семейных или повседневных ситуациях.",
    summaryTitle: "Разговорная уверенность",
    stage: "Взрослые, которые немного знают русский и хотят говорить естественнее",
    focus: "Беглость, аудирование, словарь, произношение, коррекция и реальные ситуации",
    nextTitle: "Обсудить разговорные цели",
    nextBody: "Пробный урок помогает проверить текущий уровень, уверенность, разговорные цели и выбрать общий или тематический фокус.",
    sections: [
      {
        title: "Для кого",
        body: "Для взрослых, которые уже немного знают русский, но стесняются говорить, теряют слова или хотят больше живой практики.",
      },
      {
        title: "Подбор уровня",
        body: "При подборе учитываются понимание на слух, словарный запас, произношение, грамматика и нужный объем поддержки в разговоре.",
      },
      {
        title: "Фокус урока",
        body: "Уроки могут строиться вокруг тем, полезных фраз, произношения, аудирования, коррекции и словаря после разговора.",
      },
      {
        title: "Беглость и уверенность",
        body: "Ученик тренирует более длинные ответы, вопросы, исправление ошибок, естественную реакцию и речь без постоянного перевода.",
      },
      {
        title: "Личные темы",
        body: "Разговор можно связать с путешествиями, семьей, культурой, чтением, текущими событиями, наследием или бытовыми ситуациями.",
      },
      {
        title: "Ритм практики",
        body: "Небольшие задания, словарные заметки, аудирование или короткие темы для подготовки помогают двигаться между уроками.",
      },
    ],
  },
  "adult-business-russian": {
    eyebrow: "Русский для взрослых",
    title: "Деловой русский",
    summary: "Индивидуальная поддержка для профессионального общения, рабочих задач, деловых поездок или конкретных рабочих ситуаций.",
    summaryTitle: "Профессиональный русский",
    stage: "Взрослые с профессиональными или деловыми целями",
    focus: "Рабочая лексика, встречи, звонки, переписка, культурный контекст и практическая уверенность",
    nextTitle: "Обсудить профессиональные цели",
    nextBody: "Пробный урок помогает определить профессиональный контекст, текущий уровень, реалистичный объем и формат: деловой маршрут или общий индивидуальный курс.",
    sections: [
      {
        title: "Для кого",
        body: "Для взрослых, которым русский нужен для работы, деловых поездок, профессиональных контактов, встреч, переписки или отраслевой уверенности.",
      },
      {
        title: "Цель и уровень",
        body: "При подборе учитываются текущий русский, срочность, рабочий контекст, нужная лексика, уверенность в речи и ширина задачи.",
      },
      {
        title: "Фокус обучения",
        body: "Уроки могут покрывать знакомства, звонки, встречи, письма, презентационные фразы, профессиональную лексику, культурный контекст и репетицию.",
      },
      {
        title: "Практическая репетиция",
        body: "Ученик может тренировать реалистичные разговоры, разыгрывать вероятные ситуации, уточнять формулировки и готовить язык под задачу.",
      },
      {
        title: "Материалы и приватность",
        body: "Рабочие примеры должны подходить для учебы и не раскрывать конфиденциальную информацию клиента, работодателя или бизнеса.",
      },
      {
        title: "Индивидуальная поддержка",
        body: "Объем и доступность согласуются после пробной беседы, чтобы профессиональные цели оставались реалистичными и учебно достижимыми.",
      },
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
