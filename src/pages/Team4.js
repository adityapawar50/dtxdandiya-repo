import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Grid, GridItem, Spacer, Button } from '@chakra-ui/react';
import WRHeader from '../components/WRHeader';
import { palette } from '../styling/theme';
import TeamAnnouncementBox from '../components/TeamAnnouncement';
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'

function Team4() {
  return (
    <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" h="100%">
    <VStack align="center" justify="center" spacing="10px" h="100%">
      <WRHeader />

        <Container maxW="container.xl" bg={palette.bgDarkGreen} minHeight="90vh">
          <Flex direction="column" w="100%">
            <Flex minH = "70px" p="4" textDecoration="underline" marginTop={10} borderColor={palette.dtxGold} align="center" justify="center">
              </Flex>
              {/* First Section */}
              <Flex p="4" marginTop={5} borderColor={palette.dtxGold} align="center" justify="center">
                <Heading as="h2" size="lg" mb="2">
                <span style={{ color:"#A00000" }}>   Welcome TAMU</span>
                <span style={{ color: 'white' }}>   Wreckin Raas!</span>
                </Heading>
              </Flex>

             {/* Where Should We Be Section */}
            <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={5} borderColor={palette.dtxGold}>
                <Heading as="h2" size="md" mb="2" color="white">
                            📢 Announcements 📢
                </Heading>
                <TeamAnnouncementBox team = 'wreckin'/>
            </Flex>

                                {/* Liason Contacts Section */}
            <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold} style={{ listStylePosition: 'inside' }} mb="4">
                     <Heading as="h2" size="md" mb="2" color="white">
                                     ☎️Liason Contacts☎️
                         </Heading>
         <UnorderedList mt="2" color="white">
          <ListItem>Aayushi Madiala: 512-773-0779</ListItem>
         <ListItem>Sakshi Ratnaparkhi: 469-664-1877</ListItem>
        <ListItem>Deva Nair: 817-962-7661</ListItem>
         </UnorderedList>
             </Flex>

{/* Announcements Section */}
<Flex direction="column"  p="6" mt="2" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold } align="center" justify="center">
    <Heading as="h2" size="md" mb="2" color="white">
    📍Schedule📍
    </Heading>
    <Schedule scheduleName='schedulewreckin'/>
  </Flex>
</Flex>

          </Container>
          <Button
                                as="a"
                                href="https://drive.google.com/drive/u/0/folders/1gNuDPHbQN0x3TGlIbI_dJwrUWDMNhWeq"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="white" bg="#A00000"
                                mt="4"
                            >
                                Tech Time Videos!
                            </Button>
    </VStack>
    <Footer/>
  </Flex>
);
}

export default Team4;
