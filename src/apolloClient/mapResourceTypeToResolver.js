import { capitalize } from 'lodash';
import pluralize from 'pluralize';

import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE
} from './types';

export default (type, resource) => {
  const normalizedResourceName = capitalize(resource);

  switch (type) {
    case GET_LIST:
    case GET_MANY:
    case GET_MANY_REFERENCE: return `all${pluralize(normalizedResourceName)}`;
    case GET_ONE: return `one${normalizedResourceName}`;
    case CREATE: return `create${normalizedResourceName}`;
    case DELETE: return `delete${normalizedResourceName}`;
    case UPDATE: return `update${normalizedResourceName}`;
    default: break;
  }
};
