import { default as InscriptionAndChainDetails } from '../../../../../../../../../../../src/service/inscription/cappuccino/inscription_and_chain_details';
import { default as React } from '../../../../../../node_modules/react';

/**
 * The YourInscriptionsListStreamContext is a React context that is used to
 * store the latest Inscriptions List.  This data can be used to stream
 * the latest Inscriptions List.
 */
export declare const YourInscriptionsListStreamContext: React.Context<AsyncIterable<InscriptionAndChainDetails[]>>;
interface YourInscriptionsListStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * YourInscriptionsListStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export declare const YourInscriptionsListStreamConsumer: React.FC<YourInscriptionsListStreamConsumerProps>;
export {};
