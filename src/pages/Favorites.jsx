import React from 'react'
import { Main } from '../containers/Main'
import { CircularProgress, Box, Grid, Button } from '@mui/material'
import { PokeCard } from '../components/PokeCard'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ListFavorites } from '../utils/fetchFavorite'
import { NotFavorites } from '../components/NotFavorites'
import { Link } from 'react-router-dom'

export const Favorites = () => {
  const [listFavorite] = useLocalStorage()
  const listData = listFavorite && ListFavorites(listFavorite)

  return (
    <Main>
      {listFavorite.length === 0 ? (
        <NotFavorites />
      ) : !Boolean(listData[0].name !== undefined) ? (
        <Box display='flex' justifyContent='center' mt='10vh'>
          <CircularProgress color='warning' size='325px' />
        </Box>
      ) : (
        <>
          <Grid
            container
            py='32px'
            px={{ md: '80px' }}
            rowSpacing={4}
            columnGap={{ sm: 2, md: 4, lg: 8 }}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {listData.map((data, index) => (
              <Grid item xs={11} sm={5} md={3.6} lg={2.5} key={index}>
                <PokeCard {...data} />
              </Grid>
            ))}
          </Grid>
          <Link to='/'>
            <Box sx={{ textAlign: 'center' }}>
              <Button color='primary' variant='contained' size='large'>
                Volver a inicio.
              </Button>
            </Box>
          </Link>
        </>
      )}
    </Main>
  )
}
