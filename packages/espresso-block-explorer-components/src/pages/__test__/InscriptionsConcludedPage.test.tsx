import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/InscriptionsConcludedPage.stories';

const { InscriptionsConcluded } = composeStories(stories);

describe('InscriptionsConcludedPage', async () => {
  it('should render the story', async () => {
    render(<InscriptionsConcluded data-testid="1" />);

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const elements = ele.querySelectorAll('section');
      expect(elements.length).greaterThan(0);
    });

    const inscriptionsConcludedPage = screen.getByTestId('1');
    expect(inscriptionsConcludedPage).toBeInTheDocument();
  });
});
