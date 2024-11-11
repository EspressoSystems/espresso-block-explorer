'use client';

import Image from 'next/image';
import walledGardenPng from './escape_the_walled_gardens@1x.jpg';
import infiniteGardenPng from './infinite_garden@1x.jpg';

import {
  InscriptionsPage,
  ProvideCappuccinoInscriptionStreams,
  ProvideWebWorkerCappuccinoInscriptionServiceAPIContext,
} from 'espresso-block-explorer-components';

export default function HomeSuspended() {
  const backgroundImage = (
    <Image src={infiniteGardenPng} alt="Infinite Garden" />
  );
  const escapeTheWalledGardenImage = (
    <Image src={walledGardenPng} alt="Escape the Walled Gardens" />
  );
  return (
    <ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
      <ProvideCappuccinoInscriptionStreams>
        <InscriptionsPage
          backgroundImage={backgroundImage}
          escapeTheWalledGardensImage={escapeTheWalledGardenImage}
        />
      </ProvideCappuccinoInscriptionStreams>
    </ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
  );
}
