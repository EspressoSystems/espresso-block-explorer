import { describe, expect, it } from 'vitest';
import { StoryBookPathResolver } from '../story_book_path_resolver';

/** storyArgs returns the story arguments a Storybook link passes. */
function storyArgs(href: string): string {
  return new URLSearchParams(href.replace(/^\.\/\?/, '')).get('args') ?? '';
}

describe('StoryBookPathResolver', () => {
  const paths = new StoryBookPathResolver();

  it('links to a block, and to a page of its transactions', () => {
    expect(storyArgs(paths.block(7))).toBe('block:7');
    expect(storyArgs(paths.block(7, 0))).toBe('block:7');
    expect(storyArgs(paths.block(7, 50))).toBe(
      'block:7;transactionsPosition:50',
    );
  });
});
