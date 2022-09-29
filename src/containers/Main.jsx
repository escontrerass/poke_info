import { Box } from '@mui/material'
import React from 'react'
import { Layout } from './Layout'

export const Main = ({ children }) => {
  return (
    <Layout>
      <Box mt='10vh' p='20px' sx={{ minHeight: '82vh' }}>
        {children}
      </Box>
    </Layout>
  )
}
