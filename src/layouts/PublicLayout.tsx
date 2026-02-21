import { Outlet, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import './PublicLayout.css';

export function PublicLayout() {
  return (
    <div className="public-layout">
      <header className="public-header">
        <div className="public-header__inner">
          <Link to="/" className="public-logo">
            <span className="public-logo__icon">HWC</span>
            <span className="public-logo__text">SETA</span>
          </Link>
          <nav className="public-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login" className="public-nav__login">Login</Link>
            <Link to="/register">
              <Button variant="gold" className="public-nav__register">Register</Button>
            </Link>
          </nav>
          <button type="button" className="public-header__menu" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <main className="public-main">
        <Outlet />
      </main>
      <footer className="public-footer">
        <div className="public-footer__inner">
          <div className="public-footer__brand">
            <strong>HWC SETA</strong> — Internship & Student Management
          </div>
          <div className="public-footer__links">
            <Link to="/about">About</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p className="public-footer__copy">© {new Date().getFullYear()} HWC SETA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
