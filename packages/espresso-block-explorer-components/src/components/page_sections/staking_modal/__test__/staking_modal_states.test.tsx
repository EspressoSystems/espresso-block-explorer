import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/staking_modal_states.stories';

const {
  Closed,
  Opened,
  ValidatorSelected,
  AmountSpecified,
  InsufficientBalance,
  InsufficientAllowance,
} = composeStories(stories);

describe('Staking Modal States', () => {
  describe('Smoke Tests', () => {
    it('should render Closed', () => {
      render(<Closed />);
    });

    it('should render Opened', () => {
      render(<Opened />);
    });

    it('should render ValidatorSelected', () => {
      render(<ValidatorSelected />);
    });

    it('should render AmountSpecified', () => {
      render(<AmountSpecified />);
    });

    it('should render InsufficientBalance', () => {
      render(<InsufficientBalance />);
    });

    it('should render InsufficientAllowance', () => {
      render(<InsufficientAllowance />);
    });
  });
});

// describe('Staking Modal Interactivity', () => {});
