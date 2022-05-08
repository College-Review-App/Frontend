import './App.css';
import { ThemeProvider, theme} from '@chakra-ui/react';
import RouterHQ from './RouterHQ';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterHQ />
    </ThemeProvider>
  );
}

export default App;
