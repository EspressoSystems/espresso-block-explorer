import { createBufferedDataView } from '@/convert/data_view/buffered_data_view';
import { Endianess } from '@/convert/data_view/endianess';
import { UnimplementedError } from '@/errors/unimplemented_error';
import {
  compareIterables,
  cycleIterable,
  firstWhereIterable,
  zipWithIterable,
} from '@/functional/functional';
import { StakeTableEntry } from '@/service/hotshot_query_service/node/stake_table_entry';

export interface RandomizedCommittee {
  selectLeaderForView(view: bigint): Promise<StakeTableEntry>;
}

type CumulativeStakeTableEntry = [StakeTableEntry, bigint];

function cycleXor(a: Uint8Array, b: Uint8Array): Uint8Array {
  return new Uint8Array(zipWithIterable(cycleIterable(a), b, (x, y) => x ^ y));
}

async function leaderForView(
  view: bigint,
  cdf: CumulativeStakeTableEntry[],
  drb: Uint8Array,
  hash: ArrayBuffer,
) {
  // Create the Hash Buffer for the digest
  const hashBuffer = new ArrayBuffer(drb.byteLength + 8 + hash.byteLength);
  const array = new Uint8Array(hashBuffer);

  const viewBytes = new ArrayBuffer(8);
  const viewDV = new DataView(viewBytes);
  viewDV.setBigUint64(0, view, true);

  // Populate the buffer with the bytes from the DRB, Little Endian encoded
  // view as a uint64, and then the total hash of the Stake Table.
  array.set(drb, 0);
  array.set(new Uint8Array(viewBytes), drb.byteLength);
  array.set(new Uint8Array(hash), drb.byteLength + 8);

  // Compute the SHA512 digest.
  const digest = await crypto.subtle.digest('SHA-512', array);

  // Interpret the hash as a uint512, and modulus it by the total stake.
  const rawBreakpointDV = createBufferedDataView(digest, Endianess.little);
  const rawBreakpoint = rawBreakpointDV.getBigUint512();
  const [, totalStake] = cdf[cdf.length - 1];

  const remainder = rawBreakpoint % totalStake;

  // Use the remainder as the breakpoint for the cumulative stake.
  const breakpoint = remainder;

  const nextLeader =
    firstWhereIterable(
      cdf,
      ([, cumulativeStake]) => cumulativeStake >= breakpoint,
    ) ?? null;

  if (!nextLeader) {
    throw new UnimplementedError();
  }

  return nextLeader[0];
}

class RandomizedCommitteeImplementation implements RandomizedCommittee {
  constructor(
    private readonly cdf: CumulativeStakeTableEntry[],
    private readonly drb: Uint8Array,
    private readonly hash: ArrayBuffer,
  ) {}

  async selectLeaderForView(view: bigint): Promise<StakeTableEntry> {
    return leaderForView(view, this.cdf, this.drb, this.hash);
  }
}

/**
 * generateStakeBasedCDF is a function that generates a result that can
 * be utilized to determine a random ordering for a given view number.
 *
 * CDF means Cumulative Distribution Function, and in this context it refers
 * the the Cumulative Stake for all of the entries within the given
 * StakeTableEntry list.
 */
export async function generateStakeBasedCDF(
  stakeTable: StakeTableEntry[],
  drbResult: Uint8Array,
): Promise<RandomizedCommittee> {
  // Sort with the DRB Result xored against the public keys for the stake table.
  const sortedStakeTable = stakeTable.toSorted((a, b) => {
    const keyASort = cycleXor(drbResult, new Uint8Array(a.stakeKey.data));
    const keyBSort = cycleXor(drbResult, new Uint8Array(b.stakeKey.data));

    return compareIterables(keyASort, keyBSort);
  });

  // We need to build a buffer to contain all of the values to be hashed
  // concatenated together.

  let cumulativeStake = 0n;
  const cdf: CumulativeStakeTableEntry[] = new Array(sortedStakeTable.length);
  // Allocate enough room to hold all of the public keys.
  const digestSourceBuffer = new ArrayBuffer(sortedStakeTable.length * 256);
  const bytes = new Uint8Array(digestSourceBuffer);

  let digestOffset = 0;
  const l = sortedStakeTable.length;
  for (let i = 0; i < l; i++) {
    const entry = sortedStakeTable[i];
    cumulativeStake += entry.stakeAmount;
    cdf[i] = [entry, cumulativeStake];
    bytes.set(new Uint8Array(entry.stakeKey.data), digestOffset);
    digestOffset += entry.stakeKey.data.byteLength;
  }

  // new SHA256 Hasher
  const hash = await crypto.subtle.digest(
    'SHA-256',
    digestSourceBuffer.slice(0, digestOffset),
  );

  return new RandomizedCommitteeImplementation(cdf, drbResult, hash);
}
