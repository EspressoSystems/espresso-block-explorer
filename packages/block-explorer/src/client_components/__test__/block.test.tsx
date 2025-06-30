import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Block from '../block';

describe('Block', () => {
  it('should not throw', () => {
    render(<Block blockID={0} />);
  });
});
