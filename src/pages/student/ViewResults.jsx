import { useStudentResults } from "../../state/StudentResultsContext";
import { REVIEW_STATUS } from "../../models/resultsmodel";

export default function ViewResults() {
  const { results, markResult } = useStudentResults();

  return (
    <div>
      <h2>My Results</h2>

      {results.map(result => (
        <div
          key={result.resultId}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <p>
            <strong>Course:</strong> {result.courseCode}
          </p>
          <p>
            <strong>Score:</strong> {result.score}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {result.reviewStatus}
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{ background: "green", color: "white" }}
              onClick={() =>
                markResult(result.resultId, REVIEW_STATUS.OK)
              }
            >
              ✔ No Error
            </button>

            <button
              style={{ background: "red", color: "white" }}
              onClick={() =>
                markResult(result.resultId, REVIEW_STATUS.ERROR)
              }
            >
              ✖ Has Error
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
