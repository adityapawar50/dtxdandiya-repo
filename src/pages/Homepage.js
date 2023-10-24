import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { Container, Box, Flex, VStack } from '@chakra-ui/react'
import Header from '../components/Header'
import HeroWithPic from '../components/Hero'
import Header2 from '../components/header2'
import { palette } from '../styling/theme'


function Homepage() {
    return (
      <Box bg = {palette.dtxGreen}>
        <Header2 />
        <VStack align="center" spacing="10px">
          <HeroWithPic />
          <Flex>
            <VStack spacing="40px">
              <Box p="4">'home'</Box>
              <Box p="4">About Us</Box>
              <Box p="4">Resources</Box>
              <Box p="4">Sponsors</Box>
              <Box p="4">Team Portal</Box>
              <Box p="4">Venue Map</Box>
            </VStack>
          </Flex>
        </VStack>  
    </Box>

    );
  }
  
  export default Homepage;