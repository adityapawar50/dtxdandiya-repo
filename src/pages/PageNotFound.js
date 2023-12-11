import { Box, Heading, Image, Text, Flex, VStack } from '@chakra-ui/react';
import MelmanLost from '../pics/MelmanLost.png';
import HeroWithPic from '../components/Hero3';
import { palette } from '../styling/theme';

function PageNotFound() {
  return (
    <Box bg={palette.bgDarkGreen} w="100vw">
      <VStack align="center" justify="center" spacing="10px">
        <Box
          position="relative"
          w="100%"
          minH="100vh"
          bg={`url("/pics/hero_3.png")`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          {/* Background with HeroWithPic */}
          <VStack align="center" spacing="10px">
            <HeroWithPic />
          </VStack>

          {/* 404 Content */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
          >
            <Heading fontSize="4xl" mb="4" align="center">
              404 Page Not Found
            </Heading>

            <Box textAlign="center">
              <Text fontSize="lg" mb="4">
                Something's not right :(
              </Text>
              <Image src={MelmanLost} mx="auto" alt="404 Image" maxW="400px" mb="4" />
              <Text fontSize="lg" mb="4">
                We're working on it. In the meantime, please go back or contact one of us!
              </Text>
              {/* Additional content or styling for your 404 page */}
            </Box>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default PageNotFound;
