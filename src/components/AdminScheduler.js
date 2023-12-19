import { useState, useEffect } from 'react';
import { Box, Flex, Heading, HStack, Button, Checkbox,Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
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
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';




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

    const [selectedRows, setSelectedRows] = useState([]);

    const handleCheckboxChange = (index, day) => {
      const isSelected = selectedRows.includes(index);
      if (isSelected) {
        setSelectedRows(selectedRows.filter((selectedIndex) => selectedIndex !== index));
      } else {
        setSelectedRows([...selectedRows, index]);
      }
    };

    const deleteRows = async() => {
        // Make a copy of the current state arrays
        const updatedEvents = [...(compDay ? eventsFri : eventsSat)];
        const updatedLocations = [...(compDay ? locationsFri : locationsSat)];
        const updatedTimes = [...(compDay ? timesFri : timesSat)];

        // Remove selected rows based on the selectedRows array
        selectedRows.forEach((index) => {
            updatedEvents.splice(index, 1);
            updatedLocations.splice(index, 1);
            updatedTimes.splice(index, 1);
        });

        // Update Firestore data
        const collectionName = compDay ? 'friday' : 'saturday';
        const docRef = doc(db, 'comp', 'schedule', collectionName, 'sched');

        await setDoc(docRef, {
            what: updatedEvents,
            where: updatedLocations,
            when: updatedTimes,
        });

        // Clear selected rows after deletion
        setSelectedRows([]);
    }

    

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
                <TableCaption
                  placement="bottom"
                  color = {palette.dtxGold}
                >
                  <HStack justify = "center" spacing = "10%" >
                    <Button variant='outline' mr={3} colorScheme ={palette.dtxGold} onClick={deleteRows()} >
                      delete
                    </Button>
  
                    <Button variant='outline' mr={3} colorScheme ={palette.dtxGold} onClick={isSaturday}>
                      update
                    </Button>
  
                  </HStack>
                </TableCaption>
                <Thead color = {palette.dtxGold} bg = {palette.dtxGold}>
                  <Tr>
                    <Th color = {palette.bgDarkGreen}>What?</Th>
                    <Th color = {palette.bgDarkGreen}>Where?</Th>
                    <Th color = {palette.bgDarkGreen}> When?</Th>
                    <Th color = {palette.bgDarkGreen}>Select</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {compDay 
                  ? eventsFri.map((event, index) => (
                    <Tr key={index}>
                      <Td>
                        <Editable defaultValue={eventsFri[index]}>
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                      </Td>
                      <Td>
                        <Editable defaultValue={locationsFri[index]}>
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                      </Td>
                      <Td>
                        <Editable defaultValue={timesFri[index]}>
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                      </Td>
                      <Td>
                        <Checkbox
                          isChecked={selectedRows.includes(index)}
                          onChange={() => handleCheckboxChange(index)}
                        />
                      </Td>
                    </Tr>
                  ))
                  : eventsSat.map((event, index) => (
                    <Tr key={index}>
                      <Td>
                        <Editable defaultValue={eventsSat[index]}>
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                      </Td>
                      <Td>
                        <Editable defaultValue={locationsSat[index]}>
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                      </Td>
                      <Td>
                        <Editable defaultValue={timesSat[index]}>
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                      </Td>
                      <Td>
                        <Checkbox
                          isChecked={selectedRows.includes(index)}
                          onChange={() => handleCheckboxChange(index)}
                        />
                      </Td>
                    </Tr>
                  ))
                  }
                </Tbody>

              </Table>
            </TableContainer>  
    
      </Flex>
    );
  }


  export default AdminScheduler;