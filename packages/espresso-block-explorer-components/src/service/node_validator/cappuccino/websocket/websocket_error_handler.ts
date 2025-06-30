import { Sink } from '@/async/sink/sink';
import { Completer } from '@/data_structures/async/completer/Completer';
import WebSocketError from '@/errors/WebSocketError';
import { WebSocketInterface } from './websocket_interface';

export class WebSocketErrorHandler implements EventListenerObject {
  private readonly completer: Completer<WebSocketInterface>;
  private readonly errorResponseSink: Sink<unknown>;

  constructor(
    completer: Completer<WebSocketInterface>,
    errorResponseSink: Sink<unknown>,
  ) {
    this.completer = completer;
    this.errorResponseSink = errorResponseSink;
  }

  private errorFromEvent(event: Event) {
    if ('error' in event) {
      return new WebSocketError(event.error);
    }

    return new WebSocketError(null, 'web socket error: unknown error');
  }

  handleEvent(event: Event) {
    const err = this.errorFromEvent(event);
    this.errorResponseSink.send(err);

    if (!this.completer.isCompleted) {
      this.completer.completeError(err);
    }
  }
}
