import React from 'react'
import {
  Grid,
} from '@mui/material'
import StandardCard from '../Cards/StandardCard'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'

const ProductsList = () => {
  return (
    <Grid container spacing={2} marginTop={2} marginBottom={4}>
      <StandardCard
        name="Создание умного чат-бота"
        price="15.000"
        description="Улучшите свои отношения с клиентом за счёт воронки продаж, постоянного контакта с ним или моментальных ответов на его вопросы."
        descriptionItems={[
          {
            icon: <AnalyticsOutlinedIcon/>,
            text: 'Детально проанализируем Вашу проблему и предложим лучшее решение',
          },
          {
            icon: <AnalyticsOutlinedIcon/>,
            text: 'Сами всё настроем и тщательно протестируем',
          },
          {
            icon: <AnalyticsOutlinedIcon/>,
            text: 'Дополнительно обеспечим месяц поддержки бота',
          },
        ]}
      />
      <StandardCard
        name="Создание web интернет-магазина в Telegram"
        price="50.000"
        description="Увеличьте свою прибыль за счёт продаж через Telegram!"
        descriptionItems={[
          {
            icon: <AnalyticsOutlinedIcon/>,
            text: 'Создадим для Вас новый источник дохода на примере @DurgerKingBot',
          },
          {
            icon: <AnalyticsOutlinedIcon/>,
            text: 'Удивим Ваших клиентов и конкурентов',
          },
          {
            icon: <AnalyticsOutlinedIcon/>,
            text: 'Дополнительно обеспечим месяц поддержки бота',
          },
        ]}
      />
    </Grid>
  )
}

export default ProductsList