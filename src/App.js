import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { Container } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import customTheme from './styling/theme'
import Homepage from './pages/Homepage';
import Resources from './pages/Resources';
import TeamPortal from './pages/TeamPortal';
import AdminPage from './pages/AdminPage';
import PageNotFound from './pages/PageNotFound';
import LoginPopup from './pages/LoginPopup';
import Login from './pages/NewLogin'
import Team1 from './pages/Team1';
import Team2 from './pages/Team2';
import Team3 from './pages/Team3';
import Team4 from './pages/Team4';
import Team5 from './pages/Team5';
import Team6 from './pages/Team6';
import Team7 from './pages/Team7';


import '@fontsource/raleway/900.css'
import '@fontsource/bebas-neue/400.css'
import '@fontsource/sigmar-one/400.css'
import NewLogin from './pages/NewLogin';



function App() {
  // Wrap ChakraProvider at the root of the app and sets up routing

  return (
    <ChakraProvider theme ={customTheme}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/resources" element={<Resources/>} />
            <Route path="/teamportal" element={<NewLogin/>} />
            <Route path="/admin" element={<AdminPage/> }/>
            <Route path="/app" element={<App />} />
            <Route path="*" element={<PageNotFound/>} />
            <Route path ="/login" element={<NewLogin/>} />
            <Route path="/junglebook" element={<Team1/>} />
            <Route path="/schoolhouse" element={<Team2/>} />
            <Route path="/boardgames" element={<Team3/>} />
            <Route path="/hollywood" element={<Team4/>} />
            <Route path="/eiffel" element={<Team5/>} />
            <Route path="/spain" element={<Team6/>} />
            <Route path="/smores" element={<Team7/>} />
          </Routes>
      </Router>
      </div>
    </ChakraProvider>

  )
}
export default App;
