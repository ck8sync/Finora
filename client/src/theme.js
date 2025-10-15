import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A1B9A', // Dark Purple
    },
    secondary: {
      main: '#F48FB1', // Pink
    },
    neutral: {
      main: '#E0F7FA', // Light Cyan
    },
    text: {
      primary: '#212121', // Dark Grey
    },
    success: {
      main: '#81C784', // Light Green
    },
    warning: {
      main: '#FFB74D', // Light Orange
    },
    error: {
      main: '#E57373', // Light Red
    },
    background: {
      default: '#E3F2FD', // Light Blue
      paper: '#FAFAFA',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;