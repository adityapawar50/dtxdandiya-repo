import { Box, Flex, Heading, Button, Text, HStack, Menu, MenuButton } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import dtxlogo from '../pics/dtxlogo.png'
import instaIcon from "../pics/instagram.png"
import * as React from 'react'

import { useMediaQuery} from "@chakra-ui/react"
import MenuDrawer from "./MenuDrawer";


const openInstagram = () => {
  window.open("https://www.instagram.com/dtx.dandiya/?hl=en", "_blank");
};




const Header = () => {

  const [isMobile] = useMediaQuery("(max-width: 800px)")
  if (!isMobile){
    return ( 
      <Box
        position="fixed"
        width="100%"
        opacity = '100%'
        color="white"
        padding="4"
        zIndex="999"
        top="0"
        h = '10%'
      >
        <Flex align="center" justify="space-between" w = "100%">
          
          <HStack spacing = "200px" w = "100%"> 
  
          <Flex align="center" flex ="1">
            <Box mr="4" h="100%" w = "70px">
              <img src={dtxlogo} alt="Logo" h="15px" w = "10px" />
            </Box>
            <Heading as="h1" size="md" color = {palette.dtxGold} style={{whiteSpace: 'nowrap'}}>
              DTX Dandiya
            </Heading>           
          </Flex>
  
          <HStack align="center" justify="center" flex="1">
            <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
              Home
            </Button>
            <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
                Resources
            </Button>
            <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
              Team Portal
            </Button>
            <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
              Venue Map
            </Button>
            
          </HStack>
  
  
            <Flex align="center" flex ="1">
              <Box mr="4" h="50%" w = "50px">
                  <img src={instaIcon} alt="Logo" h="10px" w = "10px" onClick = {openInstagram}/>
              </Box>
             <Text color = {palette.dtxGold}>
              Follow us
             </Text>
            </Flex>
  
  
          </HStack>
        </Flex>
      </Box>
    );

  }else{
    return(
      <Box
      position="fixed"
      width="100%"
      opacity = '100%'
      color="white"
      padding="4"
      zIndex="999"
      top="0"
      h = '10%'
    >

        <Flex align="center" justify="space-between" w = "100%">
            <HStack spacing = "200px" w = "100%">

            <Flex align="center" flex ="1">
            <Box mr="4" h="100%" w = "70px">
                    <MenuDrawer/>
            </Box>
              
            </Flex>
            
            <Flex align="center" flex ="1">
                <Box mr="4" h="100%" w = "70px">
                    <img src={dtxlogo} alt="Logo" h="15px" w = "10px" />
                </Box>
                <Heading as="h1" size="md" color = {palette.dtxGold} style={{whiteSpace: 'nowrap'}}>
                    DTX Dandiya
                </Heading>           
            </Flex>

            <Flex align="center" flex ="1">
                <Box mr="4" h="50%" w = "50px">
                    <img src={instaIcon} alt="Logo" h="10px" w = "10px" />
                </Box>
                <Text color = {palette.dtxGold}>
                    Follow us
                </Text>
            </Flex>


            </HStack>

        </Flex>

    </Box>
    )
  }
  
};

export default Header;