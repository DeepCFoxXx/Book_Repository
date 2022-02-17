import React, { Component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// Apollo Client Component
const client = new ApolloClient({
  uri: 'http://localhost:4000/grapql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Hello World</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
