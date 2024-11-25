'use client';

import Image from 'next/image';
import walledGardenPng from './escape_the_walled_gardens@1x.jpg';
import infiniteGardenPng from './infinite_garden@1x.jpg';

import {
  InscriptionsPage,
  ProvideCappuccinoInscriptionStreams,
  ProvideLocalStorage,
  ProvideWebWorkerCappuccinoInscriptionServiceAPIContext,
} from 'espresso-block-explorer-components';

export default function HomeSuspended() {
  const backgroundImage = (
    <Image
      src={infiniteGardenPng}
      width={1512}
      height={982}
      alt="Infinite Garden"
    />
  );
  const escapeTheWalledGardenImage = (
    <Image
      src={walledGardenPng}
      width={1392}
      height={662}
      alt="Escape the Walled Gardens"
      priority
    />
  );
  return (
    <ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
      <ProvideCappuccinoInscriptionStreams>
        <ProvideLocalStorage>
          <InscriptionsPage
            backgroundImage={backgroundImage}
            escapeTheWalledGardensImage={escapeTheWalledGardenImage}
          />
        </ProvideLocalStorage>
      </ProvideCappuccinoInscriptionStreams>
    </ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
  );
}
