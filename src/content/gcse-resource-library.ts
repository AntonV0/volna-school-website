// Public URLs copied from Pearson's Russian course-materials listing, 26 October 2026.
// Do not derive URLs for restricted series or mirror the documents in this repository.
export const russianMaterialsUrl =
  "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/russian-2017.coursematerials.html";

const base = "https://qualifications.pearson.com/content/dam/pdf/GCSE/Russian/2017/Exam-materials/";
const boundariesBase = "https://qualifications.pearson.com/content/dam/pdf/Support/Grade-boundaries/GCSE/";

// Exact filenames from Pearson's grade-boundary archive, not inferred from paper dates.
const boundaries: Record<number, [string, string]> = {
  2025: ["grade-boundaries-june-2025-gcse.pdf", "grade-boundaries-june-2025-notional-component-gcse.pdf"],
  2024: ["grade-boundaries-june-2024-gcse.pdf", "grade-boundaries-june-2024-notional-component-gcse.pdf"],
  2023: ["2306-gcse-9-1-subject-grade-boundaries.pdf", "2306-gcse-9-1-notional-component-grade-boundaries.pdf"],
  2022: ["2206-gcse-9-1-subject-grade-boundaries.pdf", "2206-gcse-9-1-notional-component-grade-boundaries.pdf"],
  2021: ["2111_GCSE_(9-1)_Subject_Grade_Boundaries_V1.pdf", "2111_GCSE_(9-1)_Notional_Component_Grade_Boundaries_V1.pdf"],
  2020: ["grade-boundaries-november-2020-gcse-9-1.pdf", "notional-component-grade-boundaries-november-2020-gcse-9-1.pdf"],
  2019: ["1906-GCSE-9--1-subject-grade-boundaries.pdf", "1906-GCSE-9--1-notional-component-grade-boundaries.pdf"],
};

export const gcseResourceLibrary = [
  {
    year: 2025,
    listeningPaper: "1ru0-1h-que-20250604.pdf",
    listeningMarks: "1ru0-1h-rms-20250821.pdf",
    audio: "1ru0-1h-recording-2506.mp3",
    audioSize: "65.9 MB",
    speakingSize: "11.5 MB",
    readingPaper: "1ru0-3h-que-20250604.pdf",
    readingMarks: "1ru0-3h-rms-20250821.pdf",
    writingPaper: "1ru0-4h-que-20250613.pdf",
    writingMarks: "1ru0-4h-rms-20250821.pdf",
    speaking: "1ru0-2h-speaking-materials-2506.zip",
  },
  {
    year: 2024,
    listeningPaper: "1ru0-1h-que-20240604.pdf",
    listeningMarks: "1ru0-1h-rms-20240822.pdf",
    audio: "1ru0-1h-recording-2406.mp3",
    audioSize: "43.6 MB",
    speakingSize: "9.4 MB",
    readingPaper: "1ru0-3h-que-20240702.pdf",
    readingMarks: "1ru0-3h-rms-20240822.pdf",
    writingPaper: "1ru0-4h-que-20240618.pdf",
    writingMarks: "1ru0-4h-rms-20240822.pdf",
    speaking: "gcse-russian-higher-speaking-materials-2406.zip",
  },
  {
    year: 2023,
    listeningPaper: "1ru0-1h-que-20230609.pdf",
    listeningMarks: "1ru0-1h-rms-20230824.pdf",
    audio: "1RU0_1H_Recording_2306.mp3",
    audioSize: "43.2 MB",
    speakingSize: "15.7 MB",
    readingPaper: "1ru0-3h-que-20230609.pdf",
    readingMarks: "1ru0-3h-rms-20230824.pdf",
    writingPaper: "1ru0-4h-que-20230620.pdf",
    writingMarks: "1ru0-4h-rms-20230824.pdf",
    speaking: "gcse-russian-speaking-materials-higher.zip",
    speakingNote: "One teacher card needs a correction. This ZIP includes the replacement HR5 card (P78201); use it instead of the original HR5 card.",
  },
  {
    year: 2022,
    listeningPaper: "1ru0-1h-que-20220616.pdf",
    listeningMarks: "1ru0-1h-rms-20220825.pdf",
    audio: "1ru0-1h-recording-2206.mp3",
    audioSize: "40 MB",
    speakingSize: "18.8 MB",
    readingPaper: "1ru0-3h-que-20220616.pdf",
    readingMarks: "1ru0-3h-rms-20220825.pdf",
    writingPaper: "1ru0-4h-que-20220629.pdf",
    writingMarks: "1ru0-4h-rms-20220825.pdf",
    speaking: "gcse-russian-higher-paper-2-materials-june-2022.zip",
  },
  {
    year: 2021,
    listeningPaper: "1RU0_1H_que_20211208.pdf",
    listeningMarks: "1RU0_1H_rms_20220224.pdf",
    audio: "1RU0_1H_E1.mp3",
    audioSize: "41.3 MB",
    readingPaper: "1RU0_3H_que_20211208.pdf",
    readingMarks: "1ru0-3h-rms-20220224.pdf",
    writingPaper: "1RU0_4H_que_20211208.pdf",
    writingMarks: "1RU0_4H_rms_20220224.pdf",
  },
  {
    year: 2020,
    listeningPaper: "1RU0_1H_que_20201117.pdf",
    listeningMarks: "1RU0_1H_msc_20210211.pdf",
    audio: "2006-1RU0-1H-E2.mp3",
    audioSize: "39 MB",
    readingPaper: "1RU0_3H_que_20201117.pdf",
    readingMarks: "1RU0_3H_msc_20210211.pdf",
    writingPaper: "1RU0_4H_que_20201120.pdf",
    writingMarks: "1RU0_4H_msc_20210211.pdf",
  },
  {
    year: 2019,
    listeningPaper: "1RU0_1H_que_20190611.pdf",
    listeningMarks: "1RU0_1H_rms_20190822.pdf",
    audio: "Listening examination recording - Paper 1H - June 2019.wav",
    audioSize: "234.6 MB",
    speakingSize: "20.6 MB",
    readingPaper: "1RU0_3H_que_20190611.pdf",
    readingMarks: "1RU0_3H_rms_20190822.pdf",
    writingPaper: "1RU0_4H_que_20190615.pdf",
    writingMarks: "1RU0_4H_rms_20190822.pdf",
    speaking: "1906-1RU0-2H.zip",
  },
].map((series) => ({
  year: series.year,
  title: `${series.year === 2020 || series.year === 2021 ? "November" : "June"} ${series.year}`,
  adapted: series.year === 2020 || series.year === 2021,
  boundaries: boundaries[series.year].map((file, index) => ({
    label: index === 0 ? "Overall grade boundaries" : "Notional paper boundaries",
    href: boundariesBase + file,
  })),
  speakingNote: series.speakingNote,
  papers: [
    { name: "Listening", code: "1RU0/1H", links: [
      { label: "Question paper", file: series.listeningPaper, format: "PDF" },
      { label: "Mark scheme & transcript", file: series.listeningMarks, format: "PDF" },
      { label: "Listening audio", file: series.audio, format: series.audio.endsWith(".wav") ? "WAV" : "MP3", size: series.audioSize },
    ] },
    { name: "Speaking", code: "1RU0/2H", links: [
      ...(series.speaking ? [{ label: "Teacher & candidate materials", file: series.speaking, format: "ZIP", size: series.speakingSize }] : []),
    ] },
    { name: "Reading", code: "1RU0/3H", links: [
      { label: "Question paper", file: series.readingPaper, format: "PDF" },
      { label: "Mark scheme", file: series.readingMarks, format: "PDF" },
    ] },
    { name: "Writing", code: "1RU0/4H", links: [
      { label: "Question paper", file: series.writingPaper, format: "PDF" },
      { label: "Mark scheme", file: series.writingMarks, format: "PDF" },
    ] },
  ].filter((paper) => paper.links.length > 0).map((paper) => ({
    ...paper,
    links: paper.links.map(({ file, ...link }) => ({ ...link, href: base + file })),
  })),
}));
