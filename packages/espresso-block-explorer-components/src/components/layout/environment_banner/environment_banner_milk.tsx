import Text from '@/components/text/text';
import React from 'react';

/**
 * EnvironmentBannerMilk is a React component that displays a banner to sit at
 * the top of the page, to indicate the current environment is a DevNet,
 * specifically the milk devnet.
 */
export const EnvironmentBannerMilk: React.FC = () => {
  return (
    <div className="environment-banner environment--devnet milk">
      <div className="chip">
        <Text text="Milk Devnet" />
      </div>
    </div>
  );
};
