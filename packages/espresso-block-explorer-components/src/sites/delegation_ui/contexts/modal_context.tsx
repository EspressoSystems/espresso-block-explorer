import React from 'react';
import './modal_context.css';

export interface ModalControls {
  ref: React.Ref<HTMLDialogElement>;
  open: () => void;
  close: () => void;
  setOpenState: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const ModalContext = React.createContext<ModalControls>({
  ref: null,
  open: () => {},
  close: () => {},
  setOpenState: () => {},
  isOpen: false,
});

function useModalState(): ModalControls {
  const ref = React.useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => {
    if (ref.current && !isOpen) {
      ref.current.showModal();
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

export const ProvideDialogModalControls: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const modalState = useModalState();

  return (
    <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>
  );
};

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
