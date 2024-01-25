import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { OverridePagePath } from '../../../contexts/PagePathProvider';
import * as stories from '../__docs__/NavBar.stories';

const { NavBar } = composeStories(stories);

describe('Nav Bar Component', () => {
  it('should be in the document', () => {
    render(
      <OverridePagePath pathname="/blocks">
        <NavBar data-testid="1" />
      </OverridePagePath>,
    );

    const navBar = screen.getByTestId('1');

    expect(navBar).toBeInTheDocument();
  });
});
