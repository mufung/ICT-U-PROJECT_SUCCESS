import { useStudentResults } from "../../state/StudentResultsContext";
import { REVIEW_STATUS } from "../../models/resultsmodel";

export default function ResultsUnderCorrection() {
  const { results } = useStudentResults();

  const underCorrection = results.filter(
    r => r.reviewStatus === REVIEW_STATUS.PENDING
  );

  return (
    <div>
      <h2>Results Under Correction</h2>

      {underCorrection.length === 0 && (
        <p>No results under correction.</p>
      )}

      {underCorrection.map(r => (
        <div
          key={r.resultId}
          style={{
            border: "1px solid orange",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p><strong>Student:</strong> {r.studentId}</p>
          <p><strong>Course:</strong> {r.courseCode}</p>
          <p><strong>Score:</strong> {r.score}</p>
        </div>
      ))}
    </div>
  );
}
