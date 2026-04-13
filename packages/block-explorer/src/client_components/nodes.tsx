'use client';

import {
  ProvideHotShotQueryServiceAPIContext,
  ProvideNodeValidatorServiceAPIContext,
} from 'espresso-block-explorer-components';
import {
  NodesPage,
  ProvideNodeValidatorStreams,
} from 'espresso-block-explorer-components/block-explorer';

export interface NodesClientComponentProps {}

export default function NodesClientComponent() {
  return (
    <ProvideNodeValidatorServiceAPIContext>
      <ProvideHotShotQueryServiceAPIContext>
        <ProvideNodeValidatorStreams>
          <NodesPage />
        </ProvideNodeValidatorStreams>
      </ProvideHotShotQueryServiceAPIContext>
    </ProvideNodeValidatorServiceAPIContext>
  );
}
