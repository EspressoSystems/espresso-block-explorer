import { AsyncRetriever } from '../../../../../../../../../../src/async/async_retriever';
import { TaggedBase64 } from '../espresso/tagged_base64/tagged_base64';
export interface TransactionTreeData {
    readonly namespace: number;
    readonly data: ArrayBuffer;
}
export interface TransactionDetailEntry {
    readonly block: number;
    readonly index: number;
    readonly total: number;
    readonly size: number;
    readonly hash: TaggedBase64;
    readonly time: Date;
    readonly sender: TaggedBase64;
    readonly tree: TransactionTreeData;
}
export interface TransactionDetailRequest {
    height: number;
    offset: number;
}
export interface TransactionDetailAsyncRetriever extends AsyncRetriever<TransactionDetailRequest, TransactionDetailEntry> {
}
