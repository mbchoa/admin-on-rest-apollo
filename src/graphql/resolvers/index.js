import axios from 'axios';

const resolveResponse = promise => promise.then(({ data }) => data);

export default {
  Query: {
    fetchAlbums() {
      return resolveResponse(axios.get('http://jsonplaceholder.typicode.com/albums'));
    },
    fetchComments() {
      return resolveResponse(axios.get('http://jsonplaceholder.typicode.com/comments'));
    },
    fetchPosts() {
      return resolveResponse(axios.get('http://jsonplaceholder.typicode.com/posts'));
    },
  },
};
