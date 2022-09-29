import { GitHub } from '@mui/icons-material'
import { AppBar, CardMedia, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import react_logo from '../assets/react_logo.png'

export const Footer = () => {
  return (
    <AppBar position='static' color='warning' sx={{ height: '8vh', justifyContent: 'center' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton>
          <img src={react_logo} alt='React logo' width='50px' />
        </IconButton>
        <Typography>
          Power By <IconButton>PokeApi</IconButton>
        </Typography>
        <IconButton href=''>
          <GitHub />{' '}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
