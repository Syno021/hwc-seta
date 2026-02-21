import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import './AdminShared.css';

const MOCK_VISITS = [
  { id: '1', date: '25 Feb 2025', site: 'Johannesburg', students: 8, recorded: true },
  { id: '2', date: '26 Feb 2025', site: 'Cape Town', students: 5, recorded: false },
];

export function AttendanceManagement() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Attendance Management</h1>
      <p className="page-intro">Record site visits and mark students present or absent.</p>

      <Card padding="lg">
        <CardHeader title="Upcoming / recent site visits" action={<Button variant="primary">Add visit</Button>} />
        <div className="admin-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Site</th>
                <th>Students</th>
                <th>Recorded</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_VISITS.map((v) => (
                <tr key={v.id}>
                  <td>{v.date}</td>
                  <td>{v.site}</td>
                  <td>{v.students}</td>
                  <td>{v.recorded ? 'Yes' : 'No'}</td>
                  <td>
                    <Button variant="primary">Record attendance</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
