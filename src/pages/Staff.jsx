import { useState } from 'react';

const initialShifts = [
  {
    id: 1,
    date: '2026-06-01',
    title: 'Morning Camp',
    time: '8:00 AM - 12:30 PM',
    role: 'Lead Coach',
    status: 'Open',
    assignedTo: '',
  },
  {
    id: 2,
    date: '2026-06-01',
    title: 'Afternoon Camp',
    time: '12:30 PM - 5:00 PM',
    role: 'Assistant Coach',
    status: 'Open',
    assignedTo: '',
  },
  {
    id: 3,
    date: '2026-06-02',
    title: 'Field Trip Day',
    time: '9:00 AM - 4:00 PM',
    role: 'Driver / Counselor',
    status: 'Accepted',
    assignedTo: 'Coach Emily',
  },
];

export default function Staff() {
  const [shifts, setShifts] = useState(initialShifts);

  const [showModal, setShowModal] = useState(false);

  const [newShift, setNewShift] = useState({
    date: '',
    title: '',
    time: '',
    role: '',
  });

  function acceptShift(id) {
    setShifts(
      shifts.map((shift) =>
        shift.id === id
          ? {
              ...shift,
              status: 'Accepted',
              assignedTo: 'Coach Emily',
            }
          : shift
      )
    );
  }

  function requestCoverage(id) {
    setShifts(
      shifts.map((shift) =>
        shift.id === id
          ? {
              ...shift,
              status: 'Needs Coverage',
            }
          : shift
      )
    );
  }

  function createShift(event) {
    event.preventDefault();
  
    const shiftToAdd = {
      id: Date.now(),
      date: newShift.date,
      title: newShift.title,
      time: newShift.time,
      role: newShift.role,
      status: 'Open',
      assignedTo: '',
    };
  
    setShifts([...shifts, shiftToAdd]);
  
    setNewShift({
      date: '',
      title: '',
      time: '',
      role: '',
    });
  
    setShowModal(false);
  }

  const openShifts = shifts.filter(
    (shift) => shift.status === 'Open' || shift.status === 'Needs Coverage'
  );

  const myShifts = shifts.filter(
    (shift) => shift.assignedTo === 'Coach Emily'
  );

  return (
    <div>
      <h1>Staff Shifts</h1>

      <div style={styles.topBar}>
        <button
          style={styles.createButton}
          onClick={() => setShowModal(true)}
        >
          + Create Shift
        </button>
      </div>


      <div style={styles.grid}>
        
        <section style={styles.section}>
          <h2>Open Shifts</h2>

          {openShifts.map((shift) => (
            <div key={shift.id} style={styles.card}>
              <h3 style={styles.shiftTitle}>{shift.title}</h3>

              <p style={styles.text}>{shift.date}</p>
              <p style={styles.text}>{shift.time}</p>
              <p style={styles.role}>{shift.role}</p>

              {shift.status === 'Needs Coverage' && (
                <p style={styles.needsCoverage}>
                  Coverage needed for {shift.assignedTo}
                </p>
              )}

              <button
                style={styles.acceptButton}
                onClick={() => acceptShift(shift.id)}
              >
                Accept Shift
              </button>
            </div>
            
          ))}
        </section>

        <section style={styles.section}>
          <h2>My Shifts</h2>

          {myShifts.map((shift) => (
            <div key={shift.id} style={styles.card}>
              <h3 style={styles.shiftTitle}>{shift.title}</h3>

              <p style={styles.text}>{shift.date}</p>
              <p style={styles.text}>{shift.time}</p>

              <p style={styles.assigned}>
                Assigned to {shift.assignedTo}
              </p>
              {shift.status === 'Accepted' && (
              <button
                style={styles.coverageButton}
                onClick={() => requestCoverage(shift.id)}
              >
                Request Coverage
              </button>
            )}

            {shift.status === 'Needs Coverage' && (
              <p style={styles.needsCoverage}>
                Coverage requested — still your shift until accepted
              </p>
            )}
            </div>
          ))}
        </section>

      </div>
      {showModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modal}>
              <h2>Create Shift</h2>

              <form onSubmit={createShift}>
                
                <input
                  type="date"
                  value={newShift.date}
                  onChange={(e) =>
                    setNewShift({ ...newShift, date: e.target.value })
                  }
                  style={styles.input}
                  required
                />

                <input
                  type="text"
                  placeholder="Shift title"
                  value={newShift.title}
                  onChange={(e) =>
                    setNewShift({ ...newShift, title: e.target.value })
                  }
                  style={styles.input}
                  required
                />

                <input
                  type="text"
                  placeholder="Shift time"
                  value={newShift.time}
                  onChange={(e) =>
                    setNewShift({ ...newShift, time: e.target.value })
                  }
                  style={styles.input}
                  required
                />

                <input
                  type="text"
                  placeholder="Role"
                  value={newShift.role}
                  onChange={(e) =>
                    setNewShift({ ...newShift, role: e.target.value })
                  }
                  style={styles.input}
                  required
                />

                <div style={styles.modalActions}>
                  <button
                    type="button"
                    style={styles.cancelButton}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" style={styles.saveButton}>
                    Create Shift
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },

  section: {
    background: 'white',
    borderRadius: '18px',
    padding: '20px',
    border: '1px solid #e5e7eb',
  },

  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '14px',
    padding: '16px',
    marginBottom: '14px',
  },

  shiftTitle: {
    margin: 0,
    marginBottom: '10px',
  },

  text: {
    margin: '4px 0',
    color: '#475569',
  },

  role: {
    color: '#2563eb',
    fontWeight: '700',
  },

  assigned: {
    color: '#15803d',
    fontWeight: '700',
  },

  acceptButton: {
    marginTop: '12px',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 14px',
    fontWeight: '700',
    cursor: 'pointer',
  },

  coverageButton: {
    marginTop: '12px',
    background: '#f97316',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 14px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  
  needsCoverage: {
    color: '#ea580c',
    fontWeight: '700',
    marginTop: '10px',
  },

  topBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  
  createButton: {
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 16px',
    fontWeight: '700',
    cursor: 'pointer',
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
    fontWeight: '700',
  },
};