import { useState } from 'react';
import StatusBadge from '../components/StatusBadge';

const initialAttendance = [
  {
    id: 1,
    name: 'Sarah Williams',
    session: 'Full Day',
    allergies: 'Peanuts',
    status: 'Checked In',
    checkInTime: '8:15 AM',
    checkOutTime: '',
    checkedInBy: 'Jessica Parker',
    checkedOutBy: '',
    note: '',
    date: '2026-06-01',
  },
  {
    id: 2,
    name: 'Michael Chen',
    session: 'Full Day',
    allergies: '',
    status: 'Checked In',
    checkInTime: '8:30 AM',
    checkOutTime: '',
    checkedInBy: 'Jessica Parker',
    checkedOutBy: '',
    note: '',
    date: '2026-06-01',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    session: 'AM Only',
    allergies: 'Dairy, Shellfish',
    status: 'Checked Out',
    checkInTime: '9:00 AM',
    checkOutTime: '12:05 PM',
    checkedInBy: 'Jessica Parker',
    checkedOutBy: 'Emily Mead',
    note: '',
    date: '2026-06-01',
  },
  {
    id: 4,
    name: 'James Rodriguez',
    session: 'Full Day',
    allergies: '',
    status: 'Not Arrived',
    checkInTime: '',
    checkOutTime: '',
    checkedInBy: 'Jessica Parker',
    checkedOutBy: '',
    note: '',
    date: '2026-06-01',
  },
];

export default function Attendance() {
  const [attendance, setAttendance] = useState(initialAttendance);
  const [filter, setFilter] = useState('All');
  const [selectedDate, setSelectedDate] = useState('2026-06-01');
  const [searchTerm, setSearchTerm] = useState('');


  const campersForSelectedDate = attendance.filter(
    (camper) => camper.date === selectedDate
  );
  
const searchedAttendance = campersForSelectedDate.filter((camper) =>
  camper.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredAttendance =
  filter === 'All'
    ? searchedAttendance
    : searchedAttendance.filter((camper) => camper.status === filter);

      const total = campersForSelectedDate.length;
      const checkedIn = campersForSelectedDate.filter((c) => c.status === 'Checked In').length;
      const checkedOut = campersForSelectedDate.filter((c) => c.status === 'Checked Out').length;
      const notArrived = campersForSelectedDate.filter((c) => c.status === 'Not Arrived').length;

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  function handleCheckIn(id) {
    setAttendance(
      attendance.map((camper) =>
        camper.id === id
          ? {
              ...camper,
              status: 'Checked In',
              checkInTime: getCurrentTime(),
              checkedInBy: 'Coach Emily',
            }
          : camper
      )
    );
  }

  function handleCheckOut(id) {
    setAttendance(
      attendance.map((camper) =>
        camper.id === id
          ? {
              ...camper,
              status: 'Checked Out',
              checkOutTime: getCurrentTime(),
              checkedOutBy: 'Coach Emily',
            }
          : camper
      )
    );
  }

  function handleCheckInAllVisible() {
    setAttendance(
      attendance.map((camper) =>
        filteredAttendance.some((visibleCamper) => visibleCamper.id === camper.id) &&
        camper.status === 'Not Arrived'
          ? {
              ...camper,
              status: 'Checked In',
              checkInTime: getCurrentTime(),
              checkedInBy: 'Coach Emily',
            }
          : camper
      )
    );
  }

  return (
    <div>
      <h1>Attendance</h1>
      <p style={styles.subtitle}>Today&apos;s camp check-in/out</p>

      <div style={styles.dateBar}>
        <label style={styles.dateLabel}>Camp Date</label>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={styles.dateInput}
        />
      </div>

      <input
        type="text"
        placeholder="Search today's campers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h2>{total}</h2>
          <p>Total</p>
        </div>

        <div style={styles.statCard}>
          <h2>{checkedIn}</h2>
          <p>Checked In</p>
        </div>

        <div style={styles.statCard}>
          <h2>{checkedOut}</h2>
          <p>Checked Out</p>
        </div>

        <div style={styles.statCard}>
          <h2>{notArrived}</h2>
          <p>Not Arrived</p>
        </div>
      </div>

      <div style={styles.filters}>
        {['All', 'Not Arrived', 'Checked In', 'Checked Out'].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            style={{
              ...styles.filterButton,
              ...(filter === item ? styles.activeFilter : {}),
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div style={styles.actionBar}>
        <button style={styles.checkInAllButton} onClick={handleCheckInAllVisible}>
          Check In All Visible
        </button>
      </div>

      <div style={styles.list}>
        {filteredAttendance.map((camper) => (
          <div key={camper.id} style={styles.row}>
            <div>
              <h3 style={styles.name}>
                {camper.name}{' '}
                <span style={styles.sessionTag}>{camper.session}</span>
              </h3>


              {camper.allergies && (
                <p style={styles.allergy}>⚠ {camper.allergies}</p>
              )}

              {camper.status === 'Not Arrived' && (
                <p style={styles.notArrived}>Not yet arrived</p>
              )}

              {camper.checkInTime && (
                <p style={styles.time}>
                In: {camper.checkInTime}
                {camper.checkedInBy && ` • ${camper.checkedInBy}`}
              </p>
              )}

              {camper.checkOutTime && (
                <p style={styles.time}>
                Out: {camper.checkOutTime}
                {camper.checkedOutBy && ` • ${camper.checkedOutBy}`}
              </p>
              )}
            </div>

            <div>
              {camper.status === 'Not Arrived' && (
                <button
                  style={styles.checkInButton}
                  onClick={() => handleCheckIn(camper.id)}
                >
                  Check In
                </button>
              )}

              {camper.status === 'Checked In' && (
                <button
                  style={styles.checkOutButton}
                  onClick={() => handleCheckOut(camper.id)}
                >
                  Check Out
                </button>
              )}

              {camper.status === 'Checked Out' && (
                <span style={styles.done}>Done</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  subtitle: {
    color: '#64748b',
    marginTop: '-8px',
    marginBottom: '20px',
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '14px',
    marginBottom: '20px',
  },

  statCard: {
    background: 'white',
    borderRadius: '16px',
    padding: '18px',
    border: '1px solid #e5e7eb',
  },

  filters: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },

  filterButton: {
    border: 'none',
    background: '#e5e7eb',
    color: '#475569',
    padding: '10px 14px',
    borderRadius: '999px',
    fontWeight: '700',
    cursor: 'pointer',
  },

  activeFilter: {
    background: '#16a34a',
    color: 'white',
  },

  list: {
    background: 'white',
    borderRadius: '18px',
    border: '1px solid #e5e7eb',
    overflow: 'hidden',
  },

  row: {
    padding: '18px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
  },

  name: {
    margin: 0,
    marginBottom: '8px',
  },

  sessionTag: {
    background: '#dbeafe',
    color: '#2563eb',
    padding: '4px 8px',
    borderRadius: '999px',
    fontSize: '11px',
    marginLeft: '6px',
  },

  allergy: {
    color: '#dc2626',
    fontWeight: '700',
    margin: '4px 0',
  },

  notArrived: {
    color: '#ea580c',
    fontWeight: '700',
    margin: '4px 0',
  },

  time: {
    color: '#15803d',
    fontWeight: '600',
    margin: '4px 0',
  },

  checkInButton: {
    background: '#15803d',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 16px',
    fontWeight: '700',
    cursor: 'pointer',
  },

  checkOutButton: {
    background: '#e5e7eb',
    color: '#111827',
    border: '1px solid #cbd5e1',
    borderRadius: '12px',
    padding: '12px 16px',
    fontWeight: '700',
    cursor: 'pointer',
  },

  done: {
    color: '#64748b',
    fontWeight: '700',
  },

  dateBar: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  dateLabel: {
    fontWeight: '700',
    color: '#334155',
  },
  
  dateInput: {
    padding: '10px 12px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    fontSize: '15px',
  },

  searchInput: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    outline: 'none',
    marginBottom: '20px',
  },

  actionBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '12px',
  },
  
  checkInAllButton: {
    background: '#15803d',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 16px',
    fontWeight: '700',
    cursor: 'pointer',
  },
};