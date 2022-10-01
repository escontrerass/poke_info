import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import { DarkMode, Brightness7, Star } from '@mui/icons-material'
import { useContext } from 'react'
import { ColorModeContext } from 'context/ThemeContext'
import { useNavigate } from 'react-router-dom'
import pokeInfo from 'assets/title.png'

export const Header = () => {
  const navigate = useNavigate()
  const colorMode = useContext(ColorModeContext)
  const theme = useTheme()

  const handleNavigate = EP => {
    navigate(`/${EP}`)
  }

  return (
    <AppBar position='fixed' color='primary' sx={{ height: '10vh', justifyContent: 'center' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton aria-label='logo' onClick={() => handleNavigate('')}>
          <Box width={{ xs: '120px', sm: '160px', md: '200px' }}>
            <img src={pokeInfo} alt='Logo de PokeInfo' />
          </Box>
        </IconButton>
        <Box>
          <IconButton size='large' sx={{ gap: '8px' }} onClick={() => handleNavigate('favorites')}>
            <Star color='warning' />
            <Typography variant='h5'>Favoritos</Typography>
          </IconButton>
          <IconButton color='inherit' onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'light' ? (
              <DarkMode color='#000' fontSize='large' />
            ) : (
              <Brightness7 color='warning' fontSize='large' />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
