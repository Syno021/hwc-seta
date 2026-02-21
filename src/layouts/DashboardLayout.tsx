import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './DashboardLayout.css';

const studentNav = [
  { to: '/student', label: 'Dashboard' },
  { to: '/student/profile', label: 'My Profile' },
  { to: '/student/logbook', label: 'Logbook / Log Sheets' },
  { to: '/student/documents', label: 'Documents Upload' },
  { to: '/student/attendance', label: 'Attendance Records' },
  { to: '/student/payments', label: 'Payments' },
  { to: '/student/notifications', label: 'Notifications' },
  { to: '/student/support', label: 'Support / Help Desk' },
];

const adminNav = [
  { to: '/admin', label: 'Dashboard' },
  { to: '/admin/students', label: 'Manage Students' },
  { to: '/admin/documents', label: 'Document Management' },
  { to: '/admin/attendance', label: 'Attendance Management' },
  { to: '/admin/payments', label: 'Payment Management' },
  { to: '/admin/programmes', label: 'Programme Management' },
  { to: '/admin/reports', label: 'Reports & Analytics' },
  { to: '/admin/announcements', label: 'Announcements' },
  { to: '/admin/roles', label: 'Admin Role Management' },
];

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isStudent = user?.role === 'student';
  const nav = isStudent ? studentNav : adminNav;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'dashboard-sidebar--open' : ''}`}>
        <div className="dashboard-sidebar__head">
          <Link to={isStudent ? '/student' : '/admin'} className="dashboard-sidebar__logo">
            <span className="dashboard-sidebar__logo-icon">HWC</span>
            <span>SETA</span>
          </Link>
          <button
            type="button"
            className="dashboard-sidebar__close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="dashboard-sidebar__nav">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`dashboard-sidebar__link ${location.pathname === item.to ? 'dashboard-sidebar__link--active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-header">
          <button
            type="button"
            className="dashboard-header__menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
          <div className="dashboard-header__right">
            <span className="dashboard-header__user">
              {user?.name ?? user?.email} <em>({user?.role})</em>
            </span>
            <button type="button" className="dashboard-header__logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>

      <div
        className={`dashboard-overlay ${sidebarOpen ? 'dashboard-overlay--open' : ''}`}
        role="button"
        tabIndex={0}
        onClick={() => setSidebarOpen(false)}
        onKeyDown={(e) => e.key === 'Escape' && setSidebarOpen(false)}
        aria-label="Close overlay"
        aria-hidden={!sidebarOpen}
      />
    </div>
  );
}
