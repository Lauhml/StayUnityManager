import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', background: '#f0f4f8', height: '100vh', padding: '2rem' }}>
      <h1 style={{ color: '#2c3e50' }}>StayUnityManager</h1>
      <p>Welcome to your new hotel/property management platform!</p>

      <nav style={{ marginTop: '2rem' }}>
        <a
          href="#"
          style={{
            marginRight: '1rem',
            color: '#1e90ff',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Login
        </a>
        <a
          href="#"
          style={{
            color: '#1e90ff',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Dashboard
        </a>
      </nav>
    </div>
  );
}
