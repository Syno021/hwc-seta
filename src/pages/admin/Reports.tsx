import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './AdminShared.css';

const REPORT_DATA = [
  { programme: 'Internships', count: 68 },
  { programme: 'WIL', count: 42 },
  { programme: 'Learnerships', count: 35 },
  { programme: 'Skills', count: 11 },
];

export function Reports() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Reports & Analytics</h1>

      <Card padding="lg">
        <CardHeader title="Students by programme" action={<Button variant="primary">Export</Button>} />
        <div className="report-chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={REPORT_DATA} layout="vertical" margin={{ left: 80 }}>
              <XAxis type="number" />
              <YAxis type="category" dataKey="programme" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="var(--royal-blue)" name="Students" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card padding="lg" className="reports-section">
        <CardHeader title="Audit trail" />
        <p className="page-intro">Recent system actions (approvals, rejections, role changes) can be exported for compliance.</p>
        <Button variant="outline">Export audit log</Button>
      </Card>
    </div>
  );
}
