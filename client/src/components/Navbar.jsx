import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          Finora Hub
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/daily-brief">
            Daily Brief
          </Button>
          <Button color="inherit" component={RouterLink} to="/weekly-recap">
            Weekly Recap
          </Button>
          <Button color="inherit" component={RouterLink} to="/learning">
            Learning
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <Button
            color="secondary"
            variant="contained"
            component={RouterLink}
            to="/premium"
            sx={{ ml: 1 }}
          >
            Go Premium
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar