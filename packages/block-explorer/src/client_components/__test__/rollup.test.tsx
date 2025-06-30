import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Rollup from '../rollup';

describe('Rollup', () => {
  it('should not throw', () => {
    render(<Rollup namespace={0} />);
  });
});
