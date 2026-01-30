 import { useNavigate } from "react-router-dom";
import { useStudentResults } from "../../state/StudentResultsContext";
import { REVIEW_STATUS } from "../../models/resultsmodel";

export default function ViewComplaints() {
  const navigate = useNavigate();
  const { results } = useStudentResults();

  const errorResults = results.filter(
    r => r.reviewStatus === REVIEW_STATUS.ERROR
  );

  return (
    <div>
      <h2>Student Complaints</h2>

      {errorResults.length === 0 && (
        <p>No complaints submitted.</p>
      )}

      {errorResults.map(result => (
        <div
          key={result.resultId}
          style={{
            border: "1px solid red",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <p>
            <strong>Student ID:</strong> {result.studentId}
          </p>
          <p>
            <strong>Course:</strong> {result.courseCode}
          </p>
          <p>
            <strong>Score:</strong> {result.score}
          </p>

          <p style={{ color: "red" }}>
            ⚠ Marked as ERROR by student
          </p>

          <button
            onClick={() =>
              navigate(`/teacher/review/${result.resultId}`)
            }
          >
            Review / Edit
          </button>
        </div>
      ))}
    </div>
  );
}
