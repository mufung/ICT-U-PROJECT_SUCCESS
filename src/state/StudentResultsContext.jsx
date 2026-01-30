const markUnderCorrection = (resultId) => {
  setResults(prev =>
    prev.map(r =>
      r.resultId === resultId
        ? { ...r, reviewStatus: REVIEW_STATUS.PENDING }
        : r
    )
  );
};

const updateScore = (resultId, newScore) => {
  setResults(prev =>
    prev.map(r =>
      r.resultId === resultId
        ? { ...r, score: newScore }
        : r
    )
  );
};
