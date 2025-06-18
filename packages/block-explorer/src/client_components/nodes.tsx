'use client';

import {
  EnvironmentContext,
  EspressoConfigContext,
  NodesPage,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
  ProvideCappuccinoNodeValidatorServiceAPIContext,
  ProvideCappuccinoNodeValidatorStreams,
} from 'espresso-block-explorer-components';
import React from 'react';

export interface NodesClientComponentProps {}

export default function NodesClientComponent(props: NodesClientComponentProps) {
  const environment = React.useContext(EnvironmentContext);
  const espresso = React.useContext(EspressoConfigContext);

  console.info('<<<< HERE', environment, espresso);

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
