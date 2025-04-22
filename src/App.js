import React, { useState } from 'react';

const mockTickets = [
  { id: 1, title: 'Login page error', status: 'Open', priority: 'High' },
  { id: 2, title: 'Dashboard UI issue', status: 'Closed', priority: 'Low' },
  { id: 3, title: 'Request for new feature', status: 'In Progress', priority: 'Medium' },
  { id: 4, title: 'API timeout error', status: 'Open', priority: 'Critical' },
];

const SupportDashboard = () => {
  const [filter, setFilter] = useState('All');

  const filteredTickets = mockTickets.filter(ticket =>
    filter === 'All' ? true : ticket.status === filter
  );

  const styles = {
    container: { padding: '16px', fontFamily: 'Arial, sans-serif' },
    title: { fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' },
    controls: { display: 'flex', gap: '16px', marginBottom: '16px' },
    select: { padding: '8px', border: '1px solid #ccc', borderRadius: '4px', flex: '1' },
    search: { padding: '8px', border: '1px solid #ccc', borderRadius: '4px', flex: '3' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' },
    card: { backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' },
    cardTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' },
    actions: { display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '16px' },
    button: { padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    viewButton: { backgroundColor: '#3b82f6', color: 'white' },
    closeButton: { backgroundColor: '#ef4444', color: 'white' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Support Ticket Dashboard</h1>
      <div style={styles.controls}>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.select}
        >
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="In Progress">In Progress</option>
        </select>
        <input
          style={styles.search}
          placeholder="Search tickets..."
        />
      </div>

      <div style={styles.grid}>
        {filteredTickets.map(ticket => (
          <div
            key={ticket.id}
            style={styles.card}
          >
            <h2 style={styles.cardTitle}>{ticket.title}</h2>
            <p><strong>Status:</strong> {ticket.status}</p>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <div style={styles.actions}>
              <button style={{ ...styles.button, ...styles.viewButton }}>View</button>
              <button style={{ ...styles.button, ...styles.closeButton }}>Close</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportDashboard;
