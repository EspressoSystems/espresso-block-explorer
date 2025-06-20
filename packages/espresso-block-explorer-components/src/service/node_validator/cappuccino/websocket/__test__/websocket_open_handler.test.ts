import { createBufferedChannel, createChannelToSink } from '@/async/channel';
import { createCompleter } from '@/data_structures/async';
import { WebSocketStatusConnectionOpened } from '@/models/web_worker/web_socket/status/opened';
import WebSocketStatus from '@/models/web_worker/web_socket/status/web_socket_status';
import { describe, it } from 'vitest';
import { WebSocketOpenHandler } from '../websocket_open_handler';
import { MockWebSocket } from './mock_web_socket.test';

describe('WebSocketOpenHandler', () => {
  it('Basic behavior', async () => {
    const ws = new MockWebSocket();
    const completer = createCompleter<MockWebSocket>();
    const channel = createBufferedChannel<WebSocketStatus>(16);
    const sink = createChannelToSink(channel);
    const handler = new WebSocketOpenHandler(completer, sink);

    // Add the event listener to the mock WebSocket
    ws.addEventListener('open', handler);

    // Create the event
    const event = new Event('open');

    // Dispatch the event to the mock WebSocket
    ws.dispatchEvent(event);

    await expect(completer.promise).resolves.toBeInstanceOf(MockWebSocket);
    expect(completer.isCompleted).toBe(true);

    await expect(channel.poll()).resolves.toBeInstanceOf(
      WebSocketStatusConnectionOpened,
    );
  });
});
