import React from 'react'
import './ProductsList.css'
import Grid2 from '@mui/material/Unstable_Grid2'
import { Card } from '@mui/material'

const ProductsList = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12}>
        <Card>xs=8</Card>
      </Grid2>
      <Grid2 xs={12}>
        <Card>xs=4</Card>
      </Grid2>
      <Grid2 xs={12}>
        <Card>xs=4</Card>
      </Grid2>
      <Grid2 xs={12}>
        <Card>xs=4</Card>
      </Grid2>
    </Grid2>
  )
}

export default ProductsList