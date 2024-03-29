import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Grid, GridItem, Spacer, Button } from '@chakra-ui/react';
import UCBRHeader from '../components/UCBRHeader';
import { palette } from '../styling/theme';
import TeamAnnouncementBox from '../components/TeamAnnouncement';
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'

function Team6() {
  return (
    <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" h="100%">
    <VStack align="center" justify="center" spacing="10px" h="100%">
      <UCBRHeader />

        <Container maxW="container.xl" bg={palette.bgDarkGreen} minHeight="90vh">
          <Flex direction="column" w="100%" >
            <Flex minH = "70px" p="4" textDecoration="underline" marginTop={10} borderColor={palette.dtxGold} align="center" justify="center">
              </Flex>
              {/* First Section */}
              <Flex p="4" textDecoration="underline" marginTop={5} borderColor={palette.dtxGold} align="center" justify="center">
                <Heading as="h2" size="lg" mb="2">
                <span style={{ color:"blue" }}> Welcome UCB </span>
                <span style={{ color: 'gold' }}>Raas</span>
                <span style={{ color:"blue" }}> Ramzat!</span>
                </Heading>
              </Flex>

             {/* Where Should We Be Section */}
            <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={5} borderColor={palette.dtxGold}>
                <Heading as="h2" size="md" mb="2" color="white">
                📢 Announcements 📢
                </Heading>
                    <TeamAnnouncementBox team = 'ucb'/>
            </Flex>

                                {/* Liason Contacts Section */}
            <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold} style={{ listStylePosition: 'inside' }} mb="4">
                     <Heading as="h2" size="md" mb="2" color="white">
                                     ☎️Liason Contacts☎️
                         </Heading>
         <UnorderedList mt="2" color="white">
         <ListItem>Kunj Ghelani: 469-826-7490 </ListItem>
         <ListItem> Hima Patel: 214-995-4423</ListItem>
        <ListItem> Pankti Mevada: 469-690-7461</ListItem>
         </UnorderedList>
             </Flex>

{/* Announcements Section */}
<Flex direction="column"  p="6" mt="2" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold } align="center" justify="center">
    <Heading as="h2" size="md" mb="2" color="white">
    📍Schedule📍
    </Heading>
    <Schedule scheduleName='scheduleucb'/>
  </Flex>
</Flex>

          </Container>
          <Button
                                as="a"
                                href="https://drive.google.com/drive/u/0/folders/1ya62sQ75ZcUNpeCSBON2IQWtfUmvgg8-"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="yellow" bg="blue"
                                mt="4"
                            >
                                Tech Time Videos!
                            </Button>
    </VStack>
    <Footer/>
  </Flex>
);
}

export default Team6;
