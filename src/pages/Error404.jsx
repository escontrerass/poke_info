import { Box, Container, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Main } from 'containers/Main'
import error from 'assets/404.png'
import page from 'assets/notFound.png'

export const Error404 = () => {
  return (
    <Main>
      <Container maxWidth='md'>
        <Box>
          <img src={error} alt='Error 404' />
          <img src={page} alt='Pagina no encontrada' />
        </Box>
        <Link to='/'>
          <Box sx={{ textAlign: 'center' }}>
            <Button color='primary' variant='contained' size='large'>
              Volver a inicio...
            </Button>
          </Box>
        </Link>
      </Container>
    </Main>
  )
}
