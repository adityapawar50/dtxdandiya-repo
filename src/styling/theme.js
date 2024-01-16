import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";


const customTheme = extendTheme({
    fonts: {
      body: "Raleway, sans-serif", // Change this to your desired font
      heading: "Raleway, sans-serif" // Change this to your desired font
    },
    breakpoints:{
      base: "0em", // 0px
      sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
      md: "48em", // ~768px
      lg: "62em", // ~992px
      xl: "80em", // ~1280px
      "2xl": "96em", // ~1536px
    }
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
    bgDarkGreen: "#040c05",
    shinyGold : "#e8b923",
    shinySilver : "#E0E5E8",
    shinyBronze : "#b87333",
    footColor : "#000000"

}

  export default customTheme