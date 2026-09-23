import BlockClientComponent from '@/client_components/block';
import { Suspense } from 'react';

/**
 * BlockLayout renders the block page. Next keeps a layout mounted across
 * blockIDs, where it would rebuild a [blockID] page for each block.
 */
export default function BlockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div />}>
      <BlockClientComponent />
      {children}
    </Suspense>
  );
}
