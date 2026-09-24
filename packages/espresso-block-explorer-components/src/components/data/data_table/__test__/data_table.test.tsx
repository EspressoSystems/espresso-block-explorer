import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/data_table.stories';

const { DataTable } = composeStories(stories);

describe('DataTable Component', async () => {
  it('should render its rows, and not re-sort when a header is clicked', async () => {
    render(<DataTable data-testid="1" />);

    await waitFor(() => {
      const tbody = screen.getByTestId('1').children[1];
      expect(tbody.children.length).toBeGreaterThan(0);
    });

    const rows = 'OneTwo1one2two3three4four5five6six7seven8eight9nine10ten';
    const dataTable = screen.getByTestId('1');
    expect(dataTable).toHaveTextContent(rows);

    await act(() => fireEvent.click(screen.getByText('One')));
    expect(dataTable).toHaveTextContent(rows);
  });
});
