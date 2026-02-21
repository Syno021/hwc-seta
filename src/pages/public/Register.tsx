import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import './Auth.css';

const PROGRAMMES = ['Work-Integrated Learning', 'Internships', 'Learnerships', 'Skills Programmes'];

export function Register() {
  const [form, setForm] = useState({
    fullName: '',
    idNumber: '',
    email: '',
    phone: '',
    programme: PROGRAMMES[0],
    password: '',
    confirmPassword: '',
  });
  const [idFile, setIdFile] = useState<File | null>(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return;
    register({
      fullName: form.fullName,
      idNumber: form.idNumber,
      email: form.email,
      phone: form.phone,
      programme: form.programme,
      password: form.password,
      idDocument: idFile ?? undefined,
    });
    navigate('/student');
  };

  return (
    <div className="auth-page">
      <div className="auth-page__box auth-page__box--wide">
        <h1 className="auth-page__title">Student Registration</h1>
        <p className="auth-page__subtitle">Create an account to manage your internship and documents</p>

        <Card padding="lg">
          <form onSubmit={handleSubmit} className="auth-form">
            <label>
              <span>Full Name</span>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
            </label>
            <label>
              <span>ID Number</span>
              <input
                type="text"
                name="idNumber"
                value={form.idNumber}
                onChange={handleChange}
                placeholder="South African ID"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
              />
            </label>
            <label>
              <span>Programme</span>
              <select name="programme" value={form.programme} onChange={handleChange}>
                {PROGRAMMES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Upload ID Document</span>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setIdFile(e.target.files?.[0] ?? null)}
              />
              <small>PDF or image. Max 5MB.</small>
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                minLength={8}
              />
            </label>
            <label>
              <span>Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </label>
            <Button type="submit" variant="gold" fullWidth>
              Register
            </Button>
          </form>
        </Card>

        <p className="auth-page__footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
