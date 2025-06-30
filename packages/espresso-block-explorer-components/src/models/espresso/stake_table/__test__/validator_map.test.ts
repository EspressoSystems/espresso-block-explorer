import { MapObjectCodec } from '@/convert/codec/map';
import { validatorCodec } from '../validator';

describe('validator map', () => {
  describe('decaf stake table 1745 example', () => {
    it('should decode the validator map', () => {
      const input =
        '{"0x09db0a93b389bef724429898f539aeb7ac2dd55f":{"account":"0x09DB0a93B389bEF724429898f539AEB7ac2Dd55f","stake_table_key":"BLS_VER_KEY~64_Y8QFPwAVvCZ5wTwt0i84X3Q1QP7klDfrfnmGf0Csf-MxquDLjT_R0ekVjRt3Vgi_q3psgOk2JMt7hG9kLEmn_KZ54T4wpV28JcxPcvdv33u5HiwYV2j3WOMfQUK0ACgrGMxyRtgjB2_N4MAaRhmbi8l1TnggtkX1w1GmKfhSc","state_ver_key":"SCHNORR_VER_KEY~SH_6UHYUqQYsJEHKxSSmKZxXYApnLKho21-0aUSi0xmDxqm7ooRNpI5xpFdHSQReY1n0g4w9SIKjJK4HG92NIKc","stake":"0x56bc75e2d63100000","commission":100,"delegators":{"0x09db0a93b389bef724429898f539aeb7ac2dd55f":"0x56bc75e2d63100000"}},"0x02484cb50aac86eae85610d6f4bf026f30f6627d":{"account":"0x02484cb50AAC86Eae85610D6f4Bf026f30f6627D","stake_table_key":"BLS_VER_KEY~qwEP63srzoRpSf7ahV27nz8JL90W5q3KhyPJhTY75Sir9JiHkF2JQBZ_1iJlTNOfprZ-cXh7GB4irI00hvExFiSQbTPomSRUnFxugn5I5FbOT7vxiXZiZ3pEhFbzFqAHCY57RtaPbqFBNmMzlueUUtxF0Cf-Sy3uVcAaWF7TB6Jy","state_ver_key":"SCHNORR_VER_KEY~Vgs-osonoQBj8GGb4erBqK6G2v0Q3qk21Pb16B1h9RfKm6N3UnnaIU7NO6lk-Pk63udiQ85ulDekUrmr-Qd7J2Y","stake":"0xad78ebc5ac6200000","commission":110,"delegators":{"0x02484cb50aac86eae85610d6f4bf026f30f6627d":"0xad78ebc5ac6200000"}},"0x08135da0a343e492fa2d4282f2ae34c6c5cc1bbe":{"account":"0x08135Da0A343E492FA2d4282F2AE34c6c5CC1BbE","stake_table_key":"BLS_VER_KEY~OgoV0DKrVMKYbGrnun5P6QGLicYtu-YAfmd-jmMjGQbr5L1nBUgOu-iOrnFiQIKQzB7hD_7N7VYP8OJCOeU_GOlEJDpNFJEUrn636VB1hqc2xXUrTy9nr6pf-IBQSOQnBu-DynNfdfWl79kJ3mPGLUnLrEZxzmx_rX5mbbzHfplw","state_ver_key":"SCHNORR_VER_KEY~rCGxwXIrWN1QbYXykJgDw4c1a0vNCglqbSTeevaZcSX_vDiOl0ncKIhbsDhASx0EaWX67ZgaXOoCq2V87cpXCNw","stake":"0x1043561a8829300000","commission":120,"delegators":{"0x08135da0a343e492fa2d4282f2ae34c6c5cc1bbe":"0x1043561a8829300000"}},"0x5e661b79fe2d3f6ce70f5aac07d8cd9abb2743f1":{"account":"0x5E661B79FE2D3F6cE70F5AAC07d8Cd9abb2743F1","stake_table_key":"BLS_VER_KEY~epsA2EWk47kIH9LJAXFaHmkV7Z5w1WVCVW9OxbUt_AagVOVHW_d234iIRW6daMzNG2smomQm7JatnCcAVenEBUz3qBMh6yZ45W5unxRcn7cqXWLz0lsXFlexuoZuGPUaj3zxCiLZ8d357kFvxMxMssRapfr0E_G1byeN9nOQNKRp","state_ver_key":"SCHNORR_VER_KEY~7nMR1Q6NekFNRqGdYlahjDrU-53laZ8CZeSK6UMOZAyVAK662M9m9-a4Z-XqB9lfqIDIkSdf7E9Egk_KDfDlJ9o","stake":"0x15af1d78b58c400000","commission":130,"delegators":{"0x5e661b79fe2d3f6ce70f5aac07d8cd9abb2743f1":"0x15af1d78b58c400000"}},"0x61097ba76cd906d2ba4fd106e757f7eb455fc295":{"account":"0x61097BA76cD906d2ba4FD106E757f7Eb455fc295","stake_table_key":"BLS_VER_KEY~vwNZL5rU6wGCuOy30Xa9n3lFXJttQCD_rANGqFLZJy5TiQJS6Qc-JL-eyP_HVSnowzplfo3Gs8vmMrIL_jMwF43DMcn55drU3QC4yQRWxun6mXHoDSaXbByBdNXwmFAdD7fW6pNn84a0rZphp8MUshO6OdIrHk8RlvCk_E-sBQ8R","state_ver_key":"SCHNORR_VER_KEY~TLltPAWf8roNMaOPTB9A-rro0v23YOXYDE9u-lShCR61V-Rt3O0gFoJiogCklHQxEoPj6neeH4fgg1Y0rdwZDlc","stake":"0x1b1ae4d6e2ef500000","commission":140,"delegators":{"0x61097ba76cd906d2ba4fd106e757f7eb455fc295":"0x1b1ae4d6e2ef500000"}},"0xdf37f81daad2b0327a0a50003740e1c935c70913":{"account":"0xDf37F81dAAD2b0327A0A50003740e1C935C70913","stake_table_key":"BLS_VER_KEY~c1umxNjnCB_hv-Dp5x9f-xKRFGKMkirBJ5FM5fPg_SVyKsL7-L4Ck9Nbn07LirWRVsITXOLthnEiyV8zU8v4G8SjloCxndsebX5ceCe99ouBSdWKrX-3HCLVVRu3nHECMyyLsfkFXJ4jArj32mypkyRvIl1LCad2BqdrBcCUdwUj","state_ver_key":"SCHNORR_VER_KEY~wwKnID5q18ep0hq6W7o-7wrMDXZTrgfnQYgepVae-wGAuG6Tk6SxKFOfRvkDdGaxc3t_OZ_n_5BJGtnSgwhLJ78","stake":"0x56bc75e2d63100000","commission":150,"delegators":{"0xdf37f81daad2b0327a0a50003740e1c935c70913":"0x56bc75e2d63100000"}},"0x553bc17a05702530097c3677091c5bb47a3a7931":{"account":"0x553BC17A05702530097c3677091C5BB47a3a7931","stake_table_key":"BLS_VER_KEY~spX3M9wYMTmD3tab2OmJZ9mWZ9JoVowwmlgdQSzQeQVpb2Rk5n3lV6NFLQIX9CU8N3EY0pLiq0QSs-r18adEJRgQ3lwkNeyVdP9ygEPywjd7BP8_cKhB3tGkGY-QUM4JurjNycKMqe2ll-fr9Efwe3aEZrVraQ6jnCrVxoVaoAxI","state_ver_key":"SCHNORR_VER_KEY~UhNBmtpJwHb3S6q8PNAJyLsFM2XGNvxF2WHn1FW8nR6EXtgn4sh27Jd-Rl2JHqQjJDIyiv4ShcT8eNXYCWFPBMU","stake":"0xad78ebc5ac6200000","commission":160,"delegators":{"0x553bc17a05702530097c3677091c5bb47a3a7931":"0xad78ebc5ac6200000"}},"0x87bdce72c06c21cd96219bd8521bdf1f42c78b5e":{"account":"0x87BdCE72c06C21cd96219BD8521bDF1F42C78b5e","stake_table_key":"BLS_VER_KEY~l7zCaYVtwUonbbjI4sCoIWMFRzyxIrbBPi4YLB8kgRrcXNV1lnzrBE46aBnL53ClAml7Zdu8MqXYfkYJjL4TB8Xu5iaaE8eBL4TBXWlFDIdAFX1yVfsdfEdOgXMoY8sXCyp3lSqBzdE1VOvUhN7T4BzeyQzvEG_mSiEBoeAzU6Si","state_ver_key":"SCHNORR_VER_KEY~otOjmDNCPM5CWaUjuS-F4dyv0lTLnURQZ85VI16oFhz-ReDtSe1FlbcSAIAtM8QFzjtVhpQTPDUDVt8qT2mqAv4","stake":"0x1043561a8829300000","commission":170,"delegators":{"0x87bdce72c06c21cd96219bd8521bdf1f42c78b5e":"0x1043561a8829300000"}},"0x40fc963a729c542424cd800349a7e4ecc4896624":{"account":"0x40Fc963A729c542424cD800349a7E4Ecc4896624","stake_table_key":"BLS_VER_KEY~4EUfjINdNHRUd8StbsAXX-FWWUHzWBBCR2-Fyy7kVSYtrJ-dwsTb6kgN-PyQkNwGpues4SVVscUNFO64G-xhFQNIw0tJf2lcGa0siqBNq0gJIBSgIh5mzFAwIoCTxd4phmdCsnl8IexJA6_z0l1kEc7NLJoPJg0iQKx2OaAnAw1X","state_ver_key":"SCHNORR_VER_KEY~r7PVea-fE9BQPKMjcsnUQ7EQbpV0Ug-kvcDn_JUK3yhjD31SsH6tE6Iuc3mYDumzcfzZCf9B3RWcZJFen-BSLrI","stake":"0x15af1d78b58c400000","commission":180,"delegators":{"0x40fc963a729c542424cd800349a7e4ecc4896624":"0x15af1d78b58c400000"}},"0x9dcce783b6464611f38631e6c851bf441907c710":{"account":"0x9DCCe783B6464611f38631e6C851bf441907c710","stake_table_key":"BLS_VER_KEY~QM_ZEKUVz-f-GDSs01iFaPaVcldrQhYazqEV2u2uHQktpoNEQxWTu4EFLsT5RjrHF8jauheW4CMP9tn_t4gfIF9P7SPc4ELiTcJ7PQe5rihXfqNFJFXEbJUodX1sMQIM3oqoUPYdCDa-Ge2P3BQJxh6YOrEubH0BpzTXn17CtwNG","state_ver_key":"SCHNORR_VER_KEY~KGMmPGswouTEgKhC7V_R8EuQJZRTBzrrdtzDSTzLTQ6GIvfQHvL_AiXC0JU3Oo5q7xp52PNi33kFv0mMRihlIf4","stake":"0x1b1ae4d6e2ef500000","commission":190,"delegators":{"0x9dcce783b6464611f38631e6c851bf441907c710":"0x1b1ae4d6e2ef500000"}}}';
      const codec = MapObjectCodec.keyStringCodec(validatorCodec);

      const raw = JSON.parse(input);
      const decoded = codec.decode(raw);
      const encoded = codec.encode(decoded);

      for (const [key, value] of Object.entries(raw)) {
        expect(encoded[key]).toEqual(value);
      }

      // Specific entry checks
      const validator = decoded.get(
        '0x09db0a93b389bef724429898f539aeb7ac2dd55f',
      );

      expect(validator).toBeDefined();
      if (!validator) {
        return;
      }

      expect(validator.account.toString()).toEqual(
        '0x09DB0a93B389bEF724429898f539AEB7ac2Dd55f',
      );
      expect(validator.stakeTableKey.toString()).toEqual(
        'BLS_VER_KEY~64_Y8QFPwAVvCZ5wTwt0i84X3Q1QP7klDfrfnmGf0Csf-MxquDLjT_R0ekVjRt3Vgi_q3psgOk2JMt7hG9kLEmn_KZ54T4wpV28JcxPcvdv33u5HiwYV2j3WOMfQUK0ACgrGMxyRtgjB2_N4MAaRhmbi8l1TnggtkX1w1GmKfhSc',
      );
      expect(validator.stateVerKey.toString()).toEqual(
        'SCHNORR_VER_KEY~SH_6UHYUqQYsJEHKxSSmKZxXYApnLKho21-0aUSi0xmDxqm7ooRNpI5xpFdHSQReY1n0g4w9SIKjJK4HG92NIKc',
      );
      expect(validator.stake).toEqual(100000000000000000000n);
      expect(validator.commission.value).toEqual(100);
      expect(
        validator.delegators.get('0x09db0a93b389bef724429898f539aeb7ac2dd55f'),
      ).toEqual(100000000000000000000n);
    });
  });
});
