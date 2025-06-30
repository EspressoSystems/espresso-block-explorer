import { PieChartEntry } from '../../../../../../../../../../../src/components/visual/pie_chart/PieChart';
import { default as React } from 'react';
export declare const NetworkTypesPieChartStreamContext: React.Context<AsyncIterable<PieChartEntry[]>>;
interface NetworkTypesPieChartStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const NetworkTypesPieChartStreamConsumer: React.FC<NetworkTypesPieChartStreamConsumerProps>;
export {};
