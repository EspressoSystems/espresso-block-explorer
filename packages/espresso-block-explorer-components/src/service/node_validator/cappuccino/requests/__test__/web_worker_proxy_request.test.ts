import { zipWithIterable } from '@/functional/functional';
import { describe, it } from 'vitest';
import { Close, Connect } from '../web_worker_life_cycle_request';
import { webWorkerLifeCycleRequestCodec } from '../web_worker_life_cycle_request_codec';

describe('NodeValidatorRequest', () => {
  it('should JSON encode', () => {
    const requestValues = ['Connect', 'Close'];

    const requestConstructors = [Connect, Close];

    for (const [string, constructor] of zipWithIterable(
      requestValues,
      requestConstructors,
      (a, b) => [a, b] as const,
    )) {
      expect(webWorkerLifeCycleRequestCodec.encode(new constructor())).toBe(
        string,
      );

      expect(webWorkerLifeCycleRequestCodec.decode(string)).toBeInstanceOf(
        constructor,
      );

      expect(new constructor().valueOf()).toBe(string);
    }
  });
});
