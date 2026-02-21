import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import './AdminShared.css';

const MOCK_PAYMENTS = [
  { id: '1', student: 'John Doe', month: 'Feb 2025', amount: 'R 3,500', status: 'pending' as const },
  { id: '2', student: 'Jane Smith', month: 'Feb 2025', amount: 'R 3,500', status: 'approved' as const },
];

export function PaymentManagement() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Payment Management</h1>
      <p className="page-intro">Approve stipends and export payment reports.</p>

      <Card padding="lg">
        <CardHeader title="Stipend approvals" action={<Button variant="primary">Export report</Button>} />
        <div className="admin-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Month</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_PAYMENTS.map((p) => (
                <tr key={p.id}>
                  <td>{p.student}</td>
                  <td>{p.month}</td>
                  <td>{p.amount}</td>
                  <td><StatusBadge status={p.status} /></td>
                  <td>
                    {p.status === 'pending' && <Button variant="primary">Approve</Button>}
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
