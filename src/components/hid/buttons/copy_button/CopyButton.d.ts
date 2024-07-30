import { default as React } from '../../../../../../../node_modules/react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    content: string;
}
/**
 * CopyButton is a button that allows the user to copy it's given text contents
 * into the text clipboard.  It handles the clipboard interaction for you, while
 * allowing the user the ability to override this behavior should that be
 * desired.
 *
 * It is recommended to not overwrite this behavior, however, as some extra
 * features are provided that help indicate to the user that their desired
 * copy was provided without issue.
 *
 * When interacted with, the button will copy the content passed to the
 * component via the content prop.  The content must be a string for it to be
 * able to be copied.
 *
 */
declare const CopyButton: React.FC<ButtonProps>;
export default CopyButton;
