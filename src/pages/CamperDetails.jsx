import { Link, useParams } from 'react-router-dom';

const campers = [
  {
    id: 1,
    initials: 'SW',
    name: 'Sarah Williams',
    age: 12,
    session: 'Full Day',
    allergies: 'Peanuts',
    parentName: 'Jessica Williams',
    parentPhone: '(208) 555-1029',
    parentEmail: 'jessica@example.com',
    emergencyContact: 'Mark Williams - (208) 555-9088',
    medicalNotes: 'Carries EpiPen. Keep away from peanut products.',
    registeredDates: ['June 3', 'June 4', 'June 5', 'June 6'],
  },
  {
    id: 2,
    initials: 'MC',
    name: 'Michael Chen',
    age: 10,
    session: 'Full Day',
    allergies: '',
    parentName: 'Linda Chen',
    parentPhone: '(208) 555-2211',
    parentEmail: 'linda@example.com',
    emergencyContact: 'David Chen - (208) 555-6677',
    medicalNotes: 'No known medical concerns.',
    registeredDates: ['Full Summer'],
  },
  {
    id: 3,
    initials: 'ET',
    name: 'Emma Thompson',
    age: 11,
    session: 'AM Only',
    allergies: 'Dairy, Shellfish',
    parentName: 'Rachel Thompson',
    parentPhone: '(208) 555-3344',
    parentEmail: 'rachel@example.com',
    emergencyContact: 'Tom Thompson - (208) 555-7788',
    medicalNotes: 'Sensitive stomach. Parent should be contacted if nausea occurs.',
    registeredDates: ['June 10', 'June 11', 'June 12'],
  },
];

export default function CamperDetails() {
  const { id } = useParams();

  const camper = campers.find((camper) => camper.id === Number(id));

  if (!camper) {
    return (
      <div>
        <Link to="/campers">← Back to Campers</Link>
        <h1>Camper not found</h1>
      </div>
    );
  }

  return (
    <div>
      <Link to="/campers" style={styles.backLink}>
        ← Back to Campers
      </Link>

      <div style={styles.profileHeader}>
        <div style={styles.avatar}>{camper.initials}</div>

        <div>
          <h1 style={styles.name}>{camper.name}</h1>
          <p style={styles.subtitle}>
            Age {camper.age} • {camper.session}
          </p>
        </div>
      </div>

      {camper.allergies && (
        <div style={styles.alertBox}>
          ⚠ Allergy Alert: {camper.allergies}
        </div>
      )}

      <div style={styles.grid}>
        <section style={styles.card}>
          <h2>Parent Contact</h2>
          <p><strong>Name:</strong> {camper.parentName}</p>
          <p><strong>Phone:</strong> {camper.parentPhone}</p>
          <p><strong>Email:</strong> {camper.parentEmail}</p>
        </section>

        <section style={styles.card}>
          <h2>Emergency Contact</h2>
          <p>{camper.emergencyContact}</p>
        </section>

        <section style={styles.card}>
          <h2>Medical Notes</h2>
          <p>{camper.medicalNotes}</p>
        </section>

        <section style={styles.card}>
          <h2>Registered Dates</h2>
          {camper.registeredDates.map((date) => (
            <span key={date} style={styles.dateTag}>
              {date}
            </span>
          ))}
        </section>
      </div>
    </div>
  );
}

const styles = {
  backLink: {
    display: 'inline-block',
    marginBottom: '20px',
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: '600',
  },

  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    marginBottom: '20px',
  },

  avatar: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    background: '#16a34a',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
  },

  name: {
    margin: 0,
    fontSize: '34px',
  },

  subtitle: {
    marginTop: '6px',
    color: '#64748b',
    fontSize: '16px',
  },

  alertBox: {
    background: '#fee2e2',
    color: '#991b1b',
    padding: '14px',
    borderRadius: '14px',
    fontWeight: '700',
    marginBottom: '20px',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '18px',
  },

  card: {
    background: 'white',
    borderRadius: '18px',
    padding: '20px',
    border: '1px solid #e5e7eb',
  },

  dateTag: {
    display: 'inline-block',
    background: '#dbeafe',
    color: '#2563eb',
    padding: '6px 10px',
    borderRadius: '999px',
    fontWeight: '600',
    marginRight: '8px',
    marginBottom: '8px',
  },
};