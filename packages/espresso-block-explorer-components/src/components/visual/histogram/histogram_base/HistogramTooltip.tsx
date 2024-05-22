import { NumberText } from '@/components/text';
import Text from '@/components/text/Text';
import { WithUiSmall, WithUiText600 } from '@/components/typography/typography';
import React from 'react';
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
  const domain = React.useContext(HistogramDomain);
  const valuesLength = React.useContext(HistogramRange).length;
  const valueRect = React.useContext(HistogramGraphValueRect);
  const value = React.useContext(HistogramGraphValue);
  const i = React.useContext(HistogramGraphValueIndex);
  const comp = React.useContext(HistogramYAxisLabelComponent);
  const plotWidth = React.useContext(HistogramPlotWidth);
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
  const width = textWidth + horizontalInset + horizontalInset;
  const height = textHeight + verticalInset + verticalInset;

  // We need to determine the position and dimensions of the tooltip
  // If the value height is greater than half th plot height, then we'll
  // want to draw the tooltip under tht element.
  // We'll want to shift the tooltip to the left or right, depending on
  // the x position within the plot width.  We'll need to make sure we take
  // into account the width of the insets of the tooltip.

  const cardEdgeRadius = borderRadius;
  // This governs a slight adjustment to leave room for after the rounded
  // corners, to allow for enough space to draw an arrow without a visual
  // disconnect.
  const cardWiggleOffset = horizontalInset + horizontalInset;
  // This governs where the card is placed on the plot.
  const xOffsetRatio = i / valuesLength;
  const cardX =
    (plotWidth - width) * xOffsetRatio - cardWiggleOffset * (1 - xOffsetRatio);
  const under = valueRect.y > plotHeight / 2;
  const cardY = under
    ? valueRect.y - height - dotRadius - arrowSize
    : valueRect.y + dotRadius + arrowSize;

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
      <path
        className="tooltip--card"
        d={`
          M${cardX + cardEdgeRadius},${cardY}
          ${
            // Arrow Pointing Up
            under
              ? ''
              : `
            L${valueRect.x + halfValueWidth - arrowSize},${cardY}
            L${valueRect.x + halfValueWidth},${cardY - arrowSize}
            L${valueRect.x + halfValueWidth + arrowSize},${cardY}
            `
          }
          L${cardX + width - cardEdgeRadius},${cardY}
          ${
            //Quarter Arc Top Right Corner
            `A ${cardEdgeRadius} ${cardEdgeRadius} 0 0 1 ${cardX + width},${cardY + cardEdgeRadius}`
          }
          L${cardX + width},${cardY + height - cardEdgeRadius}
          ${
            // Quarter Arc Bottom Right Corner
            `A ${cardEdgeRadius} ${cardEdgeRadius} 0 0 1 ${cardX + width - cardEdgeRadius},${cardY + height}`
          }
          ${
            // Arrow Pointing Down
            under
              ? `
            L${valueRect.x + halfValueWidth + arrowSize},${cardY + height}
            L${valueRect.x + halfValueWidth},${cardY + height + arrowSize}
            L${valueRect.x + halfValueWidth - arrowSize},${cardY + height}
            `
              : ``
          }
          L${cardX + cardEdgeRadius},${cardY + height}
          ${
            // Quarter Arc Bottom Left Corner
            `A ${cardEdgeRadius} ${cardEdgeRadius} 0 0 1 ${cardX},${cardY + height - cardEdgeRadius}`
          }
          L${cardX},${cardY + cardEdgeRadius}
          ${
            // Quarter Arc Top Left Corner
            `A ${cardEdgeRadius} ${cardEdgeRadius} 0 0 1 ${cardX + cardEdgeRadius},${cardY}`
          }
          Z`}
      ></path>

      <g ref={textRef}>
        {/* The box should only hold two lines, but we don't know how wide it will be, sadly */}
        <UiText600
          className="tooltip--value-label"
          x={cardX + horizontalInset}
          y={cardY + horizontalInset + text600FontSize}
          textAnchor="start"
        >
          {/* What's the Current Block Height */}
          {/* What's the timestamp for this block */}
          {/* What's the current Value of this */}
          {React.createElement(comp, { value })}
        </UiText600>

        <UiTextSmallText
          className="tooltip--value-label"
          x={cardX + horizontalInset}
          y={cardY + horizontalInset + text600FontSize + textSmallFontSize}
          textAnchor="start"
        >
          <Text text="Block " />
          <NumberText number={domain[i]} />
        </UiTextSmallText>
      </g>
    </g>
  );
};
