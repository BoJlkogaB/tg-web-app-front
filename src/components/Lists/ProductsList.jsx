import React from 'react'
import './ProductsList.css'
import { Card, Grid } from '@mui/material'

const ProductsList = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be nev o lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
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