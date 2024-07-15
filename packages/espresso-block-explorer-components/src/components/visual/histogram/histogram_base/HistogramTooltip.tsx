import { NumberText } from '@/components/text';
import Text from '@/components/text/Text';
import { WithUiSmall, WithUiText600 } from '@/components/typography/typography';
import React from 'react';
import {
  SVGIndicatorComponent,
  SVGToolTipContentComponent,
  SVGToolTipDrawAreaHeight,
  SVGToolTipPointX,
  SVGToolTipPointY,
  SVGToolTipValueRatio,
  SVGTooltip,
} from '../../svg/SVGToolTip';
import {
  HistogramDomain,
  HistogramGraphValue,
  HistogramGraphValueIndex,
  HistogramGraphValueRect,
  HistogramPlotHeight,
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

const dotRadius = 10;
const dotBorderWidth = 2;
const text600FontSize = 14;
const textSmallFontSize = 14;

export const HistogramTooltip: React.FC = () => {
  const valuesLength = React.useContext(HistogramRange).length;
  const valueRect = React.useContext(HistogramGraphValueRect);
  const i = React.useContext(HistogramGraphValueIndex);
  const plotHeight = React.useContext(HistogramPlotHeight);

  // This governs where the card arrow, and the relative shifting of the card
  // in the x direction is placed on the plot.
  const xOffsetRatio = i / valuesLength;

  const halfValueWidth = valueRect.width / 2;

  return (
    <SVGToolTipContentComponent.Provider value={ToolTipText}>
      <SVGIndicatorComponent.Provider value={ToolTipIndicator}>
        <SVGToolTipDrawAreaHeight.Provider value={plotHeight}>
          <SVGToolTipPointX.Provider value={valueRect.x + halfValueWidth}>
            <SVGToolTipPointY.Provider value={valueRect.y}>
              <SVGToolTipValueRatio.Provider value={xOffsetRatio}>
                <SVGTooltip />
              </SVGToolTipValueRatio.Provider>
            </SVGToolTipPointY.Provider>
          </SVGToolTipPointX.Provider>
        </SVGToolTipDrawAreaHeight.Provider>
      </SVGIndicatorComponent.Provider>
    </SVGToolTipContentComponent.Provider>
  );
};

const ToolTipIndicator: React.FC = () => {
  const valueRect = React.useContext(HistogramGraphValueRect);
  const halfValueWidth = valueRect.width / 2;

  return (
    <>
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
    </>
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
          <NumberText number={Number(domain[0]) + i} />
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
        {React.createElement(comp, { value })}
      </UiText600>

      <UiTextSmallText
        className="tooltip--value-label"
        x={0}
        y={text600FontSize + textSmallFontSize}
        textAnchor="start"
      >
        <Text text="Block " />
        <NumberText number={Number(domain[i])} />
      </UiTextSmallText>
    </>
  );
};
