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
import axios from 'axios'
import DescriptionList from '../Lists/DescriptionList'

const StandardCard = ({ name, price, description, descriptionItems }) => {
  const { user, queryId } = useTelegram()

  const onSendData = async () => {
    const data = {
      queryId,
      order: name,
      userName: user?.username,
      userId: user?.id,
    }

    axios.post('https://spein-app.ru/order', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then((response) => alert(response.status))
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
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            от {price}₽
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
          <DescriptionList items={descriptionItems}/>
        </CardContent>
        <CardActions>
          <Button onClick={onSendData} size="small"
                  sx={{ marginLeft: 'auto' }}>Заказать</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default StandardCard