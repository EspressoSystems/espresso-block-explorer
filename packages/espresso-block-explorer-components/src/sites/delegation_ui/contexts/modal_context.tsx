import React from 'react';
import './modal_context.css';

/**
 * ModalControls defines the interface for controlling a modal dialog.
 */
export interface ModalControls {
  /**
   * ref is a React ref to the HTMLDialogElement.
   */
  ref: React.Ref<HTMLDialogElement>;

  /**
   * open opens the modal dialog.
   */
  open: () => void;

  /**
   * close closes the modal dialog.
   */
  close: () => void;

  /**
   * setOpenState sets the open state of the modal dialog.
   *
   * NOTE: This is provided to allow a Dialog onClose callback to
   * set the open state to false when the dialog is closed by
   * user interaction (e.g., clicking outside the dialog).  This is
   * not meant to be consumed by users unless he/she knows what he/she
   * is doing.
   */
  setOpenState: (isOpen: boolean) => void;

  /**
   * isOpen indicates whether the modal dialog is open.
   */
  isOpen: boolean;
}

/**
 * ModalContext is a React context that provides
 * the modal controls for a dialog.
 */
export const ModalContext = React.createContext<ModalControls>({
  ref: null,
  open: () => {},
  close: () => {},
  setOpenState: () => {},
  isOpen: false,
});

/**
 * useModalState is a custom React hook that provides
 * the modal controls for a dialog.
 */
function useModalState(): ModalControls {
  const ref = React.useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => {
    if (ref.current && !isOpen) {
      ref.current.showModal?.();
      setIsOpen(true);
    }
  };

  const close = () => {
    if (ref.current && isOpen) {
      ref.current.close();
      setIsOpen(false);
    }
  };

  const setOpenState = (openState: boolean) => {
    setIsOpen(openState);
  };

  return { ref, open, close, setOpenState, isOpen };
}

/**
 * ProvideDialogModalControls is a React component that provides
 * the modal controls via ModalContext.
 */
export const ProvideDialogModalControls: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const modalState = useModalState();

  return (
    <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>
  );
};

/**
 * DialogModal is a React component that renders a dialog element
 * and connects it to the ModalContext for control.
 */
export const DialogModal: React.FC<
  React.DetailedHTMLProps<
    React.DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  > & { closedby?: 'none' | 'any' | 'closerequest' }
> = ({ children, ...rest }) => {
  const modalState = React.useContext(ModalContext);

  return (
    <dialog
      ref={modalState.ref}
      {...rest}
      onClose={() => {
        modalState.setOpenState(false);
      }}
    >
      {children}
    </dialog>
  );
};
