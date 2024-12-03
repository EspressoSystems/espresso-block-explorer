/**
 * Endianess is an enum that represents the byte order of a binary data.
 */
export abstract class Endianess {
  static get big(): Endianess {
    return BigEndian.instance;
  }

  static get little(): Endianess {
    return LittleEndian.instance;
  }

  get isLittleEndian(): boolean {
    return this === LittleEndian.instance;
  }

  get isBigEndian(): boolean {
    return this === BigEndian.instance;
  }
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
export class BigEndian extends Endianess {
  static readonly instance = new BigEndian();
}

/**
 * LittleEndian is an instance of Endianess that represents the little-endian
 * byte order.
 *
 * This means that the least significant byte is stored at the lowest memory
 * address.
 */
export class LittleEndian extends Endianess {
  static readonly instance = new LittleEndian();
}
