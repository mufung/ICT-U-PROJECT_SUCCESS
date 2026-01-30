 import { useNavigate } from "react-router-dom";

export default function StudentErrorResults() {
  const navigate = useNavigate();

  // Temporary mock data (same shape we’ll later fetch from backend)
  const results = [
    {
      id: 1,
      course: "Math 101",
      score: 65,
      reviewStatus: "ERROR",
    },
    {
      id: 2,
      course: "Physics 201",
      score: 78,
      reviewStatus: "CORRECT",
    },
  ];

  const errorResults = results.filter(
    (r) => r.reviewStatus === "ERROR"
  );

  if (errorResults.length === 0) {
    return (
      <div>
        <h2>Error Results</h2>
        <p>No results marked as error.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Error Results</h2>

      {errorResults.map((result) => (
        <div key={result.id} className="card">
          <p>
            <strong>Course:</strong> {result.course}
          </p>
          <p>
            <strong>Score:</strong> {result.score}
          </p>
          <p style={{ color: "red" }}>
            ❌ Marked as Error
          </p>

          <button
            onClick={() =>
              navigate("/student/complaint", {
                state: { resultId: result.id },
              })
            }
          >
            File Complaint
          </button>
        </div>
      ))}
    </div>
  );
}
