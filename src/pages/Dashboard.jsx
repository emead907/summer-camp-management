export default function Dashboard() {
  const stats = [
    { label: 'Campers Today', value: 24 },
    { label: 'Checked In', value: 18 },
    { label: 'Not Arrived', value: 6 },
    { label: 'Open Shifts', value: 2 },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <p style={styles.subtitle}>Summer camp overview</p>

      <div style={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} style={styles.statCard}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div style={styles.grid}>

        <section style={styles.largeCard}>
          <h2>Today&apos;s Schedule</h2>

          {/* schedule items */}
        </section>

        <div style={styles.sideColumn}>
          
          <section style={styles.card}>
            <h2>Today&apos;s Alerts</h2>
          </section>

          <section style={styles.card}>
            <h2>Staffing</h2>
          </section>

          <section style={styles.card}>
            <h2>Quick Actions</h2>
          </section>

        </div>

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
    gap: '16px',
    marginBottom: '22px',
  },

  statCard: {
    background: 'white',
    borderRadius: '18px',
    padding: '20px',
    border: '1px solid #e5e7eb',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '18px',
  },

  card: {
    background: 'white',
    borderRadius: '18px',
    padding: '20px',
    border: '1px solid #e5e7eb',
  },

  alert: {
    color: '#dc2626',
    fontWeight: '700',
  },

  warning: {
    color: '#ea580c',
    fontWeight: '700',
  },

  button: {
    width: '100%',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px',
    fontWeight: '700',
    cursor: 'pointer',
    marginBottom: '10px',
  },

  secondaryButton: {
    width: '100%',
    background: '#e5e7eb',
    color: '#111827',
    border: 'none',
    borderRadius: '12px',
    padding: '12px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  scheduleItem: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '14px',
    padding: '10px 0',
    borderBottom: '1px solid #e5e7eb',
    color: '#334155',
  },

  largeCard: {
    background: 'white',
    borderRadius: '18px',
    padding: '20px',
    border: '1px solid #e5e7eb',
  },
  
  sideColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
};