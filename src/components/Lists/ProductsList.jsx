import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import StandardCard from '../Cards/StandardCard'

const ProductsList = () => {
  return (
    <Grid container spacing={2} marginTop={2} marginBottom={4}>
      <StandardCard name='Создание умного чат-бота' price='15.000' description='Описание...'/>
      <StandardCard name='Создание web интернет-магазина в Telegram' price='50.000' description='Описание...'/>
      <StandardCard name='Создание интернет-магазина' price='75.000' description='Описание...'/>
      <StandardCard name='Создание лендинга' price='30.000' description='Описание...'/>
      <StandardCard name='Кастомное решение' price='10.000' description='Описание...'/>
    </Grid>
  )
}

export default ProductsList