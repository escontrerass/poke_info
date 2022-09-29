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
} from '@mui/material'
import { backgroundColors } from '../utils/backgroundColors'
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
} from '@mui/icons-material'

export const PokeDetails = props => {
  const { id, name, height, weight, sprites, types, base_experience, stats, abilities } = props
  const background = types && backgroundColors(types)
  console.log(props)

  return (
    <>
      {sprites && (
        <Container
          sx={{ minHeight: '77vh', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Box p={2} sx={{ backgroundColor: background[0].backgroundColor.light }}>
              <Box display='inline-block' p={2}>
                <Typography variant='h4'>#{id}</Typography>
                <Typography variant='h3' fontWeight='bold'>
                  {capitalize(name)}
                </Typography>
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
                    <Typography component='spam' fontWeight='bold'>
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
                    <Typography component='spam' fontWeight='bold'>
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
                      <Typography color={type.backgroundColor.medium} key={index} component='spam' fontWeight='bold'>
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
                    <Typography component='spam' fontWeight='bold'>
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
                    <Typography component='spam' fontWeight='bold'>
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
                    <Typography component='spam' fontWeight='bold'>
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
                    <Typography component='spam' fontWeight='bold'>
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
                    <Typography component='spam' fontWeight='bold'>
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
                    <Typography component='spam' fontWeight='bold'>
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
                    <Typography component='spam' fontWeight='bold'>
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
                      <Typography component='spam' fontWeight='bold'>
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
