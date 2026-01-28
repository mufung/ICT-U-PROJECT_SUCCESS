 import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // 🔁 Restore session on reload
  useEffect(() => {
    const stored = localStorage.getItem("unimanage_auth");
    if (stored) {
      setAuth(JSON.parse(stored));
    }
  }, []);

  const login = ({ role, department, token }) => {
    const authData = { role, department, token };
    setAuth(authData);
    localStorage.setItem("unimanage_auth", JSON.stringify(authData));
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("unimanage_auth");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
