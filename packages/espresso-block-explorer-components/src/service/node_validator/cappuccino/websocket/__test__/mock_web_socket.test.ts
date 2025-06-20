import { WebSocketInterface } from '../websocket_interface';
import { ProxyWebSocket } from '../websocket_proxy';

/**
 * MockWebSocket is a mock implementation of the WebSocket interface
 * used for testing purposes. It extends EventTarget to allow
 * simulating WebSocket events like 'message', 'open', 'close', and 'error'.
 * It provides methods to send messages and close the connection,
 * along with callbacks for these actions.
 */
export class MockWebSocket
  extends EventTarget
  implements WebSocketInterface, ProxyWebSocket
{
  public closeCallback: () => void;
  public sendCallback: (data: string) => void;

  constructor(
    sendCallback: (data: string) => void = () => {},
    closeCallback: () => void = () => {},
  ) {
    super();
    this.sendCallback = sendCallback;
    this.closeCallback = closeCallback;
  }

  close(): void {
    this.closeCallback();
  }

  send(data: string): void {
    this.sendCallback(data);
  }
}

// Add a test, just to appease the testing framework.
describe('MockWebSocket', () => {
  it('should pass without error', () => {
    expect(new MockWebSocket()).toBeInstanceOf(MockWebSocket);
  });
});
