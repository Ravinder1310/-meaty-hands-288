import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import "swiper/css/bundle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </ChakraProvider>
 
);

reportWebVitals();
