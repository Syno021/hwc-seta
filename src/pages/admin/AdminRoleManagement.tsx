import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import './AdminShared.css';

const MOCK_ADMINS = [
  { id: '1', name: 'Admin User', email: 'admin@hwcseta.gov.za', role: 'Super Admin' },
  { id: '2', name: 'Document Reviewer', email: 'reviewer@hwcseta.gov.za', role: 'Document Reviewer' },
];

export function AdminRoleManagement() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Admin Role Management</h1>
      <p className="page-intro">Manage admin users and their roles (permissions).</p>

      <Card padding="lg">
        <CardHeader title="Admin users" action={<Button variant="primary">Invite admin</Button>} />
        <div className="admin-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ADMINS.map((a) => (
                <tr key={a.id}>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.role}</td>
                  <td><Button variant="ghost">Edit role</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
