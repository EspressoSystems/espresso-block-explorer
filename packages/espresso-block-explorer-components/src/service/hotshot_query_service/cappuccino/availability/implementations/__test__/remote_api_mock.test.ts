import { Channel, createBufferedChannel } from '@/async/channel';
import NotFoundError from '@/errors/not_found_error';
import { firstAsyncIterable } from '@/functional/functional_async';
import { TaggedBase64 } from '@/models/espresso';
import { describe, expect, it } from 'vitest';
import { FetchBasedCappuccinoHotShotQueryService } from '../../../implementations/remote_api';
import { CappuccinoAvailabilityErrorResponse } from '../../availability_error_response';
import { CappuccinoAPIBlock } from '../../block';
import { CappuccinoAPIHeaderImpl } from '../../block_header';
import { CappuccinoAPIV0HeaderFieldsImpl } from '../../block_header_v0';
import { CappuccinoBuilderSignature } from '../../builder_signature';
import { CappuccinoFeeInfo } from '../../fee_info';
import { CappuccinoNamespaceTable } from '../../namespace_table';
import { CappuccinoAPIPayload } from '../../payload';
import { CappuccinoAPITransactionNMTEntry } from '../../transaction_nmt_entry';
import { CappuccinoVersion, WrappedVersion } from '../../version';

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
  requestSink: Channel<Parameters<typeof fetch>>,
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
  requestSink: Channel<Parameters<typeof fetch>>,
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
          new CappuccinoAPIHeaderImpl(
            new WrappedVersion(new CappuccinoVersion(0, 1)),
            new CappuccinoAPIV0HeaderFieldsImpl(
              10,
              11,
              12,
              null,
              new TaggedBase64(
                'PAYLOAD',
                new Uint8Array([13, 14, 15, 16]).buffer,
              ),
              new TaggedBase64(
                'BUILDER',
                new Uint8Array([13, 14, 15, 16]).buffer,
              ),
              new CappuccinoNamespaceTable(
                new Uint8Array([17, 18, 19, 20]).buffer,
              ),
              new TaggedBase64(
                'BLOCK',
                new Uint8Array([21, 22, 23, 24]).buffer,
              ),
              new TaggedBase64(
                'FEE',
                new Uint8Array([25, 26, 27, 28]).buffer,
              ),
              new CappuccinoFeeInfo(
                new Uint8Array([37, 38, 39, 40]).buffer,
                new Uint8Array([41, 42, 43, 44]).buffer,
              ),
              new CappuccinoBuilderSignature(
                new Uint8Array([29, 30, 31, 32]).buffer,
                new Uint8Array([33, 34, 35, 36]).buffer,
                2,
              ),
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
          createBufferedChannel<Parameters<typeof fetch>>(4);
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
        createBufferedChannel<Parameters<typeof fetch>>(4);
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
