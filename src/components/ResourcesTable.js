// ResourcesTable component
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { palette } from '../styling/theme';

const ResourcesTable = ({ data }) => {
  return (
    <TableContainer>
      <Table variant="simple" size={{ base: "sm", md: "lg", lg: "lg" }} colorScheme={palette.dtxGold}>
        <TableCaption placement="top" color="palette.dtxGold">
          Quick Contact
        </TableCaption>
        <Thead color={palette.dtxGold} bg = {palette.dtxGold}>
          <Tr>
            <Th color={palette.bgDarkGreen} textAlign="center" >Position</Th>
            <Th color={palette.bgDarkGreen} textAlign="center" >Name</Th>
            <Th color={palette.bgDarkGreen} textAlign="center" >Phone Number</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.boardPosition}</Td>
              <Td>{item.name}</Td>
              <Td>{item.phoneNumber}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ResourcesTable;
