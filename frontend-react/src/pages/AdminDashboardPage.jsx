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
  const storedRole = localStorage.getItem('role');

  if (!storedToken || storedRole !== 'Admin') {
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
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">🚀 Admin Dashboard</h1>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="mb-5">
        <AddFuelForm token={token} />
      </div>

      <hr />

      <div>
        <FuelList token={token} />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
