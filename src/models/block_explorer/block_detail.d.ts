import { default as MonetaryValue } from './monetary_value';
import { TaggedBase64 } from '../espresso/tagged_base64/TaggedBase64';
import { AsyncRetriever } from '../../../../../../../../../../src/async/AsyncRetriever';

export interface BlockDetailEntry {
    readonly hash: TaggedBase64;
    readonly height: number;
    readonly time: Date;
    readonly transactions: number;
    readonly proposer: ArrayBuffer;
    readonly recipient: ArrayBuffer;
    readonly size: number;
    readonly rewards: MonetaryValue[];
}
export interface BlockDetailAsyncRetriever extends AsyncRetriever<number, BlockDetailEntry> {
}
