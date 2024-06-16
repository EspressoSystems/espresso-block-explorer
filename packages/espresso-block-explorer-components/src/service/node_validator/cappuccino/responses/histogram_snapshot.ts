import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec/convert';
import {
  CappuccinoSummaryHistograms,
  cappuccinoSummaryHistogramsCodec,
} from '@/service/hotshot_query_service/cappuccino/explorer/summary_histograms';
import CappuccinoNodeValidatorResponse from './node_validator_response';

export const kCappuccinoHistogramSnapshotType = 'HistogramSnapshot' as const;

export class CappuccinoHistogramSnapshot extends CappuccinoNodeValidatorResponse {
  readonly histograms: CappuccinoSummaryHistograms;
  get type() {
    return kCappuccinoHistogramSnapshotType;
  }

  constructor(histograms: CappuccinoSummaryHistograms) {
    super();
    this.histograms = histograms;
  }

  toJSON() {
    return cappuccinoHistogramSnapshotCodec.encode(this);
  }
}

class CappuccinoHistogramSnapshotDecoder
  implements Converter<unknown, CappuccinoHistogramSnapshot>
{
  convert(input: unknown): CappuccinoHistogramSnapshot {
    assertRecordWithKeys(input, 'histograms', 'type');
    assertTypeCode(input, kCappuccinoHistogramSnapshotType);

    return new CappuccinoHistogramSnapshot(
      cappuccinoSummaryHistogramsCodec.decode(input.histograms),
    );
  }
}

class CappuccinoHistogramSnapshotEncoder
  implements Converter<CappuccinoHistogramSnapshot>
{
  convert(input: CappuccinoHistogramSnapshot) {
    return {
      histograms: cappuccinoSummaryHistogramsCodec.encode(input.histograms),
      type: kCappuccinoHistogramSnapshotType,
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
