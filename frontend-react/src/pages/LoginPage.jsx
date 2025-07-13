import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = (token) => {
    console.log('Logged in token:', token);
    // Optionally redirect or show dashboard
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
