import React from "react";
import {Box, VStack, Heading,Text, Image, SimpleGrid, Flex, Wrap, WrapItem} from "@chakra-ui/react";
import { palette } from "../styling/theme";
import milaan from '../pics/sponsorpics/milannaDance.png'
import kiwed from '../pics/sponsorpics/kiweddings.png'
import prime from '../pics/sponsorpics/primetimedentist.png'
import tan from '../pics/sponsorpics/tanishqjewel.png'
import hariom from '../pics/sponsorpics/hariom.png'
import dunkin from '../pics/sponsorpics/dunkin.png'
import bombay from '../pics/sponsorpics/bombaysizzler.png'
import nylife from '../pics/sponsorpics/nylife.png'
import prasche from '../pics/sponsorpics/prashedecor.png'



const Sponsors = () => {
    return(
        <Box w="100%" mt="80px" >
            <VStack w="100%" mt="10px">
            <Flex w="50%" borderWidth="4px" borderColor={palette.dtxGold} justify="center">
             <Heading as="h1" color={palette.dtxGold}>
               <Text style={{ whiteSpace: "nowrap" }}>Sponsors</Text>
             </Heading>
           </Flex>
           <Image src={hariom} border="8px" borderColor={palette.dtxGold} borderRadius="10px"
           w= {{base: "180px", sm: "250px", md:"400px"}} mt = {{base: "30px", sm: "35px"}}/>
           <SimpleGrid p = "5" columns = {2} spacing = {{base: "5", sm: "10"}} w= {{base: "350px", sm: "500px", md:"700px"}} > 
                <Image src={milaan} border="8px" borderColor={palette.shinySilver} borderRadius="5px" />
                <Image src={kiwed} border="8px" borderColor={palette.shinySilver} borderRadius="5px"/>

            </SimpleGrid>
            <SimpleGrid p = "5" columns = {3} spacing = {{base: "5", sm: "10"}} w= {{base: "350px", sm: "500px", md:"700px"}} > 
                <Image src={prime} border="4px" borderColor={palette.shinyBronze} borderRadius="5px" />
                <Image src={tan} border="4px" borderColor={palette.shinyBronze} borderRadius="5px" />
                <Image src={prasche} border="4px" borderColor={palette.shinyBronze} borderRadius="5px" />
                <Image src={bombay} border="4px" borderColor={palette.shinyBronze} borderRadius="5px" />
                <Image src={dunkin} border="4px" borderColor={palette.shinyBronze} borderRadius="5px" />
                <Image src={nylife} border="4px" borderColor={palette.shinyBronze} borderRadius="5px" />
            </SimpleGrid>
            </VStack>
        </Box>

    )
}

export default Sponsors;