import { Box, Flex, Heading, Button } from "@chakra-ui/react";
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
          <Box mr="4" h="100%" w = "50px">
            <img src={dtxlogo} alt="Logo" h="15px" w = "10px" />
          </Box>
          <Heading as="h1" size="md">
            DTX Dandiya
          </Heading>
        

        </Flex>
        <Flex align="center" justify="center" flex="1" ml="-200px">
          <Button colorScheme="whiteAlpha" mx="1"> {/* Added mx="1" for margin */}
            Home
          </Button>
          <Button colorScheme="whiteAlpha" mx="1">
            About Us 
          </Button>
          <Button colorScheme="whiteAlpha" mx="1">
            Resources
          </Button>
          <Button colorScheme="whiteAlpha" mx="1">
            Sponsors
          </Button>
          <Button colorScheme="whiteAlpha" mx="1">
            Team Portal
          </Button>
          <Button colorScheme="whiteAlpha" mx="1">
            Venue Map
          </Button>
        </Flex>
        <Flex></Flex>
      </Flex>
    </Box>
  );
};

export default header2;