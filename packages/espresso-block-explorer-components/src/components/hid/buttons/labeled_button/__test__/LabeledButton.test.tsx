import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/LabeledButton.stories';

const { LabeledButton } = composeStories(stories);

describe('Labeled Button component', () => {
  it('should render the Icon Button normally', async () => {
    let a = 0;
    render(<LabeledButton data-testid="1" onClick={() => (a = a + 1)} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(a).equals(0);

    await act(() => userEvent.click(button));
    expect(a).equals(1);
  });

  it('should render Icon Button disabled', async () => {
    let a = 0;
    render(
      <LabeledButton data-testid="1" disabled onClick={() => (a = a + 1)} />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(a).equals(0);

    await act(() => userEvent.click(button));
    expect(a).equals(0, 'tapping on a disabled button should have no result');
  });
});
