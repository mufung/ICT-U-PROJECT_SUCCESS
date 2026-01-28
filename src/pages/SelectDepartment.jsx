 import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SelectDepartment() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const role = params.get("role");

  // 🔒 HARD BLOCK — role must exist
  useEffect(() => {
    if (!role) {
      navigate("/");
    }
  }, [role, navigate]);

  const departments = ["ICT", "ENGINEERING", "CHEMISTRY"];

  return (
    <div>
      <h2>{role} — Select Department</h2>

      {departments.map((dep) => (
        <button
          key={dep}
          onClick={() =>
            navigate(`/signup?role=${role}&department=${dep}`)
          }
        >
          {dep}
        </button>
      )}

      <hr />

      <button onClick={() => navigate(`/login?role=${role}`)}>
        Already have an account? Login
      </button>
    </div>
  );
}
