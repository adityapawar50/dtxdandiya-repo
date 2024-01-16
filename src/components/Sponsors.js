import React from "react";
import {Box, VStack, Heading,Text, Image, SimpleGrid, Flex, Wrap, WrapItem} from "@chakra-ui/react";
import { palette } from "../styling/theme";
import milaan from '../pics/sponsorpics/milannaDance.png'
import kiwed from '../pics/sponsorpics/kiweddings.png'
import prime from '../pics/sponsorpics/primetimedentist.png'
import tan from '../pics/sponsorpics/tanishqjewel.png'
import hariom from '../pics/sponsorpics/hariom.png'


// const Sponsors = () => {
//     return (
//         <Box w="100%" mt="50">
//         <VStack w="100%" mt="10px">
//           <Flex w="50%" borderWidth="4px" borderColor={palette.dtxGold} justify="center">
//             <Heading as="h1" color={palette.dtxGold}>
//               <Text style={{ whiteSpace: "nowrap" }}>Sponsors</Text>
//             </Heading>
//           </Flex>
//           <Wrap w="90%" align="center" justify="center" mt="15px" spacing={{ base: 4, sm: 8, md: 12 }}>
//             <WrapItem>
//               <Heading as="h1" color={palette.dtxGold}>
//                 <Text style={{ whiteSpace: "nowrap" }}>Hari OM Corp</Text>
//               </Heading>
//             </WrapItem>
//             <WrapItem>
//               <Image src={milaan} w="40%" />
//             </WrapItem>
//             <WrapItem>
//               <Image src={kiwed} w="40%" />
//             </WrapItem>
//             <WrapItem>
//               <Image src={prime} w= "40%" />
//             </WrapItem>
//             <WrapItem>
//               <Image src={tan} w="40%" />
//             </WrapItem>
//           </Wrap>
//         </VStack>
//       </Box>
      
//     );
// }

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
           w= {{base: "180px", sm: "250px", md:"400px"}} mt = {{base: "15", sm: "20"}}/>
            <SimpleGrid p = "5" columns = {2} spacing = {{base: "5", sm: "10"}} w= {{base: "350px", sm: "500px", md:"700px"}} > 
                <Image src={milaan} border="8px" borderColor={palette.shinySilver} borderRadius="5px" />
                <Image src={kiwed} border="8px" borderColor={palette.shinySilver} borderRadius="5px"/>
                <Image src={prime} border="8px" borderColor={palette.shinyBronze} borderRadius="5px" />
                <Image src={tan} border="8px" borderColor={palette.shinyBronze} borderRadius="5px" />
            </SimpleGrid>
            </VStack>
        </Box>

    )
}

export default Sponsors;