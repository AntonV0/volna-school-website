// English GCSE refresh. School provision: published Volna GCSE page and approved
// 2026–27 course calendars. Pearson sources checked on 28 September 2026.
export const gcsePaths = {
  main: "/gcse-courses",
  curriculum: "/gcse-courses/curriculum",
  exams: "/gcse-courses/exam-guide",
  trial: "/registration?course=gcse",
  groupTrial: "/registration?course=gcse&format=group",
  privateTrial: "/registration?course=gcse&format=private",
} as const;

export const gcseSources = {
  qualification:
    "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/russian-2017.html",
  specification:
    "https://qualifications.pearson.com/content/dam/pdf/GCSE/Russian/2017/specification-and-sample-assessments/specification-gcse2017-l12-russian-issue5.pdf",
  timetable:
    "https://qualifications.pearson.com/content/dam/pdf/Support/Examination-timetables-for-UK-Edexcel-GCSE/gcse-summer-2027final.pdf",
  speaking:
    "https://qualifications.pearson.com/en/news-policy/subject-updates/languages/2027-speaking-windows-confirmed.html",
} as const;

export const gcseCalendars = [
  {
    label: "One-year course",
    detail: "Monday lessons · 2026–27",
    href: "/downloads/calendars/gcse-one-year-2026-2027.pdf",
  },
  {
    label: "Two-year course",
    detail: "Tuesday lessons · 2026–27",
    href: "/downloads/calendars/gcse-two-year-2026-2027.pdf",
  },
] as const;

export const gcseQuestions = [
  {
    question: "Are these courses suitable for complete beginners?",
    answer:
      "Our GCSE groups build on existing Russian, including reading and writing. The two-year course gives students more time to develop those skills; it is not a course starting from zero. If you are new to Russian, we can recommend a foundation course before GCSE preparation.",
  },
  {
    question: "Are learning materials provided?",
    answer:
      "Yes. Lesson materials and homework are shared digitally before or after lessons, so students can revisit the work between classes.",
  },
  {
    question: "How do we choose between one year and two years?",
    answer:
      "Tell us the student’s school year, current Russian level and intended exam year. The trial helps us assess reading, writing and speaking together. Students already confident in Russian may suit the one-year course; the two-year course allows more time to build language and exam skills.",
  },
  {
    question: "Can younger students prepare for GCSE Russian?",
    answer:
      "Yes. School year is a guide rather than the only entry criterion. Younger students with suitable Russian can be considered after a level review. We look at literacy and readiness for exam tasks, not just conversational fluency.",
  },
  {
    question: "Can we join after the school year has started?",
    answer:
      "You can enquire during the year. We discuss what the student has already studied, their intended exam date and the group’s current work before recommending a place or private support.",
  },
  {
    question: "What do students need for online lessons?",
    answer:
      "A computer or laptop with a camera, microphone and a reliable internet connection. Group classes take place on Microsoft Teams; private lessons use Zoom. We send joining instructions before the lesson.",
  },
  {
    question: "Can adults take GCSE Russian with Volna?",
    answer:
      "Yes, through private tuition. The GCSE group courses are for school-age learners; one-to-one lessons offer adults a flexible way to work towards the qualification.",
  },
  {
    question: "Does joining the course register us for the official exam?",
    answer:
      "No. The official exam entry is arranged separately through a school or exam centre. Volna can guide you through the options. Our exam guide explains what to check with your chosen centre.",
  },
] as const;

export const gcseSkills = [
  {
    title: "Listen for meaning",
    body: "Pick out key information, recognise opinions and follow spoken Russian across familiar and less familiar situations.",
    practice:
      "Practise listening for detail without losing the overall message.",
  },
  {
    title: "Speak with purpose",
    body: "Develop a fuller answer, explain a preference and respond when a conversation takes an unexpected turn.",
    practice:
      "Use role play, picture discussion and conversation to build confidence.",
  },
  {
    title: "Read with understanding",
    body: "Work with different types of text, recognise meaning in context and translate Russian into clear English.",
    practice: "Support an answer with what the text actually says.",
  },
  {
    title: "Write with precision",
    body: "Connect ideas, use a wider range of vocabulary and apply grammar when writing or translating into Russian.",
    practice: "Plan, write and review an answer for both meaning and accuracy.",
  },
] as const;

export const gcseThemes = [
  {
    title: "Identity and culture",
    description: "Relationships, interests and everyday life",
    body: "Talk about family and friends, daily routines, technology and cultural interests. Explore how people spend their time and celebrate together.",
  },
  {
    title: "Local area, holiday and travel",
    description: "Places, experiences and getting around",
    body: "Describe a place, discuss past or future trips and handle practical situations such as travel, accommodation and asking for help.",
  },
  {
    title: "School",
    description: "Learning and school life",
    body: "Compare school experiences, explain views about subjects and rules, and discuss trips, activities and the pressures of school life.",
  },
  {
    title: "Future aspirations, study and work",
    description: "Plans and possibilities",
    body: "Explain ambitions and explore further study, employment and volunteering, including how languages can be used beyond the classroom.",
  },
  {
    title: "International and global dimension",
    description: "Communities and shared challenges",
    body: "Discuss environmental choices, international events and good causes, giving reasons for opinions and considering different perspectives.",
  },
] as const;

export const gcsePapers = [
  {
    number: "01",
    title: "Listening",
    code: "1RU0/1H",
    duration: "45 minutes",
    description:
      "Understand recorded Russian and respond to questions. Includes five minutes of reading time.",
  },
  {
    number: "02",
    title: "Speaking",
    code: "1RU0/2H",
    duration: "10–12 minutes",
    description:
      "Role play, picture-based discussion and conversation. Allow a further 12 minutes for preparation before the assessment.",
  },
  {
    number: "03",
    title: "Reading",
    code: "1RU0/3H",
    duration: "1 hour 5 minutes",
    description:
      "Understand written texts and translate a passage from Russian into English.",
  },
  {
    number: "04",
    title: "Writing",
    code: "1RU0/4H",
    duration: "1 hour 25 minutes",
    description:
      "Write in Russian for different purposes and translate from English into Russian.",
  },
] as const;

export const gcseExamDates = [
  {
    label: "Speaking window",
    date: "15 April–20 May 2027",
    iso: "2027-04-15",
    note: "Your exam centre arranges the individual appointment.",
  },
  {
    label: "Listening & reading",
    date: "Thursday 27 May 2027",
    iso: "2027-05-27",
    note: "Afternoon session · two separate papers.",
  },
  {
    label: "Writing",
    date: "Monday 7 June 2027",
    iso: "2027-06-07",
    note: "Afternoon session.",
  },
] as const;
