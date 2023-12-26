//AdminPage.js
import { useState, useEffect } from 'react';
import { Box, Flex, List, ListItem,Heading, HStack, Button, Checkbox,Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner, UnorderedList } from "@chakra-ui/react";
import {db,collection, addDoc, getDocs, doc, setDoc, auth } from '../Firebase'; // Import from your firebase.js file
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
import AdminScheduler from '../components/AdminScheduler';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FirebaseAuth from '../components/FirebaseAuth';


function AdminPage() {

  const VerticalBulletList = () => {
    return (
      <UnorderedList  spacing = {3} textAlign={'left'} w='80%' ml ={4} color = {palette.dtxGold}>
        <ListItem>
          <Text>LOGIN FIRST, click the google sign in thing</Text>
        </ListItem>
        <ListItem>
          <Text>to edit schedule: click on items in box, edit them, THEN CLICK UPDATE</Text>
        </ListItem>
        <ListItem>
          <Text>to delete items: use select checkbox, select all you want to delete, THEN CLICK DELETE</Text>
        </ListItem>
        <ListItem>
          <Text>to add: use 3 input boxes below schedule</Text>
        </ListItem>
        <ListItem>
          <Text>when adding new event, FILL OUT ALL THREE CRITERIA (wont work if not all are given), then CLICK ADD</Text>
        </ListItem>
        <ListItem>
          <Text>when adding the time for a new event or editing times for old event 
            FOLLOW THIS FORMAT 11:05AM. with hour, semicolon, NO SPACE and AM/pm then SPACE dash.
            and then end time. plz follow becasue with that format is how it gets sorted in order
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            EXAMPLE : 8:00AM - 3:12PM
          </Text>
        </ListItem>
        {/* Add more items as needed */}
      </UnorderedList>
    );
  };
  
  return (
    
    <Box bg ={palette.bgDarkGreen}  w = "100%"  minh = "1000px" overflowX="auto">
    <VStack align="center" justify="center" spacing="10px" >
      <Header />
      <Box p="4">'About Us'</Box>
      <FirebaseAuth/>
      <Flex w = "100%">
        <VStack spacing="40px" w = "100%" >
          <Flex justify = 'center' mt = "30px">
                    <Text py='2' color = {palette.dtxGold} w = "70%" justify = 'center' align = 'center' fontSize = {{ base: 'md', md:"lg", lg:'xl'}}>
                    RULES TO USE SCHEDULER
                    </Text>        
          </Flex>
          <VerticalBulletList/>
          <AdminScheduler/>
          <Box p="4">Sponsors</Box>
          <Box p="4">Sponsors</Box>

        </VStack>
      </Flex>
    </VStack>  
</Box>
  );
}

export default AdminPage;

