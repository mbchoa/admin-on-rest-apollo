import Orders from '../queries/Orders';
import mapResourceTypeToResolver from './mapResourceTypeToResolver';

export default function buildQuery(type, resource, params) {
  switch (resource) {
    case 'order':
      return Orders[mapResourceTypeToResolver(type, resource)](params);
    default:
      break;
  }
}
