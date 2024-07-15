import { default as React } from 'react';

export interface PieChartLabelProps {
    label: string;
    value: number;
    percentage: number;
}
export declare const PieChartLabelContext: React.Context<React.FC<PieChartLabelProps>>;
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
export declare const PieChart: React.FC<PieChartProps>;
/**
 * PieChartFromData is a convenience component that uses the DataContext,
 * interpreted as a list of entries of type `PieChartEntry`, to render a
 * PieChart.
 */
export declare const PieChartFromData: React.FC;
