// Resources component
import React from "react";
import { Box, Flex, VStack, Text, HStack,Wrap } from "@chakra-ui/react";
import ResourcesTable from "../components/ResourcesTable";
import { palette } from '../styling/theme';
import Header from '../components/Header';

const Resources = () => {
  const execData = [
    { boardPosition: "Director", name: "Veeren Patel", phoneNumber: "913-314-4727" },
    { boardPosition: "Director", name: "Rushi Surampudi", phoneNumber: "971-712-9721" },
    { boardPosition: "Director", name: "Rhea Raina", phoneNumber: "281-841-3858" },
    { boardPosition: "Director", name: "Aryan Patel", phoneNumber: "845-502-0766" },
    { boardPosition: "Logistics", name: "Meet Patel", phoneNumber: "469-826-7456" },
    { boardPosition: "Logistics", name: "Tanisha Bundela", phoneNumber: "469-235-8277" },
    { boardPosition: "Head Liason", name: "Suhas Nalla", phoneNumber: "214-973-1625" },
    { boardPosition: "Head Liason", name: "Anusha Jain", phoneNumber: "469-515-2851" },
    { boardPosition: "Tech", name: "Rishil Uppaluru", phoneNumber: "512-521-9355" },
    { boardPosition: "Tech", name: "Aditya Pawar", phoneNumber: "214-469-8074" },
  ];
  return (
    <Box bg={palette.bgDarkGreen} w="100%" overflowX="auto" minHeight="100vh">
      <Flex direction="column" align="center" justify="flex-end" height="100%">
        <Header />
        <VStack spacing="70px" align="center" color="white" mt="150" >
          {/* Resources Table with added margin-bottom */}
          <VStack spacing="20px" align="center" style={{ marginBottom: "20px" }}>
            {/* Add a spacer to push the table to the bottom */}
            <Box flex="10" />
            <ResourcesTable data={execData} />
          </VStack>

          {/* Nearby Restaurants and Nearby Facilities */}
          <Wrap spacing="4" justify="center">
            {/* Nearby Restaurants */}
            <Box w="40%" p="4" border="2px" borderRadius="lg" borderColor="white">
              <Text fontSize="xl" fontWeight="bold" >
                Nearby Restaurants
              </Text>
              <ul>
                <li>Pappasitos Cantina</li>
                <li>Boomer Jacks</li>
                <li>Chillis Grill and Bar</li>
              </ul>
            </Box>

            <Box
              w="40%"
              p="4"
              border="2px"
              borderRadius="lg"
              borderColor="white"
              ml="18"  // Adjust this margin-left value for the desired space
            >
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Nearby Facilities
              </Text>
              <ul>
                <li>Home Depot</li>
                <li>Six Flags</li>
                <li>Lincoln Square</li>
              </ul>
            </Box>
          </Wrap>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Resources;