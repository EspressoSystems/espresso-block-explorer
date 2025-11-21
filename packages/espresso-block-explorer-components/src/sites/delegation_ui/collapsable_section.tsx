import { addClassToClassName } from '@/components/higher_order';
import Text from '@/components/text/Text';
import ChevronDown from '@/components/visual/icons/feather/chevron_down';
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
    <ProvideCollapseState>
      <CollapseContent className={className} {...rest}>
        {children}
      </CollapseContent>
    </ProvideCollapseState>
  );
};

const CollapseContent: React.FC<CollapsableSectionProps> = ({
  children,
  className,
  ...rest
}) => {
  const collapseState = React.useContext(CollapseStateContext);

  return (
    <section
      className={addClassToClassName(className, 'collapsable-section')}
      {...rest}
      data-collapsed={collapseState === CollapseState.collapsed}
    >
      {children}
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
      className="bbtn-collapse-toggle"
      onClick={() => setCollapseState(determineCollapseToggle(collapseState))}
    >
      <span>
        <Text text={collapseState ? 'Collapse' : 'Expand'} />
      </span>
      <ChevronDown />
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
