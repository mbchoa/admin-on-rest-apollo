import { includes, isPlainObject, reduce } from 'lodash';

export function renameKeys (obj, renameMap) {
  return reduce(obj, (acc, value, key) => ({
    ...acc,
    [renameMap[key]]: isPlainObject(value)
      ? renameKeys(value, renameMap)
      : value
  }), {});
}

export function omitKeys (obj, omitKeyArr) {
  return reduce(obj, (acc, value, key) => {
    if (includes(omitKeyArr, key)) {
      return { ...acc };
    }

    if (isPlainObject(value)) {
      return {
        ...acc,
        [key]: omitKeys(value, omitKeyArr),
      }
    }

    return {
      ...acc,
      [key]: value
    };
  }, {});
}
