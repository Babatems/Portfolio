import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/lato';
import "typeface-dm-sans";
import '@fontsource/dm-serif-display/400-italic.css';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
