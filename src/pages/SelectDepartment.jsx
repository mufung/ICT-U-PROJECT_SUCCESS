import { useSearchParams, useNavigate } from "react-router-dom";

export default function SelectDepartment() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const role = params.get("role");
  const department = params.get("department");

  return (
    <div>
      <h2>{role} — {department}</h2>

      <button onClick={() =>
        navigate(`/login?role=${role}&department=${department}`)
      }>
        Login
      </button>

      <button onClick={() =>
        navigate(`/signup?role=${role}&department=${department}`)
      }>
        Sign Up
      </button>
    </div>
  );
}