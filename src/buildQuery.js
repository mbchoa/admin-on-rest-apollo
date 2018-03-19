import gql from 'graphql-tag';

export default (instrospectionResults) => (aorFetchType, resourceName, params) => {
  var results = instrospectionResults;
  debugger;
  switch (aorFetchType) {
    case 'GET_LIST':
      return {
        query: gql`
          query {
            id
            title
            body
          }`,
        variables: params,
        parseResponse: response => response.data
      };
    default:
      break;
  }
};
