import { describe, it } from 'vitest';
import { cappuccinoNodeIdentitySnapshotCodec } from '../node_identity_snapshot';
import { cappuccinoNodeValidatorResponseCodec } from '../node_validator_response_codec';

function populateWalletAddress(lastByte: number): ArrayBuffer {
  const walletAddress = new Uint8Array(20);
  walletAddress.fill(0);
  walletAddress[19] = lastByte;
  return walletAddress.buffer;
}

describe('NodeIdentitySnapshot', () => {
  it('should decode from json', () => {
    const rawString =
      '{"NodeIdentitySnapshot":[{"public_key":"BLS_VER_KEY~r6b-Cwzp-b3czlt0MHmYPJIow5kMsXbrNmZsLSYg9RV49oCCO4WEeCRFR02x9bqLCa_sgNFMrIeNdEa11qNiBAohApYFIvrSa-zP5QGj3xbZaMOCrshxYit6E2TR-XsWvv6gjOrypmugjyTAth-iqQzTboSfmO9DD1-gjJIdCaD7","name":null,"wallet_address":null,"public_url":null,"company":null,"location":null,"operating_system":null,"node_type":null,"network_type":null},{"public_key":"BLS_VER_KEY~IBRoz_Q1EXvcm1pNZcmVlyYZU8hZ7qmy337ePAjEMhz8Hl2q8vWPFOd3BaLwgRS1UzAPW3z4E-XIgRDGcRBTAMZX9b_0lKYjlyTlNF2EZfNnKmvv-xJ0yurkfjiveeYEsD2l5d8q_rJJbH1iZdXy-yPEbwI0SIvQfwdlcaKw9po4","name":null,"wallet_address":null,"public_url":null,"company":null,"location":null,"operating_system":null,"node_type":null,"network_type":null},{"public_key":"BLS_VER_KEY~rO2PIjyY30HGfapFcloFe3mNDKMIFi6JlOLkH5ZWBSYoRm5fE2-Rm6Lp3EvmAcB5r7KFJ0c1Uor308x78r04EY_sfjcsDCWt7RSJdL4cJoD_4fSTCv_bisO8k98hs_8BtqQt8BHlPeJohpUXvcfnK8suXJETiJ6Er97pfxRbzgAL","name":"sequencer3","wallet_address":"0x0000000000000000000000000000000000000003","public_url":null,"company":"Espresso Systems","location":{"coords":[35.8617,104.1954],"country":"CN"},"operating_system":"Microsoft Windows NT 10.0.22621.0","node_type":"espresso-sequencer 0.1","network_type":"local"},{"public_key":"BLS_VER_KEY~bQszS-QKYvUij2g20VqS8asttGSb95NrTu2PUj0uMh1CBUxNy1FqyPDjZqB29M7ZbjWqj79QkEOWkpga84AmDYUeTuWmy-0P1AdKHD3ehc-dKvei78BDj5USwXPJiDUlCxvYs_9rWYhagaq-5_LXENr78xel17spftNd5MA1Mw5U","name":"sequencer0","wallet_address":"0x0000000000000000000000000000000000000000","public_url":null,"company":"Espresso Systems","location":{"coords":[40.7128,-74.006],"country":"US"},"operating_system":"Linux 5.15.153.1","node_type":"espresso-sequencer 0.1","network_type":"local"},{"public_key":"BLS_VER_KEY~4zQnaCOFJ7m95OjxeNls0QOOwWbz4rfxaL3NwmN2zSdnf8t5Nw_dfmMHq05ee8jCegw6Bn5T8inmrnGGAsQJMMWLv77nd7FJziz2ViAbXg-XGGF7o4HyzELCmypDOIYF3X2UWferFE_n72ZX0iQkUhOvYZZ7cfXToXxRTtb_mwRR","name":"sequencer1","wallet_address":"0x0000000000000000000000000000000000000001","public_url":null,"company":"Espresso Systems","location":{"coords":[39.0742,21.8243],"country":"GR"},"operating_system":"Darwin 23.5.0","node_type":"espresso-sequencer 0.1","network_type":"local"},{"public_key":"BLS_VER_KEY~IBRoz_Q1EXvcm1pNZcmVlyYZU8hZ7qmy337ePAjEMhz8Hl2q8vWPFOd3BaLwgRS1UzAPW3z4E-XIgRDGcRBTAIGlhxgi93kY9qWMMzTmG6T1LRaSujLc7T67sqjD1H0rl7_X8jZhIolDXvQFLJWOmzmUEX-C_cTnqZjMb9CdbRUt","name":null,"wallet_address":null,"public_url":null,"company":null,"location":null,"operating_system":null,"node_type":null,"network_type":null},{"public_key":"BLS_VER_KEY~r6b-Cwzp-b3czlt0MHmYPJIow5kMsXbrNmZsLSYg9RV49oCCO4WEeCRFR02x9bqLCa_sgNFMrIeNdEa11qNiBD3cekIRaiZpId6hgo_HoYCE773-B33eVf4lHn2hVOgZif7bSyyZedDsOk2o2krf7VCFEv0WrWB0GkGRVOAwWxCV","name":null,"wallet_address":null,"public_url":null,"company":null,"location":null,"operating_system":null,"node_type":null,"network_type":null}]}';

    const response = cappuccinoNodeIdentitySnapshotCodec.decode(
      JSON.parse(rawString),
    );

    expect(response.nodes.length).toBe(7);
    const nodeIterator = response.nodes[Symbol.iterator]();

    {
      // Node 0
      const next = nodeIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a node');
      }
      const node0 = next.value;

      expect(node0.name).toBe(null);
      expect(node0.walletAddress).toBe(null);
      expect(node0.publicURL).toBe(null);
      expect(node0.company).toBe(null);
      expect(node0.location).toBe(null);
      expect(node0.operatingSystem).toBe(null);
      expect(node0.nodeType).toBe(null);
      expect(node0.networkType).toBe(null);
    }

    {
      // Node 1
      const next = nodeIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a node');
      }
      const node1 = next.value;

      expect(node1.name).toBe(null);
      expect(node1.walletAddress).toBe(null);
      expect(node1.publicURL).toBe(null);
      expect(node1.company).toBe(null);
      expect(node1.location).toBe(null);
      expect(node1.operatingSystem).toBe(null);
      expect(node1.nodeType).toBe(null);
      expect(node1.networkType).toBe(null);
    }

    {
      // Node 2
      const next = nodeIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a node');
      }
      const node2 = next.value;

      expect(node2.name).toBe('sequencer3');
      expect(node2.walletAddress).toStrictEqual(populateWalletAddress(3));
      expect(node2.publicURL).toBe(null);
      expect(node2.company).toBe('Espresso Systems');
      expect(node2.location).not.toBe(null);
      expect(node2.location?.coords.lat.valueOf()).toBe(35.8617);
      expect(node2.location?.coords.lng.valueOf()).toBe(104.1954);
      expect(node2.location?.country).toBe('CN');
      expect(node2.operatingSystem).toBe('Microsoft Windows NT 10.0.22621.0');
      expect(node2.nodeType).toBe('espresso-sequencer 0.1');
      expect(node2.networkType).toBe('local');
    }
    {
      // Node 3
      const next = nodeIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a node');
      }
      const node3 = next.value;

      expect(node3.name).toBe('sequencer0');
      expect(node3.walletAddress).toStrictEqual(populateWalletAddress(0));
      expect(node3.publicURL).toBe(null);
      expect(node3.company).toBe('Espresso Systems');
      expect(node3.location).not.toBe(null);
      expect(node3.location?.coords.lat.valueOf()).toBe(40.7128);
      expect(node3.location?.coords.lng.valueOf()).toBe(-74.006);
      expect(node3.location?.country).toBe('US');
      expect(node3.operatingSystem).toBe('Linux 5.15.153.1');
      expect(node3.nodeType).toBe('espresso-sequencer 0.1');
      expect(node3.networkType).toBe('local');
    }

    {
      // Node 4
      const next = nodeIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a node');
      }
      const node4 = next.value;

      expect(node4.name).toBe('sequencer1');
      expect(node4.walletAddress).toStrictEqual(populateWalletAddress(1));
      expect(node4.publicURL).toBe(null);
      expect(node4.company).toBe('Espresso Systems');
      expect(node4.location).not.toBe(null);
      expect(node4.location?.coords.lat.valueOf()).toBe(39.0742);
      expect(node4.location?.coords.lng.valueOf()).toBe(21.8243);
      expect(node4.location?.country).toBe('GR');
      expect(node4.operatingSystem).toBe('Darwin 23.5.0');
      expect(node4.nodeType).toBe('espresso-sequencer 0.1');
      expect(node4.networkType).toBe('local');
    }

    {
      // Node 5
      const next = nodeIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a node');
      }
      const node5 = next.value;

      expect(node5.name).toBe(null);
      expect(node5.walletAddress).toBe(null);
      expect(node5.publicURL).toBe(null);
      expect(node5.company).toBe(null);
      expect(node5.location).toBe(null);
      expect(node5.operatingSystem).toBe(null);
      expect(node5.nodeType).toBe(null);
      expect(node5.networkType).toBe(null);
    }

    {
      // Node 6
      const next = nodeIterator.next();
      if (next.done) {
        throw new Error('iterator terminated without a node');
      }
      const node6 = next.value;

      expect(node6.name).toBe(null);
      expect(node6.walletAddress).toBe(null);
      expect(node6.publicURL).toBe(null);
      expect(node6.company).toBe(null);
      expect(node6.location).toBe(null);
      expect(node6.operatingSystem).toBe(null);
      expect(node6.nodeType).toBe(null);
      expect(node6.networkType).toBe(null);
    }

    expect(nodeIterator.next().done).toBe(true);
    expect(response.toJSON()).toStrictEqual(
      cappuccinoNodeIdentitySnapshotCodec.encode(response),
    );

    expect(
      cappuccinoNodeValidatorResponseCodec.decode(JSON.parse(rawString)),
    ).toStrictEqual(
      cappuccinoNodeIdentitySnapshotCodec.decode(JSON.parse(rawString)),
    );

    expect(cappuccinoNodeValidatorResponseCodec.encode(response)).toStrictEqual(
      cappuccinoNodeIdentitySnapshotCodec.encode(response),
    );
  });
});
