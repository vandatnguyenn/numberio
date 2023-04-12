import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import App from './App';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>    
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
