import { TaggedBase64 } from '../../../TaggedBase64';
import { Codec, Converter } from '../../../convert';
import { ExtendedHotShotQueryService, ExtendedHotShotQueryServiceAvailabilityAPI, HotShotQueryService, HotShotQueryServiceAvailabilityAPI, HotShotQueryServiceStatusAPI } from '../types';
export declare class GibraltarL1Finalized {
    readonly number: number;
    readonly timestamp: string;
    readonly hash: string;
    constructor(number: number, timestamp: string, hash: string);
    toJSON(): unknown;
}
export declare class GibraltarL1FinalizedDecoder implements Converter<unknown, GibraltarL1Finalized> {
    convert(input: unknown): GibraltarL1Finalized;
}
export declare class GibraltarL1FinalizedEncoder implements Converter<GibraltarL1Finalized, Record<'number', number> & Record<'timestamp', string> & Record<'hash', string>> {
    convert(input: GibraltarL1Finalized): Record<'number', number> & Record<'timestamp', string> & Record<'hash', string>;
}
export declare class GibraltarL1FinalizedCodec extends Codec<GibraltarL1Finalized, unknown> {
    readonly encoder: GibraltarL1FinalizedEncoder;
    readonly decoder: GibraltarL1FinalizedDecoder;
}
export declare const gibraltarL1FinalizedCodec: GibraltarL1FinalizedCodec;
export declare class GibraltarTransactionsRoot {
    readonly root: number[];
    constructor(root: number[]);
    toJSON(): unknown;
}
export declare class GibraltarTransactionsRootDecoder implements Converter<unknown, GibraltarTransactionsRoot> {
    convert(input: unknown): GibraltarTransactionsRoot;
}
export declare class GibraltarTransactionsRootEncoder implements Converter<GibraltarTransactionsRoot, Record<'root', number[]>> {
    convert(input: GibraltarTransactionsRoot): Record<'root', number[]>;
}
export declare class GibraltarTransactionsRootCodec extends Codec<GibraltarTransactionsRoot, unknown> {
    readonly encoder: GibraltarTransactionsRootEncoder;
    readonly decoder: GibraltarTransactionsRootDecoder;
}
export declare const gibraltarTransactionsRootCodec: GibraltarTransactionsRootCodec;
export declare class GibraltarAPIHeader {
    readonly height: number;
    readonly timestamp: number;
    readonly l1_head: number;
    readonly l1_finalized: null | GibraltarL1Finalized;
    readonly payload_commitment: number[];
    readonly transactions_root: GibraltarTransactionsRoot;
    constructor(height: number, timestamp: number, l1_head: number, l1_finalized: null | GibraltarL1Finalized, payload_commitment: number[], transactions_root: GibraltarTransactionsRoot);
    toJSON(): unknown;
}
export declare class GibraltarAPIHeaderDecoder implements Converter<unknown, GibraltarAPIHeader> {
    convert(input: unknown): GibraltarAPIHeader;
}
export declare class GibraltarAPIHeaderEncoder implements Converter<GibraltarAPIHeader, unknown> {
    convert(input: GibraltarAPIHeader): unknown;
}
export declare class GibraltarAPIHeaderCodec extends Codec<GibraltarAPIHeader, unknown> {
    readonly encoder: GibraltarAPIHeaderEncoder;
    readonly decoder: GibraltarAPIHeaderDecoder;
}
export declare const gibraltarAPIHeaderCodec: GibraltarAPIHeaderCodec;
export declare class GibraltarAPITransactionNMTEntry {
    readonly vm: number;
    readonly payload: number[];
    constructor(vm: number, payload: number[]);
    toJSON(): unknown;
}
export declare class GibraltarAPITransactionNMTEntryDecoder implements Converter<unknown, GibraltarAPITransactionNMTEntry> {
    convert(input: unknown): GibraltarAPITransactionNMTEntry;
}
export declare class GibraltarAPITransactionNMTEntryEncoder implements Converter<GibraltarAPITransactionNMTEntry, Record<'vm', number> & Record<'payload', number[]>> {
    convert(input: GibraltarAPITransactionNMTEntry): Record<'vm', number> & Record<'payload', number[]>;
}
export declare class GibraltarAPITransactionNMTEntryCodec extends Codec<GibraltarAPITransactionNMTEntry, unknown> {
    readonly encoder: GibraltarAPITransactionNMTEntryEncoder;
    readonly decoder: GibraltarAPITransactionNMTEntryDecoder;
}
export declare class GibraltarAPIPayload {
    readonly transaction_nmt: GibraltarAPITransactionNMTEntry[];
    constructor(transaction_nmt: GibraltarAPITransactionNMTEntry[]);
    toJSON(): unknown;
}
export declare class GibraltarAPIPayloadDecoder implements Converter<unknown, GibraltarAPIPayload> {
    convert(input: unknown): GibraltarAPIPayload;
}
export declare class GibraltarAPIPayloadEncoder implements Converter<GibraltarAPIPayload, unknown> {
    convert(input: GibraltarAPIPayload): unknown;
}
export declare class GibraltarAPIPayloadCodec extends Codec<GibraltarAPIPayload, unknown> {
    readonly encoder: GibraltarAPIPayloadEncoder;
    readonly decoder: GibraltarAPIPayloadDecoder;
}
export declare const gibraltarAPIPayloadCodec: GibraltarAPIPayloadCodec;
export declare class GibraltarAPIBlock {
    readonly header: GibraltarAPIHeader;
    readonly payload: GibraltarAPIPayload;
    readonly hash: TaggedBase64;
    readonly size: number;
    constructor(header: GibraltarAPIHeader, payload: GibraltarAPIPayload, hash: TaggedBase64, size: number);
    toJSON(): unknown;
}
export declare class GibraltarAPIBlockDecode implements Converter<unknown, GibraltarAPIBlock> {
    convert(input: unknown): GibraltarAPIBlock;
}
export declare class GibraltarAPIBlockEncoder implements Converter<GibraltarAPIBlock, unknown> {
    convert(input: GibraltarAPIBlock): unknown;
}
export declare class GibraltarAPIBlockCodec extends Codec<GibraltarAPIBlock, unknown> {
    readonly encoder: GibraltarAPIBlockEncoder;
    readonly decoder: GibraltarAPIBlockDecode;
}
export declare const gibraltarAPIBlockCodec: GibraltarAPIBlockCodec;
export declare class GibraltarAPIBitVecHead {
    readonly width: number;
    readonly index: number;
    constructor(width: number, index: number);
    toJSON(): unknown;
}
export declare class GibraltarAPIBitVecHeadDecoder implements Converter<unknown, GibraltarAPIBitVecHead> {
    convert(input: unknown): GibraltarAPIBitVecHead;
}
export declare class GibraltarAPIBitVecHeadEncoder implements Converter<GibraltarAPIBitVecHead, unknown> {
    convert(input: GibraltarAPIBitVecHead): unknown;
}
export declare class GibraltarAPIBitVecHeadCodec extends Codec<GibraltarAPIBitVecHead, unknown> {
    readonly encoder: GibraltarAPIBitVecHeadEncoder;
    readonly decoder: GibraltarAPIBitVecHeadDecoder;
}
export declare const gibraltarAPIBitVecHeadCodec: GibraltarAPIBitVecHeadCodec;
export declare class GibraltarAPIBitVec {
    readonly order: string;
    readonly head: GibraltarAPIBitVecHead;
    readonly bits: number;
    readonly data: number[];
    constructor(order: string, head: GibraltarAPIBitVecHead, bits: number, data: number[]);
    toJSON(): unknown;
}
export declare class GibraltarAPIBitVecDecoder implements Converter<unknown, GibraltarAPIBitVec> {
    convert(input: unknown): GibraltarAPIBitVec;
}
export declare class GibraltarAPIBitVecEncoder implements Converter<GibraltarAPIBitVec, unknown> {
    convert(input: GibraltarAPIBitVec): unknown;
}
export declare class GibraltarAPIBitVecCodec extends Codec<GibraltarAPIBitVec, unknown> {
    readonly encoder: GibraltarAPIBitVecEncoder;
    readonly decoder: GibraltarAPIBitVecDecoder;
}
export declare const gibraltarAPIBitVecCodec: GibraltarAPIBitVecCodec;
export declare class GibraltarAPIBQuorumCertificateData {
    readonly leaf_commit: TaggedBase64;
    constructor(leaf_commit: TaggedBase64);
    toJSON(): unknown;
}
export declare class GibraltarAPIBQuorumCertificateDataDecoder implements Converter<unknown, GibraltarAPIBQuorumCertificateData> {
    convert(input: unknown): GibraltarAPIBQuorumCertificateData;
}
export declare class GibraltarAPIBQuorumCertificateDataEncoder implements Converter<GibraltarAPIBQuorumCertificateData, unknown> {
    convert(input: GibraltarAPIBQuorumCertificateData): unknown;
}
export declare class GibraltarAPIBQuorumCertificateDataCodec extends Codec<GibraltarAPIBQuorumCertificateData, unknown> {
    readonly encoder: GibraltarAPIBQuorumCertificateDataEncoder;
    readonly decoder: GibraltarAPIBQuorumCertificateDataDecoder;
}
export declare const gibraltarAPIBQuorumCertificateDataCodec: GibraltarAPIBQuorumCertificateDataCodec;
export declare class GibraltarAPIQuorumCertificateSignatures {
    readonly signature: TaggedBase64;
    readonly bitvec: GibraltarAPIBitVec;
    constructor(signature: TaggedBase64, bitvec: GibraltarAPIBitVec);
    toJSON(): unknown;
}
export declare class GibraltarAPIQuorumCertificateSignaturesDecoder implements Converter<unknown, GibraltarAPIQuorumCertificateSignatures> {
    convert(input: unknown): GibraltarAPIQuorumCertificateSignatures;
}
export declare class GibraltarAPIQuorumCertificateSignaturesEncoder implements Converter<GibraltarAPIQuorumCertificateSignatures, unknown> {
    convert(input: GibraltarAPIQuorumCertificateSignatures): unknown;
}
export declare class GibraltarAPIQuorumCertificateSignaturesCodec extends Codec<GibraltarAPIQuorumCertificateSignatures, unknown> {
    readonly encoder: GibraltarAPIQuorumCertificateSignaturesEncoder;
    readonly decoder: GibraltarAPIQuorumCertificateSignaturesDecoder;
}
export declare const gibraltarAPIQuorumCertificateSignaturesCodec: GibraltarAPIQuorumCertificateSignaturesCodec;
export declare class GibraltarAPIQuorumCertificate {
    readonly data: GibraltarAPIBQuorumCertificateData;
    readonly vote_commitment: TaggedBase64;
    readonly view_number: number;
    readonly signatures: null | GibraltarAPIQuorumCertificateSignatures;
    readonly is_genesis: boolean;
    readonly _pd: null;
    constructor(data: GibraltarAPIBQuorumCertificateData, vote_commitment: TaggedBase64, view_number: number, signatures: null | GibraltarAPIQuorumCertificateSignatures, is_genesis: boolean, _pd: null);
    toJSON(): unknown;
}
export declare class GibraltarAPIQuorumCertificateDecoder implements Converter<unknown, GibraltarAPIQuorumCertificate> {
    convert(input: unknown): GibraltarAPIQuorumCertificate;
}
export declare class GibraltarAPIQuorumCertificateEncoder implements Converter<GibraltarAPIQuorumCertificate, unknown> {
    convert(input: GibraltarAPIQuorumCertificate): unknown;
}
export declare class GibraltarAPIQuorumCertificateCodec extends Codec<GibraltarAPIQuorumCertificate, unknown> {
    readonly encoder: GibraltarAPIQuorumCertificateEncoder;
    readonly decoder: GibraltarAPIQuorumCertificateDecoder;
}
export declare const gibraltarAPIQuorumCertificateCodec: GibraltarAPIQuorumCertificateCodec;
export declare class GibraltarAPILeaf {
    readonly view_number: number;
    readonly justify_qc: GibraltarAPIQuorumCertificate;
    readonly parent_commitment: TaggedBase64;
    readonly block_header: GibraltarAPIHeader;
    readonly block_payload: GibraltarAPIPayload;
    readonly rejected: unknown[];
    readonly timestamp: number;
    readonly proposer_id: TaggedBase64;
    constructor(view_number: number, justify_qc: GibraltarAPIQuorumCertificate, parent_commitment: TaggedBase64, block_header: GibraltarAPIHeader, block_payload: GibraltarAPIPayload, rejected: unknown[], timestamp: number, proposer_id: TaggedBase64);
    toJSON(): unknown;
}
export declare class GibraltarAPILeafDecoder implements Converter<unknown, GibraltarAPILeaf> {
    convert(input: unknown): GibraltarAPILeaf;
}
export declare class GibraltarAPILeafEncoder implements Converter<GibraltarAPILeaf, unknown> {
    convert(input: GibraltarAPILeaf): unknown;
}
export declare class GibraltarAPILeafCodec extends Codec<GibraltarAPILeaf, unknown> {
    readonly encoder: GibraltarAPILeafEncoder;
    readonly decoder: GibraltarAPILeafDecoder;
}
export declare const gibraltarAPILeafCodec: GibraltarAPILeafCodec;
export declare class GibraltarAPILeafResponse {
    readonly leaf: GibraltarAPILeaf;
    readonly qc: GibraltarAPIQuorumCertificate;
    constructor(leaf: GibraltarAPILeaf, qc: GibraltarAPIQuorumCertificate);
    toJSON(): unknown;
}
export declare class GibraltarAPILeafResponseDecoder implements Converter<unknown, GibraltarAPILeafResponse> {
    convert(input: unknown): GibraltarAPILeafResponse;
}
export declare class GibraltarAPILeafResponseEncoder implements Converter<GibraltarAPILeafResponse, unknown> {
    convert(input: GibraltarAPILeafResponse): unknown;
}
export declare class GibraltarAPILeafResponseCodec extends Codec<GibraltarAPILeafResponse, unknown> {
    readonly encoder: GibraltarAPILeafResponseEncoder;
    readonly decoder: GibraltarAPILeafResponseDecoder;
}
export declare const gibraltarAPILeafResponseCodec: GibraltarAPILeafResponseCodec;
export declare class GibraltarDerivedBlockSummary {
    readonly header: GibraltarAPIHeader;
    readonly hash: TaggedBase64;
    readonly size: number;
    readonly num_transactions: number;
    readonly proposer_id: TaggedBase64;
    constructor(header: GibraltarAPIHeader, hash: TaggedBase64, size: number, num_transactions: number, proposer_id: TaggedBase64);
    toJSON(): unknown;
}
export declare class GibraltarDerivedBlockSummaryDecoder implements Converter<unknown, GibraltarDerivedBlockSummary> {
    convert(input: unknown): GibraltarDerivedBlockSummary;
}
export declare class GibraltarDerivedBlockSummaryEncoder implements Converter<GibraltarDerivedBlockSummary, unknown> {
    convert(input: GibraltarDerivedBlockSummary): unknown;
}
export declare class GibraltarDerivedBlockSummaryCodec extends Codec<GibraltarDerivedBlockSummary, unknown> {
    readonly encoder: GibraltarDerivedBlockSummaryEncoder;
    readonly decoder: GibraltarDerivedBlockSummaryDecoder;
}
export declare const gibraltarDerivedBlockSummaryCodec: GibraltarDerivedBlockSummaryCodec;
export declare class GibraltarDerivedTransactionSummary {
    readonly hash: TaggedBase64;
    readonly header: GibraltarAPIHeader;
    readonly offset: number;
    readonly transaction: GibraltarAPITransactionNMTEntry;
    constructor(hash: TaggedBase64, header: GibraltarAPIHeader, offset: number, transaction: GibraltarAPITransactionNMTEntry);
    toJSON(): unknown;
}
export declare class GibraltarDerivedTransactionSummaryDecoder implements Converter<unknown, GibraltarDerivedTransactionSummary> {
    convert(input: unknown): GibraltarDerivedTransactionSummary;
}
export declare class GibraltarDerivedTransactionSummaryEncoder implements Converter<GibraltarDerivedTransactionSummary, unknown> {
    convert(input: GibraltarDerivedTransactionSummary): unknown;
}
export declare class GibraltarDerivedTransactionSummaryCodec extends Codec<GibraltarDerivedTransactionSummary, unknown> {
    readonly encoder: GibraltarDerivedTransactionSummaryEncoder;
    readonly decoder: GibraltarDerivedTransactionSummaryDecoder;
}
export declare abstract class GibraltarAPIMerkleTreeProof {
}
export declare class GibraltarAPIMerkleTreeEmptyProof extends GibraltarAPIMerkleTreeProof {
    toJSON(): unknown;
}
export declare class GibraltarAPIMerkleTreeEmptyProofDecoder implements Converter<unknown, GibraltarAPIMerkleTreeEmptyProof> {
    convert(input: unknown): GibraltarAPIMerkleTreeEmptyProof;
}
export declare class GibraltarAPIMerkleTreeEmptyProofEncoder implements Converter<GibraltarAPIMerkleTreeEmptyProof, unknown> {
    convert(): unknown;
}
export declare class GibraltarAPIMerkleTreeEmptyProofCodec extends Codec<GibraltarAPIMerkleTreeEmptyProof, unknown> {
    readonly encoder: GibraltarAPIMerkleTreeEmptyProofEncoder;
    readonly decoder: GibraltarAPIMerkleTreeEmptyProofDecoder;
}
export declare const gibraltarAPIMerkleTreeEmptyProofCodec: GibraltarAPIMerkleTreeEmptyProofCodec;
export declare class GibraltarAPIMerkleTreeLeafProof extends GibraltarAPIMerkleTreeProof {
    readonly value: TaggedBase64;
    readonly pos: TaggedBase64;
    readonly elem: TaggedBase64;
    constructor(value: TaggedBase64, pos: TaggedBase64, elem: TaggedBase64);
    toJSON(): unknown;
}
export declare class GibraltarAPIMerkleTreeLeafProofDecoder implements Converter<unknown, GibraltarAPIMerkleTreeLeafProof> {
    convert(input: unknown): GibraltarAPIMerkleTreeLeafProof;
}
export declare class GibraltarAPIMerkleTreeLeafProofEncoder implements Converter<GibraltarAPIMerkleTreeLeafProof, unknown> {
    convert(input: GibraltarAPIMerkleTreeLeafProof): unknown;
}
export declare class GibraltarAPIMerkleTreeLeafProofCodec extends Codec<GibraltarAPIMerkleTreeLeafProof, unknown> {
    readonly encoder: GibraltarAPIMerkleTreeLeafProofEncoder;
    readonly decoder: GibraltarAPIMerkleTreeLeafProofDecoder;
}
export declare const gibraltarAPIMerkleTreeLeafProofCodec: GibraltarAPIMerkleTreeLeafProofCodec;
export declare class GibraltarAPIMerkletTreeForgottenSubTreeProof extends GibraltarAPIMerkleTreeProof {
    readonly value: TaggedBase64;
    constructor(value: TaggedBase64);
    toJSON(): unknown;
}
export declare class GibraltarAPIMerkletTreeForgottenSubTreeProofDecoder implements Converter<unknown, GibraltarAPIMerkletTreeForgottenSubTreeProof> {
    convert(input: unknown): GibraltarAPIMerkletTreeForgottenSubTreeProof;
}
export declare class GibraltarAPIMerkletTreeForgottenSubTreeProofEncoder implements Converter<GibraltarAPIMerkletTreeForgottenSubTreeProof, unknown> {
    convert(input: GibraltarAPIMerkletTreeForgottenSubTreeProof): unknown;
}
export declare class GibraltarAPIMerkletTreeForgottenSubTreeProofCodec extends Codec<GibraltarAPIMerkletTreeForgottenSubTreeProof, unknown> {
    readonly encoder: GibraltarAPIMerkletTreeForgottenSubTreeProofEncoder;
    readonly decoder: GibraltarAPIMerkletTreeForgottenSubTreeProofDecoder;
}
export declare const gibraltarAPIMerkletTreeForgottenSubTreeProofCodec: GibraltarAPIMerkletTreeForgottenSubTreeProofCodec;
export declare class GibraltarAPIMerkleTreeBranchProof extends GibraltarAPIMerkleTreeProof {
    readonly value: TaggedBase64;
    readonly children: GibraltarAPIMerkleTreeProof[];
    constructor(value: TaggedBase64, children: GibraltarAPIMerkleTreeProof[]);
    toJSON(): unknown;
}
export declare class GibraltarAPIMerkleTreeBranchProofDecoder implements Converter<unknown, GibraltarAPIMerkleTreeBranchProof> {
    convert(input: unknown): GibraltarAPIMerkleTreeBranchProof;
}
export declare class GibraltarAPIMerkleTreeBranchProofEncoder implements Converter<GibraltarAPIMerkleTreeBranchProof, unknown> {
    convert(input: GibraltarAPIMerkleTreeBranchProof): unknown;
}
export declare class GibraltarAPIMerkleTreeBranchProofCodec extends Codec<GibraltarAPIMerkleTreeBranchProof, unknown> {
    readonly encoder: GibraltarAPIMerkleTreeBranchProofEncoder;
    readonly decoder: GibraltarAPIMerkleTreeBranchProofDecoder;
}
export declare const gibraltarAPIMerkleTreeBranchProofCodec: GibraltarAPIMerkleTreeBranchProofCodec;
export declare class GibraltarAPIMerkleTreeProofDecoder implements Converter<unknown, GibraltarAPIMerkleTreeProof> {
    convert(input: unknown): GibraltarAPIMerkleTreeProof;
}
export declare class GibraltarAPIMerkleTreeProofEncoder implements Converter<GibraltarAPIMerkleTreeProof, unknown> {
    convert(input: GibraltarAPIMerkleTreeProof): unknown;
}
export declare class GibraltarAPIMerkleTreeProofCodec extends Codec<GibraltarAPIMerkleTreeProof, unknown> {
    readonly encoder: GibraltarAPIMerkleTreeProofEncoder;
    readonly decoder: GibraltarAPIMerkleTreeProofDecoder;
}
export declare const gibraltarAPIMerkleTreeProofCodec: GibraltarAPIMerkleTreeProofCodec;
export declare class GibraltarAPITransactionProof {
    readonly pos: TaggedBase64;
    readonly proof: GibraltarAPIMerkleTreeProof;
    constructor(pos: TaggedBase64, proof: GibraltarAPIMerkleTreeProof);
    toJSON(): unknown;
}
export declare class GibraltarAPITransactionProofDecoder implements Converter<unknown, GibraltarAPITransactionProof> {
    convert(input: unknown): GibraltarAPITransactionProof;
}
export declare class GibraltarAPITransactionProofEncoder implements Converter<GibraltarAPITransactionProof, unknown> {
    convert(input: GibraltarAPITransactionProof): unknown;
}
export declare class GibraltarAPITransactionProofCodec extends Codec<GibraltarAPITransactionProof, unknown> {
    readonly encoder: GibraltarAPITransactionProofEncoder;
    readonly decoder: GibraltarAPITransactionProofDecoder;
}
export declare const gibraltarAPITransactionProofCodec: GibraltarAPITransactionProofCodec;
export declare class GibraltarAPITransactionResponse {
    readonly transaction: GibraltarAPITransactionNMTEntry;
    readonly block_hash: TaggedBase64;
    readonly proof: GibraltarAPITransactionProof;
    readonly height: number;
    readonly hash: TaggedBase64;
    constructor(transaction: GibraltarAPITransactionNMTEntry, block_hash: TaggedBase64, proof: GibraltarAPITransactionProof, height: number, hash: TaggedBase64);
    toJSON(): unknown;
}
export declare class GibraltarAPITransactionResponseDecoder implements Converter<unknown, GibraltarAPITransactionResponse> {
    convert(input: unknown): GibraltarAPITransactionResponse;
}
export declare class GibraltarAPITransactionResponseEncoder implements Converter<GibraltarAPITransactionResponse, unknown> {
    convert(input: GibraltarAPITransactionResponse): unknown;
}
export declare class GibraltarAPITransactionResponseCodec extends Codec<GibraltarAPITransactionResponse, unknown> {
    readonly encoder: GibraltarAPITransactionResponseEncoder;
    readonly decoder: GibraltarAPITransactionResponseDecoder;
}
export declare const gibraltarAPITransactionResponseCodec: GibraltarAPITransactionResponseCodec;
export declare const gibraltarDerivedTransactionSummaryCodec: GibraltarDerivedTransactionSummaryCodec;
export declare function convertBlockAndLeafToBlockSummary(block: GibraltarAPIBlock, leaf: GibraltarAPILeafResponse): Promise<GibraltarDerivedBlockSummary>;
export declare function convertBlockToBlockSummary(block: GibraltarAPIBlock): Promise<GibraltarDerivedBlockSummary>;
export declare function convertLeafAndTransactionsToTransactionSummaries(leaf: GibraltarAPILeafResponse, transactions: AsyncIterable<GibraltarAPITransactionResponse>): AsyncGenerator<GibraltarDerivedTransactionSummary>;
export type GibraltarHotShotQueryServiceAvailabilityAPI = HotShotQueryServiceAvailabilityAPI<GibraltarAPILeafResponse, GibraltarAPIBlock, GibraltarAPITransactionResponse>;
export type GibraltarHotShotQueryServiceStatusAPI = HotShotQueryServiceStatusAPI;
export type GibraltarHotShotQueryService = HotShotQueryService<GibraltarAPILeafResponse, GibraltarAPIBlock, GibraltarAPITransactionResponse>;
export type GibraltarExtendedHotShotQueryServiceAvailabilityAPI = ExtendedHotShotQueryServiceAvailabilityAPI<GibraltarDerivedBlockSummary, GibraltarDerivedTransactionSummary>;
export type GibraltarExtendedHotShotQueryService = ExtendedHotShotQueryService<GibraltarDerivedBlockSummary, GibraltarDerivedTransactionSummary>;
