import { zipWithIterable } from '@/functional/functional';
import {
  kWebSocketCommandCloseType,
  WebSocketCommandClose,
} from '@/models/web_worker/web_socket/request/close';
import {
  kWebSocketCommandConnectType,
  WebSocketCommandConnect,
} from '@/models/web_worker/web_socket/request/connect';
import { webSocketCommandCodec } from '@/models/web_worker/web_socket/request/web_socket_command_codec';
import { describe, it } from 'vitest';

describe('WebWorkerLifeCycleRequestCodec', () => {
  it('should JSON encode', () => {
    const requestValues = [
      kWebSocketCommandConnectType,
      kWebSocketCommandCloseType,
    ];

    const requestConstructors = [
      WebSocketCommandConnect,
      WebSocketCommandClose,
    ];

    for (const [string, constructor] of zipWithIterable(
      requestValues,
      requestConstructors,
      (a, b) => [a, b] as const,
    )) {
      expect(webSocketCommandCodec.encode(new constructor())).toBe(string);

      expect(webSocketCommandCodec.decode(string)).toBeInstanceOf(constructor);

      expect(new constructor().valueOf()).toBe(string);
    }
  });
});
