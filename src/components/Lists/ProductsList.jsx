import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'

const ProductsList = () => {
  return (
    <Grid container spacing={2} marginTop={2}>
      <Grid xs={12}>
        <Card sx={{ width: 325, margin: 'auto', marginTop: 2, border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Создание умного чат-бота
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              от 15.000₽
            </Typography>
            <Typography variant="body2">
              Описание...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ marginLeft: 'auto' }}>Заказать</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card sx={{ width: 325, margin: 'auto', marginTop: 2, border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Создание интернет-магазина с веб-интерфейсом в Telegram
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              от 50.000₽
            </Typography>
            <Typography variant="body2">
              Описание...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ marginLeft: 'auto' }}>Заказать</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card sx={{ width: 325, margin: 'auto', marginTop: 2, border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Создание web интернет-магазина
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              от 75.000₽
            </Typography>
            <Typography variant="body2">
              Описание...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ marginLeft: 'auto' }}>Заказать</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card sx={{ width: 325, margin: 'auto', marginTop: 2, border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Создание лендинга
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              от 30.000₽
            </Typography>
            <Typography variant="body2">
              Описание...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ marginLeft: 'auto' }}>Заказать</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card sx={{ width: 325, margin: 'auto', marginTop: 2, border: '1px solid black' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Кастомное решение
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              от 10.000₽
            </Typography>
            <Typography variant="body2">
              Описание...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ marginLeft: 'auto' }}>Заказать</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProductsList