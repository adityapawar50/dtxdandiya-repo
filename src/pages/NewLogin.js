import React from "react";
import Header from '../components/Header'
import { palette } from '../styling/theme'
import Footer from '../components/Footer'
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  VStack,
  InputRightElement,
  InputGroup
} from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";

function NewLogin() {
  const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const handleLogin = () => {
    // Perform a conditional check based on the entered password
    switch (password) {
      case process.env.REACT_APP_TEXAS_PASS:
        // Redirect to Team 1 portal
        navigate("/junglebook");
        break;
      case process.env.REACT_APP_GT_PASS:
        // Redirect to Team 2 portal
        navigate("/schoolhouse");
        break;
      case process.env.REACT_APP_WOLW:
        // Redirect to Team 3 portal
        navigate("/boardgames");
        break;
      case process.env.REACT_APP_TAMU:
        // Redirect to Team 4 portal
        navigate("/hollywood");
        break;
      case process.env.REACT_APP_WASHU:
        // Redirect to Team 5 portal
        navigate("/eiffel");
        break;
      case process.env.REACT_APP_UCB:
        // Redirect to Team 6 portal
        navigate("/spain");
        break;
      case process.env.REACT_APP_UW:
        // Redirect to Team 7 portal
        navigate("/smores");
        break;
      default:
        // Handle incorrect password or other cases
        // For now, just log an error
        alert("Incorrect password");
        break;
    }
  };

  return (
//     <Box bg ={palette.bgDarkGreen}  w = "100%"  overflowX="auto">
//     <VStack align="center" justify="center" spacing="10px" >
//       <Header />
//     <Center h="100vh">
//       <Container>
//         <InputGroup size="md">
//           <Input
//             pr="4.5rem"
//             type={show ? "text" : "password"}
//             placeholder="Enter password"
//             fontFamily="Times New Roman"
//             color="white"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//         <Button colorScheme="teal" onClick={handleLogin}>
//           Login
//         </Button>
//       </Container>
//     </Center>

//  </VStack>  
//  </Box>q 
<Flex flexDirection="column" bg={palette.bgDarkGreen} h="100vh" minH = "800">
<Flex alignItems="center" justifyContent="center"  h="100%" bg={palette.bgDarkGreen} flex="1">
  <Header />
    
  <Flex
    style={{ marginTop: '100px' }}
    flexDirection="column"
    bg={'gray.100'}
    p={12}
    borderRadius={8}
    boxShadow="lg"
  >
    
    <Heading mb={6} color={palette.bgDarkGreen}>
      Log In
    </Heading>
    <InputGroup size="md">
    <Input
      placeholder="passcode 🦁"
      variant="filled"
      mb={6}
      focusBorderColor={palette.dtxGold}
      onChange={(e) => setPassword(e.target.value)}
      pr="4.5rem"
      type={show ? "text" : "password"}
    />
    <InputRightElement width="4.5rem">
             <Button h="1.75rem" size="sm" onClick={handleClick}>
               {show ? "Hide" : "Show"}
             </Button>
           </InputRightElement>
    </InputGroup>
    <Button bg={palette.dtxGold} mb={8}  onClick={handleLogin}>
      Log In
    </Button>

  </Flex>
</Flex>

  <Footer/>
</Flex>

  );
}

export default NewLogin;
