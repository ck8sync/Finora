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
        py: 6,
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Finora Hub
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              An 8sync Hive Initiative
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://youtube.com"
                target="_blank"
                rel="noopener"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                href="https://wa.me/share"
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  sx={{
                    display: 'block',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    mb: 1,
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box>
              {legalLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  sx={{
                    display: 'block',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    mb: 1,
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            paragraph
          >
            © 2025 Finora Hub — An 8sync Hive Initiative.
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            All content is for educational purposes only.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer