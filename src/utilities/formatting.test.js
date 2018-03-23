import { omitKeys, renameKeys } from './formatting';

describe('Formatting Test Suite', () => {

  describe('#renameKeys', () => {
    test('should properly rename all keys including nested keys based on renameMap', () => {
      expect(renameKeys({
        foo: {
          foo: 'hello',
          bar: 'world'
        },
        bar: {
          bar: 'bux',
          foo: 123
        }
      }, {
        foo: 'fooNew',
        bar: 'barNew',
      })).toEqual({
        fooNew: {
          fooNew: 'hello',
          barNew: 'world',
        },
        barNew: {
          barNew: 'bux',
          fooNew: 123
        }
      });
    });
  });

  describe('#omitKeys', () => {
    test('should omit keys based on omitKeys array', () => {
      expect(omitKeys({
        foo: {
          fux: {
            bar: 'no longer here',
            baz: 'also not here',
            qux: 'still here',
          }
        },
        bar: 'no more',
      }, [
        'bar',
        'baz'
      ])).toEqual({
        foo: {
          fux: {
            qux: 'still here',
          }
        }
      });
    })
  });
});
