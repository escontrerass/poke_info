import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import CatchinPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { DarkMode, Brightness7 } from '@mui/icons-material'
import { useContext } from 'react'
import { ColorModeContext } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const colorMode = useContext(ColorModeContext)
  const theme = useTheme()

  const handleNavigate = EP => {
    navigate(`/${EP}`)
  }

  return (
    <AppBar position='fixed' color='warning' sx={{ height: '10vh', justifyContent: 'center' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => handleNavigate('')}>
          <CatchinPokemonIcon />
          <Typography variant='h6' component='div' pl='8px'>
            PokeInfo
          </Typography>
        </IconButton>
        <IconButton onClick={() => handleNavigate('/favorites')}>
          <Typography>FAV</Typography>
        </IconButton>
        <IconButton color='inherit' onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light' ? (
            <DarkMode color='primary' fontSize='large' />
          ) : (
            <Brightness7 color='warning' fontSize='large' />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
