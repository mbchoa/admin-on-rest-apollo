export const getAPI = () => 'http://localhost:3030';

export const getHeaders = () => {
  const graphqlLocalHost = 'http://localhost:3030';
  let headers = { 'content-type': 'application/json' }

  if (process.env.GRAPHQL_SERVICE_URL !== graphqlLocalHost) {
    // Set Different Headers
    // headers = {
    //   'content-type': 'application/json',
    //   'x-api-key': process.env.GRAPHQL_SERVICE_KEY,
    // }
  }
  return headers
};
