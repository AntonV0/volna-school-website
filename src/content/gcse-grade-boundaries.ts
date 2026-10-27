// Russian Higher 1RU0 only. Checked against Pearson's subject and notional
// component PDFs on 26 October 2026; source URLs live beside each exam series.
// Values are minimum marks for grades 9, 8, 7, 6, 5, 4 and 3, in that order.
export const boundaryGrades = [9, 8, 7, 6, 5, 4, 3] as const;

type BoundaryRow = { name: string; max: number; marks: number[] };
type SeriesBoundaries = { overall: BoundaryRow; papers: BoundaryRow[] };

export const gcseGradeBoundaries: Record<number, SeriesBoundaries> = {
  2025: {
    overall: { name: "Overall", max: 280, marks: [234, 203, 173, 146, 120, 94, 81] },
    papers: [
      { name: "Listening", max: 50, marks: [42, 36, 31, 26, 21, 17, 15] },
      { name: "Speaking", max: 70, marks: [58, 52, 46, 38, 30, 22, 18] },
      { name: "Reading", max: 50, marks: [42, 37, 32, 27, 22, 18, 16] },
      { name: "Writing", max: 60, marks: [50, 41, 33, 28, 24, 20, 18] },
    ],
  },
  2024: {
    overall: { name: "Overall", max: 280, marks: [228, 191, 154, 134, 114, 94, 84] },
    papers: [
      { name: "Listening", max: 50, marks: [41, 34, 27, 23, 20, 17, 15] },
      { name: "Speaking", max: 70, marks: [57, 49, 41, 34, 28, 22, 19] },
      { name: "Reading", max: 50, marks: [40, 34, 28, 24, 21, 18, 16] },
      { name: "Writing", max: 60, marks: [49, 40, 31, 27, 23, 20, 18] },
    ],
  },
  2023: {
    overall: { name: "Overall", max: 280, marks: [234, 194, 154, 133, 113, 93, 83] },
    papers: [
      { name: "Listening", max: 50, marks: [42, 34, 27, 23, 20, 17, 15] },
      { name: "Speaking", max: 70, marks: [58, 49, 41, 34, 28, 22, 19] },
      { name: "Reading", max: 50, marks: [42, 35, 28, 24, 21, 18, 16] },
      { name: "Writing", max: 60, marks: [50, 40, 31, 27, 23, 19, 17] },
    ],
  },
  2022: {
    overall: { name: "Overall", max: 280, marks: [235, 194, 154, 126, 98, 71, 57] },
    papers: [
      { name: "Listening", max: 50, marks: [41, 34, 27, 22, 17, 13, 11] },
      { name: "Speaking", max: 70, marks: [60, 49, 39, 32, 25, 18, 14] },
      { name: "Reading", max: 50, marks: [41, 34, 27, 22, 17, 13, 11] },
      { name: "Writing", max: 60, marks: [52, 43, 34, 27, 20, 14, 11] },
    ],
  },
  2021: {
    overall: { name: "Overall", max: 180, marks: [137, 114, 92, 78, 64, 51, 44] },
    papers: [
      { name: "Listening", max: 50, marks: [38, 32, 26, 22, 18, 14, 12] },
      { name: "Reading", max: 50, marks: [39, 32, 26, 22, 18, 14, 12] },
      { name: "Writing", max: 60, marks: [45, 37, 30, 25, 21, 17, 15] },
    ],
  },
  2020: {
    overall: { name: "Overall", max: 180, marks: [143, 119, 95, 80, 65, 51, 44] },
    papers: [
      { name: "Listening", max: 50, marks: [40, 33, 27, 22, 18, 14, 12] },
      { name: "Reading", max: 50, marks: [41, 34, 27, 22, 18, 14, 12] },
      { name: "Writing", max: 60, marks: [46, 38, 30, 25, 21, 17, 15] },
    ],
  },
  2019: {
    overall: { name: "Overall", max: 280, marks: [229, 192, 156, 135, 114, 93, 82] },
    papers: [
      { name: "Listening", max: 50, marks: [40, 33, 27, 23, 20, 17, 15] },
      { name: "Speaking", max: 70, marks: [63, 53, 43, 36, 29, 22, 18] },
      { name: "Reading", max: 50, marks: [41, 34, 28, 24, 21, 18, 16] },
      { name: "Writing", max: 60, marks: [46, 38, 31, 27, 23, 19, 17] },
    ],
  },
};
