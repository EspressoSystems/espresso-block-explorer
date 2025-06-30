import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Explorer from '../explorer';

describe('Explorer', () => {
  it('should not throw', () => {
    render(<Explorer />);
  });
});
