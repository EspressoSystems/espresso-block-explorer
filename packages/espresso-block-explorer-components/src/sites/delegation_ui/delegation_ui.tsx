import React from 'react';
import './colors.css';
import { DelegationHeader } from './delegation_header';
import './delegation_ui.css';
import { DelegationUIContent } from './delegation_ui_content';
import { ProvideDelegationUIContexts } from './delegation_ui_contexts';

interface DelegationPageProps {
  className?: string;
}

/**
 * DelegationUI is a component that represents the entire Delegation UI
 * self contained page.
 */
const DelegationUI: React.FC<DelegationPageProps> = () => {
  return (
    <ProvideDelegationUIContexts>
      <main className="delegation-ui">
        <DelegationHeader />

        <DelegationUIContent />
      </main>
    </ProvideDelegationUIContexts>
  );
};

export default DelegationUI;
