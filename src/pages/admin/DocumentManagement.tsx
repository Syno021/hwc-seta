import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import './AdminShared.css';

const MOCK_DOCS = [
  { id: '1', student: 'John Doe', type: 'Affidavit', description: '12 Feb site visit', status: 'pending' as const },
  { id: '2', student: 'Jane Smith', type: 'Medical', description: 'Medical certificate', status: 'pending' as const },
];

export function DocumentManagement() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Document Management</h1>
      <p className="page-intro">Approve or reject student documents. Add comments for rejections.</p>

      <Card padding="lg">
        <CardHeader title="Pending documents" />
        <div className="admin-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Type</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DOCS.map((d) => (
                <tr key={d.id}>
                  <td>{d.student}</td>
                  <td>{d.type}</td>
                  <td>{d.description}</td>
                  <td><StatusBadge status={d.status} /></td>
                  <td>
                    <Button variant="primary">Approve</Button>
                    <Button variant="outline">Reject</Button>
                    <Button variant="ghost">View</Button>
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
