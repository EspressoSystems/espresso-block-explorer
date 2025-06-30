import { Channel } from './Channel';
/**
 * createBufferedChannel creates a new BufferedChannel that has a capacity of
 * the specified size.
 */
export declare function createBufferedChannel<T>(size: number): Channel<T>;
