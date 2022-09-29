import React from 'react'
import { CardContent, CardMedia, Card, Typography, Box, capitalize } from '@mui/material'
import { backgroundColors } from '../utils/backgroundColors'

export const PokeCard = props => {
  const { id, name, sprites, types } = props
  const background = backgroundColors(types)

  return (
    <Card className='hover:transition hover:duration-300 hover:ease-in hover:delay-150 hover:-translate-y-1 hover:scale-110'>
      <CardContent sx={{ backgroundColor: background[0].backgroundColor.medium, position: 'relative' }}>
        <Box borderRadius='100%' boxShadow={4} p={1} sx={{ backgroundColor: '#fff', position: 'absolute' }}>
          <Typography color={background[0].backgroundColor.medium} variant='h5'>
            #{id}
          </Typography>
        </Box>
        <Box borderRadius='100%' boxShadow={2} sx={{ backgroundColor: background[0].backgroundColor.light }}>
          <CardMedia
            component='img'
            height='140'
            image={sprites.other['official-artwork'].front_default}
            alt={`Pokemon N°${id} - ${name}`}
          />
        </Box>
      </CardContent>
      <Box height='100px' sx={{ backgroundColor: '#000' }}>
        <Typography variant='h4' textAlign='center' py={0.5} color='#fff'>
          {capitalize(name)}
        </Typography>
        <Box display='flex' gap={4} justifyContent='center'>
          {background.map((type, index) => (
            <Box
              key={index}
              py='8px'
              px='32px'
              borderRadius='20px'
              sx={{ backgroundColor: type.backgroundColor.medium }}
            >
              <Typography>{capitalize(type.type.name)}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  )
}
