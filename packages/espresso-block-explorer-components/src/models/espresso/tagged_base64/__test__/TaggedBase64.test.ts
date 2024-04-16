import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { rawURLEncoding } from '../../../../convert/base64/base64';
import { TaggedBase64 } from '../TaggedBase64';

describe('TaggedBase64', () => {
  describe('encoding', () => {
    const raw =
      'BLS_SIG~Wmt99l4trRZU91A6kBIIP748xkwE2eeDkmnAcwYNhQZZtwrwgqLYIEavovqw83HzRSEI2YvQvFeRz6f7I51GC30';
    it('should split correctly', () => {
      const taggedBase64 = TaggedBase64.fromString(raw);

      expect(taggedBase64.tag).equals('BLS_SIG');
      expect(rawURLEncoding.encodeToString(taggedBase64.data)).equals(
        'Wmt99l4trRZU91A6kBIIP748xkwE2eeDkmnAcwYNhQZZtwrwgqLYIEavovqw83HzRSEI2YvQvFeRz6f7I51GC30',
      );
    });

    const taggedBase64 = TaggedBase64.fromString(raw);
    it('should return the correct value', () => {
      expect(taggedBase64.valueOf()).equals(raw);
    });

    it('should have a string representation for JSON', () => {
      expect(taggedBase64.toJSON()).equals(raw);
    });

    it('should encode as a JSON string', () => {
      expect(JSON.stringify(taggedBase64)).equals(`"${raw}"`);
    });

    it('should revive into a TaggedBase64', () => {
      expect(
        TaggedBase64.inflate(JSON.parse(JSON.stringify(taggedBase64))),
      ).satisfies((a) => a instanceof TaggedBase64);
    });
  });
});
