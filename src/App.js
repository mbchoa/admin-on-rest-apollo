import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { Admin, Resource } from 'admin-on-rest';
import { PostList, PostShow } from './components/Posts';
import { OrderList, OrderEdit, OrderShow } from './components/Orders';
import { getAPI, getHeaders } from './api/config';
import buildApolloClient from './buildApolloClient';

const restClient = buildApolloClient(
  new ApolloClient({
    uri: getAPI(),
    headers: getHeaders(),
  })
);

export default class App extends Component {
  render() {
    return (
      <Admin title="Admin Apollo" restClient={restClient}>
        <Resource
          name="order"
          show={OrderShow}
          list={OrderList}
          edit={OrderEdit}
        />
      </Admin>
    );
  }
}
