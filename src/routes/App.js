import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToggleColorMode } from '../context/ThemeContext'
import { Error404 } from '../pages/Error404'
import { Home } from '../pages/Home'

function App() {
  return (
    <ToggleColorMode>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ToggleColorMode>
  )
}

export default App
