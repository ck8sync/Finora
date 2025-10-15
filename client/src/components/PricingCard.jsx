import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

function PricingCard({ plan, price, features, buttonText, recommended }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
        border: recommended ? 4 : 0,
        borderColor: 'secondary.main',
        backgroundColor: 'background.paper',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="700" align="center" color="text.primary">
          {plan}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ mb: 3, textAlign: 'center', fontWeight: '600' }}
          color="secondary.main"
        >
          {price === '0' ? 'Free' : `₹${price}`}
          <Typography
            component="span"
            variant="subtitle2"
            color="text.secondary"
          >
            {price === '0' ? '' : '/month'}
          </Typography>
        </Typography>
        <List sx={{ mb: 2 }}>
          {features.map((feature, index) => (
            <ListItem key={index} sx={{ py: 0.5, display: 'flex', justifyContent: 'center' }}>
              <ListItemIcon sx={{ minWidth: 36, color: 'success.main' }}>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary={feature} align="left" color="text.primary" />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant={recommended ? 'contained' : 'outlined'}
          color="secondary"
          size="large"
          sx={{
            borderRadius: '24px',
            fontWeight: '600',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Card>
  )
}

export default PricingCard