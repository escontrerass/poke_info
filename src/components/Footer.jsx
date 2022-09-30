import { GitHub } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import react_logo from '../assets/react_logo.png'

export const Footer = () => {
  return (
    <AppBar position='static' color='primary' sx={{ height: '8vh', justifyContent: 'center' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton href='https://es.reactjs.org/'>
          <img src={react_logo} alt='React logo' width='80px' />
        </IconButton>
        <Typography variant='body2'>
          Power By <IconButton href='https://pokeapi.co/'>PokeApi</IconButton>
        </Typography>
        <IconButton href='https://github.com/escontrerass/poke_info'>
          <GitHub />{' '}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
