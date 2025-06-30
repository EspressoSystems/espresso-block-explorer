'use client';

import {
  BlockNumberContext,
  BlockPage,
  ProvideCappuccinoBlockDetailDataSource,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';

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
