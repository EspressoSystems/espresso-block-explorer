import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { nullableURLCodec } from '@/convert/codec/url';
import { nodeList } from '@/data_source/fake_data_source/espresso/nodes';
import { mapIterable } from '@/functional/functional';
import { ImageSet } from '../../common/image_set';
import { L1BlockInfo } from '../../common/l1_block_info';
import { NodeMetadata } from '../../common/node_metadata';
import { NodeMetadataContent } from '../../common/node_metadata_content';
import { NodeSetEntry } from '../../common/node_set_entry';
import { Ratio } from '../../common/ratio';
import { RatioSet } from '../../common/ratio_set';
import { FullNodeSetSnapshot } from '../full_node_set_snapshot';
import { FullNodeSetUpdate } from '../full_node_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';

/**
 * FakeDataValidatorsAllAPI is an implementation of ValidatorsAllAPI
 * that uses fake data to simulate the `validators/all` endpoints
 * for the Validator Service API.
 */
export class FakeDataValidatorsAllAPI implements ValidatorsAllAPI {
  async snapshot(): Promise<FullNodeSetSnapshot> {
    return new FullNodeSetSnapshot(
      new L1BlockInfo(BigInt(1), new ArrayBuffer(32), new Date()),
      Array.from(
        mapIterable(nodeList, (entry) => {
          const address = hexArrayBufferCodec.encode(entry.address);
          const includeImage = address[2] < '3';
          const includeName = address[2] < '6';
          const includeMetadata = address[2] < '9';

          return new NodeSetEntry(
            entry.address,
            entry.stateVerKey,
            entry.stake,
            Ratio.floatingPoint(entry.commission / 10_000),
            !includeMetadata
              ? null
              : new NodeMetadata(
                  new URL(entry.company.website),
                  !includeName
                    ? null
                    : new NodeMetadataContent(
                        entry.name,
                        null,
                        entry.company.name,
                        nullableURLCodec.decode(entry.company.website),
                        'v1.0.0',
                        !includeImage
                          ? null
                          : new ImageSet(
                              new RatioSet(
                                new URL(
                                  `https://picsum.photos/seed/${address}/14/14`,
                                ),
                                new URL(
                                  `https://picsum.photos/seed/${address}/28/28`,
                                ),
                                new URL(
                                  `https://picsum.photos/seed/${address}/42/42`,
                                ),
                              ),
                              new RatioSet(
                                new URL(
                                  `https://picsum.photos/seed/${address}/24/24`,
                                ),
                                new URL(
                                  `https://picsum.photos/seed/${address}/48/48`,
                                ),
                                new URL(
                                  `https://picsum.photos/seed/${address}/72/72`,
                                ),
                              ),
                            ),
                      ),
                ),
          );
        }),
      ),
    );
  }

  async updatesSince(): Promise<FullNodeSetUpdate> {
    const snapshot = await this.snapshot();
    return new FullNodeSetUpdate(snapshot.l1Block, []);
  }
}
