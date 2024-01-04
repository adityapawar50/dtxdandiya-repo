import React from "react";
import { Box, Button, Input, InputGroup, InputRightElement, CloseButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ isOpen, onClose }) => {
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  // Access the navigate object
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
        // For now, just close the popup
        onClose();
        break;
    }
  };

  return (
    <Box
      display={isOpen ? "block" : "none"}
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      p={4}
      bg="white"
      borderRadius="md"
      boxShadow="lg"
    >
      <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          color={"black"}
          fontFamily="Times New Roman"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPopup;
