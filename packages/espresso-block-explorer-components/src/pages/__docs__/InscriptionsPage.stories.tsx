import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { ProvideCappuccinoInscriptionStreams } from 'pages/CappuccinoInscriptionServiceAdapters';
import { ProvideWebWorkerCappuccinoInscriptionServiceAPIContext } from 'pages/CappuccinoInscriptionServiceAPIContext';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import FakeDataNotice from '../FakeDataNotice';
import InscriptionsPage from '../InscriptionsPage';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = ({ ...props }) => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
      rel="stylesheet"
    />
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
        <ProvideCappuccinoInscriptionStreams>
          <InscriptionsPage {...props} />
        </ProvideCappuccinoInscriptionStreams>
      </ProvideWebWorkerCappuccinoInscriptionServiceAPIContext>
    </ProvideTickEverySecond>
  </>
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
