import { NavLink, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2>Camp Manager</h2>

        <nav style={styles.nav}>
          <NavLink to="/" style={styles.navButton}>Dashboard</NavLink>
          <NavLink to="/campers" style={styles.navButton}>Campers</NavLink>
          <NavLink to="/attendance" style={styles.navButton}>Attendance</NavLink>
          <NavLink to="/schedule" style={styles.navButton}>Schedule</NavLink>
          <NavLink to="/staff" style={styles.navButton}>Staff</NavLink>
          <NavLink to="/admin" style={styles.navButton}>Admin</NavLink>
        </nav>
      </aside>

      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    background: '#111827',
    color: 'white',
    padding: '20px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '30px',
  },
  navButton: {
    background: '#1f2937',
    color: 'white',
    padding: '12px',
    borderRadius: '8px',
    textDecoration: 'none',
  },
  main: {
    flex: 1,
    padding: '30px',
  },
};