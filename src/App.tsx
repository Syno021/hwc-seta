import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { PublicLayout } from './layouts/PublicLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ProtectedRoute } from './components/ProtectedRoute';

import { Home } from './pages/public/Home';
import { About } from './pages/public/About';
import { Programmes } from './pages/public/Programmes';
import { Contact } from './pages/public/Contact';
import { Login } from './pages/public/Login';
import { Register } from './pages/public/Register';

import { StudentDashboard } from './pages/student/StudentDashboard';
import { Profile } from './pages/student/Profile';
import { Logbook } from './pages/student/Logbook';
import { Documents } from './pages/student/Documents';
import { Attendance } from './pages/student/Attendance';
import { Payments } from './pages/student/Payments';
import { Notifications } from './pages/student/Notifications';
import { Support } from './pages/student/Support';

import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ManageStudents } from './pages/admin/ManageStudents';
import { DocumentManagement } from './pages/admin/DocumentManagement';
import { AttendanceManagement } from './pages/admin/AttendanceManagement';
import { PaymentManagement } from './pages/admin/PaymentManagement';
import { ProgrammeManagement } from './pages/admin/ProgrammeManagement';
import { Reports } from './pages/admin/Reports';
import { Announcements } from './pages/admin/Announcements';
import { AdminRoleManagement } from './pages/admin/AdminRoleManagement';

function DashboardRedirect() {
  const { user } = useAuth();
  if (user?.role === 'admin') return <Navigate to="/admin" replace />;
  return <Navigate to="/student" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRole="student">
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<StudentDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logbook" element={<Logbook />} />
            <Route path="documents" element={<Documents />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="payments" element={<Payments />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="support" element={<Support />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="students" element={<ManageStudents />} />
            <Route path="documents" element={<DocumentManagement />} />
            <Route path="attendance" element={<AttendanceManagement />} />
            <Route path="payments" element={<PaymentManagement />} />
            <Route path="programmes" element={<ProgrammeManagement />} />
            <Route path="reports" element={<Reports />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="roles" element={<AdminRoleManagement />} />
          </Route>

          <Route path="/dashboard" element={<DashboardRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
