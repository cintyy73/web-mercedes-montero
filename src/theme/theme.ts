import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
 colors: {
    brand: {
      50: '#F5EAF8',
      100: '#E4CFF0',
      200: '#D0B3E6',
      300: '#BC97DC',
      400: '#A87BD2',
      500: '#B980D1', // lavanda principal
      600: '#8B5FA1',
      700: '#633F73',
      800: '#3C2644',
      900: '#1A0E20',
    },
    accent: {
      500: '#B68649', // dorado
    },
    text: {
      light: '#FFFFFF',
      dark: '#2B2B2B',
    },
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'brand.500',
        color: 'text.light',
        fontFamily: 'body',
      },
      h1: {
        fontFamily: 'heading',
        fontWeight: 'bold',
        lineHeight: 'short',
      },
      h2: {
        fontFamily: 'heading',
        fontWeight: 'semibold',
      },
      a: {
        color: 'accent.500',
        _hover: {
          textDecoration: 'underline',
          color: 'accent.500',
        },
      },
      button: {
        fontWeight: 'medium',
      },
    },
  },
});
