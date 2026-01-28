 import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  return (
    <div className="container">
      <h2>Teacher Dashboard</h2>

      <Link to="/teacher/errors">
        <button>Results With Errors</button>
      </Link>

      <Link to="/teacher/under-correction">
        <button>Results Under Correction</button>
      </Link>

      <Link to="/teacher/corrected">
        <button>Corrected Results</button>
      </Link>
    </div>
  );
}