import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, HStack, Button, Checkbox,WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
import {db,collection, addDoc, getDocs, doc, setDoc } from '../Firebase'; // Import from your firebase.js file
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
import React from "react";
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';




const AdminScheduler = () =>{
    
    const [eventsFri, setEventsFri] = useState([]);
    const [locationsFri, setLocationsFri] = useState([]);
    const [timesFri, setTimesFri] = useState([]);

    const [eventsSat, setEventsSat] = useState([]);
    const [locationsSat, setLocationsSat] = useState([]);
    const [timesSat, setTimesSat] = useState([]);

    const [selectedRowsFri, setSelectedRowsFri] = useState([]);
    const [selectedRowsSat, setSelectedRowsSat] = useState([]);

    const [compDay, setDay] = useState(true);

    const [renderInputs, setRenderInputs] = useState(0);

    const [newWhat, setNewWhat] = useState('');
    const [newWhere, setNewWhere] = useState('');
    const [newWhen, setNewWhen] = useState('');

    const [sched, setSched] = useState('schedule')
    const [selectedOption, setSelectedOption] = useState('Homepage');

    const isFriday = () => {
      setDay(true);

      setSelectedRowsSat([]);
      setSelectedRowsFri([]);
      
    };
    const isSaturday = () => {
      setDay(false);

      setSelectedRowsFri([]); 
      setSelectedRowsSat([]);

    }


    //update the firestore db with current passed in arrays
    const updateDoc= async(updatedEvents, updatedLocations, updatedTimes) => {
      const collectionName = compDay ? 'friday' : 'saturday';
      const docRef = doc(db, 'comp', sched, collectionName, 'sched');

      const orderedUpdatedData = orderData(updatedEvents,updatedLocations, updatedTimes);
      

      await setDoc(docRef, {
        what: orderedUpdatedData.whatArr,
        where: orderedUpdatedData.whereArr,
        when: orderedUpdatedData.whenArr,
      });



      console.log("doc updated")
    }


    const handleCheckboxChange = (index) => {
      //const isSelected = selectedRows.includes(index);
      const isSelected = compDay ? selectedRowsFri.includes(index) : selectedRowsSat.includes(index);
      
      if (compDay){
        if (isSelected ) {
          setSelectedRowsFri(selectedRowsFri.filter((selectedIndex) => selectedIndex !== index));
        } else {
          setSelectedRowsFri([...selectedRowsFri, index]);
        }
      }else{
        if (isSelected ) {
          setSelectedRowsSat(selectedRowsSat.filter((selectedIndex) => selectedIndex !== index));
        } else {
          setSelectedRowsSat([...selectedRowsSat, index]);
        }
      }
    };

    const handleEdit = (index, column, newValue) => {
      // Handle the edit, update your state or perform other actions
      console.log(`Editing row ${index}, column ${column} with value: ${newValue}`);
  
      // Update the state arrays based on the editing information
      if (compDay) {
        const updatedEvents = [...eventsFri];
        const updatedLocations = [...locationsFri];
        const updatedTimes = [...timesFri];
  
        if (column === 'what') {
          updatedEvents[index] = newValue;
        } else if (column === 'where') {
          updatedLocations[index] = newValue;
        } else if (column === 'when') {
          updatedTimes[index] = newValue;
        }
  
        setEventsFri(updatedEvents);
        setLocationsFri(updatedLocations);
        setTimesFri(updatedTimes);
      } else {
        // Handle editing for Saturday data similarly
        const updatedEvents = [...eventsSat];
        const updatedLocations = [...locationsSat];
        const updatedTimes = [...timesSat];
  
        if (column === 'what') {
          updatedEvents[index] = newValue;
        } else if (column === 'where') {
          updatedLocations[index] = newValue;
        } else if (column === 'when') {
          updatedTimes[index] = newValue;
        }
  
        setEventsSat(updatedEvents);
        setLocationsSat(updatedLocations);
        setTimesSat(updatedTimes);
      }
    };

    const addData = () =>{
      if (!newWhat || !newWhere || !newWhen) {
        alert('Please fill in all fields');
        return;
      }
      
      if (compDay){
        const updatedEvents = [...eventsFri, newWhat];
        const updatedLocations = [...locationsFri, newWhere];
        const updatedTimes = [...timesFri, newWhen];

        updateDoc(updatedEvents,updatedLocations, updatedTimes)

      }else{
        const updatedEvents = [...eventsSat, newWhat];
        const updatedLocations = [...locationsSat, newWhere];
        const updatedTimes = [...timesSat, newWhen];
  
        updateDoc(updatedEvents,updatedLocations, updatedTimes)

      }
      setNewWhat('')
      setNewWhen('')
      setNewWhere('')
      setRenderInputs((prevKey) => prevKey + 1);

    }

    const deleteRows = async() => {
        // Make a copy of the current state arrays
        const updatedEvents = [...(compDay ? eventsFri : eventsSat)];
        const updatedLocations = [...(compDay ? locationsFri : locationsSat)];
        const updatedTimes = [...(compDay ? timesFri : timesSat)];

        // Remove selected rows based on the selectedRows array
        compDay ?
          selectedRowsFri.forEach((index) => {
              updatedEvents.splice(index, 1);
              updatedLocations.splice(index, 1);
              updatedTimes.splice(index, 1);
          }):
          selectedRowsSat.forEach((index) => {
            updatedEvents.splice(index, 1);
            updatedLocations.splice(index, 1);
            updatedTimes.splice(index, 1);
          });
        
        //const orderedUpdatedData = orderData(updatedEvents, updatedLocations, updatedTimes)
        updateDoc(updatedEvents, updatedLocations, updatedTimes);
 


        // Clear selected rows after deletion
        setSelectedRowsSat([]);
        setSelectedRowsFri([]);
    }

    const getTimeData = (timeString) =>{
      const str = timeString.toLowerCase();
      const regexTime = /^(.*?):(..)/;
      const regexPartOfDay = /(am|pm)/;

      const matchResult = str.match(regexTime);
      const hour = matchResult[1]
      const mins = matchResult[2]

      const matchResult2 = str.match(regexPartOfDay);
      if (matchResult) {
        const amOrPm = matchResult2[0];

        var score = parseInt(hour) + (parseFloat(mins)/60);

        if (amOrPm == "pm"){
          score += 20;
        }

        return score;

      } else {
        alert('put in AM or PM and FOLLOW THE FORMAT');
      }

    }
    
    const orderData = (what, where, when) => {
        const arrLen = where.length;
        const scoreArr = new Array(arrLen);

        for (let i = 0; i < arrLen; i++){
          const timeString = when[i];
          scoreArr[i] = [getTimeData(timeString),i];
        }

        scoreArr.sort(function(a, b) {
          // Compare the time scores (the first element in each array)
          return a[0] - b[0];
        });

        const sortedArrWhat = new Array(arrLen);
        const sortedArrWhen = new Array(arrLen);
        const sortedArrWhere = new Array(arrLen);

        for (let i = 0; i < arrLen; i++){
          var index = scoreArr[i][1];
          sortedArrWhat[i] = what[index];
          sortedArrWhen[i] = when[index];
          sortedArrWhere[i] = where[index];
        }

        console.log("ORDERD what:" + sortedArrWhat)
        console.log("where ord:" + sortedArrWhere)
        console.log("when ord:" + sortedArrWhen)
        
        return {
          whatArr: sortedArrWhat,
          whenArr: sortedArrWhen,
          whereArr: sortedArrWhere
        }
    }

    useEffect ( ()=> {
      const fetchFridayData = async () => {
        const fridayDocRef = doc(db, "comp", sched, "friday", "sched")
        const unsubscribeFriday = onSnapshot(fridayDocRef, (doc) =>{
          if (doc.exists()){
            console.log("curr data fri: ", doc.data());


            const fridayScheduleData = doc.data();
            setEventsFri([...fridayScheduleData.what]);
            setTimesFri([...fridayScheduleData.when]);
            setLocationsFri([...fridayScheduleData.where]);
          } else{
            console.log("document does not exist")
            setEventsFri([]);
            setTimesFri([]);
            setLocationsFri([]);
          }
          

        });

        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribeFriday();

        };
  
        
      };
      fetchFridayData();
  
    }, [compDay, db, sched]);

    useEffect ( () => {
      const fetchSaturdayData = async () => {
        const saturdayDocRef = doc(db, "comp", sched, "saturday", "sched")
        const unsubscribeSaturday = onSnapshot(saturdayDocRef, (doc) =>{
          if (doc.exists()){
            console.log("curr data sat: ", doc.data());
  
            const saturdayScheduleData = doc.data();
            setEventsSat([...saturdayScheduleData.what]);
            setTimesSat([...saturdayScheduleData.when]);
            setLocationsSat([...saturdayScheduleData.where]);
          } else{
            console.log("document does not exist")
            setEventsSat([]);
            setTimesSat([]);
            setLocationsSat([]);
          }
        });
  
        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribeSaturday();
  
        };
      };
      fetchSaturdayData();

    }, [compDay, db, sched]);
    
    const MyDropdown = () => {
      //const [selectedOption, setSelectedOption] = useState('homepage schedule');

      const handleSelectOption = (option) => {
        setSelectedOption(option);
   
        
        switch(option){
          case 'Homepage':
            setSched('schedule')
            break;
          case 'DSD':
            setSched('scheduledsd')
            break;
          case 'UW Raas':
            setSched('scheduleuw')
            break;
          case 'WolverRaas':
            setSched('schedulewolw')
            break;
          case 'GT Ramblin':
            setSched('schedulegt')
            break;
          case 'WashU Raas':
            setSched('schedulewashu')
            break;
          case 'UCB Ramzaat':
            setSched('scheduleucb')
            break;
          case 'Wreckin Raas':
            setSched('schedulewreckin')
            break;
            case 'exec':
              setSched('scheduleexec')
              break;
        }
      };

      return (
        <Menu>
          <MenuButton  as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedOption }
          </MenuButton>
          <MenuList>
            <MenuItem onClick={()=> handleSelectOption("Homepage")}>Homepage Schedule </MenuItem>
            <MenuItem onClick={()=> handleSelectOption("exec")}>Exec</MenuItem>
            <MenuItem onClick={()=> handleSelectOption("DSD")}>DSD</MenuItem>
            <MenuItem onClick={()=> handleSelectOption("UW Raas")}>UW Raas</MenuItem>
            <MenuItem onClick={()=> handleSelectOption("WolverRaas")}>WolveRaas</MenuItem>
            <MenuItem onClick={()=> handleSelectOption("GT Ramblin")}>GT Ramblin</MenuItem>
            <MenuItem onClick={()=> handleSelectOption("WashU Raas")}>WashU Raas</MenuItem>
            <MenuItem onClick={()=> handleSelectOption("UCB Ramzaat")}>UCB Ramzaat</MenuItem>
            <MenuItem onClick={()=> handleSelectOption("Wreckin Raas")}>Wreckin Raas</MenuItem>
          </MenuList>
        </Menu>
      );
    };


    return(
    <Flex bg ={palette.bgDarkGreen} color = {palette.dtxGold}  w = "100%" justify = "center" >
            <VStack>
            <MyDropdown/>
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
  
                    <Button variant={!compDay? 'solid':'outline'} mr={3}  borderColor = {palette.dtxGold} color ={palette.dtxGold} onClick={isSaturday}>
                      Saturday
                    </Button>
  
                  </HStack>
                </TableCaption>
                <TableCaption
                  placement="bottom"
                  color = {palette.dtxGold}
                >
                  <HStack justify = "center" spacing = "10%" >
                    <Button variant='outline' mr={3} colorScheme ={palette.dtxGold} onClick={deleteRows} >
                      delete
                    </Button>
  
                    <Button variant='outline' mr={3} colorScheme ={palette.dtxGold}
                     onClick={ async () => {compDay ? await updateDoc(eventsFri,locationsFri,timesFri) : 
                     await updateDoc(eventsSat,locationsSat,timesSat)}}>
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
                  {compDay ?
                  eventsFri.map((event, indexFri) => (
                    <Tr key={indexFri}>
                      <Td>
                        <Editable 
                        key={`${compDay}-${eventsFri[indexFri]}`}
                        defaultValue={eventsFri[indexFri]}
                        onSubmit={(newValue) => handleEdit(indexFri, 'what', newValue)}
                        >
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                      </Td>
                      <Td>
                        <Editable 
                        key={`${compDay}-${locationsFri[indexFri]}`}
                        defaultValue={locationsFri[indexFri]}
                        onSubmit={(newValue) => handleEdit(indexFri, 'where', newValue)}>
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                      </Td>
                      <Td>
                        <Editable  
                        key={`${compDay}-${timesFri[indexFri]}`} 
                        defaultValue={timesFri[indexFri]}
                        onSubmit={(newValue) => handleEdit(indexFri, 'when', newValue)}>
                          <EditablePreview />
                          <EditableInput />
                        </Editable>
                      </Td>
                      <Td>
                        <Checkbox
                          isChecked={selectedRowsFri.includes(indexFri)}
                          onChange={() => handleCheckboxChange(indexFri)}
                        />
                      </Td>
                    </Tr>
                  ))
                :
                eventsSat.map((event, indexSat) => (
                  <Tr key={indexSat}>
                    <Td>
                      <Editable  key={`${compDay}-${eventsSat[indexSat]}`} 
                      defaultValue={eventsSat[indexSat]}
                      onSubmit={(newValue) => handleEdit(indexSat, 'what', newValue)}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                    <Td>
                      <Editable key={`${compDay}-${locationsSat[indexSat]}`}
                       defaultValue={locationsSat[indexSat]}
                       onSubmit={(newValue) => handleEdit(indexSat, 'where', newValue)}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                    <Td>
                      <Editable key={`${compDay}-${timesSat[indexSat]}`} 
                      defaultValue={timesSat[indexSat]}
                      onSubmit={(newValue) => handleEdit(indexSat, 'when', newValue)}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                    <Td>
                      <Checkbox
                        isChecked={selectedRowsSat.includes(indexSat)}
                        onChange={() => handleCheckboxChange(indexSat)}
                      />
                    </Td>
                  </Tr>
                ))}
                </Tbody>

              </Table>
            </TableContainer>  
            
            <VStack spacing={4}>
              <Text py='2' color = "white" w = "70%" justify = 'center' 
              align = 'center' fontSize = {{ base: 'md', md:"lg", lg:'xl'}}>
                  schedule input Area
              </Text>
              <Editable
                key={`editable-${renderInputs}-what`}
                placeholder="input event"
                defaultValue={newWhat}
                onSubmit={(value) => { setNewWhat(value); }}
                >
                  <EditablePreview 
                  borderColor="white"  
                  borderWidth="2px"   />
                  <EditableInput
                  borderColor="white" 
                  borderWidth="2px"    />
              </Editable>
              <Editable 
                key={`editable-${renderInputs}-where`}
                placeholder="input where it is"
                defaultValue={newWhere}
                onSubmit={(value) => { setNewWhere(value); }}
                >
                  <EditablePreview 
                  borderColor="white"  
                  borderWidth="2px"   />
                  <EditableInput
                  borderColor="white" 
                  borderWidth="2px"    />
              </Editable>
              <Editable 
                key={`editable-${renderInputs}-when`}
                placeholder={"input when it is"}
                defaultValue={newWhen}
                onSubmit={(value) => { setNewWhen(value); }}
                >
                  <EditablePreview 
                  borderColor="white"  
                  borderWidth="2px" 
                  />
                  <EditableInput
                  borderColor="white" 
                  borderWidth="2px"    />
              </Editable>
              <Button colorScheme="teal" onClick={addData}>
                Add
              </Button>
            </VStack>
          </VStack>

    
      </Flex>
      
    );
  }


  export default AdminScheduler;