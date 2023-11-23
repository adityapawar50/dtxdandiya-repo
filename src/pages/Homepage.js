import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { Container, Box, Flex, VStack } from '@chakra-ui/react'

import HeroWithPic from '../components/Hero'
import MainSched from '../components/MainSchedule'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'
import { palette } from '../styling/theme'




function Homepage() {
    return (
      <Box bg ={palette.bgDarkGreen}  w = "100vw">
        <VStack align="center" justify="center" spacing="10px">
          <Header />
          <Box>
          <HeroWithPic />
          </Box>
          
          <Flex>
            <VStack spacing="40px">

              <MainSched/>
              <AboutUs/>
              <Box p="4">'About Us'</Box>
              <Box p="4">Sponsors</Box>
            </VStack>
          </Flex>
        </VStack>  
    </Box>

    );
  }
  
  export default Homepage;