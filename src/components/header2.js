import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import dtxlogo from '../pics/dtxlogo.png'

const header2 = () => {
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
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Box mr="4" h="100%" w = "70px">
            <img src={dtxlogo} alt="Logo" h="15px" w = "10px" />
          </Box>
          <Heading as="h1" size="md" color = {palette.dtxGold}>
            DTX Dandiya
          </Heading>
        

        </Flex>
        <Flex align="center" justify="center" flex="1" ml="-200px">
          <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
            Home
          </Button>
          <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
            About Us 
          </Button>
          <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
              Resources
          </Button>
          <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
            Sponsors
          </Button>
          <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
            Team Portal
          </Button>
          <Button colorScheme="transparent" color = {palette.dtxGold} mx="1" size = "md" fontSize="xl">
            Venue Map
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default header2;