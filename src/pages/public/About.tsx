import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import './About.css';

export function About() {
  return (
    <div className="about-page">
      <div className="about-page__inner">
        <h1 className="about-page__title">About HWC SETA</h1>
        <p className="about-page__lead">
          The Health and Welfare Sector Education and Training Authority (HWC SETA) is committed to skills development and meaningful work experience in the sector.
        </p>

        <section className="about-section">
          <Card padding="lg">
            <h2>Our Mission</h2>
            <p>
              To facilitate quality education and training, internships, and learnerships that build a skilled workforce for the Health and Welfare sector. We support students and employers through a modern, transparent management system.
            </p>
          </Card>
        </section>

        <section className="about-section">
          <h2 className="about-section__heading">What We Offer</h2>
          <div className="about-grid">
            <Card padding="md">
              <h3>Student Progress Tracking</h3>
              <p>Track log sheets, documents, attendance, and stipend status in one place.</p>
            </Card>
            <Card padding="md">
              <h3>Document Management</h3>
              <p>Upload and manage affidavits, medical proof, and other supporting documents with clear approval workflows.</p>
            </Card>
            <Card padding="md">
              <h3>Attendance & Site Visits</h3>
              <p>Record and verify attendance for site visits with options for affidavit when absent.</p>
            </Card>
            <Card padding="md">
              <h3>Stipend & Payments</h3>
              <p>Transparent payment history and approval process for stipends.</p>
            </Card>
          </div>
        </section>

        <section className="about-section">
          <Card padding="lg">
            <h2>Contact</h2>
            <p>For more information, visit our <Link to="/contact">Contact</Link> page.</p>
          </Card>
        </section>
      </div>
    </div>
  );
}
