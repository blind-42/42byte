import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './styles/theme';
import { ThemeProvider } from './styles/theme-components';

ReactDOM.render(
  // <React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
