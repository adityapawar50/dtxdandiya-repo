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
import PageNotFound from './pages/PageNotFound';
import Team1 from './pages/Team1';
import Team2 from './pages/Team2';
import Team3 from './pages/Team3';
import Team4 from './pages/Team4';
import Team5 from './pages/Team5';
import Team6 from './pages/Team6';
import Team7 from './pages/Team7';
import Team8 from './pages/Team8';
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
  <Route path="/" element={<Homepage/>} />
  <Route path="/about" element={<AboutUs/>} />
  <Route path="/resources" element={<Resources/>} />
  <Route path="/sponsors" element={<Sponsors/>} />
  <Route path="/map" element={<VenueMap/>} />
  <Route path="/teamportal" element={<TeamPortal/>} />
  <Route path="/app" element={<App />} />
  <Route path="*" element={<PageNotFound/>} />
  <Route path="/team1" element={<Team1/>} />
  <Route path="/team2" element={<Team2/>} />
  <Route path="/team3" element={<Team3/>} />
  <Route path="/team4" element={<Team4/>} />
  <Route path="/team5" element={<Team5/>} />
  <Route path="/team6" element={<Team6/>} />
  <Route path="/team7" element={<Team7/>} />
  <Route path="/team8" element={<Team8/>} />
</Routes>
      </Router>
      </div>
    </ChakraProvider>

  )
}

export default App;
