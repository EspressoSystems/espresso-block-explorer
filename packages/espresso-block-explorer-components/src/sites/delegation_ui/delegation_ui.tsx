import React from 'react';
import './colors.css';
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
    </main>
  );
};

export default DelegationUI;
