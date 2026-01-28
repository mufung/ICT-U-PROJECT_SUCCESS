 import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";

import Home from "./pages/Home";
import SelectRole from "./pages/SelectRole";
import SelectDepartment from "./pages/SelectDepartment";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

import RequireAuth from "./auth/RequireAuth";

import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/select-department" element={<SelectDepartment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/teacher" element={
            <RequireAuth role="TEACHER">
              <TeacherDashboard />
            </RequireAuth>
          } />

          <Route path="/student" element={
            <RequireAuth role="STUDENT">
              <StudentDashboard />
            </RequireAuth>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}