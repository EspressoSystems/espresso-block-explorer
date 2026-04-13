import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { ExplorerSummary, explorerSummaryCodec } from './explorer_summary';

/**
 * ExplorerGetExplorerSummaryResponse is a class that represents the
 * response of the Explorer API for getting the explorer summary.
 */
export class ExplorerGetExplorerSummaryResponse {
  constructor(public readonly explorerSummary: ExplorerSummary) {}

  toJSON() {
    return explorerGetExplorerSummaryResponseCodec.encode(this);
  }
}

class ExplorerGetExplorerSummaryResponseDecoder implements Converter<
  unknown,
  ExplorerGetExplorerSummaryResponse
> {
  convert(input: unknown): ExplorerGetExplorerSummaryResponse {
    assertRecordWithKeys(input, 'explorer_summary');

    return new ExplorerGetExplorerSummaryResponse(
      explorerSummaryCodec.decode(input.explorer_summary),
    );
  }
}

class ExplorerGetExplorerSummaryResponseEncoder implements Converter<
  ExplorerGetExplorerSummaryResponse,
  unknown
> {
  convert(input: ExplorerGetExplorerSummaryResponse): unknown {
    assertInstanceOf(input, ExplorerGetExplorerSummaryResponse);

    return {
      explorer_summary: explorerSummaryCodec.encode(input.explorerSummary),
    };
  }
}

class ExplorerGetExplorerSummaryResponseCodec extends TypeCheckingCodec<
  ExplorerGetExplorerSummaryResponse,
  ReturnType<
    InstanceType<new () => ExplorerGetExplorerSummaryResponseEncoder>['convert']
  >
> {
  readonly encoder = new ExplorerGetExplorerSummaryResponseEncoder();
  readonly decoder = new ExplorerGetExplorerSummaryResponseDecoder();
}

export const explorerGetExplorerSummaryResponseCodec =
  new ExplorerGetExplorerSummaryResponseCodec();
