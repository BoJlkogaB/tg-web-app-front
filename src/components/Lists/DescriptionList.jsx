import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material'

const DescriptionList = ({items}) => {
  function generate (items) {
    return items.map((item) =>
      <ListItem key={Math.random()}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <Typography sx={{fontSize:'0.7rem'}}>
          {item.text}
        </Typography>
      </ListItem>,
    )
  }

  return (
    <List>
      {generate(items)}
    </List>
  )
}

export default DescriptionList