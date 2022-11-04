import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import { useTelegram } from '../../hooks/useTelegram'

const StandardCard = ({ name, price, description }) => {
  const { user, queryId } = useTelegram()
  const data = {
    queryId,
    order: name,
    userName: user?.username,
    userId: user?.id,
  }

  const onSendData = () => {
    fetch('http://5.188.139.166:8000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <Grid xs={12}>
      <Card sx={{
        width: 325,
        margin: 'auto',
        marginTop: 2,
        border: '1px solid black',
      }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {queryId}
          </Typography>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            от {price}₽
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onSendData} size="small" sx={{ marginLeft: 'auto' }}>Заказать</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default StandardCard