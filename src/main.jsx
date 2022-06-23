import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './Router/AppRouter';
import { IconContext } from 'phosphor-react';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import { iconsGlobalStyle } from './styles/iconsGlobalStyle';
import 'normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={iconsGlobalStyle}>
        <Global styles={GlobalStyles} />
        <AppRouter />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
