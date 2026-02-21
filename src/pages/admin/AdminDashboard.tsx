import { Card, CardHeader } from '../../components/ui/Card';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import './AdminDashboard.css';

const BAR_DATA = [
  { name: 'Jan', students: 42, documents: 38 },
  { name: 'Feb', students: 48, documents: 52 },
  { name: 'Mar', students: 45, documents: 44 },
];

const PIE_DATA = [
  { name: 'Approved', value: 120, color: 'var(--status-approved)' },
  { name: 'Pending', value: 28, color: 'var(--status-pending)' },
  { name: 'Rejected', value: 5, color: 'var(--status-rejected)' },
];

export function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="page-title">Dashboard Overview</h1>

      <div className="admin-stat-cards">
        <Card padding="md" className="admin-stat-card">
          <div className="admin-stat-card__label">Total students</div>
          <div className="admin-stat-card__value">156</div>
        </Card>
        <Card padding="md" className="admin-stat-card">
          <div className="admin-stat-card__label">Pending documents</div>
          <div className="admin-stat-card__value">28</div>
        </Card>
        <Card padding="md" className="admin-stat-card">
          <div className="admin-stat-card__label">Payments this month</div>
          <div className="admin-stat-card__value">R 542,000</div>
        </Card>
        <Card padding="md" className="admin-stat-card">
          <div className="admin-stat-card__label">Site visits (Feb)</div>
          <div className="admin-stat-card__value">12</div>
        </Card>
      </div>

      <div className="admin-charts">
        <Card padding="md" className="admin-chart-card">
          <CardHeader title="Students & documents (monthly)" />
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={BAR_DATA}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="var(--royal-blue)" name="Students" radius={[4, 4, 0, 0]} />
                <Bar dataKey="documents" fill="var(--gold)" name="Documents" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card padding="md" className="admin-chart-card">
          <CardHeader title="Document status" />
          <div className="chart-wrap chart-wrap--pie">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, value }: { name: string; value: number }) => `${name}: ${value}`}
                >
                  {PIE_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card padding="md">
        <CardHeader title="Quick actions" />
        <div className="quick-actions">
          <Link to="/admin/students" className="quick-action">Manage students</Link>
          <Link to="/admin/documents" className="quick-action">Review documents</Link>
          <Link to="/admin/attendance" className="quick-action">Record attendance</Link>
          <Link to="/admin/payments" className="quick-action">Process payments</Link>
        </div>
      </Card>
    </div>
  );
}
