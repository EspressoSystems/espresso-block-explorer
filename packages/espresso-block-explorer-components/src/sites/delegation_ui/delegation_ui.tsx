import React from 'react';
import './colors.css';
import { DelegationHeader } from './delegation_header';
import './delegation_ui.css';

interface DelegationPageProps {
  className?: string;
}

/**
 * DelegationUI is a component that represents the entire Delegation UI
 * self contained page.
 */
const DelegationUI: React.FC<DelegationPageProps> = () => {
  return (
    <main className="delegation-ui">
      <DelegationHeader />
    </main>
  );
};

export default DelegationUI;
