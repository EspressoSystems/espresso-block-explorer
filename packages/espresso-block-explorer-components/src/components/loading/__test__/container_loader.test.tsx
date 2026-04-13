import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { default as React } from 'react';
import { describe, expect, it } from 'vitest';
import { default as ContainerLoading } from '../container_loading';

describe('ContainerLoading Component', async () => {
  it('should display the component', async () => {
    render(<ContainerLoading data-testid="1" />);

    expect(screen.getByTestId('1')).toBeInTheDocument();
  });
});
