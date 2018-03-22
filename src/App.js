import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { Admin, Resource } from 'admin-on-rest';

import { getAPI, getHeaders } from './apolloClient/config';
import buildApolloClient from './apolloClient/buildApolloClient';

import { OrderList, OrderEdit, OrderShow } from './components/Orders';
import { EventList } from './components/Events';
import { UserList, UserEdit } from './components/Users';

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
          name="event"
          list={EventList}
        />
        <Resource
          name="user"
          list={UserList}
          edit={UserEdit}
        />
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
