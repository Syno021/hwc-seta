import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__title">
            HWC SETA — Internship & Student Management
          </h1>
          <p className="hero__subtitle">
            Building skills for the Health and Welfare sector. Register for programmes, track your progress, and manage your internship with one secure platform.
          </p>
          <div className="hero__actions">
            <Link to="/register">
              <Button variant="gold" className="hero__cta">Register as Student</Button>
            </Link>
            <Link to="/programmes">
              <Button variant="outline" className="hero__cta hero__cta--light">View Programmes</Button>
            </Link>
          </div>
        </div>
        <div className="hero__accent" aria-hidden="true" />
      </section>

      <section className="home-section home-about">
        <div className="home-section__inner">
          <h2 className="home-section__title">About HWC SETA</h2>
          <p className="home-section__text">
            The Health and Welfare Sector Education and Training Authority (HWC SETA) facilitates skills development and internships across the sector. Our system supports students and administrators with progress tracking, log sheets, document management, attendance, and stipend processing — all in one place.
          </p>
          <Link to="/about">
            <Button variant="secondary">Learn more</Button>
          </Link>
        </div>
      </section>

      <section className="home-section home-programmes">
        <div className="home-section__inner">
          <h2 className="home-section__title">Our Programmes</h2>
          <div className="programme-cards">
            {['Work-Integrated Learning', 'Internships', 'Learnerships', 'Skills Programmes'].map((name, i) => (
              <div key={name} className="programme-card">
                <div className="programme-card__icon">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="programme-card__title">{name}</h3>
                <p className="programme-card__desc">Structured learning and workplace experience in the HWC sector.</p>
                <Link to="/programmes">View details →</Link>
              </div>
            ))}
          </div>
          <Link to="/programmes">
            <Button variant="outline">All Programmes</Button>
          </Link>
        </div>
      </section>

      <section className="home-section home-announcements">
        <div className="home-section__inner">
          <h2 className="home-section__title">Announcements</h2>
          <ul className="announcement-list">
            <li className="announcement-item">
              <span className="announcement-item__date">21 Feb 2025</span>
              <span className="announcement-item__text">Log sheet submission deadline for February: 28 Feb 2025.</span>
            </li>
            <li className="announcement-item">
              <span className="announcement-item__date">15 Feb 2025</span>
              <span className="announcement-item__text">New document types for affidavit uploads are now accepted for site visit absences.</span>
            </li>
            <li className="announcement-item">
              <span className="announcement-item__date">01 Feb 2025</span>
              <span className="announcement-item__text">Stipend processing schedule updated. Payments will reflect by the 7th of each month.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="home-section home-contact">
        <div className="home-section__inner">
          <h2 className="home-section__title">Get in Touch</h2>
          <p className="home-section__text">
            For programme enquiries, support, or partnership opportunities, contact HWC SETA.
          </p>
          <Link to="/contact">
            <Button variant="gold">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
