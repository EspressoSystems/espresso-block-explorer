import { TaggedBase64 } from '../..';
import { AsyncRetriever } from '../../AsyncRetriever';
export interface BlockDetail {
    readonly height: number;
    readonly time: Date;
    readonly transactions: number;
    readonly proposer: TaggedBase64;
    readonly size: number;
}
export interface BlockDetailAsyncRetriever extends AsyncRetriever<number, BlockDetail> {
}
