import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { Role } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRole: Role;
}

export function ProtectedRoute({ children, allowedRole }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role !== allowedRole) {
    const redirect = user.role === 'admin' ? '/admin' : '/student';
    return <Navigate to={redirect} replace />;
  }

  return <>{children}</>;
}
