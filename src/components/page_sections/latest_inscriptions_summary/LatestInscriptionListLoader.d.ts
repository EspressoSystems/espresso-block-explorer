import { default as InscriptionAndChainDetails } from '../../../../../../../../../../../src/service/inscription/cappuccino/inscription_and_chain_details';
import { default as React } from '../../../../../../node_modules/react';

/**
 * The LatestInscriptionsProvider is a React context that is used to store the
 * Inscription list.  This context can be used to retrieve the latest
 * inscriptions. It is expected to be used to retrieve the data asynchronously.
 */
export declare const LatestInscriptionListProvider: React.Context<InscriptionAndChainDetails[]>;
export declare const InscriptionAndChainDetailsContext: React.Context<InscriptionAndChainDetails>;
/**
 * The LatestInscriptionListStreamContext is a React context that is used to
 * store the latest Inscriptions List.  This data can be used to stream
 * the latest Inscriptions List.
 */
export declare const LatestInscriptionListStreamContext: React.Context<AsyncIterable<InscriptionAndChainDetails[]>>;
interface LatestInscriptionListStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * LatestInscriptionListStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export declare const LatestInscriptionListStreamConsumer: React.FC<LatestInscriptionListStreamConsumerProps>;
export {};
