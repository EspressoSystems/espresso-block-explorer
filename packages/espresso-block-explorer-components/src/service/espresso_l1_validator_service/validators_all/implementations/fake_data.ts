import { nodeList } from '@/data_source/fake_data_source/espresso/nodes';
import { mapIterable } from '@/functional/functional';
import { L1BlockInfo } from '../../common/l1_block_info';
import { NodeSetEntry } from '../../common/node_set_entry';
import { Ratio } from '../../common/ratio';
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
          return new NodeSetEntry(
            entry.address,
            entry.stateVerKey,
            entry.stake,
            Ratio.floatingPoint(entry.commission / 10_000),
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
