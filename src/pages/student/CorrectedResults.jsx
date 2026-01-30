 export default function StudentCorrectedResults() {
  // Mock data — will later come from backend
  const results = [
    {
      id: 10,
      course: "Math 101",
      oldScore: 65,
      correctedScore: 72,
      status: "CORRECTED",
    },
    {
      id: 11,
      course: "Chemistry 102",
      oldScore: 40,
      correctedScore: 55,
      status: "CORRECTED",
    },
  ];

  const acceptCorrection = (id) => {
    alert(`Correction accepted for result ID ${id}`);
    // Later → API call: mark as APPROVED
  };

  const reflagCorrection = (id) => {
    alert(`Correction re-flagged for result ID ${id}`);
    // Later → API call: move back to ERROR
  };

  if (results.length === 0) {
    return (
      <div>
        <h2>Corrected Results</h2>
        <p>No corrected results available.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Corrected Results</h2>

      {results.map((result) => (
        <div key={result.id} className="card">
          <p>
            <strong>Course:</strong> {result.course}
          </p>

          <p>
            <strong>Old Score:</strong> {result.oldScore}
          </p>

          <p>
            <strong>Corrected Score:</strong>{" "}
            <span style={{ color: "green" }}>
              {result.correctedScore}
            </span>
          </p>

          <p style={{ color: "green" }}>
            ✅ Corrected by teacher
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => acceptCorrection(result.id)}>
              ✅ Accept
            </button>

            <button onClick={() => reflagCorrection(result.id)}>
              ❌ Still Wrong
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
