import { createContext, useContext, useState } from "react";
import { mockResults } from "../data/mockresults";
import { REVIEW_STATUS } from "../models/resultsmodel";

const StudentResultsContext = createContext(null);

export const StudentResultsProvider = ({ children }) => {
  const [results, setResults] = useState(mockResults);

  // STUDENT: mark OK or ERROR
  const markResult = (resultId, status) => {
    setResults(prev =>
      prev.map(r =>
        r.resultId === resultId
          ? { ...r, reviewStatus: status }
          : r
      )
    );
  };

  // TEACHER: start review → UNDER CORRECTION
  const markUnderCorrection = (resultId) => {
    setResults(prev =>
      prev.map(r =>
        r.resultId === resultId
          ? { ...r, reviewStatus: REVIEW_STATUS.PENDING }
          : r
      )
    );
  };

  // TEACHER: submit correction → CORRECTED
  const submitCorrection = (resultId, newScore) => {
    setResults(prev =>
      prev.map(r =>
        r.resultId === resultId
          ? {
              ...r,
              score: newScore,
              reviewStatus: REVIEW_STATUS.CORRECTED,
            }
          : r
      )
    );
  };

  return (
    <StudentResultsContext.Provider
      value={{
        results,
        markResult,
        markUnderCorrection,
        submitCorrection,
      }}
    >
      {children}
    </StudentResultsContext.Provider>
  );
};

export const useStudentResults = () => {
  const ctx = useContext(StudentResultsContext);
  if (!ctx) {
    throw new Error(
      "useStudentResults must be used inside StudentResultsProvider"
    );
  }
  return ctx;
};
