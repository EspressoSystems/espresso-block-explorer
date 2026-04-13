import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { AvailabilityVersion } from './version';
/**
 * UpgradeProposalDataV1 is the data that is utilized when attempting to
 * propose a protocol upgrade as defined by the HotShot Query Service's
 * Availability API.
 */
export declare class UpgradeProposalDataV1 {
    readonly old_version: AvailabilityVersion;
    readonly new_version: AvailabilityVersion;
    readonly decide_by: number;
    readonly new_version_hash: Uint8Array;
    readonly old_version_last_view: number;
    readonly new_version_first_view: number;
    constructor(old_version: AvailabilityVersion, new_version: AvailabilityVersion, decide_by: number, new_version_hash: Uint8Array, old_version_last_view: number, new_version_first_view: number);
    toJSON(): {
        old_version: unknown;
        new_version: unknown;
        decide_by: number;
        new_version_hash: `0x${string}`;
        old_version_last_view: number;
        new_version_first_view: number;
    };
}
export declare class UpgradePropsoalDataV1Decoder implements Converter<unknown, UpgradeProposalDataV1> {
    convert(input: unknown): UpgradeProposalDataV1;
}
export declare class UpgradeProposalDataV1Encoder implements Converter<UpgradeProposalDataV1> {
    convert(input: UpgradeProposalDataV1): {
        old_version: unknown;
        new_version: unknown;
        decide_by: number;
        new_version_hash: `0x${string}`;
        old_version_last_view: number;
        new_version_first_view: number;
    };
}
export declare class UpgradeProposalDataDataV1Codec extends TypeCheckingCodec<UpgradeProposalDataV1, ReturnType<InstanceType<new () => UpgradeProposalDataV1Encoder>['convert']>> {
    readonly encoder: UpgradeProposalDataV1Encoder;
    readonly decoder: UpgradePropsoalDataV1Decoder;
}
export declare const upgradeProposalDataV1Codec: UpgradeProposalDataDataV1Codec;
