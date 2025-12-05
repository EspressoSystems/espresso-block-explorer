import CheckCircle from '@/components/visual/icons/feather/check_circle';
import Copy from '@/components/visual/icons/feather/copy';
import { Now } from '@/contexts/now_provider';
import { addClassToClassName } from '@/higher_order';
import React from 'react';
import './copy_button.css';

export interface ButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  content: string;
}

const SHOW_THRESHOLD_MS = 1000;

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
const CopyButton: React.FC<ButtonProps> = (props) => {
  const now = React.useContext(Now);
  const [lastClicked, setLastClicked] = React.useState<Date>(new Date(0));

  if (now.valueOf() - lastClicked.valueOf() < SHOW_THRESHOLD_MS) {
    return (
      <button
        {...props}
        className={addClassToClassName(props.className, 'bbtn--copy copied')}
        title="Copy Contents"
      >
        <CheckCircle />
      </button>
    );
  }

  return (
    <button
      {...props}
      className={addClassToClassName(props.className, 'bbtn--copy')}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();

        if (
          typeof window === 'undefined' ||
          !navigator ||
          !navigator.clipboard
        ) {
          return;
        }

        setLastClicked(new Date());

        navigator.clipboard.writeText(props.content);
      }}
      title="Copy Contents"
    >
      <Copy />
    </button>
  );
};

export default CopyButton;
