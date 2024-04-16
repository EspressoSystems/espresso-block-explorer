export default class WebWorkerErrorResponse extends Error {
  readonly error: unknown;
  constructor(error: unknown, message: string = 'error in web worker') {
    super(message);
    this.error = error;
  }

  toJSON() {
    return {
      name: WebWorkerErrorResponse.name,
      message: this.message,
      error: this.error,
    };
  }
}
