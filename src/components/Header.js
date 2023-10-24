import React from 'react';
import { Flex, Text, Icon, Box, Heading, Button, Spacer, HStack, Center } from '@chakra-ui/react';
import { palette } from '../styling/theme';
import dtxlogo from '../pics/dtxlogo.png'
import MenuButton from './MenuButton';



const Header = () => {
    return (
      <Flex 
      align="center" 
      p={4}
      as="header"
      bg={palette.dtxGreen}
      color={palette.dtxBrown}
      position = "fixed"
      top = "0"
      zIndex="999"
      width = "100%">
        <Center flex="1">
          <Heading size="3xl" fontWeight="bold" textAlign="center" ml="-60px">DTX Dandiya</Heading>
          <img src = {dtxlogo} alt="Logo" width="100" height="100" />
        </Center>
      </Flex>
    );
  };
  
  export default Header;