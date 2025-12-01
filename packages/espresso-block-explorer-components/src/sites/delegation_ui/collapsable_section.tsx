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

export interface CollapsableSectionProps extends React.HTMLAttributes<HTMLDetailsElement> {}

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
  const detailsRef = React.useRef<HTMLDetailsElement>(null);
  const collapseState = React.useContext(CollapseStateContext);
  const setCollapseState = React.useContext(SetCollapseStateContext);

  return (
    <details
      ref={detailsRef}
      className={addClassToClassName(className, 'collapsable-section')}
      {...rest}
      open={collapseState === CollapseState.expanded}
      onToggle={(event) => {
        event.stopPropagation();
        event.preventDefault();
        if (event.newState === 'open') {
          setCollapseState(CollapseState.expanded);
          return;
        }

        setCollapseState(CollapseState.collapsed);
      }}
    >
      {children}
    </details>
  );
};

export interface CollapsableHeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const CollapsableHeader: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <summary className="collapsable-header">
      {children}
      <CollapseToggleButton />
    </summary>
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
