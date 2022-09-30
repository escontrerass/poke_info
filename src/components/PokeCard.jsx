import React from 'react'
import { CardContent, CardMedia, Card, Typography, Box, capitalize } from '@mui/material'
import { backgroundColors } from '../utils/backgroundColors'
import { Link } from 'react-router-dom'

export const PokeCard = props => {
  const { id, name, sprites, types } = props
  const background = types && backgroundColors(types)

  return (
    <>
      {id && (
        <Card>
          <CardContent sx={{ backgroundColor: background[0].backgroundColor.medium, position: 'relative' }}>
            <Box borderRadius='100%' boxShadow={4} p={1} sx={{ backgroundColor: '#fff', position: 'absolute' }}>
              <Typography color={background[0].backgroundColor.medium} variant='h5'>
                #{id}
              </Typography>
            </Box>
            <Link to={`/pokemon/${id}`}>
              <Box
                borderRadius='100%'
                boxShadow={2}
                sx={{ backgroundColor: background[0].backgroundColor.light }}
                className='hover:transition hover:duration-300 hover:ease-in hover:delay-150 hover:-translate-y-1 hover:scale-110'
              >
                <CardMedia
                  component='img'
                  height='140'
                  image={sprites.other['official-artwork'].front_default}
                  alt={`Pokemon N°${id} - ${name}`}
                />
              </Box>
            </Link>
          </CardContent>
          <Link to={`/pokemon/${id}`}>
            <CardContent height='100px' sx={{ backgroundColor: '#484848' }}>
              <Typography variant='h4' textAlign='center' py={0.5} color='#fff'>
                {capitalize(name)}
              </Typography>
              <Box display='flex' gap={1} justifyContent='center'>
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
            </CardContent>
          </Link>
        </Card>
      )}
    </>
  )
}
