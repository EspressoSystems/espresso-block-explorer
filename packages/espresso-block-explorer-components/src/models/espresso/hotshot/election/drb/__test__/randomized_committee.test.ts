import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { foldRIterable, iota, mapIterable } from '@/functional/functional';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { StakeTableEntry } from '@/service/hotshot_query_service/node/stake_table_entry';
import { describe, it, expect } from 'vitest';
import { generateStakeBasedCDF } from '../randomized_committee';

/*
    fn test_randomized_leader() {
        let mut rng = rand::thread_rng();
        // use an arbitrary Sha256 output.
        let drb: [u8; 32] = Sha256::digest(b"drb").into();
        // a stake table with 10 nodes, each with a stake of 1-100
        let stake_table_entries: Vec<_> = (0..10)
            .map(|i| StakeTableEntry {
                stake_key: BLSPubKey::generated_from_seed_indexed([0u8; 32], i).0,
                stake_amount: U256::from(rng.next_u64() % 100 + 1),
            })
            .collect();
        let randomized_committee = generate_stake_cdf(stake_table_entries.clone(), drb);

        // Number of views to test
        let num_views = 100000;
        let mut selected = HashMap::<_, u64>::new();
        // Test the leader election for 100000 views.
        for i in 0..num_views {
            let leader = select_randomized_leader(&randomized_committee, i);
            *selected.entry(leader).or_insert(0) += 1;
        }

        // Total variation distance
        let mut tvd = 0.;
        let total_stakes = stake_table_entries
            .iter()
            .map(|e| e.stake())
            .sum::<U256>()
            .to::<u64>() as f64;
        for entry in stake_table_entries {
            let expected = entry.stake().to::<u64>() as f64 / total_stakes;
            let actual = *selected.get(&entry).unwrap_or(&0) as f64 / num_views as f64;
            tvd += (expected - actual).abs();
        }

        // sanity check
        assert!(tvd >= 0.0);
        // Allow a small margin of error
        assert!(tvd < 0.03);
    }
*/

describe('Randomized Committee', { timeout: 100_000 }, () => {
  it('should select leader based on drb and stake weight', async () => {
    const prng = new PseudoRandomNumberGenerator();

    // Create a Stake Table with 10 nodes, each with a stake of 1-100.
    const stakeTableEntries = Array.from(
      mapIterable(
        iota(10),
        () =>
          new StakeTableEntry(
            new TaggedBase64('PUB', prng.fillBytes(32)),
            (prng.nextRangeBigInt(0n, 0xffffffffffffffffn) % 100n) + 1n,
          ),
      ),
    );

    const drb = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode('drb'),
    );

    const randomizedCommittee = await generateStakeBasedCDF(
      stakeTableEntries,
      new Uint8Array(drb),
    );

    // Number of views to test
    const numViews = 100_000n;
    const selected = new Map<StakeTableEntry, bigint>();

    for (let i = 0n; i < numViews; i++) {
      const leader = await randomizedCommittee.selectLeaderForView(i);
      selected.set(leader, (selected.get(leader) ?? 0n) + 1n);
    }

    const totalStake = Number(
      foldRIterable(
        (a, b) => a + b,
        0n,
        mapIterable(stakeTableEntries, (a) => a.stakeAmount),
      ),
    );

    let tvd = 0.0;
    for (const entry of stakeTableEntries) {
      const expected = Number(entry.stakeAmount) / totalStake;
      const actual = Number(selected.get(entry) ?? 0n) / Number(numViews);

      tvd += Math.abs(expected - actual);
    }

    // sanity check
    expect(tvd).greaterThanOrEqual(0.0);
    // Allow a small margin of error
    expect(tvd).lessThan(0.03);
  });
});
