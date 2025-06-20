import { Sink } from '@/async/sink/sink';
import { Completer } from '@/data_structures/async/completer/Completer';
import WebSocketError from '@/errors/WebSocketError';
import { WebSocketStatusConnectionClosed } from '@/models/web_worker/web_socket/status/closed';
import WebSocketStatus from '@/models/web_worker/web_socket/status/web_socket_status';
import { WebSocketInterface } from './websocket_interface';

export class WebSocketCloseHandler implements EventListenerObject {
  private readonly completer: Completer<WebSocketInterface>;
  private readonly lifecycleResponseSink: Sink<WebSocketStatus>;
  private readonly onClose: () => void;

  constructor(
    completer: Completer<WebSocketInterface>,
    lifecycleResponseSink: Sink<WebSocketStatus>,
    onClose: () => void,
  ) {
    this.completer = completer;
    this.lifecycleResponseSink = lifecycleResponseSink;
    this.onClose = onClose;
  }

  async handleEvent() {
    await this.lifecycleResponseSink.send(
      new WebSocketStatusConnectionClosed(),
    );

    if (!this.completer.isCompleted) {
      this.completer.completeError(
        new WebSocketError(null, 'web socket error: unknown error'),
      );
    }

    this.onClose();
  }
}
