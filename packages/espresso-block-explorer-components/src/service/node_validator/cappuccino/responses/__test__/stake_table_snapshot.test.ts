import { describe, it } from 'vitest';
import { cappuccinoNodeValidatorResponseCodec } from '../node_validator_response_codec';
import { cappuccinoStakeTableSnapshotCodec } from '../stake_table_snapshot';

describe('StakeTableSnapshot', () => {
  it('should decode from json', () => {
    const rawString =
      '{"StakeTableSnapshot":[{"stake_table_entry":{"stake_key":"BLS_VER_KEY~64_Y8QFPwAVvCZ5wTwt0i84X3Q1QP7klDfrfnmGf0Csf-MxquDLjT_R0ekVjRt3Vgi_q3psgOk2JMt7hG9kLEmn_KZ54T4wpV28JcxPcvdv33u5HiwYV2j3WOMfQUK0ACgrGMxyRtgjB2_N4MAaRhmbi8l1TnggtkX1w1GmKfhSc","stake_amount":"0x56bc75e2d63100000"},"state_ver_key":"SCHNORR_VER_KEY~SH_6UHYUqQYsJEHKxSSmKZxXYApnLKho21-0aUSi0xmDxqm7ooRNpI5xpFdHSQReY1n0g4w9SIKjJK4HG92NIKc"},{"stake_table_entry":{"stake_key":"BLS_VER_KEY~qwEP63srzoRpSf7ahV27nz8JL90W5q3KhyPJhTY75Sir9JiHkF2JQBZ_1iJlTNOfprZ-cXh7GB4irI00hvExFiSQbTPomSRUnFxugn5I5FbOT7vxiXZiZ3pEhFbzFqAHCY57RtaPbqFBNmMzlueUUtxF0Cf-Sy3uVcAaWF7TB6Jy","stake_amount":"0xad78ebc5ac6200000"},"state_ver_key":"SCHNORR_VER_KEY~Vgs-osonoQBj8GGb4erBqK6G2v0Q3qk21Pb16B1h9RfKm6N3UnnaIU7NO6lk-Pk63udiQ85ulDekUrmr-Qd7J2Y"},{"stake_table_entry":{"stake_key":"BLS_VER_KEY~OgoV0DKrVMKYbGrnun5P6QGLicYtu-YAfmd-jmMjGQbr5L1nBUgOu-iOrnFiQIKQzB7hD_7N7VYP8OJCOeU_GOlEJDpNFJEUrn636VB1hqc2xXUrTy9nr6pf-IBQSOQnBu-DynNfdfWl79kJ3mPGLUnLrEZxzmx_rX5mbbzHfplw","stake_amount":"0x1043561a8829300000"},"state_ver_key":"SCHNORR_VER_KEY~rCGxwXIrWN1QbYXykJgDw4c1a0vNCglqbSTeevaZcSX_vDiOl0ncKIhbsDhASx0EaWX67ZgaXOoCq2V87cpXCNw"},{"stake_table_entry":{"stake_key":"BLS_VER_KEY~epsA2EWk47kIH9LJAXFaHmkV7Z5w1WVCVW9OxbUt_AagVOVHW_d234iIRW6daMzNG2smomQm7JatnCcAVenEBUz3qBMh6yZ45W5unxRcn7cqXWLz0lsXFlexuoZuGPUaj3zxCiLZ8d357kFvxMxMssRapfr0E_G1byeN9nOQNKRp","stake_amount":"0x15af1d78b58c400000"},"state_ver_key":"SCHNORR_VER_KEY~7nMR1Q6NekFNRqGdYlahjDrU-53laZ8CZeSK6UMOZAyVAK662M9m9-a4Z-XqB9lfqIDIkSdf7E9Egk_KDfDlJ9o"},{"stake_table_entry":{"stake_key":"BLS_VER_KEY~vwNZL5rU6wGCuOy30Xa9n3lFXJttQCD_rANGqFLZJy5TiQJS6Qc-JL-eyP_HVSnowzplfo3Gs8vmMrIL_jMwF43DMcn55drU3QC4yQRWxun6mXHoDSaXbByBdNXwmFAdD7fW6pNn84a0rZphp8MUshO6OdIrHk8RlvCk_E-sBQ8R","stake_amount":"0x1b1ae4d6e2ef500000"},"state_ver_key":"SCHNORR_VER_KEY~TLltPAWf8roNMaOPTB9A-rro0v23YOXYDE9u-lShCR61V-Rt3O0gFoJiogCklHQxEoPj6neeH4fgg1Y0rdwZDlc"},{"stake_table_entry":{"stake_key":"BLS_VER_KEY~c1umxNjnCB_hv-Dp5x9f-xKRFGKMkirBJ5FM5fPg_SVyKsL7-L4Ck9Nbn07LirWRVsITXOLthnEiyV8zU8v4G8SjloCxndsebX5ceCe99ouBSdWKrX-3HCLVVRu3nHECMyyLsfkFXJ4jArj32mypkyRvIl1LCad2BqdrBcCUdwUj","stake_amount":"0x56bc75e2d63100000"},"state_ver_key":"SCHNORR_VER_KEY~wwKnID5q18ep0hq6W7o-7wrMDXZTrgfnQYgepVae-wGAuG6Tk6SxKFOfRvkDdGaxc3t_OZ_n_5BJGtnSgwhLJ78"},{"stake_table_entry":{"stake_key":"BLS_VER_KEY~spX3M9wYMTmD3tab2OmJZ9mWZ9JoVowwmlgdQSzQeQVpb2Rk5n3lV6NFLQIX9CU8N3EY0pLiq0QSs-r18adEJRgQ3lwkNeyVdP9ygEPywjd7BP8_cKhB3tGkGY-QUM4JurjNycKMqe2ll-fr9Efwe3aEZrVraQ6jnCrVxoVaoAxI","stake_amount":"0xad78ebc5ac6200000"},"state_ver_key":"SCHNORR_VER_KEY~UhNBmtpJwHb3S6q8PNAJyLsFM2XGNvxF2WHn1FW8nR6EXtgn4sh27Jd-Rl2JHqQjJDIyiv4ShcT8eNXYCWFPBMU"},{"stake_table_entry":{"stake_key":"BLS_VER_KEY~l7zCaYVtwUonbbjI4sCoIWMFRzyxIrbBPi4YLB8kgRrcXNV1lnzrBE46aBnL53ClAml7Zdu8MqXYfkYJjL4TB8Xu5iaaE8eBL4TBXWlFDIdAFX1yVfsdfEdOgXMoY8sXCyp3lSqBzdE1VOvUhN7T4BzeyQzvEG_mSiEBoeAzU6Si","stake_amount":"0x1043561a8829300000"},"state_ver_key":"SCHNORR_VER_KEY~otOjmDNCPM5CWaUjuS-F4dyv0lTLnURQZ85VI16oFhz-ReDtSe1FlbcSAIAtM8QFzjtVhpQTPDUDVt8qT2mqAv4"},{"stake_table_entry":{"stake_key":"BLS_VER_KEY~4EUfjINdNHRUd8StbsAXX-FWWUHzWBBCR2-Fyy7kVSYtrJ-dwsTb6kgN-PyQkNwGpues4SVVscUNFO64G-xhFQNIw0tJf2lcGa0siqBNq0gJIBSgIh5mzFAwIoCTxd4phmdCsnl8IexJA6_z0l1kEc7NLJoPJg0iQKx2OaAnAw1X","stake_amount":"0x15af1d78b58c400000"},"state_ver_key":"SCHNORR_VER_KEY~r7PVea-fE9BQPKMjcsnUQ7EQbpV0Ug-kvcDn_JUK3yhjD31SsH6tE6Iuc3mYDumzcfzZCf9B3RWcZJFen-BSLrI"},{"stake_table_entry":{"stake_key":"BLS_VER_KEY~QM_ZEKUVz-f-GDSs01iFaPaVcldrQhYazqEV2u2uHQktpoNEQxWTu4EFLsT5RjrHF8jauheW4CMP9tn_t4gfIF9P7SPc4ELiTcJ7PQe5rihXfqNFJFXEbJUodX1sMQIM3oqoUPYdCDa-Ge2P3BQJxh6YOrEubH0BpzTXn17CtwNG","stake_amount":"0x1b1ae4d6e2ef500000"},"state_ver_key":"SCHNORR_VER_KEY~KGMmPGswouTEgKhC7V_R8EuQJZRTBzrrdtzDSTzLTQ6GIvfQHvL_AiXC0JU3Oo5q7xp52PNi33kFv0mMRihlIf4"}]}';

    const response = cappuccinoStakeTableSnapshotCodec.decode(
      JSON.parse(rawString),
    );

    const expectedLength = 10;
    expect(response.stakeTable).toHaveLength(expectedLength);

    const stakeTableIterator = response.stakeTable[Symbol.iterator]();

    {
      // StakeTable Entry 0

      const next = stakeTableIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a stake table entry');
      }

      const stakeTableEntry0 = next.value;

      expect(stakeTableEntry0.stakeTableEntry.stakeKey.toString()).toBe(
        'BLS_VER_KEY~64_Y8QFPwAVvCZ5wTwt0i84X3Q1QP7klDfrfnmGf0Csf-MxquDLjT_R0ekVjRt3Vgi_q3psgOk2JMt7hG9kLEmn_KZ54T4wpV28JcxPcvdv33u5HiwYV2j3WOMfQUK0ACgrGMxyRtgjB2_N4MAaRhmbi8l1TnggtkX1w1GmKfhSc',
      );
      expect(stakeTableEntry0.stakeTableEntry.stakeAmount).toBe(
        BigInt('0x56bc75e2d63100000'),
      );
      expect(stakeTableEntry0.stateVerKey.toString()).toBe(
        'SCHNORR_VER_KEY~SH_6UHYUqQYsJEHKxSSmKZxXYApnLKho21-0aUSi0xmDxqm7ooRNpI5xpFdHSQReY1n0g4w9SIKjJK4HG92NIKc',
      );
    }

    for (let i = 1; i < expectedLength; i++) {
      const next = stakeTableIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a stake table entry');
      }

      const stakeTableEntryI = next.value;
      expect(stakeTableEntryI.stakeTableEntry.stakeAmount > 0n).toBe(true);
    }

    expect(stakeTableIterator.next().done).toBe(true);
    expect(response.toJSON()).toStrictEqual(
      cappuccinoStakeTableSnapshotCodec.encode(response),
    );

    expect(
      cappuccinoNodeValidatorResponseCodec.decode(JSON.parse(rawString)),
    ).toStrictEqual(
      cappuccinoStakeTableSnapshotCodec.decode(JSON.parse(rawString)),
    );

    expect(cappuccinoNodeValidatorResponseCodec.encode(response)).toStrictEqual(
      cappuccinoStakeTableSnapshotCodec.encode(response),
    );
  });
});
