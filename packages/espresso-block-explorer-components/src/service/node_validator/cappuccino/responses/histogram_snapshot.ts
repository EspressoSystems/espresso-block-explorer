import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoSummaryHistograms,
  cappuccinoSummaryHistogramsCodec,
} from '@/service/hotshot_query_service/cappuccino/explorer/summary_histograms';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kCappuccinoHistogramSnapshotType is the type string for the
 * CappuccinoHistogramSnapshot class.
 */
export const kCappuccinoHistogramSnapshotType = 'HistogramSnapshot' as const;

/**
 * CappuccinoHistogramSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export class CappuccinoHistogramSnapshot extends CappuccinoNodeValidatorResponse {
  readonly histograms: CappuccinoSummaryHistograms;

  constructor(histograms: CappuccinoSummaryHistograms) {
    super();
    this.histograms = histograms;
  }

  toJSON() {
    return cappuccinoHistogramSnapshotCodec.encode(this);
  }
}

class CappuccinoHistogramSnapshotDecoder implements Converter<
  unknown,
  CappuccinoHistogramSnapshot
> {
  convert(input: unknown): CappuccinoHistogramSnapshot {
    assertRecordWithKeys(input, kCappuccinoHistogramSnapshotType);

    return new CappuccinoHistogramSnapshot(
      cappuccinoSummaryHistogramsCodec.decode(
        input[kCappuccinoHistogramSnapshotType],
      ),
    );
  }
}

class CappuccinoHistogramSnapshotEncoder implements Converter<CappuccinoHistogramSnapshot> {
  convert(input: CappuccinoHistogramSnapshot) {
    return {
      [kCappuccinoHistogramSnapshotType]:
        cappuccinoSummaryHistogramsCodec.encode(input.histograms),
    };
  }
}

class CappuccinoHistogramSnapshotCodec extends TypeCheckingCodec<
  CappuccinoHistogramSnapshot,
  ReturnType<
    InstanceType<new () => CappuccinoHistogramSnapshotEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoHistogramSnapshotEncoder();
  readonly decoder = new CappuccinoHistogramSnapshotDecoder();
}

export const cappuccinoHistogramSnapshotCodec =
  new CappuccinoHistogramSnapshotCodec();
