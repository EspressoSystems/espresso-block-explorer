import { nodeList } from '@/data_source/fake_data_source/espresso/nodes';
import UnimplementedError from '@/errors/UnimplementedError';
import { mapIterable } from '@/functional/functional';
import { CommissionPercent } from '@/models/espresso';
import { L1BlockInfo } from '../../l1_block/l1_block_info';
import { FullValidatorSetSnapshot } from '../full_validator_set_snapshot';
import { FullValidatorSetUpdate } from '../full_validator_set_update';
import { ValidatorSetEntry } from '../validator_set_entry';
import { ValidatorsAllAPI } from '../validators_all_api';

/**
 * FakeDataValidatorsAllAPI is an implementation of ValidatorsAllAPI
 * that uses fake data to simulate the `validators/all` endpoints
 * for the Validator Service API.
 */
export class FakeDataValidatorsAllAPI implements ValidatorsAllAPI {
  async snapshot(): Promise<FullValidatorSetSnapshot> {
    // Top 100 by stake
    const nodeListSorted = nodeList
      .slice()
      .sort((a, b) => Number(b.stake - a.stake))
      .slice(0, 100);

    const addressMap = new Set(
      mapIterable(nodeListSorted, (entry) => entry.address),
    );

    return new FullValidatorSetSnapshot(
      new L1BlockInfo(BigInt(1), new ArrayBuffer(32), new Date()),
      Array.from(
        mapIterable(nodeList, (entry) => {
          return new ValidatorSetEntry(
            entry.address,
            entry.stateVerKey,
            entry.stake,
            new CommissionPercent(entry.commission),
            addressMap.has(entry.address) ? Math.random() : null,
            addressMap.has(entry.address) ? Math.random() : null,
          );
        }),
      ),
    );
  }

  async updatesSince(): Promise<FullValidatorSetUpdate> {
    throw new UnimplementedError();
  }
}
