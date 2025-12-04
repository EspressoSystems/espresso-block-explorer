import React from 'react';
import SVGPathBuilder from './svg_path_builder';
import './svg_tooltip.css';

const defaultTextBoxWidth = 100;
const defaultTextBoxHeight = 30;
const horizontalInset = 8;
const verticalInset = 8;
const borderRadius = 8;
const arrowSize = 5;

const EmptyComponent: React.FC = () => <></>;

export const SVGToolTipDrawAreaHeight = React.createContext<number>(100);
export const SVGToolTipDrawAreaWidth = React.createContext<number>(100);
export const SVGToolTipPointX = React.createContext<number>(0);
export const SVGToolTipPointY = React.createContext<number>(0);
export const SVGToolTipValueRatio = React.createContext<number>(0.5);
export const SVGToolTipArrowVerticalPadding = React.createContext<number>(10);
export const SVGToolTipContentSize = React.createContext<null | DOMRect>(null);
export const SVGToolTipContentComponent =
  React.createContext<React.ComponentType>(EmptyComponent);
export const SVGIndicatorComponent =
  React.createContext<React.ComponentType>(EmptyComponent);

interface ToolTipCardProps {}

/**
 * ToolTipCard is a component that is meant to draw the outline of a tooltip
 * in a manner the emulates the Card component. It is comprised of a path
 * that creates a rounded rectangle with a small arrow pointing up or down
 * to the target point.
 */
export const ToolTipCard: React.FC<ToolTipCardProps> = () => {
  const plotHeight = React.useContext(SVGToolTipDrawAreaHeight);
  const pointX = React.useContext(SVGToolTipPointX);
  const pointY = React.useContext(SVGToolTipPointY);
  const xOffsetRatio = React.useContext(SVGToolTipValueRatio);
  const textBBox = React.useContext(SVGToolTipContentSize);
  const arrowVerticalPadding = React.useContext(SVGToolTipArrowVerticalPadding);

  // We calculate the dimensions of the tooltip box using the text bounding box
  // as a base line to grow from.  If the text bounding box is not available, we
  // estimate the size of the box using some static values
  const textWidth = textBBox?.width ?? defaultTextBoxWidth;
  const textHeight = textBBox?.height ?? defaultTextBoxHeight;
  const width = Math.round(textWidth + horizontalInset + horizontalInset);
  const height = Math.round(textHeight + verticalInset + verticalInset);

  // We need to determine the position and dimensions of the tooltip
  // If the value height is greater than half th plot height, then we'll
  // want to draw the tooltip under tht element.
  // We'll want to shift the tooltip to the left or right, depending on
  // the x position within the plot width.  We'll need to make sure we take
  // into account the width of the insets of the tooltip.

  const cardEdgeRadius = borderRadius;
  // This governs where the card is placed on the plot.
  const cardX =
    pointX -
    (width - arrowSize - arrowSize - arrowSize - arrowSize) * xOffsetRatio -
    arrowSize;
  const under = pointY > plotHeight / 2;
  const cardY = Math.floor(
    under
      ? pointY - height - arrowVerticalPadding - arrowSize
      : pointY + arrowVerticalPadding + arrowSize,
  );

  const pathBuilder = new SVGPathBuilder();
  pathBuilder.moveTo(cardX + cardEdgeRadius, cardY);

  if (!under) {
    // Arrow Pointing Up
    pathBuilder.lineTo(pointX - arrowSize, cardY);
    pathBuilder.lineTo(pointX, cardY - arrowSize);
    pathBuilder.lineTo(pointX + arrowSize, cardY);
  }

  pathBuilder.lineTo(cardX + width - cardEdgeRadius, cardY);
  // Quarter Arc Top Right Corner
  pathBuilder.arcTo(
    cardEdgeRadius,
    cardEdgeRadius,
    0,
    0,
    1,
    cardX + width,
    cardY + cardEdgeRadius,
  );
  pathBuilder.lineTo(cardX + width, cardY + height - cardEdgeRadius);
  // Quarter Arc Bottom Right Corner
  pathBuilder.arcTo(
    cardEdgeRadius,
    cardEdgeRadius,
    0,
    0,
    1,
    cardX + width - cardEdgeRadius,
    cardY + height,
  );
  if (under) {
    // Arrow Pointing Down
    pathBuilder.lineTo(pointX + arrowSize, cardY + height);
    pathBuilder.lineTo(pointX, cardY + height + arrowSize);
    pathBuilder.lineTo(pointX - arrowSize, cardY + height);
  }

  pathBuilder.lineTo(cardX + cardEdgeRadius, cardY + height);
  // Quarter Arc Bottom Left Corner
  pathBuilder.arcTo(
    cardEdgeRadius,
    cardEdgeRadius,
    0,
    0,
    1,
    cardX,
    cardY + height - cardEdgeRadius,
  );
  pathBuilder.lineTo(cardX, cardY + cardEdgeRadius);
  // Quarter Arc Top Left Corner
  pathBuilder.arcTo(
    cardEdgeRadius,
    cardEdgeRadius,
    0,
    0,
    1,
    cardX + cardEdgeRadius,
    cardY,
  );
  pathBuilder.close();

  return (
    <path
      className="tooltip--card"
      d={pathBuilder.instructionToString()}
    ></path>
  );
};

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
export const SVGTooltip: React.FC = () => {
  const ContentComponent = React.useContext(SVGToolTipContentComponent);
  const IndicatorComponent = React.useContext(SVGIndicatorComponent);
  const pointX = React.useContext(SVGToolTipPointX);
  const pointY = React.useContext(SVGToolTipPointY);
  const xOffsetRatio = React.useContext(SVGToolTipValueRatio);
  const plotHeight = React.useContext(SVGToolTipDrawAreaHeight);
  const arrowVerticalPadding = React.useContext(SVGToolTipArrowVerticalPadding);

  // We use this to get the size of the layed out text elements after they have
  // been drawn.  This will give us a tight bounding box around the text.
  const textRef = React.useRef<null | SVGGElement>(null);
  const [textBBox, setTextBBox] = React.useState<null | DOMRect>(null);
  React.useEffect(() => {
    if (!textRef.current) {
      return;
    }

    if (!('getBBox' in textRef.current)) {
      // We cannot progress without this bounding box.  So we'll fallback on
      // the defaults in this case.
      return;
    }

    const bbox = textRef.current.getBBox();
    setTextBBox(bbox);
  }, [textRef, setTextBBox]);

  // We calculate the dimensions of the tooltip box using the text bounding box
  // as a base line to grow from.  If the text bounding box is not available, we
  // estimate the size of the box using some static values
  const textWidth = textBBox?.width ?? defaultTextBoxWidth;
  const textHeight = textBBox?.height ?? defaultTextBoxHeight;
  const width = Math.round(textWidth + horizontalInset + horizontalInset);
  const height = Math.round(textHeight + verticalInset + verticalInset);

  // We need to determine the position and dimensions of the tooltip
  // If the value height is greater than half th plot height, then we'll
  // want to draw the tooltip under tht element.
  // We'll want to shift the tooltip to the left or right, depending on
  // the x position within the plot width.  We'll need to make sure we take
  // into account the width of the insets of the tooltip.

  // This governs where the card is placed on the plot.
  const cardX =
    pointX -
    (width - arrowSize - arrowSize - arrowSize - arrowSize) * xOffsetRatio -
    arrowSize;
  const under = pointY > plotHeight / 2;
  const cardY = Math.floor(
    under
      ? pointY - height - arrowVerticalPadding - arrowSize
      : pointY + arrowVerticalPadding + arrowSize,
  );

  return (
    <SVGToolTipContentSize.Provider value={textBBox}>
      <g className="tooltip">
        {/* We want a value indicator */}
        {React.createElement(IndicatorComponent)}

        {/*
        We want a box wrapper than imitates a card

        The path element here has a rather large interpolated string within it.
        This string is just drawing a box with rounded rectangles on it, with
        a condition that adds a small triangle pointer to the bottom or top
        depending on whether the box is drawn below the value or above.
      */}
        <ToolTipCard />

        <g
          ref={textRef}
          transform={`translate(${cardX + horizontalInset}, ${cardY + verticalInset})`}
        >
          {React.createElement(ContentComponent)}
        </g>
      </g>
    </SVGToolTipContentSize.Provider>
  );
};
