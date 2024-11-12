import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { OverridePathResolver } from '@/components/contexts/PathResolverProvider';
import { ProvideCappuccinoInscriptionStreams } from 'pages/CappuccinoInscriptionServiceAdapters';
import { ProvideWebWorkerCappuccinoInscriptionServiceAPIContext } from 'pages/CappuccinoInscriptionServiceAPIContext';
import { StoryBookPathResolver } from 'pages/StoryBookPathResolver';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Meta, StoryObj } from 'storybook';
import InscriptionsPage, { ProvideLocalStorage } from '../InscriptionsPage';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = ({ ...props }) => {
  const backgroundImage = (
    <img
      src="/infinite_garden@1x.jpg"
      srcSet="/infinite_garden@2x.jpg 2x, /infinite_garden @3x"
      alt="The Infinite Garden"
    />
  );

  const escapeTheWalledGardensImage = (
    <img
      src="/escape_the_walled_gardens@1x.jpg"
      srcSet="/escape_the_walled_gardens@2x.jpg 2x, /escape_the_walled_gardens@3x.jpg 3x"
      alt="Escape the Walled Gardens"
    />
  );

  return (
    <div
      style={
        {
          '--font-family--ibm-plex-mono': "'IBM Plex Mono', serif",
          '--font-family--neue-montreal': "'PP Neue Montreal', sans-serif",
        } as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
      }
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
        rel="stylesheet"
      />
      <ProvideTickEverySecond>
        <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
          <ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
            <ProvideCappuccinoInscriptionStreams>
              <ProvideLocalStorage>
                <InscriptionsPage
                  backgroundImage={backgroundImage}
                  escapeTheWalledGardensImage={escapeTheWalledGardensImage}
                  {...props}
                />
              </ProvideLocalStorage>
            </ProvideCappuccinoInscriptionStreams>
          </ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
        </OverridePathResolver>
      </ProvideTickEverySecond>
    </div>
  );
};

const meta: Meta = {
  title: 'Pages/Inscriptions',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Inscriptions: Story = {
  args: {
    block: 0,
  },
};
