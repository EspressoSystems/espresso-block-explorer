'use client';

import {
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';

import {
  BlocksPage,
  ProvideCappuccinoBlocksSummaryDataSource,
} from 'espresso-block-explorer-components/block-explorer';

export interface BlocksClientComponentProps {
  startAtBlock?: number;
}

export default function BlocksClientComponent(
  props: BlocksClientComponentProps,
) {
  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideCappuccinoBlocksSummaryDataSource>
        <BlocksPage startAtBlock={props.startAtBlock} />
      </ProvideCappuccinoBlocksSummaryDataSource>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
