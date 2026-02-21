import { Card, CardHeader } from '../../components/ui/Card';
import { StatusBadge } from '../../components/ui/StatusBadge';
import './Payments.css';

const MOCK_PAYMENTS = [
  { month: 'Feb 2025', amount: 'R 3,500', status: 'approved' as const, date: '7 Feb 2025' },
  { month: 'Jan 2025', amount: 'R 3,500', status: 'approved' as const, date: '7 Jan 2025' },
  { month: 'Dec 2024', amount: 'R 3,500', status: 'approved' as const, date: '9 Dec 2024' },
];

export function Payments() {
  return (
    <div className="payments-page">
      <h1 className="page-title">Payments (Stipend history)</h1>
      <p className="page-intro">View your stipend payment history and status.</p>

      <Card padding="lg">
        <CardHeader title="Payment history" />
        <div className="payments-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Processed</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_PAYMENTS.map((row, i) => (
                <tr key={i}>
                  <td>{row.month}</td>
                  <td>{row.amount}</td>
                  <td><StatusBadge status={row.status} /></td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
