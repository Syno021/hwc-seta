import { Card, CardHeader } from '../../components/ui/Card';
import './Programmes.css';

const programmes = [
  {
    id: 'wil',
    name: 'Work-Integrated Learning (WIL)',
    description: 'Structured programmes combining academic learning with workplace experience. Students complete logbooks and are assessed on practical competence.',
    duration: '6–12 months',
  },
  {
    id: 'intern',
    name: 'Internships',
    description: 'Graduate and post-graduate internships in the Health and Welfare sector. Includes stipend support and mentorship.',
    duration: '12–24 months',
  },
  {
    id: 'learn',
    name: 'Learnerships',
    description: 'NQF-aligned learnerships with theoretical and practical components. Log sheets and attendance are tracked for certification.',
    duration: '12–18 months',
  },
  {
    id: 'skills',
    name: 'Skills Programmes',
    description: 'Short skills programmes to address specific sector needs. Document uploads and attendance are required for completion.',
    duration: '3–6 months',
  },
];

export function Programmes() {
  return (
    <div className="programmes-page">
      <div className="programmes-page__inner">
        <h1 className="programmes-page__title">Our Programmes</h1>
        <p className="programmes-page__lead">
          HWC SETA offers a range of programmes to build skills and experience in the Health and Welfare sector. Register as a student to apply and track your progress.
        </p>

        <div className="programmes-list">
          {programmes.map((p) => (
            <Card key={p.id} padding="lg" className="programme-block">
              <CardHeader title={p.name} />
              <p className="programme-block__desc">{p.description}</p>
              <p className="programme-block__duration">
                <strong>Typical duration:</strong> {p.duration}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
