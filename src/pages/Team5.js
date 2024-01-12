import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Grid, GridItem, Spacer } from '@chakra-ui/react';
import WUHeader from '../components/WUHeader';
import { palette } from '../styling/theme';
import TeamAnnouncementBox from '../components/TeamAnnouncement';
import Schedule from '../components/Schedule'

function Team5() {
  return (
    <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" h="100%">
    <VStack align="center" justify="center" spacing="10px" h="100%">
      <WUHeader />

        <Container maxW="container.xl">
          <Flex direction="column" w="100%">
              {/* First Section */}
              <Flex p="4" marginTop={5} borderColor={palette.dtxGold} align="center" justify="center">
                <Heading as="h2" size="lg" mb="2">
                <span style={{ color:"red" }}> Welcome</span>
                <span style={{ color: 'white' }}>   WashU</span>
                <span style={{ color:"green" }}>   Raas!</span>
                </Heading>
              </Flex>

             {/* Where Should We Be Section */}
            <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={20} borderColor={palette.dtxGold}>
                <Heading as="h2" size="md" mb="2" color="white">
                            📢 Announcements 📢
                </Heading>
                    <TeamAnnouncementBox team = 'washu'/>
            </Flex>

                                {/* Liason Contacts Section */}
            <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold} mb="4">
                     <Heading as="h2" size="md" mb="2" color="white">
                                     ☎️Liason Contacts☎️
                         </Heading>
         <UnorderedList mt="2" color="white">
          <ListItem>Adrian Gaspar: 732-668-1820</ListItem>
         <ListItem> Rhea Aemireddy: 214-937-9047</ListItem>
        <ListItem> Saloni Janorkar: 469-793-1505</ListItem>
         </UnorderedList>
             </Flex>

{/* Announcements Section */}
<Flex direction="column"  p="6" mt="2" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold } align="center" justify="center">
    <Heading as="h2" size="md" mb="2" color="white">
    📍Schedule📍
    </Heading>
    <Schedule scheduleName='schedulewashu'/>
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
    </VStack>
  </Flex>
);
}

export default Team5;
