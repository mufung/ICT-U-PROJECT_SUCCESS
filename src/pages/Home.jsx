 import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>University Management System</h1>

      <button onClick={() => navigate("/select-role?role=TEACHER")}>
        Teacher Portal
      </button>

      <button onClick={() => navigate("/select-role?role=STUDENT")}>
        Student Portal
      </button>
    </div>
  );
}
