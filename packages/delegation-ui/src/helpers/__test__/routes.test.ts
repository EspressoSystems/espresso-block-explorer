import { describe, expect, it } from 'vitest';
import {
  baseHref,
  inAppPath,
  isValidatorPath,
  pathWithoutIntent,
  validatorAddressFromRoute,
} from '../routes';

const address = '0xfca122749bd630d7922fe26936e5ae476ebb97a0';

describe('isValidatorPath', () => {
  it('matches the validator page, with or without a trailing slash', () => {
    expect(isValidatorPath('/validator')).toBe(true);
    expect(isValidatorPath('/validator/')).toBe(true);
    expect(isValidatorPath('/stake/validator')).toBe(true);
  });

  it('does not match the validator list or lookalike paths', () => {
    expect(isValidatorPath('/')).toBe(false);
    expect(isValidatorPath('/stake/')).toBe(false);
    expect(isValidatorPath('/validators')).toBe(false);
    expect(isValidatorPath('/validator/extra')).toBe(false);
    expect(isValidatorPath('/my-validator')).toBe(false);
  });
});

describe('baseHref', () => {
  it('is the validator list for every form of either route', () => {
    expect(baseHref('/')).toBe('/');
    expect(baseHref('/validator')).toBe('/');
    expect(baseHref('/validator/')).toBe('/');
    expect(baseHref('/stake')).toBe('/stake/');
    expect(baseHref('/stake/')).toBe('/stake/');
    expect(baseHref('/stake/validator')).toBe('/stake/');
    expect(baseHref('/stake/validator/')).toBe('/stake/');
  });
});

describe('validatorAddressFromRoute', () => {
  const params = (query: string) => new URLSearchParams(query);

  it('is undefined on the validator list, whatever the query says', () => {
    expect(validatorAddressFromRoute('/', params(''))).toBeUndefined();
    expect(
      validatorAddressFromRoute('/', params(`address=${address}`)),
    ).toBeUndefined();
  });

  it('is the address on the validator page, or null without one', () => {
    expect(
      validatorAddressFromRoute('/validator', params(`address=${address}`)),
    ).toBe(address);
    expect(
      validatorAddressFromRoute('/validator/', params(`address=${address}`)),
    ).toBe(address);
    expect(validatorAddressFromRoute('/validator', params(''))).toBeNull();
  });
});

describe('pathWithoutIntent', () => {
  it('drops the query on the validator list', () => {
    expect(pathWithoutIntent('/', undefined)).toBe('/');
  });

  it('keeps the address on a validator page after a staking action', () => {
    expect(pathWithoutIntent('/validator', address)).toBe(
      `/validator?address=${address}`,
    );
    expect(pathWithoutIntent('/validator/', address)).toBe(
      `/validator/?address=${address}`,
    );
  });

  it('escapes whatever the URL had as an address', () => {
    expect(pathWithoutIntent('/validator', 'a&intent=claim')).toBe(
      '/validator?address=a%26intent%3Dclaim',
    );
  });

  it('has nothing to keep when the validator page had no address', () => {
    expect(pathWithoutIntent('/validator', null)).toBe('/validator');
  });
});

describe('navigation between the views', () => {
  const origin = 'https://stake.example';
  const validatorHref = (from: string) =>
    `${baseHref(from)}validator?address=${address}`;

  it.each(['/', '/validator', '/validator/'])(
    'opens a validator from %s',
    (from) => {
      expect(inAppPath(validatorHref(from), `${origin}${from}`)).toBe(
        `/validator?address=${address}`,
      );
    },
  );

  it.each([
    `/validator?address=${address}`,
    // With a trailing slash a relative "./" would lead back to the
    // validator page, without its address.
    `/validator/?address=${address}`,
  ])('goes back to the validator list from %s', (from) => {
    const pathName = new URL(from, origin).pathname;
    expect(inAppPath(baseHref(pathName), `${origin}${from}`)).toBe('/');
  });

  it('stays under the path the site is served from', () => {
    expect(
      inAppPath(
        baseHref('/stake/validator/'),
        `${origin}/stake/validator/?address=${address}`,
      ),
    ).toBe('/stake/');
  });
});
