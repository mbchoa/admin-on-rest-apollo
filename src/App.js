import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { Admin, Resource } from 'admin-on-rest';

import PostList from './PostList';
import CommentsList from './CommentsList';

import buildApolloClient from './buildApolloClient';

const restClient = buildApolloClient(
  new ApolloClient({ uri: 'http://localhost:3030/graphql' })
);

export default class App extends Component {
  render() {
    return (
      <Admin title="Admin Apollo" restClient={restClient}>
        <Resource name="posts" list={PostList} />
        <Resource name="comments" list={CommentsList} />
      </Admin>
    );
  }
}
