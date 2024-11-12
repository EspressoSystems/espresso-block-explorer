'use client';

import Image from 'next/image';
import walledGardenPng from './escape_the_walled_gardens@1x.jpg';
import infiniteGardenPng from './infinite_garden@1x.jpg';

import {
  InscriptionsPage,
  ProvideCappuccinoInscriptionStreams,
  ProvideLocalStorage,
  ProvideWebWorkerCappuccinoInscriptionServiceAPIContext,
  TweetURLProvider,
} from 'espresso-block-explorer-components';

export default function HomeSuspended() {
  const backgroundImage = (
    <Image src={infiniteGardenPng} alt="Infinite Garden" />
  );
  const escapeTheWalledGardenImage = (
    <Image src={walledGardenPng} alt="Escape the Walled Gardens" priority />
  );
  return (
    <ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
      <ProvideCappuccinoInscriptionStreams>
        <TweetURLProvider.Provider
          value={
            new URL('https://x.com/EspressoSys/status/1855973751982309624')
          }
        >
          <ProvideLocalStorage>
            <InscriptionsPage
              backgroundImage={backgroundImage}
              escapeTheWalledGardensImage={escapeTheWalledGardenImage}
            />
          </ProvideLocalStorage>
        </TweetURLProvider.Provider>
      </ProvideCappuccinoInscriptionStreams>
    </ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
  );
}
