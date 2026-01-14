import React from 'react';
import './pie_chart_section_title.css';

export interface PieChartSectionTitleProps {
  children: React.ReactNode;
}

/**
 * PieChartSectionTitle is a component that represents the title of a section
 * of a pie chart. This component is useful for labeling sections of a pie
 * chart.
 */
export const PieChartSectionTitle: React.FC<PieChartSectionTitleProps> = (
  props,
) => {
  return (
    <div className="pie-chart-section-title card--padding heading--margin">
      <h2>{props.children}</h2>
    </div>
  );
};
