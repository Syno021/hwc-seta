import { Card, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import './AdminShared.css';

const MOCK_PROGRAMMES = [
  { id: '1', name: 'Work-Integrated Learning', code: 'WIL', students: 42 },
  { id: '2', name: 'Internships', code: 'INT', students: 68 },
  { id: '3', name: 'Learnerships', code: 'LRN', students: 35 },
];

export function ProgrammeManagement() {
  return (
    <div className="admin-page">
      <h1 className="page-title">Programme Management</h1>

      <Card padding="lg">
        <CardHeader title="Programmes" action={<Button variant="primary">Add programme</Button>} />
        <div className="admin-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Code</th>
                <th>Students</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_PROGRAMMES.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.code}</td>
                  <td>{p.students}</td>
                  <td><Button variant="ghost">Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
