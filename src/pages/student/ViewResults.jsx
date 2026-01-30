import { useStudentResults } from "../../state/StudentResultsContext";
import { REVIEW_STATUS } from "../../models/resultsmodel";

export default function ViewResults() {
  const { results, markResult } = useStudentResults();

  return (
    <div>
      <h2>My Results</h2>

      {results.map(r => (
        <div key={r.resultId} className="card">
          <p><strong>{r.courseCode}</strong> — Score: {r.score}</p>

          <button
            style={{ color: "green" }}
            onClick={() => markResult(r.resultId, REVIEW_STATUS.OK)}
          >
            ✔ No Error
          </button>

          <button
            style={{ color: "red", marginLeft: "10px" }}
            onClick={() => markResult(r.resultId, REVIEW_STATUS.ERROR)}
          >
            ✖ Has Error
          </button>
        </div>
      ))}
    </div>
  );
}
