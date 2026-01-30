 import { REVIEW_STATUS, RESULT_STATUS } from "../models/resultsmodel";

export const mockResults = [
  {
    resultId: "r1",
    batchId: "b1",
    studentId: "student-1",
    courseCode: "CSC101",
    score: 68,
    reviewStatus: REVIEW_STATUS.ERROR,
  },
];

export const mockBatches = [
  {
    batchId: "b1",
    courseCode: "CSC101",
    department: "CS",
    status: RESULT_STATUS.PUBLISHED,
  },
];
