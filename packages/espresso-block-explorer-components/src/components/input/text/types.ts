import { assert } from '@/assert/assert';

/**
 * TextRange represents a range of characters / bytes within a text string.
 */
export class TextRange {
  public readonly start: number;
  public readonly end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  static empty = TextRange.collapsed(-1);

  /**
   * A text range that starts and ends at the same offset, representing a
   * collapsed position (e.g., cursor position).
   */
  static collapsed(offset: number): TextRange {
    return new TextRange(offset, offset);
  }

  /**
   * Whether this range is empty (but still potentially placed inside the text).
   */
  get isCollapsed(): boolean {
    return this.start === this.end;
  }

  /**
   * Whether the start of this range precedes the end.
   */
  get isNormalized(): boolean {
    return this.start <= this.end;
  }

  /**
   * Whether this range represents a valid position in the text.
   */
  get isValid(): boolean {
    return this.start >= 0 && this.end >= 0;
  }

  /**
   * The text after this range within the provided text.
   */
  textAfter(text: string): string {
    assert(this.isNormalized, 'TextRange must be normalized');
    return text.slice(this.end);
  }

  /**
   * The text before this range within the provided text.
   */
  textBefore(text: string): string {
    assert(this.isNormalized, 'TextRange must be normalized');
    return text.slice(0, this.start);
  }

  /**
   * The text within this range within the provided text.
   */
  textWithin(text: string): string {
    assert(this.isNormalized, 'TextRange must be normalized');
    return text.slice(this.start, this.end);
  }
}

/**
 * TextSelection represents a selection of text within a string, defined by
 * a base offset and an extent offset. The base offset is the starting point of
 * the selection, and the extent offset is the ending point of the selection.
 */
export class TextSelection extends TextRange {
  public readonly baseOffset: number;
  public readonly extentOffset: number;
  // Affinity?
  public readonly isDirectional: boolean;

  constructor(
    baseOffset: number,
    extentOffset: number,
    isDirectional: boolean = false,
  ) {
    super(
      baseOffset < extentOffset ? baseOffset : extentOffset,
      baseOffset < extentOffset ? extentOffset : baseOffset,
    );
    this.baseOffset = baseOffset;
    this.extentOffset = extentOffset;
    this.isDirectional = isDirectional;
  }

  static collapsed(offset: number): TextSelection {
    return new TextSelection(offset, offset);
  }

  static fromPosition(position: number): TextSelection {
    return new TextSelection(position, position);
  }

  copyWith({
    baseOffset = this.baseOffset,
    extentOffset = this.extentOffset,
    isDirectional = this.isDirectional,
  }: Partial<TextSelection> = {}): TextSelection {
    return new TextSelection(baseOffset, extentOffset, isDirectional);
  }

  expandTo(position: number, extentAtIndex: boolean = false): TextSelection {
    // If the position is already within the selection there's nothing to do.
    if (position >= this.start && position <= this.end) {
      return this;
    }

    const normalized = this.baseOffset < this.extentOffset;
    if (position <= this.start) {
      // Here the position is somewhere before the selection.
      if (extentAtIndex) {
        return this.copyWith({
          baseOffset: this.end,
          extentOffset: position,
        });
      }

      return this.copyWith({
        baseOffset: normalized ? position : this.baseOffset,
        extentOffset: normalized ? this.extentOffset : position,
      });
    }

    // Here the position is somewhere after the selection.
    if (extentAtIndex) {
      return this.copyWith({
        baseOffset: this.start,
        extentOffset: position,
      });
    }

    return this.copyWith({
      baseOffset: normalized ? this.baseOffset : position,
      extentOffset: normalized ? position : this.extentOffset,
    });
  }

  extendTo(position: number): TextSelection {
    // If the selection's extent is at the position already, then nothing
    // needs to be done.
    if (this.extentOffset === position) {
      return this;
    }

    return this.copyWith({
      extentOffset: position,
    });
  }
}

/**
 * TextEditingValue represents the current value of a text input field,
 * including the text content, the selection range, and any composing text.
 */
export class TextEditingValue {
  public readonly text: string;
  public readonly selection: TextSelection;
  public readonly composing: TextRange;

  constructor(
    text: string,
    selection: TextSelection = TextSelection.collapsed(-1),
    composing: TextRange = TextRange.empty,
  ) {
    this.text = text;
    this.selection = selection;
    this.composing = composing;
  }

  copyWith({
    text = this.text,
    selection = this.selection,
    composing = this.composing,
  }: Partial<TextEditingValue> = {}): TextEditingValue {
    return new TextEditingValue(text, selection, composing);
  }
}

/**
 * TextInputFormatter is an interface for formatting text input values.
 * It provides a method to format the text editing value based on the old
 * and new values.
 */
export interface TextInputFormatter {
  formatEditUpdate(
    oldValue: TextEditingValue,
    newValue: TextEditingValue,
  ): TextEditingValue;
}
