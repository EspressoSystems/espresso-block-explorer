'use client';

import {
  InscriptionsPage,
  ProvideCappuccinoInscriptionStreams,
  ProvideWebWorkerCappuccinoInscriptionServiceAPIContext,
} from 'espresso-block-explorer-components';

export default function HomeSuspended() {
  return (
    <ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
      <ProvideCappuccinoInscriptionStreams>
        <InscriptionsPage />
      </ProvideCappuccinoInscriptionStreams>
    </ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
  );
}
