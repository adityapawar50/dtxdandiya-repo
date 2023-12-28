import React from "react";
import { Link, Box, Flex, Text, Button,MenuButton, Stack, Select, } from "@chakra-ui/react";
import { palette } from '../styling/theme';
import dtxlogo from '../pics/dtxlogo.png'
import instaIcon from "../pics/instagram.png"
import tiktokIcon from "../pics/tiktok.png"
import MenuDrawer from "./MenuDrawer";



const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState("");

  const toggle = () => setIsOpen(!isOpen);
  const handleTeamChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTeam(selectedValue);
  
    // Navigate to the selected team page using window.location.href
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  };

  return (
    <NavBarContainer 
      position="fixed"
        width="100vw"
        opacity = '100%'
        color="white"
        padding="4%"
        zIndex="999"
        top="0"
        h = '12%'
    >
      <Box mr="4%" w = "80px">
        <img src={dtxlogo} alt="Logo" h="10px" w = "10px" />
      </Box>

      {/* <MenuToggle toggle={toggle} isOpen={isOpen} /> */}
      <DrawerToggle  isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} handleTeamChange={handleTeamChange} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={palette.dtxGold}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const openInstagram = () => {
  window.open("https://www.instagram.com/dtx.dandiya/?hl=en", "_blank");
};

const openTiktok = () => {
  window.open("https://www.tiktok.com/@dtx.dandiya", "_blank");
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const DrawerToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuDrawer/>}
    </Box>
    
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen, handleTeamChange }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[0, 0, 0, 0]}
      >
        <MenuItem to="/" color={palette.dtxGold}>
          Home
        </MenuItem>
        <MenuItem to="/resources" color={palette.dtxGold}>
          Resources
        </MenuItem>

        {/* Always render the Select component */}
        <Select
          placeholder="Select Team"
          onChange={(e) => handleTeamChange(e)}
          w="200px" // Adjust the width as needed
          color={palette.dtxGold}
        >
          <option value="/team1">Texas Raas</option>
          <option value="/team2">GT Ramblin Raas</option>
          <option value="/team3">Michigan Wolveraas</option>
          <option value="/team4">TAMU Wreckin Raas</option>
          <option value="/team5">WashU Raas</option>
          <option value="/team6">UCB Raas Ramzat</option>
          <option value="/team7">UW Raas</option>
          {/* Add options for all teams */}
        </Select>

        <MenuItem to="/map" color={palette.dtxGold}>
          Venue Map
        </MenuItem>
        <Flex isLast align="center" flex="1">
          <Box mr="4" h="50%" w="30px">
            <img src={instaIcon} alt="Logo" h="10px" w="10px" onClick={openInstagram} />
          </Box>
          <Box mr="4" h="50%" w="30px">
            <img src={tiktokIcon} alt="Logo" h="10px" w="10px" onClick={openTiktok} />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};



const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["transparent", "transparent", "transparent", "transparent"]}
      color={[palette.dtxGold, palette.dtxGold, palette.dtxGold, palette.dtxGold]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
