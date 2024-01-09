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
  import hero_mobile from '../pics/mobilehero.png'
  import titlepagehero from '../pics/titlepagehero.png'
  
  
  
  
  export default function HeroWithPic() {
    return (
      <Flex bg ={palette.bgDarkGreen} w = "100%">
     
        <Box w = '100%'>
                  <img src={hero_mobile} alt="Logo"  />
          </Box>
            
  
    </Flex>
    )
  }
  
  