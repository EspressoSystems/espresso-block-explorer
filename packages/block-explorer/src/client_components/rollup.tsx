'use client';

import {
  ProvideCappuccinoHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';
import {
  NamespaceContext,
  ProvideCappuccinoRollUpDetailDataSource,
  RollUpPage,
} from 'espresso-block-explorer-components/block-explorer';

export interface RollupClientComponentProps {
  namespace: number;
  startAtBlock?: number;
  offset?: number;
}

export default function RollupClientComponent(
  props: RollupClientComponentProps,
) {
  return (
    <NamespaceContext.Provider value={props.namespace}>
      <ProvideCappuccinoHotShotQueryServiceAPIContext>
        <ProvideCappuccinoRollUpDetailDataSource>
          <RollUpPage startAtBlock={props.startAtBlock} offset={props.offset} />
        </ProvideCappuccinoRollUpDetailDataSource>
      </ProvideCappuccinoHotShotQueryServiceAPIContext>
    </NamespaceContext.Provider>
  );
}
