// English A Level refresh. Provision: published Volna A Level page and 2026–27 calendars.
// Pearson assessment and final timetable checked 28 September 2026.
export const alevelPaths = {
  main: "/a-level-courses",
  curriculum: "/a-level-courses/curriculum",
  exams: "/a-level-courses/exam-guide",
  trial: "/registration?course=alevel",
  groupTrial: "/registration?course=alevel&format=group",
  privateTrial: "/registration?course=alevel&format=private",
} as const;
export const alevelSources = {
  specification:
    "https://qualifications.pearson.com/content/dam/pdf/A%20Level/Russian/2017/specification-sample-assessments/Specification_GCE_A_level_L3_in_Russian.pdf",
  timetable:
    "https://qualifications.pearson.com/content/dam/pdf/Support/Examination-timetables/gce-summer-2027-final.pdf",
  speaking:
    "https://qualifications.pearson.com/en/news-policy/subject-updates/languages/2027-speaking-windows-confirmed.html",
} as const;
export const alevelCalendars = [
  {
    label: "One-year course",
    href: "/downloads/calendars/alevel-one-year-2026-2027.pdf",
  },
  {
    label: "Two-year course",
    href: "/downloads/calendars/alevel-two-year-2026-2027.pdf",
  },
] as const;
export const alevelQuestions = [
  {
    question: "Do I need Russian GCSE first?",
    answer:
      "Russian GCSE is recommended, particularly for the one-year course. We also consider your current reading, writing and speaking, previous study and intended exam year. Tell us about your experience when requesting a trial.",
  },
  {
    question: "How do I choose between one year and two years?",
    answer:
      "The one-year route suits students ready for intensive advanced study. Two years gives more time to develop written accuracy, analytical essays and cultural knowledge. Both require existing Russian; neither starts from the beginning.",
  },
  {
    question: "Can I join after the academic year has started?",
    answer:
      "You can enquire during the year. We review the topics and works you have already studied, the group’s progress and your exam timeline before recommending a place or private support.",
  },
  {
    question: "What work is expected between lessons?",
    answer:
      "Students complete weekly homework and make time for reading, vocabulary review and written tasks. Lesson materials are shared digitally. Your teacher explains what to prepare for the next lesson.",
  },
  {
    question: "How do I access the book and film?",
    answer:
      "You can buy a copy of The Queen of Spades. The Caucasian Prisoner will be provided for students. Your teacher will explain the book and film arrangements during live lessons.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "A computer or laptop, microphone, webcam and reliable internet connection. Group lessons run on Microsoft Teams. We send joining details before your first lesson.",
  },
  {
    question: "Can adults study A Level Russian?",
    answer:
      "Yes. Private tuition is available for adults as well as school-age learners. We agree a plan around your starting point, availability and intended exam year.",
  },
  {
    question: "What can private tuition help with?",
    answer:
      "Private lessons can focus on essay structure, translation, discussion skills and analysis of The Queen of Spades or The Caucasian Prisoner. These are the two works we teach. Tell us which areas you want to strengthen when requesting a trial.",
  },
  {
    question: "Does enrolment include official exam entry?",
    answer:
      "No. Your school or exam centre processes the official entry and charges its own fees. Volna can help you understand the arrangements, including the speaking assessment.",
  },
] as const;
export const alevelThemes = [
  {
    title: "Development of Russian society",
    description: "Young people, education and work",
    body: "Explore young people’s health, leisure and technology; school life and the education system; and employment opportunities and equality at work. Use examples to explain changing expectations in Russian society.",
  },
  {
    title: "Political and artistic culture",
    description: "Media, popular culture and traditions",
    body: "Consider freedom of expression and the influence of print and online media. Explore music, circus and dance, alongside festivals, holidays and traditions in Russian-speaking communities.",
  },
  {
    title: "Moscow or St Petersburg",
    description: "Life in a changing city",
    body: "Compare life in the city and its suburbs. Discuss social issues such as homelessness and crime, then consider how redevelopment and pollution affect the urban environment.",
  },
  {
    title: "The final years of the USSR",
    description: "Gorbachev, 1985–1991",
    body: "Examine the causes and economic effects of perestroika, the social changes associated with glasnost, and the events of 1991, including the August coup and the dissolution of the USSR.",
  },
] as const;
export const alevelPapers = [
  {
    number: "01",
    title: "Listening, reading & translation",
    code: "9RU0/01",
    weighting: "40%",
    duration: "2 hours",
    description:
      "Respond to spoken and written Russian; translate into English.",
  },
  {
    number: "02",
    title: "Works & translation",
    code: "9RU0/02",
    weighting: "30%",
    duration: "2 hours 40 minutes",
    description:
      "Write two essays on studied works and translate into Russian.",
  },
  {
    number: "03",
    title: "Speaking",
    code: "9RU0/03",
    weighting: "30%",
    duration: "21–23 minutes",
    description:
      "Discuss a theme and independent research. Total time includes five minutes’ preparation.",
  },
] as const;
export const alevelExamDates = [
  {
    label: "Speaking window",
    date: "15 April–20 May 2027",
    iso: "2027-04-15",
    note: "Your centre sets your individual appointment.",
  },
  {
    label: "Paper 1",
    date: "Tuesday 18 May 2027",
    iso: "2027-05-18",
    note: "Morning · listening, reading and translation.",
  },
  {
    label: "Paper 2",
    date: "Tuesday 25 May 2027",
    iso: "2027-05-25",
    note: "Afternoon · works and translation.",
  },
] as const;
