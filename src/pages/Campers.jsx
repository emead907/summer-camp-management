import { useState } from 'react';
import CamperCard from '../components/CamperCard';

const initialCampers = [
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

  const [campers, setCampers] = useState(initialCampers);
const [showModal, setShowModal] = useState(false);

  const [newCamper, setNewCamper] = useState({
    name: '',
    age: '',
    session: 'Full Day',
    allergies: '',
  });
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
  
        <button style={styles.addButton} onClick={() => setShowModal(true)}>
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
      {showModal && (
  <div style={styles.modalOverlay}>
    <div style={styles.modal}>
      <h2>Add Camper</h2>

      <form onSubmit={handleAddCamper}>
        <input
          type="text"
          placeholder="Camper name"
          value={newCamper.name}
          onChange={(e) =>
            setNewCamper({ ...newCamper, name: e.target.value })
          }
          style={styles.input}
          required
        />

        <input
          type="number"
          placeholder="Age"
          value={newCamper.age}
          onChange={(e) =>
            setNewCamper({ ...newCamper, age: e.target.value })
          }
          style={styles.input}
          required
        />

        <select
          value={newCamper.session}
          onChange={(e) =>
            setNewCamper({ ...newCamper, session: e.target.value })
          }
          style={styles.input}
        >
          <option>Full Day</option>
          <option>AM Only</option>
          <option>PM Only</option>
        </select>

        <input
          type="text"
          placeholder="Allergies"
          value={newCamper.allergies}
          onChange={(e) =>
            setNewCamper({ ...newCamper, allergies: e.target.value })
          }
          style={styles.input}
        />

        <div style={styles.modalActions}>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={styles.cancelButton}
          >
            Cancel
          </button>

          <button type="submit" style={styles.saveButton}>
            Save Camper
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
    
  );
  function handleAddCamper(event) {
    event.preventDefault();
  
    const nameParts = newCamper.name.trim().split(' ');
    const initials = nameParts
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  
    const camperToAdd = {
      id: Date.now(),
      initials,
      name: newCamper.name,
      age: Number(newCamper.age),
      session: newCamper.session,
      allergies: newCamper.allergies,
    };
  
    setCampers([...campers, camperToAdd]);
  
    setNewCamper({
      name: '',
      age: '',
      session: 'Full Day',
      allergies: '',
    });
  
    setShowModal(false);
  }
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
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(15, 23, 42, 0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  modal: {
    background: 'white',
    padding: '28px',
    borderRadius: '18px',
    width: '420px',
    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.25)',
  },
  
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #d1d5db',
    marginBottom: '12px',
    fontSize: '15px',
  },
  
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '10px',
  },
  
  cancelButton: {
    background: '#e5e7eb',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  
  saveButton: {
    background: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};