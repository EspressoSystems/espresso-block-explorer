import { AsyncRetriever } from '../../../../../../../../../../src/async/async_retriever';
import { TaggedBase64 } from '../espresso/tagged_base64/tagged_base64';
import { default as MonetaryValue } from './monetary_value';
export interface BlockDetailEntry {
    readonly hash: TaggedBase64;
    readonly height: number;
    readonly time: Date;
    readonly transactions: number;
    readonly proposer: ArrayBuffer[];
    readonly recipient: ArrayBuffer[];
    readonly size: number;
    readonly rewards: MonetaryValue[];
}
export interface BlockDetailAsyncRetriever extends AsyncRetriever<number, BlockDetailEntry> {
}
