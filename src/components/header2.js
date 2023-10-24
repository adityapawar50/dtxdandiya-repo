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
            Page 1
          </Button>
          <Button colorScheme="whiteAlpha" mx="1">
            Page 2
          </Button>
          <Button colorScheme="whiteAlpha" mx="1">
            Page 3
          </Button>
        </Flex>
        <Flex></Flex>
      </Flex>
    </Box>
  );
};

export default header2;