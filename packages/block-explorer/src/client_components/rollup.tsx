'use client';

import {
  NamespaceContext,
  ProvideHotShotQueryServiceAPIContext,
} from 'espresso-block-explorer-components';
import {
  ProvideRollUpDetailDataSource,
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
      <ProvideHotShotQueryServiceAPIContext>
        <ProvideRollUpDetailDataSource>
          <RollUpPage startAtBlock={props.startAtBlock} offset={props.offset} />
        </ProvideRollUpDetailDataSource>
      </ProvideHotShotQueryServiceAPIContext>
    </NamespaceContext.Provider>
  );
}
