import React from "react";
import {
    Flex,
    Heading,
    HStack,
    IconButton,
    Spacer,
    Text,
    Box
  } from '@chakra-ui/react'
import tiktok from '../pics/tiktok.png'
import insta from '../pics/instagram.png'
import { palette } from "../styling/theme";


const openInstagram = () => {
    window.open("https://www.instagram.com/dtx.dandiya/?hl=en", "_blank");
  };
  
const openTiktok = () => {
window.open("https://www.tiktok.com/@dtx.dandiya", "_blank");
};

const SimpleFooter = () => {

    return (
        <footer>
            <Flex mb = "4" h="90px" mt = "80px" direction={['column', 'column', 'row']} w="full" px={6} align="center" bg={palette.bgDarkGreen}>
                <Heading color = {palette.dtxGold}  size="xs">Made with ❤️ by DTX Dandiya</Heading>
                <Spacer />
                <Text color = {palette.dtxGold} fontSize="xs">Copyright &copy; {new Date().getFullYear()} DTX Dandiya</Text>
                <Spacer />
                <HStack spacing={1}>
                    <Box mr="4" h="50%" w="30px">
                        <img src={insta} alt="Logo" h="10px" w="10px" onClick={openInstagram} />
                    </Box>
                    <Box mr="4" h="50%" w="30px">
                        <img src={tiktok} alt="Logo" h="10px" w="10px" onClick={openTiktok} />
                    </Box>
                </HStack>
            </Flex>
        </footer>
    )
  }

  export default SimpleFooter;