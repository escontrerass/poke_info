import { CircularProgress, Grid, Box, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { PokeCard } from 'components/PokeCard'
import { Search } from 'components/Search'
import { Main } from 'containers/Main'
import { useGetDetailDataPagination } from 'hooks/useApi'
import { lastIdData } from 'utils/lastIdData'

export const Home = () => {
  const [url, setUrl] = useState(process.env.REACT_APP_POKE_API_POKEMON)
  const [lastId, setLastId] = useState(false)
  const { data, pagination, loading } = useGetDetailDataPagination(url)

  const handleClic = e => {
    setUrl(e)
  }

  useEffect(() => {
    pagination.results.length > 0 && setLastId(lastIdData(pagination?.results))
  }, [pagination])

  return (
    <Main>
      {loading ? (
        <Box display='flex' justifyContent='center' mt='10vh'>
          <CircularProgress color='warning' size='325px' />
        </Box>
      ) : (
        <>
          <Search />
          <Grid
            container
            py='32px'
            px={{ md: '80px' }}
            rowSpacing={4}
            columnGap={{ sm: 2, md: 4, lg: 8 }}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {data.length > 0 &&
              data.map(
                ({ value }) =>
                  value.id <= 251 && (
                    <Grid item xs={11} sm={5} md={3.6} lg={2.5} key={value.id}>
                      <PokeCard {...value} />
                    </Grid>
                  )
              )}
          </Grid>
          <Box display='flex' justifyContent='center' gap={5}>
            {pagination.previous && (
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
        </>
      )}
    </Main>
  )
}
