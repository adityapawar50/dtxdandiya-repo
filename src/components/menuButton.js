import { Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { palette } from '../styling/theme';

const MenuButton = () => {
    return (
      <Button leftIcon={<HamburgerIcon />} bg={palette.dtxBrown} color = {palette.dtxGold} rounded={'full'} size = "lg">
        Menu
      </Button>
    );
  };
  
  export default MenuButton;