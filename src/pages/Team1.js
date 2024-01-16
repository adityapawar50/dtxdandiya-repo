import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Spacer } from '@chakra-ui/react';
import DSDHeader from '../components/DSDHeader';
import { palette } from '../styling/theme';
import Schedule from '../components/Schedule'
import TeamUpdate from '../components/TeamUpdateBox'
import hippo from '../pics/fathippo.png'
import TeamAnnouncement from '../components/TeamAnnouncement';
import Footer from '../components/Footer'


function Team1() {
    return (
        <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" h="100%">
        <VStack align="center" justify="center" spacing="10px" h="100%">
          <DSDHeader />

            <Container maxW="container.xl">
              <Flex direction="column" w="100%">
                  <Flex minH = '70px' p="4" textDecoration="underline" marginTop={10} borderColor={palette.dtxGold} align="center" justify="center">
                    <Heading as="h2" size="lg" mb="2" color="orange.500">
                      
                    </Heading>
                  </Flex>
                  {/* First Section */}
                  <Flex p="4" textDecoration="underline" marginTop={5} borderColor={palette.dtxGold} align="center" justify="center">
                    <Heading as="h2" size="lg" mb="2" color="orange.500">
                      Welcome Texas Raas!
                    </Heading>
                  </Flex>
  
                 {/* Where Should We Be Section */}
                <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={5} borderColor={palette.dtxGold}>
                    <Heading as="h2" size="md" mb="2" color="white">
                                📢 Announcements 📢
                    </Heading>
                    
                    <TeamAnnouncement team = 'dsd'/>

                        
                </Flex>

                                    {/* Liason Contacts Section */}
                <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold} mb="4" style={{ listStylePosition: 'inside' }}>
                  <Heading as="h2" size="md" mb="2" color="white">
                                  ☎️Liason Contacts☎️
                    </Heading>
                  <UnorderedList mt="2" color="white">
                    <ListItem>Dhara Desai: 254-498-2257</ListItem>
                  <ListItem>Ahimsa Yukta: 832-323-3820</ListItem>
                  <ListItem>Shivan Golechha: 972-903-2550</ListItem>
                  </UnorderedList>
                 </Flex>

  {/* Announcements Section */}
  <Flex direction="column"  p="6" mt="2" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold } align="center" justify="center">
    <Heading as="h2" size="md" mb="2" color="white">
    📍Schedule📍
    </Heading>
    <Schedule scheduleName={"scheduledsd"}/>

  </Flex>
</Flex>


              </Container>
              
        </VStack>
        <Footer/>
      </Flex>
    );
  }
  
  export default Team1;