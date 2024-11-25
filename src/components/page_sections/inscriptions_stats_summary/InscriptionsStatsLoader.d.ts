import { InscriptionStats } from '../../../../../../../../../../../src/service/inscription/cappuccino/inscription_stats';
import { default as React } from '../../../../../../node_modules/react';

/**
 * The InscriptionStatsProvider is a React context that is used to store the
 * Inscription Stats.  This context can be used to retrieve the most recent
 * inscription service stats. It is expected to be used to retrieve the data
 * asynchronously.
 */
export declare const InscriptionStatsProvider: React.Context<InscriptionStats>;
/**
 * The InscriptionsStatsStreamContext is a React context that is used to
 * store the latest Inscriptions List.  This data can be used to stream
 * the latest Inscriptions List.
 */
export declare const InscriptionsStatsStreamContext: React.Context<AsyncIterable<InscriptionStats>>;
interface InscriptionsStatsStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * InscriptionsStatsStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export declare const InscriptionsStatsStreamConsumer: React.FC<InscriptionsStatsStreamConsumerProps>;
export {};
