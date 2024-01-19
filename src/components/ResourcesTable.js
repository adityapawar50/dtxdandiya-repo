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

const ResourcesTable = ({ data }) => {
  return (
    <TableContainer>
      <Table variant="simple" size={{ base: "sm", md: "lg", lg: "lg" }}border="4px" borderColor="white" borderCollapse="separate" borderSpacing="0 10px">
        <TableCaption placement="top" color="white">
          Quick Contact
        </TableCaption>
        <Thead color="white">
          <Tr>
            <Th color="white" textAlign="center" >Position</Th>
            <Th color="white" textAlign="center" >Name</Th>
            <Th color="white" textAlign="center" >Phone Number</Th>
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
