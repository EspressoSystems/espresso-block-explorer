export default class InvalidTypeError extends Error {
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
      name: InvalidTypeError.name,
      have: this.have,
      want: this.want,
      message: this.message,
    };
  }
}
