import { describe, it } from 'vitest';
import { cappuccinoLatestNodeIdentityCodec } from '../latest_node_identity';
import { cappuccinoNodeValidatorResponseCodec } from '../node_validator_response_codec';

describe('LatestNodeIdentity', () => {
  it('should decode from json', () => {
    const rawString =
      '{"LatestNodeIdentity":{"public_key":"BLS_VER_KEY~rO2PIjyY30HGfapFcloFe3mNDKMIFi6JlOLkH5ZWBSYoRm5fE2-Rm6Lp3EvmAcB5r7KFJ0c1Uor308x78r04EY_sfjcsDCWt7RSJdL4cJoD_4fSTCv_bisO8k98hs_8BtqQt8BHlPeJohpUXvcfnK8suXJETiJ6Er97pfxRbzgAL","name":"sequencer3","wallet_address":"0x0000000000000000000000000000000000000003","public_url":null,"company":"Espresso Systems","company_website":"https://espressosys.com/","location":{"coords":[35.8617,104.1954],"country":"CN"},"operating_system":"Microsoft Windows NT 10.0.22621.0","node_type":"espresso-sequencer 0.1","network_type":"local"}}';

    const response = cappuccinoLatestNodeIdentityCodec.decode(
      JSON.parse(rawString),
    );

    expect(response.nodeIdentity).not.toBe(null);

    {
      // Latest Node Identity
      const nodeIdentity = response.nodeIdentity;

      expect(nodeIdentity.name).toBe('sequencer3');
      expect(nodeIdentity.publicURL).toBe(null);
      expect(nodeIdentity.company).toBe('Espresso Systems');
      expect(nodeIdentity.companyWebsite?.toString()).toBe(
        'https://espressosys.com/',
      );
      expect(nodeIdentity.location).not.toBe(null);
      expect(nodeIdentity.location?.coords?.lat.valueOf()).toBe(35.8617);
      expect(nodeIdentity.location?.coords?.lng.valueOf()).toBe(104.1954);
      expect(nodeIdentity.location?.country).toBe('CN');
      expect(nodeIdentity.operatingSystem).toBe(
        'Microsoft Windows NT 10.0.22621.0',
      );
      expect(nodeIdentity.nodeType).toBe('espresso-sequencer 0.1');
      expect(nodeIdentity.networkType).toBe('local');
    }

    expect(response.toJSON()).toStrictEqual(
      cappuccinoLatestNodeIdentityCodec.encode(response),
    );

    expect(
      cappuccinoNodeValidatorResponseCodec.decode(JSON.parse(rawString)),
    ).toStrictEqual(
      cappuccinoLatestNodeIdentityCodec.decode(JSON.parse(rawString)),
    );

    expect(cappuccinoNodeValidatorResponseCodec.encode(response)).toStrictEqual(
      cappuccinoLatestNodeIdentityCodec.encode(response),
    );
  });
});
