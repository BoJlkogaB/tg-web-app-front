import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'

const StandardCard = ({name, price, description}) => {
  return (
      <Grid xs={12}>
        <Card sx={{ width: 325, margin: 'auto', marginTop: 2, border: '1px solid black' }}>
          <CardContent>
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
            <Button size="small" sx={{ marginLeft: 'auto' }}>Заказать</Button>
          </CardActions>
        </Card>
      </Grid>
  )
}

export default StandardCard