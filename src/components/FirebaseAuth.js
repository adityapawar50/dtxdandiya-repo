import React, { useEffect } from 'react';
import { auth, ui } from '../Firebase'; // Import Firebase instances
import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import {Center, Box} from "@chakra-ui/react"

const FirebaseAuth = () => {
    useEffect(() => {
      // FirebaseUI configuration
      const uiConfig = {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        signInFlow: 'popup',
        signInSuccessUrl: '/admin',
        callbacks: {
          signInSuccessWithAuthResult: () => true,
          uiShown: () => {
            // Hide the loader when the widget is rendered.
            document.getElementById('loader').style.display = 'none';
          },
        },
        tosUrl: '<your-tos-url>',
        privacyPolicyUrl: '<your-privacy-policy-url>',
      };
  
  
      // Start FirebaseUI Auth interface
      ui.start('#firebaseui-auth-container', uiConfig);
  
      // Clean up FirebaseUI instance when the component unmounts
      return () => {
        ui.reset();
      };
    }, []); // Run this effect only once during component mount
  
    return (
      <Center>
        <Box>
          {/* Loader */}
          <div id="loader">Loading...</div>
  
          {/* Container for FirebaseUI Auth */}
          <div id="firebaseui-auth-container" />
        </Box>
      </Center>
    );
  };


  export default FirebaseAuth;