'use client';

import {
  EnvironmentContext,
  EspressoConfigContext,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
  ProvideCappuccinoNodeValidatorServiceAPIContext,
} from 'espresso-block-explorer-components';
import {
  NodesPage,
  ProvideCappuccinoNodeValidatorStreams,
} from 'espresso-block-explorer-components/block-explorer';
import React from 'react';

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
