import { DataContext, ErrorCarry, ErrorJoiner } from '@/components/contexts';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import { TaggedBase64 } from '@/models/espresso';
import React from 'react';

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

export enum NodeSummaryColumn {
  publicKey = 'publicKey',
  name = 'name',
  address = 'address',
  companyName = 'companyName',
  companyWebSite = 'companyWebSite',
  location = 'location',
  stake = 'stake',
  uptime = 'uptime',
  voteParticipation = 'voteParticipation',
}

export interface NodeVoteParticipationStats {
  voteParticipation: number;
  totalVotes: number;
}

export const NodeSummaryStreamContext = React.createContext<
  AsyncIterable<NodeSummaryData[]>
>(unimplementedAsyncIterable());

export const VoterParticipationStreamContext = React.createContext<
  AsyncIterable<NodeVoteParticipationStats[]>
>(unimplementedAsyncIterable());

export const VotersParticipationStatsContext = React.createContext<
  NodeVoteParticipationStats[]
>([]);

interface VotersParticipationStatesProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const VotersParticipationStatesProvider: React.FC<
  VotersParticipationStatesProviderProps
> = (props) => {
  const data = React.useContext(DataContext) as
    | null
    | NodeVoteParticipationStats[];

  return (
    <VotersParticipationStatsContext.Provider value={data ?? []}>
      {props.children}
    </VotersParticipationStatsContext.Provider>
  );
};

interface VotersParticipationStatsConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const VotersParticipationStatsConsumer: React.FC<
  VotersParticipationStatsConsumerProps
> = (props) => {
  const stream = React.useContext(VoterParticipationStreamContext);
  // const stats = React.useContext(VotersParticipationStatsContext);

  return (
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <VotersParticipationStatesProvider>
          <ErrorJoiner>{props.children}</ErrorJoiner>
        </VotersParticipationStatesProvider>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};

interface NodeSummaryStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const NodeSummaryStreamConsumer: React.FC<
  NodeSummaryStreamConsumerProps
> = (props) => {
  const stream = React.useContext(NodeSummaryStreamContext);

  return (
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
