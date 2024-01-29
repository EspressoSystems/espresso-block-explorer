import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/RollUpsPage.stories';

const { Rollups } = composeStories(stories);

describe('RollUpsPage', async () => {
  it('should render the story', async () => {
    render(<Rollups data-testid="1" />);

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const elements = ele.querySelectorAll('td');
      expect(elements.length).greaterThan(0);
    });

    const blockPage = screen.getByTestId('1');
    expect(blockPage).toBeInTheDocument();
  }, 20000);
});
