import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Nodes from '../nodes';

describe('Nodes', () => {
  it('should not throw', () => {
    render(<Nodes />);
  });
});
