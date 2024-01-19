import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Grid, GridItem, Spacer } from '@chakra-ui/react';
import WUHeader from '../components/WUHeader';
import { palette } from '../styling/theme';
import TeamAnnouncementBox from '../components/TeamAnnouncement';
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'

function Team5() {
  return (
    <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" h="100%">
    <VStack align="center" justify="center" spacing="10px" h="100%">
      <WUHeader />

        <Container maxW="container.xl" bg={palette.bgDarkGreen} minHeight="90vh">
          <Flex direction="column" w="100%">
              <Flex minH = "70px" p="4" textDecoration="underline" marginTop={10} borderColor={palette.dtxGold} align="center" justify="center">
              </Flex>
              {/* First Section */}
              <Flex p="4" marginTop={5} borderColor={palette.dtxGold} align="center" justify="center">
                <Heading as="h2" size="lg" mb="2">
                <span style={{ color:"#a51417" }}> Welcome</span>
                <span style={{ color: '#6c7373' }}>   WashU</span>
                <span style={{ color:"#c8c8c8" }}>   Raas!</span>
                </Heading>
              </Flex>

             {/* Where Should We Be Section */}
            <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={5} borderColor={palette.dtxGold}>
                <Heading as="h2" size="md" mb="2" color="white">
                            📢 Announcements 📢
                </Heading>
                    <TeamAnnouncementBox team = 'washu'/>
            </Flex>

                                {/* Liason Contacts Section */}
            <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold} style={{ listStylePosition: 'inside' }} mb="4">
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

          </Container>
    </VStack>
    <Footer/>
  </Flex>
);
}

export default Team5;
