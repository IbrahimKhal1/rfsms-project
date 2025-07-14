// AttendantDashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FuelList from '../components/FuelList';

const AttendantDashboardPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');

 useEffect(() => {
  const storedToken = localStorage.getItem('token');
  const storedRole = localStorage.getItem('role');

  if (!storedToken || storedRole !== 'Attendant') {
    navigate('/login');
  } else {
    setToken(storedToken);
  }
}, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🧑‍🔧 Attendant Dashboard</h1>
      <button onClick={handleLogout} style={{ float: 'right', marginBottom: '20px' }}>
        Logout
      </button>

      <div style={{ marginTop: '60px' }}>
        {/* FuelList (readonly - no edit/delete buttons) */}
        <FuelList token={token} role="Attendant" />
      </div>
    </div>
  );
};

export default AttendantDashboardPage;
