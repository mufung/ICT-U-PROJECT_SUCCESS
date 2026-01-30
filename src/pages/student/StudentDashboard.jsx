import { useState } from "react";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  // Centralized student results state (temporary mock)
  const [results] = useState([
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
    {
      id: 3,
      course: "Chemistry 110",
      score: 54,
      reviewStatus: null,
    },
  ]);

  const errorResults = results.filter(
    (r) => r.reviewStatus === "ERROR"
  );

  const correctedResults = results.filter(
    (r) => r.reviewStatus === "CORRECT"
  );

  return (
    <div>
      <h1>Student Dashboard</h1>

      {/* Navigation */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Link to="/student/results">
          <button>All Results</button>
        </Link>

        <Link to="/student/errors">
          <button>
            Error Results ({errorResults.length})
          </button>
        </Link>

        <Link to="/student/corrected">
          <button>
            Corrected Results ({correctedResults.length})
          </button>
        </Link>
      </div>

      {/* Summary Cards */}
      <div style={{ display: "flex", gap: "16px" }}>
        <div className="card">
          <h3>Total Results</h3>
          <p>{results.length}</p>
        </div>

        <div className="card">
          <h3>Errors Marked</h3>
          <p>{errorResults.length}</p>
        </div>

        <div className="card">
          <h3>No Errors</h3>
          <p>{correctedResults.length}</p>
        </div>
      </div>
    </div>
  );
}
