import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { UserView } from './pages/UserView';

import GlobalStyles from './style/global';
import theme from './style/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserView />
    </ThemeProvider>
  </React.StrictMode>,
);
