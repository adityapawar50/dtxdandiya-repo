import { ChakraProvider, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Container } from '@chakra-ui/react'
import Header from '../components/Header'




function VenueMap() {
    return (
    <Container>
        <Text fontSize="x1" textAlign="center">Welcome to quite literally the greatest venue in the history of mankind any bad biddies hit my dms -NotRishi  </Text>
        <iframe
        title="Venue Map"
        width="700"
        height="550"
        frameBorder="0"
        src="https://www.uta.edu/maps/embed?id=54"
        allowFullScreen
    ></iframe>
    </Container>
    )
  }
  
  export default VenueMap;