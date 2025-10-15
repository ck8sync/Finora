import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

// Mock data - replace with real API integration
const mockMarketData = [
  { symbol: 'NIFTY', change: 0.8, direction: 'up' },
  { symbol: 'SENSEX', change: 0.6, direction: 'up' },
  { symbol: 'BANKNIFTY', change: -0.2, direction: 'down' },
  { symbol: 'GOLD', change: 0.4, direction: 'up' },
  { symbol: 'BTC', change: -1.3, direction: 'down' },
  { symbol: 'NASDAQ', change: 0.9, direction: 'up' },
]

function MarketTicker() {
  const [marketData, setMarketData] = useState(mockMarketData)

  useEffect(() => {
    // TODO: Replace with real API integration
    const interval = setInterval(() => {
      setMarketData(mockMarketData.map(item => ({
        ...item,
        change: item.change + (Math.random() - 0.5) * 0.1
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        py: 1,
        borderBottom: 1,
        borderColor: 'divider',
        overflowX: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          px: 2,
          minWidth: 'max-content',
        }}
      >
        {marketData.map((item) => (
          <Box
            key={item.symbol}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight="medium">
              {item.symbol}
            </Typography>
            <Typography
              variant="body2"
              color={item.change >= 0 ? 'success.main' : 'error.main'}
            >
              {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change).toFixed(1)}%
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
export default MarketTicker