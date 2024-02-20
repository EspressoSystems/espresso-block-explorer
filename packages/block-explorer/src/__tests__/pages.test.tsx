import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Rollups from '../app/rollups/page';

test('Rollups', () => {
  render(<Rollups />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Rollups' }),
  ).toBeDefined();
});
