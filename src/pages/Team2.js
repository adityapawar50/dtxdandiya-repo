import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { Container, Box, Flex, VStack, Text, Heading, UnorderedList, ListItem, Grid, GridItem, Spacer } from '@chakra-ui/react';
import GTHeader from '../components/GTHeader';
import { palette } from '../styling/theme';

function Team2() {
  return (
    <Flex direction="column" bg={palette.bgDarkGreen} w="100vw" h="100%">
    <VStack align="center" justify="center" spacing="10px" h="100%">
      <GTHeader />

        <ChakraProvider>
        <Container maxW="container.xl">
          <Flex direction="column" w="100%">
              {/* First Section */}
              <Flex p="4"  marginTop={5} borderColor={palette.dtxGold} align="center" justify="center">
                <Heading as="h2" size="lg" mb="2" color="yellow.400">
                  Welcome GT Ramblin Raas!
                </Heading>
              </Flex>

             {/* Where Should We Be Section */}
            <Flex direction="column" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} marginTop={20} borderColor={palette.dtxGold}>
                <Heading as="h2" size="md" mb="2" color="white">
                            📍Where Should We Be📍
                </Heading>
                    <Text color="white">
                     Section 3 Body Text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
            </Flex>

                                {/* Liason Contacts Section */}
            <Flex direction="column" mt="4" p="6" borderWidth="4px" borderRadius="lg" borderStyle={"solid"} borderColor={palette.dtxGold} mb="4">
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
    📢 Announcements 📢
    </Heading>
    <Text color="white">
      Please dm rishil uppaluru now (single non 800lb females only)
    </Text>
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

export default Team2;
