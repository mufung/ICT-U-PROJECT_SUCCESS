 import { Link } from "react-router-dom";

export default function StudentDashboard() {
  return (
    <div className="container">
      <h2>Student Dashboard</h2>

      <Link to="/student/errors">
        <button>My Complaints</button>
      </Link>

      <Link to="/student/corrected">
        <button>Corrected Results</button>
      </Link>
    </div>
  );
}