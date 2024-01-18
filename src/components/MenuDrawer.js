import { Box, Flex, Heading,Button, MenuItem,IconButton, Text, HStack, Menu, MenuButton, Input, VStack } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import * as React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import tiktokIcon from "../pics/tiktok.png"
import instaIcon from "../pics/instagram.png"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

const MenuDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const openInstagram = () => {
      window.open("https://www.instagram.com/dtx.dandiya/?hl=en", "_blank");
    };
    
    const openTiktok = () => {
      window.open("https://www.tiktok.com/@dtx.dandiya", "_blank");
    };
  
    return (
      <>
        <IconButton ref={btnRef} 
        aria-label="Icon button"
        colorScheme="transparent" 
        color = {palette.dtxGold}  
        size = "large" 
        icon = {<HamburgerIcon/>} 
        fontSize="2xl"
        onClick={onOpen}>
          Menu
        </IconButton>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size = "xs"
          allowPinchZoom = 'true'
          isFullHeight = "true"
        >
          <DrawerOverlay />
          <DrawerContent
          h="100vh"
          bg = {palette.bgDarkGreen}
          >
            <DrawerCloseButton size = "lg" color = {palette.dtxGold}/>
            <DrawerHeader
            color = {palette.dtxGold}
            align = "stretch"
            >Menu
            </DrawerHeader>
  
            <DrawerBody>
              <VStack align = "stretch" spacing = {4}>
                <ChakraLink as={RouterLink} to="/">
                  <Button colorScheme="transparent" to="/" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl" mr = "auto">Home </Button>
                </ChakraLink>
                <ChakraLink as={RouterLink} to="/resources">
                  <Button colorScheme="transparent" to="/" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl" mr = "auto">Resources </Button>
                </ChakraLink>
                <ChakraLink as={RouterLink} to="/portal">
                  <Button colorScheme="transparent" to="/" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl" mr = "auto">Team Portal </Button>
                </ChakraLink>
            
              </VStack>
            </DrawerBody>
  
            <DrawerFooter>
              <Box mr="4" h="50%" w="30px">
                <img src={instaIcon} alt="Logo" h="10px" w="10px" onClick={openInstagram} />
              </Box>
              <Box mr="0" h="50%" w="30px" >
                <img src={tiktokIcon} alt="Logo" h="10px" w="10px" onClick={openTiktok} />
              </Box>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default MenuDrawer;