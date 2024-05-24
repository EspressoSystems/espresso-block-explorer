/**
 * SVGPathInstruction represents the instructions that one can use when building
 * a string representation of a path for an SVG.
 */
interface SVGPathInstruction {
  instructionToString(): string;
}

/**
 * SVGPathInstructionBase is the base class for all SVGPathInstructions.  It
 * add some convenience implementations for the `toString` and `valueOf`
 * methods.
 */
abstract class SVGPathInstructionBase implements SVGPathInstruction {
  abstract instructionToString(): string;

  toString() {
    return this.instructionToString();
  }

  valueOf() {
    return this.instructionToString();
  }
}

/**
 * SVGPathInstructionMoveTo represents the `M` instruction in an SVG path.
 * This instruction moves the pen to the given `x` and `y` coordinates.
 */
class SVGPathInstructionMoveTo extends SVGPathInstructionBase {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  instructionToString() {
    return `M${this.x},${this.y}`;
  }
}

/**
 * SVGPathInstructionLineTo represents the `L` instruction in an SVG path.
 * This instruction draws a line from the current pen position to the given
 * `x` and `y` coordinates.
 */
class SVGPathInstructionLineTo extends SVGPathInstructionBase {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  instructionToString() {
    return `L${this.x},${this.y}`;
  }
}

/**
 * SVGPathInstructionArcTo represents the `A` instruction in an SVG path.
 * This instruction draws an arc from the current pen position to the given
 * `x` and `y` coordinates.
 */
class SVGPathInstructionArcTo extends SVGPathInstructionBase {
  private rx: number;
  private ry: number;
  private xAxisRotation: number;
  private largeArcFlag: number;
  private sweepFlag: number;
  private x: number;
  private y: number;

  constructor(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcFlag: number,
    sweepFlag: number,
    x: number,
    y: number,
  ) {
    super();
    this.rx = rx;
    this.ry = ry;
    this.xAxisRotation = xAxisRotation;
    this.largeArcFlag = largeArcFlag;
    this.sweepFlag = sweepFlag;
    this.x = x;
    this.y = y;
  }

  instructionToString(): string {
    return `A ${this.rx} ${this.ry} ${this.xAxisRotation} ${this.largeArcFlag} ${this.sweepFlag} ${this.x},${this.y}`;
  }
}

/**
 * SVGPathInstructionClose represents the `Z` instruction in an SVG path.
 */
class SVGPathInstructionClose extends SVGPathInstructionBase {
  instructionToString(): string {
    return 'Z';
  }
}

/**
 * SVGPathBuilder is a class that helps build a string representation of a path
 * for an SVG.
 *
 * It is created here primarily as an effort to add readability to the
 * construction of SVG path string creation.
 */
export default class SVGPathBuilder {
  private instructions: SVGPathInstruction[] = [];

  moveTo(x: number, y: number) {
    this.instructions.push(new SVGPathInstructionMoveTo(x, y));
  }

  lineTo(x: number, y: number) {
    this.instructions.push(new SVGPathInstructionLineTo(x, y));
  }

  arcTo(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcFlag: number,
    sweepFlag: number,
    x: number,
    y: number,
  ) {
    this.instructions.push(
      new SVGPathInstructionArcTo(
        rx,
        ry,
        xAxisRotation,
        largeArcFlag,
        sweepFlag,
        x,
        y,
      ),
    );
  }

  close() {
    this.instructions.push(new SVGPathInstructionClose());
  }

  instructionToString() {
    return this.instructions.join(' ');
  }
}
