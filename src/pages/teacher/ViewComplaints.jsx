import { useNavigate } from "react-router-dom";
import { useStudentResults } from "../../state/StudentResultsContext";
import { REVIEW_STATUS } from "../../models/resultsmodel";

export default function ViewComplaints() {
  const { results } = useStudentResults();
  const navigate = useNavigate();

  const complaints = results.filter(
    r => r.reviewStatus === REVIEW_STATUS.ERROR
  );

  return (
    <div>
      <h2>Student Complaints</h2>

      {complaints.length === 0 && (
        <p>No complaints submitted.</p>
      )}

      {complaints.map(r => (
        <div
          key={r.resultId}
          style={{
            border: "1px solid red",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p><strong>Student:</strong> {r.studentId}</p>
          <p><strong>Course:</strong> {r.courseCode}</p>
          <p><strong>Score:</strong> {r.score}</p>

          <button
            onClick={() =>
              navigate(`/teacher/review/${r.resultId}`)
            }
          >
            Review & Edit
          </button>
        </div>
      ))}
    </div>
  );
}
