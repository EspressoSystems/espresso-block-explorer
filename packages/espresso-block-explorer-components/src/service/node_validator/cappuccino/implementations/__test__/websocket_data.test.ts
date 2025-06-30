import { createBufferedChannel } from '@/async/channel';
import { sleep } from '@/async/sleep';
import { createCompleter } from '@/data_structures/async/completer/Completer';
import { WebSocketCommandClose } from '@/models/web_worker/web_socket/request/close';
import { WebSocketCommandConnect } from '@/models/web_worker/web_socket/request/connect';
import { WebSocketStatusConnectionClosed } from '@/models/web_worker/web_socket/status/closed';
import { WebSocketStatusConnectionConnecting } from '@/models/web_worker/web_socket/status/connecting';
import { WebSocketStatusConnectionOpened } from '@/models/web_worker/web_socket/status/opened';
import { WebSocketRequest } from '@/models/web_worker/web_socket/web_socket_request';
import { WebSocketResponse } from '@/models/web_worker/web_socket/web_socket_response';
import { describe, it } from 'vitest';
import { RequestNodeIdentitySnapshot } from '../../requests/node_validator_request';
import { NodeValidatorServiceRequest } from '../../requests/node_validator_service_request';
import {
  CappuccinoNodeIdentitySnapshot,
  cappuccinoNodeValidatorResponseCodec,
  NodeValidatorServiceResponse,
} from '../../responses';
import { MockWebSocket } from '../../websocket/__test__/mock_web_socket.test';
import { WebSocketInterface } from '../../websocket/websocket_interface';
import WebSocketDataCappuccinoNodeValidatorAPI from '../websocket_data';

describe('WebSocketDataCappuccinoNodeValidatorAPI', () => {
  it('expected work flow', async () => {
    const wsCompleter = createCompleter<MockWebSocket>();
    const sendChannel = createBufferedChannel<string>(10);
    const closeChannel = createBufferedChannel<{}>(10);

    const api = new WebSocketDataCappuccinoNodeValidatorAPI(
      createBufferedChannel(10),
      createBufferedChannel(10),
      new URL('wss://example.com'),
      (): WebSocketInterface => {
        const ws = new MockWebSocket(
          (data: string) => sendChannel.publish(data),
          () => closeChannel.publish({}),
        );

        // Store a reference to the mock Websocket, so we can
        // use it to fake messages.
        wsCompleter.complete(ws);
        return ws;
      },
    );

    const responseStream = api.stream;
    const responseIterator = responseStream[Symbol.asyncIterator]();

    const pollNextResponse = async () => {
      const next = await responseIterator.next();
      if (next.done) {
        throw new Error('No more responses available');
      }

      return next.value;
    };

    // We need to start processing requests.
    api.startProcessing();

    // Initialization and Lifecycle methods of the WebSocket
    {
      // Send a command to connect the WebSocket
      await expect(
        api.send(new WebSocketRequest(new WebSocketCommandConnect())),
      ).resolves.not.toBeNull();

      await sleep(100);

      await expect(wsCompleter.promise).resolves.toBeInstanceOf(MockWebSocket);
      const mockWs = await wsCompleter.promise;

      // We should get a response back to indicate that the connection is
      // being established.
      const connectingEvent = pollNextResponse();
      await expect(connectingEvent).resolves.toBeInstanceOf(WebSocketResponse);
      await expect(
        connectingEvent.then((value) => (value as WebSocketResponse).status),
      ).resolves.toBeInstanceOf(WebSocketStatusConnectionConnecting);

      expect(mockWs.dispatchEvent(new Event('open'))).toBe(true);

      // We should get a response back to indicate that the connection has
      // been established.
      const openedEvent = pollNextResponse();
      await expect(openedEvent).resolves.toBeInstanceOf(WebSocketResponse);
      await expect(
        openedEvent.then((response) => (response as WebSocketResponse).status),
      ).resolves.toBeInstanceOf(WebSocketStatusConnectionOpened);
    }

    const ws = await wsCompleter.promise;

    // Another Call to connect should not change the state, as we are already
    // connected.
    {
      // Send a command to connect the WebSocket
      await expect(
        api.send(new WebSocketRequest(new WebSocketCommandConnect())),
      ).resolves.not.toBeNull();
    }

    // Requesting data from the WebSocket implementation
    {
      const request = new RequestNodeIdentitySnapshot();
      await expect(
        api.send(new NodeValidatorServiceRequest(request)),
      ).resolves.not.toBeNull();

      // This should result in the proxy websocket being sent the serialized
      // request.

      await expect(sendChannel.poll()).resolves.toBe(
        JSON.stringify(request.valueOf()),
      );

      // Then we simulate the WebSocket receiving a response.
      const responseToSend = new CappuccinoNodeIdentitySnapshot([]);

      expect(
        ws.dispatchEvent(
          new MessageEvent('message', {
            data: JSON.stringify(
              cappuccinoNodeValidatorResponseCodec.encode(responseToSend),
            ),
          }),
        ),
      ).toBe(true);

      // We should receive the response in the response channel

      const response = pollNextResponse();
      await expect(response).resolves.toBeInstanceOf(
        NodeValidatorServiceResponse,
      );

      if (response instanceof NodeValidatorServiceResponse) {
        expect(response.response).toBeInstanceOf(
          CappuccinoNodeIdentitySnapshot,
        );
      }
    }

    // Requesting to Close, should close the WebSocket
    {
      await expect(
        api.send(new WebSocketRequest(new WebSocketCommandClose())),
      ).resolves.not.toBeNull();

      await expect(closeChannel.poll()).resolves.toEqual({});

      expect(ws.dispatchEvent(new Event('close'))).toBe(true);

      const closeEvent = pollNextResponse();
      await expect(closeEvent).resolves.toBeInstanceOf(WebSocketResponse);
      await expect(
        closeEvent.then((value) => (value as WebSocketResponse).status),
      ).resolves.toBeInstanceOf(WebSocketStatusConnectionClosed);
    }
  });

  it('should protect against rapid reconnect', async () => {
    const wsChannel = createBufferedChannel<MockWebSocket>(10);
    const sendChannel = createBufferedChannel<string>(10);

    const api = new WebSocketDataCappuccinoNodeValidatorAPI(
      createBufferedChannel(10),
      createBufferedChannel(10),
      new URL('wss://example.com'),
      (): WebSocketInterface => {
        const ws = new MockWebSocket((data: string) =>
          sendChannel.publish(data),
        );

        // Store a reference to the mock Websocket, so we can
        // use it to fake messages.
        wsChannel.publish(ws);
        return ws;
      },
    );

    const responseStream = api.stream;
    const responseIterator = responseStream[Symbol.asyncIterator]();

    const pollNextResponse = async () => {
      const next = await responseIterator.next();
      if (next.done) {
        throw new Error('No more responses available');
      }

      return next.value;
    };

    // We need to start processing requests.
    api.startProcessing();

    const start = new Date();
    const attemptDurations: number[] = [];

    // Start trying to connect the websocket
    for (let i = 0; i < 5; i++) {
      const attemptStart = new Date();
      // Send a command to connect the WebSocket
      await expect(
        api.send(new WebSocketRequest(new WebSocketCommandConnect())),
      ).resolves.not.toBeNull();

      await sleep(100);

      const nextWs = wsChannel.poll();

      await expect(nextWs).resolves.toBeInstanceOf(MockWebSocket);
      const mockWs = await nextWs;

      expect(mockWs.dispatchEvent(new Event('close'))).toBe(true);

      // We should get a response back to indicate that the connection is
      // being established.
      const connectingEvent = pollNextResponse();
      await expect(connectingEvent).resolves.toBeInstanceOf(WebSocketResponse);
      await expect(
        connectingEvent.then((value) => (value as WebSocketResponse).status),
      ).resolves.toBeInstanceOf(WebSocketStatusConnectionConnecting);

      const closeEvent = pollNextResponse();
      await expect(closeEvent).resolves.toBeInstanceOf(WebSocketResponse);
      await expect(
        closeEvent.then((value) => (value as WebSocketResponse).status),
      ).resolves.toBeInstanceOf(WebSocketStatusConnectionClosed);

      const attemptEnd = new Date();
      attemptDurations.push(attemptEnd.valueOf() - attemptStart.valueOf());
    }

    const end = new Date();
    const totalDuration = end.valueOf() - start.valueOf();

    expect(totalDuration).toBeGreaterThanOrEqual(500);

    for (let i = 1; i < attemptDurations.length; i++) {
      expect(attemptDurations[i]).toBeGreaterThan(attemptDurations[i - 1]);
    }
  });
});
