import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import theme from './utils/theme';
import App from './App';
import { AuthProvider } from './hooks/useAuth';
import { ApolloProvider } from '@apollo/client';
import client from './services/graphQL/client';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </AuthProvider>
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
  </ApolloProvider>
);
