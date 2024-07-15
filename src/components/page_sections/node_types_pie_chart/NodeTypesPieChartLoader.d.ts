import { PieChartEntry } from '../../../../../../../../../../../src/components/visual/pie_chart/PieChart';
import { default as React } from 'react';

export declare const NodeTypesPieChartStreamContext: React.Context<AsyncIterable<PieChartEntry[]>>;
interface NodeTypesPieChartStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const NodeTypesPieChartStreamConsumer: React.FC<NodeTypesPieChartStreamConsumerProps>;
export {};
