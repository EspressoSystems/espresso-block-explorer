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
import * as stories from '../__docs__/DataTable.stories';

const { DataTable } = composeStories(stories);

describe('DataTable Component', async () => {
  it('should have a link specified', async () => {
    render(<DataTable data-testid="1" />);

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const tbody = ele.children[1];

      expect(tbody.children.length).toBeGreaterThan(0);
    });

    const dataTable = screen.getByTestId('1');
    expect(dataTable).toBeInTheDocument();
    expect(dataTable).toHaveTextContent(
      'OneTwo1one2two3three4four5five6six7seven8eight9nine10ten',
    );

    const column = screen.getByText('One');
    await act(() => fireEvent.click(column));

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const tbody = ele.children[1];

      expect(tbody.children.length).toBeGreaterThan(0);
    });

    expect(dataTable).toBeInTheDocument();
    expect(dataTable).toHaveTextContent(
      'OneTwo10ten9nine8eight7seven6six5five4four3three2two1one',
    );
  });
});
