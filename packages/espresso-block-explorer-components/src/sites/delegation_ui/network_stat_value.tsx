import React from 'react';

export interface NetworkStatValueProps {
  children: [React.ReactNode, React.ReactNode];
}

export const NetworkStatValue: React.FC<NetworkStatValueProps> = ({
  children,
}) => {
  return <div className="network-stat-value">{children}</div>;
};
