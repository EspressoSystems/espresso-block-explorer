import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Blocks from '../app/blocks/page';

describe('Blocks', () => {
  it('should not throw', () => {
    render(<Blocks />);
  });

  it('should not throw when no params are provided', async () => {
    await expect(
      (async () =>
        render(await Blocks({ searchParams: Promise.resolve({}) })))(),
    ).resolves.toBeTruthy();
  });
});
