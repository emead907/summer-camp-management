export default function StatusBadge({ status }) {
    const styles = {
      CheckedIn: {
        background: '#dcfce7',
        color: '#166534',
      },
  
      CheckedOut: {
        background: '#e5e7eb',
        color: '#374151',
      },
  
      NotArrived: {
        background: '#ffedd5',
        color: '#c2410c',
      },
    };
  
    const normalizedStatus = status.replace(/\s/g, '');
  
    return (
      <span
        style={{
          padding: '6px 10px',
          borderRadius: '999px',
          fontSize: '12px',
          fontWeight: '700',
          ...styles[normalizedStatus],
        }}
      >
        {status}
      </span>
    );
  }