import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import PostList from './PostList';
import CommentsList from './CommentsList';
const App = () => (
  <Admin title="The Black Tux Admin" restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
    <Resource name="posts" list={PostList} />
    <Resource name="comments" list={CommentsList} />
  </Admin>
);

export default App;
