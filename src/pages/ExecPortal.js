import * as React from 'react'
import { Box, Flex, List, ListItem,Heading, HStack, Button, Checkbox,Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner, UnorderedList } from "@chakra-ui/react";
import MainSched from '../components/Schedule'
import Header from '../components/Header'
import { palette } from '../styling/theme'

const ExecPortal = () => {
    return(
        <Box bg ={palette.bgDarkGreen}  w = "100%" minH = "800px" overflowX="auto">
            <Header />
            <VStack align="center" justify="center" spacing="10px"  mt="100px" >
                <Text py='2' color = {palette.dtxGold} w = "70%" justify = 'center' align = 'center' fontSize = {{ base: 'md', md:"lg", lg:'xl'}}>
                    Exec Schedule
                </Text>  
                <MainSched scheduleName={'schedule'} p = "10px"/>
            </VStack>
        </Box>
    )
}

export default ExecPortal;
