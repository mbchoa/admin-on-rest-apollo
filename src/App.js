import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { Admin, Resource } from 'admin-on-rest';
import { isNil } from 'lodash';

import { getAPI, getHeaders } from './apolloClient/config';
import buildApolloClient from './apolloClient/buildApolloClient';

import { OrderList, OrderEdit, OrderShow } from './components/Orders';
import { EventList } from './components/Events';
import { UserList, UserEdit } from './components/Users';

const authServiceEnv = 'https://auth-staging.theblacktux.com'
const tbtAuthRedirectKey = 'tbtAuthRedirect'
const tbtAuthRedirectValue = window.location.href
const toolTimeHost = window.location.host

function fetchAuthInfToken() {
  window.localStorage.setItem(tbtAuthRedirectKey, tbtAuthRedirectValue)
  window.location.replace(`${authServiceEnv}/login?origin=${toolTimeHost}`)
}

async function fetchAuthToken(inf) {
  return await fetch(`${authServiceEnv}/inf/${inf}`)
    .then((response) => {
      if (response.status >= 400) {
        console.warn('response.status >= 400', response.status)
        return
      }
      response.json().then((auth) => {
        const previousLocation = window.localStorage.getItem(tbtAuthRedirectKey)
        window.localStorage.setItem("authToken", auth.key)
        window.location.replace(previousLocation)
        window.localStorage.removeItem(tbtAuthRedirectKey)
      })
    .catch(error => console.warn('error fetching auth Token', error))
  })
}

const restClient = buildApolloClient(
  new ApolloClient({
    uri: getAPI(),
    headers: getHeaders(),
  })
);


class App extends Component {
  constructor(props) {
    super(props)

    const token = window.localStorage.getItem("authToken")
    const urlParams = new URLSearchParams(window.location.search)
    const inf = urlParams.get('inf')

    if (isNil(token)) {
      if (!inf) {
        console.warn('!inf')
        fetchAuthInfToken()
      }
      fetchAuthToken(inf)
    }

    this.state = { token }
  }

  render() {
    return (
      <div className="app-content">
        {
          this.state.token && (
            <Admin
              title="Admin Apollo"
              restClient={restClient}
            >
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
          )
        }
      </div>
    )
  }
}

export default App
