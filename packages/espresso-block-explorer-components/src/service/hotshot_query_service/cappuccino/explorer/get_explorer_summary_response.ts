import {
  Converter,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import InvalidInputError from '../../../../errors/InvalidInputError';
import {
  CappuccinoExplorerSummary,
  cappuccinoExplorerSummaryCodec,
} from './explorer_summary';

export class CappuccinoExplorerGetExplorerSummaryResponse {
  readonly explorerSummary: CappuccinoExplorerSummary;

  constructor(explorerSummary: CappuccinoExplorerSummary) {
    this.explorerSummary = explorerSummary;
  }

  toJSON() {
    return cappuccinoExplorerGetExplorerSummaryResponseCodec.encode(this);
  }
}

class CappuccinoExplorerGetExplorerSummaryResponseDecoder
  implements Converter<unknown, CappuccinoExplorerGetExplorerSummaryResponse>
{
  convert(input: unknown): CappuccinoExplorerGetExplorerSummaryResponse {
    if (!isRecord(input, 'explorer_summary', isUnknown)) {
      throw new InvalidInputError();
    }

    return new CappuccinoExplorerGetExplorerSummaryResponse(
      cappuccinoExplorerSummaryCodec.decode(input.explorer_summary),
    );
  }
}

class CappuccinoExplorerGetExplorerSummaryResponseEncoder
  implements Converter<CappuccinoExplorerGetExplorerSummaryResponse, unknown>
{
  convert(input: CappuccinoExplorerGetExplorerSummaryResponse): unknown {
    return {
      explorer_summary: cappuccinoExplorerSummaryCodec.encode(
        input.explorerSummary,
      ),
    };
  }
}

class CappuccinoExplorerGetExplorerSummaryResponseCodec extends TypeCheckingCodec<
  CappuccinoExplorerGetExplorerSummaryResponse,
  ReturnType<
    InstanceType<
      new () => CappuccinoExplorerGetExplorerSummaryResponseEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoExplorerGetExplorerSummaryResponseEncoder();
  readonly decoder = new CappuccinoExplorerGetExplorerSummaryResponseDecoder();
}

export const cappuccinoExplorerGetExplorerSummaryResponseCodec =
  new CappuccinoExplorerGetExplorerSummaryResponseCodec();
