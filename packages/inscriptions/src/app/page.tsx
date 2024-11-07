import {
  InscriptionsPage,
  ProvideCappuccinoInscriptionStreams,
  ProvideWebWorkerCappuccinoInscriptionServiceAPIContext,
  Text,
} from 'espresso-block-explorer-components';
import Head from 'next/head';

/**
 * Home represents the default home screen navigated to by the path '/'.
 *
 * This is the main, and only page for the Inscriptions Demo
 */
export default function Home() {
  return <HomeSuspended />;
}

function HomeSuspended() {
  return (
    <ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
      <ProvideCappuccinoInscriptionStreams>
        <>
          <Head>
            <title>
              <Text text="Espresso Infinite Garden" />
            </title>
            <meta
              name="description"
              content="Join us on our mission to safeguard against silos, ensuring all chains work together as one. Espresso mainnet is live."
            />
            <link rel="canonical" href="/"></link>

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@espressosys" />
            <meta name="twitter:title" content="Espresso Infinite Garden" />
            <meta
              name="twitter:description"
              content="Join us on our mission to safeguard against silos, ensuring all chains work together as one. Espresso mainnet is live."
            />
            <meta name="twitter:image" content="" />

            <meta property="og:title" content="Espresso Infinite Garden" />
            <meta
              property="og:description"
              content="Join us on our mission to safeguard against silos, ensuring all chains work together as one. Espresso mainnet is live."
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://infinitegarden.espressosys.com/"
            />
            <meta property="og:image" content="" />
          </Head>
          <InscriptionsPage />
        </>
      </ProvideCappuccinoInscriptionStreams>
    </ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
  );
}
