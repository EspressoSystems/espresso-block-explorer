import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Blocks from '../blocks';

describe('Blocks', () => {
  it('should not throw', () => {
    render(<Blocks />);
  });
});
