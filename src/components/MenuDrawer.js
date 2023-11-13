import { Box, Flex, Heading,Button, IconButton, Text, HStack, Menu, MenuButton, Input } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import * as React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

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
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default MenuDrawer;