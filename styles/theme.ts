import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
  colors: {
    yellow: {
      900: "#FFBA08",
    },
    black: {
      300: "#47585B",
    },
    white: {
      400: "#F5F8FA",
      300: "#DADADA",
     
    },
  },
  fonts: {
    headng: "Poppins",
    body: "Poppins",
  },
  styles:{
    global:{
      body:{
        bg:"white.400"
      }
    }
  }
});
