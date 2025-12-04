/**
 * TextRange represents a range of characters / bytes within a text string.
 */
export declare class TextRange {
    readonly start: number;
    readonly end: number;
    constructor(start: number, end: number);
    static empty: TextRange;
    /**
     * A text range that starts and ends at the same offset, representing a
     * collapsed position (e.g., cursor position).
     */
    static collapsed(offset: number): TextRange;
    /**
     * Whether this range is empty (but still potentially placed inside the text).
     */
    get isCollapsed(): boolean;
    /**
     * Whether the start of this range precedes the end.
     */
    get isNormalized(): boolean;
    /**
     * Whether this range represents a valid position in the text.
     */
    get isValid(): boolean;
    /**
     * The text after this range within the provided text.
     */
    textAfter(text: string): string;
    /**
     * The text before this range within the provided text.
     */
    textBefore(text: string): string;
    /**
     * The text within this range within the provided text.
     */
    textWithin(text: string): string;
    /**
     * isEquivalentTo determines whether this range is equivalent to another
     * range.
     */
    isEquivalentTo(other: TextRange): boolean;
}
/**
 * TextSelection represents a selection of text within a string, defined by
 * a base offset and an extent offset. The base offset is the starting point of
 * the selection, and the extent offset is the ending point of the selection.
 */
export declare class TextSelection extends TextRange {
    readonly baseOffset: number;
    readonly extentOffset: number;
    readonly isDirectional: boolean;
    constructor(baseOffset: number, extentOffset: number, isDirectional?: boolean);
    static collapsed(offset: number): TextSelection;
    static fromPosition(position: number): TextSelection;
    copyWith({ baseOffset, extentOffset, isDirectional, }?: Partial<TextSelection>): TextSelection;
    expandTo(position: number, extentAtIndex?: boolean): TextSelection;
    extendTo(position: number): TextSelection;
    /**
     * isEquivalentTo determines whether this selection is equivalent to another
     * selection.
     */
    isEquivalentTo(other: TextSelection): boolean;
}
/**
 * TextEditingValue represents the current value of a text input field,
 * including the text content, the selection range, and any composing text.
 */
export declare class TextEditingValue {
    readonly text: string;
    readonly selection: TextSelection;
    readonly composing: TextRange;
    constructor(text: string, selection?: TextSelection, composing?: TextRange);
    copyWith({ text, selection, composing, }?: Partial<TextEditingValue>): TextEditingValue;
}
/**
 * TextInputFormatter is an interface for formatting text input values.
 * It provides a method to format the text editing value based on the old
 * and new values.
 */
export interface TextInputFormatter {
    formatEditUpdate(oldValue: TextEditingValue, newValue: TextEditingValue): TextEditingValue;
}
