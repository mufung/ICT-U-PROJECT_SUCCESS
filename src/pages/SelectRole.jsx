import { useSearchParams, useNavigate } from "react-router-dom";

export default function SelectRole() {
  const [params] = useSearchParams();
  const role = params.get("role");
  const navigate = useNavigate();

  return (
    <div>
      <h2>{role} — Select Department</h2>

      {["ICT", "ENGINEERING", "CHEMISTRY", "TEST"].map(dep => (
        <button
          key={dep}
          onClick={() =>
            navigate(`/select-department?role=${role}&department=${dep}`)
          }
        >
          {dep}
        </button>
      ))}
    </div>
  );
}