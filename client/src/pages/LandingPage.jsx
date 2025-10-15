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
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(45deg, #008080 30%, #20B2AA 90%)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            sx={{ mb: 4, fontWeight: 'bold' }}
          >
            Smarter Markets. Simplified Insights.
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, px: { xs: 2, md: 8 } }}>
            Stay ahead with daily market briefs, weekly recaps, and real-time
            trends from India and across the globe — all in one clean,
            interactive dashboard.
          </Typography>
          <Box sx={{ mb: 4 }}>
            <Button
              component={RouterLink}
              to="/brief"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
            >
              🚀 Get Today's Market Brief
            </Button>
            <Button
              component={RouterLink}
              to="/premium"
              variant="outlined"
              color="inherit"
              size="large"
            >
              💼 Upgrade to Premium
            </Button>
          </Box>
          <Typography variant="subtitle1" sx={{ mt: 2, opacity: 0.9 }}>
            Designed for learning and awareness — not trading advice.
          </Typography>
        </Container>
      </Box>

      {/* Value Propositions */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Your Market Dashboard, Reimagined.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Feature
              icon={
                <ArticleIcon
                  sx={{ fontSize: 60, color: 'primary.main', mb: 2 }}
                />
              }
              title="Daily Market Brief"
              description="Get a crisp summary of Indian & global cues, currency moves, and sentiment analysis — all before your first coffee."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Feature
              icon={
                <TimelineIcon
                  sx={{ fontSize: 60, color: 'primary.main', mb: 2 }}
                />
              }
              title="Weekly Market Recap"
              description="Understand sector shifts, fund flows, and key takeaways with short, actionable summaries and video briefs."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Feature
              icon={
                <SchoolIcon
                  sx={{ fontSize: 60, color: 'primary.main', mb: 2 }}
                />
              }
              title="Learn Market in 3 Minutes"
              description="Simplified lessons on how to read charts, sector movements, and investor behavior — to help you build knowledge, not tips."
            />
          </Grid>
        </Grid>
      </Container>

      {/* Pricing Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Choose Your Pulse — Free or Premium.
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Start free, stay informed. Upgrade when you're ready for deeper
            insights and educational analytics.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6} lg={5}>
              <PricingCard
                plan="Free Plan"
                price="0"
                features={[
                  'Daily Market Brief',
                  '3-Minute Learning Blog',
                  'Access to Public Insights',
                ]}
                buttonText="Start Free Today"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <PricingCard
                plan="Premium Plan"
                price="299"
                features={[
                  'All Free Features',
                  'Weekly Video Recap',
                  'Focus Stock of the Day',
                  'Sentiment Dashboard',
                  'Case Studies & Sector Maps',
                ]}
                buttonText="Go Premium Now"
                recommended
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Market Highlights */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Stay in Sync with What Moves the Market
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Quick visual summaries to help you understand market trends — for
          educational awareness only.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MarketHighlight
              type="Sector Trend"
              title="Tech & Pharma Leading Gains"
              content="Technology and healthcare sectors showing momentum with positive market sentiment."
              icon="trend"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <MarketHighlight
              type="Focus Stock"
              title="Reliance up 2.4%"
              content="Q2 results beat estimates with strong performance in retail and digital services."
              icon="stock"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <MarketHighlight
              type="Watch List"
              title="3 Things to Watch"
              content="Inflation print, IT earnings, and crude prices are key factors to monitor."
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
          >
            See All Market Highlights
          </Button>
        </Box>
      </Container>

      {/* About Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            About Finora Hub
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
            Finora Hub is your synchronized source of market intelligence
            — blending data, design, and daily discipline. We believe clarity
            creates confidence — that's why every brief, chart, and analysis
            is curated to help you learn, understand, and interpret markets
            more effectively.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Built by 8sync Hive — Synchronized Minds, Seamless Innovation.
            <br />
            We provide educational market insights only, not financial or
            investment advice.
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
  )
}

export default LandingPage