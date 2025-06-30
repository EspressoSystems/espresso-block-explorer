import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Rollups from '../rollups';

describe('Rollups', () => {
  it('should not throw', () => {
    render(<Rollups />);
  });
});
