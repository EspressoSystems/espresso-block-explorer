import { Channel } from './channel';
/**
 * createBufferedChannel creates a new BufferedChannel that has a capacity of
 * the specified size.
 */
export declare function createBufferedChannel<T>(size: number): Channel<T>;
