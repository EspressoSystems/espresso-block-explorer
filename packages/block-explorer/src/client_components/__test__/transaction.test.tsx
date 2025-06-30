import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Transaction from '../transaction';

describe('Transaction', () => {
  it('should not throw', () => {
    render(<Transaction height={0} offset={0} />);
  });
});
