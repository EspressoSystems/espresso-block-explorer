import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/DataTable.stories';

const { DataTable } = composeStories(stories);

describe('DataTable Component', () => {
  it('should have a link specified', async () => {
    render(<DataTable data-testid="1" />);

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const tbody = ele.children[1];

      expect(tbody.children.length).toBeGreaterThan(0);
    });

    const dataTable = screen.getByTestId('1');
    expect(dataTable).toBeInTheDocument();
  });
});
