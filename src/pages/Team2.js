import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Grid, GridItem, Spacer, Button } from '@chakra-ui/react';
import GTHeader from '../components/GTHeader';
import { palette } from '../styling/theme';
import TeamAnnouncementBox from '../components/TeamAnnouncement';
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'

function Team2() {
  return (
    <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" >
    <VStack align="center" justify="center" spacing="10px" h="100%" >
      <GTHeader />

        <Container maxW="container.xl" bg={palette.bgDarkGreen} minHeight="90vh">
          
          <Flex direction="column" w="100%" bg={palette.bgDarkGreen}>

            <Flex p="4"  marginTop={'120px'} borderColor={palette.dtxGold} align="center" justify="center">
                <Heading as="h2" size="lg" mb="2" color="yellow.400">
                  Welcome GT Ramblin Raas!
                </Heading>
            </Flex>

             {/* Where Should We Be Section */}
            <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={5} borderColor={palette.dtxGold}>
                <Heading as="h2" size="md" mb="2" color="white">
                📢 Announcements 📢
                </Heading>
                <TeamAnnouncementBox team = 'gt'/>
            </Flex>

                                {/* Liason Contacts Section */}
            <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold} style={{ listStylePosition: 'inside' }} mb="4">
                     <Heading as="h2" size="md" mb="2" color="white">
                                     ☎️Liason Contacts☎️
                                     
                         </Heading>
         <UnorderedList mt="2" color="white">
          <ListItem>Ved Sharma: 469-386-4090</ListItem>
         <ListItem>Mahak Rawal: 469-307-7148</ListItem>
        <ListItem>Yug Patel: 630-631-4397</ListItem>
         </UnorderedList>
             </Flex>

{/* Announcements Section */}
<Flex direction="column"  p="6" mt="2" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold } align="center" justify="center">
    <Heading as="h2" size="md" mb="2" color="white">
    📍Schedule📍
    </Heading>
    <Schedule scheduleName={"schedulegt"}/>
  </Flex>
</Flex>
<Button
                                as="a"
                                href="https://drive.google.com/drive/u/0/folders/128tBPoWoBsORgYEocO8ToJQFDHBkhYUZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="white" bg="yellow.400"
                                mt="4"
                            >
                                Tech Time Videos!
                            </Button>
          </Container>
    </VStack>
    <Footer/>
  </Flex>
);
}

export default Team2;
