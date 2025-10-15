import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: '700', color: 'primary.main' }}>
        Login
      </Typography>
      <form onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400 }}>
        <Box sx={{ mb: 3 }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            py: 1.5,
            borderRadius: '2rem',
            fontWeight: '600',
            fontSize: '1rem',
            textTransform: 'none',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
