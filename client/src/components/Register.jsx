import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', { // TODO: Use environment variable for server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred while registering');
    }
  };

  return (
    <form className="auth-form" id="signup-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="signup-name">Full Name</label>
        <input
          type="text"
          id="signup-name"
          required
          placeholder="Your legal name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-email">Email</label>
        <input
          type="email"
          id="signup-email"
          required
          placeholder="Your primary email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-phone">Phone Number</label>
        <input
          type="tel"
          id="signup-phone"
          required
          placeholder="For security/recovery"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-password">Create Password</label>
        <input
          type="password"
          id="signup-password"
          required
          placeholder="Minimum 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-confirm-password">Confirm Password</label>
        <input
          type="password"
          id="signup-confirm-password"
          required
          placeholder="Repeat password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="action-button">
        ⚡️ UNLOCK FREE ACCESS
      </button>
    </form>
  );
};

export default Register;