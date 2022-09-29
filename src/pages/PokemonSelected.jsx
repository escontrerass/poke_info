import React from 'react'
import { Main } from '../containers/Main'
import { useGetSelectedData } from '../hooks/useApi'
import { PokeDetails } from '../components/PokeDetails'
import { useLocation } from 'react-router-dom'
import { CircularProgress, Box } from '@mui/material'

export const PokemonSelected = () => {
  const { pathname } = useLocation()
  const splitPath = pathname.split('/')
  const { data, loading } = useGetSelectedData(`pokemon/${splitPath[2]}`)

  return (
    <Main>
      {loading ? (
        <Box display='flex' justifyContent='center' mt='25vh'>
          <CircularProgress color='warning' size={200} />
        </Box>
      ) : (
        <PokeDetails {...data} />
      )}
    </Main>
  )
}
