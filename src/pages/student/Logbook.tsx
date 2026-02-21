import { useState } from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import './Logbook.css';

const MOCK_ENTRIES = [
  { id: '1', week: 'Week 7', date: '10–16 Feb 2025', status: 'approved' as const, file: 'log_sheet_week7.pdf' },
  { id: '2', week: 'Week 6', date: '3–9 Feb 2025', status: 'approved' as const, file: 'log_sheet_week6.pdf' },
  { id: '3', week: 'Week 5', date: '27 Jan – 2 Feb 2025', status: 'pending' as const, file: 'log_sheet_week5.pdf' },
];

export function Logbook() {
  const [uploading] = useState(false);

  return (
    <div className="logbook-page">
      <h1 className="page-title">Logbook / Log Sheets</h1>

      <Card padding="lg" className="logbook-upload">
        <CardHeader title="Upload log sheet" />
        <p className="logbook-upload__hint">Upload your weekly log sheet (PDF). Max 10MB.</p>
        <div className="logbook-upload__row">
          <input type="file" accept=".pdf" />
          <Button variant="primary" disabled={uploading}>{uploading ? 'Uploading…' : 'Upload'}</Button>
        </div>
      </Card>

      <Card padding="lg">
        <CardHeader title="Submitted log sheets" />
        <div className="logbook-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Period</th>
                <th>File</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ENTRIES.map((row) => (
                <tr key={row.id}>
                  <td>{row.week}</td>
                  <td>{row.date}</td>
                  <td>{row.file}</td>
                  <td><StatusBadge status={row.status} /></td>
                  <td><Button variant="ghost">View</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
