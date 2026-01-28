import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RequireAuth({ role, children }) {
  const { auth } = useAuth();

  if (!auth) return <Navigate to="/" />;
  if (auth.role !== role) return <Navigate to="/" />;

  return children;
}