export const adultPaths = {
  main: "/courses-for-adults",
  beginner: "/courses-for-adults/russian-foundations",
  intermediate: "/courses-for-adults/intermediate-russian",
  personalised: "/courses-for-adults/personalised-lessons",
  trial: "/registration?course=adults&format=private",
} as const;

export const adultQuestions = [
  {
    question: "Can I start with no Russian at all?",
    answer:
      "Yes. Beginner lessons introduce the alphabet, pronunciation and useful everyday language. You do not need to learn the alphabet before requesting a trial.",
  },
  {
    question: "I studied Russian years ago. Where should I start?",
    answer:
      "Tell us what you remember and what you find difficult now. The trial helps your teacher identify a starting point, so you can revisit gaps while building on the knowledge you still have.",
  },
  {
    question: "Are these group or private lessons?",
    answer:
      "All three adult courses use one-to-one online tuition. Beginner, intermediate and goal-focused options describe what you study; your teacher adapts the pace and content to you.",
  },
  {
    question: "Are learning materials and homework provided?",
    answer:
      "Lesson content and extra exercises are shared by email. Textbooks can also be posted; ask the school about suitable books and any associated costs. Practice between lessons helps you revisit vocabulary and use what you have learned.",
  },
  {
    question: "What do I need for online lessons?",
    answer:
      "A reliable internet connection and a computer or laptop with a microphone and webcam. Lessons use Microsoft Teams or Zoom; we confirm the platform and send joining details before your lesson.",
  },
  {
    question: "Can I join during the year?",
    answer:
      "Yes. You can enquire at any time of year. Your lesson day, time and starting date are agreed with the school, subject to teacher availability.",
  },
  {
    question: "Do lessons continue during school holidays?",
    answer:
      "The school follows its published term calendar. Private lessons may continue during holidays by agreement, subject to teacher availability. Discuss your plans with your teacher before a break.",
  },
] as const;

export const adultCourses = [
  {
    slug: "russian-foundations",
    label: "Beginner Russian",
    short: "Beginner",
    image: "adult-foundations",
    eyebrow: "A clear starting point",
    title: "Your first words. A world of possibilities.",
    intro:
      "Start Russian with patient explanations and practical language. Learn to connect sounds, letters and meaning, then use them in conversations that matter to you.",
    summary:
      "Start from the beginning or revisit the basics: sounds, letters, everyday phrases and the patterns behind them.",
    fit: "For complete beginners and returning learners who want to rebuild their foundations. No alphabet knowledge is required.",
    sectionTitle: "Build from sounds to sentences.",
    sections: [
      {
        title: "Find your voice",
        body: "Get to know Cyrillic letters and Russian sounds. Read short words aloud, notice word stress and practise pronunciation with your teacher.",
      },
      {
        title: "Make a connection",
        body: "Introduce yourself, greet someone and ask simple questions. Use numbers, familiar vocabulary and useful phrases in short exchanges.",
      },
      {
        title: "Put ideas together",
        body: "Build simple sentences, understand common grammatical patterns and begin reading and writing short messages.",
      },
    ],
    examples: [
      {
        title: "Introduce yourself",
        body: "Say your name, where you live and what interests you, then ask someone about themselves.",
      },
      {
        title: "Manage a small exchange",
        body: "Practise ordering a drink or asking a simple question, with help understanding the reply.",
      },
      {
        title: "Read something familiar",
        body: "Recognise a name or sign and write a short greeting using the alphabet you are learning.",
      },
    ],
    practice:
      "A little regular practice helps new language settle. Read a few words aloud, revisit lesson vocabulary or write a short message. Your teacher sets exercises connected to your lessons, so you know what to focus on.",
    questions: [
      {
        question: "Will lessons be entirely in Russian?",
        answer:
          "English explanations are available when needed. Your teacher introduces more Russian gradually, with guided practice at a pace that suits your starting point.",
      },
      {
        question: "How quickly will I be able to have a conversation?",
        answer:
          "You begin practising short exchanges as you learn. Progress depends on your starting point, lesson frequency and practice between lessons; your teacher helps you set realistic next steps.",
      },
      {
        question: "Do I have to finish a fixed course before moving on?",
        answer:
          "Your one-to-one lessons develop with your skills. As the basics become more secure, you can build longer conversations, explore new topics or work towards a particular goal.",
      },
    ],
  },
  {
    slug: "intermediate-russian",
    label: "Intermediate Russian",
    short: "Intermediate",
    image: "adult-conversation",
    eyebrow: "Build on what you know",
    title: "More to say. More ways to say it.",
    intro:
      "Turn existing Russian into more confident communication. Develop your listening, reading and writing alongside conversation, with focused feedback on the gaps that hold you back.",
    summary:
      "Build on previous study, extend your vocabulary and bring greater accuracy and confidence to everyday Russian.",
    fit: "For adults who already know some Russian, including returning learners and people who understand more than they feel able to say. Your trial helps identify the right level of challenge.",
    sectionTitle: "Connect the skills you already have.",
    sections: [
      {
        title: "Follow the meaning",
        body: "Listen and read for the main idea and useful detail. Explore how tone, context and vocabulary change what a speaker or writer means.",
      },
      {
        title: "Develop your response",
        body: "Explain a view, tell a story and ask follow-up questions. Practise sustaining a conversation and expressing an idea in another way when a word escapes you.",
      },
      {
        title: "Make it more accurate",
        body: "Revisit cases, verb forms and sentence structure through your own speaking and writing. Use corrections to notice patterns rather than memorise isolated rules.",
      },
    ],
    examples: [
      {
        title: "Tell the story",
        body: "Describe a recent experience, put events in order and respond to follow-up questions.",
      },
      {
        title: "Discuss an idea",
        body: "Read a short article or listen to a recording, then explain your reaction and compare viewpoints.",
      },
      {
        title: "Write with purpose",
        body: "Draft a message or a short account, then review phrasing and accuracy with your teacher.",
      },
    ],
    practice:
      "Revisit the corrections that matter most, listen again to a short extract or prepare ideas for the next discussion. Focused homework connects each lesson to the next and gives you more opportunities to use the language independently.",
    questions: [
      {
        question: "What if my speaking and writing are at different levels?",
        answer:
          "That is useful information for your teacher. One-to-one tuition can challenge your stronger skills while giving more time to the areas that need support.",
      },
      {
        question: "Can I focus mainly on conversation?",
        answer:
          "Yes. Lessons can give speaking a central role, with listening, vocabulary and grammar work supporting the conversations you want to have.",
      },
      {
        question: "Could I work towards a qualification later?",
        answer:
          "Yes. Adults can prepare for GCSE or A Level through private tuition. The school reviews your current skills and exam timeline before recommending a route. Exam tuition has separate prices.",
      },
    ],
  },
  {
    slug: "personalised-lessons",
    label: "Russian for Your Goals",
    short: "Your goals",
    image: "adult-business-russian",
    eyebrow: "A purpose of your own",
    title: "Learn the Russian you want to use.",
    intro:
      "Bring a reason to learn: a family conversation, a cultural interest, a trip or a professional goal. Work with your teacher to turn it into focused, practical language study.",
    summary:
      "Shape lessons around family, travel, culture or work, with a focus agreed around your current Russian.",
    fit: "For adults at different levels with a particular purpose in mind. Beginners build the foundations around that goal; more experienced learners work on greater depth and accuracy. Describe what you would like to do, and your teacher will help define a suitable starting point.",
    sectionTitle: "What would you like Russian to make possible?",
    sections: [
      {
        title: "Family and connection",
        body: "Join everyday conversations, share news and ask about the people who matter to you. Practise both expressing yourself and understanding a reply.",
      },
      {
        title: "Travel and everyday life",
        body: "Work through situations such as introductions, directions and practical questions, building useful language around your plans.",
      },
      {
        title: "Culture and reading",
        body: "Explore a story, film or topic that interests you, using material suited to your level to develop vocabulary and discussion.",
      },
      {
        title: "Professional communication",
        body: "Discuss the situations where you need Russian at work. Lessons can focus on relevant vocabulary, introductions, correspondence or conversations, with scope agreed with your teacher.",
      },
    ],
    examples: [
      {
        title: "Choose a situation",
        body: "Describe a conversation or task you would like to handle, and what currently feels difficult.",
      },
      {
        title: "Build and rehearse",
        body: "Explore useful language, practise with your teacher and try different ways of expressing the same idea.",
      },
      {
        title: "Review and extend",
        body: "Use feedback to make your response clearer, then apply what you learned to another situation.",
      },
    ],
    practice:
      "Between lessons, revisit useful phrases, prepare a short response or explore a related text. The aim is to carry the language beyond the lesson and return with questions from your own practice.",
    questions: [
      {
        question: "Can I combine several interests?",
        answer:
          "Yes. Share your priorities with the teacher. A clear focus helps each lesson, but your plan can include different interests and develop as your needs change.",
      },
      {
        question: "Do you offer specialist business Russian?",
        answer:
          "Tell us your professional context, current level and the situations you need to prepare for. The school confirms whether it can support that scope before agreeing a plan.",
      },
      {
        question: "Can I use these lessons for exam preparation?",
        answer:
          "GCSE and A Level preparation have their own course content and private-tuition rates. See ‘GCSE and A Level for adults’ for prices and course details, or select the qualification when requesting your trial.",
      },
    ],
  },
] as const;

export type AdultCourse = (typeof adultCourses)[number];
