import Text from '@/components/text/text';
import React from 'react';

/**
 * EnvironmentBannerWater is a React component that displays a banner to sit at
 * the top of the page, to indicate the current environment is a DevNet,
 * specifically the water devnet.
 */
export const EnvironmentBannerWater: React.FC = () => {
  return (
    <div className="environment-banner environment--devnet water">
      <div className="chip">
        <Text text="Water Devnet" />
      </div>
    </div>
  );
};
