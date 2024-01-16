import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Grid, GridItem, Spacer } from '@chakra-ui/react';
import UWRHeader from '../components/UWRHeader';
import { palette } from '../styling/theme';
import TeamAnnouncementBox from '../components/TeamAnnouncement';
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'


function Team7() {
  return (
    <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" h="100%">
    <VStack align="center" justify="center" spacing="10px" h="100%">
      <UWRHeader />
  
        <Container maxW="container.xl">
          <Flex direction="column" w="100%">
            <Flex minH = "70px" p="4" textDecoration="underline" marginTop={10} borderColor={palette.dtxGold} align="center" justify="center">
              </Flex>
              {/* First Section */}
              <Flex p="4" textDecoration="underline" marginTop={5} borderColor={palette.dtxGold} align="center" justify="center">
                <Heading as="h2" size="lg" mb="2" color="purple.500">
                  Welcome UWRaas!
                </Heading>
              </Flex>

             {/* Where Should We Be Section */}
            <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={5} borderColor={palette.dtxGold}>
                <Heading as="h2" size="md" mb="2" color="white">
                📢 Announcements 📢
                </Heading>
                <TeamAnnouncementBox team = 'uw'/>
            </Flex>

                                {/* Liason Contacts Section */}
            <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold}  style={{ listStylePosition: 'inside' }} mb="4">
                     <Heading as="h2" size="md" mb="2" color="white">
                                     ☎️Liason Contacts☎️
                         </Heading>
         <UnorderedList mt="2" color="white">
          <ListItem>Amulya Thoranam: 469-731-6568</ListItem>
         <ListItem>Prabhas Gade: 832-759-3256</ListItem>
        <ListItem>Aarya Kabira: 972-510-7918</ListItem>
         </UnorderedList>
             </Flex>

{/* Announcements Section */}
<Flex direction="column"  p="6" mt="2" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold } align="center" justify="center">
    <Heading as="h2" size="md" mb="2" color="white">
    📍Schedule📍
    </Heading>
    <Schedule scheduleName='scheduleuw'/>
  </Flex>
</Flex>

          </Container>
       
    </VStack>
    <Footer/>
  </Flex>
);
}

export default Team7;
