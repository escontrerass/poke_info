import React from 'react'
import { Box, Button } from '@mui/material'

export function Pagination({ pagination, lastId, setUrl }) {
  const handleClic = e => {
    setUrl(e)
  }

  return (
    <Box display='flex' justifyContent='center' gap={5}>
      {pagination?.previous && (
        <Button color='primary' variant='contained' size='large' onClick={() => handleClic(pagination.previous)}>
          Atrás
        </Button>
      )}
      {!lastId && (
        <Button color='primary' variant='contained' size='large' onClick={() => handleClic(pagination.next)}>
          Siguiente
        </Button>
      )}
    </Box>
  )
}
