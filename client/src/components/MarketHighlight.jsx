import { Card, CardContent, Typography, Box } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import UpdateIcon from '@mui/icons-material/Update'

const icons = {
  trend: TrendingUpIcon,
  stock: ShowChartIcon,
  watch: UpdateIcon,
}

function MarketHighlight({ type, title, content, icon }) {
  const IconComponent = icons[icon] || TrendingUpIcon

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconComponent
            sx={{ fontSize: 24, color: 'primary.main', mr: 1 }}
          />
          <Typography variant="subtitle1" fontWeight="medium">
            {type}
          </Typography>
        </Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MarketHighlight