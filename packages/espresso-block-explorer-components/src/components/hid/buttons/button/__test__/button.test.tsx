import Text from '@/text/text';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from '../button';

describe('Button Component', () => {
  it('should be clickable successfully', async () => {
    let inc: number = 0;
    render(
      <Button
        onClick={() => {
          inc++;
        }}
      >
        <Text text="Click Me" />
      </Button>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
    expect(inc).equals(0);

    await act(() => fireEvent.click(button));
    expect(inc).equals(1);
    await act(() => fireEvent.click(button));
    expect(inc).equals(2);
  });

  it('should prevent clicking', async () => {
    let inc: number = 0;
    render(
      <Button
        disabled
        onClick={() => {
          inc++;
        }}
      >
        <Text text="Click Me" />
      </Button>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
    expect(inc).equals(0);

    await act(() => fireEvent.click(button));
    expect(inc).equals(0);
    await act(() => fireEvent.click(button));
    expect(inc).equals(0);
  });
});
