import { EnvironmentContext } from '@/components/config/environment';
import { Environment } from '@/models/config/environment/environment';
import React from 'react';
import FakeDataNotice from '../../../pages/FakeDataNotice';
import './environment_banner.css';
import { EnvironmentBannerDecaf } from './environment_banner_decaf';
import { EnvironmentBannerMainnet } from './environment_banner_mainnet';
import { EnvironmentBannerMilk } from './environment_banner_milk';
import { EnvironmentBannerWater } from './environment_banner_water';

/**
 * EnvironmentBanner is a React component that displays a banner to sit at
 * the top of the page, to indicate the current environment being inspected
 * / used.
 */
export const EnvironmentBanner: React.FC = () => {
  const environment = React.useContext(EnvironmentContext);

  switch (environment) {
    case Environment.fakeData:
      return <FakeDataNotice />;

    case Environment.decaf:
      return <EnvironmentBannerDecaf />;

    case Environment.milk:
      return <EnvironmentBannerMilk />;

    case Environment.water:
      return <EnvironmentBannerWater />;

    case Environment.mainnet:
      return <EnvironmentBannerMainnet />;

    /* falls through */
    default:
      return null;
  }
};
