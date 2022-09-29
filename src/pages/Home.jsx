import { CircularProgress, Grid, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { PokeCard } from '../components/PokeCard'
import { Search } from '../components/Search'
import { Main } from '../containers/Main'
import { useGetDetailData } from '../hooks/useApi'

export const Home = () => {
  const { data, loading } = useGetDetailData('pokemon/', 0, 9)

  return (
    <Main>
      <Search />
      {loading ? (
        <Box display='flex' justifyContent='center' mt='10vh'>
          <CircularProgress color='warning' size='400px' />
        </Box>
      ) : (
        <Grid
          container
          py='32px'
          px={{ md: '80px' }}
          rowSpacing={4}
          columnGap={{ md: 8 }}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {data.length > 0 &&
            data.map(({ value }) => (
              <Grid item xs={12} md={3} key={value.id}>
                <Link to={`pokemon/${value.id}`}>
                  <PokeCard {...value} />
                </Link>
              </Grid>
            ))}
        </Grid>
      )}
    </Main>
  )
}
