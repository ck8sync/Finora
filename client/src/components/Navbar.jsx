import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Navbar() {
  return (
    <AppBar position="static" color="primary" elevation={0} style={{ borderBottom: '2px solid #F48FB1' }}>
      <Toolbar>
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 700,
            letterSpacing: '0.1em',
          }}
        >
          Finora Hub
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="secondary" component={RouterLink} to="/daily-brief" sx={{ fontWeight: 600, borderRadius: '24px' }}>
            Daily Brief
          </Button>
          <Button color="secondary" component={RouterLink} to="/weekly-recap" sx={{ fontWeight: 600, borderRadius: '24px' }}>
            Weekly Recap
          </Button>
          <Button color="secondary" component={RouterLink} to="/learning" sx={{ fontWeight: 600, borderRadius: '24px' }}>
            Learning
          </Button>
          <Button color="secondary" component={RouterLink} to="/about" sx={{ fontWeight: 600, borderRadius: '24px' }}>
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar