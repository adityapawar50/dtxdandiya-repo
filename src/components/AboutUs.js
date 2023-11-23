//about us section
import React from "react";
import { Link, Box, Flex, Text, Stack, Spacer, VStack, Heading, HStack, Image} from "@chakra-ui/react";
import { palette } from '../styling/theme';
import fathippo from '../pics/fathippo.png'
import stereotype from '../pics/funnyzebra.png'
import veeren from '../pics/veerenface.png'
import aryan from '../pics/aryanface.png'
import rhea from '../pics/rheaface.png'
import rushi from '../pics/rushiface.png'

const AboutUs = () =>{

    return(
        <Box
        w = "100%"
        mt = "70"
        >
            <VStack
            w = '100%'
            mt = "60px"
            >
                <Flex 
                w ='50%'
                borderWidth = "4px"
                borderColor={palette.dtxGold}
                justify= "center"
                >
                    {/* <Box w='15%' h='10' bg='red.500' /> */}
                    {/* <Spacer /> */}
                    <Heading as="h1"  color = {palette.dtxGold} >
                        <Text style={{whiteSpace: 'nowrap'}} >
                            About Us
                        </Text>
                    </Heading>
                    {/* <Spacer />
                    <Image
                    src={fathippo}
                    borderRadius='full'
                    boxSize='150px'
                    /> */}
                </Flex>
                <Flex justify = 'center' mt = "30px">
                    <Text py='2' color = {palette.dtxGold} w = "70%" justify = 'center' align = 'center'>
                    Welcome to the heart of Dallas, where the vibrant rhythms of tradition meet the beats of unity
                    at our annual Raas Garba competition. As a flagship event hosted by our college, this cultural 
                    extravaganza is more than just a celebration; it's a spirited endeavor to bring our community together.
                    Rooted in the rich tapestry of Indian culture, our Raas Garba competition takes center stage as a dynamic showcase
                    of dance, music, and tradition. With every graceful twirl and resonating drumbeat, we aim to create an immersive 
                    experience that not only honors our heritage but also fosters a sense of togetherness. Join us in the celebration 
                    of diversity, the joy of dance, and the spirit of community as we embrace the true essence of Raas Garba in the heart of Dallas. 
                    Let the rhythm of unity and cultural pride resonate as we come together to weave the threads of tradition in the colorful fabric of our shared heritage. 
                    </Text>
                </Flex>
                <Flex 
                w ='50%'
                borderWidth = "4px"
                borderColor={palette.dtxGold}
                justify= "center"
                mt = "90px">
                    <Heading as="h1"  color = {palette.dtxGold} >
                        <Text style={{whiteSpace: 'nowrap'}} >
                            Directors
                        </Text>
                    </Heading>
                </Flex>
                <HStack
                w = "80%"
                justify ='center'
                mt ="40px"
                >
                    <Box w = '80%' >
                        <VStack>
                            <Heading as="h1"  color = {palette.dtxGold} >
                                <Text style={{whiteSpace: 'nowrap'}}  justify = 'center'>
                                    Aryan Patel
                                </Text>
                            </Heading>
                            <Text py='2' color = {palette.dtxGold} w = "80%" justify = 'center'>
                                Welcome to the heart of Dallas, where the vibrant rhythms of tradition meet the beats of unity
                                at our annual Raas Garba competition. As a flagship event hosted by our college, this cultural 
                                extravaganza is more than just a celebration; it's a spirited endeavor to bring our community together.
            
                            </Text>
                        </VStack>
                    </Box>
                    <Image
                    src= {aryan}
                    boxSize='30%'
                    borderRadius='full'
                    />
                </HStack>
                <HStack
                w = "80%"
                justify ='center'
                mt ="40px"
                spacing="20px"
                >
                    <Image
                    src= {rhea}
                    boxSize='30%'
                    borderRadius='full'                    
                    />
                    <Box w = '80%' >
                        <VStack>
                            <Heading as="h1"  color = {palette.dtxGold} >
                                <Text style={{whiteSpace: 'nowrap'}}  justify = 'center'>
                                    Rhea Raina
                                </Text>
                            </Heading>
                            <Text py='2' color = {palette.dtxGold} w = "80%" justify = 'center'>
                                Welcome to the heart of Dallas, where the vibrant rhythms of tradition meet the beats of unity
                                at our annual Raas Garba competition. As a flagship event hosted by our college, this cultural 
                                extravaganza is more than just a celebration; it's a spirited endeavor to bring our community together.
            
                            </Text>
                        </VStack>
                    </Box>
                </HStack>
                <HStack
                w = "80%"
                justify ='center'
                mt ="40px"
                >
                    <Box w = '80%' >
                        <VStack>
                            <Heading as="h1"  color = {palette.dtxGold} >
                                <Text style={{whiteSpace: 'nowrap'}}  justify = 'center'>
                                    Rushi Surampudi
                                </Text>
                            </Heading>
                            <Text py='2' color = {palette.dtxGold} w = "80%" justify = 'center'>
                                Welcome to the heart of Dallas, where the vibrant rhythms of tradition meet the beats of unity
                                at our annual Raas Garba competition. As a flagship event hosted by our college, this cultural 
                                extravaganza is more than just a celebration; it's a spirited endeavor to bring our community together.
            
                            </Text>
                        </VStack>
                    </Box>
                    <Image
                    src= {rushi}
                    boxSize='30%'
                    borderRadius='full'
                    />
                </HStack>
                <HStack
                w = "80%"
                justify ='center'
                mt ="40px"
                spacing="20px"
                >
                    <Image
                    src= {veeren}
                    boxSize='30%'
                    borderRadius='full'                    
                    />
                    <Box w = '80%' >
                        <VStack>
                            <Heading as="h1"  color = {palette.dtxGold} >
                                <Text style={{whiteSpace: 'nowrap'}}  justify = 'center'>
                                    Veeren Patel
                                </Text>
                            </Heading>
                            <Text py='2' color = {palette.dtxGold} w = "80%" justify = 'center'>
                                Welcome to the heart of Dallas, where the vibrant rhythms of tradition meet the beats of unity
                                at our annual Raas Garba competition. As a flagship event hosted by our college, this cultural 
                                extravaganza is more than just a celebration; it's a spirited endeavor to bring our community together.
            
                            </Text>
                        </VStack>
                    </Box>
                </HStack>

            

            </VStack>
            
        </Box>
    )

}

export default AboutUs;