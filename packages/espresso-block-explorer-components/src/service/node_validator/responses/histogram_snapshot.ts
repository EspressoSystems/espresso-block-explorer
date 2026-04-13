import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  SummaryHistograms,
  summaryHistogramsCodec,
} from '@/service/hotshot_query_service/explorer/summary_histograms';
import { default as NodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kHistogramSnapshotType is the type string for the HistogramSnapshot class.
 */
export const kHistogramSnapshotType = 'HistogramSnapshot' as const;

/**
 * HistogramSnapshot is a response from the node validator that contains a
 * snapshot of the histograms in the network.
 */
export class HistogramSnapshot extends NodeValidatorResponse {
  constructor(public readonly histograms: SummaryHistograms) {
    super();
  }

  toJSON() {
    return histogramSnapshotCodec.encode(this);
  }
}

class HistogramSnapshotDecoder implements Converter<
  unknown,
  HistogramSnapshot
> {
  convert(input: unknown): HistogramSnapshot {
    assertRecordWithKeys(input, kHistogramSnapshotType);

    return new HistogramSnapshot(
      summaryHistogramsCodec.decode(input[kHistogramSnapshotType]),
    );
  }
}

class HistogramSnapshotEncoder implements Converter<HistogramSnapshot> {
  convert(input: HistogramSnapshot) {
    return {
      [kHistogramSnapshotType]: summaryHistogramsCodec.encode(input.histograms),
    };
  }
}

class HistogramSnapshotCodec extends TypeCheckingCodec<
  HistogramSnapshot,
  ReturnType<InstanceType<new () => HistogramSnapshotEncoder>['convert']>
> {
  readonly encoder = new HistogramSnapshotEncoder();
  readonly decoder = new HistogramSnapshotDecoder();
}

export const histogramSnapshotCodec = new HistogramSnapshotCodec();
