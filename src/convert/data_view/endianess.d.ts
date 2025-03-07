/**
 * Endianess is an enum that represents the byte order of a binary data.
 */
export declare abstract class Endianess {
    static get big(): Endianess;
    static get little(): Endianess;
    get isLittleEndian(): boolean;
    get isBigEndian(): boolean;
}
/**
 * BigEndian is an instance of Endianess that represents the big-endian byte
 * order.
 *
 * This means that the most significant byte is stored at the lowest memory
 * address.
 *
 * This representation that is most familiar to our decimal based
 * representations where the largest digit is stored at the leftmost position.
 */
export declare class BigEndian extends Endianess {
    static readonly instance: BigEndian;
}
/**
 * LittleEndian is an instance of Endianess that represents the little-endian
 * byte order.
 *
 * This means that the least significant byte is stored at the lowest memory
 * address.
 */
export declare class LittleEndian extends Endianess {
    static readonly instance: LittleEndian;
}
