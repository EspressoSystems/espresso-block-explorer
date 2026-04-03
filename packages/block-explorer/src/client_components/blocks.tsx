'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  BlocksPage,
  ProvideBlocksSummaryDataSource,
} from 'espresso-block-explorer-components/block-explorer';

export interface BlocksClientComponentProps {
  startAtBlock?: number;
}

export default function BlocksClientComponent(
  props: BlocksClientComponentProps,
) {
  return (
    <ProvideHotShotQueryServiceAPIContext>
      <ProvideBlocksSummaryDataSource>
        <BlocksPage startAtBlock={props.startAtBlock} />
      </ProvideBlocksSummaryDataSource>
    </ProvideHotShotQueryServiceAPIContext>
  );
}
