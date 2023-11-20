import { Box, Flex, Heading,Button, MenuItem,IconButton, Text, HStack, Menu, MenuButton, Input, VStack } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import * as React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

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
          bg = {palette.bgDarkGreen}
          >
            <DrawerCloseButton />
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
                <ChakraLink as={RouterLink} to="/teamportal">
                  <Button colorScheme="transparent" to="/" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl" mr = "auto">Team Portal </Button>
                </ChakraLink>
                <ChakraLink as={RouterLink} to="/map">
                  <Button colorScheme="transparent" to="/" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl" mr = "auto">Venue Map </Button>
                </ChakraLink>
            
              </VStack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='solid' mr={3} bg ={palette.dtxGold} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default MenuDrawer;