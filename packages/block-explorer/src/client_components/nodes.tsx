'use client';

import {
  ProvideCappuccinoHotShotQueryServiceAPIContext,
  ProvideCappuccinoNodeValidatorServiceAPIContext
} from 'espresso-block-explorer-components';
import {
  NodesPage,
  ProvideCappuccinoNodeValidatorStreams,
} from 'espresso-block-explorer-components/block-explorer';

export interface NodesClientComponentProps { }

export default function NodesClientComponent() {
  return (
    <ProvideCappuccinoNodeValidatorServiceAPIContext>
      <ProvideCappuccinoHotShotQueryServiceAPIContext>
        <ProvideCappuccinoNodeValidatorStreams>
          <NodesPage />
        </ProvideCappuccinoNodeValidatorStreams>
      </ProvideCappuccinoHotShotQueryServiceAPIContext>
    </ProvideCappuccinoNodeValidatorServiceAPIContext>
  );
}
