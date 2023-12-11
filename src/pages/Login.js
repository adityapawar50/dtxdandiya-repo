
import React, { useState } from 'react';
import { useHistory } from 'react';
import { Box, Input, Button, Heading } from '@chakra-ui/react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Mock authentication - replace this with backend authentication
    const mockUsername = 'team1';
    const mockPassword = 'password';

    if (username === mockUsername && password === mockPassword) {
      // Redirect to the team portal page
      history.push('/teamportal');
    } else {
      console.log('Invalid username or password');
      // Handle incorrect login (e.g., show an error message)
    }
  };

  return (
    <Box p={4} maxWidth="400px" margin="auto" mt={20}>
      <Heading mb={4}>Login</Heading>
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        mb={4}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mb={4}
      />
      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
