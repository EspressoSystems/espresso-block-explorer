import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { OverridePathResolver } from '@/components/contexts/PathResolverProvider';
import { ProvideCappuccinoInscriptionStreams } from 'pages/CappuccinoInscriptionServiceAdapters';
import { ProvideWebWorkerCappuccinoInscriptionServiceAPIContext } from 'pages/CappuccinoInscriptionServiceAPIContext';
import { StoryBookPathResolver } from 'pages/StoryBookPathResolver';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import InscriptionsPage from '../InscriptionsPage';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = ({ ...props }) => (
  <div style={{ '--font-family--ibm-plex-mono': "'IBM Plex Mono', serif" }}>
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
            <InscriptionsPage {...props} />
          </ProvideCappuccinoInscriptionStreams>
        </ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </div>
);

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
