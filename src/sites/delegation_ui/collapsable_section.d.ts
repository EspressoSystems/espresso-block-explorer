import { default as React } from 'react';
import { CollapseState } from './contexts/collapse_context';
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
export declare const CollapsableSection: React.FC<CollapsableSectionProps>;
export interface CollapsableHeaderProps extends React.HTMLAttributes<HTMLElement> {
}
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
export declare const CollapsableHeader: React.FC<React.HTMLAttributes<HTMLElement>>;
/**
 * CollapseGuard is a component that will conditionally render its children
 * based on the current state of the CollapseState.
 *
 * NOTE: This component is provided for convenience and is likely never needed
 * as the contents of the CollapsableSection will automatically display / hide
 * based on the state of the component.
 */
export declare const CollapseGuard: React.FC<React.PropsWithChildren>;
