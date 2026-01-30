import { createContext, useContext, useState } from "react";
import { mockStudentResults } from "../data/mockResults";
import { REVIEW_STATUS } from "../models/resultModel";

const StudentResultsContext = createContext(null);

export const StudentResultsProvider = ({ children }) => {
  const [results, setResults] = useState(mockStudentResults);

  const markResult = (resultId, status) => {
    setResults(prev =>
      prev.map(r =>
        r.resultId === resultId
          ? { ...r, reviewStatus: status }
          : r
      )
    );
  };

  return (
    <StudentResultsContext.Provider value={{ results, markResult }}>
      {children}
    </StudentResultsContext.Provider>
  );
};

export const useStudentResults = () => {
  const ctx = useContext(StudentResultsContext);
  if (!ctx) {
    throw new Error("useStudentResults must be used inside StudentResultsProvider");
  }
  return ctx;
};