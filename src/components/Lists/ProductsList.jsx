import React from 'react'
import './ProductsList.css'
import { Card, Grid } from '@mui/material'

const ProductsList = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Card>xs=8</Card>
      </Grid>
      <Grid xs={12}>
        <Card>xs=4</Card>
      </Grid>
      <Grid xs={12}>
        <Card>xs=4</Card>
      </Grid>
      <Grid xs={12}>
        <Card>xs=4</Card>
      </Grid>
    </Grid>
  )
}

export default ProductsList