import Text from '@/components/text/text';
import React from 'react';

/**
 * EnvironmentBannerDecaf is a React component that displays a banner to sit at
 * the top of the page, to indicate the current environment is a DevNet,
 * specifically the decaf testnet.
 */
export const EnvironmentBannerDecaf: React.FC = () => {
  return (
    <div className="environment-banner environment--testnet decaf">
      <div className="chip">
        <Text text="Decaf Testnet" />
      </div>
    </div>
  );
};
