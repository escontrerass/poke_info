import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToggleColorMode } from 'context/ThemeContext'
import { Error404 } from 'pages/Error404'
import { Favorites } from 'pages/Favorites'
import { Home } from 'pages/Home'
import { PokemonSelected } from 'pages/PokemonSelected'

function App() {
  return (
    <ToggleColorMode>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:id' element={<PokemonSelected />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ToggleColorMode>
  )
}

export default App
