 import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RequireAuth({ role, department, children }) {
  const { auth } = useAuth();

  if (!auth) return <Navigate to="/" replace />;

  if (auth.role !== role) return <Navigate to="/" replace />;

  if (department && auth.department !== department)
    return <Navigate to="/" replace />;

  return children;
}
