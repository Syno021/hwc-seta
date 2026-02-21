import { Card, CardHeader } from '../../components/ui/Card';
import './Support.css';

export function Support() {
  return (
    <div className="support-page">
      <h1 className="page-title">Support / Help Desk</h1>
      <p className="page-intro">Get help with log sheets, documents, attendance, or payments.</p>

      <Card padding="lg">
        <CardHeader title="Contact support" />
        <p className="support-text">Email: <strong>students@hwcseta.org.za</strong></p>
        <p className="support-text">Phone: <strong>+27 (0)11 607 6920</strong></p>
        <p className="support-text">Include your student ID and a short description of the issue.</p>
      </Card>

      <Card padding="lg" className="support-faq">
        <CardHeader title="Frequently asked" />
        <dl className="faq-list">
          <dt>How do I upload a log sheet?</dt>
          <dd>Go to Logbook / Log Sheets, choose your file (PDF), and click Upload.</dd>
          <dt>I was absent during a site visit. What should I submit?</dt>
          <dd>Upload an affidavit under Documents Upload. It will be reviewed by admin.</dd>
          <dt>When will my stipend be paid?</dt>
          <dd>Stipends are processed monthly and typically reflect by the 7th of the following month.</dd>
        </dl>
      </Card>
    </div>
  );
}
