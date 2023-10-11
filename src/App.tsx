import { Button, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme='teal'>ボタン</Button>
      <p>ああああああ</p>
    </ChakraProvider>
  );
}

export default App;
