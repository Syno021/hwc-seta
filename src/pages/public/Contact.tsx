import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import './Contact.css';

export function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-page__inner">
        <h1 className="contact-page__title">Contact Us</h1>
        <p className="contact-page__lead">
          Get in touch with HWC SETA for programme enquiries, support, or partnership opportunities.
        </p>

        <div className="contact-grid">
          <Card padding="lg" className="contact-card">
            <h2>General Enquiries</h2>
            <p><strong>Email:</strong> info@hwcseta.org.za</p>
            <p><strong>Phone:</strong> +27 (0)11 607 6900</p>
          </Card>
          <Card padding="lg" className="contact-card">
            <h2>Student & Programme Support</h2>
            <p><strong>Email:</strong> students@hwcseta.org.za</p>
            <p><strong>Phone:</strong> +27 (0)11 607 6920</p>
          </Card>
        </div>

        <Card padding="lg" className="contact-form-card">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="your@email.com" />
            </label>
            <label>
              <span>Subject</span>
              <input type="text" placeholder="Subject" />
            </label>
            <label>
              <span>Message</span>
              <textarea rows={4} placeholder="Your message..." />
            </label>
            <Button type="submit" variant="primary">Send Message</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
