'use client';

import {
  BlocksPage,
  ProvideCappuccinoBlocksSummaryDataSource,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';

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
