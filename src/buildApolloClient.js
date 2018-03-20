import { capitalize } from 'lodash';
import pluralize from 'pluralize'
import Orders from './queries/Orders'

const Params = {
  allOrders: ({ pagination: { page, perPage }}) => ({
    offset: (page - 1) * perPage,
    limit: page * perPage,
  }),
  oneOrder: ({ id }) => ({ id }),
}

function mapResourceTypeToResolver(type, resource) {
  switch (type) {
    case 'GET_LIST': return `all${pluralize(capitalize(resource))}`;
    case 'GET_ONE': return `one${capitalize(resource)}`;
    case 'CREATE': return `create${capitalize(resource)}`
    case 'DELETE': return `delete${capitalize(resource)}`
    default: break;
  }
}

function mapResourceTypeToQuery(type, resource) {
  switch (resource) {
    case 'order':
      return Orders[mapResourceTypeToResolver(type, resource)]
    default:
      break;
  }
}

function mapResourceTypeToParams(type, resource, params) {
  return Params[mapResourceTypeToResolver(type, resource)](params)
}

function buildQuery(type, resource, params) {
  return {
    query: mapResourceTypeToQuery(type, resource),
    variables: mapResourceTypeToParams(type, resource, params),
  }
}

export default (apolloClient) => {
  return (type, resource, params) => {
    switch (type) {
      case 'GET_LIST':
        console.warn('GET LIST')
        return apolloClient
            .query(buildQuery(type, resource, params))
            .then(response => {
              const data = response.data[mapResourceTypeToResolver(type, resource)];
              console.warn('GET_LIST data', data)
              return {
                data,
                total: data.length,
              };
            });
      case 'GET_ONE':
        console.warn('GET ONE')
        return apolloClient
            .query(buildQuery(type, resource, params))
            .then(response => {
              console.warn('getOne params', params)
              const data = response.data[mapResourceTypeToResolver(type, resource)];
              console.warn('GET_ONE data', data)
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
