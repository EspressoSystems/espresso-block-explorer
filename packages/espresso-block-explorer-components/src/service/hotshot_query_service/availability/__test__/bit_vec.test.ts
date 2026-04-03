import { describe, expect, it } from 'vitest';
import { BitVec } from '../bit_vec';
import { BitVecHead } from '../bit_vec_head';
import { BitVecOrder } from '../bit_vec_order';

describe('BitVec', () => {
  describe('u8', () => {
    describe('Lsb0', () => {
      describe('Iterator', () => {
        it('should return in the correct order', () => {
          const bitVec = new BitVec(
            BitVecOrder.lsb0,
            new BitVecHead(8, 0),
            20,
            [0b11111010n, 0b11110000n, 0b00000111n],
          );

          expect(Array.from(bitVec)).toStrictEqual([
            false,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
          ]);
        });
      });
    });

    describe('Msb0', () => {
      describe('Iterator', () => {
        it('should return in the correct order', () => {
          const bitVec = new BitVec(
            BitVecOrder.msb0,
            new BitVecHead(8, 0),
            20,
            [0b11111010n, 0b11110000n, 0b00000111n],
          );

          expect(Array.from(bitVec)).toStrictEqual([
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            false,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ]);
        });
      });
    });
  });

  describe('u16', () => {
    describe('Lsb0', () => {
      describe('Iterator', () => {
        it('should return in the correct order', () => {
          const bitVec = new BitVec(
            BitVecOrder.lsb0,
            new BitVecHead(16, 0),
            20,
            [0b11111010_11110000n, 0b00000111_00000000n],
          );

          expect(Array.from(bitVec)).toStrictEqual([
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            false,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
          ]);
        });
      });
    });

    describe('Msb0', () => {
      describe('Iterator', () => {
        it('should return in the correct order', () => {
          const bitVec = new BitVec(
            BitVecOrder.msb0,
            new BitVecHead(16, 0),
            20,
            [0b11111010_11110000n, 0b00000111_00000000n],
          );

          expect(Array.from(bitVec)).toStrictEqual([
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            false,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ]);
        });
      });
    });
  });
});
