import { useParams, useNavigate } from "react-router-dom";
import { useStudentResults } from "../../state/StudentResultsContext";

export default function ReviewComplaint() {
  const { resultId } = useParams();
  const navigate = useNavigate();
  const { results, markUnderCorrection } = useStudentResults();

  const result = results.find(r => r.resultId === resultId);

  if (!result) {
    return <p>Result not found.</p>;
  }

  const handleStartCorrection = () => {
    markUnderCorrection(resultId);
    navigate("/teacher/under-correction");
  };

  return (
    <div>
      <h2>Review Complaint</h2>

      <p><strong>Student ID:</strong> {result.studentId}</p>
      <p><strong>Course:</strong> {result.courseCode}</p>
      <p><strong>Current Score:</strong> {result.score}</p>

      <button onClick={handleStartCorrection}>
        Start Correction
      </button>
    </div>
  );
}
