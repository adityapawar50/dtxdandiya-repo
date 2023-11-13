import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { Container, Box, Flex, VStack } from '@chakra-ui/react'

import HeroWithPic from '../components/Hero'
import Header from '../components/Header'
import { palette } from '../styling/theme'




function Homepage() {
    return (
      <Box bg ={palette.bgDarkGreen}>
        <VStack align="center" justify="center" spacing="10px">
          <Header />
          <Box>
          <HeroWithPic />
          </Box>
          
          <Flex>
            <VStack spacing="40px">
              <Box p="4">'home'</Box>
              <Box p="4">About Us</Box>
              <Box p="4" color = {palette.dtxGold} >Resources</Box>
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