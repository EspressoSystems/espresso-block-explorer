import { DataContext } from '@/components/contexts/DataProvider';
import React from 'react';
import './pie_chart.css';

export interface PieChartLabelProps {
  label: string;
  value: number;
  percentage: number;
}

export const PieChartLabelContext = React.createContext<
  React.FC<PieChartLabelProps>
>(() => <></>);

/* eslint-disable react/prop-types */
export interface PieChartEntry {
  label: string;
  value: number;
}

export interface PieChartProps {
  values: PieChartEntry[];
}

/**
 * PieChart is a component that takes the given data and creates a pie chart
 */
export const PieChart: React.FC<PieChartProps> = (props) => {
  const data = props.values;

  if (!data) {
    return <></>;
  }

  if (data.length <= 0) {
    return <></>;
  }

  const width = 100;
  const height = 100;
  const radius = Math.min(width, height) / 2;
  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  const runningPercentage = data.reduce((acc: number[], entry) => {
    const lastPercentage = acc[acc.length - 1] ?? 0;
    const nextPercentage = lastPercentage + entry.value / total;
    acc.push(nextPercentage);
    return acc;
  }, []);

  return (
    <svg viewBox="0 0 100 100">
      <g className="pie-chart-sections">
        {data.map((entry, index) => {
          const endPercentage = runningPercentage[index] ?? 0;
          const startAngle = (runningPercentage[index - 1] ?? 0) * 2 * Math.PI;
          const endAngle = endPercentage * 2 * Math.PI;

          const startX = radius + Math.cos(startAngle) * radius;
          const startY = radius + Math.sin(startAngle) * radius;

          const endX = radius + Math.cos(endAngle) * radius;
          const endY = radius + Math.sin(endAngle) * radius;

          return (
            <path
              key={index}
              d={`M ${radius} ${radius} L ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY} Z`}
              data-label={entry.label}
            />
          );
        })}
      </g>
    </svg>
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
