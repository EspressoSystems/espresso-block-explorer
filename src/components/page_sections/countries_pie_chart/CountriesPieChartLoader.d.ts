import { PieChartEntry } from '../../../../../../../../../../../src/components/visual/pie_chart/PieChart';
import { default as React } from 'react';
export declare const CountriesPieChartStreamContext: React.Context<AsyncIterable<PieChartEntry[]>>;
interface CountriesPieChartStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const CountriesPieChartStreamConsumer: React.FC<CountriesPieChartStreamConsumerProps>;
export {};
