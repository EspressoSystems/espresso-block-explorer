import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Button from '../Button';
import Text from '../../../../text/Text';

describe('Button Component', () => {
  it('should be clickable successfully', () => {
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

    fireEvent.click(button);
    expect(inc).equals(1);
    fireEvent.click(button);
    expect(inc).equals(2);
  });

  it('should prevent clicking', () => {
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

    fireEvent.click(button);
    expect(inc).equals(0);
    fireEvent.click(button);
    expect(inc).equals(0);
  });
});
