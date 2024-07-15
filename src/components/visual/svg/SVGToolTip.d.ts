import { default as React } from 'react';

export declare const SVGToolTipDrawAreaHeight: React.Context<number>;
export declare const SVGToolTipDrawAreaWidth: React.Context<number>;
export declare const SVGToolTipPointX: React.Context<number>;
export declare const SVGToolTipPointY: React.Context<number>;
export declare const SVGToolTipValueRatio: React.Context<number>;
export declare const SVGToolTipArrowVerticalPadding: React.Context<number>;
export declare const SVGToolTipContentSize: React.Context<DOMRect | null>;
export declare const SVGToolTipContentComponent: React.Context<React.ComponentType<{}>>;
export declare const SVGIndicatorComponent: React.Context<React.ComponentType<{}>>;
interface ToolTipCardProps {
}
/**
 * ToolTipCard is a component that is meant to draw the outline of a tooltip
 * in a manner the emulates the Card component. It is comprised of a path
 * that creates a rounded rectangle with a small arrow pointing up or down
 * to the target point.
 */
export declare const ToolTipCard: React.FC<ToolTipCardProps>;
/**
 * SVGToolTip is a helper component to draw a tooltip on an SVG element.
 * It utilizes the contexts prefixed with "SVGTooltip" to help draw the
 * component elements in the location desired, with the size information
 * provided.
 *
 * Additionally, it allows for the component content to be provided by
 * a separate widget entirely that is provided through the context of
 * the component.  This allows this component to be directly created by
 * this widget, and for it's sizing information to be determined.  This allows
 * for the tooltip to have a ToolTipCard surrounding the content that aligns
 * with the content be displayed.
 *
 * It also allows for the specification of an indicator component that can
 * be added.  This can be used to highlight the value that the tooltip is
 * pointing at.
 */
export declare const SVGTooltip: React.FC;
export {};
