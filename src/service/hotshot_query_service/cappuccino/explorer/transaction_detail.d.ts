import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoExplorerTransactionDetailData } from './transaction_detail_data';
import { CappuccinoExplorerTransactionDetailDetails } from './transaction_detail_details';

export declare class CappuccinoExplorerTransactionDetail {
    readonly details: CappuccinoExplorerTransactionDetailDetails;
    readonly data: CappuccinoExplorerTransactionDetailData[];
    constructor(details: CappuccinoExplorerTransactionDetailDetails, data: CappuccinoExplorerTransactionDetailData[]);
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
declare class CappuccinoExplorerTransactionDetailDecoder implements Converter<unknown, CappuccinoExplorerTransactionDetail> {
    convert(input: unknown): CappuccinoExplorerTransactionDetail;
}
declare class CappuccinoExplorerTransactionDetailEncoder implements Converter<CappuccinoExplorerTransactionDetail> {
    convert(input: CappuccinoExplorerTransactionDetail): {
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
declare class CappuccinoExplorerTransactionDetailCodec extends TypeCheckingCodec<CappuccinoExplorerTransactionDetail, ReturnType<InstanceType<new () => CappuccinoExplorerTransactionDetailEncoder>['convert']>> {
    readonly encoder: CappuccinoExplorerTransactionDetailEncoder;
    readonly decoder: CappuccinoExplorerTransactionDetailDecoder;
}
export declare const cappuccinoExplorerTransactionDetailCodec: CappuccinoExplorerTransactionDetailCodec;
export {};
