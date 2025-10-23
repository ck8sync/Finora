import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log({ email, password });
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // only if you use cookies/session auth and server sets credentials:true
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();

      if (response.ok) {
        // Store the token in local storage
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <form className="auth-form active" id="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="login-email">Email or Username</label>
        <input
          type="text"
          id="login-email"
          required
          placeholder="Enter your handle or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          required
          placeholder="Your secret key"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="action-button">
        🚀 GO LIVE
      </button>

      <div className="utility-links">
        <a onClick={() => navigate('/register')} style={{cursor: 'pointer'}}>
          Not registered? Sign Up.
        </a>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </form>
  );
};

export default Login;
