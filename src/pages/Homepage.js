import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { Container, Box, Flex } from '@chakra-ui/react'



function Homepage() {
    return (
    <Container>
        <Flex>
        <Box flex="1" p="4">Homepage</Box>
        <Box flex="1" p="4">About Us</Box>
        <Box flex="1" p="4">Resources</Box>
        <Box flex="1" p="4">Sponsors</Box>
        <Box flex="1" p="4">Team Portal</Box>
        <Box flex="1" p="4">Venue Map</Box>
        </Flex>
    </Container>
    )
  }
  
  export default Homepage;