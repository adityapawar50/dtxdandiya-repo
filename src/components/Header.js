import React from 'react';
import { Flex, Text, Icon, Box } from '@chakra-ui/react';
import { palette } from '../themeColors';
import pic from '../logo.svg'


const Header = () => {
    return (
      <Flex
        as="header"
        align="center"
        justify="space-between"
        p="4"
        bg="green"
        color="white"
      >
        <Icon as={pic} boxSize={8} />
        <Text fontSize="xl">Your Big Title</Text>
        <img src="../pics/dtxlogo.png" alt="Logo" width="50" height="50" />
      </Flex>
    );
  };
  
  export default Header;