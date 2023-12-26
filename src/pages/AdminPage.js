//AdminPage.js
import { useState, useEffect } from 'react';
import { Box, Flex, Heading, HStack, Button, Checkbox,Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
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


  
  return (
    
    <Box bg ={palette.bgDarkGreen}  w = "100%"  minh = "1000px" overflowX="auto">
    <VStack align="center" justify="center" spacing="10px" >
      <Header />
      <FirebaseAuth/>
      <Flex w = "100%">
        <VStack spacing="40px" w = "100%" >


          <Box p="4">'About Us'</Box>
          <Box p="4">Sponsors</Box>
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

