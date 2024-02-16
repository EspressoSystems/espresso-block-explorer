import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from '../app/layout';
import Home from '../app/page';
import Blocks from '../app/blocks/page';
import Rollups from '../app/rollups/page';
import Transactions from '../app/transactions/page';

test('Layout', () => {
  render(<Layout><h1>Testing</h1></Layout>);
  expect(screen.getByRole('heading', { level: 1, name: 'Testing' })).toBeDefined();
})
 
test('Home', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { level: 1, name: 'Explorer' })).toBeDefined();
});

test('Blocks', () => {
  render(<Blocks />);
  expect(screen.getByRole('heading', { level: 1, name: 'Blocks' })).toBeDefined();
});

test('Rollups', () => {
  render(<Rollups />);
  expect(screen.getByRole('heading', { level: 1, name: 'Rollups' })).toBeDefined();
});

test('Transactions', () => {
  render(<Transactions />);
  expect(screen.getByRole('heading', { level: 1, name: 'Transactions' })).toBeDefined();
});
