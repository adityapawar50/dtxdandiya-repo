import { Box, Flex, Heading, HStack, Button, Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import julianpic from '../pics/julianwbg.png'
import { getFirestore, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import {db,collection, addDoc, getDocs, doc, setDoc } from '../Firebase'; // Import from your firebase.js file


const CurrUpdatesBox = () =>{
  const [announcement, setAnnouncement] = useState('');
  const [upNext, setUpNext] = useState('');

  useEffect ( ()=> {
    const fetchAnnouncementData = async () => {
      const anncDocRef = doc(db, 'comp', 'announcements');
      const unsubscribeAnnouncement = onSnapshot(anncDocRef, (doc) =>{
        if (doc.exists()){
          console.log("curr data fri: ", doc.data());


          const announcementData = doc.data();
          setAnnouncement(announcementData.homepage)
          
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

  useEffect ( ()=> {
    const fetchupNextData = async () => {
      const upNextDocRef = doc(db, 'comp', 'announcements');
      const unsubscribeUpNext = onSnapshot(upNextDocRef, (doc) =>{
        if (doc.exists()){

          const announcementData = doc.data();
          setUpNext(announcementData.hompageUpNext)
          
        } else{
          console.log("document does not exist")
          
        }
        

      });

      return () => {
        // Unsubscribe from the snapshot listener when the component unmounts
        unsubscribeUpNext();

      };

      
    };
    fetchupNextData();

  }, [db, upNext]); 

    return(
    <Flex bg ={palette.bgDarkGreen} color = {palette.dtxGold}  w = "100%" justify = "center"  align = "center">
      <Card
        direction={{ base: 'row', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w={{ base: '70%', sm: '500px'}}
        bg = {palette.bgDarkGreen}
        borderColor={palette.dtxGold}
        borderWidth='4px'
        minW = "350px"
        
      >
        <Image
          src = {julianpic}
          borderRadius='0'
          objectFit='cover'
          maxW={{ base: '40%', sm: '200px' }}
          maxH = {{ base: '100%', sm: '100%' }}
        />

        <Stack >
          <CardBody  fontSize = {{ base: 'xs', sm: 'sm', md:"md", lg:'lg'}} maxH = {{ base: '80px', sm: '100%' }} >
            <Heading size='lg' color = {palette.dtxGold} textDecoration="underline solid" fontSize = {{ base: 'md',  md:"md", lg:'lg'}}>Currently...</Heading>

            <Text py='1' color = {palette.dtxGold}>
              {announcement}
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' bg={palette.dtxGold} color = {palette.bgDarkGreen} fontSize = {{ base: 'xs', sm: 'sm', md:"md"}} maxH= {{ base: '30px', sm: '100%' }}>
              Up Next: {upNext}
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
    )
  }

  export default CurrUpdatesBox;