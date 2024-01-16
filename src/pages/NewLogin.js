import React from "react";
import Header from '../components/Header'
import { palette } from '../styling/theme'
import { Container, Center, Box, VStack, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NewLogin() {
  const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const handleLogin = () => {
    // Perform a conditional check based on the entered password
    switch (password) {
      case "gloriatexasraas2024":
        // Redirect to Team 1 portal
        navigate("/team1");
        break;
      case "kingjulianramblinraas":
        // Redirect to Team 2 portal
        navigate("/team2");
        break;
      case "martywolveraas":
        // Redirect to Team 3 portal
        navigate("/team3");
        break;
      case "alexwreckinraas":
        // Redirect to Team 4 portal
        navigate("/team4");
        break;
      case "mortwashu":
        // Redirect to Team 5 portal
        navigate("/team5");
        break;
      case "penguinsramzat":
        // Redirect to Team 6 portal
        navigate("/team6");
        break;
      case "melmanuwraas":
        // Redirect to Team 7 portal
        navigate("/team7");
        break;
      default:
        // Handle incorrect password or other cases
        // For now, just log an error
        console.error("Incorrect password");
        break;
    }
  };

  return (
    <Box bg ={palette.bgDarkGreen}  w = "100%"  overflowX="auto">
    <VStack align="center" justify="center" spacing="10px" >
      <Header />
    <Center h="100vh">
      <Container>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            fontFamily="Times New Roman"
            color="white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </Container>
    </Center>

 </VStack>  
 </Box>
  );
}

export default NewLogin;
