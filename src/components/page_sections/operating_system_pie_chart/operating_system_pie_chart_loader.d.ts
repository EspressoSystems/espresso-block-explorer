import { PieChartEntry } from '../../../../../../../../../../../src/components/visual/pie_chart/pie_chart';
import { default as React } from 'react';
export declare const OperatingSystemPieChartStreamContext: React.Context<AsyncIterable<PieChartEntry[]>>;
interface OperatingSystemPieChartStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const OperatingSystemPieChartStreamConsumer: React.FC<OperatingSystemPieChartStreamConsumerProps>;
export {};
