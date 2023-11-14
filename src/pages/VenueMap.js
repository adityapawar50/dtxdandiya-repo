import { Box, VStack, Container, Text } from '@chakra-ui/react';
import * as React from 'react';
import HeroWithPic from '../components/Hero3';
import Header2 from '../components/header2';
import { palette } from '../styling/theme';

function VenueMap() {
  const backgroundImageUrl = 'url("/pics/hero_3.png")';

  return (
    <Box
      position="relative"
      bg={backgroundImageUrl}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {/* Background with HeroWithPic */}
      <VStack align="center" spacing="10px">
        <HeroWithPic />
      </VStack>

      {/* Maps overlaying the background */}
      <Container
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        display="flex"
        flexDirection="column"
        alignItems="center"
        zIndex={1}
        paddingTop="20px"
      >
        <Text fontSize="x1" color = "white" textAlign="center">
          Welcome to quite literally the greatest venue in the history of mankind any bad biddies hit my dms -NotRishi
        </Text>

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px' }}>
  <iframe
    title="Venue Map 1"
    width="500"
    height="500"
    frameBorder="0"
    src="https://www.uta.edu/maps/embed?id=54"
    allowFullScreen
    style={{ marginRight: '200px' , marginBottom: '100px' }} // Add margin at the right of the first map
  ></iframe>

  <iframe
    title="Venue Map 2"
    src="https://storage.googleapis.com/maps-solutions-sexjnt1v7b/neighborhood-discovery/frxf/neighborhood-discovery.html"
    width="600"
    height="600"
    style={{ border: '0' }} // No margin on the second map
    loading="lazy"
  ></iframe>
</div>

      </Container>
    </Box>
  );
}

export default VenueMap;
