import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Grid, GridItem, Spacer } from '@chakra-ui/react';
import MWHeader from '../components/MWHeader';
import { palette } from '../styling/theme';
import hero_p3 from '../pics/hero_p3.png';
import TeamAnnouncementBox from '../components/TeamAnnouncement';
import Schedule from '../components/Schedule'

function Team3() {
  return (
    <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" h="100%">
    <VStack align="center" justify="center" spacing="10px" h="100%">
      <MWHeader />

        <ChakraProvider>
        <Container maxW="container.xl">
          <Flex direction="column" w="100%">
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
            <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={20} borderColor={palette.dtxGold}>
                <Heading as="h2" size="md" mb="2" color="white">
                📢 Announcements 📢
                </Heading>
                <TeamAnnouncementBox team ='wolw'/>
            </Flex>

                                {/* Liason Contacts Section */}
            <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold} mb="4">
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






{/* New Flex container for YouTube videos */}
<Flex direction="column" mt="4">
<iframe
width="50%"
height="75%"  // Adjust the height as needed
src="https://www.youtube.com/embed/Phk_7rcP0Zg?si=fGN5-iXmzjiQnHuE"
title="YouTube video player"
allowfullscreen="allowfullscreen"
    mozallowfullscreen="mozallowfullscreen" 
    msallowfullscreen="msallowfullscreen" 
    oallowfullscreen="oallowfullscreen" 
    webkitallowfullscreen="webkitallowfullscreen"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
></iframe>


                <Spacer h="4" />
<iframe
width="50%"
height="75%"  // Adjust the height as needed
src="https://www.youtube.com/embed/Phk_7rcP0Zg?si=fGN5-iXmzjiQnHuE"
title="YouTube video player"
allowfullscreen="allowfullscreen"
    mozallowfullscreen="mozallowfullscreen" 
    msallowfullscreen="msallowfullscreen" 
    oallowfullscreen="oallowfullscreen" 
    webkitallowfullscreen="webkitallowfullscreen"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
></iframe>
                
              </Flex>
          </Container>
        </ChakraProvider>
    </VStack>
  </Flex>
);
}
export default Team3;
