import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import './Documents.css';

const MOCK_DOCS = [
  { id: '1', name: 'Affidavit — 12 Feb site visit', type: 'Affidavit', status: 'pending' as const },
  { id: '2', name: 'Medical certificate — Jan 2025', type: 'Medical', status: 'approved' as const },
  { id: '3', name: 'ID document', type: 'ID', status: 'approved' as const },
];

export function Documents() {
  return (
    <div className="documents-page">
      <h1 className="page-title">Documents Upload</h1>
      <p className="page-intro">Upload affidavits (e.g. for absence during site visit), medical proof, and other supporting documents.</p>

      <Card padding="lg" className="doc-upload">
        <CardHeader title="Upload document" />
        <div className="doc-upload__row">
          <select>
            <option>Affidavit</option>
            <option>Medical proof</option>
            <option>Other</option>
          </select>
          <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
          <Button variant="primary">Upload</Button>
        </div>
      </Card>

      <Card padding="lg">
        <CardHeader title="My documents" />
        <div className="doc-list">
          {MOCK_DOCS.map((d) => (
            <div key={d.id} className="doc-item">
              <div className="doc-item__info">
                <strong>{d.name}</strong>
                <span className="doc-item__type">{d.type}</span>
              </div>
              <StatusBadge status={d.status} />
              <Button variant="ghost">View</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
