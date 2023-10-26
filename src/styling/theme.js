import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";


const customTheme = extendTheme({
    fonts: {
      body: "Raleway, sans-serif", // Change this to your desired font
      heading: "Raleway, sans-serif" // Change this to your desired font
    },
  });

  export const palette = {
    DeepGreen: '#006400',
    ForestGreen: '#228B22',
    paleGreen : "#98FB98",
    medGreen: "#64A664",
    celadon: "#ACE1AF",
    fern: "#71BC78",
    bruns: "#1B4D3E",
    dtxGreen : "#647B54",
    dtxBrown : "#986859",
    dtxGold : "#CCA176",
    bgDarkGreen: "#040c05"
}

  export default customTheme