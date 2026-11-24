import { default as React } from 'react';
import { EpochDuration, ReliabilityStatus } from './reliability';
import { ValidatorHistory } from './sample_history';
/**
 * useEpochDuration converts epochs to time. It uses the epoch length from
 * the validator history file, which is there as soon as the file loads, or
 * else the network's blocks per epoch and its measured block time. It is
 * null until one of them is known, since the default block time can be off
 * several times over, which would put the wrong epochs in "the last 24
 * hours".
 */
export declare function useEpochDuration(): null | EpochDuration;
/**
 * ReliabilityStatusChip labels a status with an icon and text, so it never
 * relies on color alone. Other views reuse the steps with their own labels.
 */
export declare const ReliabilityStatusChip: React.FC<{
    status: ReliabilityStatus;
    label?: string;
}>;
/**
 * StatusVerdict is a status chip next to a one-line headline and a line of
 * detail.
 */
export declare const StatusVerdict: React.FC<{
    status: null | ReliabilityStatus;
    label?: string;
    headline: string;
    detail?: string;
}>;
export declare const joined: (parts: (null | false | string)[]) => string;
export declare const capitalized: (text: string) => string;
/**
 * ReliabilityOverview is the reliability view: how many slots the
 * validator missed in the latest epochs against the network, then those
 * epochs as cells with the latest on the right. The compact form, for the
 * popup, adds the legend.
 */
export declare const ReliabilityOverview: React.FC<{
    history: ValidatorHistory;
    compact?: boolean;
}>;
