'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,Center,Square
} from '@chakra-ui/react'
import { palette } from '../styling/theme';
import dtxlogo from '../pics/dtxlogo.png'
import hero_p2 from '../pics/hero_p2.png'





export default function HeroWithPic() {
  return (
    <Flex bg ={palette.dtxGreen} w = "100%">
   
   <Box h = "100%" w = '100%'>
            <img src={hero_p2} alt="Logo"  />
    </Box>
      

  </Flex>
  )
}

