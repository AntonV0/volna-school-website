import type { Locale } from "@/lib/i18n/config";

export type Copy = readonly [string, string];
export const words = (copy: Copy, locale: Locale) =>
  copy[locale === "en" ? 0 : 1];
export type ChildrenDetailKey =
  | "children-bilingual"
  | "children-rfl"
  | "children-early-years"
  | "children-private-tuition";

export type ChildClass = {
  id: string;
  name: Copy;
  ages: string;
  focus: Copy;
  learning: Copy;
  times: readonly [Copy, Copy];
};

// Curriculum and schedules checked against every live class selector on 24 September 2026.
// The older RFL selector says 9–16 but its body says 9–15; use 9+ pending owner confirmation.
export const childrenClasses: ChildClass[] = [
  {
    id: "junior",
    name: ["Junior Group", "Младшая группа"],
    ages: "3–4",
    focus: ["Sounds, words & first marks", "Звуки, слова и первые линии"],
    learning: [
      "Children name familiar objects, listen for different sounds and respond to simple questions. Picture games, tracing and drawing introduce letter shapes while developing the coordination needed for writing.",
      "Дети называют знакомые предметы, различают звуки и отвечают на простые вопросы. Игры с картинками, обведение и рисование знакомят с формой букв и готовят руку к письму.",
    ],
    times: [
      ["Monday 16:45–17:45", "Понедельник 16:45–17:45"],
      ["Thursday 16:45–17:45", "Четверг 16:45–17:45"],
    ],
  },
  {
    id: "middle",
    name: ["Middle Group", "Средняя группа"],
    ages: "4–5",
    focus: ["Letters become syllables", "От букв к слогам"],
    learning: [
      "Recognising letters becomes the first step towards reading syllables and short words. Children expand their vocabulary, practise clear pronunciation and learn to put their own thoughts into simple sentences.",
      "Узнавая буквы, дети переходят к чтению слогов и коротких слов. Они пополняют словарный запас, тренируют произношение и учатся выражать свои мысли простыми предложениями.",
    ],
    times: [
      ["Tuesday 16:45–17:45", "Вторник 16:45–17:45"],
      ["Wednesday 16:45–17:45", "Среда 16:45–17:45"],
    ],
  },
  {
    id: "upper",
    name: ["Upper Group", "Старшая группа"],
    ages: "5–7",
    focus: ["Read, understand & explain", "Читать, понимать, объяснять"],
    learning: [
      "Children read increasingly complex words, distinguish stressed syllables and practise spelling. Work with nouns, adjectives and pronouns introduces how words change and agree, helping children explain ideas more clearly.",
      "Дети читают всё более сложные слова, различают ударные слоги и тренируют правописание. Работа с существительными, прилагательными и местоимениями знакомит с изменением и согласованием слов.",
    ],
    times: [
      ["Monday 18:00–19:00", "Понедельник 18:00–19:00"],
      ["Thursday 18:00–19:00", "Четверг 18:00–19:00"],
    ],
  },
  {
    id: "zero",
    name: ["Class Zero", "Нулевой класс"],
    ages: "6–8",
    focus: [
      "A bridge into independent literacy",
      "Подготовка к самостоятельному чтению и письму",
    ],
    learning: [
      "A consolidation year for children who need more reading and writing practice before Class One. Integrated lessons develop Cyrillic handwriting, reading fluency and everyday communication, with attention to common English–Russian language mix-ups.",
      "Подготовительный этап для детей, которым нужна дополнительная практика перед первым классом. Занятия объединяют письмо, беглое чтение и общение, уделяя внимание типичным трудностям русско-английского двуязычия.",
    ],
    times: [
      ["Tuesday 16:30–17:30", "Вторник 16:30–17:30"],
      ["Friday 16:30–17:30", "Пятница 16:30–17:30"],
    ],
  },
  {
    id: "one",
    name: ["Class One", "Первый класс"],
    ages: "7–9",
    focus: [
      "From sentences to paragraphs",
      "От предложений к небольшим текстам",
    ],
    learning: [
      "Reading for meaning sits alongside dictation, spelling and sentence planning. Children explore roots, prefixes and suffixes, notice how context changes a word’s meaning, and practise asking questions and writing connected sentences.",
      "Осмысленное чтение сочетается с диктантами, орфографией и построением предложений. Дети знакомятся с корнем, приставкой и суффиксом, замечают значение контекста и учатся составлять связные тексты.",
    ],
    times: [
      ["Tuesday 17:30–18:30", "Вторник 17:30–18:30"],
      ["Thursday 17:30–18:30", "Четверг 17:30–18:30"],
    ],
  },
  {
    id: "two",
    name: ["Class Two", "Второй класс"],
    ages: "8–11",
    focus: ["Understand how a text works", "Понимать устройство текста"],
    learning: [
      "Learners compare simple and complex sentences, work with case endings and strengthen spelling. Reading lessons explore different kinds of writing—from letters to articles—and teach children to identify a main idea and plan a written response.",
      "Ученики сравнивают простые и сложные предложения, работают с падежными окончаниями и орфографией. На чтении знакомятся с разными жанрами, выделяют главную мысль и составляют план письменного ответа.",
    ],
    times: [
      ["Monday 18:00–19:00", "Понедельник 18:00–19:00"],
      ["Thursday 17:00–18:00", "Четверг 17:00–18:00"],
    ],
  },
  {
    id: "three",
    name: ["Class Three", "Третий класс"],
    ages: "9–13",
    focus: ["More precise, expressive Russian", "Точная и выразительная речь"],
    learning: [
      "More demanding texts and grammar extend the foundations of Class Two. Children refine word stress, spelling and case use, analyse vocabulary in context, and support their spoken and written interpretations with details from a text.",
      "Более сложные тексты и грамматика развивают навыки второго класса. Дети отрабатывают ударение, правописание и падежи, анализируют лексику в контексте и обосновывают своё понимание текста устно и письменно.",
    ],
    times: [
      ["Monday 18:30–19:30", "Понедельник 18:30–19:30"],
      ["Thursday 16:30–17:30", "Четверг 16:30–17:30"],
    ],
  },
  {
    id: "four",
    name: ["Class Four", "Четвёртый класс"],
    ages: "10–15",
    focus: [
      "Write with purpose; prepare for GCSE",
      "Осознанное письмо и подготовка к GCSE",
    ],
    learning: [
      "Narrative, descriptive and opinion writing build control of paragraphs and argument. Students discuss characters, improve reading fluency and consolidate all six cases, verb conjugation, punctuation, and direct and indirect speech before moving towards GCSE.",
      "Повествование, описание и рассуждение учат строить абзацы и аргументировать. Ученики обсуждают героев, развивают беглость чтения, закрепляют шесть падежей, спряжение, пунктуацию, прямую и косвенную речь перед переходом к GCSE.",
    ],
    times: [
      ["Monday 18:00–19:00", "Понедельник 18:00–19:00"],
      ["Thursday 18:00–19:00", "Четверг 18:00–19:00"],
    ],
  },
  {
    id: "rfl-younger",
    name: ["Ages 4–8", "Младшая группа РКИ"],
    ages: "4–8",
    focus: ["First words, first conversations", "Первые слова и диалоги"],
    learning: [
      "Illustrated materials connect sounds to letters and new words to their meanings. Children build phrases, read familiar words, try short dictations and use simple dialogues to bring vocabulary and grammar together.",
      "Иллюстрированные материалы помогают связать звуки с буквами, а слова — со значениями. Дети составляют фразы, читают знакомые слова, пробуют короткие диктанты и разыгрывают простые диалоги.",
    ],
    times: [
      ["Tuesday 17:30–18:30", "Вторник 17:30–18:30"],
      ["Friday 17:30–18:30", "Пятница 17:30–18:30"],
    ],
  },
  {
    id: "rfl-older",
    name: ["Ages 9+", "Старшая группа РКИ"],
    ages: "9+",
    focus: [
      "Build a language from the beginning",
      "Последовательно осваивать новый язык",
    ],
    learning: [
      "Students start with pronunciation and useful everyday language, then develop reading, sentence construction and connected writing. Cultural topics give conversations a context; growing fluency can open a later path into bilingual classes or GCSE study.",
      "Ученики начинают с произношения и повседневной лексики, затем осваивают чтение, построение предложений и связное письмо. Культурные темы дают основу для бесед; дальнейший прогресс позволяет перейти в билингвальные классы или к GCSE.",
    ],
    times: [
      ["Wednesday 19:30–20:30", "Среда 19:30–20:30"],
      ["Friday 19:30–20:30", "Пятница 19:30–20:30"],
    ],
  },
];

type LearningPoint = { title: Copy; body: Copy };
export type ChildrenDetail = {
  key: ChildrenDetailKey;
  label: Copy;
  eyebrow: Copy;
  title: Copy;
  intro: Copy;
  card: Copy;
  ages: Copy;
  fit: Copy;
  learningTitle: Copy;
  learning: LearningPoint[];
  classIds: string[];
  questions: { question: Copy; answer: Copy }[];
};

export const childrenDetails: Record<ChildrenDetailKey, ChildrenDetail> = {
  "children-bilingual": {
    key: "children-bilingual",
    label: ["Bilingual group classes", "Занятия для билингвов"],
    eyebrow: ["For children who know Russian", "Для детей, знакомых с русским"],
    title: [
      "Give their Russian room to grow.",
      "От разговоров по-русски к грамотному письму.",
    ],
    intro: [
      "Turn the Russian your child hears and speaks into confident reading, thoughtful writing and richer conversation. Small online classes build on the Russian your child already uses at home.",
      "Поможем превратить домашний русский в уверенное чтение, грамотное письмо и выразительную речь. В небольших онлайн-группах дети последовательно развивают языковые навыки.",
    ],
    card: [
      "For children who understand or speak Russian and are ready to develop their reading, writing and expression.",
      "Для детей, которые понимают или говорят по-русски и готовы развивать чтение, письмо и речь.",
    ],
    ages: ["Typically ages 6–15", "Обычно от 6 до 15 лет"],
    fit: [
      "Speaking Russian and reading it are different skills. We consider both, alongside age and confidence, so a fluent speaker can still get the literacy support they need. For ages 3–7, explore our early-years groups.",
      "Устная речь и чтение — разные навыки. Мы учитываем оба, а также возраст и уверенность ребёнка: даже свободно говорящему ученику может понадобиться помощь с грамотностью. Для детей 3–7 лет есть дошкольные группы.",
    ],
    learningTitle: [
      "From home language to independent expression",
      "От домашнего языка к самостоятельной речи",
    ],
    learning: [
      {
        title: ["Read beyond the words", "Понимать прочитанное"],
        body: [
          "Build fluency and comprehension through stories and other age-appropriate texts. Discuss meaning, characters and the choices an author makes.",
          "Развиваем беглость и понимание на рассказах и других текстах по возрасту. Обсуждаем смысл, героев и авторские решения.",
        ],
      },
      {
        title: ["Make writing make sense", "Писать осмысленно"],
        body: [
          "Connect spelling and grammar to useful writing: first sentences, then paragraphs, descriptions and opinions. Dictation and revision turn rules into habits.",
          "Применяем орфографию и грамматику на практике: от первых предложений до описаний и рассуждений. Диктанты и работа над ошибками закрепляют навыки.",
        ],
      },
      {
        title: ["Find a more precise voice", "Выражать мысли точнее"],
        body: [
          "Broaden vocabulary, explain an idea and respond to other learners. Regular homework and teacher feedback help each week’s learning carry into the next.",
          "Расширяем словарный запас, учимся объяснять свою мысль и отвечать собеседнику. Домашние задания и обратная связь связывают занятия в единую программу.",
        ],
      },
    ],
    classIds: ["zero", "one", "two", "three", "four"],
    questions: [
      {
        question: [
          "My child speaks Russian but cannot read it. Is this suitable?",
          "Ребёнок говорит по-русски, но не читает. Ему подойдёт этот курс?",
        ],
        answer: [
          "Yes. Tell us about their spoken Russian and literacy separately. The teacher will recommend a class that develops reading and writing without assuming those skills already match their conversation.",
          "Да. Расскажите отдельно об устной речи и навыках чтения и письма. Учитель подберёт класс, где ребёнок сможет развивать грамотность с подходящего уровня.",
        ],
      },
      {
        question: [
          "Are these class numbers the same as school years?",
          "Номера классов соответствуют классам обычной школы?",
        ],
        answer: [
          "No. They describe stages in our Russian curriculum. The age ranges are a guide; placement also depends on reading, writing and spoken language.",
          "Нет. Это ступени нашей программы русского языка. Возраст указан ориентировочно: при выборе класса важны чтение, письмо и устная речь.",
        ],
      },
      {
        question: [
          "What comes after Class Four?",
          "Что после четвёртого класса?",
        ],
        answer: [
          "The programme builds towards GCSE Russian. Moving on depends on the learner’s readiness and exam plans, which we discuss with the family.",
          "Программа готовит основу для GCSE Russian. Переход зависит от готовности ученика и планов сдачи экзамена; это мы обсуждаем с семьёй.",
        ],
      },
    ],
  },
  "children-rfl": {
    key: "children-rfl",
    label: ["Russian as a Foreign Language (RFL)", "Русский с нуля"],
    eyebrow: ["For children starting Russian", "Без знания русского языка"],
    title: [
      "A first conversation starts here.",
      "Первый разговор начинается здесь.",
    ],
    intro: [
      "Russian as a Foreign Language (RFL) for children with little or no previous experience. Ages 4–8 and ages 9+ learn in separate groups, with activities suited to their age.",
      "Доброжелательное знакомство с русским для детей, которые начинают с нуля. Для младших и старших детей есть отдельные группы с заданиями по возрасту.",
    ],
    card: [
      "A clear first step for children with little or no Russian, with separate groups for ages 4–8 and ages 9+.",
      "Понятное начало для детей без знания русского: отдельные группы для младших и старших учеников.",
    ],
    ages: ["Ages 4–8 and 9+", "Возраст 4–8 и 9+"],
    fit: [
      "Your child does not need to know the alphabet or speak Russian at home. These Russian as a Foreign Language (RFL) classes follow a three-year teaching programme for each age band. This describes the curriculum; we recommend a starting point after the trial, and the fees below explain payment for lessons during the term.",
      "Не нужно заранее знать алфавит или говорить по-русски дома. Занятия русского как иностранного (РКИ) последовательно знакомят с языком; для каждой возрастной группы предусмотрена трёхлетняя программа.",
    ],
    learningTitle: [
      "Small discoveries become useful language",
      "Маленькие открытия складываются в язык",
    ],
    learning: [
      {
        title: ["Hear it. Say it.", "Услышать и произнести"],
        body: [
          "Listen for Russian sounds and practise pronunciation through familiar objects, pictures and everyday phrases. Short exchanges make speaking part of learning from the start.",
          "Различаем русские звуки и тренируем произношение с помощью картинок, знакомых предметов и простых фраз. Короткие диалоги включают речь с первых занятий.",
        ],
      },
      {
        title: ["Connect sounds and letters", "Связать звуки и буквы"],
        body: [
          "Recognise Cyrillic letters, join them into syllables and read words with meaning. Illustrated materials and writing practice reinforce the connection.",
          "Узнаём кириллические буквы, соединяем их в слоги и читаем осмысленные слова. Иллюстрации и письменные задания помогают закрепить связь.",
        ],
      },
      {
        title: ["Build your own sentences", "Составить свою фразу"],
        body: [
          "Use new vocabulary in simple dialogues and written sentences. Grammar grows alongside communication, with cultural topics bringing the language into context.",
          "Используем новые слова в диалогах и письменных предложениях. Грамматика осваивается вместе с общением, а культурные темы делают язык понятнее.",
        ],
      },
    ],
    classIds: ["rfl-younger", "rfl-older"],
    questions: [
      {
        question: [
          "Do parents need to speak Russian?",
          "Родителям обязательно знать русский?",
        ],
        answer: [
          "You can help by keeping a regular practice routine. If you do not speak Russian, tell us so the teacher can explain how to support homework without having to teach the language yourself.",
          "Вы можете помочь ребёнку регулярно заниматься. Если вы не говорите по-русски, сообщите нам: учитель объяснит, как поддержать домашнюю практику, не преподавая язык самостоятельно.",
        ],
      },
      {
        question: [
          "Can an older child start from zero?",
          "Можно ли начать с нуля в старшем возрасте?",
        ],
        answer: [
          "Yes. The older beginner group starts with the foundations too. Age-appropriate tasks help learners practise without having to join a much younger class.",
          "Да. Старшая группа тоже начинает с основ. Задания соответствуют возрасту, поэтому ученику не нужно заниматься вместе с маленькими детьми.",
        ],
      },
      {
        question: [
          "Can beginners eventually study GCSE Russian?",
          "Можно ли после РКИ готовиться к GCSE?",
        ],
        answer: [
          "Yes, once their language skills are ready. Progression is based on what a student can understand and use, rather than a promise to reach exam level within a fixed time.",
          "Да, когда языковые навыки достигнут нужного уровня. Переход зависит от реальных знаний и умений, а не от заранее обещанного срока.",
        ],
      },
    ],
  },
  "children-early-years": {
    key: "children-early-years",
    label: ["Early years", "Дошкольные занятия"],
    eyebrow: ["Already familiar with Russian", "Для детей, знакомых с русским"],
    title: [
      "Big discoveries for little learners.",
      "Большие открытия маленьких учеников.",
    ],
    intro: [
      "Sounds, stories and first words on the page. Our Junior, Middle and Upper groups help young children develop spoken Russian and grow into reading and writing.",
      "Звуки, истории и первые слова на странице. Младшая, средняя и старшая группы развивают устную речь и постепенно готовят детей к чтению и письму.",
    ],
    card: [
      "Playful language and first literacy for ages 3–7. These are the youngest stages of our bilingual programme.",
      "Речь через игру и первые шаги в грамоте для детей 3–7 лет — начальные ступени билингвальной программы.",
    ],
    ages: ["Ages 3–7", "Возраст 3–7 лет"],
    fit: [
      "These groups build on a child’s familiarity with Russian. Age is a starting point, not the only measure: we also look at understanding, speech and readiness for online learning. Children new to Russian may be better suited to our younger beginner group.",
      "Группы опираются на знакомство ребёнка с русским языком. Помимо возраста мы учитываем понимание, речь и готовность к онлайн-занятиям. Детям без знания русского может больше подойти младшая группа для начинающих.",
    ],
    learningTitle: [
      "A playful approach with a clear purpose",
      "Игра, за которой стоит учебная цель",
    ],
    learning: [
      {
        title: ["Listen and join in", "Слушать и участвовать"],
        body: [
          "Familiar topics, pictures and conversation help children name things, follow instructions and answer questions. Songs and movement bring variety to the lesson.",
          "Знакомые темы, картинки и беседы помогают называть предметы, понимать инструкции и отвечать на вопросы. Песни и движение разнообразят урок.",
        ],
      },
      {
        title: ["Get ready to read", "Подготовиться к чтению"],
        body: [
          "Children notice sounds, recognise letters and begin connecting syllables. The focus changes with their stage, from playful discovery to reading and understanding words.",
          "Дети различают звуки, узнают буквы и соединяют слоги. По мере готовности игра и знакомство с буквами переходят в осмысленное чтение.",
        ],
      },
      {
        title: ["Give little hands a start", "Подготовить руку к письму"],
        body: [
          "Tracing, drawing and early writing develop pencil control and familiarity with letter shapes. Children gradually move from making marks to forming recognisable letters.",
          "Обведение, рисование и первые письменные задания развивают координацию и знакомят с формой букв. Родители помогают с материалами и вниманием, особенно в младшей группе.",
        ],
      },
    ],
    classIds: ["junior", "middle", "upper"],
    questions: [
      {
        question: [
          "How do you choose between the early-years groups?",
          "Нужно ли присутствовать на уроке?",
        ],
        answer: [
          "We consider how much Russian your child understands and uses, their familiarity with letters and their readiness for group activities. Age helps guide the choice; the trial gives the teacher a clearer picture.",
          "В младшей группе мы настоятельно рекомендуем присутствие родителя для помощи с вниманием и материалами. Старшим детям может требоваться меньше поддержки; обсудите это с учителем.",
        ],
      },
      {
        question: [
          "Will a full hour be suitable?",
          "Подойдёт ли ребёнку часовой урок?",
        ],
        answer: [
          "Group lessons last an hour and include varied activities. The trial helps you see how your child responds to the format. Shorter private lessons are another option if needed.",
          "Групповой урок длится час и включает разные виды деятельности. На пробном занятии можно оценить, подходит ли формат ребёнку. При необходимости есть более короткие индивидуальные уроки.",
        ],
      },
      {
        question: [
          "What if my child has never learned Russian?",
          "Что делать, если ребёнок совсем не знает русский?",
        ],
        answer: [
          "Tell us before the trial. Our younger beginner group is designed for ages 4–8 with little or no Russian; private tuition may also be appropriate.",
          "Сообщите об этом перед пробным уроком. Младшая группа для начинающих рассчитана на детей 4–8 лет без знания русского; также возможны индивидуальные занятия.",
        ],
      },
    ],
  },
  "children-private-tuition": {
    key: "children-private-tuition",
    label: ["One-to-one tuition", "Индивидуальные занятия"],
    eyebrow: ["A personal pace and plan", "Свой темп и учебный план"],
    title: [
      "Russian lessons shaped around your child.",
      "Русский с учётом особенностей вашего ребёнка.",
    ],
    intro: [
      "Time to revisit a difficult skill, explore a new interest or learn around a busy week. One-to-one tuition gives your child the teacher’s full attention and a plan built around their needs.",
      "Можно вернуться к сложной теме, развить новый интерес или вписать учёбу в насыщенную неделю. На индивидуальных занятиях всё внимание учителя и учебный план посвящены вашему ребёнку.",
    ],
    card: [
      "Individual attention, a flexible timetable and a learning plan focused on your child’s needs.",
      "Внимание учителя, гибкое расписание и программа с учётом задач вашего ребёнка.",
    ],
    ages: ["All levels · flexible scheduling", "Любой уровень · гибкий график"],
    fit: [
      "Choose private tuition for a targeted skill, a more comfortable pace or times outside the group timetable. It can be your child’s main way of learning or a short period of support before joining a group.",
      "Выбирайте индивидуальные занятия для отдельного навыка, комфортного темпа или удобного расписания. Они могут стать основным форматом или временной поддержкой перед переходом в группу.",
    ],
    learningTitle: [
      "One teacher. The right focus.",
      "Один учитель. Именно ваши задачи.",
    ],
    learning: [
      {
        title: ["Strengthen a particular skill", "Укрепить отдельный навык"],
        body: [
          "Work on reading, spelling, handwriting or conversation without moving at the pace of a whole class. The teacher can revisit a topic or add challenge as needed.",
          "Работайте над чтением, орфографией, письмом или разговорной речью в своём темпе. Учитель повторит сложную тему или предложит более трудную задачу.",
        ],
      },
      {
        title: ["Catch up and join in", "Догнать программу и войти в группу"],
        body: [
          "If your child joins during the year, focused lessons can address gaps before a group transition. The plan can follow our children’s curriculum rather than starting a separate programme.",
          "При поступлении в течение года отдельные уроки помогут восполнить пробелы перед переходом в группу. Можно следовать нашей детской программе, не начиная другой курс.",
        ],
      },
      {
        title: ["Keep learning personal", "Сохранить индивидуальный подход"],
        body: [
          "Agree priorities and a suitable lesson length with the teacher. Homework and feedback reinforce the chosen goals, whether the focus is everyday Russian or stronger literacy.",
          "Согласуйте с учителем задачи и длительность урока. Домашняя практика и обратная связь поддержат выбранную цель — повседневное общение или развитие грамотности.",
        ],
      },
    ],
    classIds: [],
    questions: [
      {
        question: [
          "What should we tell you when requesting a trial?",
          "Можно ли проходить групповую программу индивидуально?",
        ],
        answer: [
          "Tell us your child’s age, what they understand and can say in Russian, and how they read and write. Mention the skills you would like to focus on and your preferred days and times.",
          "Да. Можно следовать программе детской группы или сосредоточиться на отдельных задачах, согласованных с учителем.",
        ],
      },
      {
        question: [
          "What do we need for an online private lesson?",
          "Как часто нужно заниматься?",
        ],
        answer: [
          "Private lessons use Zoom. We recommend a computer or laptop with a working camera, microphone and internet connection. The school sends joining instructions before the lesson.",
          "Частоту согласуем с учётом целей, возраста и расписания ребёнка. Укажите удобные дни и время при записи на пробный урок.",
        ],
      },
      {
        question: [
          "Do we have to enrol after the trial?",
          "Можно ли заниматься на каникулах?",
        ],
        answer: [
          "The trial is a chance to meet the teacher and see how the lessons suit your child. Afterwards, discuss the proposed plan with the school and decide whether to continue.",
          "Да, по договорённости и при наличии свободного времени у учителя. Каникулы обсуждаются со школой отдельно.",
        ],
      },
    ],
  },
};

export const childrenDetailKeys = Object.keys(
  childrenDetails,
) as ChildrenDetailKey[];
export const groupFee = 15;
export const privateLessonFees = [
  { minutes: 30, price: 20 },
  { minutes: 60, price: 35 },
  { minutes: 90, price: 45 },
];

export const childrenQuestions: { question: Copy; answer: Copy }[] = [
  {
    question: [
      "How do we choose the right class?",
      "Как выбрать подходящую группу?",
    ],
    answer: [
      "You do not need to choose a class number before enquiring. Tell us your child’s age, experience of Russian and goals. We discuss a suitable trial and recommend a starting group or private tuition.",
      "Не нужно заранее выбирать номер класса. Расскажите о возрасте ребёнка, его русском языке и целях. Мы подберём пробный урок и предложим группу или индивидуальные занятия.",
    ],
  },
  {
    question: [
      "Can my child join during the school year?",
      "Можно ли присоединиться в течение года?",
    ],
    answer: [
      "Yes. We check the current class level and available places. If some material needs revisiting, a few private lessons can help your child prepare to join the group.",
      "Да. Мы уточним уровень группы и наличие мест. Если нужно повторить часть материала, несколько индивидуальных уроков помогут подготовиться к переходу в группу.",
    ],
  },
  {
    question: [
      "What equipment will we need?",
      "Какая техника нужна для занятий?",
    ],
    answer: [
      "A computer or laptop with a working camera, microphone and internet connection is recommended. Group lessons use Microsoft Teams and private lessons use Zoom. We send joining instructions before the lesson.",
      "Рекомендуем компьютер или ноутбук с камерой, микрофоном и интернетом. Группы занимаются в Microsoft Teams, индивидуальные ученики — в Zoom. Инструкции отправим перед уроком.",
    ],
  },
  {
    question: [
      "Is there homework or a textbook?",
      "Будут ли домашние задания и учебники?",
    ],
    answer: [
      "Group classes include weekly homework. Materials depend on the class: some use textbooks sent to families, while others receive lesson content and practice digitally. We explain what your child needs when confirming their class.",
      "В группах есть еженедельные домашние задания. Материалы зависят от класса: для некоторых высылаем учебники, для других — задания в электронном виде. Всё необходимое уточним при выборе группы.",
    ],
  },
  {
    question: [
      "Can we change classes later?",
      "Можно ли позже сменить группу?",
    ],
    answer: [
      "Yes. If the work feels too easy or too demanding, contact us. Teachers also review progress and may recommend another group as your child’s skills develop.",
      "Да. Если задания слишком лёгкие или сложные, свяжитесь со школой. Учителя также следят за прогрессом и могут предложить другую группу.",
    ],
  },
];
