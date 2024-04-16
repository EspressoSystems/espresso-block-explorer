import BaseError from './BaseError';

export default class NoCompleterFoundForRequestID<
  RequestID = unknown,
> extends BaseError {
  readonly requestID: RequestID;
  constructor(
    requestID: RequestID,
    message: string = `no completer found for request id "${requestID}"`,
  ) {
    super(message);
    this.requestID = requestID;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      requestID: this.requestID,
    };
  }
}
