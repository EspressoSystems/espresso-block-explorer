import { describe, expect, it } from 'vitest';
import { getNumberFromParams } from '../server_component_search_params_props';

describe('Server Component Search Params', () => {
  describe('getNumberFromParams', () => {
    it('should return undefined when key is not defined', () => {
      expect(getNumberFromParams({}, 'foo')).toBeUndefined();
    });

    it('should return undefined when key is empty string', () => {
      expect(getNumberFromParams({ foo: '' }, 'foo')).toBeUndefined();
    });

    it('should return undefined when key is empty array', () => {
      expect(getNumberFromParams({ foo: [] }, 'foo')).toBeUndefined();
    });

    it('should return a number when the key is specified', () => {
      expect(getNumberFromParams({ foo: '0' }, 'foo')).equals(0);
    });

    it('should return a number when the key is specified', () => {
      expect(getNumberFromParams({ foo: ['0', '1'] }, 'foo')).equals(0);
    });
  });
});
