import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import './collapsable_section.css';
import {
  CollapseState,
  CollapseStateContext,
  ProvideCollapseState,
  SetCollapseStateContext,
} from './contexts/collapse_context';
import ButtonLarge from './elements/buttons/button_large';

export interface CollapsableSectionProps
  extends React.HTMLAttributes<HTMLElement> {}

export const CollapsableSection: React.FC<CollapsableSectionProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section
      className={addClassToClassName(className, 'collapsable-section')}
      {...rest}
    >
      <ProvideCollapseState>{children}</ProvideCollapseState>
    </section>
  );
};

export interface CollapsableHeaderProps
  extends React.HTMLAttributes<HTMLElement> {}

export const CollapsableHeader: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <div className="collapsable-header">
      {children}
      <CollapseToggleButton />
    </div>
  );
};

function determineCollapseToggle(collapseState: CollapseState) {
  switch (collapseState) {
    case CollapseState.collapsed:
      return CollapseState.expanded;
    case CollapseState.expanded:
      return CollapseState.collapsed;
  }
}

const CollapseToggleButton: React.FC = () => {
  const collapseState = React.useContext(CollapseStateContext);
  const setCollapseState = React.useContext(SetCollapseStateContext);

  return (
    <ButtonLarge
      className="collapse-toggle"
      onClick={() => setCollapseState(determineCollapseToggle(collapseState))}
    >
      {collapseState ? 'Collapse' : 'Expand'}
    </ButtonLarge>
  );
};

export const CollapseGuard: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const collapseState = React.useContext(CollapseStateContext);

  if (collapseState === CollapseState.collapsed) {
    return null;
  }

  return children;
};
