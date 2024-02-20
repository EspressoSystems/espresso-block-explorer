'use client';
import {
  BlockNumberContext,
  BlockPage,
  ProvideGibraltarBlockDetailDataSource,
} from 'espresso-block-explorer-components';
import { notFound, useParams } from 'next/navigation';

/**
 * Block is a Page for an individual Block.  It's blockID is provided by
 * the path parameter in the URL.
 *
 * Using this, it will attempt to display information concerning this Block ID.
 */
export default function Block() {
  const params = useParams();

  // Let's make sure that we have our BlockID param
  const { blockID = null } = params;
  if (blockID === null) {
    return notFound();
  }

  // Let's make sure that our BlockID is a string, and is a numeric value
  if (typeof blockID !== 'string') {
    return notFound();
  }

  if (/[^0-9]/.test(blockID)) {
    // This is an invalid block
    return notFound();
  }

  return (
    <BlockNumberContext.Provider value={Number(blockID)}>
      <ProvideGibraltarBlockDetailDataSource>
        <BlockPage />
      </ProvideGibraltarBlockDetailDataSource>
    </BlockNumberContext.Provider>
  );
}
