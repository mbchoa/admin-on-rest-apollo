import axios from 'axios';
import { identity, slice } from 'lodash';

const resolveResponse = promise => 
  promise
    .then(({ data }) => data)
    .then(identity);

export default {
  Query: {
    allPosts(root, { limit = 10, offset = 0 }) {
      return resolveResponse(axios.get('http://jsonplaceholder.typicode.com/posts'));
    },
    posts(root, { id }) {
      return resolveResponse(axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`));
    },
    allUsers(root, { limit = 10, offset = 0}) {
      return resolveResponse(axios.get('http://jsonplaceholder.typicode.com/users'));
    },
    users(root, { id }) {
      return resolveResponse(axios.get(`http://jsonplaceholder.typicode.com/users/${id}`));
    }
  },
  Mutation: {
    createPosts() {
      
    },
    updatePosts() {
      
    },
  }
};
