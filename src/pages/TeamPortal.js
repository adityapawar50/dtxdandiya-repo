import { Flex, Box, Text, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import hero_p3 from '../pics/hero_p3.png';
import { palette } from '../styling/theme';

export default function HeroWithPic() {
  const textColor = palette.white; // Set text color to white

  return (
    <Flex
      position="relative"
      bgImage={`url(${hero_p3})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h="100vh"
    >
      {/* Section 1 */}
      <Box position="absolute" top="10%" left="50%" transform="translateX(-50%)" textAlign="center" color = "white">
        <Heading as="h1" size="lg" mb="2">
          Timeline
        </Heading>
        <Text fontSize="sm">
          Section 1 text description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Box>

      {/* Section 2 */}
      <Box position="absolute" top="30%" left="5%" transform="translateY(-50%)" textAlign="center" color="white">
        <Heading as="h1" size="lg" mb="2">
          Liason Contacts
        </Heading>
        <UnorderedList mt="2">
          <ListItem>NAME: 000-000-0000</ListItem>
          <ListItem>NAME: 000-000-0000</ListItem>
          <ListItem>NAME: 000-000-0000</ListItem>
        </UnorderedList>
      </Box>

      {/* Section 3 */}
      <Box position="absolute" top="50%" left="-12%" transform="translateY(-50%)" textAlign="center" width="70%" color="white" >
        <Heading as="h1" size="lg" mb="2">
          Section 3 Heading
        </Heading>
        <Text fontSize="sm">
          Section 3 text description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Box>

      {/* Section 4 */}
      <Box position="absolute" top="80%" left="5%" transform="translateY(-50%)" textAlign="center"  color="white">
        <Heading as="h1" size="lg" mb="2">
          WHERE DO YOU NEED TO BE NEXT
        </Heading>
        <Text fontSize="sm">
          ENTER INFO HERE
        </Text>
      </Box>

      {/* YouTube video embed */}
      <Box position="absolute" bottom="5%" right="5%" textAlign="center" color="white">
        {/* Vertical header */}
        <Box writingMode="vertical-lr" textOrientation="upright">
          <Heading as="h1" size="lg" mb="2">
            Tech Time
          </Heading>
        </Box>
       </Box> 

      {/* YouTube video embed */}
      <Box position="absolute" bottom="10%" right="5%" textAlign="center" color="white">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dFkHRw3wU9E?si=Ug_gn-xeRj2sIKO4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
    </Flex>
  );
}
