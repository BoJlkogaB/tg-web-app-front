import React from 'react'
import {
  Grid,
} from '@mui/material'
import StandardCard from '../Cards/StandardCard'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined'

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
            icon: <SettingsSuggestOutlinedIcon/>,
            text: 'Сами всё настроем и тщательно протестируем',
          },
          {
            icon: <PrivacyTipOutlinedIcon/>,
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
            icon: <MonetizationOnOutlinedIcon/>,
            text: 'Создадим для Вас новый источник дохода на примере @DurgerKingBot',
          },
          {
            icon: <Diversity1OutlinedIcon/>,
            text: 'Удивим Ваших клиентов и конкурентов',
          },
          {
            icon: <PrivacyTipOutlinedIcon/>,
            text: 'Дополнительно обеспечим месяц поддержки бота',
          },
        ]}
      />
    </Grid>
  )
}

export default ProductsList