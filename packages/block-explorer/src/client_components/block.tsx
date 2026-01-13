'use client';

import {
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';

import {
  BlockNumberContext,
  BlockPage,
  ProvideCappuccinoBlockDetailDataSource,
} from 'espresso-block-explorer-components/block-explorer';

export interface BlockClientComponentProps {
  blockID: number;
}

export default function BlockClientComponent(props: BlockClientComponentProps) {
  return (
    <BlockNumberContext.Provider value={props.blockID}>
      <ProvideCappuccinoHotShotQueryServiceAPIContext>
        <ProvideCappuccinoBlockDetailDataSource>
          <BlockPage />
        </ProvideCappuccinoBlockDetailDataSource>
      </ProvideCappuccinoHotShotQueryServiceAPIContext>
    </BlockNumberContext.Provider>
  );
}
