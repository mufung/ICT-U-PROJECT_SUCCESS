 import { createContext, useContext, useState } from "react";
// FIX: Path matches lowercase "mockresults.js" on GitHub
import { mockResults } from "../data/mockresults"; 
// FIX: Path matches "resultsmodel.js" on GitHub
import { REVIEW_STATUS } from "../models/resultsmodel";

const StudentResultsContext = createContext(null);

export const StudentResultsProvider = ({ children }) => {
  // FIX: Using the exported name 'mockResults'
  const [results, setResults] = useState(mockResults);

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
