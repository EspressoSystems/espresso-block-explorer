import { TaggedBase64, taggedBase64Codec } from '../../../TaggedBase64';
import {
  Codec,
  Converter,
  InvalidInputError,
  isArrayMemberFunction,
  isBoolean,
  isNull,
  isNumber,
  isRecord,
  isString,
  isUnknown,
} from '../../../convert';
import {
  convertIterableToAsyncIterable,
  mapAsyncIterable,
} from '../../../functional_async';
import {
  ExtendedHotShotQueryService,
  ExtendedHotShotQueryServiceAvailabilityAPI,
  HotShotQueryService,
  HotShotQueryServiceAvailabilityAPI,
  HotShotQueryServiceStatusAPI,
} from '../types';

const isNumberArray = isArrayMemberFunction(isNumber);

export class GibraltarL1Finalized {
  readonly number: number;
  readonly timestamp: string;
  readonly hash: string;

  constructor(number: number, timestamp: string, hash: string) {
    this.number = number;
    this.timestamp = timestamp;
    this.hash = hash;
  }

  toJSON() {
    return gibraltarL1FinalizedCodec.encode(this);
  }
}

export class GibraltarL1FinalizedDecoder
  implements Converter<unknown, GibraltarL1Finalized>
{
  convert(input: unknown): GibraltarL1Finalized {
    if (
      !isRecord(input, 'number', isNumber) ||
      !isRecord(input, 'timestamp', isString) ||
      !isRecord(input, 'hash', isString)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarL1Finalized(input.number, input.timestamp, input.hash);
  }
}

export class GibraltarL1FinalizedEncoder
  implements
    Converter<
      GibraltarL1Finalized,
      Record<'number', number> &
        Record<'timestamp', string> &
        Record<'hash', string>
    >
{
  convert(
    input: GibraltarL1Finalized,
  ): Record<'number', number> &
    Record<'timestamp', string> &
    Record<'hash', string> {
    return {
      number: input.number,
      timestamp: input.timestamp,
      hash: input.hash,
    };
  }
}

export class GibraltarL1FinalizedCodec extends Codec<
  GibraltarL1Finalized,
  unknown
> {
  readonly encoder = new GibraltarL1FinalizedEncoder();
  readonly decoder = new GibraltarL1FinalizedDecoder();
}

export const gibraltarL1FinalizedCodec = new GibraltarL1FinalizedCodec();

export class GibraltarTransactionsRoot {
  readonly root: number[];

  constructor(root: number[]) {
    this.root = root;
  }

  toJSON() {
    return gibraltarTransactionsRootCodec.encode(this);
  }
}

export class GibraltarTransactionsRootDecoder
  implements Converter<unknown, GibraltarTransactionsRoot>
{
  convert(input: unknown): GibraltarTransactionsRoot {
    if (!isRecord(input, 'root', isNumberArray)) {
      throw new InvalidInputError();
    }

    return new GibraltarTransactionsRoot(input.root);
  }
}

export class GibraltarTransactionsRootEncoder
  implements Converter<GibraltarTransactionsRoot, Record<'root', number[]>>
{
  convert(input: GibraltarTransactionsRoot): Record<'root', number[]> {
    return {
      root: input.root,
    };
  }
}

export class GibraltarTransactionsRootCodec extends Codec<
  GibraltarTransactionsRoot,
  unknown
> {
  readonly encoder = new GibraltarTransactionsRootEncoder();
  readonly decoder = new GibraltarTransactionsRootDecoder();
}

export const gibraltarTransactionsRootCodec =
  new GibraltarTransactionsRootCodec();

export class GibraltarAPIHeader {
  readonly height: number;
  readonly timestamp: number;
  readonly l1_head: number;
  readonly l1_finalized: null | GibraltarL1Finalized;
  readonly payload_commitment: number[];
  readonly transactions_root: GibraltarTransactionsRoot;

  constructor(
    height: number,
    timestamp: number,
    l1_head: number,
    l1_finalized: null | GibraltarL1Finalized,
    payload_commitment: number[],
    transactions_root: GibraltarTransactionsRoot,
  ) {
    this.height = height;
    this.timestamp = timestamp;
    this.l1_head = l1_head;
    this.l1_finalized = l1_finalized;
    this.payload_commitment = payload_commitment;
    this.transactions_root = transactions_root;
  }

  toJSON() {
    return gibraltarAPIHeaderCodec.encode(this);
  }
}

export class GibraltarAPIHeaderDecoder
  implements Converter<unknown, GibraltarAPIHeader>
{
  convert(input: unknown): GibraltarAPIHeader {
    if (
      !isRecord(input, 'height', isNumber) ||
      !isRecord(input, 'timestamp', isNumber) ||
      !isRecord(input, 'l1_head', isNumber) ||
      !isRecord(input, 'l1_finalized', isUnknown) ||
      !isRecord(input, 'payload_commitment', isNumberArray) ||
      !isRecord(input, 'transactions_root', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIHeader(
      input.height,
      input.timestamp,
      input.l1_head,
      input.l1_finalized === null
        ? null
        : gibraltarL1FinalizedCodec.decode(input.l1_finalized),
      input.payload_commitment,
      gibraltarTransactionsRootCodec.decode(input.transactions_root),
    );
  }
}

export class GibraltarAPIHeaderEncoder
  implements Converter<GibraltarAPIHeader, unknown>
{
  convert(input: GibraltarAPIHeader): unknown {
    return {
      height: input.height,
      timestamp: input.timestamp,
      l1_head: input.l1_head,
      l1_finalized:
        input.l1_finalized &&
        gibraltarL1FinalizedCodec.encode(input.l1_finalized),
      payload_commitment: input.payload_commitment,
      transactions_root: gibraltarTransactionsRootCodec.encode(
        input.transactions_root,
      ),
    };
  }
}

export class GibraltarAPIHeaderCodec extends Codec<
  GibraltarAPIHeader,
  unknown
> {
  readonly encoder = new GibraltarAPIHeaderEncoder();
  readonly decoder = new GibraltarAPIHeaderDecoder();
}

export const gibraltarAPIHeaderCodec = new GibraltarAPIHeaderCodec();

export class GibraltarAPITransactionNMTEntry {
  readonly vm: number;
  readonly payload: number[];

  constructor(vm: number, payload: number[]) {
    this.vm = vm;
    this.payload = payload;
  }

  toJSON() {
    return gibraltarAPITransactionNMTEntryCodec.encode(this);
  }
}

export class GibraltarAPITransactionNMTEntryDecoder
  implements Converter<unknown, GibraltarAPITransactionNMTEntry>
{
  convert(input: unknown): GibraltarAPITransactionNMTEntry {
    if (
      !isRecord(input, 'vm', isNumber) ||
      !isRecord(input, 'payload', isNumberArray)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPITransactionNMTEntry(input.vm, input.payload);
  }
}

export class GibraltarAPITransactionNMTEntryEncoder
  implements
    Converter<
      GibraltarAPITransactionNMTEntry,
      Record<'vm', number> & Record<'payload', number[]>
    >
{
  convert(
    input: GibraltarAPITransactionNMTEntry,
  ): Record<'vm', number> & Record<'payload', number[]> {
    return {
      vm: input.vm,
      payload: input.payload,
    };
  }
}

export class GibraltarAPITransactionNMTEntryCodec extends Codec<
  GibraltarAPITransactionNMTEntry,
  unknown
> {
  readonly encoder = new GibraltarAPITransactionNMTEntryEncoder();
  readonly decoder = new GibraltarAPITransactionNMTEntryDecoder();
}

const gibraltarAPITransactionNMTEntryCodec =
  new GibraltarAPITransactionNMTEntryCodec();

export class GibraltarAPIPayload {
  readonly transaction_nmt: GibraltarAPITransactionNMTEntry[];

  constructor(transaction_nmt: GibraltarAPITransactionNMTEntry[]) {
    this.transaction_nmt = transaction_nmt;
  }

  toJSON() {
    return gibraltarAPIPayloadCodec.encode(this);
  }
}

const isUnknownArray = isArrayMemberFunction(isUnknown);

export class GibraltarAPIPayloadDecoder
  implements Converter<unknown, GibraltarAPIPayload>
{
  convert(input: unknown): GibraltarAPIPayload {
    if (!isRecord(input, 'transaction_nmt', isUnknownArray)) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIPayload(
      input.transaction_nmt.map(
        gibraltarAPITransactionNMTEntryCodec.decoder.convert,
      ),
    );
  }
}

export class GibraltarAPIPayloadEncoder
  implements Converter<GibraltarAPIPayload, unknown>
{
  convert(input: GibraltarAPIPayload): unknown {
    return {
      transaction_nmt: input.transaction_nmt.map(
        gibraltarAPITransactionNMTEntryCodec.encode,
      ),
    };
  }
}

export class GibraltarAPIPayloadCodec extends Codec<
  GibraltarAPIPayload,
  unknown
> {
  readonly encoder = new GibraltarAPIPayloadEncoder();
  readonly decoder = new GibraltarAPIPayloadDecoder();
}

export const gibraltarAPIPayloadCodec = new GibraltarAPIPayloadCodec();

export class GibraltarAPIBlock {
  readonly header: GibraltarAPIHeader;
  readonly payload: GibraltarAPIPayload;
  readonly hash: TaggedBase64;
  readonly size: number;

  constructor(
    header: GibraltarAPIHeader,
    payload: GibraltarAPIPayload,
    hash: TaggedBase64,
    size: number,
  ) {
    this.header = header;
    this.payload = payload;
    this.hash = hash;
    this.size = size;
  }

  toJSON() {
    return gibraltarAPIBlockCodec.encode(this);
  }
}

export class GibraltarAPIBlockDecode
  implements Converter<unknown, GibraltarAPIBlock>
{
  convert(input: unknown): GibraltarAPIBlock {
    if (
      !isRecord(input, 'header', isUnknown) ||
      !isRecord(input, 'payload', isUnknown) ||
      !isRecord(input, 'hash', isUnknown) ||
      !isRecord(input, 'size', isNumber)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIBlock(
      gibraltarAPIHeaderCodec.decode(input.header),
      gibraltarAPIPayloadCodec.decode(input.payload),
      taggedBase64Codec.decode(input.hash),
      input.size,
    );
  }
}

export class GibraltarAPIBlockEncoder
  implements Converter<GibraltarAPIBlock, unknown>
{
  convert(input: GibraltarAPIBlock): unknown {
    return {
      header: gibraltarAPIHeaderCodec.encode(input.header),
      payload: gibraltarAPIPayloadCodec.encode(input.payload),
      hash: taggedBase64Codec.encode(input.hash),
      size: input.size,
    };
  }
}

export class GibraltarAPIBlockCodec extends Codec<GibraltarAPIBlock, unknown> {
  readonly encoder = new GibraltarAPIBlockEncoder();
  readonly decoder = new GibraltarAPIBlockDecode();
}

export const gibraltarAPIBlockCodec = new GibraltarAPIBlockCodec();

export class GibraltarAPIBitVecHead {
  readonly width: number;
  readonly index: number;

  constructor(width: number, index: number) {
    this.width = width;
    this.index = index;
  }

  toJSON() {
    return gibraltarAPIBitVecHeadCodec.encode(this);
  }
}

export class GibraltarAPIBitVecHeadDecoder
  implements Converter<unknown, GibraltarAPIBitVecHead>
{
  convert(input: unknown): GibraltarAPIBitVecHead {
    if (
      !isRecord(input, 'width', isNumber) ||
      !isRecord(input, 'index', isNumber)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIBitVecHead(input.width, input.index);
  }
}

export class GibraltarAPIBitVecHeadEncoder
  implements Converter<GibraltarAPIBitVecHead, unknown>
{
  convert(input: GibraltarAPIBitVecHead): unknown {
    return {
      width: input.width,
      index: input.index,
    };
  }
}

export class GibraltarAPIBitVecHeadCodec extends Codec<
  GibraltarAPIBitVecHead,
  unknown
> {
  readonly encoder = new GibraltarAPIBitVecHeadEncoder();
  readonly decoder = new GibraltarAPIBitVecHeadDecoder();
}

export const gibraltarAPIBitVecHeadCodec = new GibraltarAPIBitVecHeadCodec();

export class GibraltarAPIBitVec {
  readonly order: string;
  readonly head: GibraltarAPIBitVecHead;
  readonly bits: number;
  readonly data: number[];

  constructor(
    order: string,
    head: GibraltarAPIBitVecHead,
    bits: number,
    data: number[],
  ) {
    this.order = order;
    this.head = head;
    this.bits = bits;
    this.data = data;
  }

  toJSON() {
    return gibraltarAPIBitVecCodec.encode(this);
  }
}

export class GibraltarAPIBitVecDecoder
  implements Converter<unknown, GibraltarAPIBitVec>
{
  convert(input: unknown): GibraltarAPIBitVec {
    if (
      !isRecord(input, 'order', isString) ||
      !isRecord(input, 'head', isUnknown) ||
      !isRecord(input, 'bits', isNumber) ||
      !isRecord(input, 'data', isNumberArray)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIBitVec(
      input.order,
      gibraltarAPIBitVecHeadCodec.decode(input.head),
      input.bits,
      input.data,
    );
  }
}

export class GibraltarAPIBitVecEncoder
  implements Converter<GibraltarAPIBitVec, unknown>
{
  convert(input: GibraltarAPIBitVec): unknown {
    return {
      order: input.order,
      head: gibraltarAPIBitVecHeadCodec.encode(input.head),
      bits: input.bits,
      data: input.data,
    };
  }
}

export class GibraltarAPIBitVecCodec extends Codec<
  GibraltarAPIBitVec,
  unknown
> {
  readonly encoder = new GibraltarAPIBitVecEncoder();
  readonly decoder = new GibraltarAPIBitVecDecoder();
}

export const gibraltarAPIBitVecCodec = new GibraltarAPIBitVecCodec();

export class GibraltarAPIBQuorumCertificateData {
  readonly leaf_commit: TaggedBase64;

  constructor(leaf_commit: TaggedBase64) {
    this.leaf_commit = leaf_commit;
  }

  toJSON() {
    return gibraltarAPIBQuorumCertificateDataCodec.encode(this);
  }
}

export class GibraltarAPIBQuorumCertificateDataDecoder
  implements Converter<unknown, GibraltarAPIBQuorumCertificateData>
{
  convert(input: unknown): GibraltarAPIBQuorumCertificateData {
    if (!isRecord(input, 'leaf_commit', isUnknown)) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIBQuorumCertificateData(
      taggedBase64Codec.decode(input.leaf_commit),
    );
  }
}

export class GibraltarAPIBQuorumCertificateDataEncoder
  implements Converter<GibraltarAPIBQuorumCertificateData, unknown>
{
  convert(input: GibraltarAPIBQuorumCertificateData): unknown {
    return {
      leaf_commit: taggedBase64Codec.encode(input.leaf_commit),
    };
  }
}

export class GibraltarAPIBQuorumCertificateDataCodec extends Codec<
  GibraltarAPIBQuorumCertificateData,
  unknown
> {
  readonly encoder = new GibraltarAPIBQuorumCertificateDataEncoder();
  readonly decoder = new GibraltarAPIBQuorumCertificateDataDecoder();
}

export const gibraltarAPIBQuorumCertificateDataCodec =
  new GibraltarAPIBQuorumCertificateDataCodec();

export class GibraltarAPIQuorumCertificateSignatures {
  readonly signature: TaggedBase64;
  readonly bitvec: GibraltarAPIBitVec;

  constructor(signature: TaggedBase64, bitvec: GibraltarAPIBitVec) {
    this.signature = signature;
    this.bitvec = bitvec;
  }

  toJSON() {
    return gibraltarAPIQuorumCertificateSignaturesCodec.encode(this);
  }
}

export class GibraltarAPIQuorumCertificateSignaturesDecoder
  implements Converter<unknown, GibraltarAPIQuorumCertificateSignatures>
{
  convert(input: unknown): GibraltarAPIQuorumCertificateSignatures {
    if (!isUnknownArray(input) || input.length !== 2) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIQuorumCertificateSignatures(
      taggedBase64Codec.decode(input[0]),
      gibraltarAPIBitVecCodec.decode(input[1]),
    );
  }
}

export class GibraltarAPIQuorumCertificateSignaturesEncoder
  implements Converter<GibraltarAPIQuorumCertificateSignatures, unknown>
{
  convert(input: GibraltarAPIQuorumCertificateSignatures): unknown {
    return [
      taggedBase64Codec.encode(input.signature),
      gibraltarAPIBitVecCodec.encode(input.bitvec),
    ];
  }
}

export class GibraltarAPIQuorumCertificateSignaturesCodec extends Codec<
  GibraltarAPIQuorumCertificateSignatures,
  unknown
> {
  readonly encoder = new GibraltarAPIQuorumCertificateSignaturesEncoder();
  readonly decoder = new GibraltarAPIQuorumCertificateSignaturesDecoder();
}

export const gibraltarAPIQuorumCertificateSignaturesCodec =
  new GibraltarAPIQuorumCertificateSignaturesCodec();

export class GibraltarAPIQuorumCertificate {
  readonly data: GibraltarAPIBQuorumCertificateData;
  readonly vote_commitment: TaggedBase64;
  readonly view_number: number;
  readonly signatures: null | GibraltarAPIQuorumCertificateSignatures;
  readonly is_genesis: boolean;
  readonly _pd: null;

  constructor(
    data: GibraltarAPIBQuorumCertificateData,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | GibraltarAPIQuorumCertificateSignatures,
    is_genesis: boolean,
    _pd: null,
  ) {
    this.data = data;
    this.vote_commitment = vote_commitment;
    this.view_number = view_number;
    this.signatures = signatures;
    this.is_genesis = is_genesis;
    this._pd = _pd;
  }

  toJSON() {
    return gibraltarAPIQuorumCertificateCodec.encode(this);
  }
}

export class GibraltarAPIQuorumCertificateDecoder
  implements Converter<unknown, GibraltarAPIQuorumCertificate>
{
  convert(input: unknown): GibraltarAPIQuorumCertificate {
    if (
      !isRecord(input, 'data', isUnknown) ||
      !isRecord(input, 'vote_commitment', isUnknown) ||
      !isRecord(input, 'view_number', isNumber) ||
      !(
        isRecord(input, 'signatures', isUnknownArray) ||
        isRecord(input, 'signatures', isNull)
      ) ||
      !isRecord(input, 'is_genesis', isBoolean) ||
      !isRecord(input, '_pd', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIQuorumCertificate(
      gibraltarAPIBQuorumCertificateDataCodec.decode(input.data),
      taggedBase64Codec.decode(input.vote_commitment),
      input.view_number,
      input.signatures &&
        gibraltarAPIQuorumCertificateSignaturesCodec.decode(input.signatures),
      input.is_genesis,
      null,
    );
  }
}

export class GibraltarAPIQuorumCertificateEncoder
  implements Converter<GibraltarAPIQuorumCertificate, unknown>
{
  convert(input: GibraltarAPIQuorumCertificate): unknown {
    return {
      data: gibraltarAPIBQuorumCertificateDataCodec.encode(input.data),
      vote_commitment: taggedBase64Codec.encode(input.vote_commitment),
      view_number: input.view_number,
      signatures:
        input.signatures &&
        gibraltarAPIQuorumCertificateSignaturesCodec.encode(input.signatures),
      is_genesis: input.is_genesis,
      _pd: null,
    };
  }
}

export class GibraltarAPIQuorumCertificateCodec extends Codec<
  GibraltarAPIQuorumCertificate,
  unknown
> {
  readonly encoder = new GibraltarAPIQuorumCertificateEncoder();
  readonly decoder = new GibraltarAPIQuorumCertificateDecoder();
}

export const gibraltarAPIQuorumCertificateCodec =
  new GibraltarAPIQuorumCertificateCodec();

export class GibraltarAPILeaf {
  readonly view_number: number;
  readonly justify_qc: GibraltarAPIQuorumCertificate;
  readonly parent_commitment: TaggedBase64;
  readonly block_header: GibraltarAPIHeader;
  readonly block_payload: GibraltarAPIPayload;
  readonly rejected: unknown[];
  readonly timestamp: number;
  readonly proposer_id: TaggedBase64;

  constructor(
    view_number: number,
    justify_qc: GibraltarAPIQuorumCertificate,
    parent_commitment: TaggedBase64,
    block_header: GibraltarAPIHeader,
    block_payload: GibraltarAPIPayload,
    rejected: unknown[],
    timestamp: number,
    proposer_id: TaggedBase64,
  ) {
    this.view_number = view_number;
    this.justify_qc = justify_qc;
    this.parent_commitment = parent_commitment;
    this.block_header = block_header;
    this.block_payload = block_payload;
    this.rejected = rejected;
    this.timestamp = timestamp;
    this.proposer_id = proposer_id;
  }

  toJSON() {
    return gibraltarAPILeafCodec.encode(this);
  }
}

export class GibraltarAPILeafDecoder
  implements Converter<unknown, GibraltarAPILeaf>
{
  convert(input: unknown): GibraltarAPILeaf {
    if (
      !isRecord(input, 'view_number', isNumber) ||
      !isRecord(input, 'justify_qc', isUnknown) ||
      !isRecord(input, 'parent_commitment', isUnknown) ||
      !isRecord(input, 'block_header', isUnknown) ||
      !isRecord(input, 'block_payload', isUnknown) ||
      !isRecord(input, 'rejected', isUnknownArray) ||
      !isRecord(input, 'timestamp', isNumber) ||
      !isRecord(input, 'proposer_id', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPILeaf(
      input.view_number,
      gibraltarAPIQuorumCertificateCodec.decode(input.justify_qc),
      taggedBase64Codec.decode(input.parent_commitment),
      gibraltarAPIHeaderCodec.decode(input.block_header),
      gibraltarAPIPayloadCodec.decode(input.block_payload),
      input.rejected,
      input.timestamp,
      taggedBase64Codec.decode(input.proposer_id),
    );
  }
}

export class GibraltarAPILeafEncoder
  implements Converter<GibraltarAPILeaf, unknown>
{
  convert(input: GibraltarAPILeaf): unknown {
    return {
      view_number: input.view_number,
      justify_qc: gibraltarAPIQuorumCertificateCodec.encode(input.justify_qc),
      parent_commitment: taggedBase64Codec.encode(input.parent_commitment),
      block_header: gibraltarAPIHeaderCodec.encode(input.block_header),
      block_payload: gibraltarAPIPayloadCodec.encode(input.block_payload),
      rejected: input.rejected,
      timestamp: input.timestamp,
      proposer_id: taggedBase64Codec.encode(input.proposer_id),
    };
  }
}

export class GibraltarAPILeafCodec extends Codec<GibraltarAPILeaf, unknown> {
  readonly encoder = new GibraltarAPILeafEncoder();
  readonly decoder = new GibraltarAPILeafDecoder();
}

export const gibraltarAPILeafCodec = new GibraltarAPILeafCodec();

export class GibraltarAPILeafResponse {
  readonly leaf: GibraltarAPILeaf;
  readonly qc: GibraltarAPIQuorumCertificate;

  constructor(leaf: GibraltarAPILeaf, qc: GibraltarAPIQuorumCertificate) {
    this.leaf = leaf;
    this.qc = qc;
  }

  toJSON() {
    return gibraltarAPILeafResponseCodec.encode(this);
  }
}

export class GibraltarAPILeafResponseDecoder
  implements Converter<unknown, GibraltarAPILeafResponse>
{
  convert(input: unknown): GibraltarAPILeafResponse {
    if (
      !isRecord(input, 'leaf', isUnknown) ||
      !isRecord(input, 'qc', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPILeafResponse(
      gibraltarAPILeafCodec.decode(input.leaf),
      gibraltarAPIQuorumCertificateCodec.decode(input.qc),
    );
  }
}

export class GibraltarAPILeafResponseEncoder
  implements Converter<GibraltarAPILeafResponse, unknown>
{
  convert(input: GibraltarAPILeafResponse): unknown {
    return {
      leaf: gibraltarAPILeafCodec.encode(input.leaf),
      qc: gibraltarAPIQuorumCertificateCodec.encode(input.qc),
    };
  }
}

export class GibraltarAPILeafResponseCodec extends Codec<
  GibraltarAPILeafResponse,
  unknown
> {
  readonly encoder = new GibraltarAPILeafResponseEncoder();
  readonly decoder = new GibraltarAPILeafResponseDecoder();
}

export const gibraltarAPILeafResponseCodec =
  new GibraltarAPILeafResponseCodec();

export class GibraltarDerivedBlockSummary {
  readonly header: GibraltarAPIHeader;
  readonly hash: TaggedBase64;
  readonly size: number;
  readonly num_transactions: number;
  readonly proposer_id: TaggedBase64;

  constructor(
    header: GibraltarAPIHeader,
    hash: TaggedBase64,
    size: number,
    num_transactions: number,
    proposer_id: TaggedBase64,
  ) {
    this.header = header;
    this.hash = hash;
    this.size = size;
    this.num_transactions = num_transactions;
    this.proposer_id = proposer_id;
  }

  toJSON() {
    return gibraltarDerivedBlockSummaryCodec.encode(this);
  }
}

export class GibraltarDerivedBlockSummaryDecoder
  implements Converter<unknown, GibraltarDerivedBlockSummary>
{
  convert(input: unknown): GibraltarDerivedBlockSummary {
    if (
      !isRecord(input, 'header', isUnknown) ||
      !isRecord(input, 'hash', isUnknown) ||
      !isRecord(input, 'size', isNumber) ||
      !isRecord(input, 'num_transactions', isNumber) ||
      !isRecord(input, 'proposer_id', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarDerivedBlockSummary(
      gibraltarAPIHeaderCodec.decode(input.header),
      taggedBase64Codec.decode(input.hash),
      input.size,
      input.num_transactions,
      taggedBase64Codec.decode(input.proposer_id),
    );
  }
}

export class GibraltarDerivedBlockSummaryEncoder
  implements Converter<GibraltarDerivedBlockSummary, unknown>
{
  convert(input: GibraltarDerivedBlockSummary): unknown {
    return {
      header: gibraltarAPIHeaderCodec.encode(input.header),
      hash: taggedBase64Codec.encode(input.hash),
      size: input.size,
      num_transactions: input.num_transactions,
      proposer_id: taggedBase64Codec.encode(input.proposer_id),
    };
  }
}

export class GibraltarDerivedBlockSummaryCodec extends Codec<
  GibraltarDerivedBlockSummary,
  unknown
> {
  readonly encoder = new GibraltarDerivedBlockSummaryEncoder();
  readonly decoder = new GibraltarDerivedBlockSummaryDecoder();
}

export const gibraltarDerivedBlockSummaryCodec =
  new GibraltarDerivedBlockSummaryCodec();

export class GibraltarDerivedTransactionSummary {
  readonly hash: TaggedBase64;
  readonly header: GibraltarAPIHeader;
  readonly offset: number;
  readonly transaction: GibraltarAPITransactionNMTEntry;

  constructor(
    hash: TaggedBase64,
    header: GibraltarAPIHeader,
    offset: number,
    transaction: GibraltarAPITransactionNMTEntry,
  ) {
    this.hash = hash;
    this.header = header;
    this.offset = offset;
    this.transaction = transaction;
  }

  toJSON() {
    return gibraltarDerivedTransactionSummaryCodec.encode(this);
  }
}

export class GibraltarDerivedTransactionSummaryDecoder
  implements Converter<unknown, GibraltarDerivedTransactionSummary>
{
  convert(input: unknown): GibraltarDerivedTransactionSummary {
    if (
      !isRecord(input, 'hash', isUnknown) ||
      !isRecord(input, 'header', isUnknown) ||
      !isRecord(input, 'offset', isNumber) ||
      !isRecord(input, 'transaction', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarDerivedTransactionSummary(
      taggedBase64Codec.decode(input.hash),
      gibraltarAPIHeaderCodec.decode(input.header),
      input.offset,
      gibraltarAPITransactionNMTEntryCodec.decode(input.transaction),
    );
  }
}

export class GibraltarDerivedTransactionSummaryEncoder
  implements Converter<GibraltarDerivedTransactionSummary, unknown>
{
  convert(input: GibraltarDerivedTransactionSummary): unknown {
    return {
      hash: taggedBase64Codec.encode(input.hash),
      header: gibraltarAPIHeaderCodec.encode(input.header),
      transaction: gibraltarAPITransactionNMTEntryCodec.encode(
        input.transaction,
      ),
    };
  }
}

export class GibraltarDerivedTransactionSummaryCodec extends Codec<
  GibraltarDerivedTransactionSummary,
  unknown
> {
  readonly encoder = new GibraltarDerivedTransactionSummaryEncoder();
  readonly decoder = new GibraltarDerivedTransactionSummaryDecoder();
}

export abstract class GibraltarAPIMerkleTreeProof {}

export class GibraltarAPIMerkleTreeEmptyProof extends GibraltarAPIMerkleTreeProof {
  toJSON() {
    return gibraltarAPIMerkleTreeEmptyProofCodec.encode(this);
  }
}

export class GibraltarAPIMerkleTreeEmptyProofDecoder
  implements Converter<unknown, GibraltarAPIMerkleTreeEmptyProof>
{
  convert(input: unknown): GibraltarAPIMerkleTreeEmptyProof {
    if (!isString(input) || input !== 'Empty') {
      throw new InvalidInputError();
    }

    return new GibraltarAPIMerkleTreeEmptyProof();
  }
}

export class GibraltarAPIMerkleTreeEmptyProofEncoder
  implements Converter<GibraltarAPIMerkleTreeEmptyProof, unknown>
{
  convert(): unknown {
    return 'Empty';
  }
}

export class GibraltarAPIMerkleTreeEmptyProofCodec extends Codec<
  GibraltarAPIMerkleTreeEmptyProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkleTreeEmptyProofEncoder();
  readonly decoder = new GibraltarAPIMerkleTreeEmptyProofDecoder();
}

export const gibraltarAPIMerkleTreeEmptyProofCodec =
  new GibraltarAPIMerkleTreeEmptyProofCodec();

export class GibraltarAPIMerkleTreeLeafProof extends GibraltarAPIMerkleTreeProof {
  readonly value: TaggedBase64;
  readonly pos: TaggedBase64;
  readonly elem: TaggedBase64;

  constructor(value: TaggedBase64, pos: TaggedBase64, elem: TaggedBase64) {
    super();
    this.value = value;
    this.pos = pos;
    this.elem = elem;
  }

  toJSON() {
    return gibraltarAPIMerkleTreeLeafProofCodec.encode(this);
  }
}

export class GibraltarAPIMerkleTreeLeafProofDecoder
  implements Converter<unknown, GibraltarAPIMerkleTreeLeafProof>
{
  convert(input: unknown): GibraltarAPIMerkleTreeLeafProof {
    if (!isRecord(input, 'Leaf', isUnknown)) {
      throw new InvalidInputError();
    }

    const leaf = input.Leaf;

    if (
      !isRecord(leaf, 'value', isUnknown) ||
      !isRecord(leaf, 'pos', isUnknown) ||
      !isRecord(leaf, 'elem', isUnknown)
    ) {
      throw new InvalidInputError();
    }
    return new GibraltarAPIMerkleTreeLeafProof(
      taggedBase64Codec.decode(leaf.value),
      taggedBase64Codec.decode(leaf.pos),
      taggedBase64Codec.decode(leaf.elem),
    );
  }
}

export class GibraltarAPIMerkleTreeLeafProofEncoder
  implements Converter<GibraltarAPIMerkleTreeLeafProof, unknown>
{
  convert(input: GibraltarAPIMerkleTreeLeafProof): unknown {
    return {
      Leaf: {
        value: taggedBase64Codec.encode(input.value),
        pos: taggedBase64Codec.encode(input.pos),
        elem: taggedBase64Codec.encode(input.elem),
      },
    };
  }
}

export class GibraltarAPIMerkleTreeLeafProofCodec extends Codec<
  GibraltarAPIMerkleTreeLeafProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkleTreeLeafProofEncoder();
  readonly decoder = new GibraltarAPIMerkleTreeLeafProofDecoder();
}

export const gibraltarAPIMerkleTreeLeafProofCodec =
  new GibraltarAPIMerkleTreeLeafProofCodec();

export class GibraltarAPIMerkletTreeForgottenSubTreeProof extends GibraltarAPIMerkleTreeProof {
  readonly value: TaggedBase64;

  constructor(value: TaggedBase64) {
    super();
    this.value = value;
  }

  toJSON() {
    return gibraltarAPIMerkletTreeForgottenSubTreeProofCodec.encode(this);
  }
}

export class GibraltarAPIMerkletTreeForgottenSubTreeProofDecoder
  implements Converter<unknown, GibraltarAPIMerkletTreeForgottenSubTreeProof>
{
  convert(input: unknown): GibraltarAPIMerkletTreeForgottenSubTreeProof {
    if (!isRecord(input, 'ForgettenSubtree', isUnknown)) {
      throw new InvalidInputError();
    }

    const forgottenSubtree = input.ForgettenSubtree;
    if (!isRecord(forgottenSubtree, 'value', isUnknown)) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIMerkletTreeForgottenSubTreeProof(
      taggedBase64Codec.decode(forgottenSubtree.value),
    );
  }
}

export class GibraltarAPIMerkletTreeForgottenSubTreeProofEncoder
  implements Converter<GibraltarAPIMerkletTreeForgottenSubTreeProof, unknown>
{
  convert(input: GibraltarAPIMerkletTreeForgottenSubTreeProof): unknown {
    return {
      ForgettenSubtree: {
        value: taggedBase64Codec.encode(input.value),
      },
    };
  }
}

export class GibraltarAPIMerkletTreeForgottenSubTreeProofCodec extends Codec<
  GibraltarAPIMerkletTreeForgottenSubTreeProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkletTreeForgottenSubTreeProofEncoder();
  readonly decoder = new GibraltarAPIMerkletTreeForgottenSubTreeProofDecoder();
}

export const gibraltarAPIMerkletTreeForgottenSubTreeProofCodec =
  new GibraltarAPIMerkletTreeForgottenSubTreeProofCodec();

export class GibraltarAPIMerkleTreeBranchProof extends GibraltarAPIMerkleTreeProof {
  readonly value: TaggedBase64;
  readonly children: GibraltarAPIMerkleTreeProof[];

  constructor(value: TaggedBase64, children: GibraltarAPIMerkleTreeProof[]) {
    super();
    this.value = value;
    this.children = children;
  }

  toJSON() {
    return gibraltarAPIMerkleTreeBranchProofCodec.encode(this);
  }
}

export class GibraltarAPIMerkleTreeBranchProofDecoder
  implements Converter<unknown, GibraltarAPIMerkleTreeBranchProof>
{
  convert(input: unknown): GibraltarAPIMerkleTreeBranchProof {
    if (!isRecord(input, 'Branch', isUnknown)) {
      throw new InvalidInputError();
    }

    const branch = input.Branch;
    if (
      !isRecord(branch, 'value', isUnknown) ||
      !isRecord(branch, 'children', isUnknownArray)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIMerkleTreeBranchProof(
      taggedBase64Codec.decode(branch.value),
      branch.children.map((x: unknown) =>
        gibraltarAPIMerkleTreeProofCodec.decode(x),
      ),
    );
  }
}

export class GibraltarAPIMerkleTreeBranchProofEncoder
  implements Converter<GibraltarAPIMerkleTreeBranchProof, unknown>
{
  convert(input: GibraltarAPIMerkleTreeBranchProof): unknown {
    return {
      Branch: {
        value: taggedBase64Codec.encode(input.value),
        children: input.children.map((x) =>
          gibraltarAPIMerkleTreeProofCodec.encode(x),
        ),
      },
    };
  }
}

export class GibraltarAPIMerkleTreeBranchProofCodec extends Codec<
  GibraltarAPIMerkleTreeBranchProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkleTreeBranchProofEncoder();
  readonly decoder = new GibraltarAPIMerkleTreeBranchProofDecoder();
}

export const gibraltarAPIMerkleTreeBranchProofCodec =
  new GibraltarAPIMerkleTreeBranchProofCodec();

export class GibraltarAPIMerkleTreeProofDecoder
  implements Converter<unknown, GibraltarAPIMerkleTreeProof>
{
  convert(input: unknown): GibraltarAPIMerkleTreeProof {
    if (isRecord(input, 'Leaf', isUnknown)) {
      return gibraltarAPIMerkleTreeLeafProofCodec.decoder.convert(input);
    }

    if (isRecord(input, 'Branch', isUnknown)) {
      return gibraltarAPIMerkleTreeBranchProofCodec.decoder.convert(input);
    }

    if (isRecord(input, 'ForgettenSubtree', isUnknown)) {
      return gibraltarAPIMerkletTreeForgottenSubTreeProofCodec.decoder.convert(
        input,
      );
    }

    if (isString(input)) {
      return gibraltarAPIMerkleTreeEmptyProofCodec.decoder.convert(input);
    }

    throw new InvalidInputError();
  }
}

export class GibraltarAPIMerkleTreeProofEncoder
  implements Converter<GibraltarAPIMerkleTreeProof, unknown>
{
  convert(input: GibraltarAPIMerkleTreeProof): unknown {
    if (input instanceof GibraltarAPIMerkleTreeLeafProof) {
      return gibraltarAPIMerkleTreeLeafProofCodec.encode(input);
    }

    if (input instanceof GibraltarAPIMerkleTreeBranchProof) {
      return gibraltarAPIMerkleTreeBranchProofCodec.encode(input);
    }

    if (input instanceof GibraltarAPIMerkletTreeForgottenSubTreeProof) {
      return gibraltarAPIMerkletTreeForgottenSubTreeProofCodec.encode(input);
    }

    if (input instanceof GibraltarAPIMerkleTreeEmptyProof) {
      return gibraltarAPIMerkleTreeEmptyProofCodec.encode(input);
    }

    throw new InvalidInputError();
  }
}

export class GibraltarAPIMerkleTreeProofCodec extends Codec<
  GibraltarAPIMerkleTreeProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkleTreeProofEncoder();
  readonly decoder = new GibraltarAPIMerkleTreeProofDecoder();
}

export const gibraltarAPIMerkleTreeProofCodec =
  new GibraltarAPIMerkleTreeProofCodec();

export class GibraltarAPITransactionProof {
  readonly pos: TaggedBase64;
  readonly proof: GibraltarAPIMerkleTreeProof;

  constructor(pos: TaggedBase64, proof: GibraltarAPIMerkleTreeProof) {
    this.pos = pos;
    this.proof = proof;
  }

  toJSON() {
    return gibraltarAPITransactionProofCodec.encode(this);
  }
}

export class GibraltarAPITransactionProofDecoder
  implements Converter<unknown, GibraltarAPITransactionProof>
{
  convert(input: unknown): GibraltarAPITransactionProof {
    if (
      !isRecord(input, 'pos', isUnknown) ||
      !isRecord(input, 'proof', isUnknownArray)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPITransactionProof(
      taggedBase64Codec.decode(input.pos),
      input.proof.map(gibraltarAPIMerkleTreeProofCodec.decoder.convert),
    );
  }
}

export class GibraltarAPITransactionProofEncoder
  implements Converter<GibraltarAPITransactionProof, unknown>
{
  convert(input: GibraltarAPITransactionProof): unknown {
    return {
      pos: taggedBase64Codec.encode(input.pos),
      proof: gibraltarAPIMerkleTreeProofCodec.encode(input.proof),
    };
  }
}

export class GibraltarAPITransactionProofCodec extends Codec<
  GibraltarAPITransactionProof,
  unknown
> {
  readonly encoder = new GibraltarAPITransactionProofEncoder();
  readonly decoder = new GibraltarAPITransactionProofDecoder();
}

export const gibraltarAPITransactionProofCodec =
  new GibraltarAPITransactionProofCodec();

export class GibraltarAPITransactionResponse {
  readonly transaction: GibraltarAPITransactionNMTEntry;
  readonly block_hash: TaggedBase64;
  readonly proof: GibraltarAPITransactionProof;
  readonly height: number;
  readonly hash: TaggedBase64;

  constructor(
    transaction: GibraltarAPITransactionNMTEntry,
    block_hash: TaggedBase64,
    proof: GibraltarAPITransactionProof,
    height: number,
    hash: TaggedBase64,
  ) {
    this.transaction = transaction;
    this.block_hash = block_hash;
    this.proof = proof;
    this.height = height;
    this.hash = hash;
  }

  toJSON() {
    return gibraltarAPITransactionResponseCodec.encode(this);
  }
}

export class GibraltarAPITransactionResponseDecoder
  implements Converter<unknown, GibraltarAPITransactionResponse>
{
  convert(input: unknown): GibraltarAPITransactionResponse {
    if (
      !isRecord(input, 'transaction', isUnknown) ||
      !isRecord(input, 'block_hash', isUnknown) ||
      !isRecord(input, 'proof', isUnknown) ||
      !isRecord(input, 'height', isNumber) ||
      !isRecord(input, 'hash', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPITransactionResponse(
      gibraltarAPITransactionNMTEntryCodec.decoder.convert(input.transaction),
      taggedBase64Codec.decode(input.block_hash),
      gibraltarAPITransactionProofCodec.decoder.convert(input.proof),
      input.height,
      taggedBase64Codec.decode(input.hash),
    );
  }
}

export class GibraltarAPITransactionResponseEncoder
  implements Converter<GibraltarAPITransactionResponse, unknown>
{
  convert(input: GibraltarAPITransactionResponse): unknown {
    return {
      transaction: gibraltarAPITransactionNMTEntryCodec.encode(
        input.transaction,
      ),
      block_hash: taggedBase64Codec.encode(input.block_hash),
      proof: gibraltarAPITransactionProofCodec.encode(input.proof),
      height: input.height,
      hash: taggedBase64Codec.encode(input.hash),
    };
  }
}

export class GibraltarAPITransactionResponseCodec extends Codec<
  GibraltarAPITransactionResponse,
  unknown
> {
  readonly encoder = new GibraltarAPITransactionResponseEncoder();
  readonly decoder = new GibraltarAPITransactionResponseDecoder();
}

export const gibraltarAPITransactionResponseCodec =
  new GibraltarAPITransactionResponseCodec();

export const gibraltarDerivedTransactionSummaryCodec =
  new GibraltarDerivedTransactionSummaryCodec();

export async function convertBlockAndLeafToBlockSummary(
  block: GibraltarAPIBlock,
  leaf: GibraltarAPILeafResponse,
): Promise<GibraltarDerivedBlockSummary> {
  return new GibraltarDerivedBlockSummary(
    block.header,
    block.hash,
    block.size,
    block.payload.transaction_nmt.length,
    leaf.leaf.proposer_id,
  );
}

export async function convertBlockToBlockSummary(
  block: GibraltarAPIBlock,
): Promise<GibraltarDerivedBlockSummary> {
  return new GibraltarDerivedBlockSummary(
    block.header,
    block.hash,
    block.size,
    block.payload.transaction_nmt.length,
    new TaggedBase64('PROPOSER', new Uint8Array([0, 0, 0, 0]).buffer),
  );
}

// export async function convertLeafToBlockSummary(
//   leaf: GibraltarAPILeafResponse,
// ): Promise<GibraltarDerivedBlockSummary> {
//   return new GibraltarDerivedBlockSummary(
//     leaf.leaf.block_header,
//     new TaggedBase64('BLOCK', new Uint8Array([0, 0, 0, 0]).buffer),
//     leaf.leaf.block_payload.transaction_nmt
//       .map((x) => x.payload.length)
//       .reduce((acc, next) => acc + next, 0),
//     leaf.leaf.block_payload.transaction_nmt.length,
//     leaf.leaf.proposer_id,
//   );
// }

export async function* convertLeafAndTransactionsToTransactionSummaries(
  leaf: GibraltarAPILeafResponse,
  transactions: AsyncIterable<GibraltarAPITransactionResponse>,
): AsyncGenerator<GibraltarDerivedTransactionSummary> {
  const it = transactions[Symbol.asyncIterator]();
  yield* mapAsyncIterable(
    convertIterableToAsyncIterable(leaf.leaf.block_payload.transaction_nmt),
    async (transaction) => {
      const offset =
        leaf.leaf.block_payload.transaction_nmt.indexOf(transaction);
      const next = await it.next();
      if (next.done) {
        throw new Error('Not enough transactions');
      }

      return new GibraltarDerivedTransactionSummary(
        next.value.hash,
        leaf.leaf.block_header,
        offset,
        transaction,
      );
    },
  );
}

export type GibraltarHotShotQueryServiceAvailabilityAPI =
  HotShotQueryServiceAvailabilityAPI<
    GibraltarAPILeafResponse,
    GibraltarAPIBlock,
    GibraltarAPITransactionResponse
  >;
export type GibraltarHotShotQueryServiceStatusAPI =
  HotShotQueryServiceStatusAPI;
export type GibraltarHotShotQueryService = HotShotQueryService<
  GibraltarAPILeafResponse,
  GibraltarAPIBlock,
  GibraltarAPITransactionResponse
>;

export type GibraltarExtendedHotShotQueryServiceAvailabilityAPI =
  ExtendedHotShotQueryServiceAvailabilityAPI<
    GibraltarDerivedBlockSummary,
    GibraltarDerivedTransactionSummary
  >;

export type GibraltarExtendedHotShotQueryService = ExtendedHotShotQueryService<
  GibraltarDerivedBlockSummary,
  GibraltarDerivedTransactionSummary
>;
