import { Sink } from '../../../../../../../../../../../src/async/sink';
import { default as NodeValidatorResponse } from '../responses/node_validator_response';
export declare class WebSocketMessageHandler implements EventListenerObject {
    private readonly nodeValidatorResponseSink;
    constructor(nodeValidatorResponseSink: Sink<NodeValidatorResponse>);
    private decodeMessage;
    private relayMessage;
    handleEvent(event: MessageEvent): Promise<void>;
}
