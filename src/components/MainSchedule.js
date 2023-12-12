// component to highlight what is going on 

import { Box, Flex, Heading, HStack, Button, Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import julianpic from '../pics/julianwbg.png'


// placeholder schedule for now
export default function MainSched() {
  const eventArrayFri = ['mixer', 'crying with bob', 'food', 'wake up'];
  const locationArrayFri = ['ur moms bed', ' UTA admissions office', 'UTA dining hall', "bed"];
  const timeArrayFri = ['2 am - 2:20 am', '3 am', '8 am', "10am"];

  const eventArraySat = ['wake up', 'crying with ur mom', 'poop', 'pants joe', "leave"];
  const locationArraySat = ['in the sky', ' UTA dungeon', 'HH', "mama", "dfw aiport"];
  const timeArraySat = ['8 am - 9:20 am', '4 pm', '7 pm', "11 pm", "12 am"];

  const [compDay, setDay] = React.useState(false);

  const isFriday = () => setDay(true);
  const isSaturday = () => setDay(false)

  
  function CurrUpdatesBox(){
    return(
    <Flex bg ={palette.bgDarkGreen} color = {palette.dtxGold}  w = "100%" justify = "center"  align = "center">
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w={{ base: '70%', sm: '500px'}}
        bg = {palette.bgDarkGreen}
        borderColor={palette.dtxGold}
        borderWidth='4px'
        
      >
        <Image
          src = {julianpic}
          borderRadius='0'
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          maxH = {{ base: '90px', sm: '100%' }}
        />

        <Stack >
          <CardBody  fontSize = {{ base: 'xs', sm: 'sm', md:"md", lg:'lg'}} maxH = {{ base: '80px', sm: '100%' }} >
            <Heading size='lg' color = {palette.dtxGold} textDecoration="underline solid" fontSize = {{ base: 'md',  md:"md", lg:'lg'}}>Currently...</Heading>

            <Text py='1' color = {palette.dtxGold}>
              getting dinner w ur mom nad eating ice cream at braums after then watchign how to 
              train your dragon
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' bg={palette.dtxGold} color = {palette.bgDarkGreen} fontSize = {{ base: 'xs', sm: 'sm', md:"md"}} maxH= {{ base: '30px', sm: '100%' }}>
              Up Next: ice cream time
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
    )
  }
  

    return (
      <Flex bg ={palette.bgDarkGreen} color = {palette.dtxGold}  w = "100%" justify = "center" >
        <Wrap  spacingX = "10" justify = "center" align ="center" >
          <WrapItem p = "5">
            <CurrUpdatesBox/>
          </WrapItem>
          <WrapItem p = "5">

            <TableContainer >
            <Table variant='simple'  size={{ base: "sm", md: "lg", lg: "lg" }} colorScheme={palette.dtxGold}>

              <TableCaption
                placement="top"
                color = {palette.dtxGold}
              >
                <HStack justify = "center" spacing = "10%" >
                  <Button variant='outline' mr={3} colorScheme ={palette.dtxGold} onClick={isFriday} >
                    Friday
                  </Button>

                  <Button variant='outline' mr={3} colorScheme ={palette.dtxGold} onClick={isSaturday}>
                    Saturday
                  </Button>

                </HStack>
              </TableCaption>
              <Thead color = {palette.dtxGold} bg = {palette.dtxGold}>
                <Tr>
                  <Th color = {palette.bgDarkGreen}>What?</Th>
                  <Th color = {palette.bgDarkGreen}>Where?</Th>
                  <Th color = {palette.bgDarkGreen}> When?</Th>
                </Tr>
              </Thead>
              <Tbody>
              {compDay 
              ? eventArrayFri.map((event, index) => (
                <Tr key={index}>
                  <Td>{eventArrayFri[index]}</Td>
                  <Td>{locationArrayFri[index]}</Td>
                  <Td>{timeArrayFri[index]}</Td>
                </Tr>
              ))
              : eventArraySat.map((event, index) => (
                <Tr key={index}>
                  <Td>{eventArraySat[index]}</Td>
                  <Td>{locationArraySat[index]}</Td>
                  <Td>{timeArraySat[index]}</Td>
                </Tr>
              ))
              }
              </Tbody>
            </Table>
          </TableContainer>
      </WrapItem>

    </Wrap>
              
  
    </Flex>
    )
  }