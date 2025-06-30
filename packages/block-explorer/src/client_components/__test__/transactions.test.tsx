import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Transactions from '../transactions';

describe('Transactions', () => {
  it('should not throw', () => {
    render(<Transactions />);
  });

  it('should not throw', () => {
    render(<Transactions startAtBlock={0} />);
  });
});
