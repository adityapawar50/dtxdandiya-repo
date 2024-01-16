
import React from "react";
import {
  Flex,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Resources = () => {
  // Generate fake data for the table
  const fakeData = [
    { name: "John Doe", phoneNumber: "555-1234" },
    // Add more fake data as needed
  ];

  return (
    <Flex bg="palette.bgDarkGreen" color="palette.dtxGold" w="100%" justify="center">
      <VStack>
        <Table variant="simple" size={{ base: "sm", md: "lg", lg: "lg" }} colorScheme="palette.dtxGold">
          <TableCaption placement="top" color="palette.dtxGold">
            {/* Add any caption content if needed */}
          </TableCaption>
          <Thead color="palette.dtxGold" bg="palette.dtxGold">
            <Tr>
              <Th color="palette.bgDarkGreen">Name</Th>
              <Th color="palette.bgDarkGreen">Phone Number</Th>
            </Tr>
          </Thead>
          <Tbody>
            {fakeData.map((item, index) => (
              <Tr key={index}>
                <Td>{item.name}</Td>
                <Td>{item.phoneNumber}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Flex>
  );
};

export default Resources;
