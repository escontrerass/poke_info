import { Autocomplete, Box, capitalize, CircularProgress, Stack, TextField } from '@mui/material'
import React from 'react'
import { useGetGlobalData } from '../hooks/useApi'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
  const { data, loading } = useGetGlobalData('pokemon/', 251)
  const navigate = useNavigate()

  return (
    <Stack sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        id='pokemon_name'
        getOptionLabel={data => data.name}
        options={data}
        loading={loading}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        noOptionsText={'No se encontró ese pokémon...'}
        renderOption={(props, data) => (
          <Box component='li' {...props} key={data.name}>
            {capitalize(data.name)}
          </Box>
        )}
        onChange={(event, newValue) => {
          navigate(`/pokemon/${newValue.name}`)
        }}
        renderInput={params => (
          <TextField
            {...params}
            label='Busca tu pokemon!'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color='inherit' size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </Stack>
  )
}
