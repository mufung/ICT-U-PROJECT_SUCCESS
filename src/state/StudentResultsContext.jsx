 import { createContext, useContext, useState } from "react";
import { mockResults } from "../data/mockresults"; 
import { REVIEW_STATUS } from "../models/resultsmodel";

const StudentResultsContext = createContext(null);

export const StudentResultsProvider = ({ children }) => {
  const [results, setResults] = useState(mockResults);

  // Function for Student to mark OK/Error
  const markResult = (resultId, status) => {
    setResults(prev =>
      prev.map(r =>
        r.resultId === resultId ? { ...r, reviewStatus: status } : r
      )
    );
  };

  // Function for Teacher to mark as Under Correction
  const markUnderCorrection = (resultId) => {
    setResults(prev =>
      prev.map(r =>
        r.resultId === resultId
          ? { ...r, reviewStatus: REVIEW_STATUS.PENDING }
          : r
      )
    );
  };

  // Function for Teacher to update the score
  const updateScore = (resultId, newScore) => {
    setResults(prev =>
      prev.map(r =>
        r.resultId === resultId
          ? { ...r, score: newScore }
          : r
      )
    );
  };

  return (
    <StudentResultsContext.Provider value={{ results, markResult, markUnderCorrection, updateScore }}>
      {children}
    </StudentResultsContext.Provider>
  );
};

// This is the specific part the Teacher's ViewComplaints needs!
export const useStudentResults = () => {
  const ctx = useContext(StudentResultsContext);
  if (!ctx) {
    throw new Error("useStudentResults must be used inside StudentResultsProvider");
  }
  return ctx;
};
