 import { useState } from "react";

export default function ViewResults() {
  // Temporary mock results (will come from backend later)
  const [results, setResults] = useState([
    {
      id: 1,
      course: "Math 101",
      score: 65,
      reviewStatus: null, // "CORRECT" | "ERROR"
    },
    {
      id: 2,
      course: "Physics 201",
      score: 78,
      reviewStatus: null,
    },
  ]);

  const setReviewStatus = (id, status) => {
    setResults((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, reviewStatus: status } : r
      )
    );
  };

  return (
    <div>
      <h2>My Results</h2>

      {results.map((result) => (
        <div key={result.id} className="card" style={{ position: "relative" }}>
          
          {/* Result Info */}
          <p>
            <strong>Course:</strong> {result.course}
          </p>
          <p>
            <strong>Score:</strong> {result.score}
          </p>

          {/* Review Toggle (Top Right) */}
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              display: "flex",
              gap: "6px",
            }}
          >
            <button
              onClick={() => setReviewStatus(result.id, "CORRECT")}
              style={{
                background:
                  result.reviewStatus === "CORRECT" ? "#2ecc71" : "#ccc",
                border: "none",
                padding: "6px",
                cursor: "pointer",
              }}
            >
              ✅
            </button>

            <button
              onClick={() => setReviewStatus(result.id, "ERROR")}
              style={{
                background:
                  result.reviewStatus === "ERROR" ? "#e74c3c" : "#ccc",
                border: "none",
                padding: "6px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </div>

          {/* Status Label */}
          {result.reviewStatus && (
            <p style={{ marginTop: "10px" }}>
              Status:{" "}
              <strong>
                {result.reviewStatus === "CORRECT"
                  ? "No Error"
                  : "Has Error"}
              </strong>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
