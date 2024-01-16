import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Grid, GridItem, Spacer } from '@chakra-ui/react';
import MWHeader from '../components/MWHeader';
import { palette } from '../styling/theme';
import hero_p3 from '../pics/hero_p3.png';
import TeamAnnouncementBox from '../components/TeamAnnouncement';
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'

function Team3() {
  return (
    <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" h="100%">
    <VStack align="center" justify="center" spacing="10px" h="100%">
      <MWHeader />
        <Container maxW="container.xl">
          <Flex direction="column" w="100%">
              <Flex minH = '70px' p="4" textDecoration="underline" marginTop={10} borderColor={palette.dtxGold} align="center" justify="center">
                    
              </Flex>
              {/* First Section */}
              <Flex p="4"  marginTop={5} borderColor={palette.dtxGold} align="center" justify="center">
                <Heading as="h2" size="lg" mb="2">
                  <span style={{ color: 'blue' }}>   Wel</span>
                  <span style={{ color: 'yellow' }}>come </span>
                  <span style={{ color: 'blue' }}> Mich</span>
                  <span style={{ color: 'blue' }}>igan</span>
                  <span style={{ color: 'blue' }}> Wolve</span>
                  <span style={{ color: 'yellow' }}>raas!</span>
                </Heading>
              </Flex>


             {/* Where Should We Be Section */}
            <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={5} borderColor={palette.dtxGold}>
                <Heading as="h2" size="md" mb="2" color="white">
                📢 Announcements 📢
                </Heading>
                <TeamAnnouncementBox team ='wolw'/>
            </Flex>

                                {/* Liason Contacts Section */}
            <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold} style={{ listStylePosition: 'inside' }} mb="4">
                     <Heading as="h2" size="md" mb="2" color="white">
                                     ☎️Liason Contacts☎️
                         </Heading>
         <UnorderedList mt="2" color="white">
          <ListItem>Amulya Rayasam: 972-523-6599</ListItem>
         <ListItem> Siya Patel: 580-374-2404</ListItem>
        <ListItem> Subhash Eedarapalli: 901-232-6813</ListItem>
         </UnorderedList>
             </Flex>

{/* Announcements Section */}
<Flex direction="column"  p="6" mt="2" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold } align="center" justify="center">
    <Heading as="h2" size="md" mb="2" color="white">
    📍Schedule📍
    </Heading>
    <Schedule scheduleName= 'schedulewolw' />
  </Flex>
</Flex>


          </Container>
    </VStack>
    <Footer/>
  </Flex>
);
}
export default Team3;
