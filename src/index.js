import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
    query {
      characters{
        results{
          name
          species
          gender
        }
      }
    }
    `,
  })
  // .then((resultCharacters) => console.log(resultCharacters));
  client
  .query({
    query: gql`
    query {
      episodes{
        results{
          id
          name
          episode
        }
      }
    }
    `,
  })
  // .then((resultEpisodes) => console.log(resultEpisodes));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>,
);


