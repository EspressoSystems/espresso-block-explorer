/**
 * Source is a simple interface that represents a stream of Responses that
 * can be consumed from some producer.
 */
export interface Source<Response> {
    readonly stream: AsyncIterable<Response>;
}
