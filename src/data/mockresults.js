import { REVIEW_STATUS, RESULT_STATUS } from "../models/resultModel";

export const mockStudentResults = [
  {
    resultId: "r1",
    batchId: "b1",
    studentId: "student-1",
    courseCode: "CSC101",
    score: 68,
    reviewStatus: REVIEW_STATUS.PENDING,
    complaint: null,
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