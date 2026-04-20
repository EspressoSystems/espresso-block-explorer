import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Block from '../block';

vi.mock('next/navigation', () => ({
  usePathname: () => '/block/0',
}));

describe('Block', () => {
  it('should not throw', () => {
    render(<Block />);
  });
});
