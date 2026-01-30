import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RequireAuth({ role, department, children }) {
  const { auth } = useAuth();
  const location = useLocation();

  // 1️⃣ Not logged in
  if (!auth || !auth.role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2️⃣ Wrong role
  if (role && auth.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 3️⃣ Wrong department (optional)
  if (department && auth.department !== department) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 4️⃣ Access granted
  return children;
}
