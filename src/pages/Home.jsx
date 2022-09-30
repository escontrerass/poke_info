import { CircularProgress, Grid, Box } from '@mui/material'
import React from 'react'
import { PokeCard } from '../components/PokeCard'
import { Search } from '../components/Search'
import { Main } from '../containers/Main'
import { useGetDetailData } from '../hooks/useApi'

export const Home = () => {
  const { data, loading } = useGetDetailData('pokemon/', 0, 4)

  return (
    <Main>
      <Search />
      {loading ? (
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
          {data.length > 0 &&
            data.map(({ value }) => (
              <Grid item xs={11} sm={5} md={3.6} lg={2.5} key={value.id}>
                <PokeCard {...value} />
              </Grid>
            ))}
        </Grid>
      )}
    </Main>
  )
}
