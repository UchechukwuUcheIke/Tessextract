import { createTheme, ThemeProvider } from '@mui/material/styles';
import Homepage from "./components/Homepage";
import OptionSelect from "./components/OptionSelectPage"
import MediaSelect from "./components/MediaSelectPage"
import ScreenshotMedia from './components/ScreenshotMediaPage';
import EndOperation from './components/EndOperationPage';
import { MemoryRouter, Routes, Route } from "react-router-dom";

import React, { useState } from 'react';

// Theme for App
const theme = createTheme({
  palette: {
    primary: 
      {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
      },
    secondary: 
      {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
      }
  },
});
    
function App() {

  const [pageMedia, setPageMedia] = useState([]);


  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Routes>
          <Route exact path="/" element={<Homepage setPageMedia = {setPageMedia} />} />
          <Route exact path="/optionselectpage" element={<OptionSelect />} />
          <Route exact path="/mediaselectpage" element={<MediaSelect />} />
          <Route exact path="/screenshotpage" element={<ScreenshotMedia />} />
          <Route exact path="/endoperationpage" element={<EndOperation />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
    
  );
}

export default App;
