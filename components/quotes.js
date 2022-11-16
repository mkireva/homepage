import React from 'react'
import Paragraph from '../components/paragraph'
import { Meta } from '../components/book'
import { Box } from '@chakra-ui/react'

const quotes = ({ quotes }) => {
  return (
    <div>
      <Paragraph>{quotes.text}</Paragraph>
      <Box align="right" my={1} mt={-1}>
        <Meta>{quotes.author}</Meta>
      </Box>
    </div>
  )
}

export default quotes
