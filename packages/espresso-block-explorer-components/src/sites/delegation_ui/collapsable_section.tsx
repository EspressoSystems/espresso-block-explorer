import { addClassToClassName } from '@/higher_order';
import { Text } from '@/components/text';
import { ChevronDown } from '@/components/visual/icons/sharp_line';
import { default as React } from 'react';
import './collapsable_section.css';
import {
  CollapseState,
  CollapseStateContext,
  ProvideCollapseState,
  SetCollapseStateContext,
} from './contexts/collapse_context';
import { default as ButtonLarge } from './elements/buttons/button_large';

export interface CollapsableSectionProps extends React.HTMLAttributes<HTMLDetailsElement> {
  initialState?: CollapseState;
}

/**
 * CollapsableSection is a component that provides a contextually aware
 * collapsable section that can be utilized to display an initial section
 * that is always visible, and a more detailed section that can be toggled
 * as collapsed or expanded.
 *
 * This is meant to be utilized in conjunction with the CollapsableHeader
 * element.  The CollaspableHeader will always be visible.
 *
 * This will provide the collapse state, and reactivity for the
 * CollapsableSection.
 *
 * Example usage:
 *  ```jsx
 *    <CollapsableSection>
 *      <CollapsableHeader>
 *        <h2>
 *          <Text text="A brief summary of the section" />
 *        </h2>
 *      </CollapsableHeader>
 *      <div>
 *        <p>
 *          <Text text="A more detailed breakdown of the section, with more details" />
 *        </p>
 *      </div>
 *    </CollapsableSection>
 *  ```
 */
export const CollapsableSection: React.FC<CollapsableSectionProps> = ({
  children,
  className,
  initialState,
  ...rest
}) => {
  return (
    <ProvideCollapseState initialState={initialState}>
      <CollapseContent className={className} {...rest}>
        {children}
      </CollapseContent>
    </ProvideCollapseState>
  );
};

/**
 * CollapseContent is a component that provides the collapsable content for
 * the CollapsableSection. This makes up the actual content of the component
 * and is the HTML element that drives all of the interaction.
 *
 */
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

/**
 * CollapsableHeader is a component that is meant to be utilized with the
 * CollapsableSection component.  This component is always visible.
 *
 * It is able to be decorated however the utilizer wishes.  The utilizer
 * *SHOULD* provide a component that encourages interaction as this component
 * when clicked on will toggle the current state of the CollaapsableSection.
 * Additionally, a reactive component should be added as a child of this
 * component that indicates to the user the current state of the collapse /
 * expansion.
 */
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

/**
 * CollapseToggleButton is a component that provides a button to toggle the
 * state of the nearest ancestor CollapsableSection. This can be placed
 * anywhere under a CollapsableSection.
 */
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

/**
 * CollapseGuard is a component that will conditionally render its children
 * based on the current state of the CollapseState.
 *
 * NOTE: This component is provided for convenience and is likely never needed
 * as the contents of the CollapsableSection will automatically display / hide
 * based on the state of the component.
 */
export const CollapseGuard: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const collapseState = React.useContext(CollapseStateContext);

  if (collapseState === CollapseState.collapsed) {
    return null;
  }

  return children;
};
