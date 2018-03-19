import gql from 'graphql-tag';
import { capitalize } from 'lodash';

function mapResourceTypeToResolver(type, resource) {
  switch (type) {
    case 'GET_LIST': return `all${capitalize(resource)}`;
    default: break;
  }
}

function buildQuery(type, resource, params) {
  const { page, perPage } = params.pagination;

  return {
    query: gql`
    query {
      ${mapResourceTypeToResolver(type, resource)} {
        id
        title
        body
      }
    }`,
    variables: {
      offset: (page - 1) * perPage,
      limit: page * perPage,
    }
  }
}

export default (apolloClient) => {
  return (type, resource, params) => {
    switch (type) {
      case 'GET_LIST':
        return apolloClient
            .query(buildQuery(type, resource, params))
            .then(response => {
              const data = response.data[mapResourceTypeToResolver(type, resource)];
              return {
                data,
                total: data.length,
              };
            });
      default:
        throw new Error('Unsupported fetch type');
    }
  }
};
