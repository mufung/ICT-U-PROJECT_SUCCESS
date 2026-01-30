 import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStudentResults } from "../../state/StudentResultsContext";

export default function ReviewComplaint() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    results,
    markUnderCorrection,
    submitCorrection,
  } = useStudentResults();

  const result = results.find(r => r.resultId === id);
  const [score, setScore] = useState("");

  useEffect(() => {
    if (result) {
      markUnderCorrection(result.resultId);
      setScore(result.score);
    }
  }, [result]);

  if (!result) {
    return <p>Result not found.</p>;
  }

  const handleSubmit = () => {
    submitCorrection(result.resultId, Number(score));
    navigate("/teacher/corrected-results");
  };

  return (
    <div>
      <h2>Review Complaint</h2>

      <p><strong>Student:</strong> {result.studentId}</p>
      <p><strong>Course:</strong> {result.courseCode}</p>

      <label>
        Correct Score:
        <input
          type="number"
          value={score}
          onChange={e => setScore(e.target.value)}
        />
      </label>

      <br /><br />

      <button onClick={handleSubmit}>
        Submit Correction
      </button>
    </div>
  );
}
