import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CDNStatus } from '../cdn_status';

describe('CDNStatus Component', () => {
  it('should display with the expected content', async () => {
    render(
      <div data-testid="1">
        <CDNStatus data-testid="1" />
      </div>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('1')).toBeInTheDocument();
    });

    expect(screen.getByTestId('1')).toBeInTheDocument();
    expect(screen.getByTestId('1').childNodes[0]).toHaveClass('cdn-status');
    expect(screen.getByTestId('1')).toHaveTextContent(/CDN Status/);
    expect(screen.getByTestId('1')).toHaveTextContent(/Online/);
  });
});
