import * as React from 'react'
import { WrapItem, Wrap, Container, Box, Flex, VStack } from '@chakra-ui/react'
import HeroWithPic from '../components/Hero'
import MainSched from '../components/Schedule'
import AboutUs from '../components/AboutUs'
import CurrUpdatesBox from "../components/CurrUpdatesBox"
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
                <Wrap  spacingX = "10" justify = "center" align ="center" >
                  <WrapItem p = "5">
                    <CurrUpdatesBox/>
                  </WrapItem>
                  <WrapItem p = "5">
                    <MainSched scheduleName={'schedule'}/>
                  </WrapItem>
                </Wrap>
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