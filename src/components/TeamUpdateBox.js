import { Box, Flex, Heading, HStack, Button, Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { getFirestore, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import {db,collection, addDoc, getDocs, doc, setDoc } from '../Firebase'; // Import from your firebase.js file


const CurrUpdatesBox = ({imageSrc, team}) =>{
  const [announcement, setAnnouncement] = useState('');

  useEffect ( ()=> {
    const fetchAnnouncementData = async () => {
      const anncDocRef = doc(db, 'comp', 'announcements');
      const unsubscribeAnnouncement = onSnapshot(anncDocRef, (doc) =>{
        if (doc.exists()){
          console.log("curr data fri: ", doc.data());


          const announcementData = doc.data();
          setAnnouncement(announcementData[team])
          
        } else{
          console.log("document does not exist")
          
        }
        

      });

      return () => {
        // Unsubscribe from the snapshot listener when the component unmounts
        unsubscribeAnnouncement();

      };

      
    };
    fetchAnnouncementData();

  }, [db, announcement]); 


    return(
    <Flex bg ={palette.bgDarkGreen} color = {palette.dtxGold}  w = "100%" justify = "center"  align = "center">
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w={{ base: '70%', sm: '500px'}}
        bg = {palette.bgDarkGreen}
        borderColor={palette.dtxGold}
        borderWidth='4px'
        
      >
        <Image
          src = {imageSrc}
          borderRadius='0'
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          maxH = {{ base: '90px', sm: '100%' }}
        />

        <Stack >
          <CardBody  fontSize = {{ base: 'xs', sm: 'sm', md:"md", lg:'lg'}} maxH = {{ base: '80px', sm: '100%' }} >
            <Heading size='lg' color = {palette.dtxGold} textDecoration="underline solid" fontSize = {{ base: 'md',  md:"md", lg:'lg'}}>Currently...</Heading>

            <Text py='1' color = {palette.dtxGold}>
              {announcement}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Flex>
    )
  }

  export default CurrUpdatesBox;