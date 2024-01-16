import * as React from 'react'
import { WrapItem, Wrap, Container, useBreakpointValue, Box, Flex, VStack } from '@chakra-ui/react'
import HeroWithPic from '../components/Hero'
import HeroMobile from '../components/HeroMobile'
import MainSched from '../components/Schedule'
import AboutUs from '../components/AboutUs'
import CurrUpdatesBox from "../components/CurrUpdatesBox"
import Header from '../components/Header'
import { palette } from '../styling/theme'
import Announcement from '../components/Announcement'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'



function Homepage() {

    const imageComponent = useBreakpointValue({
      base: <HeroMobile />, // Render this component for small/base screens
      md: <HeroWithPic  />, // Render this component for medium screens and above
      lg: <HeroWithPic  />, // You can customize font size based on breakpoints
    });

    return (
      <Box bg ={palette.bgDarkGreen}  w = "100%"  overflowX="auto">
        <VStack align="center" justify="center" spacing="10px" >
          <Header />
          
          <Box w = "100%">
            {imageComponent}
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
              <Sponsors/>

            </VStack>
            
          </Flex>

        </VStack> 
         <Footer/>
    </Box>

    );
  }
  
  export default Homepage;