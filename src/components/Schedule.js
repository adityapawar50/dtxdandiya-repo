// component to highlight what is going on 
import { Box, Flex,HStack, Button } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import React from "react";
import { useState, useEffect } from 'react';
import {db,doc } from '../Firebase'; // Import from your firebase.js file
import { getFirestore, onSnapshot } from 'firebase/firestore';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'


// placeholder schedule for now
const MainSchedule = ({ scheduleName }) =>{
  const [eventsFri, setEventsFri] = useState([]);
  const [locationsFri, setLocationsFri] = useState([]);
  const [timesFri, setTimesFri] = useState([]);

  const [eventsSat, setEventsSat] = useState([]);
  const [locationsSat, setLocationsSat] = useState([]);
  const [timesSat, setTimesSat] = useState([]);

  const [compDay, setDay] = React.useState(true);
  const isFriday = () => setDay(true);
  const isSaturday = () => setDay(false)


  useEffect ( ()=> {
    const fetchFridayData = async () => {
      const fridayDocRef = doc(db, "comp", scheduleName, "friday", "sched")
      const unsubscribeFriday = onSnapshot(fridayDocRef, (doc) =>{
        if (doc.exists()){
          console.log("curr data: ", doc.data());
          const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          console.log(source, " data: ", doc.data());

          const fridayScheduleData = doc.data();
          setEventsFri(fridayScheduleData.what)
          setTimesFri(fridayScheduleData.when)
          setLocationsFri(fridayScheduleData.where)
        } else{
          console.log("document does not exist")
        }
        

      });

      return () => {
        // Unsubscribe from the snapshot listener when the component unmounts
        unsubscribeFriday();

      };

      
    };
    fetchFridayData();

  }, []);

  useEffect ( () => {
    const fetchSaturdayData = async () => {
      const saturdayDocRef = doc(db, "comp", scheduleName, "saturday", "sched")
      const unsubscribeSaturday = onSnapshot(saturdayDocRef, (doc) =>{
        if (doc.exists()){
          console.log("curr data: ", doc.data());
          const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          console.log(source, " data: ", doc.data());

          const saturdayScheduleData = doc.data();
          setEventsSat(saturdayScheduleData.what)
          setTimesSat(saturdayScheduleData.when)
          setLocationsSat(saturdayScheduleData.where)
        } else{
          console.log("document does not exist")
        }
      });

      return () => {
        // Unsubscribe from the snapshot listener when the component unmounts
        unsubscribeSaturday();

      };
    };
    fetchSaturdayData();

  }, []);

  



  return(
  <Flex bg ={palette.bgDarkGreen} color = {palette.dtxGold}  w = "100%" justify = "center" >
            <TableContainer >
            <Table variant='simple'  size={{ base: "sm", md: "lg", lg: "lg" }} colorScheme={palette.dtxGold}>

              <TableCaption
                placement="top"
                color = {palette.dtxGold}
              >
                <HStack justify = "center" spacing = "10%" >
                <Button  variant={compDay? 'solid':'outline'} mr={3}  borderColor = {palette.dtxGold} color ={palette.dtxGold} onClick={isFriday} >
                    Friday
                  </Button>

                  <Button variant={!compDay? 'solid':'outline'} mr={3} borderColor = {palette.dtxGold} color ={palette.dtxGold} onClick={isSaturday}>
                    Saturday
                  </Button>

                </HStack>
              </TableCaption>
              <Thead color = {palette.dtxGold} bg = {palette.dtxGold}>
                <Tr>
                  <Th color = {palette.bgDarkGreen}>What?</Th>
                  <Th color = {palette.bgDarkGreen}>Where?</Th>
                  <Th color = {palette.bgDarkGreen}> When?</Th>
                </Tr>
              </Thead>
              <Tbody>
              {compDay 
              ? eventsFri.map((event, index) => (
                <Tr key={index}>
                  <Td>{eventsFri[index]}</Td>
                  <Td>{locationsFri[index]}</Td>
                  <Td>{timesFri[index]}</Td>
                </Tr>
              ))
              : eventsSat.map((event, index) => (
                <Tr key={index}>
                  <Td>{eventsSat[index]}</Td>
                  <Td>{locationsSat[index]}</Td>
                  <Td>{timesSat[index]}</Td>
                </Tr>
              ))
              }
              </Tbody>
            </Table>
          </TableContainer>  
  
    </Flex>
  );
}

export default MainSchedule;