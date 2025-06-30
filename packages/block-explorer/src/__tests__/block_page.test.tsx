import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Block from '../app/block/[blockID]/page';

// vi.mock('next/router', () => nextRouterMock);
// vi.mock('next/navigation', () => {
//   return {
//     usePathName: () => {
//       return '/block/0';
//     },
//     useParams: () => {
//       return {
//         blockID: '0',
//       };
//     },
//     useSearchParams: () => {
//       return new URLSearchParams();
//     },
//   };
// });

describe('Block', () => {
  it('should not throw', async () => {
    render(<Block />);
  });

  it('should throw when no params are provided', async () => {
    await expect(async () =>
      render(await Block({ params: Promise.resolve({}) })),
    ).rejects.toThrow();
  });

  it('should throw when blockID is null', async () => {
    await expect(async () =>
      render(await Block({ params: Promise.resolve({ blockID: null }) })),
    ).rejects.toThrow();
  });

  it('should throw when blockID is not a string', async () => {
    await expect(async () =>
      render(await Block({ params: Promise.resolve({ blockID: true }) })),
    ).rejects.toThrow();
  });

  it('should throw when blockID is not numeric string', async () => {
    await expect(async () =>
      render(await Block({ params: Promise.resolve({ blockID: 'foo' }) })),
    ).rejects.toThrow();
  });

  it('renders an async component', async () => {
    render(
      await Block({
        params: Promise.resolve({ blockID: '0' }),
      }),
    );
  });
});
