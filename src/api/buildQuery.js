import { capitalize } from 'lodash';
import pluralize from 'pluralize'
import Orders from './queries/Orders'

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
