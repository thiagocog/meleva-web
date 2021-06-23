// IMPORTAÇÕES EXTERNAS
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; // BOOTSTRAP
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

// IMPORTAÇÕES INTERNAS
import Routers from './routers'
import reportWebVitals from './reportWebVitals';
import store from './store'
import ReduxToastr from './components/redux-toastr'
import theme from './config/theme'
import GlobalStyle from './config/globalStyle'

// FONTE ROBOTO
const googleFont = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'



// RENDERIZAÇÃO DA APLICAÇÃO
ReactDOM.render(
  <Provider store={store}>
    <ReduxToastr />
    <Helmet>
      <link rel="stylesheet" href={googleFont} />
    </Helmet>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
