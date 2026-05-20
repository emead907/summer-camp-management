
import { Link } from 'react-router-dom';

export default function CamperCard({
    id,
    initials,
    name,
    age,
    session,
    allergies,
  }) {
    return (
        <Link
          to={`/campers/${id}`}
          style={{ textDecoration: 'none' }}
        >
          <div style={styles.card}>
            
            <div style={styles.left}>
              
              <div style={styles.avatar}>
                {initials}
              </div>
      
              <div>
                <h3 style={styles.name}>{name}</h3>
      
                <div style={styles.details}>
                  <span>Age {age}</span>
      
                  <span style={styles.sessionTag}>
                    {session}
                  </span>
      
                  {allergies && (
                    <span style={styles.allergyTag}>
                      • {allergies}
                    </span>
                  )}
                </div>
              </div>
      
            </div>
      
            <div style={styles.arrow}>
              ›
            </div>
      
          </div>
        </Link>
      );
  }
  
  const styles = {
    card: {
      background: 'white',
      borderRadius: '18px',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      border: '1px solid #e5e7eb',
    },
  
    left: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
  
    avatar: {
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      background: '#16a34a',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '18px',
    },
  
    name: {
      margin: 0,
      marginBottom: '6px',
      fontSize: '18px',
    },
  
    details: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      flexWrap: 'wrap',
      color: '#64748b',
      fontSize: '14px',
    },
  
    sessionTag: {
      background: '#dbeafe',
      color: '#2563eb',
      padding: '4px 10px',
      borderRadius: '999px',
      fontSize: '12px',
      fontWeight: '600',
    },
  
    allergyTag: {
      color: '#dc2626',
      fontWeight: '600',
      fontSize: '13px',
    },
  
    arrow: {
      color: '#94a3b8',
      fontSize: '24px',
    },
  };