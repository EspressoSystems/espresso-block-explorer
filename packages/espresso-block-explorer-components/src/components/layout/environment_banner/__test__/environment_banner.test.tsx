import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/environment_banner.stories';

const { FakeData, Decaf, Mainnet, Milk, Water, LocalDevNet } =
  composeStories(stories);

describe('Environment Banner Stories', () => {
  describe('Smoke Tests', () => {
    it('should render FakeData', () => {
      render(<FakeData />);
    });

    it('should render Decaf', () => {
      render(<Decaf />);
    });

    it('should render Mainnet', () => {
      render(<Mainnet />);
    });

    it('should render Milk', () => {
      render(<Milk />);
    });

    it('should render Water', () => {
      render(<Water />);
    });

    it('should render LocalDevNet', () => {
      render(<LocalDevNet />);
    });
  });
});
