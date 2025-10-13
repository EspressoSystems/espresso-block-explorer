import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/DelegationPage.stories';

const { FakeData } = composeStories(stories);

window.HTMLElement.prototype.scrollIntoView = function () {};

describe('DelegationPage', async () => {
  it('should render the story', { timeout: 10000 }, async () => {
    render(<FakeData data-testid="1" />);

    // Wait for the main page to be present.
    await waitFor(() => {
      const ele = screen.getByTestId('1');
      expect(ele).toBeInTheDocument();
    });

    const nodePage = screen.getByTestId('1');
    expect(nodePage).toBeInTheDocument();

    // Wait for the cards to all be rendered
    await waitFor(
      () => {
        const cards = nodePage.querySelectorAll('.card');
        // we should have 12 card sections
        expect(cards).toHaveLength(1);
      },
      { container: nodePage },
    );

    // All Validators Section
    {
      const nodesSection: HTMLElement | null =
        nodePage.querySelector('.nodes.card');
      expect(nodesSection).not.toBeNull();
      if (!nodesSection) {
        // This is here just to satisfy typescript. In reality, this should
        // be unreachable.
        return;
      }

      // Wait until we have row data in the nodes table
      await waitFor(
        () => {
          const rows = nodesSection.querySelectorAll('tr');
          expect(rows.length).toBeGreaterThan(10);
        },
        { container: nodesSection },
      );
    }
  });
});
