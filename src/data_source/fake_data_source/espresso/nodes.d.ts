import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { PseudoRandomNumberGenerator } from '../prng';
export type GeneratedNodeIdentityInformation = {
    pubkey: TaggedBase64;
    stateVerKey: TaggedBase64;
    stake: bigint;
    commission: number;
    address: ArrayBuffer;
    name: string;
    company: {
        name: string;
        website: string;
    };
    location: {
        coords: [number, number];
        country: string;
    };
    operatingSystem: string;
    networkType: string;
    nodeType: string;
};
export declare function generateAllNodeIdentityInformationData(prng?: PseudoRandomNumberGenerator): Generator<GeneratedNodeIdentityInformation>;
export declare const nodeList: GeneratedNodeIdentityInformation[];
