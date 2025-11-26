import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { nodeList } from '@/data_source/fake_data_source';
import { mapIterable } from '@/functional/functional';
import { CommissionPercent } from '@/models/espresso';
import { ActiveValidators } from '../active_validators';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable } from '../stake_table';
import { StakeTableEntry } from '../stake_table_entry';
import { StakeTableField } from '../stake_table_field';
import { ValidatorEntry } from '../validator_entry';

export class FakeDataCappuccinoHotShotQueryServiceNodeAPI
  implements CappuccinoHotShotQueryServiceNodeAPI
{
  async getStakeTableForEpoch(): Promise<StakeTable> {
    return new StakeTable(
      Array.from(
        mapIterable(
          nodeList,
          (node) =>
            new StakeTableField(
              new StakeTableEntry(node.pubkey, node.stake),
              node.stateVerKey,
            ),
        ),
      ),
    );
  }

  async getValidatorsAtEpoch(): Promise<ActiveValidators> {
    return new ActiveValidators(
      new Map(
        mapIterable(nodeList, (node) => [
          hexArrayBufferCodec.encode(node.address),
          new ValidatorEntry(
            node.address,
            node.pubkey,
            node.stateVerKey,
            node.stake,
            new CommissionPercent(node.commission),
            new Map([[hexArrayBufferCodec.encode(node.address), node.stake]]),
          ),
        ]),
      ),
    );
  }
}
