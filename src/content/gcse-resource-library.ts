// Public URLs copied from Pearson's Russian course-materials listing, 20 October 2026.
// Do not derive URLs for restricted series or mirror the documents in this repository.
export const russianMaterialsUrl =
  "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/russian-2017.coursematerials.html";

const base = "https://qualifications.pearson.com/content/dam/pdf/GCSE/Russian/2017/Exam-materials/";

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
].map((series) => ({
  year: series.year,
  speakingNote: series.speakingNote,
  papers: [
    { name: "Listening", code: "1RU0/1H", links: [
      { label: "Question paper", file: series.listeningPaper, format: "PDF" },
      { label: "Mark scheme & transcript", file: series.listeningMarks, format: "PDF" },
      { label: "Listening audio", file: series.audio, format: "MP3", size: series.audioSize },
    ] },
    { name: "Speaking", code: "1RU0/2H", links: [
      { label: "Teacher & candidate materials", file: series.speaking, format: "ZIP", size: series.speakingSize },
    ] },
    { name: "Reading", code: "1RU0/3H", links: [
      { label: "Question paper", file: series.readingPaper, format: "PDF" },
      { label: "Mark scheme", file: series.readingMarks, format: "PDF" },
    ] },
    { name: "Writing", code: "1RU0/4H", links: [
      { label: "Question paper", file: series.writingPaper, format: "PDF" },
      { label: "Mark scheme", file: series.writingMarks, format: "PDF" },
    ] },
  ].map((paper) => ({
    ...paper,
    links: paper.links.map(({ file, ...link }) => ({ ...link, href: base + file })),
  })),
}));
