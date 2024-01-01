import React, { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Box, VStack, Heading, HStack, Button,Flex,Text, useMediaQuery, Divider,Card, CardBody, Stack} from "@chakra-ui/react";
import { palette } from "../styling/theme";
import ap from "../pics/exectogether/ap.jpg"
import directors from "../pics/exectogether/directors.jpg"
import finance from "../pics/exectogether/finance.jpg"
import hosp from "../pics/exectogether/hosp.jpg"
import liasons from "../pics/exectogether/liasons.jpg"
import logistics from "../pics/exectogether/logistics.jpg"
import marketing from "../pics/exectogether/marketing.jpg"
import mixer from "../pics/exectogether/mixer.jpg"
import registration from "../pics/exectogether/registration.jpg"
import tech from "../pics/exectogether/tech.jpg"



const directorsData = [
    { name: "Rushi - Vereen - Rhea - Aryan", image: directors },
    { name: "Ishani - Dev", image: ap },
    { name: "Subhash - Shivani - Akshat", image: finance },
    { name: "Anusha - Suhas", image: liasons },
    { name: "Chinmayi - Naishada - Anisha", image: hosp },
    { name: "Meet - Tanisha", image: logistics },
    { name: "Isha - Paneri - Dhwani", image: marketing },
    { name: "Shruti - Svayam - Devanshi", image: mixer },
    { name: "Vyshnavi - Gayathri", image: registration },
    { name: "Aditya - Rishi", image: tech },

  ];
  
  const committees = [
    { name: "Directors", count: 1 },
    { name: "AP", count: 1 },
    { name: "Finance", count: 1 },
    { name: "Head Liasons", count: 1 },
    { name: "Hospitality", count: 1 },
    { name: "Logistics", count: 1 },
    { name: "Marketing", count: 1 },
    { name: "Mixer", count: 1 },
    { name: "Registration", count: 1 },
    { name: "Tech", count: 1 },
  
];

const AboutUs = () => {
    const [displayedCommittee, setDisplayedCommittee] = useState(0);
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    const [currentCommittee, setCurrentCommittee] = useState(committees[0].name);
  
    useEffect(() => {
      setCurrentCommittee(committees[displayedCommittee].name);
    }, [displayedCommittee]);
  
    const handleLeftArrowClick = () => {
      if (displayedCommittee > 0) {
        setDisplayedCommittee(displayedCommittee - 1);
      }
    };
  
    const handleRightArrowClick = () => {
      if (displayedCommittee < committees.length - 1) {
        setDisplayedCommittee(displayedCommittee + 1);
      }
    };
  


      const getCommitteeDirectors = () => {
        if (currentCommittee === "Directors") {
          return directorsData.slice(0, 4);
        }
      
        const committee = committees.find((c) => c.name === currentCommittee);
      
        if (committee) {
          const startIdx = committees
            .slice(0, committees.findIndex((c) => c.name === currentCommittee))
            .reduce((sum, c) => sum + c.count, 0);
      
          return directorsData.slice(startIdx, startIdx + committee.count);
        }
      
        return [];
      };
      
    
      
      
      const generateCards = () => {
        const committeeDirectors = getCommitteeDirectors();
      
        return committeeDirectors.map((director, index) => {
          if (index === 0) {
            return (
              <Card key={index} maxW={isLargerThan768 ? 'md' :'full'}>
                <CardBody>
                  <LazyLoadImage
                    src={director.image}
                    alt={director.name}
                    effect="blur"
                    style={{ borderRadius: 'lg', maxWidth: '100%' }}
                    visibleByDefault={isLargerThan768}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" fontFamily="Times New Roman">{director.name}</Heading>
                    {/* No description in your data */}
                    {/* <Text>{director.description}</Text> */}
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            );
          }
          return null;
        });
      };
      
      
  
  <HStack w="80%" justify="center" mt="40px">
    {generateCards(displayedCommittee)}
  </HStack>
  

  return (
    <Box w="100%" mt="50">
      <VStack w="100%" mt="60px">
        <Flex
          w="50%"
          borderWidth="4px"
          borderColor={palette.dtxGold}
          justify="center"
        >
          <Heading as="h1" color={palette.dtxGold}>
            <Text style={{ whiteSpace: "nowrap" }}>About Us</Text>
          </Heading>
        </Flex>
        <Flex justify="center" mt="30px">
          <Text
            py="2"
            color={palette.dtxGold}
            w="70%"
            justify="center"
            align="center"
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            Welcome to the heart of Dallas, where the vibrant rhythms of
            tradition meet the beats of unity at our annual Raas Garba
            competition. As a flagship event hosted by our college, this
            cultural extravaganza is more than just a celebration; it's a
            spirited endeavor to bring our community together. Rooted in the
            rich tapestry of Indian culture, our Raas Garba competition takes
            center stage as a dynamic showcase of dance, music, and tradition.
            With every graceful twirl and resonating drumbeat, we aim to create
            an immersive experience that not only honors our heritage but also
            fosters a sense of togetherness. Join us in the celebration of
            diversity, the joy of dance, and the spirit of community as we
            embrace the true essence of Raas Garba in the heart of Dallas. Let
            the rhythm of unity and cultural pride resonate as we come together
            to weave the threads of tradition in the colorful fabric of our
            shared heritage.
          </Text>
        </Flex>
        <Flex
          w="50%"
          borderWidth="4px"
          borderColor={palette.dtxGold}
          justify="center"
          mt="90px"
        >
          <Heading as="h1" color={palette.dtxGold}>
            <Text style={{ whiteSpace: "nowrap" }}>{currentCommittee}</Text>
          </Heading>
        </Flex>
        <HStack w="80%" justify="center" mt="40px">
  {generateCards()}
</HStack>
        <Flex justify="space-between" w="20%" mt="20px">
          <Button onClick={handleLeftArrowClick}>&#8249;</Button>
          <Button onClick={handleRightArrowClick}>&#8250;</Button>
        </Flex>
      </VStack>
    </Box>
  );
};
export default AboutUs;