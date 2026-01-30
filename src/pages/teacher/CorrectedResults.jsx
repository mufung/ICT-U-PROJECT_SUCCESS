 import { useState } from "react";

export default function StudentCorrectedResults() {
  // Mock corrected result
  const [status, setStatus] = useState("PENDING"); // PENDING | ACCEPTED | REDISPUTED

  const acceptResult = () => {
    setStatus("ACCEPTED");
  };

  const redisputeResult = () => {
    setStatus("REDISPUTED");
  };

  return (
    <div>
      <h2>Corrected Results</h2>

      <div className="card">
        <p><strong>Course:</strong> Math 101</p>
        <p><strong>Corrected Score:</strong> 72</p>

        {status === "PENDING" && (
          <>
            <button
              style={{ backgroundColor: "green", color: "white" }}
              onClick={acceptResult}
            >
              Accept Result
            </button>

            <button
              style={{ backgroundColor: "red", color: "white", marginLeft: 10 }}
              onClick={redisputeResult}
            >
              Re-Dispute
            </button>
          </>
        )}

        {status === "ACCEPTED" && (
          <p style={{ color: "green" }}>
            ✅ Result accepted. This score is now final.
          </p>
        )}

        {status === "REDISPUTED" && (
          <p style={{ color: "red" }}>
            ❌ Result re-disputed. Returned to teacher for review.
          </p>
        )}
      </div>
    </div>
  );
}
