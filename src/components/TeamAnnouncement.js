import { Box, Flex, Heading, HStack, Button, Text, WrapItem, Wrap, Stack, Center, Image, VStack, ButtonSpinner } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { getFirestore, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import {db,collection, addDoc, getDocs, doc, setDoc } from '../Firebase'; // Import from your firebase.js file
import hippopic from '../pics/fathippo.png'

const TeamAnnouncementBox = ({team}) =>{
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

  return (
    <Flex bg ={palette.bgDarkGreen} color = {palette.dtxGold}  w = "90%" justify = "center"  align = "center">
        <Image
            borderRadius="full"
            boxSize={{ base: "40px", md: "90px", lg: '120px' }} // Adjust size for mobile and desktop
            src={hippopic}// Replace with your image URL
            alt="fat hippo"
            mr={{ base: 4, md: 8 }} // Margin right for spacing between image and text
        />
        <Text
        fontSize={{ base: 'sm', md: "lg", lg: "xl" }}>
            {announcement}
        </Text>
    </Flex>

  )
}

export default TeamAnnouncementBox;