import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RequireAuth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for authentication token
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate('/login');
    }
    setIsLoading(false);
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default RequireAuth;