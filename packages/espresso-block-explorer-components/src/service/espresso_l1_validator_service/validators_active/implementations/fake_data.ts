import {
  generateAllEspressoBlocks,
  nodeList,
  PseudoRandomNumberGenerator,
} from '@/data_source/fake_data_source';
import { mapIterable } from '@/functional/functional';
import { lastAsyncIterable } from '@/functional/functional_async';
import { ActiveNodeSetEntry } from '../../common/active_node_set_entry';
import { EpochAndBlock } from '../../common/epoch_and_block';
import { Ratio } from '../../common/ratio';
import { ActiveNodeSetSnapshot } from '../active_node_set_snapshot';
import { ActiveNodeSetUpdate } from '../active_node_set_update';
import { ValidatorsActiveAPI } from '../validators_active_api';

/**
 * FakeDataValidatorsActiveAPI is an implementation of ValidatorsActiveAPI
 * that uses fake data to simulate the `validators/active` endpoints
 * for the Validator Service API.
 */
export class FakeDataValidatorsActiveAPI implements ValidatorsActiveAPI {
  async active(): Promise<ActiveNodeSetSnapshot> {
    const block = await lastAsyncIterable(generateAllEspressoBlocks());
    const nodeListSorted = nodeList
      .slice()
      .sort((a, b) => Number(b.stake - a.stake))
      .slice(0, 100);

    const prng = new PseudoRandomNumberGenerator(block.genTime);

    return new ActiveNodeSetSnapshot(
      new EpochAndBlock(
        EpochAndBlock.determineEpoch(BigInt(block.height), 100n),
        BigInt(block.height),
        new Date(block.time),
      ),
      Array.from(
        mapIterable(
          nodeListSorted,
          (node) =>
            new ActiveNodeSetEntry(
              node.address,
              Ratio.floatingPoint(prng.nextFloat()),
              Ratio.floatingPoint(prng.nextFloat()),
            ),
        ),
      ),
    );
  }

  async activeFor(): Promise<ActiveNodeSetSnapshot> {
    return this.active();
  }

  async updatesSince(): Promise<ActiveNodeSetUpdate> {
    const active = await this.active();
    return new ActiveNodeSetUpdate(active.espressoBlock, []);
  }
}
