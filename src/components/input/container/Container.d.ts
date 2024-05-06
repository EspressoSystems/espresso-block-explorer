import { default as React } from 'react';

export interface InputContainerProps {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
    role?: string;
}
/**
 * InputContainer is a `div` container that assists in styling `input` elements.
 * Traditionally `input` elements are very difficult to style as they don't
 * exactly follow the content box model or the border box model.
 *
 * In order to normalize input elements it is helpful to have them follow some
 * other element's sizing rules directly instead of allowing them to have their
 * own.
 *
 * This is the purpose of the `InputContainer` component. It provides a sizable
 * container that follows the border box model in which an `input` element
 * can be fitted, and that `input` will attempt to fill all of the available
 * space of the `InputContainer`.
 */
export declare const InputContainer: React.FC<InputContainerProps>;
