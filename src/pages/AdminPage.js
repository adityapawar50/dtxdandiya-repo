// AdminPage.js
import { useState, useEffect } from 'react';
import { Container, Box, Heading, Button, Input, VStack } from '@chakra-ui/react';
import { db, collection, addDoc, getDocs, doc, setDoc } from '../Firebase'; // Import from your firebase.js file
import { getFirestore } from 'firebase/firestore';

function AdminPage() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [cityName, setCityName] = useState('');



  
  async function getTest(db) {
    console.log(process.env.REA)
    const citiesCol = collection(db, 'testing');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
    
  }

  const handleAddCity = async (newCityName) => {
    const db = getFirestore(); // Get your Firestore instance

    try {
      // Reference to the 'cities' collection
      const citiesCollection = collection(db, 'testing');

      // Create a new document with an auto-generated ID
      const newCityRef = doc(citiesCollection);

      // Set data for the new document
      await setDoc(newCityRef, {
        name: newCityName,
        // Other fields as needed
      });

      console.log('City added successfully!');
    } catch (error) {
      console.error('Error adding city:', error.message);
    }
  };

  return (
    <Container>
      <Box p={4}>
        <Heading mb={4}>Admin Page</Heading>
        <Input
          placeholder="New Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          mr={2}
        />
        <Button colorScheme="teal" onClick={()=>console.log(getTest(db))}>
          Add Item
        </Button>

        <Box mt={4}>
          <Heading size="md">"ggober":</Heading>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </Box>
      <VStack spacing={4}>
      <Input
        placeholder="City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <Button colorScheme="teal"  onClick={()=>{console.log(process.env)}}>
        Add City
      </Button>
    </VStack>
      </Box>
    </Container>
  );
}

export default AdminPage;