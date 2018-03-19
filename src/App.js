import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { Admin, Resource } from 'admin-on-rest';

import buildApolloClient from './buildApolloClient';

import { PostList, PostShow } from './components/Posts';

const restClient = buildApolloClient(
  new ApolloClient({ uri: 'http://localhost:3030/graphql' })
);

export default class App extends Component {
  render() {
    return (
      <Admin title="Admin Apollo" restClient={restClient}>
        <Resource
          name="posts"
          list={PostList}
        />
      </Admin>
    );
  }
}
