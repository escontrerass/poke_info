import { Box, Container, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import notFavorites from 'assets/sinFavoritos.png'

export const NotFavorites = () => {
  return (
    <Container maxWidth='md'>
      <Box>
        <img src={notFavorites} alt='Error 404' />
      </Box>
      <Link to='/'>
        <Box sx={{ textAlign: 'center' }}>
          <Button color='primary' variant='contained' size='large'>
            No tienes favoritos vuelve a inicio para agregar
          </Button>
        </Box>
      </Link>
    </Container>
  )
}
