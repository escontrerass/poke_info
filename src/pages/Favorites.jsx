import React, { useEffect } from 'react'
import { Main } from '../containers/Main'
import { CircularProgress, Box, Grid } from '@mui/material'
import { PokeCard } from '../components/PokeCard'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ListFavorites } from '../utils/fetchFavorite'

export const Favorites = () => {
  const [listFavorite] = useLocalStorage()
  const listData = listFavorite && ListFavorites(listFavorite)

  useEffect(() => {
    console.log(listFavorite)
    console.log(listData)
  }, [listData, listFavorite])

  return (
    <Main>
      {listData.length !== listFavorite.length ? (
        <Box display='flex' justifyContent='center' mt='10vh'>
          <CircularProgress color='warning' size='350px' />
        </Box>
      ) : (
        <Grid
          container
          py='32px'
          px={{ md: '80px' }}
          rowSpacing={4}
          columnGap={{ sm: 2, md: 4, lg: 8 }}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {listData.map(data => (
            <Grid item xs={11} sm={5} md={3.6} lg={2.5} key={data.id}>
              <PokeCard {...data} />
            </Grid>
          ))}
        </Grid>
      )}
    </Main>
  )
}
