/**
 * Sink is a simple interface that represents the ability to send Requests
 * to some consumer.
 */
export interface Sink<Request> {
    send(request: Request): Promise<void>;
}
/**
 * Source is a simple interface that represents a stream of Responses that
 * can be consumed from some producer.
 */
export interface Source<Response> {
    readonly stream: AsyncIterable<Response>;
}
/**
 * InscriptionAPI is an extremely simplified definition that attempts to wrap
 * the basic underlying functionality of the Inscription API. This
 * functionality can best be thought of as the ability to received a continual
 * stream of discrete events / updates, and the ability to send requests for
 * those events / updates.
 *
 * This API is defined extremely generally for extra flexibility.  In general
 * this definitions merely represents a bi-direction pipe / Stream.
 */
export interface InscriptionAPI<Request, Response> extends Source<Response>, Sink<Request> {
    /**
     * stream is an AsyncIterator that will yield Responses from the Inscription
     * API. These responses are meant to be self identifying in such that they
     * can be considered an enumeration of different response types.  They should
     * also only contain information that was explicitly requested by the client.
     *
     * There may be an implicit registration for certain types of responses, such
     * as heart beats, or hand shakes.
     */
    get stream(): AsyncIterable<Response>;
    /**
     * send is a method that will send a request to the Inscription API. The
     * Request types is meant to be self identifying in such that it can be
     * considered an enumeration of different request types.
     */
    send(request: Request): Promise<void>;
}
