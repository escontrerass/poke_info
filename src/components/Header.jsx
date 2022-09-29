import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import CatchinPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { Search } from './Search'
import { DarkMode, Brightness7 } from '@mui/icons-material'
import { useContext } from 'react'
import { ColorModeContext } from '../context/ThemeContext'

export const Header = () => {
  const colorMode = useContext(ColorModeContext)
  const theme = useTheme()
  return (
    <AppBar position='fixed' color='warning'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' href='/'>
          <CatchinPokemonIcon />
          <Typography variant='h6' component='div' className='pl-2'>
            PokeInfo
          </Typography>
        </IconButton>
        <Search />
        <IconButton edge='start' color='inherit' onClick={colorMode.toggleColorMode}>
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
