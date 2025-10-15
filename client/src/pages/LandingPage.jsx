import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Divider,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import ArticleIcon from '@mui/icons-material/Article'
import TimelineIcon from '@mui/icons-material/Timeline'
import SchoolIcon from '@mui/icons-material/School'
import MarketTicker from '../components/MarketTicker'
import PricingCard from '../components/PricingCard'
import MarketHighlight from '../components/MarketHighlight'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function Feature({ icon, title, description }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        {icon}
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  )
}

function LandingPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Market Ticker */}
      <MarketTicker />
{/* Hero Section */}
<Box
sx={{
  bgcolor: 'primary.main',
  color: 'white',
  py: 12,
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
}}
>
{/* Animated Background */}
<motion.div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, #6A1B9A, #F48FB1)',
    opacity: 0.3,
    zIndex: 0,
  }}
  animate={{
    x: ['-100%', '100%'],
    rotate: [0, 360],
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: 'linear',
  }}
/>
<Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
  <Typography
    component="h1"
    variant="h3"
    sx={{ mb: 4, fontWeight: '700', color: '#fff' }}
  >
    Level Up Your Investing IQ
  </Typography>
  <Typography variant="h6" sx={{ mb: 4, px: { xs: 2, md: 8 }, color: '#eee' }}>
    Your fast track to market mastery. Get daily insights, weekly breakdowns, and bite-sized lessons.
  </Typography>
  <Box sx={{ mb: 4 }}>
    <Button
      component={RouterLink}
      to="/register"
      variant="contained"
      color="secondary"
      size="large"
      sx={{
        mr: 2,
        mb: { xs: 2, sm: 0 },
        fontWeight: '600',
        borderRadius: '24px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
      }}
    >
      🚀 Get Started Now
    </Button>
  </Box>
  <Typography variant="subtitle1" sx={{ mt: 2, opacity: 0.9, color: '#ccc' }}>
    For education, not trading advice.
  </Typography>
</Container>
</Box>

    {/* Value Propositions */}
    <Container sx={{ py: 10 }} maxWidth="lg">
      <Typography
        component="h2"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{ mb: 8, fontWeight: '600' }}
      >
        Your All-Access Pass to Market Insights
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Feature
            icon={
              <ArticleIcon
                sx={{ fontSize: 50, color: 'primary.main', mb: 3 }}
              />
            }
            title="Daily Market Brief"
            description="Start your day with a concise snapshot of global markets, key trends, and expert analysis."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Feature
            icon={
              <TimelineIcon
                sx={{ fontSize: 50, color: 'primary.main', mb: 3 }}
              />
            }
            title="Weekly Market Recap"
            description="Dive deeper into sector performance, investment strategies, and actionable takeaways."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Feature
            icon={
              <SchoolIcon
                sx={{ fontSize: 50, color: 'primary.main', mb: 3 }}
              />
            }
            title="3-Minute Market Lessons"
            description="Unlock essential investing concepts with quick, easy-to-understand lessons."
          />
        </Grid>
      </Grid>
    </Container>

      {/* Pricing Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: '600' }}>
              Unlock Premium Insights - Absolutely Free!
            </Typography>
            </Typography> {/* Closing tag for Typography on line 161 */}
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 6 }}
            >
              Get exclusive access to advanced market analysis and personalized learning tools.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6} lg={5}>
                <PricingCard
                  plan="Free Access"
                  price="0"
                  features={[
                    'Daily Market Briefs',
                    'Weekly Deep Dives',
                    'Interactive Learning Modules',
                  ]}
                  buttonText="Get Instant Access"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

      {/* Market Highlights */}
      <Container sx={{ py: 8 }} maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: '600' }}>
            Market Pulse: Stay Ahead of the Curve
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Get instant insights into key market trends and developments.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <MarketHighlight
                type="Sector Spotlight"
                title="Tech & Pharma on the Rise"
                content="Discover the driving forces behind the tech and healthcare sectors."
                icon="trend"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MarketHighlight
                type="Stock to Watch"
                title="Reliance Surges Ahead"
                content="Uncover the factors propelling Reliance's impressive Q2 performance."
                icon="stock"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MarketHighlight
                type="Market Insights"
                title="Top 3 Things to Track"
                content="Stay informed about inflation, earnings, and crude oil's impact on the market."
                icon="watch"
              />
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/highlights"
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<TimelineIcon />}
              sx={{ borderRadius: '24px', fontWeight: '600' }}
            >
              Explore More Highlights
            </Button>
          </Box>
        </Container>

      {/* About Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: '600' }}>
              About Finora Hub
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
              Your go-to platform for mastering the markets. We deliver clear, concise, and engaging insights to empower your investment journey.
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Created by 8sync Hive — Where Innovation Meets Insight.
              <br />
              Empowering you with knowledge, not financial advice.
            </Typography>
          </Container>
        </Box>

      {/* Disclaimer Section */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" gutterBottom align="center">
          Important Disclaimer
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 2 }}>
          All content on Finora Hub — including articles, videos,
          charts, and dashboards — is intended solely for educational and
          informational purposes.
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 2 }}>
          We do not provide investment, trading, or financial advice, nor do
          we recommend buying or selling any securities, stocks, or financial
          instruments.
        </Typography>
        <Typography variant="body1" paragraph>
          Users should consult a qualified financial advisor before making
          any investment decisions. Market data and insights are provided
          as-is and may not represent real-time accuracy.
        </Typography>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
export default LandingPage;