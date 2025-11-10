import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Function to handle the user logging out
  const handleLogout = () => {
    // 1. Remove the token
    localStorage.removeItem('token');
    // 2. Update state
    setIsAuthenticated(false);
    // 3. Redirect to the login page
    navigate('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard!</h1>
      <p>This is a protected page. Your content goes here.</p>
      <div className="user-info">
        <span className="username">Hi, User</span>
        <div className="btn-logout-wrapper">
          <button 
            onClick={handleLogout} 
            type="button"
            className="logout-button"
          > 
            Log Out
          </button> 
        </div>      
      </div>
    </div>
  );
};

export default Dashboard;