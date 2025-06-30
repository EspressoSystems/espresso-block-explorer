/**
 * WebSocketInterface defines the minimal interface for a WebSocket that we
 * need to interact with in our application.
 *
 * This interface is used to abstract away the WebSocket implementation
 * details, allowing us to mock or replace it easily in tests or different
 * environments.
 */
export type WebSocketInterface = Pick<
  WebSocket,
  'close' | 'send' | 'addEventListener' | 'removeEventListener'
>;
