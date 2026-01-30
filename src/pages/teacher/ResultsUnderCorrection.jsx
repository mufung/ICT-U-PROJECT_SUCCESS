import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function ResultsUnderCorrection() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const resultId = params.get("resultId");
  const studentId = params.get("studentId");

  // Mock result data (will come from backend later)
  const [score, setScore] = useState(65);

  if (!resultId || !studentId) {
    return <p>Invalid correction context.</p>;
  }

  const saveCorrection = () => {
    // Later: API call → update result + status = CORRECTED
    navigate("/teacher/corrected");
  };

  return (
    <div>
      <h2>Result Under Correction</h2>

      <div className="card">
        <p><strong>Course:</strong> Math 101</p>
        <p><strong>Student ID:</strong> {studentId}</p>

        <label>
          Corrected Score:
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </label>

        <br /><br />

        <button onClick={saveCorrection}>
          Save Correction
        </button>
      </div>
    </div>
  );
}
