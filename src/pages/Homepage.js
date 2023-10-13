import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { Container, Box, Flex } from '@chakra-ui/react'



function Homepage() {
    return (
    <Container>
        <Flex>
        <Box flex="1" p="4">Section 1</Box>
        <Box flex="1" p="4">Section 2</Box>
        <Box flex="1" p="4">Section 3</Box>
        </Flex>
    </Container>
    )
  }
  
  export default Homepage;