import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    wlight: {
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
    wdark: {
      "50": "rgba(153, 153, 153, 0.5)",
      "300": "#999999",
      "500": "#47585B"
    }
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  styles: {
    global: {
      body: {
        bg: 'white',
      }
    }
  }
})