import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso';
import { default as React } from '../../../../../../node_modules/react';

export interface NodeSummaryData {
    publicKey: TaggedBase64;
    name: null | string;
    companyDetails: null | {
        name: null | string;
        website: null | string;
    };
    location: {
        coords: null | [number, number];
        country: null | string;
    };
}
export declare enum NodeSummaryColumn {
    publicKey = "publicKey",
    name = "name",
    address = "address",
    companyName = "companyName",
    companyWebSite = "companyWebSite",
    location = "location",
    stake = "stake",
    uptime = "uptime",
    voteParticipation = "voteParticipation"
}
export interface NodeVoteParticipationStats {
    voteParticipation: number;
    totalVotes: number;
}
export declare const NodeSummaryStreamContext: React.Context<AsyncIterable<NodeSummaryData[]>>;
export declare const VoterParticipationStreamContext: React.Context<AsyncIterable<NodeVoteParticipationStats[]>>;
export declare const VotersParticipationStatsContext: React.Context<NodeVoteParticipationStats[]>;
interface VotersParticipationStatesProviderProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const VotersParticipationStatesProvider: React.FC<VotersParticipationStatesProviderProps>;
interface VotersParticipationStatsConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const VotersParticipationStatsConsumer: React.FC<VotersParticipationStatsConsumerProps>;
interface NodeSummaryStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const NodeSummaryStreamConsumer: React.FC<NodeSummaryStreamConsumerProps>;
export {};
