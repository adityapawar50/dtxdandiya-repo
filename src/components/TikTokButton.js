import { Flex,Heading,Box} from "@chakra-ui/react";
import tiktokIcon from '../pics/tiktok.png'


const openTikTok = () => {
    window.open("https://example.com", "_blank");
};


export default function tiktokButton() {
  return (
    <Box mr="4" h="90%" w = "80px">
            <img src={tiktokIcon} alt="Logo" h="20px" w = "20px" onClick = {openTikTok}/>
    </Box>
  )
};

