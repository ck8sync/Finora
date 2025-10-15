import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const quickLinks = [
  { title: 'Daily Brief', href: '/daily-brief' },
  { title: 'Weekly Recap', href: '/weekly-recap' },
  { title: 'Trends', href: '/trends' },
  { title: 'Learning', href: '/learning' },
  { title: 'About', href: '/about' },
]

const legalLinks = [
  { title: 'Terms & Conditions', href: '/terms' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Disclaimer', href: '/disclaimer' },
]

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 4,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: '700' }}>
          Finora Hub
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Empowering your market journey with clarity and confidence.
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            sx={{ color: 'primary.main' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            sx={{ color: 'primary.main' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            href="https://youtube.com"
            target="_blank"
            rel="noopener"
            sx={{ color: 'primary.main' }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            href="https://wa.me/share"
            target="_blank"
            rel="noopener"
            sx={{ color: 'primary.main' }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{ fontWeight: '600' }}
          >
            © 2025 Finora Hub - An 8sync Hive Initiative.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            For educational purposes only. Not financial advice.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer