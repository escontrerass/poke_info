import React from 'react'
import {
  capitalize,
  Card,
  CardContent,
  CardMedia,
  Container,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Button,
} from '@mui/material'
import {
  Stream,
  Height,
  Scale,
  Pix,
  Favorite,
  LocalFireDepartment,
  Shield,
  LocalPolice,
  Bolt,
  AddReaction,
  AutoAwesome,
  Star,
} from '@mui/icons-material'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { backgroundColors } from 'utils/backgroundColors'
import { useNavigate } from 'react-router-dom'

export const PokeDetails = props => {
  const { id, name, height, weight, sprites, types, base_experience, stats, abilities } = props
  const [listFavorite, setListFavorite] = useLocalStorage()
  const background = types && backgroundColors(types)
  const isFavorite = listFavorite.includes(id)
  const navigate = useNavigate()

  return (
    <>
      {sprites && (
        <Container
          sx={{ minHeight: '77vh', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, position: 'relative' }}>
            <Box position='absolute' right='20px' top='15px'>
              <Button color='primary' variant='contained' onClick={() => navigate(-1)}>
                Volver a atrás.
              </Button>
            </Box>
            <Box p={2} sx={{ backgroundColor: background[0].backgroundColor.light }}>
              <Box display='flex' alignItems='center' justifyContent='space-between' p={2}>
                <Box>
                  <Typography variant='h4'>#{id}</Typography>
                  <Typography variant='h3' fontWeight='bold'>
                    {capitalize(name)}
                  </Typography>
                </Box>
                <Box mt='10px'>
                  <IconButton
                    p={1}
                    sx={{ backgroundColor: '#484848' }}
                    className='scale-125 hover:transition hover:duration-300 hover:ease-in hover:delay-150 hover:-translate-y-1 hover:scale-150'
                    onClick={setListFavorite(id)}
                  >
                    {isFavorite ? <Star color='warning' /> : <Star />}
                  </IconButton>
                </Box>
              </Box>
              <Box borderRadius='100%' boxShadow={4} sx={{ backgroundColor: background[0].backgroundColor.medium }}>
                <CardMedia
                  component='img'
                  image={sprites.other['official-artwork'].front_default}
                  sx={{ width: '450px' }}
                />
              </Box>
            </Box>
            <CardContent sx={{ minWidth: '550px', paddingX: { md: '80px' }, paddingY: { md: '40px' } }}>
              <Typography>Información básica:</Typography>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <Height />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Altura:{' '}
                    <Typography component='span' fontWeight='bold'>
                      {height}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Scale />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Peso:{' '}
                    <Typography component='span' fontWeight='bold'>
                      {weight}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pix />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Tipos:{' '}
                    {background.map((type, index) => (
                      <Typography color={type.backgroundColor.medium} key={index} component='span' fontWeight='bold'>
                        {`${capitalize(type.type.name)}   `}
                      </Typography>
                    ))}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AddReaction />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Experiencia base:{' '}
                    <Typography component='span' fontWeight='bold'>
                      {base_experience}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
              <Typography mt={2}>Estadísticas base:</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Favorite />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Vida:{' '}
                    <Typography component='span' fontWeight='bold'>
                      {stats[0].base_stat}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalFireDepartment />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Ataque:{' '}
                    <Typography component='span' fontWeight='bold'>
                      {stats[1].base_stat}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Shield />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Defensa:{' '}
                    <Typography component='span' fontWeight='bold'>
                      {stats[2].base_stat}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Stream />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Ataque especial:{' '}
                    <Typography component='span' fontWeight='bold'>
                      {stats[3].base_stat}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalPolice />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Defensa especial:{' '}
                    <Typography component='span' fontWeight='bold'>
                      {stats[4].base_stat}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Bolt />{' '}
                  </ListItemIcon>
                  <ListItemText>
                    Velocidad:{' '}
                    <Typography component='span' fontWeight='bold'>
                      {stats[5].base_stat}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
              <Typography mt={2}>Habilidades:</Typography>
              <List>
                {abilities.map((ability, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <AutoAwesome />{' '}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography component='span' fontWeight='bold'>
                        {capitalize(ability.ability.name)}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Container>
      )}
    </>
  )
}
