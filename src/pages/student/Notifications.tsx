import { Card } from '../../components/ui/Card';
import './Notifications.css';

const MOCK_NOTIFS = [
  { id: '1', title: 'Log sheet approved', body: 'Your log sheet for Week 7 has been approved.', time: '2 hours ago', read: true },
  { id: '2', title: 'Document under review', body: 'Your affidavit for 12 Feb site visit is under review.', time: '1 day ago', read: false },
  { id: '3', title: 'Stipend processed', body: 'Your February stipend has been processed.', time: '3 days ago', read: true },
];

export function Notifications() {
  return (
    <div className="notifications-page">
      <h1 className="page-title">Notifications</h1>

      <Card padding="none">
        <ul className="notif-feed">
          {MOCK_NOTIFS.map((n) => (
            <li key={n.id} className={`notif-feed__item ${n.read ? 'notif-feed__item--read' : ''}`}>
              <div className="notif-feed__content">
                <strong>{n.title}</strong>
                <p>{n.body}</p>
                <span className="notif-feed__time">{n.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
