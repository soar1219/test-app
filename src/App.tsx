import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from './theme/theme';
import './App.css';
import { Root } from './router/Root';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Root />
      </Router>
    </ChakraProvider>
  );
}

export default App;
