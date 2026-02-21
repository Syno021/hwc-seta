import { Card, CardHeader } from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import './Profile.css';

export function Profile() {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <h1 className="page-title">My Profile</h1>

      <Card padding="lg">
        <CardHeader title="Personal information" action={<Button variant="outline">Edit</Button>} />
        <dl className="profile-dl">
          <dt>Full name</dt>
          <dd>{user?.name ?? '—'}</dd>
          <dt>Email</dt>
          <dd>{user?.email ?? '—'}</dd>
          <dt>ID number</dt>
          <dd>••••••••••••••</dd>
          <dt>Phone</dt>
          <dd>+27 XX XXX XXXX</dd>
          <dt>Programme</dt>
          <dd>Internships</dd>
        </dl>
      </Card>

      <Card padding="lg" className="profile-section">
        <CardHeader title="ID document" />
        <p className="profile-upload-hint">Uploaded: id_document.pdf</p>
        <Button variant="outline">Replace document</Button>
      </Card>
    </div>
  );
}
