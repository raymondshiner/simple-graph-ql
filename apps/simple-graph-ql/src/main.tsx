import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './app/app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #bdbdbd;
    font-family: Open-Sans, Helvetica, sans-serif;
    color: '#3d3d3d'
  }
`;

const client = new ApolloClient({
  uri: 'https://doesnt.really.work.io',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
      <GlobalStyle />
    </ApolloProvider>
  </StrictMode>
);
