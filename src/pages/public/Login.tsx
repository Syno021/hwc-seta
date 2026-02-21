import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import type { Role } from '../../context/AuthContext';
import './Auth.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('student');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, role);
    if (role === 'admin') navigate('/admin');
    else navigate('/student');
  };

  return (
    <div className="auth-page">
      <div className="auth-page__box">
        <h1 className="auth-page__title">Sign In</h1>
        <p className="auth-page__subtitle">HWC SETA Internship & Student Management</p>

        <Card padding="lg">
          <form onSubmit={handleSubmit} className="auth-form">
            <label>
              <span>Role</span>
              <select value={role} onChange={(e) => setRole(e.target.value as Role)}>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </label>
            <Button type="submit" variant="primary" fullWidth>
              Sign In
            </Button>
          </form>
        </Card>

        <p className="auth-page__footer">
          Students: <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
