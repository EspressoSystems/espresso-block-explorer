import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/InscriptionsPage.stories';

const { Inscriptions } = composeStories(stories);

describe('InscriptionsPage', async () => {
  it('should render the story', async () => {
    const { rerender } = render(<Inscriptions data-testid="1" />);

    // Wait for the component to be rendered
    await waitFor(() => {
      const ele = screen.getByTestId('1');
      expect(ele).toBeInTheDocument();
    });

    const inscriptionsPage = screen.getByTestId('1');

    // wait for the sections to be rendered.
    // (This should already be the case, but no harm in making it explicit)
    await waitFor(() => {
      const sections = inscriptionsPage.querySelectorAll('section');
      expect(sections).toHaveLength(5);
    });

    const inscriptionsContent: HTMLElement | null =
      inscriptionsPage.querySelector('.inscriptions--content');
    expect(inscriptionsContent).not.toBeNull();
    if (!inscriptionsContent) {
      return;
    }
    expect(inscriptionsContent).toBeInTheDocument();

    // wait until our inscription elements are populated.
    await waitFor(
      () => {
        const inscriptionElements = inscriptionsPage.querySelectorAll(
          '.inscription-display',
        );
        expect(inscriptionElements.length).toBeGreaterThan(0);
      },
      { container: inscriptionsContent },
    );

    expect(inscriptionsPage).toBeInTheDocument();
  });
});
