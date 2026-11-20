import { describe, expect, it } from 'vitest';
import { AbsolutePathResolver } from '../absolute_path_resolver';

describe('AbsolutePathResolver', () => {
  const paths = new AbsolutePathResolver(new URL('https://explorer.test/'));

  it('links to a block, and to a page of its transactions', () => {
    expect(paths.block(7)).toBe('https://explorer.test/block/7');
    expect(paths.block(7, 50)).toBe(
      'https://explorer.test/block/7?position=50',
    );
  });
});
