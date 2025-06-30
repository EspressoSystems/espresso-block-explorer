export declare class Keccak {
    private _rate;
    private _capacity;
    private _delimitedSuffix;
    private _hashBitLength;
    private _state;
    private _finalized;
    constructor(rate: number, capacity: number, delimitedSuffix: null | number, hashBitLength: number);
    update(data: ArrayBuffer): Keccak;
    digest(): ArrayBuffer;
    _resetState(): this;
}
