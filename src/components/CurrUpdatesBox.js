import { Box, Flex, Heading, HStack, Button, Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import julianpic from '../pics/julianwbg.png'

const CurrUpdatesBox = () =>{
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

  export default CurrUpdatesBox;