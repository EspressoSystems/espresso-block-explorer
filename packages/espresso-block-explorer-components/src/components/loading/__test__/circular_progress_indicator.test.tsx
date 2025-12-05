import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import CircularProgressIndicator from '../circular_progress_indicator';

describe('CircularProgressIndicator Component', async () => {
  it('should display the component', async () => {
    render(<CircularProgressIndicator data-testid="1" />);

    expect(screen.getByTestId('1')).toBeInTheDocument();
  });
});
