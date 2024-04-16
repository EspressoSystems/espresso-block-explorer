import BaseError from './BaseError';

export default class InvalidTypeError extends BaseError {
  readonly have: string;
  readonly want: string;
  constructor(
    haveType: string,
    wantType: string,
    message: string = `invalid type: have "${haveType}", want "${wantType}"`,
  ) {
    super(message);
    this.have = haveType;
    this.want = wantType;
    Object.freeze(this);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      have: this.have,
      want: this.want,
    };
  }
}
