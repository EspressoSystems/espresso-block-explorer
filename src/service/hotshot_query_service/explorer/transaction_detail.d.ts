import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerTransactionDetailData } from './transaction_detail_data';
import { ExplorerTransactionDetailDetails } from './transaction_detail_details';
/**
 * ExplorerTransactionDetail is a class that represents the details of a
 * transaction in the Explorer API.
 */
export declare class ExplorerTransactionDetail {
    readonly details: ExplorerTransactionDetailDetails;
    readonly data: ExplorerTransactionDetailData[];
    constructor(details: ExplorerTransactionDetailDetails, data: ExplorerTransactionDetailData[]);
    toJSON(): {
        details: {
            hash: string;
            height: number;
            block_confirmed: boolean;
            offset: number;
            num_transactions: number;
            size: number;
            time: string;
            sequencing_fees: never[];
            fee_details: never[];
        };
        data: {
            namespace: number;
            payload: string;
        }[];
    };
}
declare class ExplorerTransactionDetailDecoder implements Converter<unknown, ExplorerTransactionDetail> {
    convert(input: unknown): ExplorerTransactionDetail;
}
declare class ExplorerTransactionDetailEncoder implements Converter<ExplorerTransactionDetail> {
    convert(input: ExplorerTransactionDetail): {
        details: {
            hash: string;
            height: number;
            block_confirmed: boolean;
            offset: number;
            num_transactions: number;
            size: number;
            time: string;
            sequencing_fees: never[];
            fee_details: never[];
        };
        data: {
            namespace: number;
            payload: string;
        }[];
    };
}
declare class ExplorerTransactionDetailCodec extends TypeCheckingCodec<ExplorerTransactionDetail, ReturnType<InstanceType<new () => ExplorerTransactionDetailEncoder>['convert']>> {
    readonly encoder: ExplorerTransactionDetailEncoder;
    readonly decoder: ExplorerTransactionDetailDecoder;
}
export declare const cappuccinoExplorerTransactionDetailCodec: ExplorerTransactionDetailCodec;
export {};
