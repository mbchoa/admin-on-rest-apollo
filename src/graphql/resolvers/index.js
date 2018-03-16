import axios from 'axios';
import { slice } from 'lodash';

const resolveResponse = promise => promise.then(({ data }) => data);

export default {
  Query: {
    allAlbums() {
      return resolveResponse(axios.get('http://jsonplaceholder.typicode.com/albums'));
    },
    allComments() {
      return resolveResponse(axios.get('http://jsonplaceholder.typicode.com/comments'));
    },
    allPosts(root, { limit = 10, offset = 0 }) {
      return resolveResponse(axios.get('http://jsonplaceholder.typicode.com/posts'))
        .then(data => data);
    },
  },
};
