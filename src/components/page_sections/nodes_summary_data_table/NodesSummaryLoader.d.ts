import { default as React } from 'react';

export interface NodeSummaryData {
    name: string;
    address: ArrayBuffer;
    companyDetails: {
        name: string;
        website: string;
    };
    location: {
        coords: [number, number];
        country: string;
    };
}
export declare const NodeSummaryStreamContext: React.Context<AsyncIterable<NodeSummaryData[]>>;
interface NodeSummaryStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const NodeSummaryStreamConsumer: React.FC<NodeSummaryStreamConsumerProps>;
export {};
