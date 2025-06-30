import { createCompleter } from '@/data_structures/async/completer/Completer';
import { WebSocketCloseHandler } from './websocket_close_handler';
import { WebSocketErrorHandler } from './websocket_error_handler';
import { WebSocketInterface } from './websocket_interface';
import { WebSocketMessageHandler } from './websocket_message_handler';
import { WebSocketOpenHandler } from './websocket_open_handler';

/**
 * ProxyWebSocket is a wrapper around the WebSocket API that allows us to
 * handle the WebSocket lifecycle and message events in a more controlled
 * manner. It allows us to clean up event listeners and handle the WebSocket
 * lifecycle in a more predictable way.
 */
export type ProxyWebSocket = Pick<WebSocket, 'send' | 'close'>;

/**
 * ProxyWebSocketImpl is the implementation of the ProxyWebSocket interface.
 * It manages the WebSocket connection and provides methods to send messages
 * and close the connection. It also handles the WebSocket lifecycle events
 * and cleans up event listeners when the connection is closed.
 */
class ProxyWebSocketImpl {
  private webSocket: null | WebSocketInterface = null;
  constructor(
    url: URL,
    messageHandler: WebSocketMessageHandler,
    openHandler: WebSocketOpenHandler,
    closeHandler: WebSocketCloseHandler,
    errorHandler: WebSocketErrorHandler,
    createWebSocketFunc: (url: URL) => WebSocketInterface = (url: URL) =>
      new WebSocket(url),
  ) {
    const webSocket = createWebSocketFunc(url);

    webSocket.addEventListener('open', openHandler);
    webSocket.addEventListener('message', messageHandler);
    webSocket.addEventListener('close', closeHandler);
    webSocket.addEventListener('error', errorHandler);

    webSocket.addEventListener('close', () => {
      // Let's clean up our handlers.

      webSocket.removeEventListener('open', openHandler);
      webSocket.removeEventListener('message', messageHandler);
      webSocket.removeEventListener('close', closeHandler);
      webSocket.removeEventListener('error', errorHandler);
      // Explicit reference drop
      this.webSocket = null;
    });
    this.webSocket = webSocket;
  }

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
    if (this.webSocket === null) {
      throw new Error('WebSocket is not connected');
    }

    this.webSocket.send(data);
  }

  async close(code: number = 1000, reason: string = 'done') {
    if (this.webSocket === null) {
      // We're not connected, so we're already closed.
      return;
    }

    // We want to disconnect from the webSocket
    const completer = createCompleter<void>();
    this.webSocket.addEventListener('close', () => {
      completer.complete();
    });

    this.webSocket.close(code, reason);

    return completer.promise;
  }
}

/**
 * createProxyWebSocket creates a new instance of ProxyWebSocket.
 */
export function createProxyWebSocket(
  url: URL,
  messageHandler: WebSocketMessageHandler,
  openHandler: WebSocketOpenHandler,
  closeHandler: WebSocketCloseHandler,
  errorHandler: WebSocketErrorHandler,
  createWebSocketFunc: (url: URL) => WebSocketInterface = (url: URL) =>
    new WebSocket(url),
): ProxyWebSocket {
  return new ProxyWebSocketImpl(
    url,
    messageHandler,
    openHandler,
    closeHandler,
    errorHandler,
    createWebSocketFunc,
  );
}
