/**
 * Sink is a simple interface that represents the ability to send Requests
 * to some consumer.
 */
export interface Sink<Request> {
    send(request: Request): Promise<void>;
}
