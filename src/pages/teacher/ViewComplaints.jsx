 import { useNavigate } from "react-router-dom";

export default function ViewComplaints() {
  const navigate = useNavigate();

  // Mock data — backend will replace this
  const uploadedResults = [
    {
      id: 1,
      course: "Math 101",
      totalStudents: 100,
      errorCount: 12,
    },
    {
      id: 2,
      course: "Physics 201",
      totalStudents: 80,
      errorCount: 3,
    },
  ];

  if (uploadedResults.length === 0) {
    return (
      <div>
        <h2>Complaints</h2>
        <p>No complaints available.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Student Complaints Overview</h2>

      {uploadedResults.map((result) => (
        <div key={result.id} className="card">
          <p>
            <strong>Course:</strong> {result.course}
          </p>

          <p>
            <strong>Total Students:</strong> {result.totalStudents}
          </p>

          <p style={{ color: result.errorCount > 0 ? "red" : "green" }}>
            <strong>Error Complaints:</strong> {result.errorCount}
          </p>

          <button
            disabled={result.errorCount === 0}
            onClick={() =>
              navigate(`/teacher/errors?resultId=${result.id}`)
            }
          >
            Review Errors
          </button>
        </div>
      ))}
    </div>
  );
}
