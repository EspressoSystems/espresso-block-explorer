import { Sink } from '@/async/sink/sink';
import { Completer } from '@/data_structures/async/completer/completer';
import { WebSocketStatusConnectionOpened } from '@/models/web_worker/web_socket/status/opened';
import WebSocketStatus from '@/models/web_worker/web_socket/status/web_socket_status';
import { WebSocketInterface } from './websocket_interface';

export class WebSocketOpenHandler implements EventListenerObject {
  private readonly completer: Completer<WebSocketInterface>;
  private readonly lifecycleResponseSink: Sink<WebSocketStatus>;
  constructor(
    completer: Completer<WebSocketInterface>,
    lifecycleResponseSink: Sink<WebSocketStatus>,
  ) {
    this.completer = completer;
    this.lifecycleResponseSink = lifecycleResponseSink;
  }

  handleEvent(event: Event) {
    this.completer.complete(event.target as unknown as WebSocketInterface);
    this.lifecycleResponseSink.send(new WebSocketStatusConnectionOpened());
  }
}
