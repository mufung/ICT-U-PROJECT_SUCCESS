import { useNavigate } from "react-router-dom";

export default function SelectRole() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Select Role</h2>

      {["TEACHER", "STUDENT"].map(role => (
        <button
          key={role}
          onClick={() => navigate(`/select-department?role=${role}`)}
        >
          {role}
        </button>
      ))}
    </div>
  );
}
