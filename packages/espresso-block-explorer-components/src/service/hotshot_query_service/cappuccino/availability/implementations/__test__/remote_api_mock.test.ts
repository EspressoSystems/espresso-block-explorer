import { Channel, createBufferedChannel } from '@/async/channel';
import NotFoundError from '@/errors/NotFoundError';
import { firstAsyncIterable } from '@/functional/functional_async';
import { TaggedBase64 } from '@/models/espresso';
import { ArgumentsType, describe, expect, it } from 'vitest';
import { FetchBasedCappuccinoHotShotQueryService } from '../../../implementations/remote_api';
import { CappuccinoAvailabilityErrorResponse } from '../../availability_error_response';
import { CappuccinoAPIBlock } from '../../block';
import { CappuccinoAPIHeader } from '../../block_header';
import { CappuccinoBuilderSignature } from '../../builder_signature';
import { CappuccinoFeeInfo } from '../../fee_info';
import { CappuccinoNamespaceTable } from '../../namespace_table';
import { CappuccinoAPIPayload } from '../../payload';
import { CappuccinoAPITransactionNMTEntry } from '../../transaction_nmt_entry';

/**
 * createFetcherWithResponse is a utility function used for testing that will
 * return a function that adheres to the fetch API, but instead of sending a
 * request across the network, it will instead publish the given request to the
 * given `requestSink` channel,  Additionally it will return a `Response` with
 * the given `headers`, and `statusCode`.
 *
 * This function is used to mock fetch requests.
 */
function createFetcherWithResponse(
  requestSink: Channel<ArgumentsType<typeof fetch>>,
  statusCode: number,
  headers: Record<string, string>,
  body: string,
): typeof fetch {
  return async (input, init) => {
    requestSink.publish([input, init]);
    return new Response(body, {
      headers,
      status: statusCode,
    });
  };
}

/**
 * createFetcherWithJSONResponse is a utility function used for testing that
 * will provide a fetch function that will return a `Response` with the given
 * `value` as the JSON encoded body contents of the response.
 */
function createFetcherWithJSONResponse<V>(
  requestSink: Channel<ArgumentsType<typeof fetch>>,
  statusCode: number,
  value: V,
): typeof fetch {
  return createFetcherWithResponse(
    requestSink,
    statusCode,
    {
      'Content-Type': 'application/json',
    },
    JSON.stringify(value),
  );
}

describe('HotShot Query Service - Cappuccino - Availability API', () => {
  describe('Mock', () => {
    describe('getBlockFromHeight', () => {
      it('should receive the request as expected', async () => {
        const returnedValue = new CappuccinoAPIBlock(
          new CappuccinoAPIHeader(
            10,
            11,
            12,
            null,
            [13, 14, 15, 16],
            new CappuccinoNamespaceTable(
              new Uint8Array([17, 18, 19, 20]).buffer,
            ),
            new TaggedBase64(
              'BLOCK_MERKLE_ROOT',
              new Uint8Array([21, 22, 23, 24]).buffer,
            ),
            new TaggedBase64(
              'FEE_MERKLE_ROOT',
              new Uint8Array([25, 26, 27, 28]).buffer,
            ),
            new CappuccinoBuilderSignature(
              new Uint8Array([29, 30, 31, 32]).buffer,
              new Uint8Array([33, 34, 35, 36]).buffer,
              2,
            ),
            new CappuccinoFeeInfo(
              new Uint8Array([37, 38, 39, 40]).buffer,
              new Uint8Array([41, 42, 43, 44]).buffer,
            ),
          ),
          new CappuccinoAPIPayload([
            new CappuccinoAPITransactionNMTEntry(3, [45, 46, 47, 48]),
          ]),
          new TaggedBase64(
            'BLOCK_SIGNATURE',
            new Uint8Array([49, 50, 51, 52]).buffer,
          ),
          4,
          5,
        );

        const requestChannel =
          createBufferedChannel<ArgumentsType<typeof fetch>>(4);
        const client = new FetchBasedCappuccinoHotShotQueryService(
          createFetcherWithJSONResponse(requestChannel, 200, returnedValue),
          new URL('https://example.com/v0/'),
        );

        const responsePromise = client.availability.getBlockFromHeight(20);

        const firstRequest = firstAsyncIterable(requestChannel);
        await expect(firstRequest).resolves.toBeTruthy();

        const [input, init] = await firstRequest;

        expect(input).toBeInstanceOf(URL);
        if (input instanceof URL) {
          expect(input.toString()).equals(
            'https://example.com/v0/availability/block/20',
          );
        }

        expect(init).toBeFalsy();

        await expect(responsePromise).resolves.to.deep.equal(returnedValue);
      });
    });

    it('should throw an error when decodable', async () => {
      const returnedValue = new CappuccinoAvailabilityErrorResponse(
        new NotFoundError('Block not found'),
      );

      const requestChannel =
        createBufferedChannel<ArgumentsType<typeof fetch>>(4);
      const client = new FetchBasedCappuccinoHotShotQueryService(
        createFetcherWithJSONResponse(requestChannel, 500, returnedValue),
        new URL('https://example.com/v0/'),
      );

      const responsePromise = client.availability.getBlockFromHeight(20);

      const firstRequest = firstAsyncIterable(requestChannel);
      await expect(firstRequest).resolves.toBeTruthy();

      const [input, init] = await firstRequest;

      expect(input).toBeInstanceOf(URL);
      if (input instanceof URL) {
        expect(input.toString()).equals(
          'https://example.com/v0/availability/block/20',
        );
      }

      expect(init).toBeFalsy();

      await expect(responsePromise).rejects.to.deep.equal(
        returnedValue.availability,
      );
    });
  });
});
