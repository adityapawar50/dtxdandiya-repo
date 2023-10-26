import { Flex,Heading,Box} from "@chakra-ui/react";
import instaIcon from '../pics/instagram.png'


const openInstagram = () => {
    window.open("https://example.com", "_blank");
};

//component not showing hen exporting then using in header
export default function instaButton() {
  return (
    <Box mr="4" h="80%%" w = "70px">
            <img src={instaIcon} alt="Logo" h="10px" w = "10px" onClick = {openInstagram}/>
    </Box>
  )
};

