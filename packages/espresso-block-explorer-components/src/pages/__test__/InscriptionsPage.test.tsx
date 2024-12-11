import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/InscriptionsPage.stories';

const { Inscriptions } = composeStories(stories);

describe('InscriptionsPage', async () => {
  it('should render the story', async () => {
    render(<Inscriptions data-testid="1" />);

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const elements = ele.querySelectorAll('section');
      expect(elements.length).greaterThan(0);
    });

    const inscriptionsPage = screen.getByTestId('1');
    expect(inscriptionsPage).toBeInTheDocument();
  });
});
