import { NumberText } from '@/components/text';
import Text from '@/components/text/Text';
import { WithUiSmall, WithUiText600 } from '@/components/typography/typography';
import React from 'react';
import SVGPathBuilder from './SVGPathBuilder';
import {
  HistogramDomain,
  HistogramGraphValue,
  HistogramGraphValueIndex,
  HistogramGraphValueRect,
  HistogramPlotHeight,
  HistogramPlotWidth,
  HistogramRange,
  HistogramYAxisLabelComponent,
} from './contexts';
import './histogram_plot.css';

const UiText600 = WithUiText600('text') as React.FC<
  React.SVGTextElementAttributes<SVGTextElement>
>;
const UiTextSmallText = WithUiSmall('text') as React.FC<
  React.SVGTextElementAttributes<SVGTextElement>
>;

const defaultTextBoxWidth = 100;
const defaultTextBoxHeight = 30;
const horizontalInset = 8;
const verticalInset = 8;
const borderRadius = 8;
const arrowSize = 5;
const dotRadius = 10;
const dotBorderWidth = 2;
const text600FontSize = 14;
const textSmallFontSize = 14;

export const HistogramTooltip: React.FC = () => {
  const valuesLength = React.useContext(HistogramRange).length;
  const valueRect = React.useContext(HistogramGraphValueRect);
  const i = React.useContext(HistogramGraphValueIndex);
  const plotHeight = React.useContext(HistogramPlotHeight);

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
  const xOffsetRatio = i / (valuesLength - 1);
  const cardX =
    valueRect.x -
    (width - arrowSize - arrowSize - arrowSize - arrowSize) * xOffsetRatio -
    arrowSize;
  const under = valueRect.y > plotHeight / 2;
  const cardY = Math.floor(
    under
      ? valueRect.y - height - dotRadius - arrowSize
      : valueRect.y + dotRadius + arrowSize,
  );

  const halfValueWidth = valueRect.width / 2;

  return (
    <g className="tooltip">
      {/* We want a value indicator */}
      <circle
        className="value-pointer--outer"
        cx={valueRect.x + halfValueWidth}
        cy={valueRect.y}
        r={dotRadius}
      ></circle>
      <circle
        className="value-pointer--inner"
        cx={valueRect.x + halfValueWidth}
        cy={valueRect.y}
        r={dotRadius - dotBorderWidth}
      ></circle>

      {/*
        We want a box wrapper than imitates a card

        The path element here has a rather large interpolated string within it.
        This string is just drawing a box with rounded rectangles on it, with
        a condition that adds a small triangle pointer to the bottom or top
        depending on whether the box is drawn below the value or above.
      */}
      <ToolTipCard textBBox={textBBox} />

      <g
        ref={textRef}
        transform={`translate(${cardX + horizontalInset}, ${cardY + verticalInset})`}
      >
        <ToolTipText />
      </g>
    </g>
  );
};

interface ToolTipCardProps {
  textBBox: null | DOMRect;
}

const ToolTipCard: React.FC<ToolTipCardProps> = (props) => {
  const valuesLength = React.useContext(HistogramRange).length;
  const valueRect = React.useContext(HistogramGraphValueRect);
  const i = React.useContext(HistogramGraphValueIndex);
  const plotWidth = React.useContext(HistogramPlotWidth);
  const plotHeight = React.useContext(HistogramPlotHeight);
  const { textBBox } = props;

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
  const xOffsetRatio = i / (valuesLength - 1);
  const cardX =
    valueRect.x -
    (width - arrowSize - arrowSize - arrowSize - arrowSize) * xOffsetRatio -
    arrowSize;
  const under = valueRect.y > plotHeight / 2;
  const cardY = Math.floor(
    under
      ? valueRect.y - height - dotRadius - arrowSize
      : valueRect.y + dotRadius + arrowSize,
  );

  const halfValueWidth = valueRect.width / 2;
  const pathBuilder = new SVGPathBuilder();
  pathBuilder.moveTo(cardX + cardEdgeRadius, cardY);

  if (!under) {
    // Arrow Pointing Up
    pathBuilder.lineTo(valueRect.x + halfValueWidth - arrowSize, cardY);
    pathBuilder.lineTo(valueRect.x + halfValueWidth, cardY - arrowSize);
    pathBuilder.lineTo(valueRect.x + halfValueWidth + arrowSize, cardY);
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
    pathBuilder.lineTo(
      valueRect.x + halfValueWidth + arrowSize,
      cardY + height,
    );
    pathBuilder.lineTo(
      valueRect.x + halfValueWidth,
      cardY + height + arrowSize,
    );
    pathBuilder.lineTo(
      valueRect.x + halfValueWidth - arrowSize,
      cardY + height,
    );
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
      data-stats={JSON.stringify({
        width,
        height,
        plotWidth,
        plotHeight,
        cardX,
        cardY,
        valueRect,
      })}
    ></path>
  );
};

const ToolTipText: React.FC = () => {
  const domain = React.useContext(HistogramDomain);
  const comp = React.useContext(HistogramYAxisLabelComponent);
  const i = React.useContext(HistogramGraphValueIndex);
  const value = React.useContext(HistogramGraphValue);

  if (value === null) {
    // We're missing data for this block. There's a gap in the data.

    return (
      <>
        <UiText600
          className="tooltip--value-label"
          x={0}
          y={text600FontSize}
          textAnchor="start"
        >
          <Text text="Missing Data" />
        </UiText600>
        <UiTextSmallText
          className="tooltip--value-label"
          x={0}
          y={text600FontSize + textSmallFontSize}
          textAnchor="start"
        >
          <Text text="Block " />
          <NumberText number={domain[0] + i} />
        </UiTextSmallText>
      </>
    );
  }

  return (
    <>
      {/* The box should only hold two lines, but we don't know how wide it will be, sadly */}
      <UiText600
        className="tooltip--value-label"
        x={0}
        y={text600FontSize}
        textAnchor="start"
      >
        {/* What's the Current Block Height */}
        {/* What's the timestamp for this block */}
        {/* What's the current Value of this */}
        {React.createElement(comp, { value })}
      </UiText600>

      <UiTextSmallText
        className="tooltip--value-label"
        x={0}
        y={text600FontSize + textSmallFontSize}
        textAnchor="start"
      >
        <Text text="Block " />
        <NumberText number={domain[i]} />
      </UiTextSmallText>
    </>
  );
};
