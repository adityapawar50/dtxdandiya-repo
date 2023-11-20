// component to highlight what is going on 

import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { palette } from '../styling/theme';


// placeholder schedule for now
export default function HeroWithPic() {
    return (
      <Flex bg ={palette.bgDarkGreen} w = "100%">
     
     <Box h = "100%" w = '100%'>
              <img src={titlepagehero} alt="Logo"  />
      </Box>
        
  
    </Flex>
    )
  }