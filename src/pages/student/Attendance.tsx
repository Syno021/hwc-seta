import { Card, CardHeader } from '../../components/ui/Card';
import './Attendance.css';

const MOCK_RECORDS = [
  { date: '18 Feb 2025', site: 'Site visit — Johannesburg', status: 'Present' },
  { date: '12 Feb 2025', site: 'Site visit — Johannesburg', status: 'Absent (affidavit submitted)' },
  { date: '05 Feb 2025', site: 'Site visit — Johannesburg', status: 'Present' },
];

export function Attendance() {
  return (
    <div className="attendance-page">
      <h1 className="page-title">Attendance Records</h1>
      <p className="page-intro">View your attendance for site visits and related activities.</p>

      <Card padding="lg">
        <CardHeader title="Attendance history" />
        <div className="attendance-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity / Site</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_RECORDS.map((row, i) => (
                <tr key={i}>
                  <td>{row.date}</td>
                  <td>{row.site}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
