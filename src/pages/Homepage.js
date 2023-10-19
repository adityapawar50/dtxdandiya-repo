import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { Container, Box, Flex } from '@chakra-ui/react'
import Header from '../components/Header'
import HeroWithPic from '../components/Hero'


function Homepage() {
    return (
    <div className = 'Homepage'>
        <Header/>
        <Flex>
        <HeroWithPic/>
        {/* <Box flex="1" p="4">Homepage</Box>
        <Box flex="1" p="4">About Us</Box>
        <Box flex="1" p="4">Resources</Box>
        <Box flex="1" p="4">Sponsors</Box>
        <Box flex="1" p="4">Team Portal</Box>
        <Box flex="1" p="4">Venue Map</Box> */}
        </Flex>
    </div>
    
    )
  }
  
  export default Homepage;