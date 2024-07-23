export default abstract class WebWorkerLifeCycleRequest {
  abstract valueOf(): string;
}

export const kConnectValue = 'Connect' as const;

export class Connect extends WebWorkerLifeCycleRequest {
  valueOf(): string {
    return kConnectValue;
  }
}

export const kCloseValue = 'Close' as const;

export class Close extends WebWorkerLifeCycleRequest {
  valueOf(): string {
    return kCloseValue;
  }
}
