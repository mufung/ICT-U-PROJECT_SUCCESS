import { useNavigate, useSearchParams } from "react-router-dom";

export default function ErrorResults() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const resultId = params.get("resultId");

  // Mock complaints data (to be replaced by backend)
  const errorReports = [
    {
      id: 1,
      student: "John Doe",
      matricule: "ICT2021-045",
      course: "Math 101",
      issue: "Score incorrectly added",
      status: "ERROR_REPORTED",
    },
    {
      id: 2,
      student: "Mary Smith",
      matricule: "ICT2021-067",
      course: "Math 101",
      issue: "Missing continuous assessment",
      status: "ERROR_REPORTED",
    },
  ];

  if (!resultId) {
    return <p>No result selected.</p>;
  }

  return (
    <div>
      <h2>Reported Errors — Result #{resultId}</h2>

      {errorReports.length === 0 ? (
        <p>No error reports for this result.</p>
      ) : (
        errorReports.map((report) => (
          <div key={report.id} className="card">
            <p><strong>Student:</strong> {report.student}</p>
            <p><strong>Matricule:</strong> {report.matricule}</p>
            <p><strong>Course:</strong> {report.course}</p>
            <p style={{ color: "red" }}>
              <strong>Issue:</strong> {report.issue}
            </p>

            <button
              onClick={() =>
                navigate(
                  `/teacher/under-correction?resultId=${resultId}&studentId=${report.id}`
                )
              }
            >
              Correct Result
            </button>
          </div>
        ))
      )}
    </div>
  );
}
