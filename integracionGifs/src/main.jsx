import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp.jsx';
import "./style.css";
import { ContextProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <GifExpertApp/>
    </ContextProvider>
  </React.StrictMode>,
)
