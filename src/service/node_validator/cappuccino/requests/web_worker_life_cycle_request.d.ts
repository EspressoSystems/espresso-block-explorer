export default abstract class WebWorkerLifeCycleRequest {
    abstract valueOf(): string;
}
export declare const kConnectValue: "Connect";
export declare class Connect extends WebWorkerLifeCycleRequest {
    valueOf(): string;
}
export declare const kCloseValue: "Close";
export declare class Close extends WebWorkerLifeCycleRequest {
    valueOf(): string;
}
