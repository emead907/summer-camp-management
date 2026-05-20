import { useState } from 'react';
import CamperCard from '../components/CamperCard';

const campers = [
  {
    id: 1,
    initials: 'SW',
    name: 'Sarah Williams',
    age: 12,
    session: 'Full Day',
    allergies: 'Peanuts',
  },
  {
    id: 2,
    initials: 'MC',
    name: 'Michael Chen',
    age: 10,
    session: 'Full Day',
    allergies: '',
  },
  {
    id: 3,
    initials: 'ET',
    name: 'Emma Thompson',
    age: 11,
    session: 'AM Only',
    allergies: 'Dairy, Shellfish',
  },
  {
    id: 4,
    initials: 'JR',
    name: 'James Rodriguez',
    age: 13,
    session: 'Full Day',
    allergies: '',
  },
];

export default function Campers() {
  const [searchTerm, setSearchTerm] = useState('');

const filteredCampers = campers.filter((camper) => {
  const searchText = searchTerm.toLowerCase();

  return (
    camper.name.toLowerCase().includes(searchText) ||
    camper.session.toLowerCase().includes(searchText) ||
    camper.allergies.toLowerCase().includes(searchText)
  );
});
  return (
    <div>
  
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Campers</h1>
          <p style={styles.subtitle}>
          {filteredCampers.length} campers shown
          </p>
        </div>
  
        <button style={styles.addButton}>
          + Add Camper
        </button>
      </div>
  
      <input
        type="text"
        placeholder="Search campers..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        style={styles.search}
      />
  
      <div style={{ marginTop: '20px' }}>
            {filteredCampers.map((camper) => (
        <CamperCard key={camper.id} {...camper} />
      ))}
      </div>
  
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },

  title: {
    margin: 0,
    fontSize: '32px',
  },

  subtitle: {
    marginTop: '6px',
    color: '#64748b',
  },

  addButton: {
    background: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '12px 18px',
    borderRadius: '10px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  search: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    outline: 'none',
  },
};