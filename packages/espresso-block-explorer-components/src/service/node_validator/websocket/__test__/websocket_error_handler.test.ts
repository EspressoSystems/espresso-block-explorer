import { createBufferedChannel, createChannelToSink } from '@/async/channel';
import { createCompleter } from '@/data_structures/async';
import WebSocketError from '@/errors/web_socket_error';
import { describe, it } from 'vitest';
import { WebSocketErrorHandler } from '../websocket_error_handler';
import { MockWebSocket } from './mock_web_socket.test';

describe('WebSocketErrorHandler', () => {
  it('Basic behavior', async () => {
    const ws = new MockWebSocket();
    const completer = createCompleter<MockWebSocket>();
    const channel = createBufferedChannel<unknown>(16);
    const sink = createChannelToSink(channel);
    const handler = new WebSocketErrorHandler(completer, sink);

    // Add the event listener to the mock WebSocket
    ws.addEventListener('error', handler);

    // Create the event
    const event = new ErrorEvent('error', { error: new Error('Test error') });

    // Dispatch the event to the mock WebSocket
    ws.dispatchEvent(event);

    await expect(completer.promise).rejects.toBeInstanceOf(WebSocketError);
    expect(completer.isCompleted).toBe(true);

    await expect(channel.poll()).resolves.toBeInstanceOf(WebSocketError);
  });
});
