import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import './AdminShared.css';

const MOCK_ANNOUNCEMENTS = [
  { id: '1', title: 'Log sheet deadline — February', date: '21 Feb 2025', active: true },
  { id: '2', title: 'Affidavit document types updated', date: '15 Feb 2025', active: true },
];

export function Announcements() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Announcements</h1>

      <Card padding="lg">
        <CardHeader title="Announcements" action={<Button variant="primary">New announcement</Button>} />
        <div className="admin-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ANNOUNCEMENTS.map((a) => (
                <tr key={a.id}>
                  <td>{a.title}</td>
                  <td>{a.date}</td>
                  <td>{a.active ? 'Yes' : 'No'}</td>
                  <td><Button variant="ghost">Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
