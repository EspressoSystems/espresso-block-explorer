import { createBufferedChannel, createChannelToSink } from '@/async/channel';
import { describe, it } from 'vitest';
import { CappuccinoNodeIdentitySnapshot } from '../../responses';
import { cappuccinoNodeValidatorResponseCodec } from '../../responses/node_validator_response_codec';
import { WebSocketMessageHandler } from '../websocket_message_handler';
import { MockWebSocket } from './mock_web_socket.test';

describe('WebSocketMessageHandler', () => {
  it('Basic behavior', async () => {
    const ws = new MockWebSocket();
    const channel = createBufferedChannel<unknown>(16);
    const sink = createChannelToSink(channel);
    const handler = new WebSocketMessageHandler(sink);

    // Add the event listener to the mock WebSocket
    ws.addEventListener('message', handler);

    const nodeIdentities = new CappuccinoNodeIdentitySnapshot([]);

    const data = JSON.stringify(
      cappuccinoNodeValidatorResponseCodec.encode(nodeIdentities),
    );

    // Create the event
    const event = new MessageEvent('message', { data });

    // Dispatch the event to the mock WebSocket
    ws.dispatchEvent(event);

    const message = channel.poll();

    await expect(message).resolves.toBeInstanceOf(
      CappuccinoNodeIdentitySnapshot,
    );
  });
});
