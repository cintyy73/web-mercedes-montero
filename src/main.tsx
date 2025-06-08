import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';

import { theme } from './theme/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
