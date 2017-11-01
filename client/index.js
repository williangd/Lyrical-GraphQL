import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongeDetail from './components/SongDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={SongList} />
        <Route path='songs/new' component={SongCreate} />
        <Route path='songs/:id' component={SongeDetail} />
      </Route>
    </Router>
  </ApolloProvider>
)

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
