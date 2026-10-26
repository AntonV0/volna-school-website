// English GCSE refresh. School provision: published Volna GCSE page and approved
// 2026–27 course calendars. Pearson sources checked on 28 September 2026.
export const gcsePaths = {
  main: "/gcse-courses",
  curriculum: "/gcse-courses/curriculum",
  exams: "/gcse-courses/exam-guide",
  resources: "/gcse-courses/resources",
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
  pastPapers:
    "https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html?Qualification-Family=GCSE",
  gradeBoundaries:
    "https://qualifications.pearson.com/en/support/support-topics/results-certification/grade-boundaries.html",
  candidateInformation:
    "https://www.jcq.org.uk/knowledge-hub/written-exams-2025-2026/",
} as const;

export const gcseOfficialResources = [
  {
    title: "Past papers and mark schemes",
    description:
      "Search Pearson’s public library for GCSE Russian question papers, mark schemes and available supporting files.",
    href: gcseSources.pastPapers,
    label: "Search Pearson past papers",
  },
  {
    title: "GCSE Russian specification",
    description:
      "The official 1RU0 specification, assessment requirements and sample assessment materials.",
    href: gcseSources.specification,
    label: "Read the specification (PDF)",
  },
  {
    title: "Exam timetable",
    description:
      "Pearson’s current UK GCSE timetable, including the summer examination series.",
    href: gcseSources.timetable,
    label: "Open the GCSE timetable (PDF)",
  },
  {
    title: "Grade boundaries",
    description:
      "Official grade-boundary documents, published by Pearson after each examination series.",
    href: gcseSources.gradeBoundaries,
    label: "View Pearson grade boundaries",
  },
  {
    title: "Written-exam guidance",
    description:
      "JCQ’s current information for candidates sitting written examinations.",
    href: gcseSources.candidateInformation,
    label: "Read JCQ candidate guidance",
  },
] as const;

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
    question: "What level of Russian does a student need?",
    answer:
      "Students need a foundation in spoken and written Russian, but we don’t expect every skill to be equally strong. We’ll discuss whether a GCSE group is suitable or whether writing support or language foundations would help first.",
    link: { href: "#starting-point", label: "See preparation options" },
  },
  {
    question: "How do we choose between the one-year and two-year courses?",
    answer:
      "The one-year course suits students who already read and write Russian confidently and are ready for focused exam preparation. The two-year course gives students more time to strengthen their language skills alongside exam preparation. We’ll recommend a suitable option based on their current Russian and intended exam year.",
  },
  {
    question: "Is there a minimum age for the GCSE courses?",
    answer:
      "There is no fixed minimum age, although our GCSE courses usually suit secondary school students. Younger students may be suitable if their spoken and written Russian are strong enough to take part in the lessons and tackle exam tasks.",
  },
  {
    question: "Can students join after the course has started?",
    answer:
      "Yes. Students can join a suitable course at any time. We’ll consider their Russian skills and the topics the group has already covered, and recommend any catch-up support they may need.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "After registration, we’ll contact you by phone or email to discuss the student’s Russian and recommend a suitable starting point.\n\nStudents who are ready for a group can attend both lessons in the next suitable class as their free trial. If we need to assess their level first, we’ll arrange a free one-hour private lesson with our headteacher.",
    link: { href: gcsePaths.trial, label: "Request a free trial lesson" },
  },
  {
    question: "Are learning materials provided?",
    answer:
      "Yes. We provide digital lesson materials and homework linked to the topics covered in class, so students can revisit what they’ve learnt.",
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
    question: "Does joining a course include official exam registration?",
    answer:
      "No. Families arrange exam entry separately with a school, college or exam centre. We can advise on the options, but cannot register students on their behalf. Exam-entry fees are separate from tuition.",
    link: { href: `${gcsePaths.exams}#exam-entry`, label: "How to arrange exam entry" },
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
      "Students listen to recorded Russian and answer questions. The time includes five minutes to read the questions before listening.",
  },
  {
    number: "02",
    title: "Speaking",
    code: "1RU0/2H",
    duration: "10–12 minutes",
    description:
      "Students complete a role play, picture-based discussion and conversation, with an additional 12 minutes’ preparation beforehand.",
  },
  {
    number: "03",
    title: "Reading",
    code: "1RU0/3H",
    duration: "1 hour 5 minutes",
    description:
      "Students answer questions on written Russian and translate a passage into English.",
  },
  {
    number: "04",
    title: "Writing",
    code: "1RU0/4H",
    duration: "1 hour 25 minutes",
    description:
      "Students complete two written responses in Russian and a translation from English into Russian.",
  },
] as const;

export const gcseExamDates = [
  {
    label: "Speaking window",
    date: "15 April–20 May 2027",
    iso: "2027-04-15",
    note: "The exam centre sets each student’s speaking assessment date within this period.",
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
