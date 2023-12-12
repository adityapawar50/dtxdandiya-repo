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
      <Box bg ={palette.bgDarkGreen}  w = "100%"  overflowX="auto">
        <VStack align="center" justify="center" spacing="10px" >
          <Header />
          <Box w = "100%">
            <HeroWithPic />
          </Box>
          
          <Flex w = "100%">
            <VStack spacing="40px" w = "100%" >

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