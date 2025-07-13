// AdminDashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddFuelForm from '../components/AddFuelForm';
import FuelList from '../components/FuelList';

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      navigate('/login'); // Redirect to login if no token
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
      <h1>🚀 Admin Dashboard</h1>
      <button onClick={handleLogout} style={{ float: 'right', marginBottom: '20px' }}>
        Logout
      </button>

      <div style={{ marginTop: '60px' }}>
        <AddFuelForm token={token} />
      </div>

      <hr />

      <div style={{ marginTop: '30px' }}>
        <FuelList token={token} />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
