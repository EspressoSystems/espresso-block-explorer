/**
 * SVGPathBuilder is a class that helps build a string representation of a path
 * for an SVG.
 *
 * It is created here primarily as an effort to add readability to the
 * construction of SVG path string creation.
 */
export default class SVGPathBuilder {
    private instructions;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    arcTo(rx: number, ry: number, xAxisRotation: number, largeArcFlag: number, sweepFlag: number, x: number, y: number): void;
    close(): void;
    instructionToString(): string;
}
