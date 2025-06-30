import { createBufferedChannel, createChannelToSink } from '@/async/channel';
import { createCompleter } from '@/data_structures/async';
import WebSocketError from '@/errors/WebSocketError';
import { WebSocketStatusConnectionClosed } from '@/models/web_worker/web_socket/status/closed';
import WebSocketStatus from '@/models/web_worker/web_socket/status/web_socket_status';
import { describe, it } from 'vitest';
import { WebSocketCloseHandler } from '../websocket_close_handler';
import { MockWebSocket } from './mock_web_socket.test';

describe('WebSocketCloseHandler', () => {
  it('Basic behavior', async () => {
    const ws = new MockWebSocket();
    const completer = createCompleter<MockWebSocket>();
    const completer2 = createCompleter<void>();
    const channel = createBufferedChannel<WebSocketStatus>(16);
    const sink = createChannelToSink(channel);
    const handler = new WebSocketCloseHandler(completer, sink, () =>
      completer2.complete(),
    );

    // Add the event listener to the mock WebSocket
    ws.addEventListener('close', handler);

    // Create the event
    const event = new CloseEvent('close', {
      wasClean: true,
      code: 1000,
      reason: 'Normal closure',
    });

    // Dispatch the event to the mock WebSocket
    ws.dispatchEvent(event);

    await expect(completer.promise).rejects.toBeInstanceOf(WebSocketError);
    expect(completer.isCompleted).toBe(true);

    await expect(channel.poll()).resolves.toBeInstanceOf(
      WebSocketStatusConnectionClosed,
    );

    await expect(completer2.promise).resolves.toBeUndefined();
    expect(completer2.isCompleted).toBe(true);
  });
});
