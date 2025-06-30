import { Sink } from '../../../../../../../../../../../../src/async/sink/sink';
import { Completer } from '../../../../../../../../../../../../src/data_structures/async/completer/Completer';
import { default as WebSocketStatus } from '../../../../../../../../../../../../src/models/web_worker/web_socket/status/web_socket_status';
import { WebSocketInterface } from './websocket_interface';
export declare class WebSocketCloseHandler implements EventListenerObject {
    private readonly completer;
    private readonly lifecycleResponseSink;
    private readonly onClose;
    constructor(completer: Completer<WebSocketInterface>, lifecycleResponseSink: Sink<WebSocketStatus>, onClose: () => void);
    handleEvent(): Promise<void>;
}
