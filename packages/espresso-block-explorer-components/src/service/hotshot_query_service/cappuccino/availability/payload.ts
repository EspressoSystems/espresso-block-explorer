import {
  Converter,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import InvalidInputError from '../../../../errors/InvalidInputError';
import {
  CappuccinoAPITransactionNMTEntry,
  arrayCappuccinoAPITransactionNMTEntryCodec,
} from './transaction_nmt_entry';

/**
 * CappuccinoAPIPayload represents the payload in the Cappuccino API.
 */
export class CappuccinoAPIPayload {
  readonly transaction_nmt: CappuccinoAPITransactionNMTEntry[];

  constructor(transaction_nmt: CappuccinoAPITransactionNMTEntry[]) {
    this.transaction_nmt = transaction_nmt;
  }

  toJSON() {
    return cappuccinoAPIPayloadCodec.encode(this);
  }
}

export class CappuccinoAPIPayloadDecoder
  implements Converter<unknown, CappuccinoAPIPayload>
{
  convert(input: unknown): CappuccinoAPIPayload {
    if (!isRecord(input, 'transaction_nmt', isUnknown)) {
      throw new InvalidInputError();
    }

    return new CappuccinoAPIPayload(
      arrayCappuccinoAPITransactionNMTEntryCodec.decode(input.transaction_nmt),
    );
  }
}

export class CappuccinoAPIPayloadEncoder
  implements Converter<CappuccinoAPIPayload>
{
  convert(input: CappuccinoAPIPayload) {
    return {
      transaction_nmt: arrayCappuccinoAPITransactionNMTEntryCodec.encode(
        input.transaction_nmt,
      ),
    };
  }
}

export class CappuccinoAPIPayloadCodec extends TypeCheckingCodec<
  CappuccinoAPIPayload,
  ReturnType<InstanceType<new () => CappuccinoAPIPayloadEncoder>['convert']>
> {
  readonly encoder = new CappuccinoAPIPayloadEncoder();
  readonly decoder = new CappuccinoAPIPayloadDecoder();
}

export const cappuccinoAPIPayloadCodec = new CappuccinoAPIPayloadCodec();
