import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import './AdminShared.css';

const MOCK_STUDENTS = [
  { id: '1', name: 'John Doe', email: 'john@example.com', programme: 'Internships', status: 'active' as const },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', programme: 'WIL', status: 'pending' as const },
  { id: '3', name: 'Bob Wilson', email: 'bob@example.com', programme: 'Learnerships', status: 'suspended' as const },
];

const statusMap = { active: 'approved', pending: 'pending', suspended: 'rejected' } as const;

export function ManageStudents() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Manage Students</h1>

      <Card padding="lg">
        <CardHeader title="Students" action={<Button variant="primary">Export</Button>} />
        <div className="admin-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Programme</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_STUDENTS.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.programme}</td>
                  <td><StatusBadge status={statusMap[s.status]}>{s.status}</StatusBadge></td>
                  <td>
                    <Button variant="ghost">View</Button>
                    {s.status === 'pending' && <Button variant="primary">Approve</Button>}
                    {s.status === 'active' && <Button variant="outline">Suspend</Button>}
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
