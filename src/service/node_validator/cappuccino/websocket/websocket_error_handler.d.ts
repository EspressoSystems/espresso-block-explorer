import { Sink } from '../../../../../../../../../../../../src/async/sink/sink';
import { Completer } from '../../../../../../../../../../../../src/data_structures/async/completer/completer';
import { WebSocketInterface } from './websocket_interface';
export declare class WebSocketErrorHandler implements EventListenerObject {
    private readonly completer;
    private readonly errorResponseSink;
    constructor(completer: Completer<WebSocketInterface>, errorResponseSink: Sink<unknown>);
    private errorFromEvent;
    handleEvent(event: Event): void;
}
