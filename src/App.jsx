import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import RequireAuth from "./auth/RequireAuth";
import { StudentResultsProvider } from "./state/StudentResultsContext";

/* Pages */
import Home from "./pages/Home";
import SelectRole from "./pages/SelectRole";
import SelectDepartment from "./pages/SelectDepartment";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Confirm from "./pages/Confirm";

/* Teacher */
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import UploadResults from "./pages/teacher/UploadResults";
import ViewComplaints from "./pages/teacher/ViewComplaints";
import ErrorResults from "./pages/teacher/ErrorResults";
import ResultsUnderCorrection from "./pages/teacher/ResultsUnderCorrection";
import CorrectedResults from "./pages/teacher/CorrectedResults";

/* Student */
import StudentDashboard from "./pages/student/StudentDashboard";
import ViewResults from "./pages/student/ViewResults";
import FileComplaint from "./pages/student/FileComplaint";
import StudentErrorResults from "./pages/student/ErrorResults";
import StudentCorrectedResults from "./pages/student/CorrectedResults";

export default function App() {
  return (
    <AuthProvider>
      <StudentResultsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-role" element={<SelectRole />} />
            <Route path="/select-department" element={<SelectDepartment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/confirm" element={<Confirm />} />

            {/* Teacher Routes */}
            <Route path="/teacher" element={<RequireAuth role="TEACHER"><TeacherDashboard /></RequireAuth>} />
            <Route path="/teacher/upload" element={<RequireAuth role="TEACHER"><UploadResults /></RequireAuth>} />
            <Route path="/teacher/complaints" element={<RequireAuth role="TEACHER"><ViewComplaints /></RequireAuth>} />
            <Route path="/teacher/errors" element={<RequireAuth role="TEACHER"><ErrorResults /></RequireAuth>} />
            <Route path="/teacher/under-correction" element={<RequireAuth role="TEACHER"><ResultsUnderCorrection /></RequireAuth>} />
            <Route path="/teacher/corrected" element={<RequireAuth role="TEACHER"><CorrectedResults /></RequireAuth>} />

            {/* Student Routes */}
            <Route path="/student" element={<RequireAuth role="STUDENT"><StudentDashboard /></RequireAuth>} />
            <Route path="/student/results" element={<RequireAuth role="STUDENT"><ViewResults /></RequireAuth>} />
            <Route path="/student/complaint" element={<RequireAuth role="STUDENT"><FileComplaint /></RequireAuth>} />
            <Route path="/student/errors" element={<RequireAuth role="STUDENT"><StudentErrorResults /></RequireAuth>} />
            <Route path="/student/corrected" element={<RequireAuth role="STUDENT"><StudentCorrectedResults /></RequireAuth>} />
          </Routes>
        </BrowserRouter>
      </StudentResultsProvider>
    </AuthProvider>
  );
}
