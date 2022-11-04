import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const { user, onClose } = useTelegram()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" marginLeft='auto'>{user?.username ?? 'Login'}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header