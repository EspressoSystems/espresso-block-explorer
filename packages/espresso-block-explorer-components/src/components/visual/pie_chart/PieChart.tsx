import { DataContext } from '@/components/contexts/DataProvider';
import NumberText from '@/components/text/NumberText';
import { WithUiText600 } from '@/components/typography/typography';
import React from 'react';
import Text from '../../text/Text';
import SVGPathBuilder from '../svg/SVGPathBuilder';
import {
  SVGToolTipContentComponent,
  SVGToolTipDrawAreaHeight,
  SVGToolTipDrawAreaWidth,
  SVGToolTipPointX,
  SVGToolTipPointY,
  SVGToolTipValueRatio,
  SVGTooltip,
} from '../svg/SVGToolTip';
import { useSVGSize } from '../svg/hooks';
import './pie_chart.css';

const UiText600 = WithUiText600('text') as React.FC<
  React.SVGTextElementAttributes<SVGTextElement>
>;
const text600FontSize = 14;

export interface PieChartLabelProps {
  label: string;
  value: number;
  percentage: number;
}

export const PieChartLabelContext = React.createContext<
  React.FC<PieChartLabelProps>
>(() => <></>);

export interface PieChartEntry {
  label: string;
  value: number;
}

export interface PieChartProps {
  values: PieChartEntry[];
}

interface PieChartEntryCalculation {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  startAngle: number;
  endAngle: number;
  endPercentage: number;
  label: string;
  value: number;
}

const PieChartEntryCalculationContext =
  React.createContext<null | PieChartEntryCalculation>(null);

/**
 * PieChart is a component that takes the given data and creates a pie chart
 */
export const PieChart: React.FC<PieChartProps> = (props) => {
  const data = props.values;
  const [ref, size] = useSVGSize();

  if (!data) {
    return <></>;
  }

  if (data.length <= 0) {
    return <></>;
  }

  const resolvedSize = size ?? { x: 0, y: 0, width: 100, height: 100 };
  const { x, y, width, height } = resolvedSize;
  const radius = Math.min(width, height) / 2;

  if (data.length === 1) {
    // We only have a single entry.
    // As such, we should only draw a single circle.

    return (
      <svg
        ref={ref}
        viewBox={`${x} ${y} ${width} ${height}`}
        role="graphics-datachart"
        aria-roledescription="pie chart"
      >
        <SVGToolTipDrawAreaWidth.Provider value={Number(width)}>
          <SVGToolTipDrawAreaHeight.Provider value={Number(height)}>
            <g className="pie-chart-sections" role="graphics-datagroup">
              <circle
                cx={radius}
                cy={radius}
                r={radius}
                data-label={data[0].label}
                role="graphics-datascale"
                // aria-datatype="portion"
                aria-valuemax={1}
              />
            </g>
            <g className="pie-chart-tooltip-hitboxes">
              <PieChartEntryCalculationContext.Provider
                value={{
                  startX: radius,
                  startY: radius,
                  endX: radius,
                  endY: radius,
                  label: data[0].label,
                  value: data[0].value,
                  startAngle: 0,
                  endAngle: 2 * Math.PI,
                  endPercentage: 1,
                }}
              >
                <g className="pie-chart-tooltip-hitbox">
                  <circle
                    className="pie-chart-section-hitbox"
                    cx={radius}
                    cy={radius}
                    r={radius}
                    data-label={data[0].label}
                  />
                  <PieChartTooltip />
                </g>
              </PieChartEntryCalculationContext.Provider>
            </g>
          </SVGToolTipDrawAreaHeight.Provider>
        </SVGToolTipDrawAreaWidth.Provider>
      </svg>
    );
  }

  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  const runningPercentage = data.reduce((acc: number[], entry) => {
    const lastPercentage = acc[acc.length - 1] ?? 0;
    const nextPercentage = lastPercentage + entry.value / total;
    acc.push(nextPercentage);
    return acc;
  }, []);

  const entries = data.map((entry, index): PieChartEntryCalculation => {
    const endPercentage = runningPercentage[index] ?? 0;
    const startAngle = (runningPercentage[index - 1] ?? 0) * 2 * Math.PI;
    const endAngle = endPercentage * 2 * Math.PI;

    const startX = radius + Math.cos(startAngle) * radius;
    const startY = radius + Math.sin(startAngle) * radius;

    const endX = radius + Math.cos(endAngle) * radius;
    const endY = radius + Math.sin(endAngle) * radius;

    return {
      startX,
      startY,
      endX,
      endY,
      startAngle,
      endAngle,
      endPercentage,
      label: entry.label,
      value: entry.value,
    };
  });

  return (
    <svg
      ref={ref}
      viewBox={`${x} ${y} ${width} ${height}`}
      role="graphics-datachart"
      aria-roledescription="pie chart"
    >
      <SVGToolTipDrawAreaWidth.Provider value={Number(width)}>
        <SVGToolTipDrawAreaHeight.Provider value={Number(height)}>
          <g className="pie-chart-sections" role="graphics-datagroup">
            {entries.map((entry, index) => {
              const {
                startX,
                startY,
                endX,
                endY,
                label,
                value,
                startAngle,
                endAngle,
              } = entry;

              const largeSweep = endAngle - startAngle > Math.PI ? 1 : 0;
              const pathBuilder = new SVGPathBuilder();
              pathBuilder.moveTo(radius, radius);
              pathBuilder.lineTo(startX, startY);
              pathBuilder.arcTo(radius, radius, 0, largeSweep, 1, endX, endY);
              pathBuilder.close();

              return (
                <path
                  key={index}
                  d={pathBuilder.instructionToString()}
                  data-label={label}
                  role="graphics-datascale"
                  aria-valuemax={value / total}
                />
              );
            })}
          </g>
          <g className="pie-chart-tooltip-hitboxes">
            {entries.map((entry, index) => {
              const {
                startX,
                startY,
                endX,
                endY,
                label,
                endAngle,
                startAngle,
              } = entry;

              const largeSweep = endAngle - startAngle > Math.PI ? 1 : 0;
              const pathBuilder = new SVGPathBuilder();
              pathBuilder.moveTo(radius, radius);
              pathBuilder.lineTo(startX, startY);
              pathBuilder.arcTo(radius, radius, 0, largeSweep, 1, endX, endY);
              pathBuilder.close();

              return (
                <PieChartEntryCalculationContext.Provider
                  key={index}
                  value={entry}
                >
                  <g className="pie-chart-tooltip-hitbox">
                    <path
                      key={index}
                      className="pie-chart-section-hitbox"
                      d={pathBuilder.instructionToString()}
                      data-label={label}
                    />
                    <PieChartTooltip />
                  </g>
                </PieChartEntryCalculationContext.Provider>
              );
            })}
          </g>
        </SVGToolTipDrawAreaHeight.Provider>
      </SVGToolTipDrawAreaWidth.Provider>
    </svg>
  );
};

function calculatePieSectionTooltipPosition(
  width: number,
  height: number,
  offsetRadius: number,
  entry: PieChartEntryCalculation,
) {
  const centerX = width * 0.5;
  const centerY = height * 0.5;

  // We add the start and end points twice to ge the center closer to the
  // middle of the pie chart section.

  if (entry.endAngle >= 2 * Math.PI && entry.startAngle <= 0) {
    // We have a single entry
    // Let's move this element to just the center of hte Pie Chart.
    return [centerX, centerY];
  }

  const middleAngle = (entry.endAngle + entry.startAngle) / 2;

  const pointX = centerX + Math.cos(middleAngle) * offsetRadius;
  const pointY = centerY + Math.sin(middleAngle) * offsetRadius;

  return [pointX, pointY];
}

// The offset radius is how far from the center of the pie chart tooltip we
// want the tooltip to be centered about. Normally we'd expect this to just
// be about half of the total radius as that make the most sense. However
// upon visual inspection this weight looks best around two thirds.
const kTooltipOffsetRadiusRatio = 2 / 3;

const PieChartTooltip: React.FC = () => {
  const height = React.useContext(SVGToolTipDrawAreaHeight);
  const width = React.useContext(SVGToolTipDrawAreaWidth);
  const entry = React.useContext(PieChartEntryCalculationContext);

  if (!entry) {
    return <></>;
  }

  const [pointX, pointY] = calculatePieSectionTooltipPosition(
    width,
    height,
    // As odd as it seems
    Math.min(width, height) * 0.5 * kTooltipOffsetRadiusRatio,
    entry,
  );

  return (
    <SVGToolTipContentComponent.Provider value={PieChartToolTipContent}>
      <SVGToolTipPointX.Provider value={Number(pointX)}>
        <SVGToolTipPointY.Provider value={Number(pointY)}>
          <SVGToolTipValueRatio.Provider value={pointX / width}>
            <SVGTooltip />
          </SVGToolTipValueRatio.Provider>
        </SVGToolTipPointY.Provider>
      </SVGToolTipPointX.Provider>
    </SVGToolTipContentComponent.Provider>
  );
};

const PieChartToolTipContent: React.FC = () => {
  const entry = React.useContext(PieChartEntryCalculationContext);
  if (!entry) {
    return <></>;
  }

  return (
    <UiText600 x={Number(0)} y={text600FontSize} textAnchor="start">
      <Text text={entry.label} />
      <Text text={' '} />
      <NumberText number={entry.value} />
    </UiText600>
  );
};

/**
 * PieChartFromData is a convenience component that uses the DataContext,
 * interpreted as a list of entries of type `PieChartEntry`, to render a
 * PieChart.
 */
export const PieChartFromData: React.FC = () => {
  const data = React.useContext(DataContext) as PieChartEntry[];

  return <PieChart values={data} />;
};
