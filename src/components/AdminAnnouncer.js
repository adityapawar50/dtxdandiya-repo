import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, HStack, Button, Checkbox,WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
import {db,collection, addDoc, getDocs, doc, setDoc } from '../Firebase'; // Import from your firebase.js file
import { getFirestore, onSnapshot } from 'firebase/firestore';
import { palette } from '../styling/theme';
import React from "react";
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react'



const AdminAnnouncer = () =>{
    const [announcement, setAnnouncement] = useState('');
    const [teams, setTeams] = useState([
        { name: 'exec', isSelected: false },
        { name: 'homepage', isSelected: false },
        { name: 'gt', isSelected: false },
        { name: 'dsd', isSelected: false },
        { name: 'ucb', isSelected: false },
        { name: 'uw', isSelected: false },
        { name: 'washu', isSelected: false },
        { name: 'wolw', isSelected: false },
        { name: 'wreckin', isSelected: false }
      ]);

    const handleInputChange = (e) => {
        let inputValue = e.target.value
        setAnnouncement(inputValue)
    }

    const handleTeamClick = (index) => {
        // Create a shallow copy of the teams array
        const newTeams = [...teams];
        
        // Toggle the isSelected property for the clicked team
        newTeams[index].isSelected = !newTeams[index].isSelected;
    
        // Update the state with the modified teams array
        setTeams(newTeams);
    };

    const isNoTeamSelected = () => {
        return teams.every(team => !team.isSelected);
    };

    const sendMessageToFireStore = async() =>{
        
        const selectedTeams = teams.filter(team => team.isSelected);
        
        const docRef = doc(db, 'comp', 'announcements' );
        selectedTeams.forEach( async (selectedTeam) => {
            setDoc(docRef, {
                [selectedTeam.name] : announcement,
              });
          });

    }

    const addData = () =>{
        if (!announcement | isNoTeamSelected()) {
          alert('Please fill in a message to send and select recipients');
          return;
        }


        setAnnouncement('')
    }

    return(
        <Flex bg ={palette.bgDarkGreen} color = {palette.dtxGold}  w = "100%" justify = "center" >
            <VStack spacing={4}>
                <Text py='2' color = "white" w = "70%" justify = 'center' 
                align = 'center' fontSize = {{ base: 'md', md:"lg", lg:'xl'}}>
                    Message input area
                </Text>
                <Textarea
                    value={announcement}
                    onChange={handleInputChange}
                    placeholder='Enter Message here'
                    size='sm'
                />
                <Wrap spacing="2">
                    {teams.map((team, index) => (
                    // Each WrapItem contains a Button component
                    <WrapItem key={index}>
                        <Button
                        onClick={() => handleTeamClick(index)}
                        colorScheme={team.isSelected ? "teal" : 'gray'}
                        >
                        {team.name}
                        </Button>
                    </WrapItem>
                    ))}
                </Wrap>
                <Button colorScheme="teal" onClick={addData}>
                    Add
                </Button>
            </VStack>
        </Flex>
    )
}

export default AdminAnnouncer;