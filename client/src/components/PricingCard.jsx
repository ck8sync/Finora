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
        border: recommended ? 2 : 0,
        borderColor: 'primary.main',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          {plan}
        </Typography>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{ mb: 3 }}
          color="primary.main"
        >
          ₹{price}
          <Typography
            component="span"
            variant="subtitle1"
            color="text.secondary"
          >
            /month
          </Typography>
        </Typography>
        <List sx={{ mb: 2 }}>
          {features.map((feature, index) => (
            <ListItem key={index} sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant={recommended ? 'contained' : 'outlined'}
          color="primary"
          size="large"
        >
          {buttonText}
        </Button>
      </Box>
    </Card>
  )
}

export default PricingCard