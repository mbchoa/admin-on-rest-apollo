import mapResourceTypeToResolver from './mapResourceTypeToResolver';
import Orders from '../queries/Orders';
import Events from '../queries/Events';
import Users from '../queries/Users';
import { omitKeys } from '../utilities/formatting';

function sanitizeParams(params) {
  return omitKeys(params, ['__typename']);
}

export default function buildQuery(type, resource, params) {
  const sanitizedParams = sanitizeParams(params);

  switch (resource) {
    case 'order':
      return Orders[mapResourceTypeToResolver(type, resource)](sanitizedParams);
    case 'event':
      return Events[mapResourceTypeToResolver(type, resource)](sanitizedParams);
    case 'user':
      return Users[mapResourceTypeToResolver(type, resource)](sanitizedParams);
    default:
      break;
  }
}
