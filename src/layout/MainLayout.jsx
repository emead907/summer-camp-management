export default function MainLayout() {
    return (
      <div style={styles.container}>
        
        <aside style={styles.sidebar}>
          <h2>Camp Manager</h2>
  
          <nav style={styles.nav}>
            <button style={styles.navButton}>Dashboard</button>
            <button style={styles.navButton}>Campers</button>
            <button style={styles.navButton}>Attendance</button>
            <button style={styles.navButton}>Schedule</button>
            <button style={styles.navButton}>Staff</button>
          </nav>
        </aside>
  
        <main style={styles.main}>
          <h1>Dashboard</h1>
          <p>Welcome to Summer Camp Manager</p>
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
      border: 'none',
      color: 'white',
      padding: '12px',
      borderRadius: '8px',
      cursor: 'pointer',
      textAlign: 'left',
    },
  
    main: {
      flex: 1,
      padding: '30px',
    },
  };