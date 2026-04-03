'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';

import {
  BlockNumberContext,
  BlockPage,
  ProvideBlockDetailDataSource,
} from 'espresso-block-explorer-components/block-explorer';

export interface BlockClientComponentProps {
  blockID: number;
}

export default function BlockClientComponent(props: BlockClientComponentProps) {
  return (
    <BlockNumberContext.Provider value={props.blockID}>
      <ProvideHotShotQueryServiceAPIContext>
        <ProvideBlockDetailDataSource>
          <BlockPage />
        </ProvideBlockDetailDataSource>
      </ProvideHotShotQueryServiceAPIContext>
    </BlockNumberContext.Provider>
  );
}
