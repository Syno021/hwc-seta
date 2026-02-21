import { Card, CardHeader } from '../../components/ui/Card';
import { StatusBadge } from '../../components/ui/StatusBadge';
import './StudentDashboard.css';

export function StudentDashboard() {
  const profileComplete = 75;
  const attendanceRate = 92;
  const pendingDocs = 2;
  const nextPayment = 'R 3,500 — Mar 2025';

  return (
    <div className="student-dashboard">
      <h1 className="page-title">Dashboard Overview</h1>

      <div className="stat-cards">
        <Card padding="md" className="stat-card">
          <div className="stat-card__label">Profile completion</div>
          <div className="stat-card__value">{profileComplete}%</div>
          <div className="stat-card__bar">
            <div className="stat-card__bar-fill" style={{ width: `${profileComplete}%` }} />
          </div>
        </Card>
        <Card padding="md" className="stat-card">
          <div className="stat-card__label">Attendance rate</div>
          <div className="stat-card__value">{attendanceRate}%</div>
        </Card>
        <Card padding="md" className="stat-card">
          <div className="stat-card__label">Pending documents</div>
          <div className="stat-card__value">{pendingDocs}</div>
        </Card>
        <Card padding="md" className="stat-card">
          <div className="stat-card__label">Next stipend</div>
          <div className="stat-card__value stat-card__value--small">{nextPayment}</div>
        </Card>
      </div>

      <div className="dashboard-grid">
        <Card padding="md">
          <CardHeader title="Recent notifications" />
          <ul className="notif-list">
            <li>Log sheet for Week 7 approved.</li>
            <li>Affidavit for 12 Feb site visit is under review.</li>
            <li>Stipend for February processed.</li>
          </ul>
        </Card>
        <Card padding="md">
          <CardHeader title="Document status" />
          <table className="mini-table">
            <thead>
              <tr>
                <th>Document</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Log sheet — Week 7</td>
                <td><StatusBadge status="approved" /></td>
              </tr>
              <tr>
                <td>Affidavit (12 Feb)</td>
                <td><StatusBadge status="pending" /></td>
              </tr>
              <tr>
                <td>ID copy</td>
                <td><StatusBadge status="approved" /></td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
