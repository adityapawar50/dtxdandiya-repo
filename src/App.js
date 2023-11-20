import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { Container } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import customTheme from './styling/theme'
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import Sponsors from './pages/Sponsors';
import VenueMap from './pages/VenueMap';
import TeamPortal from './pages/TeamPortal';
import '@fontsource/raleway/900.css'
import '@fontsource/bebas-neue/400.css'
import '@fontsource/sigmar-one/400.css'





function App() {
  // Wrap ChakraProvider at the root of the app and sets up routing
  return (
    <ChakraProvider theme ={customTheme}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage/> }/>
            <Route path="/about" element={<AboutUs/> }/>
            <Route path="/resources" element={<Resources/> }/>
            <Route path="/sponsors" element={<Sponsors/> }/>
            <Route path="/map" element={<VenueMap/> }/>
            <Route path="/portal" element={<TeamPortal/> }/>
            <Route path="/app" element ={App} />
            <Route path="*" element={<Navigate to="/" replace />}
            />
          </Routes>
      </Router>
      </div>
    </ChakraProvider>

  )
}

export default App;
