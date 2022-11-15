import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

const DescriptionList = ({items}) => {
  function generate (items) {
    return items.map((item) =>
      <ListItem key={Math.random()}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText
          sx={{fontSize:'0.8rem'}}
          primary={item.text}
        />
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