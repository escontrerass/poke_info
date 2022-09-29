import { Autocomplete, Box, CircularProgress, Stack, TextField } from '@mui/material'
import React from 'react'
import { useGetGlobalData } from '../hooks/useApi'

export const Search = () => {
  const { data, loading } = useGetGlobalData('pokemon/', 251)

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
            {data.name}
          </Box>
        )}
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
