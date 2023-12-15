//AdminPage.js
import { useState, useEffect } from 'react';
import { Box, Flex, Heading, HStack, Button, Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
import {db,collection, addDoc, getDocs, doc, setDoc } from '../Firebase'; // Import from your firebase.js file
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
import { getFirestore, onSnapshot } from 'firebase/firestore';
import { palette } from '../styling/theme';
import Header from '../components/Header';
import React from "react";

function AdminPage() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [cityName, setCityName] = useState('');

  // const [eventsFri, setEventsFri] = useState([]);
  // const [locationsFri, setLocationsFri] = useState([]);
  // const [timesFri, setTimesFri] = useState([]);

 

  // const [compDay, setDay] = React.useState(false);

  // const isFriday = () => setDay(true);
  // const isSaturday = () => setDay(false)

  

  const AdminScheduler = () =>{
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
        const fridayDocRef = doc(db, "comp", "schedule", "friday", "sched")
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
        const saturdayDocRef = doc(db, "comp", "schedule", "saturday", "sched")
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
                    <Button variant='outline' mr={3} colorScheme ={palette.dtxGold} onClick={isFriday} >
                      Friday
                    </Button>
  
                    <Button variant='outline' mr={3} colorScheme ={palette.dtxGold} onClick={isSaturday}>
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




  return (
    
    <Box bg ={palette.bgDarkGreen}  w = "100%"  minh = "1000px" overflowX="auto">
    <VStack align="center" justify="center" spacing="10px" >
      <Header />
      
      <Flex w = "100%">
        <VStack spacing="40px" w = "100%" >


          <Box p="4">'About Us'</Box>
          <Box p="4">Sponsors</Box>
          <AdminScheduler/>
        </VStack>
      </Flex>
    </VStack>  
</Box>
  );
}

export default AdminPage;

