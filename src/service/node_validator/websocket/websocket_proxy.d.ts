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
 * createProxyWebSocket creates a new instance of ProxyWebSocket.
 */
export declare function createProxyWebSocket(url: URL, messageHandler: WebSocketMessageHandler, openHandler: WebSocketOpenHandler, closeHandler: WebSocketCloseHandler, errorHandler: WebSocketErrorHandler, createWebSocketFunc?: (url: URL) => WebSocketInterface): ProxyWebSocket;
