import {
  generateAllEspressoBlocks,
  nodeList,
} from '@/data_source/fake_data_source';
import UnimplementedError from '@/errors/UnimplementedError';
import { mapIterable } from '@/functional/functional';
import { lastAsyncIterable } from '@/functional/functional_async';
import { ActiveValidatorSetSnapshot } from '../active_validator_set_snapshot';
import { ActiveValidatorSetUpdate } from '../active_validator_set_update';
import { CurrentEpochValidatorSetEntry } from '../current_epoch_validator_set_entry';
import { EpochAndBlock } from '../epoch_and_block';
import { ValidatorsActiveAPI } from '../validators_active_api';

/**
 * FakeDataValidatorsActiveAPI is an implementation of ValidatorsActiveAPI
 * that uses fake data to simulate the `validators/active` endpoints
 * for the Validator Service API.
 */
export class FakeDataValidatorsActiveAPI implements ValidatorsActiveAPI {
  async active(): Promise<ActiveValidatorSetSnapshot> {
    const block = await lastAsyncIterable(generateAllEspressoBlocks());
    const nodeListSorted = nodeList
      .slice()
      .sort((a, b) => Number(b.stake - a.stake))
      .slice(0, 100);

    return new ActiveValidatorSetSnapshot(
      new EpochAndBlock(
        BigInt(Math.floor(block.height / 100)),
        BigInt(block.height),
        new Date(block.time),
      ),
      Array.from(
        mapIterable(
          nodeListSorted,
          (node) => new CurrentEpochValidatorSetEntry(node.address),
        ),
      ),
    );
  }

  async updatesSince(): Promise<ActiveValidatorSetUpdate> {
    throw new UnimplementedError();
  }
}
