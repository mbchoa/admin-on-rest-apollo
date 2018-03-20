import mapResourceTypeToResolver from './mapResourceTypeToResolver';
import buildQuery from './buildQuery';

export default (apolloClient) => {
  return async (type, resource, params) => {
    const data = await apolloClient
      .query(buildQuery(type, resource, params))
      .then(response => response.data[mapResourceTypeToResolver(type, resource)]);

    switch (type) {
      case 'GET_LIST':
      case 'GET_MANY':
      case 'GET_MANY_REFERENCE':
        return { data, total: data.length };
      case 'GET_ONE':
      case 'CREATE':
      case 'UPDATE':
      case 'DELETE':
        return { data };
      default:
        throw new Error('Unsupported fetch type');
    }
  }
};
