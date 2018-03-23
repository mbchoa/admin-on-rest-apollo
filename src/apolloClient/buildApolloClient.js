import { includes, invoke } from 'lodash';
import { CREATE, DELETE, GET_LIST, GET_MANY, GET_ONE, GET_MANY_REFERENCE, QUERY_TYPES, UPDATE } from './types';

import mapResourceTypeToResolver from './mapResourceTypeToResolver';
import buildQuery from './buildQuery';

export default (apolloClient) => {
  return async (type, resource, params) => {
    const data = await invoke(
      apolloClient,
      includes(QUERY_TYPES, type) ? 'query' : 'mutate',
      buildQuery(type, resource, params)
    ).then(({ data }) => data[mapResourceTypeToResolver(type, resource)]);

    switch (type) {
      case GET_LIST:
      case GET_MANY:
      case GET_MANY_REFERENCE:
        return { data, total: data.length };
      case GET_ONE:
      case CREATE:
      case UPDATE:
      case DELETE:
        return { data };
      default:
        throw new Error('Unsupported fetch type');
    }
  }
};
