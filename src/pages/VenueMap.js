import { Box, VStack, Container, Text,Flex } from '@chakra-ui/react';
import * as React from 'react';
import HeroWithPic from '../components/Hero3';
import { palette } from '../styling/theme'
import Header from '../components/Header'
import MapsBackground from '../pics/MapsBackground.png'

function VenueMap() {
  return (
    <Box bg ={palette.bgDarkGreen}  w = "100vw">
        <VStack align="center" justify="center" spacing="10px">
          <Header />
          
    <Flex
      position="relative"
      bgImage={`url(${MapsBackground})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h="100vh"
        
    >
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
         

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '300px' }}>
            <iframe
              title="Venue Map "
              width="700"
              height="800"
              frameBorder="0"
              src="https://www.uta.edu/maps/embed?id=54"
              allowFullScreen
              style={{ marginRight: '200px', marginBottom: '100px' }}
            ></iframe>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginBottom:"40px", marginLeft:'-180px' }}></div>
            <iframe
              title="Hotel Map"
              src="https://storage.googleapis.com/maps-solutions-sexjnt1v7b/neighborhood-discovery/frxf/neighborhood-discovery.html"
              width="660"
              height="800"
              style={{ border: '0' }}
              loading="lazy"
            ></iframe>
          </div>
        </Container>
        </Flex>
      </VStack>
    </Box>
  );
}

export default VenueMap;
